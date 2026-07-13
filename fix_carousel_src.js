const fs = require('fs');
let code = fs.readFileSync('components/CreativeIndustryCarousel.tsx', 'utf8');
code = code.replace(/imageUrl: '([^']+)'/g, (match, p1) => {
    if (p1.startsWith('images/')) return match;
    return `imageUrl: 'images/categories/${p1}'`;
});
fs.writeFileSync('components/CreativeIndustryCarousel.tsx', code);
