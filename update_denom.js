const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

code = code.replace(/'denom-card-100\.png'/g, "'images/products/Australian Notes/New-Notes/100 AUD/100-aud-front'");
code = code.replace(/'denom-card-50\.png'/g, "'images/products/Australian Notes/New-Notes/50 AUD/50-aud-front'");
code = code.replace(/'denom-card-20\.png'/g, "'images/products/Australian Notes/New-Notes/20 AUD/20-aud-front'");

fs.writeFileSync('app/page.tsx', code);
