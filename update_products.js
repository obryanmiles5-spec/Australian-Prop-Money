const fs = require('fs');

const file = 'lib/products.ts';
let code = fs.readFileSync(file, 'utf8');

const imgMap = {
  // Classic Notes
  'aud-10-classic-stack': {
    image: 'images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-stack',
    gallery: ['images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-front', 'images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-back', 'images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-stack', 'images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-bundle']
  },
  'aud-10-classic-bundle': {
    image: 'images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-bundle',
    gallery: ['images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-front', 'images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-back', 'images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-stack', 'images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-bundle']
  },
  'aud-10-classic-note': {
    image: 'images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-front',
    gallery: ['images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-front', 'images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-back', 'images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-stack', 'images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-bundle']
  },
  'aud-20-classic-stack': {
    image: 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-stack',
    gallery: ['images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-front', 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-back', 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-stack', 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-bundle']
  },
  'aud-20-classic-note': {
    image: 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-front',
    gallery: ['images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-front', 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-back', 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-stack', 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-bundle']
  },
  'aud-50-classic-stack': {
    image: 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-stack',
    gallery: ['images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-front', 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-back', 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-stack', 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-bundle']
  },
  'aud-50-classic-note': {
    image: 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-front',
    gallery: ['images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-front', 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-back', 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-stack', 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-bundle']
  },
  'aud-100-classic-stack': {
    image: 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-stack',
    gallery: ['images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-front', 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-back', 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-stack', 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-bundle']
  },
  'aud-100-classic-note': {
    image: 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-front',
    gallery: ['images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-front', 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-back', 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-stack', 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-bundle']
  },
  // New Notes
  'aud-10-new-polymer-note': {
    image: 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-front',
    gallery: ['images/products/Australian Notes/New-Notes/10 AUD/10-aud-front', 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-back', 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-stack', 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-bundle']
  },
  'aud-20-new-polymer-note': {
    image: 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-front',
    gallery: ['images/products/Australian Notes/New-Notes/20 AUD/20-aud-front', 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-back', 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-stack', 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-bundle']
  },
  'aud-50-new-polymer-note': {
    image: 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-front',
    gallery: ['images/products/Australian Notes/New-Notes/50 AUD/50-aud-front', 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-back', 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-stack', 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-bundle']
  },
  'aud-50-new-stack': {
    image: 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-stack',
    gallery: ['images/products/Australian Notes/New-Notes/50 AUD/50-aud-front', 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-back', 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-stack', 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-bundle']
  },
  'aud-100-new-stack': {
    image: 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack',
    gallery: ['images/products/Australian Notes/New-Notes/100 AUD/100-aud-front', 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-back', 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack', 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-bundle']
  },
  'aud-100-new-polymer-note': {
    image: 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-front',
    gallery: ['images/products/Australian Notes/New-Notes/100 AUD/100-aud-front', 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-back', 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack', 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-bundle']
  },
  
  // Movie Prop Money
  'heist-100-stack': {
    image: 'images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack',
    gallery: ['images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack']
  },
  'heist-50-stack': {
    image: 'images/products/Movie-Prop-Money/Action-Heist-Weathered-$50-Stack',
    gallery: ['images/products/Movie-Prop-Money/Action-Heist-Weathered-$50-Stack']
  },
  'crimson-100-stack': {
    image: 'images/products/Movie-Prop-Money/Crimson-Stained-$100-Prop-Note-Stack',
    gallery: ['images/products/Movie-Prop-Money/Crimson-Stained-$100-Prop-Note-Stack']
  },
  'charred-50-stack': {
    image: 'images/products/Movie-Prop-Money/Charred-&-Singed-$50-Prop-Note-Stack',
    gallery: ['images/products/Movie-Prop-Money/Charred-&-Singed-$50-Prop-Note-Stack']
  },
  'water-logged-stack': {
    image: 'images/products/Movie-Prop-Money/Water-Logged-Underworld-Cash-Stack',
    gallery: ['images/products/Movie-Prop-Money/Water-Logged-Underworld-Cash-Stack']
  },

  // TV Props
  'evidence-bag-prop': {
    image: 'images/products/TV-Props/Cop-Show-Evidence-Sealed-Cash-Bag',
    gallery: ['images/products/TV-Props/Cop-Show-Evidence-Sealed-Cash-Bag']
  },
  'broadcast-20-stack': {
    image: 'images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack',
    gallery: ['images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack']
  },
  'cartel-briefcase': {
    image: 'images/products/TV-Props/Drug-Bust-Luxury-Briefcase-Layout',
    gallery: ['images/products/TV-Props/Drug-Bust-Luxury-Briefcase-Layout']
  },
  'gameshow-prize-pile': {
    image: 'images/products/TV-Props/Game-show-Grand-Prize-Jumbo-Cash-Pile',
    gallery: ['images/products/TV-Props/Game-show-Grand-Prize-Jumbo-Cash-Pile']
  },
  'cartel-brick': {
    image: 'images/products/TV-Props/Telenovela-Wealth-Cartel-Brick',
    gallery: ['images/products/TV-Props/Telenovela-Wealth-Cartel-Brick']
  },

  // Photography Props
  'studio-100-stack': {
    image: 'images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack',
    gallery: ['images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack']
  },
  'flatlay-fan': {
    image: 'images/products/Photography-Props/Aesthetic-Flatlay-Loose-Prop-Currency-Fan',
    gallery: ['images/products/Photography-Props/Aesthetic-Flatlay-Loose-Prop-Currency-Fan']
  },
  'influencer-cash-roll': {
    image: 'images/products/Photography-Props/Instagram-Influencer-Luxury-Cash-Roll',
    gallery: ['images/products/Photography-Props/Instagram-Influencer-Luxury-Cash-Roll']
  },
  'macro-100-stack': {
    image: 'images/products/Photography-Props/Hyper-Matte-Close-Up-Macro-Prop-Stack',
    gallery: ['images/products/Photography-Props/Hyper-Matte-Close-Up-Macro-Prop-Stack']
  },
  'music-video-rain': {
    image: 'images/products/Photography-Props/Hip-Hop-Video-Multi-Denom-Rain-Pack',
    gallery: ['images/products/Photography-Props/Hip-Hop-Video-Multi-Denom-Rain-Pack']
  },

  // Training Currency
  'bank-teller-kit': {
    image: 'images/products/Training-Currency/Bank-Teller-Training-Starter-Bundle',
    gallery: ['images/products/Training-Currency/Bank-Teller-Training-Starter-Bundle']
  },
  'security-transport-pack': {
    image: 'images/products/Training-Currency/Security-Transport-Cash-Handler-Trainer',
    gallery: ['images/products/Training-Currency/Security-Transport-Cash-Handler-Trainer']
  },
  'gaming-croupier-pack': {
    image: 'images/products/Training-Currency/Gaming-Club-Croupier-Practice-Currency',
    gallery: ['images/products/Training-Currency/Gaming-Club-Croupier-Practice-Currency']
  },
  'retail-register-kit': {
    image: 'images/products/Training-Currency/Retail-Cash-Register-Training-Kit',
    gallery: ['images/products/Training-Currency/Retail-Cash-Register-Training-Kit']
  },
  'classroom-play-pack': {
    image: 'images/products/Training-Currency/Classroom-Finance-Education-Play-Pack',
    gallery: ['images/products/Training-Currency/Classroom-Finance-Education-Play-Pack']
  },

  // Bundle Packs
  'heist-crate': {
    image: 'images/products/Bundle-Packs/The-Millionaire-Heist-Master-Crate-(100 Stacks)',
    gallery: ['images/products/Bundle-Packs/The-Millionaire-Heist-Master-Crate-(100 Stacks)']
  },
  'indie-pack': {
    image: 'images/products/Bundle-Packs/Indie-Film-Crew-Full-Range-Pack-(10 Stacks)',
    gallery: ['images/products/Bundle-Packs/Indie-Film-Crew-Full-Range-Pack-(10 Stacks)']
  },
  'ransom-briefcase': {
    image: 'images/products/Bundle-Packs/High-Stakes-Ransom-Briefcase-Pro-(20 Stacks)',
    gallery: ['images/products/Bundle-Packs/High-Stakes-Ransom-Briefcase-Pro-(20 Stacks)']
  },
  'commercial-reserve': {
    image: 'images/products/Bundle-Packs/Commercial-Producer-Bulk-Reserve-(50 Stacks)',
    gallery: ['images/products/Bundle-Packs/Commercial-Producer-Bulk-Reserve-(50 Stacks)']
  },
  'megabox-wholesale': {
    image: 'images/products/Bundle-Packs/Production-Supply-Wholesaler-Mega-Box',
    gallery: ['images/products/Bundle-Packs/Production-Supply-Wholesaler-Mega-Box']
  }
};

let i = 1;
code = code.replace(/export const BLOG_POSTS: BlogPost\[\] = \[\s*([\s\S]*?)\];/g, (match, p1) => {
  let res = p1;
  res = res.replace(/image:\s*'[^']*'/g, () => {
    const r = `image: 'images/blog/${i}'`;
    i++;
    return r;
  });
  return `export const BLOG_POSTS: BlogPost[] = [\n${res}];`;
});

for (const [id, data] of Object.entries(imgMap)) {
  const reg = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?image:\\s*)'[^']*'(,[\\s\\S]*?gallery:\\s*)\\[[^\\]]*\\]`);
  code = code.replace(reg, `$1'${data.image}'$2${JSON.stringify(data.gallery).replace(/"/g, "'")}`);
  
  // Try finding just image (if it doesn't have gallery matched)
  const reg2 = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?image:\\s*)'[^']*'`);
  code = code.replace(reg2, `$1'${data.image}'`);
}

fs.writeFileSync(file, code);
