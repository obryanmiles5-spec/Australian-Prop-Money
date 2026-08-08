import os
import re

app_dir = 'app'
pages = [
    'app/about/page.tsx', 'app/blog/page.tsx', 'app/checkout/page.tsx',
    'app/contact/page.tsx', 'app/faq/page.tsx', 'app/page.tsx',
    'app/privacy-policy/page.tsx', 'app/refund-policy/page.tsx',
    'app/shipping-policy/page.tsx', 'app/shop/page.tsx',
    'app/terms/page.tsx', 'app/videos/page.tsx', 'app/wholesale/page.tsx'
]

for page in pages:
    if not os.path.exists(page):
        continue
    with open(page, 'r') as f:
        content = f.read()

    # The error looks like:
    #   alternates: {
    #     canonical: `${cleanBaseUrl}/about`,
    #   },
    #   /about`,
    #   }
    
    # Let's just fix the garbage that was inserted.
    # We want to remove lines that are just `  /something`, `  }` if it's garbage.
    
    # Let's use a simpler regex to clean up the mess between alternates and openGraph
    
    # We want to match:
    #   alternates: {
    #     canonical: `${cleanBaseUrl}/about`,
    #   },
    #   /about`,
    #   }
    # And replace with:
    #   alternates: {
    #     canonical: `${cleanBaseUrl}/about`,
    #   },
    
    content = re.sub(r"(alternates:\s*\{\s*canonical:\s*`\$\{cleanBaseUrl\}[^`]*`,\s*\},\s*)\n\s*\/[^`]*`,\s*\n\s*\}\s*\n", r"\1\n", content)
    
    # some files might have different garbage format
    # Let's try more robust cleanup
    
    with open(page, 'w') as f:
        f.write(content)

