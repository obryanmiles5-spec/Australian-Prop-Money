const fs = require('fs');
let code = fs.readFileSync('lib/products.ts', 'utf8');

const mapping = {
  // Classic Notes
  'aud-100-classic-stack': {
    image: 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-stack',
    gallery: ['images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-front', 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-back', 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-stack', 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-bundle']
  },
  'aud-100-classic-note': {
    image: 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-front',
    gallery: ['images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-front', 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-back', 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-stack', 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-bundle']
  },
  'aud-50-classic-note': {
    image: 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-front',
    gallery: ['images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-front', 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-back', 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-stack', 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-bundle']
  },
  'aud-20-classic-note': {
    image: 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-front',
    gallery: ['images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-front', 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-back', 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-stack', 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-bundle']
  },
  
  // New Notes
  'aud-100-new-stack': {
    image: 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack',
    gallery: ['images/products/Australian Notes/New-Notes/100 AUD/100-aud-front', 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-back', 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack', 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-bundle']
  },
  'aud-100-new-polymer-note': {
    image: 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-front',
    gallery: ['images/products/Australian Notes/New-Notes/100 AUD/100-aud-front', 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-back', 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack', 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-bundle']
  },
  'aud-50-new-stack': {
    image: 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-stack',
    gallery: ['images/products/Australian Notes/New-Notes/50 AUD/50-aud-front', 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-back', 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-stack', 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-bundle']
  },
  'aud-50-new-polymer-note': {
    image: 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-front',
    gallery: ['images/products/Australian Notes/New-Notes/50 AUD/50-aud-front', 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-back', 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-stack', 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-bundle']
  },
  'aud-20-new-stack': {
    image: 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-stack',
    gallery: ['images/products/Australian Notes/New-Notes/20 AUD/20-aud-front', 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-back', 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-stack', 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-bundle']
  },
  'aud-20-new-polymer-note': {
    image: 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-front',
    gallery: ['images/products/Australian Notes/New-Notes/20 AUD/20-aud-front', 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-back', 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-stack', 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-bundle']
  },
  'aud-10-new-stack': {
    image: 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-stack',
    gallery: ['images/products/Australian Notes/New-Notes/10 AUD/10-aud-front', 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-back', 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-stack', 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-bundle']
  },
  // Mapping aud-5 to 10 as there is no 5
  'aud-5-new-stack': {
    image: 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-stack',
    gallery: ['images/products/Australian Notes/New-Notes/10 AUD/10-aud-front', 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-back', 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-stack', 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-bundle']
  },

  // Movie Prop Money
  'action-heist-100-aged': {
    image: 'images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack',
    gallery: ['images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack']
  },
  'action-heist-50-aged': {
    image: 'images/products/Movie-Prop-Money/Action-Heist-Weathered-$50-Stack',
    gallery: ['images/products/Movie-Prop-Money/Action-Heist-Weathered-$50-Stack']
  },
  'crimson-stained-100-stack': {
    image: 'images/products/Movie-Prop-Money/Crimson-Stained-$100-Prop-Note-Stack',
    gallery: ['images/products/Movie-Prop-Money/Crimson-Stained-$100-Prop-Note-Stack']
  },
  'charred-singed-50-stack': {
    image: 'images/products/Movie-Prop-Money/Charred-&-Singed-$50-Prop-Note-Stack',
    gallery: ['images/products/Movie-Prop-Money/Charred-&-Singed-$50-Prop-Note-Stack']
  },
  'waterlogged-underworld-stack': {
    image: 'images/products/Movie-Prop-Money/Water-Logged-Underworld-Cash-Stack',
    gallery: ['images/products/Movie-Prop-Money/Water-Logged-Underworld-Cash-Stack']
  },

  // TV Props
  'cop-evidence-bag': {
    image: 'images/products/TV-Props/Cop-Show-Evidence-Sealed-Cash-Bag',
    gallery: ['images/products/TV-Props/Cop-Show-Evidence-Sealed-Cash-Bag']
  },
  'broadcaster-quality-20-stack': {
    image: 'images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack',
    gallery: ['images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack']
  },
  'drug-bust-briefcase': {
    image: 'images/products/TV-Props/Drug-Bust-Luxury-Briefcase-Layout',
    gallery: ['images/products/TV-Props/Drug-Bust-Luxury-Briefcase-Layout']
  },
  'game-show-grand-prize': {
    image: 'images/products/TV-Props/Game-show-Grand-Prize-Jumbo-Cash-Pile',
    gallery: ['images/products/TV-Props/Game-show-Grand-Prize-Jumbo-Cash-Pile']
  },
  'telenovela-cartel-brick': {
    image: 'images/products/TV-Props/Telenovela-Wealth-Cartel-Brick',
    gallery: ['images/products/TV-Props/Telenovela-Wealth-Cartel-Brick']
  },

  // Photography Props
  'studio-high-contrast-100': {
    image: 'images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack',
    gallery: ['images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack']
  },
  'aesthetic-flatlay-fan': {
    image: 'images/products/Photography-Props/Aesthetic-Flatlay-Loose-Prop-Currency-Fan',
    gallery: ['images/products/Photography-Props/Aesthetic-Flatlay-Loose-Prop-Currency-Fan']
  },
  'instagram-luxury-roll': {
    image: 'images/products/Photography-Props/Instagram-Influencer-Luxury-Cash-Roll',
    gallery: ['images/products/Photography-Props/Instagram-Influencer-Luxury-Cash-Roll']
  },
  'hyper-matte-closeup-macro': {
    image: 'images/products/Photography-Props/Hyper-Matte-Close-Up-Macro-Prop-Stack',
    gallery: ['images/products/Photography-Props/Hyper-Matte-Close-Up-Macro-Prop-Stack']
  },
  'hiphop-video-rain-pack': {
    image: 'images/products/Photography-Props/Hip-Hop-Video-Multi-Denom-Rain-Pack',
    gallery: ['images/products/Photography-Props/Hip-Hop-Video-Multi-Denom-Rain-Pack']
  },

  // Training Currency
  'bank-teller-training-kit': {
    image: 'images/products/Training-Currency/Bank-Teller-Training-Starter-Bundle',
    gallery: ['images/products/Training-Currency/Bank-Teller-Training-Starter-Bundle']
  },
  'security-cash-handler-trainer': {
    image: 'images/products/Training-Currency/Security-Transport-Cash-Handler-Trainer',
    gallery: ['images/products/Training-Currency/Security-Transport-Cash-Handler-Trainer']
  },
  'gaming-club-croupier-practice': {
    image: 'images/products/Training-Currency/Gaming-Club-Croupier-Practice-Currency',
    gallery: ['images/products/Training-Currency/Gaming-Club-Croupier-Practice-Currency']
  },
  'retail-register-training-kit': {
    image: 'images/products/Training-Currency/Retail-Cash-Register-Training-Kit',
    gallery: ['images/products/Training-Currency/Retail-Cash-Register-Training-Kit']
  },
  'classroom-play-pack': {
    image: 'images/products/Training-Currency/Classroom-Finance-Education-Play-Pack',
    gallery: ['images/products/Training-Currency/Classroom-Finance-Education-Play-Pack']
  },

  // Bundle Packs
  'millionaire-heist-crate': {
    image: 'images/products/Bundle-Packs/The-Millionaire-Heist-Master-Crate-(100 Stacks)',
    gallery: ['images/products/Bundle-Packs/The-Millionaire-Heist-Master-Crate-(100 Stacks)']
  },
  'indie-film-crew-pack': {
    image: 'images/products/Bundle-Packs/Indie-Film-Crew-Full-Range-Pack-(10 Stacks)',
    gallery: ['images/products/Bundle-Packs/Indie-Film-Crew-Full-Range-Pack-(10 Stacks)']
  },
  'high-stakes-ransom-briefcase': {
    image: 'images/products/Bundle-Packs/High-Stakes-Ransom-Briefcase-Pro-(20 Stacks)',
    gallery: ['images/products/Bundle-Packs/High-Stakes-Ransom-Briefcase-Pro-(20 Stacks)']
  },
  'commercial-bulk-reserve-50': {
    image: 'images/products/Bundle-Packs/Commercial-Producer-Bulk-Reserve-(50 Stacks)',
    gallery: ['images/products/Bundle-Packs/Commercial-Producer-Bulk-Reserve-(50 Stacks)']
  },
  'prop-wholesaler-mega-box': {
    image: 'images/products/Bundle-Packs/Production-Supply-Wholesaler-Mega-Box',
    gallery: ['images/products/Bundle-Packs/Production-Supply-Wholesaler-Mega-Box']
  }
};

for (const [id, data] of Object.entries(mapping)) {
  const reg = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?image:\\s*)'[^']*'(,[\\s\\S]*?gallery:\\s*)\\[[^\\]]*\\]`);
  let newCode = code.replace(reg, `$1'${data.image}'$2${JSON.stringify(data.gallery).replace(/"/g, "'")}`);
  if (newCode === code) {
    const reg2 = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?image:\\s*)'[^']*'`);
    newCode = code.replace(reg2, `$1'${data.image}'`);
  }
  code = newCode;
}

fs.writeFileSync('lib/products.ts', code);
