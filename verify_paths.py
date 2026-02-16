import json
import os

def check_manifest():
    with open('manifest.js', 'r', encoding='utf-8') as f:
        content = f.read()
        # Extract the array part from const OVERLAY_MANIFEST = [...]
        start = content.find('[')
        end = content.rfind(']') + 1
        manifest_str = content[start:end]
        manifest = json.loads(manifest_str)
    
    missing_files = []
    for item in manifest:
        for mode in item.get('modes', []):
            img_path = mode.get('image')
            if img_path:
                # Local paths are relative to root
                if not os.path.exists(img_path):
                    missing_files.append(img_path)
    
    if missing_files:
        print("Missing files found:")
        for f in missing_files:
            print(f"- {f}")
    else:
        print("All manifest files verified!")

if __name__ == "__main__":
    check_manifest()
