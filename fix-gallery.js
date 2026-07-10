const fs = require('fs');
const file = 'app/product/[id]/ProductDetailClient.tsx';
let code = fs.readFileSync(file, 'utf8');
code = code.replace(
  /const galleryImages = [\s\S]*?\];/g,
  `const galleryImages = product.gallery && product.gallery.length > 0 ? [product.image, ...product.gallery] : [product.image];`
);
fs.writeFileSync(file, code);
