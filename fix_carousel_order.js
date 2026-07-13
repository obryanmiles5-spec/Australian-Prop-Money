const fs = require('fs');
let code = fs.readFileSync('components/CreativeIndustryCarousel.tsx', 'utf8');

// The items are defined as an array of objects. We can just replace the whole array.
const newArray = `const industryCategories: CategoryItem[] = [
  {
    title: 'Commercial Advertising',
    category: 'BRANDS & MARKETING',
    description: 'Premium, photorealistic replica currency stacks styled for commercial ads, high-end promotional shoots, and billboard imagery.',
    imageUrl: getImageUrl('commercial-advertising.jpg'),
    icon: Sparkles
  },
  {
    title: 'Video Production',
    category: 'MUSIC CLIPS & PROMO',
    description: 'Specially engineered loose floating banknotes and weathered currency stacks designed for music videos and dynamic camera pans.',
    imageUrl: getImageUrl('video-production.jpg'),
    icon: Video
  },
  {
    title: 'Content Creation',
    category: 'SOCIAL MEDIA & WEB',
    description: 'High-quality props customized for digital content creators, online videos, and viral social media branding campaigns.',
    imageUrl: getImageUrl('content-creation.jpg'),
    icon: Smartphone
  },
  {
    title: 'Film Production',
    category: 'CINEMA & FEATURE FILMS',
    description: 'Supplying legal, color-calibrated and non-glare prop cash stacks for cinematic productions, independent dramas, and blockbusters.',
    imageUrl: getImageUrl('film-production.png'),
    icon: Film
  },
  {
    title: 'Photography',
    category: 'EDITORIAL & FLATLAY',
    description: 'Ultra-matte, reflection-free individual bills and pre-fanned prop bundles for luxury, fashion, and commercial product photography.',
    imageUrl: getImageUrl('photography.png'),
    icon: Camera
  },
  {
    title: 'Theatre',
    category: 'STAGE & LIVE PERFORMANCE',
    description: 'Pre-softened, cotton-bond replica notes offering durable handling, clear stage acoustics, and zero spotlight blinding glare.',
    imageUrl: getImageUrl('theatre.jpg'),
    icon: Layers
  }
];`;

code = code.replace(/const industryCategories: CategoryItem\[\] = \[([\s\S]*?)\];/, newArray);
fs.writeFileSync('components/CreativeIndustryCarousel.tsx', code);
console.log("Updated carousel order.");
