const fs = require('fs');
let code = fs.readFileSync('components/CreativeIndustryCarousel.tsx', 'utf8');
code = code.replace(/import \{ getImageUrl \} from '@\/lib\/imagekit';\n/, '');
code = code.replace(/getImageUrl\(([^)]+)\)/g, "$1");
fs.writeFileSync('components/CreativeIndustryCarousel.tsx', code);
