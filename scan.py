import os
import json
import re

def parse_cfg(content):
    config = {}
    for line in content.split('\n'):
        line = line.strip()
        if '=' in line and not line.startswith('#'):
            key, value = line.split('=', 1)
            config[key.strip()] = value.strip()
    return config

def scan_overlays(root_dir):
    overlays = []
    for root, dirs, files in os.walk(root_dir):
        # Skip assets folder to avoid self-reference or noise if needed
        # but usually .cfg are alongside images
        for file in files:
            if file.endswith('.cfg'):
                cfg_path = os.path.join(root, file)
                rel_path = os.path.relpath(cfg_path, root_dir)
                
                with open(cfg_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    config = parse_cfg(content)
                    
                    # Clean values (strip quotes and spaces)
                    for k in config:
                        val = config[k].strip()
                        if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
                            config[k] = val[1:-1].strip()
                        else:
                            config[k] = val

                    cfg_dir = os.path.dirname(rel_path).replace('\\', '/')
                    
                    def resolve_img(img_name):
                        if not img_name: return None
                        if cfg_dir: return f"{cfg_dir}/{img_name}"
                        return img_name

                    modes = []
                    num_overlays = int(config.get('overlays', 1))
                    
                    for i in range(num_overlays):
                        img = config.get(f'overlay{i}_overlay')
                        # Check for name, fallback to a descriptive default
                        raw_name = config.get(f'overlay{i}_name')
                        res_img = resolve_img(img) if img else None
                        
                        # Determine orientation hint
                        aspect = config.get(f'overlay{i}_aspect_ratio') or config.get('aspect_ratio')
                        orientation = None
                        
                        if aspect:
                            try:
                                if float(aspect) > 1:
                                    orientation = 'landscape'
                                else:
                                    orientation = 'portrait'
                            except:
                                pass
                        
                        if not orientation:
                            orientation = 'landscape'
                            img_str = (img or "").lower()
                            # Use raw_name for hint if available
                            name_hint = (raw_name or "").lower()
                            if 'portrait' in name_hint or '-p.' in img_str or '_p.' in img_str or 'port' in name_hint:
                                orientation = 'portrait'
                        
                        # Finalize name
                        if not raw_name or raw_name.startswith('Mode '):
                            display_name = f"{orientation.capitalize()} {i+1}"
                        else:
                            display_name = raw_name.strip('"').strip("'").capitalize()

                        # Viewport
                        vp_x = config.get(f'overlay{i}_viewport_x') or config.get('viewport_x')
                        vp_y = config.get(f'overlay{i}_viewport_y') or config.get('viewport_y')
                        vp_w = config.get(f'overlay{i}_viewport_width') or config.get('viewport_width')
                        vp_h = config.get(f'overlay{i}_viewport_height') or config.get('viewport_height')

                        modes.append({
                            "name": display_name,
                            "image": res_img,
                            "orientation": orientation,
                            "aspect": float(aspect) if aspect else None,
                            "viewport": {
                                "x": float(vp_x) if vp_x else None,
                                "y": float(vp_y) if vp_y else None,
                                "w": float(vp_w) if vp_w else None,
                                "h": float(vp_h) if vp_h else None
                            }
                        })

                    if modes:
                        category = "Standard"
                        if cfg_dir.startswith("extra/"):
                            category = "Extras"
                        elif cfg_dir.startswith("gamepads"):
                            category = "Gamepads"

                        overlays.append({
                            "name": os.path.splitext(file)[0].replace('-', ' ').title(),
                            "path": rel_path.replace('\\', '/'),
                            "category": category,
                            "modes": modes,
                            "content": content
                        })
    
    return overlays

if __name__ == "__main__":
    # The overlays are accessed via a junction in the project root
    base_data_dir = "overlays_data"
    target_dirs = ["gamepads", "extra"]
    all_results = []
    
    if not os.path.exists(base_data_dir):
        print(f"Erreur: Le dossier (ou junction) {base_data_dir} est introuvable.")
        exit(1)

    for d in target_dirs:
        # Full path for scanning, e.g. "overlays_data/gamepads"
        scan_path = os.path.join(base_data_dir, d)
        if os.path.exists(scan_path):
            print(f"Scanning {d} in {base_data_dir}...")
            results = scan_overlays(scan_path)
            for r in results:
                # Category based on top-level folder
                if d == "extra":
                    r["category"] = "Extras"
                elif d == "gamepads":
                    r["category"] = "Gamepads"
                else:
                    r["category"] = d.capitalize()
                
                # Prepend the scan_path to make them relative to project root
                # scan_path is "overlays_data/gamepads", r["path"] is "flat/file.cfg"
                r["path"] = os.path.join(scan_path, r["path"]).replace('\\', '/')
                for mode in r["modes"]:
                    if mode["image"]:
                        mode["image"] = os.path.join(scan_path, mode["image"]).replace('\\', '/')
                
                all_results.append(r)
    
    # Save as .js for local CORS compatibility
    js_content = f"const OVERLAY_MANIFEST = {json.dumps(all_results, indent=4)};"
    with open('manifest.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Scanné total de {len(all_results)} fichiers .cfg. Résultat dans manifest.js")
