const fs = require('fs');
let lines = fs.readFileSync('lib/products.ts', 'utf8').split('\n');
let out = [];

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('image: 00-Stack')) continue;
  if (lines[i].includes('image: 00-Prop-Note-Stack')) continue;
  if (lines[i].includes('image: 00-Prop-Stack')) continue;
  if (lines[i].includes('image: 0-Stack')) continue;
  if (lines[i].includes('image: 0-Prop-Note-Stack')) continue;
  if (lines[i].includes('image: 0-Prop-Stack')) continue;

  out.push(lines[i]);
}

let code = out.join('\n');
fs.writeFileSync('lib/products.ts', code);
