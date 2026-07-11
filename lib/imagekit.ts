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

const PRODUCT_POOL = [
  'images/categories/Australian Notes.webp',
  'images/categories/Bundle Packs.jpg',
  'images/categories/TV Props.webp',
  'images/categories/Photography Props.jpg',
  'images/categories/Training Currency.jpg',
  'images/blog/1.jpg',
  'images/blog/2.webp',
  'images/blog/5.webp',
  'images/blog/7.jpg',
  'images/blog/11.jpg',
  'images/blog/12.jpg',
  'images/blog/13.jpg',
  'images/blog/14.jpg',
  'images/blog/15.jpg',
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
    finalRelPath = getDeterministicProductImage(lowerRel);
  }
  // 5. Fallback
  else {
    finalRelPath = `images/${relPath}`;
  }

  // Read dynamic ImageKit Base endpoint from env
  const baseUrl = (process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/ukpeptides').replace(/\/+$/, '');

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

