import re
import json

with open('lib/products.ts', 'r') as f:
    content = f.read()

# Updates for Old Notes
content = re.sub(r"(id: '50-aud-old-prop-money',\s*name: 'Buy \$50 AUD \(Old Design\)',\s*price: )\d+\.\d+", r"\g<1>200.00", content)
content = re.sub(r"(id: '20-aud-old-prop-money',\s*name: 'Buy \$20 AUD \(Old Design\)',\s*price: )\d+\.\d+", r"\g<1>200.00", content)
content = re.sub(r"(id: '10-aud-old-prop-money',\s*name: 'Buy \$10 AUD \(Old Design\)',\s*price: )\d+\.\d+", r"\g<1>200.00", content)

# Updates for New Notes
content = re.sub(r"(id: '50-aud-new-prop-money',\s*name: 'Buy \$50 AUD \(New Design\)',\s*price: )\d+\.\d+", r"\g<1>200.00", content)
content = re.sub(r"(id: '20-aud-new-prop-money',\s*name: 'Buy \$20 AUD \(New Design\)',\s*price: )\d+\.\d+", r"\g<1>200.00", content)
content = re.sub(r"(id: '10-aud-new-prop-money',\s*name: 'Buy \$10 AUD \(New Design\)',\s*price: )\d+\.\d+", r"\g<1>200.00", content)

with open('lib/products.ts', 'w') as f:
    f.write(content)
