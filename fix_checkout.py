import re

with open('app/checkout/ClientPage.tsx', 'r') as f:
    content = f.read()

content = content.replace("if (isOrderSimulated && simulatedOrderDetails) {", "if (isOrderSimulated && simulatedOrderDetails && cart.length === 0) {")

with open('app/checkout/ClientPage.tsx', 'w') as f:
    f.write(content)
