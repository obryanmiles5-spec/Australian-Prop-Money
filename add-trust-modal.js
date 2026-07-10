const fs = require('fs');
let code = fs.readFileSync('components/ProductDetailsModal.tsx', 'utf8');

const trustElements = `
          {/* Trust Elements */}
          <div className="pt-4 mt-2">
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[10px] text-gray-500 font-medium">
              <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500" /> Fast Australia-wide Dispatch</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-gold" /> Secure Checkout</div>
              <div className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-gold" /> Trusted by Film & TV</div>
              <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500" /> Premium Production Quality</div>
              <div className="col-span-2 flex items-center gap-1.5 mt-1 border-t pt-2"><HelpCircle className="w-3.5 h-3.5 text-blue-500" /> Wholesale Orders & Bulk Discounts Available</div>
            </div>
          </div>
`;

code = code.replace('        </div>\n\n      </div>\n    </div>', `        ${trustElements}</div>\n\n      </div>\n    </div>`);
fs.writeFileSync('components/ProductDetailsModal.tsx', code);
console.log('Added trust elements to modal');
