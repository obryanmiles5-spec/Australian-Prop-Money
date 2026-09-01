import re

with open('app/checkout/ClientPage.tsx', 'r') as f:
    content = f.read()

replacement = """                <div className="space-y-1.5 border-b pb-2 border-gray-100">
                  <span className="text-gray-400 block font-bold uppercase tracking-wider text-[8px]">USDT (TRC20) Wallet Address</span>
                  <div className="flex gap-2 items-center bg-white p-2 rounded border justify-between">
                    <span className="text-black font-semibold select-all break-all">TPKN5X472PTe6NrjwjD1GYhqqxZcmR1c4g</span>
                    <button onClick={() => handleCopy('TPKN5X472PTe6NrjwjD1GYhqqxZcmR1c4g', 'USDT')} className="text-gold hover:underline p-1 shrink-0 bg-gray-50 rounded">
                      {copiedState === 'USDT' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-1.5 border-b pb-2 border-gray-100 mt-2">
                  <span className="text-gray-400 block font-bold uppercase tracking-wider text-[8px]">Bitcoin (BTC) Wallet Address</span>
                  <div className="flex gap-2 items-center bg-white p-2 rounded border justify-between">
                    <span className="text-black font-semibold select-all break-all">bc1qz0u5ctpj9v2fnn9mj5dlfsma9f533jjse9sxpa</span>
                    <button onClick={() => handleCopy('bc1qz0u5ctpj9v2fnn9mj5dlfsma9f533jjse9sxpa', 'BTC')} className="text-gold hover:underline p-1 shrink-0 bg-gray-50 rounded">
                      {copiedState === 'BTC' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>"""

content = re.sub(r"                <div className=\"space-y-1\.5 border-b pb-2 border-gray-100\">\n                  <span className=\"text-gray-400 block font-bold uppercase tracking-wider text-\[8px\]\">Bitcoin \(BTC\) Wallet Address</span>\n                  <div className=\"flex gap-2 items-center bg-white p-2 rounded border justify-between\">\n                    <span className=\"text-black font-semibold select-all break-all\">bc1qz0u5ctpj9v2fnn9mj5dlfsma9f533jjse9sxpa</span>\n                    <button onClick=\{\(\) => handleCopy\('bc1qz0u5ctpj9v2fnn9mj5dlfsma9f533jjse9sxpa', 'BTC'\)\} className=\"text-gold hover:underline p-1 shrink-0 bg-gray-50 rounded\">\n                      \{copiedState === 'BTC' \? 'Copied' : <Copy className=\"w-3\.5 h-3\.5\" />\}\n                    </button>\n                  </div>\n                </div>", replacement, content, flags=re.MULTILINE)

with open('app/checkout/ClientPage.tsx', 'w') as f:
    f.write(content)

print("Updated post checkout crypto text")
