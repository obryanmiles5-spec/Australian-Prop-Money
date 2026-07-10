export function getImageUrl(src: string, width: number = 800, height: number = 600): string {
  if (!src) return '';
  
  // Handle absolute external URLs
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;

  // 1. High-quality Category & Hero image mapping (Unsplash)
  if (cleanSrc.includes('hero/hero.webp') || cleanSrc.includes('hero.webp')) {
    return 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=1200';
  }

  if (cleanSrc.includes('Movie-Prop-Money') || cleanSrc.includes('Movie-Prop')) {
    return 'https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&q=80&w=800';
  }

  if (cleanSrc.includes('TV Props') || cleanSrc.includes('TV-Props') || cleanSrc.includes('Broadcaster') || cleanSrc.includes('Cop-Show') || cleanSrc.includes('Drug-Bust') || cleanSrc.includes('Game-show') || cleanSrc.includes('Telenovela')) {
    return 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&q=80&w=800';
  }

  if (cleanSrc.includes('Photography Props') || cleanSrc.includes('Photography-Props') || cleanSrc.includes('Studio-Grade') || cleanSrc.includes('Aesthetic-Flatlay') || cleanSrc.includes('Instagram-Influencer') || cleanSrc.includes('Hyper-Matte') || cleanSrc.includes('Hip-Hop-Video')) {
    return 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800';
  }

  if (cleanSrc.includes('Australian Notes') || cleanSrc.includes('Australian-Notes')) {
    return 'https://images.unsplash.com/photo-1509720357409-ae1a0efd543a?auto=format&fit=crop&q=80&w=800';
  }

  if (cleanSrc.includes('Bundle Packs') || cleanSrc.includes('Bundle-Packs') || cleanSrc.includes('Millionaire-Heist') || cleanSrc.includes('High-Stakes') || cleanSrc.includes('Indie-Film-Crew') || cleanSrc.includes('Commercial-Producer')) {
    return 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800';
  }

  if (cleanSrc.includes('Training Currency') || cleanSrc.includes('Training-Currency') || cleanSrc.includes('Teller-Training') || cleanSrc.includes('Security-Transport') || cleanSrc.includes('Gaming-Club') || cleanSrc.includes('Register-Training') || cleanSrc.includes('Finance-Education')) {
    return 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800';
  }

  // 2. High-quality Blog post image mapping (Unsplash)
  const blogMatch = cleanSrc.match(/blog\/(\d+)/);
  if (blogMatch) {
    const blogId = parseInt(blogMatch[1], 10);
    const blogImages = [
      'photo-1485846234645-a62644f84728', // 1: Clapboard / film production
      'photo-1505686994434-e3cc5abf1330', // 2: Cinematic cameras
      'photo-1515621061946-eff1c2a352bd', // 3: Crafting & set props
      'photo-1422060128467-3958b886c5f5', // 4: Vintage film / retro feel
      'photo-1440404653325-ab127d49abc1', // 5: Cinema archive
      'photo-1507679799987-c73779587ccf', // 6: Theater spotlights
      'photo-1578301978693-85fa9c0320b9', // 7: Bank heist vault / lockbox
      'photo-1518709268805-4e9042af9f23', // 8: Camera sensor tech
      'photo-1511671782779-c97d3d27a1d4', // 9: Neon stage / music video
      'photo-1513151233558-d860c5398176', // 10: Prop aging / vintage texture
      'photo-1492691527719-9d1e07e534b4', // 11: Editorial photography shooting
      'photo-1450133064473-71024230f91b', // 12: Legal guidelines / gavel
      'photo-1565514020179-026b92b84bb6', // 13: Cashier training
      'photo-1600585154340-be6161a56a0c', // 14: Blueprint / presentation layout
      'photo-1542751371-adc38448a05e', // 15: Indie film production
    ];
    const imgId = blogImages[(blogId - 1) % blogImages.length] || blogImages[0];
    return `https://images.unsplash.com/${imgId}?auto=format&fit=crop&q=80&w=800`;
  }

  // 3. Fallback to predictable Picsum Photos (always works!)
  const seed = cleanSrc.replace(/[^a-zA-Z0-9]/g, '');
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
