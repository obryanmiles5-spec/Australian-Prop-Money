const fs = require('fs');
const code = fs.readFileSync('lib/products.ts', 'utf8');
const regex = /"id": "([^"]+)",\s*"name": "([^"]+)"/g;
let match;
while ((match = regex.exec(code)) !== null) {
  console.log(`${match[1]} | ${match[2]}`);
}
