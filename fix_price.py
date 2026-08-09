import re

with open('lib/products.ts', 'r') as f:
    content = f.read()

# Replace price for 100-aud-old-prop-money
content = re.sub(r"(id: '100-aud-old-prop-money',\s*name: 'Buy \$100 AUD \(Old Design\)',\s*price: )200\.00,", r"\g<1>250.00,", content)

# Replace price for 100-aud-new-prop-money
content = re.sub(r"(id: '100-aud-new-prop-money',\s*name: 'Buy \$100 AUD \(New Design\)',\s*price: )200\.00,", r"\g<1>250.00,", content)

with open('lib/products.ts', 'w') as f:
    f.write(content)
