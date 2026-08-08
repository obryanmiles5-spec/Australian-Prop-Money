import os
import re

app_dir = 'app'
pages = []

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file == 'page.tsx':
            pages.append(os.path.join(root, file))

for page in pages:
    with open(page, 'r') as f:
        content = f.read()
        if 'export const metadata' not in content and 'export async function generateMetadata' not in content:
            print(f"Missing metadata in {page}")
        elif 'canonical:' not in content and 'alternates:' not in content:
            print(f"Missing canonical in {page}")

