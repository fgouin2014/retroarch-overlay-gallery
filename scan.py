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
                    # RetroArch usually stops at 16 overlays, we check up to 10
                    for i in range(10):
                        img = config.get(f'overlay{i}_overlay')
                        if not img: continue
                        
                        raw_name = config.get(f'overlay{i}_name', f'Mode {i}')
                        res_img = resolve_img(img)
                        
                        # Determine orientation hint
                        orientation = 'landscape'
                        if 'portrait' in raw_name.lower() or '-p.' in img.lower() or '_p.' in img.lower():
                            orientation = 'portrait'
                        
                        modes.append({
                            "name": raw_name.capitalize(),
                            "image": res_img,
                            "orientation": orientation
                        })

                    if modes:
                        overlays.append({
                            "name": os.path.splitext(file)[0].replace('-', ' ').title(),
                            "path": rel_path.replace('\\', '/'),
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
