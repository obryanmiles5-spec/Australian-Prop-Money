import os
import re

app_dir = 'app'
pages = []

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file == 'page.tsx':
            pages.append(os.path.join(root, file))

for page in pages:
    if 'product' in page or 'blog/[id]' in page:
        continue # Already dynamic
    
    with open(page, 'r') as f:
        content = f.read()
    
    if 'export const metadata: Metadata = {' not in content:
        continue

    # Extract title and description
    title_match = re.search(r"title:\s*'([^']+)'", content)
    desc_match = re.search(r"description:\s*'([^']+)'", content)
    url_match = re.search(r"canonical:\s*`\$\{cleanBaseUrl\}([^`]*)`", content)
    
    if not title_match or not desc_match or not url_match:
        continue
        
    title = title_match.group(1)
    desc = desc_match.group(1)
    url_path = url_match.group(1)

    # Remove existing openGraph and twitter blocks if any
    content = re.sub(r"openGraph:\s*\{[^}]+\},?", "", content, flags=re.DOTALL)
    content = re.sub(r"twitter:\s*\{[^}]+\},?", "", content, flags=re.DOTALL)

    new_metadata_content = f"""  openGraph: {{
    title: '{title}',
    description: '{desc}',
    url: `${{cleanBaseUrl}}{url_path}`,
    type: 'website',
  }},
  twitter: {{
    card: 'summary_large_image',
    title: '{title}',
    description: '{desc}',
  }},
"""
    
    # insert before the closing brace of metadata
    content = re.sub(r"(export const metadata: Metadata = \{.*?)(\n\};)", r"\1\n" + new_metadata_content + r"\2", content, flags=re.DOTALL)

    with open(page, 'w') as f:
        f.write(content)

