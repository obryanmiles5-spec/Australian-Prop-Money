const fs = require('fs');
let code = fs.readFileSync('app/layout.tsx', 'utf8');
code = code.replace(/import \{ getImageUrl \} from '@\/lib\/imagekit';\n/, '');
code = code.replace(/const defaultHeroImage = getImageUrl\('images\/hero\/hero.webp'\);/g, "const defaultHeroImage = 'images/hero/hero.webp';");
fs.writeFileSync('app/layout.tsx', code);
