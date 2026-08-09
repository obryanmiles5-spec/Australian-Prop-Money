import re

with open('app/product/[id]/ProductDetailClient.tsx', 'r') as f:
    content = f.read()

target = """            <p className="text-xs text-gray-500 leading-relaxed max-w-xl">
              {product.longDescription}
            </p>"""

replacement = """            <p className="text-xs text-gray-500 leading-relaxed max-w-xl">
              {product.longDescription}
            </p>
            
            {product.category === 'australian-notes' && (
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl mt-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-black mb-3">Value Received Per Stack</h4>
                {product.name.includes('New') ? (
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    <li><span className="font-bold">$100s denomination</span> for $250 you get <span className="font-bold text-green-700">$25,000 AUD</span> worth prop money</li>
                    <li><span className="font-bold">$50s denomination</span> for $200 you get <span className="font-bold text-green-700">$10,000 AUD</span> worth prop money</li>
                    <li><span className="font-bold">$20s denomination</span> for $200 you get <span className="font-bold text-green-700">$5,000 AUD</span> worth prop money</li>
                    <li><span className="font-bold">$10s denomination</span> for $200 you get <span className="font-bold text-green-700">$3,000 AUD</span> worth prop money</li>
                  </ul>
                ) : (
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    <li><span className="font-bold">$100s denomination</span> for $250 you get <span className="font-bold text-green-700">$30,000 AUD</span> worth prop money</li>
                    <li><span className="font-bold">$50s denomination</span> for $200 you get <span className="font-bold text-green-700">$15,000 AUD</span> worth prop money</li>
                    <li><span className="font-bold">$20s denomination</span> for $200 you get <span className="font-bold text-green-700">$10,000 AUD</span> worth prop money</li>
                    <li><span className="font-bold">$10s denomination</span> for $200 you get <span className="font-bold text-green-700">$5,000 AUD</span> worth prop money</li>
                  </ul>
                )}
              </div>
            )}"""

content = content.replace(target, replacement)

with open('app/product/[id]/ProductDetailClient.tsx', 'w') as f:
    f.write(content)

