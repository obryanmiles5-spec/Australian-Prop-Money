import re

with open('app/checkout/ClientPage.tsx', 'r') as f:
    content = f.read()

target = """            <div className="space-y-2.5">
              
              {/* EFT Bank */}"""

replacement = """            <div className="space-y-2.5">

              {/* Credit Card */}
              <label 
                className={`p-3.5 border rounded-2xl flex items-start gap-3 cursor-pointer transition-all ${
                  paymentMethod === 'creditcard' 
                    ? 'border-black bg-black/5' 
                    : 'border-gray-200 bg-white hover:border-gray-400'
                }`}
                id="checkout-pay-label-creditcard"
              >
                <input
                  type="radio"
                  name="checkoutPaymentMethod"
                  value="creditcard"
                  checked={paymentMethod === 'creditcard'}
                  onChange={() => setPaymentMethod('creditcard')}
                  className="mt-1 text-black focus:ring-0 focus:outline-none focus:ring-offset-0 focus:ring-transparent focus:border-transparent cursor-pointer"
                />
                <div className="text-xs">
                  <span className="font-bold text-black block flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5" /> Credit / Debit Card</span>
                  <span className="text-gray-500 mt-1 block">Secure online checkout via Flutterwave. Link opens securely upon order submission.</span>
                </div>
              </label>

              {/* EFT Bank */}"""

content = content.replace(target, replacement)

with open('app/checkout/ClientPage.tsx', 'w') as f:
    f.write(content)
