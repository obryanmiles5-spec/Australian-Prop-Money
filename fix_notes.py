import re

with open('context/CartContext.tsx', 'r') as f:
    content = f.read()

content = re.sub(r"\n\s*Note: Please note that Australian Prop House is officially affiliated with The Bookfever LLC, FedEx, and other authorized partners\. Accordingly, payments for client transactions may be processed through our official partner account, The Bookfever LLC, which forms part of our authorized payment network\.", "", content)

with open('context/CartContext.tsx', 'w') as f:
    f.write(content)

with open('app/checkout/ClientPage.tsx', 'r') as f:
    checkout = f.read()

checkout = re.sub(r"\n\s*<p className=\"text-gray-500 mt-2 bg-gray-100 p-2 rounded\">\n\s*Please note that Australian Prop House is officially affiliated with The Bookfever LLC.*?<\/p>", "", checkout, flags=re.DOTALL)

checkout = re.sub(r"\n\s*<div className=\"mt-2 bg-gray-50 border border-gray-100 p-2 rounded text-\[9px\] text-gray-500\">\n\s*<strong className=\"text-black\">Note:<\/strong> Australian Prop House is officially affiliated with The Bookfever LLC.*?<\/div>", "", checkout, flags=re.DOTALL)

with open('app/checkout/ClientPage.tsx', 'w') as f:
    f.write(checkout)

print("Notes removed")
