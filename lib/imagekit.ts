const VERIFIED_BLOGS: Record<number, string> = {
  1: 'images/blog/1.jpg',
  2: 'images/blog/2.webp',
  5: 'images/blog/5.webp',
  7: 'images/blog/7.jpg',
  11: 'images/blog/11.jpg',
  12: 'images/blog/12.jpg',
  13: 'images/blog/13.jpg',
  14: 'images/blog/14.jpg',
  15: 'images/blog/15.jpg',
};

const VERIFIED_CATEGORIES: Record<string, string> = {
  'australian notes': 'images/categories/Australian Notes.webp',
  'bundle packs': 'images/categories/Bundle Packs.jpg',
  'tv props': 'images/categories/TV Props.webp',
  'tv-props': 'images/categories/TV Props.webp',
  'tv production props': 'images/categories/TV Props.webp',
  'photography props': 'images/categories/Photography Props.jpg',
  'photography-props': 'images/categories/Photography Props.jpg',
  'training currency': 'images/categories/Training Currency.jpg',
  'training-currency': 'images/categories/Training Currency.jpg',
  'movie prop money': 'images/categories/TV Props.webp',
  'movie-prop-money': 'images/categories/TV Props.webp',
};

const VERIFIED_PRODUCTS: Record<string, string> = {
  'movie-prop-money/action-heist-weathered-$50-stack': 'Movie Prop Money/Action-Heist-Weathered-$50-Stack.png',
  'movie-prop-money/crimson-stained-$100-prop-note-stack': 'Movie Prop Money/Crimson-Stained-$100-Prop-Note-Stack.png',
  'tv-props/cop-show-evidence-sealed-cash-bag': 'TV Props/Cop-Show-Evidence-Sealed-Cash-Bag.png',
  'tv-props/drug-bust-luxury-briefcase-layout': 'TV Props/Drug-Bust-Luxury-Briefcase-Layout.png',
  'tv-props/telenovela-wealth-cartel-brick': 'TV Props/Telenovela-Wealth-Cartel-Brick.png',
  'photography-props/studio-grade-high-contrast-$100-prop-stack': 'Photography Props/Studio-Grade-High-Contrast-$100-Prop-Stack.png',
  'photography-props/hip-hop-video-multi-denom-rain-pack': 'Photography Props/Hip-Hop-Video-Multi-Denom-Rain-Pack.jpg',
  'training-currency/bank-teller-training-starter-bundle': 'Training Currency/Bank-Teller-Training-Starter-Bundle.png',
  'bundle-packs/high-stakes-ransom-briefcase-pro-(20-stacks)': 'Bundle Packs/High-Stakes-Ransom-Briefcase-Pro-(20 Stacks).png',
  'bundle-packs/commercial-producer-bulk-reserve-(50-stacks)': 'Bundle Packs/Commercial-Producer-Bulk-Reserve-(50 Stacks).png',
  'bundle-packs/production-supply-wholesaler-mega-box': 'Bundle Packs/Production-Supply-Wholesaler-Mega-Box.png'
};

const PRODUCT_POOL = [
  'Images/Products/Movie Prop Money/Action-Heist-Weathered-$50-Stack.png',
  'Images/Products/TV Props/Cop-Show-Evidence-Sealed-Cash-Bag.png',
  'Images/Products/TV Props/Drug-Bust-Luxury-Briefcase-Layout.png',
  'Images/Products/TV Props/Telenovela-Wealth-Cartel-Brick.png',
  'Images/Products/Photography Props/Hip-Hop-Video-Multi-Denom-Rain-Pack.jpg',
  'Images/Products/Training Currency/Bank-Teller-Training-Starter-Bundle.png',
  'Images/Products/Bundle Packs/High-Stakes-Ransom-Briefcase-Pro-(20 Stacks).png',
  'Images/Products/Bundle Packs/Commercial-Producer-Bulk-Reserve-(50 Stacks).png',
  'Images/Products/Bundle Packs/Production-Supply-Wholesaler-Mega-Box.png'
];

function getDeterministicProductImage(path: string): string {
  let hash = 0;
  for (let i = 0; i < path.length; i++) {
    hash = (hash << 5) - hash + path.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % PRODUCT_POOL.length;
  return PRODUCT_POOL[index];
}

export function getImageUrl(src: string, width?: number, height?: number): string {
  if (!src) return '';
  
  // Handle absolute external URLs
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // Strip leading slash
  let clean = src.startsWith('/') ? src.slice(1) : src;

  // Remove any prepended australianpropmoney if present
  clean = clean.replace(/^australianpropmoney\//i, '');
  clean = clean.replace(/^\/?Images\//i, 'images/');

  // Ensure we separate the relative path inside images/
  let relPath = clean;
  if (clean.toLowerCase().startsWith('images/')) {
    relPath = clean.slice(7);
  }

  const lowerRel = relPath.toLowerCase();
  let finalRelPath = '';

  // 1. Hero handling
  if (lowerRel.startsWith('hero/')) {
    finalRelPath = 'images/hero/hero.webp';
  }
  // 2. Blog handling
  else if (lowerRel.startsWith('blog/')) {
    const match = lowerRel.match(/blog\/(\d+)/);
    const blogNum = match ? parseInt(match[1], 10) : 1;
    if (VERIFIED_BLOGS[blogNum]) {
      finalRelPath = VERIFIED_BLOGS[blogNum];
    } else {
      const workingKeys = [1, 2, 5, 7, 11, 12, 13, 14, 15];
      const mappedKey = workingKeys[blogNum % workingKeys.length];
      finalRelPath = VERIFIED_BLOGS[mappedKey];
    }
  }
  // 3. Category handling
  else if (lowerRel.startsWith('categories/')) {
    const catName = lowerRel.replace(/^categories\//, '').replace(/\.(jpg|webp|png|jpeg)$/, '');
    const cleanCatName = catName.trim();
    if (VERIFIED_CATEGORIES[cleanCatName]) {
      finalRelPath = VERIFIED_CATEGORIES[cleanCatName];
    } else {
      finalRelPath = 'images/categories/TV Props.webp';
    }
  }
  // 4. Product handling
  else if (lowerRel.startsWith('products/')) {
    const productKey = lowerRel.replace(/^products\//, '');
    const normalizedKey = productKey
      .replace(/%20/g, '-')
      .replace(/ /g, '-')
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .replace(/--+/g, '-');
      
    const matched = Object.keys(VERIFIED_PRODUCTS).find(k => {
      const normalizedK = k
        .replace(/%20/g, '-')
        .replace(/ /g, '-')
        .replace(/\(/g, '')
        .replace(/\)/g, '')
        .replace(/--+/g, '-');
      return normalizedKey.includes(normalizedK) || normalizedK.includes(normalizedKey);
    });

    if (matched) {
      finalRelPath = `Images/Products/${VERIFIED_PRODUCTS[matched]}`;
    } else {
      finalRelPath = getDeterministicProductImage(lowerRel);
    }
  }
  // 5. Fallback
  else {
    finalRelPath = `Images/${relPath}`;
  }

  const baseUrl = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';
  let url = `${baseUrl}/${finalRelPath}`;

  // Apply ImageKit real-time transformations if width or height are specified
  if (width || height) {
    const transforms: string[] = [];
    if (width) transforms.push(`w-${width}`);
    if (height) transforms.push(`h-${height}`);
    url += `?tr=${transforms.join(',')}`;
  }

  return url;
}

