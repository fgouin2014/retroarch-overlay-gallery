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
                        if cfg_dir:
                            return f"{cfg_dir}/{img_name}"
                        return img_name

                    portrait = None
                    landscape = None

                    # Check multiple overlays (often 0 or 1, but can be more)
                    for i in range(6):
                        img = config.get(f'overlay{i}_overlay')
                        name = config.get(f'overlay{i}_name', '').lower()
                        
                        if img:
                            res_img = resolve_img(img)
                            if "portrait" in name or ("-p." in img.lower()) or ("_p." in img.lower()):
                                portrait = res_img
                            elif "landscape" in name or ("-l." in img.lower()) or ("_l." in img.lower()):
                                landscape = res_img
                            else:
                                # Default assignments if not explicitly named
                                if i == 0 and not landscape: landscape = res_img
                                if i == 1 and not portrait: portrait = res_img
                    
                    # Fallback if only one found but both null due to naming
                    if not portrait and not landscape:
                        first_img = config.get('overlay0_overlay') or config.get('overlay1_overlay')
                        if first_img:
                            landscape = resolve_img(first_img)

                    if portrait or landscape:
                        overlays.append({
                            "name": os.path.splitext(file)[0].replace('-', ' ').title(),
                            "path": rel_path.replace('\\', '/'),
                            "portrait": portrait,
                            "landscape": landscape,
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
