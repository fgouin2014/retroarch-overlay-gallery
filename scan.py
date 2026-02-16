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
                        raw_name = config.get(f'overlay{i}_name', f'Mode {i}')
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
                            name_str = raw_name.lower()
                            if 'portrait' in name_str or '-p.' in img_str or '_p.' in img_str or 'port' in name_str:
                                orientation = 'portrait'
                        
                        # Extract Viewport
                        vp_x = config.get(f'overlay{i}_viewport_x') or config.get('viewport_x')
                        vp_y = config.get(f'overlay{i}_viewport_y') or config.get('viewport_y')
                        vp_w = config.get(f'overlay{i}_viewport_width') or config.get('viewport_width')
                        vp_h = config.get(f'overlay{i}_viewport_height') or config.get('viewport_height')

                        modes.append({
                            "name": raw_name.capitalize(),
                            "image": res_img,
                            "orientation": orientation,
                            "viewport": {
                                "x": float(vp_x) if vp_x else None,
                                "y": float(vp_y) if vp_y else None,
                                "w": float(vp_w) if vp_w else None,
                                "h": float(vp_h) if vp_h else None
                            }
                        })

                    if modes:
                        category = "Standard"
                        if "extra/Touch-Overlays" in cfg_dir:
                            category = "Extras"
                        elif "gamepads" in cfg_dir:
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
    base_dir = "."
    results = scan_overlays(base_dir)
    
    # Save as .js for local CORS compatibility
    js_content = f"const OVERLAY_MANIFEST = {json.dumps(results, indent=4)};"
    with open('manifest.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Scanné {len(results)} fichiers .cfg. Résultat dans manifest.js")
