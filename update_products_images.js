const fs = require('fs');
let code = fs.readFileSync('lib/products.ts', 'utf8');

let updatedCode = code.replace(/"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",([\s\S]*?)"image":\s*"([^"]+)",\s*"gallery":\s*\[([\s\S]*?)\]/g, (match, id, name, middle, oldImage, oldGallery) => {
    const extMatch = oldImage.match(/\.([a-zA-Z0-9]+)$/);
    const ext = extMatch ? '.' + extMatch[1] : '.jpg';
    
    const newImage = name + ext;
    
    return `"id": "${id}",\n    "name": "${name}",${middle}"image": "${newImage}",\n    "gallery": [\n      "${newImage}"\n    ]`;
});

fs.writeFileSync('lib/products.ts', updatedCode);
console.log("Updated products.ts");
