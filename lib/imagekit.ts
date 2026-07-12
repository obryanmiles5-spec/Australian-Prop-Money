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
  'australian notes': 'images/categories/australian-notes.webp',
  'australian-notes': 'images/categories/australian-notes.webp',
  'bundle packs': 'images/categories/bundle-packs.jpg',
  'bundle-packs': 'images/categories/bundle-packs.jpg',
  'tv props': 'images/categories/tv-props.webp',
  'tv-props': 'images/categories/tv-props.webp',
  'tv production props': 'images/categories/tv-props.webp',
  'tv-production-props': 'images/categories/tv-props.webp',
  'photography props': 'images/categories/photography-props.jpg',
  'photography-props': 'images/categories/photography-props.jpg',
  'training currency': 'images/categories/training-currency.jpg',
  'training-currency': 'images/categories/training-currency.jpg',
  'movie prop money': 'images/categories/tv-props.webp',
  'movie-prop-money': 'images/categories/tv-props.webp',
};

const VERIFIED_PRODUCTS: Record<string, string> = {
  'movie-prop-money/action-heist-weathered-$50-stack': 'images/products/movie-prop-money/action-heist-weathered-$50-stack.png',
  'movie-prop-money/crimson-stained-$100-prop-note-stack': 'images/products/movie-prop-money/crimson-stained-$100-prop-note-stack.png',
  'movie-prop-money/action-heist-weathered-$100-stack': 'images/products/movie-prop-money/action-heist-weathered-$100-stack.png',
  'movie-prop-money/charred-&-singed-$50-prop-note-stack': 'images/products/movie-prop-money/charred-&-singed-$50-prop-note-stack.png',
  'movie-prop-money/water-logged-underworld-cash-stack': 'images/products/movie-prop-money/water-logged-underworld-cash-stack.png',
  'tv-props/cop-show-evidence-sealed-cash-bag': 'images/products/tv-props/cop-show-evidence-sealed-cash-bag.png',
  'tv-props/drug-bust-luxury-briefcase-layout': 'images/products/tv-props/drug-bust-luxury-briefcase-layout.png',
  'tv-props/telenovela-wealth-cartel-brick': 'images/products/tv-props/telenovela-wealth-cartel-brick.png',
  'tv-props/broadcaster-quality-$20-prop-stack': 'images/products/tv-props/broadcaster-quality-$20-prop-stack.png',
  'tv-props/game-show-grand-prize-jumbo-cash-pile': 'images/products/tv-props/game-show-grand-prize-jumbo-cash-pile.png',
  'photography-props/studio-grade-high-contrast-$100-prop-stack': 'images/products/photography-props/studio-grade-high-contrast-$100-prop-stack.png',
  'photography-props/hip-hop-video-multi-denom-rain-pack': 'images/products/photography-props/hip-hop-video-multi-denom-rain-pack.jpg',
  'photography-props/aesthetic-flatlay-loose-prop-currency-fan': 'images/products/photography-props/aesthetic-flatlay-loose-prop-currency-fan.jpg',
  'photography-props/instagram-influencer-luxury-cash-roll': 'images/products/photography-props/instagram-influencer-luxury-cash-roll.jpg',
  'photography-props/hyper-matte-close-up-macro-prop-stack': 'images/products/photography-props/hyper-matte-close-up-macro-prop-stack.jpg',
  'training-currency/bank-teller-training-starter-bundle': 'images/products/training-currency/bank-teller-training-starter-bundle.png',
  'training-currency/security-transport-cash-handler-trainer': 'images/products/training-currency/security-transport-cash-handler-trainer.jpg',
  'training-currency/gaming-club-croupier-practice-currency': 'images/products/training-currency/gaming-club-croupier-practice-currency.jpg',
  'training-currency/retail-cash-register-training-kit': 'images/products/training-currency/retail-cash-register-training-kit.jpg',
  'bundle-packs/high-stakes-ransom-briefcase-pro-(20-stacks)': 'images/products/bundle-packs/high-stakes-ransom-briefcase-pro-(20-stacks).png',
  'bundle-packs/commercial-producer-bulk-reserve-(50-stacks)': 'images/products/bundle-packs/commercial-producer-bulk-reserve-(50-stacks).png',
  'bundle-packs/production-supply-wholesaler-mega-box': 'images/products/bundle-packs/production-supply-wholesaler-mega-box.png',
  'bundle-packs/indie-film-crew-full-range-pack-(10-stacks)': 'images/products/bundle-packs/indie-film-crew-full-range-pack-(10-stacks).png'
};

const PRODUCT_POOL = [
  'images/products/movie-prop-money/action-heist-weathered-$50-stack.png',
  'images/products/tv-props/cop-show-evidence-sealed-cash-bag.png',
  'images/products/tv-props/drug-bust-luxury-briefcase-layout.png',
  'images/products/tv-props/telenovela-wealth-cartel-brick.png',
  'images/products/photography-props/hip-hop-video-multi-denom-rain-pack.jpg',
  'images/products/training-currency/bank-teller-training-starter-bundle.png',
  'images/products/bundle-packs/high-stakes-ransom-briefcase-pro-(20-stacks).png',
  'images/products/bundle-packs/commercial-producer-bulk-reserve-(50-stacks).png',
  'images/products/bundle-packs/production-supply-wholesaler-mega-box.png'
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
  
  // Normalize images prefix to lowercase
  if (clean.toLowerCase().startsWith('images/')) {
    clean = 'images/' + clean.slice(7);
  } else if (clean.toLowerCase().startsWith('products/')) {
    clean = 'images/products/' + clean.slice(9);
  } else if (clean.toLowerCase().startsWith('categories/')) {
    clean = 'images/categories/' + clean.slice(11);
  } else if (clean.toLowerCase().startsWith('blog/')) {
    clean = 'images/blog/' + clean.slice(5);
  } else if (clean.toLowerCase().startsWith('hero/')) {
    clean = 'images/hero/' + clean.slice(5);
  }

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
      finalRelPath = 'images/categories/tv-props.webp';
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
      finalRelPath = VERIFIED_PRODUCTS[matched];
    } else {
      finalRelPath = getDeterministicProductImage(lowerRel);
    }
  }
  // 5. Fallback
  else {
    finalRelPath = `images/${relPath}`;
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
