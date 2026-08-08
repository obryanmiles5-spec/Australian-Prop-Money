import os
import re

app_dir = '.'
missing_alt = []

for root, dirs, files in os.walk(app_dir):
    if 'node_modules' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith('.tsx') or file.endswith('.jsx'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
                
            # Find all <Image ... /> tags
            images = re.findall(r'<Image([^>]*?)(?:/>|>)', content)
            for img in images:
                if 'alt=' not in img and 'alt {' not in img and 'alt\n' not in img:
                    missing_alt.append(path)

if missing_alt:
    print("Files with images potentially missing alt:")
    print(set(missing_alt))
else:
    print("All images seem to have alt tags")
