import os

files_to_update = [
    'app/checkout/ClientPage.tsx',
    'app/faq/ClientPage.tsx',
    'app/contact/ClientPage.tsx',
    'app/layout.tsx',
    'app/wholesale/ClientPage.tsx',
    'components/Footer.tsx',
    'components/WholesaleForm.tsx',
    'components/WhatsAppChat.tsx',
    '.env.example'
]

for file_path in files_to_update:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r') as f:
        content = f.read()
    
    # replace raw digits
    content = content.replace('61480852682', '61468187340')
    # replace formatted string
    content = content.replace('+61 480 852 682', '+61 468 187 340')
    # replace alternate formatted
    content = content.replace('+61480852682', '+61468187340')
    
    with open(file_path, 'w') as f:
        f.write(content)

print("Replacement complete.")
