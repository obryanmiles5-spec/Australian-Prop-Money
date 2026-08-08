import os

app_dir = 'app'
pages = []

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file == 'page.tsx':
            pages.append(os.path.join(root, file))

for page in pages:
    with open(page, 'r') as f:
        content = f.read()
        if 'openGraph:' not in content and 'export const metadata' in content:
            print(f"Missing openGraph in {page}")
        if 'twitter:' not in content and 'export const metadata' in content:
            print(f"Missing twitter in {page}")
