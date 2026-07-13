const fs = require('fs');

let code = fs.readFileSync('lib/products.ts', 'utf8');
let updatedCode = code.replace(/"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",([\s\S]*?)"image":\s*"([^"]+)",\s*"gallery":\s*\[([\s\S]*?)\]/g, (match, id, name, middle, oldImage, oldGallery) => {
    
    // We need to recreate the oldImage string based on the id and name
    let restoredImage = '';
    
    if (id.includes('australian-notes/classic-notes/10-aud')) restoredImage = 'images/products/australian-notes/classic-notes/10-aud/10-aud-front.jpg';
    else if (id.includes('australian-notes/classic-notes/20-aud')) restoredImage = 'images/products/australian-notes/classic-notes/20-aud/20-aud-front.png';
    else if (id.includes('australian-notes/classic-notes/50-aud')) restoredImage = 'images/products/australian-notes/classic-notes/50-aud/50-aud-front.jpg';
    else if (id.includes('australian-notes/classic-notes/100-aud')) restoredImage = 'images/products/australian-notes/classic-notes/100-aud/100-aud-front.jpg';
    else if (id.includes('australian-notes/new-notes/10-aud')) restoredImage = 'images/products/australian-notes/new-notes/10-aud/10-aud-front.jpg';
    else if (id.includes('australian-notes/new-notes/20-aud')) restoredImage = 'images/products/australian-notes/new-notes/20-aud/20-aud-front.jpg';
    else if (id.includes('australian-notes/new-notes/50-aud')) restoredImage = 'images/products/australian-notes/new-notes/50-aud/50-aud-front.jpg';
    else if (id.includes('australian-notes/new-notes/100-aud')) restoredImage = 'images/products/australian-notes/new-notes/100-aud/100-aud-front.jpg';
    else {
        // For others, the original was generally:
        // images/products/CATEGORY/NAME_WITH_DOLLARS.ext
        
        // determine category from id
        // e.g. "movie-prop-money/..." -> "movie-prop-money"
        // Wait, the id is just the slug. The ID didn't have category? 
        // Oh wait, in my previous grep, the ID might have been just the slug.
        // Let's look at the old grep:
        // "image": "images/products/movie-prop-money/action-heist-weathered-$100-stack.png"
        
        let cat = 'movie-prop-money';
        if (id.includes('cop-show') || id.includes('broadcaster') || id.includes('drug-bust') || id.includes('game-show') || id.includes('telenovela')) {
            cat = 'tv-props';
        } else if (id.includes('studio-grade') || id.includes('aesthetic') || id.includes('instagram') || id.includes('hyper-matte') || id.includes('hip-hop')) {
            cat = 'photography-props';
        } else if (id.includes('bank-teller') || id.includes('security') || id.includes('gaming-club') || id.includes('retail') || id.includes('classroom')) {
            cat = 'training-currency';
        } else if (id.includes('millionaire') || id.includes('indie-film') || id.includes('high-stakes') || id.includes('commercial-producer') || id.includes('production-supply')) {
            cat = 'bundle-packs';
        } else if (id.includes('canvas') || id.includes('duffle') || id.includes('money-counter') || id.includes('gun') || id.includes('briefcase')) {
            cat = 'accessories';
        }
        
        let baseFileName = name.toLowerCase().replace(/ /g, '-').replace(/&/g, '&'); // Wait, "Charred & Singed" -> charred-&-singed
        // The old grep: "action-heist-weathered-$100-stack.png"
        // name was "Action Heist Weathered $100 Stack"
        baseFileName = name.toLowerCase().replace(/ /g, '-');
        restoredImage = `images/products/${cat}/${baseFileName}.png`;
        if (name === "Aesthetic Flatlay Loose Prop Currency Fan") restoredImage = `images/products/${cat}/${baseFileName}.jpg`;
    }
    
    return `"id": "${id}",\n    "name": "${name}",${middle}"image": "${restoredImage}",\n    "gallery": [\n      "${restoredImage}"\n    ]`;
});

fs.writeFileSync('lib/products.ts', updatedCode);
console.log("Restored products.ts");
