const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');
code = code.replace(/'images\/\$([0-9]+) AUD New Notes\.png'/g, "'images/$$$1 AUD New Notes.jpg'");
fs.writeFileSync('app/page.tsx', code);
console.log("Updated extensions back to .jpg in page.tsx");
