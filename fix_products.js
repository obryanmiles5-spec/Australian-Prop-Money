const fs = require('fs');
let content = fs.readFileSync('lib/products.ts', 'utf8');
content = content.replace(/relatedProducts: string\[,\s*\{ id: 'rev-4'.*?\];/s, 'relatedProducts: string[];');
fs.writeFileSync('lib/products.ts', content);
