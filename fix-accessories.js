const fs = require('fs');
let code = fs.readFileSync('lib/products.ts', 'utf8');

// Canvas Bag
code = code.replace(
  /"image": "images\/products\/accessories\/canvas-bag\.jpg",\s*"gallery": \[\s*"images\/products\/accessories\/canvas-bag\.jpg"\s*\]/,
  `"image": "images/products/accessories/canvas-money-bag-1.jpg",
    "gallery": [
      "images/products/accessories/canvas-money-bag-2.webp"
    ]`
);

// Duffle Bag
code = code.replace(
  /"image": "images\/products\/accessories\/duffle-bag\.jpg",\s*"gallery": \[\s*"images\/products\/accessories\/duffle-bag\.jpg"\s*\]/,
  `"image": "images/products/accessories/duffel-bag-1.jpg",
    "gallery": [
      "images/products/accessories/duffle-bag-2.png"
    ]`
);

// Money Counter
code = code.replace(
  /"image": "images\/products\/accessories\/money-counter\.jpg",\s*"gallery": \[\s*"images\/products\/accessories\/money-counter\.jpg"\s*\]/,
  `"image": "images/products/accessories/money-counter-1.webp",
    "gallery": [
      "images/products/accessories/money-counter-2.webp"
    ]`
);

// Prop Money Gun
code = code.replace(
  /"image": "images\/products\/accessories\/prop-money-gun\.jpg",\s*"gallery": \[\s*"images\/products\/accessories\/prop-money-gun\.jpg"\s*\]/,
  `"image": "images/products/accessories/prop-money-gun-1.jpg",
    "gallery": [
      "images/products/accessories/prop-money-gun-2.jpg"
    ]`
);

// Silver Aluminium Briefcase
code = code.replace(
  /"image": "images\/products\/accessories\/silver-aluminium-briefcase\.jpg",\s*"gallery": \[\s*"images\/products\/accessories\/silver-aluminium-briefcase\.jpg"\s*\]/,
  `"image": "images/products/accessories/silver-aluminum-briefcase1.jpg",
    "gallery": [
      "images/products/accessories/silver-aluminum-briefcase2.jpg",
      "images/products/accessories/silver-aluminum-briefcase3.webp"
    ]`
);

fs.writeFileSync('lib/products.ts', code);
