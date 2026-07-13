const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');
code = code.replace(/'images\/\$([0-9]+) AUD New Notes\.(jpg|jpeg|png|webp)'/g, "'images/$$$1 AUD New Notes.png'");
fs.writeFileSync('app/page.tsx', code);
console.log("Updated extensions in page.tsx");
