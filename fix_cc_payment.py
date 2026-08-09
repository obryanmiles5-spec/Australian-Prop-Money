import re

with open('context/CartContext.tsx', 'r') as f:
    content = f.read()

target = """    } else if (paymentMethod === 'creditcard') {
      paymentInstructions = `
        Checkout Link: https://flutterwave.com/pay/xl8olgxzbsjy
        Please click the link above to complete your credit card payment.
        Reference: ${orderId}
      `;
    }"""

replacement = """    } else if (paymentMethod === 'creditcard') {
      paymentInstructions = `
        If you missed the secure checkout window, an administrator will email you the credit card payment link shortly.
        Reference: ${orderId}
      `;
    }"""

content = content.replace(target, replacement)

with open('context/CartContext.tsx', 'w') as f:
    f.write(content)

