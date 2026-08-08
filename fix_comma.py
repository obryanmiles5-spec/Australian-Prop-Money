import os

app_dir = 'app'
pages = [
    'app/privacy-policy/page.tsx', 'app/refund-policy/page.tsx',
    'app/shipping-policy/page.tsx', 'app/terms/page.tsx'
]

for page in pages:
    if not os.path.exists(page):
        continue
    with open(page, 'r') as f:
        content = f.read()

    # We need to find `  }\n  openGraph:` and replace with `  },\n  openGraph:`
    content = content.replace("  }\n  openGraph: {", "  },\n  openGraph: {")
    
    with open(page, 'w') as f:
        f.write(content)

