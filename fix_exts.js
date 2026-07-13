const fs = require('fs');

// Fix products.ts
let code = fs.readFileSync('lib/products.ts', 'utf8');
code = code.replace(/"image":\s*"images\/([^"]+)\.(jpg|jpeg|png|webp)"/g, '"image": "images/$1.png"');
code = code.replace(/"gallery":\s*\[\s*"images\/([^"]+)\.(jpg|jpeg|png|webp)"\s*\]/g, '"gallery": [\n      "images/$1.png"\n    ]');
fs.writeFileSync('lib/products.ts', code);

// Fix CreativeIndustryCarousel.tsx
let carouselCode = fs.readFileSync('components/CreativeIndustryCarousel.tsx', 'utf8');
carouselCode = carouselCode.replace(/imageUrl:\s*'images\/([^']+)\.(jpg|jpeg|png|webp)'/g, "imageUrl: 'images/$1.png'");
fs.writeFileSync('components/CreativeIndustryCarousel.tsx', carouselCode);

console.log("Updated extensions to .png");
