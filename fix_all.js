const fs = require('fs');

// Fix products.ts
let code = fs.readFileSync('lib/products.ts', 'utf8');
let updatedCode = code.replace(/"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",([\s\S]*?)"image":\s*"([^"]+)",\s*"gallery":\s*\[([\s\S]*?)\]/g, (match, id, name, middle, oldImage, oldGallery) => {
    const extMatch = oldImage.match(/\.([a-zA-Z0-9]+)$/);
    const ext = extMatch ? '.' + extMatch[1] : '.jpg';
    
    // "match all of them respectively to their names"
    // "Source all images from imagekit home-folder images"
    const newImage = `images/${name}${ext}`;
    
    return `"id": "${id}",\n    "name": "${name}",${middle}"image": "${newImage}",\n    "gallery": [\n      "${newImage}"\n    ]`;
});
fs.writeFileSync('lib/products.ts', updatedCode);
console.log("Updated products.ts");

// Fix CreativeIndustryCarousel.tsx
let carouselCode = fs.readFileSync('components/CreativeIndustryCarousel.tsx', 'utf8');
carouselCode = carouselCode.replace(/title:\s*'([^']+)',\s*category:\s*'([^']+)',\s*imageUrl:\s*'([^']+)'/g, (match, title, category, oldImage) => {
    const extMatch = oldImage.match(/\.([a-zA-Z0-9]+)$/);
    const ext = extMatch ? '.' + extMatch[1] : '.png';
    const newImage = `images/${title}${ext}`;
    return `title: '${title}',\n    category: '${category}',\n    imageUrl: '${newImage}'`;
});
fs.writeFileSync('components/CreativeIndustryCarousel.tsx', carouselCode);
console.log("Updated CreativeIndustryCarousel.tsx");

