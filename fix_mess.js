const fs = require('fs');
let code = fs.readFileSync('lib/products.ts', 'utf8');

// The mess is:
//     image: 00-Stack',
//     gallery: ['images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack',
//     id: 'action-heist-100-aged',

code = code.replace(
  /image: 00-Stack',\n\s*gallery: \['images\/products\/Movie-Prop-Money\/Action-Heist-Weathered-\$100-Stack',\n\s*id: 'action-heist-100-aged',/g,
  "image: 'images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack',\n    gallery: ['images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack'],\n    id: 'action-heist-100-aged',"
);

// We might have others?
code = code.replace(
  /image: 0-Stack',\n\s*gallery: \['images\/products\/Movie-Prop-Money\/Action-Heist-Weathered-\$50-Stack',\n\s*id: 'action-heist-50-aged',/g,
  "image: 'images/products/Movie-Prop-Money/Action-Heist-Weathered-$50-Stack',\n    gallery: ['images/products/Movie-Prop-Money/Action-Heist-Weathered-$50-Stack'],\n    id: 'action-heist-50-aged',"
);

code = code.replace(
  /image: 00-Prop-Note-Stack',\n\s*gallery: \['images\/products\/Movie-Prop-Money\/Crimson-Stained-\$100-Prop-Note-Stack',\n\s*id: 'crimson-stained-100-stack',/g,
  "image: 'images/products/Movie-Prop-Money/Crimson-Stained-$100-Prop-Note-Stack',\n    gallery: ['images/products/Movie-Prop-Money/Crimson-Stained-$100-Prop-Note-Stack'],\n    id: 'crimson-stained-100-stack',"
);

code = code.replace(
  /image: 0-Prop-Note-Stack',\n\s*gallery: \['images\/products\/Movie-Prop-Money\/Charred-&-Singed-\$50-Prop-Note-Stack',\n\s*id: 'charred-singed-50-stack',/g,
  "image: 'images/products/Movie-Prop-Money/Charred-&-Singed-$50-Prop-Note-Stack',\n    gallery: ['images/products/Movie-Prop-Money/Charred-&-Singed-$50-Prop-Note-Stack'],\n    id: 'charred-singed-50-stack',"
);

code = code.replace(
  /image: 0-Prop-Stack',\n\s*gallery: \['images\/products\/TV-Props\/Broadcaster-Quality-\$20-Prop-Stack',\n\s*id: 'broadcaster-quality-20-stack',/g,
  "image: 'images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack',\n    gallery: ['images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack'],\n    id: 'broadcaster-quality-20-stack',"
);

code = code.replace(
  /image: 00-Prop-Stack',\n\s*gallery: \['images\/products\/Photography-Props\/Studio-Grade-High-Contrast-\$100-Prop-Stack',\n\s*id: 'studio-high-contrast-100',/g,
  "image: 'images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack',\n    gallery: ['images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack'],\n    id: 'studio-high-contrast-100',"
);


fs.writeFileSync('lib/products.ts', code);
