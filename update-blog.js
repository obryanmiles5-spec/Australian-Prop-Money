const fs = require('fs');
let code = fs.readFileSync('lib/products.ts', 'utf8');

// We will replace the content of each blog post to include HTML.
code = code.replace(/content: 'Filming in Australia.*?peace of mind. Never risk your production or legal standing by using non-compliant prints.',/, `content: \`Filming in Australia with replica currency is highly regulated. The Reserve Bank of Australia (RBA) sets strict rules to prevent counterfeit confusion while still allowing creative productions to thrive. 

<br><br>
<h3>Key RBA Guidelines</h3>
<ul>
<li>Must be significantly larger or smaller than genuine notes</li>
<li>Must clearly display words like "SPECIMEN" or "PROP ONLY"</li>
<li>Must be single-sided if true-to-size</li>
</ul>
<br>
Our products at <a href="/" class="text-gold underline hover:text-black">Australian Prop Money</a> are meticulously designed to ensure they are 100% RBA-compliant. 

<br><br>
<div class="bg-gray-50 p-4 border rounded my-4">
  <h4 class="font-bold mb-2">Need Compliant Props for your Next Shoot?</h4>
  <p class="mb-3">Explore our RBA-compliant <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a>.</p>
  <a href="/shop" class="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Shop Now</a>
</div>

<h3>Frequently Asked Questions</h3>
<strong>Can I use these notes for close-up shots?</strong>
<p>Yes! Our <a href="/?category=photography-props" class="text-gold underline">Photography Props</a> are designed specifically for high-detail close-ups without violating RBA guidelines.</p>
\`,`);

fs.writeFileSync('lib/products.ts', code);
console.log('Updated blog post 1');
