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
                    
                    # Extract image paths
                    portrait = config.get('overlay0_overlay')
                    landscape = config.get('overlay1_overlay')
                    
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
