import re

with open('app/checkout/ClientPage.tsx', 'r') as f:
    content = f.read()

replacement = """              >
                {(couponCode === 'PROPMONEYAU' || couponCode === 'USDT10') && (
                  <span className="absolute -top-1.5 -right-1 bg-red-500 text-white font-sans text-[7px] px-2 py-0.5 rounded-full animate-bounce">
                    {couponCode === 'PROPMONEYAU' ? '30% Off' : '10% Off'}
                  </span>
                )}
                <input
                  type="radio"
                  name="checkoutPaymentMethod"
                  value="crypto"
                  checked={paymentMethod === 'crypto'}
                  onChange={() => setPaymentMethod('crypto')}
                  className="mt-1 text-black focus:ring-0 focus:outline-none focus:ring-offset-0 focus:ring-transparent focus:border-transparent cursor-pointer"
                />
                <div className="text-xs">
                  <span className="font-bold text-black block">Cryptocurrency (USDT / BTC)</span>
                  <p className="text-gray-400 mt-0.5 leading-tight text-[10px]">Secure, fast, and anonymous. We offer an extra 10% discount on USDT transfers with coupon <strong>USDT10</strong> (or 30% for BTC with <strong>PROPMONEYAU</strong>).</p>
                </div>
              </label>"""

content = re.sub(r"              >\n                \{couponCode === 'PROPMONEYAU' && \([\s\S]*?              </label>", replacement, content, flags=re.MULTILINE)

with open('app/checkout/ClientPage.tsx', 'w') as f:
    f.write(content)
print("Updated checkout page")
