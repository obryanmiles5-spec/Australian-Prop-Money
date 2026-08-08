import re

with open('app/checkout/ClientPage.tsx', 'r') as f:
    content = f.read()

content = content.replace("} else if (method === 'whatsapp' } else if (method === 'whatsapp' && result.details) {} else if (method === 'whatsapp' && result.details) { result.details) {", "} else if (method === 'whatsapp' && result.details) {")

with open('app/checkout/ClientPage.tsx', 'w') as f:
    f.write(content)
