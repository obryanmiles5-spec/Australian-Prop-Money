const fs = require('fs');
let code = fs.readFileSync('lib/products.ts', 'utf8');
code = code.replace(/image: 'images\/blog\/(\d+)'/g, "image: 'images/blog/$1.jpg'");
fs.writeFileSync('lib/products.ts', code);
