import re

with open('context/CartContext.tsx', 'r') as f:
    content = f.read()

target = """        USDT (TRC-20) Address: TXYz89aXyZ89qRwX19BcdEfGhIjKlMnOpQ
        Bitcoin (BTC) Address: bc1qz0u5ctpj9v2fnn9mj5dlfsma9f533jjse9sxpa
        Ethereum (ETH) Address: 0x71C7656EC7ab88b098defB751B7401B5f6d8976F"""

replacement = """        Bitcoin (BTC) Address: bc1qz0u5ctpj9v2fnn9mj5dlfsma9f533jjse9sxpa"""

content = content.replace(target, replacement)

with open('context/CartContext.tsx', 'w') as f:
    f.write(content)
