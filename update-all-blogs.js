const fs = require('fs');
let code = fs.readFileSync('lib/products.ts', 'utf8');

const ctas = [
  `<div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Upgrade Your Production Value</h4>
    <p class="text-sm text-gray-600 mb-4">Discover our <a href="/?category=movie-prop-money" class="text-gold underline hover:text-black transition-colors">Cinematic Prop Money Stacks</a> designed specifically for 4K cameras.</p>
    <a href="/shop" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">Shop The Collection</a>
  </div>`,
  `<div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Need Bulk Props for a Feature Film?</h4>
    <p class="text-sm text-gray-600 mb-4">We offer heavy discounts on <a href="/wholesale" class="text-gold underline hover:text-black transition-colors">Wholesale Orders</a> for major productions.</p>
    <a href="/wholesale" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">Request a Quote</a>
  </div>`,
  `<div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Perfect for Music Videos</h4>
    <p class="text-sm text-gray-600 mb-4">Get the perfect money rain effect with our <a href="/?category=bundle-packs" class="text-gold underline hover:text-black transition-colors">Bundle Packs</a>.</p>
    <a href="/shop" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">View Bundles</a>
  </div>`
];

const faqs = `
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`;

let blogIndex = 0;
code = code.replace(/content:\s*'([^']+)'/g, (match, content) => {
  if (content.includes('<div class=')) return match; // Already updated
  
  blogIndex++;
  const cta = ctas[blogIndex % ctas.length];
  
  const newContent = `${content} <br><br> ${cta} ${faqs}`;
  return `content: \`${newContent}\``;
});

fs.writeFileSync('lib/products.ts', code);
console.log(`Updated ${blogIndex} blog posts`);
