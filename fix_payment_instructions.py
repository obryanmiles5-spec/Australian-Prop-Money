import re

with open('context/CartContext.tsx', 'r') as f:
    content = f.read()

target = """    let paymentInstructions = '';
    if (paymentMethod === 'bank') {
      paymentInstructions = `
        Account Name: Australian Prop Money Pty Ltd
        BSB: 062-900 (Commonwealth Bank of Australia)
        Account Number: 1048 3922
        Reference: ${orderId}
      `;
    } else if (paymentMethod === 'payid') {
      paymentInstructions = `
        PayID Type: Email
        PayID Address: info@australianpropmoney.org
        Registered Name: Australian Prop Money Pty Ltd
        Reference: ${orderId}
      `;
    }"""

replacement = """    let paymentInstructions = '';
    if (paymentMethod === 'bank') {
      paymentInstructions = `
        An administrator will email you the Bank Transfer details shortly.
        Reference: ${orderId}
      `;
    } else if (paymentMethod === 'payid') {
      paymentInstructions = `
        An administrator will email you the PayID details shortly.
        Reference: ${orderId}
      `;
    }"""

content = content.replace(target, replacement)

# resetOrderSimulation in addToCart
add_to_cart_target = """  const addToCart = (product: Product, quantity: number, options?: CartItem['options']) => {
    const cartItemId = generateCartItemId(product.id, options);
    const existingIndex = cart.findIndex((item) => item.id === cartItemId);
    const itemPrice = calculateItemPrice(product, options);
    
    let newCart = [...cart];"""

add_to_cart_replacement = """  const addToCart = (product: Product, quantity: number, options?: CartItem['options']) => {
    resetOrderSimulation();
    
    const cartItemId = generateCartItemId(product.id, options);
    const existingIndex = cart.findIndex((item) => item.id === cartItemId);
    const itemPrice = calculateItemPrice(product, options);
    
    let newCart = [...cart];"""

content = content.replace(add_to_cart_target, add_to_cart_replacement)


with open('context/CartContext.tsx', 'w') as f:
    f.write(content)

