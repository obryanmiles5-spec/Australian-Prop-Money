const fs = require('fs');
const content = fs.readFileSync('lib/products.ts', 'utf8');
const products = content.split('const RAW_PRODUCTS: Product[] = [')[1].split('];')[0];
// Well, we can just replace the image names in the file.
