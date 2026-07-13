const fs = require('fs');
let code = fs.readFileSync('app/product/[id]/ProductDetailClient.tsx', 'utf8');
code = code.replace(/import \{ getImageUrl \} from '@\/lib\/imagekit';\n/, '');
code = code.replace(/getImageUrl\(([^)]+)\)/g, "$1");
fs.writeFileSync('app/product/[id]/ProductDetailClient.tsx', code);
