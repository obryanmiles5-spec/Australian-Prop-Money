import re

with open('app/checkout/ClientPage.tsx', 'r') as f:
    content = f.read()

target1 = "{details.paymentMethod === 'bank' ? 'Bank Transfer' : details.paymentMethod === 'payid' ? 'PayID Instant' : 'Crypto Address'}"
replacement1 = "{details.paymentMethod === 'bank' ? 'Bank Transfer' : details.paymentMethod === 'payid' ? 'PayID Instant' : details.paymentMethod === 'creditcard' ? 'Credit / Debit Card' : 'Crypto Address'}"

content = content.replace(target1, replacement1)

target2 = """            {details.paymentMethod === 'bank' && ("""
replacement2 = """            {details.paymentMethod === 'creditcard' && (
              <div className="bg-gray-50 p-5 rounded-2xl space-y-4 font-mono text-[11px] border text-center">
                <p className="text-gray-600 font-sans">
                  Please click the secure payment link below to complete your order via credit or debit card. 
                  The link should have automatically opened in a new tab.
                </p>
                <div className="flex justify-center mt-4">
                  <a 
                    href="https://flutterwave.com/pay/xl8olgxzbsjy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-gold-dark text-white hover:text-black font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Pay with Credit Card
                  </a>
                </div>
              </div>
            )}

            {details.paymentMethod === 'bank' && ("""

content = content.replace(target2, replacement2)

with open('app/checkout/ClientPage.tsx', 'w') as f:
    f.write(content)
