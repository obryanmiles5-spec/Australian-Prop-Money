export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  category: 'australian-notes' | 'movie-prop-money' | 'tv-production-props' | 'photography-props' | 'training-currency' | 'bundle-packs';
  sku: string;
  seoTitle: string;
  metaDescription: string;
  image: string;
  gallery: string[];
  stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
  relatedProducts: string[];
  features: string[];
  specifications: {
    [key: string]: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'legality' | 'shipping' | 'ordering' | 'custom';
}

export interface Review {
  id: string;
  name: string;
  role: string;
  production: string;
  rating: number;
  comment: string;
  date: string;
}

export function getCategoryLabel(cat: string): string {
  switch (cat) {
    case 'australian-notes': return 'Australian Notes';
    case 'movie-prop-money': return 'Movie Prop Money';
    case 'tv-production-props': return 'TV Production Props';
    case 'photography-props': return 'Photography Props';
    case 'training-currency': return 'Training Currency';
    case 'bundle-packs': return 'Bundle Packs';
    default: return 'Prop Money';
  }
}

export const PRODUCTS: Product[] = [
  // 1. AUSTRALIAN NOTES
  {
    id: 'aud-100-new-stack',
    name: 'New Series $100 Prop Money Stack',
    price: 65.00,
    description: 'High-quality replica of the new series polymer $100 notes. Includes 100 double-sided notes in a professional paper band.',
    longDescription: 'Engineered specifically for camera capture, our New Series $100 Prop Money Stack features ultra-realistic double-sided color-balanced printing. Made of premium grade non-gloss material to prevent glare under intense studio lighting. Each stack contains 100 replica notes secured with an authentic-looking currency band. Perfect for close-up shots in high-definition 4K, 8K, and IMAX filming.',
    category: 'australian-notes',
    sku: 'AUD-N100-STK',
    seoTitle: 'Buy $100 Australian Prop Money Stack - RBA Compliant Replicas',
    metaDescription: 'Get 100 high-fidelity double-sided Australian $100 replica notes in a standard currency band. 100% legal, non-glare and perfect for 4K video shoots.',
    image: 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack',
    gallery: ['images/products/Australian Notes/New-Notes/100 AUD/100-aud-front','images/products/Australian Notes/New-Notes/100 AUD/100-aud-back','images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack','images/products/Australian Notes/New-Notes/100 AUD/100-aud-bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-50-new-stack', 'aud-20-new-stack', 'indie-film-crew-pack'],
    features: [
      'Dual-sided premium matte printing (No studio glare)',
      'Accurate dimensions conforming to legal requirements',
      'Includes 100 individual replica $100 notes',
      'Comes with standard currency band wrapper',
      'Clear legal markings as required by Reserve Bank of Australia (RBA) guidelines'
    ],
    specifications: {
      'Paper Type': 'Premium Heavyweight Matte Paper',
      'Ink Type': 'Non-Reflective Organic UV Ink',
      'Note Count': '100 Notes per Stack',
      'Total Stack Value': '$10,000 Face Value (Prop)',
      'Dimensions': '158mm x 65mm (Standard Scale)'
    }
  },
  {
    id: 'aud-50-new-stack',
    name: 'New Series $50 Prop Money Stack',
    price: 55.00,
    description: 'High-quality replica of the new series polymer $50 notes. Includes 100 double-sided notes in a professional paper band.',
    longDescription: 'Crafted with extreme attention to detail, our New Series $50 Prop Money Stack replicates the distinctive gold-yellow color profile of the current Australian $50 note. Perfect for high-intensity camera scenes, close-ups, and background crowd shots. Every note is printed on premium heavyweight non-reflective paper, providing the perfect crisp "snap" and natural sound when handled by actors.',
    category: 'australian-notes',
    sku: 'AUD-N50-STK',
    seoTitle: 'Aussie $50 Prop Cash Stack - High-Density Non-Glare Film Replicas',
    metaDescription: '100% RBA-compliant Australian $50 replica prop bills. Perfect gold-yellow color-match, dual-sided printing, matte non-glare finish.',
    image: 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-stack',
    gallery: ['images/products/Australian Notes/New-Notes/50 AUD/50-aud-front','images/products/Australian Notes/New-Notes/50 AUD/50-aud-back','images/products/Australian Notes/New-Notes/50 AUD/50-aud-stack','images/products/Australian Notes/New-Notes/50 AUD/50-aud-bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-100-new-stack', 'aud-20-new-stack', 'indie-film-crew-pack'],
    features: [
      'Realistic gold-yellow color match',
      'Dual-sided non-glossy premium finish',
      'Ideal for count-outs and cash exchanges',
      'Authentic-style secure paper currency band',
      'Fully compliant with RBA specifications'
    ],
    specifications: {
      'Paper Type': 'Crisp High-Density Bond Paper',
      'Ink Type': 'Color-Calibrated Studio Inks',
      'Note Count': '100 Notes per Stack',
      'Total Stack Value': '$5,000 Face Value (Prop)',
      'Dimensions': '151mm x 65mm (Standard Scale)'
    }
  },
  {
    id: 'aud-20-new-stack',
    name: 'New Series $20 Prop Money Stack',
    price: 45.00,
    description: 'High-quality replica of the new series polymer $20 notes. Includes 100 double-sided notes in a professional paper band.',
    longDescription: 'Our New Series $20 Prop Money Stack features the striking, deep red-orange hue of the modern Australian $20 note. Color-balanced perfectly for modern digital sensors, this prop stack offers exceptional realism under all lighting conditions. Designed and printed on non-glossy, high-durability matte paper for clean handling and zero camera glare.',
    category: 'australian-notes',
    sku: 'AUD-N20-STK',
    seoTitle: 'New Series $20 Australian Prop Bills - Film-Ready Stacks',
    metaDescription: '100 double-sided $20 AUD prop bills. High durability matte paper, perfect deep red-orange hue, no reflections, 100% legal RBA specimen.',
    image: 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-stack',
    gallery: ['images/products/Australian Notes/New-Notes/20 AUD/20-aud-front','images/products/Australian Notes/New-Notes/20 AUD/20-aud-back','images/products/Australian Notes/New-Notes/20 AUD/20-aud-stack','images/products/Australian Notes/New-Notes/20 AUD/20-aud-bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-50-new-stack', 'aud-10-new-stack', 'indie-film-crew-pack'],
    features: [
      'Accurate red-orange gradient matching',
      'Dual-sided non-reflective premium print',
      'Crisp handling response for counting shots',
      'Sealed with authentic-style paper bank band',
      'RBA compliant legal design'
    ],
    specifications: {
      'Paper Type': 'High-Density Fine-Matte Bond',
      'Ink Type': 'Reflective-Neutral Organic Inks',
      'Note Count': '100 Notes per Stack',
      'Total Stack Value': '$2,000 Face Value (Prop)',
      'Dimensions': '144mm x 65mm (Standard Scale)'
    }
  },
  {
    id: 'aud-10-new-stack',
    name: 'New Series $10 Prop Money Stack',
    price: 35.00,
    description: 'High-quality replica of the new series polymer $10 notes. Includes 100 double-sided notes in a professional paper band.',
    longDescription: 'Engineered to replicate the bright blue and gold design of the current Australian $10 note. Each stack features 100 individual double-sided notes wrapped in a clean, bank-style paper wrapper. Perfect for cash register layouts, street exchanges, or wallet-stashing on set.',
    category: 'australian-notes',
    sku: 'AUD-N10-STK',
    seoTitle: 'Buy $10 Australian Prop Money Stack - RBA Specimen Bills',
    metaDescription: 'Replica $10 Australian banknotes. Blue color-balanced, matte printing, dual-sided. 100 notes in bank wrapper. Fully legal prop.',
    image: 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-stack',
    gallery: ['images/products/Australian Notes/New-Notes/10 AUD/10-aud-front','images/products/Australian Notes/New-Notes/10 AUD/10-aud-back','images/products/Australian Notes/New-Notes/10 AUD/10-aud-stack','images/products/Australian Notes/New-Notes/10 AUD/10-aud-bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-20-new-stack', 'aud-5-new-stack', 'retail-training-kit'],
    features: [
      'Authentic bright blue color balancing',
      'Dual-sided non-glossy premium finish',
      'Includes 100 notes in bank band',
      'Clean cut lines and standard scale'
    ],
    specifications: {
      'Paper Type': 'Non-Glossy Heavy Bond',
      'Note Count': '100 Notes per Stack',
      'Total Stack Value': '$1,000 Face Value (Prop)',
      'Dimensions': '137mm x 65mm'
    }
  },
  {
    id: 'aud-5-new-stack',
    name: 'New Series $5 Prop Money Stack',
    price: 25.00,
    description: 'High-quality replica of the new series polymer $5 notes. Includes 100 double-sided notes in a professional paper band.',
    longDescription: 'Replicates the light violet tone of the modern Australian $5 note. Perfect for filling cash drawers, register trays, or background sets. Features clean matte printing to ensure no camera reflections, with subtle legal "PROP ONLY" indicators integrated beautifully.',
    category: 'australian-notes',
    sku: 'AUD-N5-STK',
    seoTitle: 'Australian $5 Prop Money Stack - Film & TV Replicas',
    metaDescription: 'Violet toned $5 AUD prop currency. Specimen banknotes for background scenes, wallets and drawers. 100 notes with paper strap.',
    image: 'images/products/Australian Notes/New-Notes/10 AUD/10-aud-stack',
    gallery: ['images/products/Australian Notes/New-Notes/10 AUD/10-aud-front','images/products/Australian Notes/New-Notes/10 AUD/10-aud-back','images/products/Australian Notes/New-Notes/10 AUD/10-aud-stack','images/products/Australian Notes/New-Notes/10 AUD/10-aud-bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-10-new-stack', 'retail-training-kit', 'classroom-play-pack'],
    features: [
      'Soft violet color spectrum calibration',
      'Dual-sided non-reflective premium print',
      'Includes 100 notes per stack',
      'Strictly compliant with federal laws'
    ],
    specifications: {
      'Paper Type': 'Non-Glossy Heavy Bond',
      'Note Count': '100 Notes per Stack',
      'Total Stack Value': '$500 Face Value (Prop)',
      'Dimensions': '130mm x 65mm'
    }
  },
  {
    id: 'aud-100-classic-stack',
    name: 'Classic Paper Series $100 Vintage Prop Stack',
    price: 70.00,
    description: 'Nostalgic replica of the vintage paper $100 notes from the 1980s-1990s. Classic green paper aesthetic.',
    longDescription: 'Designed for retro Australian set designs, historical films, or flashback crime dramas, this stack replicates the vintage paper $100 banknotes. It features the nostalgic green hue and artistic paper textures. Crafted from customized pre-softened paper, this stack gives an immediate retro feel.',
    category: 'australian-notes',
    sku: 'AUD-C100-STK',
    seoTitle: 'Retro 80s/90s $100 Australian Vintage Prop Money',
    metaDescription: 'Vintage paper-series Australian $100 banknotes replica stack. Nostalgic green hue, soft cotton feel. Ideal for historical period films.',
    image: 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-stack',
    gallery: ['images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-front','images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-back','images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-stack','images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-100-new-stack', 'action-heist-100-aged'],
    features: [
      'Vintage green-hued retro aesthetic',
      'Double-sided printing on pre-softened paper',
      'Authentic vintage paper thickness and size scale',
      'Includes 100 replica notes in paper strap'
    ],
    specifications: {
      'Paper Type': 'Pre-Softened Cotton-Bond Blend',
      'Style': 'Pre-1996 Australian Paper Currency',
      'Note Count': '100 Notes per Stack',
      'Total Stack Value': '$10,000 Face Value (Prop)',
      'Dimensions': '172mm x 82mm'
    }
  },

  // 2. MOVIE PROP MONEY
  {
    id: 'action-heist-100-aged',
    name: 'Action Heist Weathered $100 Stack',
    price: 75.00,
    description: 'Professionally hand-weathered and distressed $100 replica notes. Perfect for gritty crime and action scenes.',
    longDescription: 'A favorite of film directors and set designers, our Aged & Circulated $100 Prop Stack undergoes a meticulous, multi-step hand-weathering process. We simulate heavy circulation, dirt, creasing, and wear so each note looks organic and lived-in. No two stacks are identical. Essential for crime dramas, gritty thrillers, and action movies where fresh-from-the-mint bills would look out of place.',
    category: 'movie-prop-money',
    sku: 'AUD-M100-AGD',
    seoTitle: 'Aged $100 Prop Money Stack - Distressed Cinema Currency',
    metaDescription: 'Professionally distressed, hand-aged Australian $100 prop banknotes. Creased, soiled, weathered, and soft-cornered for cinematic realism.',
    image: 'images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack',
    gallery: ['images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack'],
    stockStatus: 'in-stock',
    relatedProducts: ['action-heist-50-aged', 'crimson-stained-100-stack', 'ultimate-filmmaker-bundle'],
    features: [
      'Each note is individually treated for authentic wear',
      'Features creases, minor tears, and simulated dirt/grime',
      'Realistic texture that crumples naturally',
      'Wrapped in an aged, weathered paper band',
      'Perfect for drug bust, vault heist, or street trade scenes'
    ],
    specifications: {
      'Treatment': 'Hand-distressed, creased, and custom-stained',
      'Paper Type': 'Pre-softened specialized cotton blend',
      'Note Count': '100 Notes per Stack',
      'Total Stack Value': '$10,000 Face Value (Prop)',
      'Dimensions': '158mm x 65mm (Standard Scale)'
    }
  },
  {
    id: 'action-heist-50-aged',
    name: 'Action Heist Weathered $50 Stack',
    price: 65.00,
    description: 'Professionally distressed and hand-weathered $50 replica notes for a realistic, heavily circulated aesthetic.',
    longDescription: 'Give your scenes maximum authenticity with our hand-weathered $50 prop stacks. These notes look as though they have passed through hundreds of hands. Our design team applies specialized, non-toxic pigment washes and friction-wear techniques to break down the starch and add realistic grime, grease stains, and soft corners. An absolute must-have for street-level scenes.',
    category: 'movie-prop-money',
    sku: 'AUD-M50-AGD',
    seoTitle: 'Weathered $50 Aussie Prop Cash Stack - Hand-Aged Film Prop',
    metaDescription: 'Get 100 hand-aged Australian $50 replica bills. Dirt, creases, friction wear, pre-softened paper, non-reflective studio ink.',
    image: 'images/products/Movie-Prop-Money/Action-Heist-Weathered-$50-Stack',
    gallery: ['images/products/Movie-Prop-Money/Action-Heist-Weathered-$50-Stack'],
    stockStatus: 'in-stock',
    relatedProducts: ['action-heist-100-aged', 'charred-singed-50-stack', 'ultimate-filmmaker-bundle'],
    features: [
      'Realistic friction-wear edges and soft-touch paper',
      'Custom organic discoloration and corner folds',
      'Perfect sound reduction for quiet soundstages',
      'Aged, hand-worn band secures the bundle',
      'Meets all RBA compliance guidelines'
    ],
    specifications: {
      'Treatment': 'Multi-stage friction and pigment weathering',
      'Paper Type': 'Pre-softened specialized cotton blend',
      'Note Count': '100 Notes per Stack',
      'Total Stack Value': '$5,000 Face Value (Prop)',
      'Dimensions': '151mm x 65mm (Standard Scale)'
    }
  },
  {
    id: 'crimson-stained-100-stack',
    name: 'Crimson-Stained $100 Prop Note Stack',
    price: 80.00,
    description: 'Realistic blood-splattered $100 prop notes for gunfight, shootout, or murder scene set decoration.',
    longDescription: 'Designed for horror films, murder mystery sets, and violent action sequences. This special-effects stack features 100 replica $100 notes with custom, non-toxic crimson pigment splatters simulating fresh or oxidized blood. The blood effects are hand-applied to ensure each stack is uniquely visceral and realistic.',
    category: 'movie-prop-money',
    sku: 'AUD-M100-BLD',
    seoTitle: 'Blood-Splattered $100 Prop Money - Action Crime Film Props',
    metaDescription: '100 notes of realistic blood-stained Australian $100 replicas. Hand-crafted crimson pigment splatters. Non-toxic and safe for actors.',
    image: 'images/products/Movie-Prop-Money/Crimson-Stained-$100-Prop-Note-Stack',
    gallery: ['images/products/Movie-Prop-Money/Crimson-Stained-$100-Prop-Note-Stack'],
    stockStatus: 'in-stock',
    relatedProducts: ['action-heist-100-aged', 'charred-singed-50-stack'],
    features: [
      'Visceral, hand-splattered blood effects',
      'Varied oxidized color (mix of bright red and dark crimson)',
      'Perfect for crime scenes and evidence bags',
      'Made of safe, non-toxic organic dye stains'
    ],
    specifications: {
      'Treatment': 'Hand-applied FX pigment splatters',
      'Note Count': '100 Notes per Stack',
      'Ink Type': 'Water-soluble, non-transferable stain',
      'Dimensions': '158mm x 65mm'
    }
  },
  {
    id: 'charred-singed-50-stack',
    name: 'Charred & Singed $50 Prop Note Stack',
    price: 80.00,
    description: 'Heist-grade soot and singed margin $50 prop banknotes. Ideal for explosions, vault breaks, or arson scenes.',
    longDescription: 'Simulates cash salvaged from an explosion, safe cracking blast, or burning building. Our technicians carefully singe the outer margins of each stack using controlled heat and apply realistic soot and charcoal dustings. Provides a gritty, highly dramatic prop element for action films.',
    category: 'movie-prop-money',
    sku: 'AUD-M50-CHR',
    seoTitle: 'Charred & Burned $50 Prop Money Stack - Arson FX Props',
    metaDescription: 'Controlled singed edges and realistic soot-coated Australian $50 prop currency. Made of heavyweight non-reflective paper for visual drama.',
    image: 'images/products/Movie-Prop-Money/Charred-&-Singed-$50-Prop-Note-Stack',
    gallery: ['images/products/Movie-Prop-Money/Charred-&-Singed-$50-Prop-Note-Stack'],
    stockStatus: 'in-stock',
    relatedProducts: ['action-heist-50-aged', 'crimson-stained-100-stack'],
    features: [
      'Individually singed and charred paper margins',
      'Rich charcoal soot dusting that won’t smudge excessively',
      'Dramatic, textured look for action close-ups',
      'Fully safe to handle, non-reactive'
    ],
    specifications: {
      'Treatment': 'Micro-flame singing and soot wash',
      'Note Count': '100 Notes per Stack',
      'Soot Type': 'Sterilized carbon pigment',
      'Dimensions': '151mm x 65mm'
    }
  },
  {
    id: 'waterlogged-underworld-stack',
    name: 'Water-Logged Underworld Cash Stack',
    price: 85.00,
    description: 'Specialty crinkled and moisture-stained $100 prop stack mimicking river, sea, or swamp salvage cash.',
    longDescription: 'Simulates cash recovered from underwater storage, briefcases submerged in rivers, or swamp drops. This stack is treated with specialized water-soluble adhesive washes and dried under compression to warp the fibers and create organic water-ring stains. The resulting stack is stiff, crinkled, and highly tactile.',
    category: 'movie-prop-money',
    sku: 'AUD-M100-WTR',
    seoTitle: 'Submerged Water-Logged Prop Money $100 - Sea Salvage Props',
    metaDescription: 'Water-damaged and warped Australian $100 prop banknotes. Unique crinkled texture, authentic moisture lines. Hand-processed.',
    image: 'images/products/Movie-Prop-Money/Water-Logged-Underworld-Cash-Stack',
    gallery: ['images/products/Movie-Prop-Money/Water-Logged-Underworld-Cash-Stack'],
    stockStatus: 'in-stock',
    relatedProducts: ['action-heist-100-aged', 'cop-evidence-bag'],
    features: [
      'Realistic warped paper fibers and wrinkled texture',
      'Simulated organic tide marks and water stains',
      'Perfect stiffness that rattles realistically',
      'Hand-worn paper band'
    ],
    specifications: {
      'Treatment': 'Submersion styling and accelerated air-drying',
      'Note Count': '100 Notes per Stack',
      'Texture': 'Highly crinkled, hard-touch paper',
      'Dimensions': '158mm x 65mm'
    }
  },

  // 3. TV PRODUCTION PROPS
  {
    id: 'broadcaster-quality-20-stack',
    name: 'Broadcaster Quality $20 Prop Stack',
    price: 45.00,
    description: 'Optimized $20 prop stack containing 100 notes designed specifically for high-definition studio broadcasting cameras.',
    longDescription: 'Specifically formulated for TV news, game shows, and talk-show displays, this stack has calibrated red-orange hues that resolve beautifully on camera sensors without looking washed out. Printed with absolute precision on lightweight paper to ensure standard counting behavior.',
    category: 'tv-production-props',
    sku: 'AUD-T20-STK',
    seoTitle: 'TV Studio $20 Prop Money - Broadcast-Grade Cash Stacks',
    metaDescription: '100 double-sided Australian $20 prop banknotes optimized for digital TV broadcasts, commercial spots, and game shows.',
    image: 'images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack',
    gallery: ['images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-20-new-stack', 'cop-evidence-bag'],
    features: [
      'Color-matched to resolve accurately on television sensors',
      'Non-gloss matte paper substrate',
      'Wrapped in high-contrast bank-style wrapper',
      '100% legal RBA markings'
    ],
    specifications: {
      'Grade': 'Television Broadcast Studio Standard',
      'Note Count': '100 Notes',
      'Paper Weight': '80gsm Fine Matte',
      'Dimensions': '144mm x 65mm'
    }
  },
  {
    id: 'cop-evidence-bag',
    name: 'Cop-Show Evidence Sealed Cash Bag',
    price: 89.00,
    description: 'Fully prepared prop evidence bag pre-filled with multiple $50 and $100 cash stacks. Ideal for crime show procedural drama.',
    longDescription: 'Includes a heavy-duty, tamper-evident prop police evidence bag pre-sealed with two weathered stacks of Australian prop notes (one $50 stack and one $100 stack). Features realistic barcode stickers, custody chains, case filing forms on the bag face, and evidence tape. Perfect for police station and forensics scenes.',
    category: 'tv-production-props',
    sku: 'AUD-T-EV-BAG',
    seoTitle: 'Police Evidence Bag Prop with Cash Stacks - TV Crime Show Props',
    metaDescription: 'Realistic pre-sealed police evidence bag containing 2 weathered Australian prop money stacks. Complete with custody chain forms.',
    image: 'images/products/TV-Props/Cop-Show-Evidence-Sealed-Cash-Bag',
    gallery: ['images/products/TV-Props/Cop-Show-Evidence-Sealed-Cash-Bag'],
    stockStatus: 'in-stock',
    relatedProducts: ['action-heist-100-aged', 'action-heist-50-aged', 'drug-bust-briefcase'],
    features: [
      'Authentic tamper-evident security seal police bag',
      'Includes 1x weathered $100 stack and 1x weathered $50 stack inside',
      'Custody tracking table on the bag can be written on with marker',
      'Provides immediate procedural realism to crime detective sets'
    ],
    specifications: {
      'Package Includes': '1x Prop Evidence Bag, 2x Weathered Stacks (200 notes total)',
      'Bag Material': 'Reinforced 4-Mil Polyethylene',
      'Bag Dimensions': '300mm x 400mm',
      'Face Value (Prop)': '$15,000 Total'
    }
  },
  {
    id: 'drug-bust-briefcase',
    name: 'Drug Bust Luxury Briefcase Layout',
    price: 195.00,
    description: 'Sleek black security briefcase containing 4 custom cash prop stacks of $100s and $50s nested beautifully.',
    longDescription: 'Recreate a high-stakes deal or underground exchange with our Drug Bust Briefcase prop. Includes a lockable, hard-shell aluminum brief case and 4 full stacks of currency: 2 stacks of $100 notes and 2 stacks of $50 notes ($30,000 total prop value). Stacks are nested inside a velvet-lined insert, leaving space for other set dressing props.',
    category: 'tv-production-props',
    sku: 'AUD-T-CASE-SM',
    seoTitle: 'Ransom Briefcase Prop with 4 Cash Stacks - Film Exchange Props',
    metaDescription: 'Lockable security briefcase prop pre-filled with 4 premium Australian replica banknote stacks ($30,000 prop value). Ideal for mob/deal scenes.',
    image: 'images/products/TV-Props/Drug-Bust-Luxury-Briefcase-Layout',
    gallery: ['images/products/TV-Props/Drug-Bust-Luxury-Briefcase-Layout'],
    stockStatus: 'in-stock',
    relatedProducts: ['cop-evidence-bag', 'high-stakes-ransom-briefcase'],
    features: [
      'Hard-shell black aluminum briefcase with functional combination locks',
      'Includes 400 individual premium double-sided prop bills',
      'Velvet foam-padded interior insert to prevent stacks from moving',
      'Great for dramatic opening close-ups'
    ],
    specifications: {
      'Briefcase Material': 'Anodized Black Aluminum',
      'Included Notes': '2x $100 Stacks, 2x $50 Stacks (400 notes)',
      'Briefcase Weight (Packed)': '1.8kg',
      'Briefcase Dimensions': '380mm x 280mm x 80mm'
    }
  },
  {
    id: 'game-show-grand-prize',
    name: 'Game Show Grand Prize Jumbo Cash Pile',
    price: 220.00,
    description: 'An expansive pack of 6 loose stacks ($100s, $50s, $20s) with plastic display trays. Ideal for television gaming sets.',
    longDescription: 'Specially assembled for television game shows and quiz productions. Contains 6 crisp, high-density prop money stacks (2x $100, 2x $50, 2x $20) and three transparent acrylic organizing display trays. Designed to look massive and premium on contestants podiums.',
    category: 'tv-production-props',
    sku: 'AUD-T-PILE',
    seoTitle: 'Game Show Cash Prize Prop Pack - Display Money Trays',
    metaDescription: 'Jumbo TV display cash prop pack. 6 premium currency stacks with transparent acrylic trays. Perfect for award podiums.',
    image: 'images/products/TV-Props/Game-show-Grand-Prize-Jumbo-Cash-Pile',
    gallery: ['images/products/TV-Props/Game-show-Grand-Prize-Jumbo-Cash-Pile'],
    stockStatus: 'in-stock',
    relatedProducts: ['drug-bust-briefcase', 'high-stakes-ransom-briefcase'],
    features: [
      '6 full crisp stacks (600 banknotes total)',
      '3 heavy-duty crystal-clear acrylic organizing trays',
      'Designed to elevate visual bulk under camera wide angles',
      'RBA compliant disclaimers on all notes'
    ],
    specifications: {
      'Package Includes': '6x Crisp Stacks, 3x Acrylic Organizers',
      'Trays Material': '3mm Polished Acrylic',
      'Total Stack Value (Prop)': '$34,000 Face Value',
      'Total Package Weight': '1.2kg'
    }
  },
  {
    id: 'telenovela-cartel-brick',
    name: 'Telenovela Wealth Cartel Brick',
    price: 140.00,
    description: 'Heavy duty, plastic-wrapped raw cash brick containing 5 dense stacks of $100 notes. Recreates underground cartel trade.',
    longDescription: 'Replicates smuggling cash bricks. Features 5 dense stacks of $100 notes ($50,000 prop value) stacked tightly and wrapped under vacuum heat in industrial-grade, thick clear shrink-wrap with simulated moisture-seal tape. Excellent background prop for drama serials and crime scenes.',
    category: 'tv-production-props',
    sku: 'AUD-T-BRK',
    seoTitle: 'Smuggled Cartel Cash Brick Prop - Wrapped Money Props',
    metaDescription: '5 stacks of $100 Australian replica currency vacuum-sealed in heavy clear plastic packaging. Perfect for drug trade and cartel drama sets.',
    image: 'images/products/TV-Props/Telenovela-Wealth-Cartel-Brick',
    gallery: ['images/products/TV-Props/Telenovela-Wealth-Cartel-Brick'],
    stockStatus: 'in-stock',
    relatedProducts: ['cop-evidence-bag', 'drug-bust-briefcase', 'millionaire-heist-crate'],
    features: [
      'Shrink-wrapped in military-grade clear vinyl wrap',
      'Contains 500 individual $100 prop notes',
      'Hermetically sealed aesthetic with corner scuffs',
      'Perfect weight and balance for throw-downs'
    ],
    specifications: {
      'Packaging': 'Industrial Shrink-Wrap & Moisture Tape',
      'Contents': '5x $100 Crisp Prop Stacks (500 notes)',
      'Total Face Value': '$50,000 (Prop)',
      'Dimensions': '160mm x 135mm x 60mm'
    }
  },

  // 4. PHOTOGRAPHY PROPS
  {
    id: 'studio-high-contrast-100',
    name: 'Studio-Grade High-Contrast $100 Prop Stack',
    price: 65.00,
    description: '100 notes of $100 AUD prop cash optimized for direct flash strobes and commercial studio editorial work.',
    longDescription: 'High-power studio flashes can easily wash out colors and reflect off glossy papers. This specialized photography-grade stack is printed on ultra-white matte paper with enriched color depth. Features higher contrast greens to resolve perfectly under direct strobes, retaining high-end texture.',
    category: 'photography-props',
    sku: 'AUD-P100-STK',
    seoTitle: 'Photography Flash-Safe $100 Prop Cash - Studio Grade',
    metaDescription: '100 notes of high-contrast $100 Australian prop cash. Designed for high-strobe studio lighting, editorial photography, and catalog shoots.',
    image: 'images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack',
    gallery: ['images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack'],
    stockStatus: 'in-stock',
    relatedProducts: ['aesthetic-flatlay-fan', 'instagram-luxury-roll'],
    features: [
      'Super high-density organic matte ink (zero reflection)',
      'Slightly boosted color contrast to resolve under intense flash',
      'Includes 100 crisp notes and custom photographer band',
      'RBA compliant specifications'
    ],
    specifications: {
      'Paper Grade': 'High-Contrast Studio Art Paper (90gsm)',
      'Reflectivity': '0% Gloss Level (Totally Flat)',
      'Note Count': '100 Notes',
      'Dimensions': '158mm x 65mm'
    }
  },
  {
    id: 'aesthetic-flatlay-fan',
    name: 'Aesthetic Flatlay Loose Prop Currency Fan',
    price: 40.00,
    description: 'A pre-fanned bundle of 30 loose $100 and $50 notes on a micro-adhesive spine for quick flatlay layouts.',
    longDescription: 'Ideal for product photographers, graphic designers, and commercial catalog shoots. This prop consists of 30 dual-sided banknotes (15x $100s, 15x $50s) pre-arranged in a perfect, elegant fan and secured on a low-tack reusable adhesive spine. Speeds up flatlay setup and guarantees aesthetic angles.',
    category: 'photography-props',
    sku: 'AUD-P-FAN',
    seoTitle: 'Flatlay Prop Cash Fan $100/$50 - Reusable Low-Tack Spine',
    metaDescription: '30 pre-fanned Australian replica banknotes ($100s and $50s) on a low-tack reusable adhesive. Perfect for product photography layouts.',
    image: 'images/products/Photography-Props/Aesthetic-Flatlay-Loose-Prop-Currency-Fan',
    gallery: ['images/products/Photography-Props/Aesthetic-Flatlay-Loose-Prop-Currency-Fan'],
    stockStatus: 'in-stock',
    relatedProducts: ['studio-high-contrast-100', 'instagram-luxury-roll'],
    features: [
      'Pre-fanned layout saves photography styling time',
      'Low-tack spine allows individual note removal if desired',
      'Mixed denominations ($100 and $50 notes)',
      'Perfect for cosmetic, sneaker, or tech lifestyle shoots'
    ],
    specifications: {
      'Note Count': '30 Notes (15x $100, 15x $50)',
      'Spine Type': 'Low-Tack Non-Residue Silicone Adhesive',
      'Reusability': 'Up to 100 flatlay setups',
      'Finish': 'Extra-Matte Photographic Grade'
    }
  },
  {
    id: 'instagram-luxury-roll',
    name: 'Instagram Influencer Luxury Cash Roll',
    price: 50.00,
    description: 'A tight roll of 50 replica notes secured with a heavy-duty gold elastic-metallic band. Great for influencer posts.',
    longDescription: 'Replicate social media wealth or lifestyle branding with our Instagram Cash Roll. Features 50 crisp, double-sided replica $100 notes rolled tightly together and bound by an elegant gold metallic band. Fits perfectly in hands, designer bags, or luxury setups.',
    category: 'photography-props',
    sku: 'AUD-P-ROLL',
    seoTitle: 'Instagram Influencer Cash Roll Prop - Luxury Lifestyle Props',
    metaDescription: '50 tightly rolled $100 Australian replica banknotes with a gold metallic elastic band. Ideal for lifestyle blogging and social media.',
    image: 'images/products/Photography-Props/Instagram-Influencer-Luxury-Cash-Roll',
    gallery: ['images/products/Photography-Props/Instagram-Influencer-Luxury-Cash-Roll'],
    stockStatus: 'in-stock',
    relatedProducts: ['aesthetic-flatlay-fan', 'hiphop-video-rain-pack'],
    features: [
      'Pre-rolled and ready to photograph',
      'High-contrast rich green printing',
      'Includes premium elastic gold-foil bands',
      'Conforms to all RBA security rules'
    ],
    specifications: {
      'Note Count': '50 Notes ($5,000 Face Value)',
      'Band Material': 'Gold Foil Elasticized Polyester',
      'Paper Grade': 'Supple Folding-Grade Bond',
      'Roll Diameter': '50mm'
    }
  },
  {
    id: 'hyper-matte-closeup-macro',
    name: 'Hyper-Matte Close-Up Macro Prop Stack',
    price: 70.00,
    description: 'Specially printed stack with enhanced microscopic fiber print. Ideal for close-up macro focal shots.',
    longDescription: 'For directors planning extreme close-up shots of cash being counted, this stack features enhanced macro-print textures simulating fine paper fibers. Replicates the intricate micro-printing of Australian banknotes while keeping compliant "SPECIMEN" markings clear. Superb resolving capability.',
    category: 'photography-props',
    sku: 'AUD-P-MAC',
    seoTitle: 'Macro Close-Up Prop Money Stack - Micro-Texture Prints',
    metaDescription: 'Close-up macro grade Australian $100 replica notes. High resolution fiber simulation print, 100% matte, no lens flares.',
    image: 'images/products/Photography-Props/Hyper-Matte-Close-Up-Macro-Prop-Stack',
    gallery: ['images/products/Photography-Props/Hyper-Matte-Close-Up-Macro-Prop-Stack'],
    stockStatus: 'low-stock',
    relatedProducts: ['studio-high-contrast-100', 'action-heist-100-aged'],
    features: [
      'Micro-texture ink layering for tactile realism',
      'Crisp, ultra-high resolution details',
      'Designed for extreme 8K macro lens close-ups',
      '100 notes in high-durability bank strap'
    ],
    specifications: {
      'Print Resolution': '1200 DPI Micro-Plate Press',
      'Paper Type': '100gsm High-Density Fibrous Cotton',
      'Note Count': '100 Notes',
      'Dimensions': '158mm x 65mm'
    }
  },
  {
    id: 'hiphop-video-rain-pack',
    name: 'Hip-Hop Video Multi-Denom Rain Pack',
    price: 120.00,
    description: 'Jumbo loose currency box containing 300 mixed notes ($100, $50, $20) engineered to float slowly in air. Perfect for "cash rain" shots.',
    longDescription: 'Engineered specifically for high-speed slow-motion camera shots (e.g. 120fps or 240fps) in music videos. These 300 loose notes are printed on a customized, ultra-lightweight 60gsm paper that increases wind drag, causing the cash to float and spin longer when tossed in the air.',
    category: 'photography-props',
    sku: 'AUD-P-RAIN',
    seoTitle: 'Music Video Cash Rain Pack - 300 Loose Floating Notes',
    metaDescription: '300 loose mixed Australian prop banknotes ($100s, $50s, $20s). Printed on lightweight floating paper for epic slow-motion music videos.',
    image: 'images/products/Photography-Props/Hip-Hop-Video-Multi-Denom-Rain-Pack',
    gallery: ['images/products/Photography-Props/Hip-Hop-Video-Multi-Denom-Rain-Pack'],
    stockStatus: 'in-stock',
    relatedProducts: ['instagram-luxury-roll', 'indie-film-crew-pack'],
    features: [
      '300 loose notes total (100x $100, 100x $50, 100x $20)',
      'Custom 60gsm lightweight paper (25% slower fall rate)',
      'Unbound notes packed in a quick-distribution dispenser box',
      'Provides high-fidelity visual density on club sets'
    ],
    specifications: {
      'Total Notes': '300 Notes',
      'Mixed Ratio': '1:1:1 ($100, $50, $20)',
      'Paper Weight': '60gsm Light Aero-Bond',
      'Dispenser': 'Heavy-duty prop cardboard dispenser carton'
    }
  },

  // 5. TRAINING CURRENCY
  {
    id: 'bank-teller-training-kit',
    name: 'Bank Teller Training Starter Bundle',
    price: 95.00,
    description: 'Professional cashier and bank teller training kit containing 3 stacks of $50s, $20s, and $10s notes. Heavy duty paper.',
    longDescription: 'Adopted by prominent financial colleges and retail associations across Australia, this kit is designed to train employees in high-speed manual cash handling, count-backs, and cash register balancing. The notes have standard dimensions and matching friction coefficients to mimic real banknotes.',
    category: 'training-currency',
    sku: 'AUD-TR-BND',
    seoTitle: 'Bank Teller Training Prop Cash Pack - Retail Trainer Cash',
    metaDescription: 'Professional cashier training money set. 3 stacks of Australian replica notes ($50, $20, $10) for register count training.',
    image: 'images/products/Training-Currency/Bank-Teller-Training-Starter-Bundle',
    gallery: ['images/products/Training-Currency/Bank-Teller-Training-Starter-Bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['security-cash-handler-trainer', 'retail-register-training-kit'],
    features: [
      'Standard currency size scale and matching paper thickness',
      'Non-glossy high-friction texture for authentic sorting feel',
      'Prominent "FOR TRAINING USE ONLY - NOT LEGAL TENDER" indicators',
      'Includes 300 individual notes (3 full stacks)'
    ],
    specifications: {
      'Paper Type': '80gsm Calendered Friction-Match Paper',
      'Contents': '1x $50 Stack, 1x $20 Stack, 1x $10 Stack',
      'Package Weight': '450g',
      'Standards': 'Fully compliant with retail training curricula'
    }
  },
  {
    id: 'security-cash-handler-trainer',
    name: 'Security Transport Cash Handler Trainer',
    price: 110.00,
    description: 'Heavy duty, bulk stack of 100 notes of $100 currency specifically calibrated for cash-in-transit (CIT) armored car safety drills.',
    longDescription: 'Specially optimized for cash-in-transit security crews, armored car training divisions, and tactical heist response exercises. Printed on robust 100gsm card-bond that withstands drop testing, mock hostages, and extreme physical handling in drills.',
    category: 'training-currency',
    sku: 'AUD-TR-HD',
    seoTitle: 'CIT Security Transport Cash Trainer - High-Durability Props',
    metaDescription: 'Armored car crew training banknotes. 100 heavy duty $100 Australian replica prop bills. Built to withstand physical drills.',
    image: 'images/products/Training-Currency/Security-Transport-Cash-Handler-Trainer',
    gallery: ['images/products/Training-Currency/Security-Transport-Cash-Handler-Trainer'],
    stockStatus: 'in-stock',
    relatedProducts: ['bank-teller-training-kit', 'gaming-club-croupier-practice'],
    features: [
      'Ultra-durable 100gsm paper (tear-resistant)',
      'Highly legible "TRAINING SPECIMEN" banners across both sides',
      'Includes extra-tough security transport bag',
      'Perfect for heavy duty outdoor drills and safe-deposits'
    ],
    specifications: {
      'Paper Weight': '100gsm Heavy-Duty Reinforced Card-Bond',
      'Note Count': '100 Notes of $100',
      'Packaging': 'Zippered ballistic canvas transport pouch',
      'Dimensions': '158mm x 65mm'
    }
  },
  {
    id: 'gaming-club-croupier-practice',
    name: 'Gaming Club Croupier Practice Currency',
    price: 60.00,
    description: 'A dedicated set of 100 crisp notes of $50 for croupier dealer schools, blackjack practice, and high-roller layouts.',
    longDescription: 'Specially crafted for Australian casino training academies and croupier schools. Includes 100 double-sided notes of $50 notes printed with specialized slip coating, which allows croupiers to easily count, slide, and collect cash at high speed across speed felt tables.',
    category: 'training-currency',
    sku: 'AUD-TR-CRP',
    seoTitle: 'Casino Croupier Training Cash $50 - Slip-Coated Replicas',
    metaDescription: '100 notes of croupier training $50 banknotes. Special slip coating for casino training schools and dealer practice.',
    image: 'images/products/Training-Currency/Gaming-Club-Croupier-Practice-Currency',
    gallery: ['images/products/Training-Currency/Gaming-Club-Croupier-Practice-Currency'],
    stockStatus: 'in-stock',
    relatedProducts: ['bank-teller-training-kit', 'security-cash-handler-trainer'],
    features: [
      'Specialized low-friction surface coating (easy sliding)',
      'Perfect blackjack table weight calibration',
      'Bold legal specimen banners to ensure zero confusion',
      'Includes 100 replica notes in secure band'
    ],
    specifications: {
      'Surface Finish': 'Low-Friction Slip-Satin Finish',
      'Note Count': '100 Notes',
      'Paper Weight': '85gsm Coated Art',
      'Dimensions': '151mm x 65mm'
    }
  },
  {
    id: 'retail-register-training-kit',
    name: 'Retail Cash Register Training Kit',
    price: 75.00,
    description: 'A compact retail-grade training bundle with 50 notes of each denomination ($100, $50, $20, $10) for small businesses.',
    longDescription: 'Designed for small retail stores, cafes, and hospitality businesses to train new cashiers on register reconciliation, counterfeit detection protocols, and cash security habits. Includes a compact compartment organizer.',
    category: 'training-currency',
    sku: 'AUD-TR-REG',
    seoTitle: 'Retail Cashier Cash Register Training Set - 200 Notes',
    metaDescription: 'Retailer cash register balancing starter kit. 200 mixed Australian replica prop banknotes for cash register onboarding.',
    image: 'images/products/Training-Currency/Retail-Cash-Register-Training-Kit',
    gallery: ['images/products/Training-Currency/Retail-Cash-Register-Training-Kit'],
    stockStatus: 'in-stock',
    relatedProducts: ['bank-teller-training-kit', 'classroom-play-pack'],
    features: [
      '200 mixed notes total (50x each of $100, $50, $20, $10)',
      'Clear, high-contrast training markings',
      'Comes with a 4-slot heavy-duty card stock register organizer tray',
      'Great onboarding tool for retail managers'
    ],
    specifications: {
      'Total Notes': '200 Notes',
      'Material': 'Calendered Matte Bond',
      'Organizer Tray': 'Included (Corrugated 4-slot tray)',
      'Face Value (Prop)': '$9,000 Total'
    }
  },
  {
    id: 'classroom-play-pack',
    name: 'Classroom Finance Education Play Pack',
    price: 45.00,
    description: 'An educational set of 150 low-value banknotes ($20, $10, $5) for high school and primary economics classes.',
    longDescription: 'Re-engineered for high-school mathematics, personal finance workshops, and primary school play environments. This comprehensive pack contains 150 double-sided play banknotes ($20s, $10s, and $5s) that teach kids budgeting, transaction arithmetic, and saving structures.',
    category: 'training-currency',
    sku: 'AUD-TR-EDU',
    seoTitle: 'Classroom Toy Money Kit - Australian School Finance Play Cash',
    metaDescription: '150 play currency notes for Australian schools. High durability matte card, distinct color coding. Perfect for math and economics classes.',
    image: 'images/products/Training-Currency/Classroom-Finance-Education-Play-Pack',
    gallery: ['images/products/Training-Currency/Classroom-Finance-Education-Play-Pack'],
    stockStatus: 'in-stock',
    relatedProducts: ['retail-register-training-kit', 'bank-teller-training-kit'],
    features: [
      '150 mixed play bills (50x $20, 50x $10, 50x $5)',
      'Vibrant colors matching actual currency families',
      'Oversized "PLAY CURRENCY" stamp across front and back',
      'Rounded edges to prevent paper cuts on small fingers'
    ],
    specifications: {
      'Total Notes': '150 Notes',
      'Material': 'Non-toxic vegetable ink on recycled 90gsm card',
      'Target Audience': 'Recommended for schools (Ages 5+)',
      'Certificate': '100% Kid-Safe Lead-Free Certification'
    }
  },

  // 6. WHOLESALE PACKS
  {
    id: 'millionaire-heist-crate',
    name: 'The Millionaire Heist Master Crate (100 Stacks)',
    price: 1450.00,
    description: 'Bulk wholesale container containing 100 individual stacks of $100 cash props ($1,000,000 prop value). Ships in wooden military-grade crate.',
    longDescription: 'Our ultimate volume offering. Designed for large-scale cinema productions, television studio reserves, and wholesale distribution. Contains 10,000 individual notes of RBA-compliant $100 prop banknotes pre-packaged into 100 separate stacks. Safely crated in a custom-built prop pine shipping container with military style steel latches.',
    category: 'bundle-packs',
    sku: 'AUD-W-MIL',
    seoTitle: 'Million Dollar Prop Cash Crate - 100 Stacks Wholesale',
    metaDescription: 'Bulk Australian prop money crate. Includes 100 full stacks of $100 prop notes ($1M face value) packed inside a movie prop wooden shipping crate.',
    image: 'images/products/Bundle-Packs/The-Millionaire-Heist-Master-Crate-(100 Stacks)',
    gallery: ['images/products/Bundle-Packs/The-Millionaire-Heist-Master-Crate-(100 Stacks)'],
    stockStatus: 'in-stock',
    relatedProducts: ['high-stakes-ransom-briefcase', 'commercial-bulk-reserve-50'],
    features: [
      '10,000 dual-sided $100 prop notes total',
      'Bundled into 100 standard paper currency band stacks',
      'Ships inside a vintage-style stenciled wooden prop crate',
      'Saves over 75% compared to individual stack requisitions'
    ],
    specifications: {
      'Total Banknotes': '10,000 Notes',
      'Stack Count': '100 Stacks of $100s',
      'Total Prop Value': '$1,000,000 USD Face',
      'Crate Material': 'Custom pine wood container with iron fittings',
      'Crate Dimensions': '480mm x 320mm x 260mm',
      'Weight Packed': '11.5kg'
    }
  },
  {
    id: 'high-stakes-ransom-briefcase',
    name: 'High-Stakes Ransom Briefcase Pro (20 Stacks)',
    price: 595.00,
    description: 'Lockable high-grade aluminum security briefcase packed with 20 stacks of $100 cash props ($200,000 prop value) arranged flatly.',
    longDescription: 'The classic heist or ransom drop-off accessory. Features a heavy-duty, commercial-grade lockable black aluminum briefcase with a custom foam cut-out that arranges 20 full stacks of $100 prop cash flatly for maximum visual exposure. Perfect for ransom drops, high-level trades, or detective raids.',
    category: 'bundle-packs',
    sku: 'AUD-W-CASE',
    seoTitle: 'Ransom Briefcase Pro with 20 Cash Stacks - Prop Briefcase',
    metaDescription: 'Commercial lockable prop briefcase flat-packed with 20 premium $100 Australian prop stacks ($200,000 face value). Outstanding movie realism.',
    image: 'images/products/Bundle-Packs/High-Stakes-Ransom-Briefcase-Pro-(20 Stacks)',
    gallery: ['images/products/Bundle-Packs/High-Stakes-Ransom-Briefcase-Pro-(20 Stacks)'],
    stockStatus: 'in-stock',
    relatedProducts: ['millionaire-heist-crate', 'commercial-bulk-reserve-50'],
    features: [
      'Premium lockable black security briefcase with customizable foam',
      'Includes 2000 individual $100 prop bills arranged in 20 stacks',
      'Ready to film out of the box with zero styling needed',
      'Unbelievable value and epic screen impact'
    ],
    specifications: {
      'Total Banknotes': '2,000 Notes (20 Stacks)',
      'Briefcase Style': 'Hard-Shell Reinforced Anodized Black Aluminum',
      'Briefcase Locks': 'Dual resettable 3-digit combinations',
      'Briefcase Dimensions': '460mm x 330mm x 110mm',
      'Total Weight Packed': '4.2kg'
    }
  },
  {
    id: 'indie-film-crew-pack',
    name: 'Indie Film Crew Full-Range Pack (10 Stacks)',
    price: 295.00,
    description: 'Curated filmmaker pack containing 10 mixed stacks ($100s, $50s, $20s, $10s). Excellent entry-level production kit.',
    longDescription: 'The ultimate starter package for independent filmmakers and small production houses. Contains 10 crisp prop money stacks in mixed denominations: 4 stacks of $100, 3 stacks of $50, 2 stacks of $20, and 1 stack of $10 ($56,000 face value prop). Perfect to cover any script requirement.',
    category: 'bundle-packs',
    sku: 'AUD-W-IND',
    seoTitle: 'Filmmaker Mixed Prop Money Pack - 10 Stacks Bulk',
    metaDescription: '10 mixed stacks of Australian prop notes ($100s, $50s, $20s, $10s) in a bulk pack. Engineered for indie filmmakers, theatres and cameras.',
    image: 'images/products/Bundle-Packs/Indie-Film-Crew-Full-Range-Pack-(10 Stacks)',
    gallery: ['images/products/Bundle-Packs/Indie-Film-Crew-Full-Range-Pack-(10 Stacks)'],
    stockStatus: 'in-stock',
    relatedProducts: ['high-stakes-ransom-briefcase', 'commercial-bulk-reserve-50'],
    features: [
      '1,000 individual dual-sided banknotes (10 stacks)',
      'Includes mixed denominations for script flexibility',
      'Saves over 40% compared to buying stacks separately',
      'RBA specification compliant'
    ],
    specifications: {
      'Total Notes': '1,000 Notes',
      'Denominations': '4x $100, 3x $50, 2x $20, 1x $10 Stacks',
      'Total Prop Value': '$56,000 Face',
      'Weight Packed': '1.3kg'
    }
  },
  {
    id: 'commercial-bulk-reserve-50',
    name: 'Commercial Producer Bulk Reserve (50 Stacks)',
    price: 850.00,
    description: 'Wholesale reserve pack containing 50 stacks of $100 notes ($500,000 face value) inside a locked courier security pouch.',
    longDescription: 'Designed for production coordinators, ad agencies, and prop warehouse rentals. Contains 50 stacks of crisp, premium-grade $100 notes packaged in bundles inside a heavy-duty locked courier transport security pouch. Perfect for filling vault safes.',
    category: 'bundle-packs',
    sku: 'AUD-W-RES',
    seoTitle: '50 Stacks $100 Bulk Prop Money - TV Producer Reserve',
    metaDescription: '50 stacks of $100 Australian replica currency ($500,000 face) in a locked ballistic transport bag. Bulk studio discount pack.',
    image: 'images/products/Bundle-Packs/Commercial-Producer-Bulk-Reserve-(50 Stacks)',
    gallery: ['images/products/Bundle-Packs/Commercial-Producer-Bulk-Reserve-(50 Stacks)'],
    stockStatus: 'in-stock',
    relatedProducts: ['millionaire-heist-crate', 'high-stakes-ransom-briefcase'],
    features: [
      '5,000 individual premium double-sided banknotes',
      'Saves over 65% on catalog pricing',
      'Packed inside a heavy duty zippered security courier pouch',
      'No-glare studio-matte finish'
    ],
    specifications: {
      'Total Banknotes': '5,000 Notes',
      'Stack Count': '50 Stacks of $100s',
      'Bag Material': 'Reinforced 1680D Ballistic Nylon',
      'Weight Packed': '5.8kg'
    }
  },
  {
    id: 'prop-wholesaler-mega-box',
    name: 'Production Supply Wholesaler Mega Box',
    price: 1950.00,
    description: 'Giant mixed bulk container featuring 150 stacks of all denominations ($100s down to $5s). Custom studio vault supply.',
    longDescription: 'Specially created for costume hire warehouses, theatrical supply rental houses, and multi-franchise production agencies. Contains 150 stacks of currency including $100, $50, $20, $10, and $5 prop stacks, safely boxed in a giant weather-proof flight-grade transit trunk.',
    category: 'bundle-packs',
    sku: 'AUD-W-MEGA',
    seoTitle: 'Bulk Prop Money Flight Case Trunk - 150 Mixed Stacks',
    metaDescription: '150 mixed stacks of Australian prop notes in a hard flight case. Absolute ultimate wholesale volume offering for major studios.',
    image: 'images/products/Bundle-Packs/Production-Supply-Wholesaler-Mega-Box',
    gallery: ['images/products/Bundle-Packs/Production-Supply-Wholesaler-Mega-Box'],
    stockStatus: 'low-stock',
    relatedProducts: ['millionaire-heist-crate', 'commercial-bulk-reserve-50'],
    features: [
      '15,000 banknotes total across all denominations',
      'Heavy-duty industrial flight transit case trunk with rolling wheels',
      'Maximum bulk discount (Saves over 80% compared to retail)',
      '100% compliant with RBA specimen laws'
    ],
    specifications: {
      'Total Notes': '15,000 Notes',
      'Included Stacks': '50x $100, 40x $50, 30x $20, 20x $10, 10x $5 Stacks',
      'Trunk Style': 'Flight trunk case with aluminum edges and lockable latches',
      'Weight Packed': '18.2kg',
      'Dimensions': '600mm x 400mm x 350mm'
    }
  },
  // 7. NEW AUSTRALIAN PROP MONEY INDIVIDUAL PRODUCTS
  {
    id: 'aud-100-new-polymer-note',
    name: '$100 Australian Prop Money (New Polymer Note)',
    price: 60.00,
    description: 'High-quality, realistic single replica of the new polymer series $100 banknote. Perfect for film close-ups, theatrical plays, and media training.',
    longDescription: 'Designed with high-fidelity detail for professional production use, our $100 Australian Prop Money (New Polymer Note) replica matches the vibrant color-balance and modern design of the current Australian currency. Made of premium matte, non-glare stock, this prop ensures clear 4K digital capture with zero reflection under bright studio lights. Securely complies with all Reserve Bank of Australia (RBA) guidelines.',
    category: 'australian-notes',
    sku: 'AUD-N100-POLY',
    seoTitle: 'New Polymer $100 Australian Prop Money | Premium Movie Prop',
    metaDescription: 'Shop realistic New Polymer $100 Australian Prop Money. Exquisite details, non-glare finish, and compliant with RBA design guidelines.',
    image: 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-front',
    gallery: ['images/products/Australian Notes/New-Notes/100 AUD/100-aud-front','images/products/Australian Notes/New-Notes/100 AUD/100-aud-back','images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack','images/products/Australian Notes/New-Notes/100 AUD/100-aud-bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-100-new-stack', 'aud-50-new-polymer-note', 'aud-20-new-polymer-note'],
    features: [
      'Dual-sided premium matte printing (No studio glare)',
      'Accurate dimensions conforming to legal requirements',
      'Perfect for cinema, theatre, photography and TV',
      'Clear legal markings compliant with RBA guidelines'
    ],
    specifications: {
      'Paper Type': 'Premium Heavyweight Matte Paper',
      'Ink Type': 'Non-Reflective Organic UV Ink',
      'Dimensions': '158mm x 65mm (Standard Scale)'
    }
  },
  {
    id: 'aud-50-new-polymer-note',
    name: '$50 Australian Prop Money (New Polymer Note)',
    price: 50.00,
    description: 'Realistic replica of the new polymer series $50 banknote. Perfect for close-up shots, actor counts, and media training.',
    longDescription: 'Our $50 Australian Prop Money (New Polymer Note) reproduces the current modern banknote series\' stunning gold-yellow palette. Optimized specifically for modern high-definition video sensors, this note features double-sided printing on fine-matte heavyweight paper. Delivers zero camera glare and an authentic paper-snap sound for extreme realism on set.',
    category: 'australian-notes',
    sku: 'AUD-N50-POLY',
    seoTitle: 'New Polymer $50 Australian Prop Money | Cinematic Film Replica',
    metaDescription: 'Buy New Polymer $50 Australian Prop Money. Calibrated gold-yellow color, dual-sided non-glare matte print, 100% legal RBA compliance.',
    image: 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-front',
    gallery: ['images/products/Australian Notes/New-Notes/50 AUD/50-aud-front','images/products/Australian Notes/New-Notes/50 AUD/50-aud-back','images/products/Australian Notes/New-Notes/50 AUD/50-aud-stack','images/products/Australian Notes/New-Notes/50 AUD/50-aud-bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-50-new-stack', 'aud-100-new-polymer-note', 'aud-20-new-polymer-note'],
    features: [
      'Realistic gold-yellow color match',
      'Dual-sided non-glossy premium finish',
      'Great tactile feel and natural paper snap',
      'Fully compliant with RBA guidelines'
    ],
    specifications: {
      'Paper Type': 'Premium Heavyweight Matte Paper',
      'Ink Type': 'Non-Reflective Organic UV Ink',
      'Dimensions': '151mm x 65mm (Standard Scale)'
    }
  },
  {
    id: 'aud-20-new-polymer-note',
    name: '$20 Australian Prop Money (New Polymer Note)',
    price: 40.00,
    description: 'Replica of the current polymer $20 banknote. High durability matte paper, perfect deep red-orange hue, and zero studio reflections.',
    longDescription: 'Featuring the rich, modern red-orange tones of Australia’s current currency, our $20 Australian Prop Money (New Polymer Note) is calibrated to avoid sensor oversaturation in film and television workflows. The dual-sided matte design removes unwanted light bounce, making it perfect for flatlays, street deal mockups, and quick actor trades.',
    category: 'australian-notes',
    sku: 'AUD-N20-POLY',
    seoTitle: 'New Polymer $20 Australian Prop Money | Photographic Grade Note',
    metaDescription: 'Shop high-quality New Polymer $20 Australian Prop Money. Vivid red-orange tones, non-glare matte finish, ideal for action scenes.',
    image: 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-front',
    gallery: ['images/products/Australian Notes/New-Notes/20 AUD/20-aud-front','images/products/Australian Notes/New-Notes/20 AUD/20-aud-back','images/products/Australian Notes/New-Notes/20 AUD/20-aud-stack','images/products/Australian Notes/New-Notes/20 AUD/20-aud-bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-20-new-stack', 'aud-100-new-polymer-note', 'aud-50-new-polymer-note'],
    features: [
      'Accurate red-orange gradient matching',
      'Dual-sided non-reflective premium print',
      'Crisp handling response for counting scenes',
      'RBA compliant legal specimen markings'
    ],
    specifications: {
      'Paper Type': 'Premium Heavyweight Matte Paper',
      'Ink Type': 'Non-Reflective Organic UV Ink',
      'Dimensions': '144mm x 65mm (Standard Scale)'
    }
  },
  {
    id: 'aud-100-classic-note',
    name: '$100 Australian Prop Money (Classic Note)',
    price: 65.00,
    description: 'Vintage-style paper-series Australian $100 prop bill. Replicates the nostalgic pre-1996 green cotton-paper currency look.',
    longDescription: 'Designed for historical period productions, 80s/90s crime dramas, and flashback set designs, our $100 Australian Prop Money (Classic Note) perfectly captures the nostalgia of the original paper notes. Crafted from premium pre-softened paper, it features the iconic retro green palette and authentic tactile texture.',
    category: 'australian-notes',
    sku: 'AUD-C100-NOTE',
    seoTitle: 'Classic Vintage $100 Australian Prop Money | Period Film Prop',
    metaDescription: 'Buy vintage-style Classic Paper $100 Australian Prop Money. Authentic 1980s-90s retro green aesthetic, ideal for historical dramas.',
    image: 'images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-front',
    gallery: ['images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-front','images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-back','images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-stack','images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-100-classic-stack', 'aud-50-classic-note', 'aud-20-classic-note'],
    features: [
      'Vintage green-hued retro aesthetic',
      'Double-sided print on specialized pre-softened paper',
      'Authentic vintage paper thickness and dimensions',
      'Compliant with legal specimen rules'
    ],
    specifications: {
      'Paper Type': 'Pre-Softened Cotton-Bond Blend',
      'Style': 'Pre-1996 Australian Paper Currency',
      'Dimensions': '172mm x 82mm'
    }
  },
  {
    id: 'aud-50-classic-note',
    name: '$50 Australian Prop Money (Classic Note)',
    price: 55.00,
    description: 'Nostalgic replica of the pre-1996 paper $50 note. Beautiful color-matching, vintage paper feel, and RBA compliant design.',
    longDescription: 'Our $50 Australian Prop Money (Classic Note) takes your viewers back to the decades of paper money. Printed on premium matte cotton-rich stock, this replica note delivers the genuine yellow-gold retro tone and soft-handling qualities of pre-1996 currency, providing high-fidelity visual and auditory realism on set.',
    category: 'australian-notes',
    sku: 'AUD-C50-NOTE',
    seoTitle: 'Classic Vintage $50 Australian Prop Money | Retro Movie Cash',
    metaDescription: 'Shop vintage-style Classic Paper $50 Australian Prop Money. High-quality nostalgia-grade print on soft-textured matte paper.',
    image: 'images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-front',
    gallery: ['images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-front','images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-back','images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-stack','images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-50-classic-stack', 'aud-100-classic-note', 'aud-20-classic-note'],
    features: [
      'Retro pre-1996 gold-yellow aesthetic',
      'Dual-sided print on matte textured paper',
      'Authentic retro dimensions',
      'Fully compliant with legal specimen markings'
    ],
    specifications: {
      'Paper Type': 'Pre-Softened Cotton-Bond Blend',
      'Style': 'Pre-1996 Australian Paper Currency',
      'Dimensions': '165mm x 78mm'
    }
  },
  {
    id: 'aud-20-classic-note',
    name: '$20 Australian Prop Money (Classic Note)',
    price: 45.00,
    description: 'Replica of the pre-1996 classic paper $20 banknote. Rich retro orange hue, matte cotton stock, ideal for period scenes.',
    longDescription: 'Perfect for recreating 80s cash-in-hand exchanges, our $20 Australian Prop Money (Classic Note) replicates the old paper notes with a stunning warm orange-brown color scale. Printed on soft-textured, non-glare art stock, this prop ensures outstanding cinematic integration under vintage lighting setups.',
    category: 'australian-notes',
    sku: 'AUD-C20-NOTE',
    seoTitle: 'Classic Vintage $20 Australian Prop Money | Historical Drama Prop',
    metaDescription: 'Buy retro Classic Paper $20 Australian Prop Money. Beautiful design, authentic pre-1996 paper-series orange tone, 100% legal.',
    image: 'images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-front',
    gallery: ['images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-front','images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-back','images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-stack','images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-bundle'],
    stockStatus: 'in-stock',
    relatedProducts: ['aud-20-classic-stack', 'aud-100-classic-note', 'aud-50-classic-note'],
    features: [
      'Classic pre-1996 warm orange aesthetic',
      'Double-sided print on non-glare cotton stock',
      'Standard vintage dimensions and scale',
      'RBA compliant legal disclaimers'
    ],
    specifications: {
      'Paper Type': 'Pre-Softened Cotton-Bond Blend',
      'Style': 'Pre-1996 Australian Paper Currency',
      'Dimensions': '160mm x 74mm'
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
{
    id: 'prop-money-legality-australia',
    title: 'The Legality of Prop Money in Australia: What Filmmakers Need to Know',
    excerpt: 'Using fake currency for film and TV in Australia is governed by strict laws. Discover how to stay 100% compliant with the Reserve Bank of Australia.',
    content: 'Filming in Australia with replica currency is highly regulated. The Reserve Bank of Australia (RBA) sets strict rules to prevent counterfeit confusion while still allowing creative productions to thrive. To be fully legal, prop money must meet specific guidelines regarding size (it must be significantly larger or smaller than genuine notes, or printed only on one side) and must clearly display words like "SPECIMEN" or "PROP ONLY" in a prominent font. Additionally, the texture and paper weight must be noticeably different from real legal tender. Our products at Australian Prop Money are meticulously designed in cooperation with legal specialists to ensure they are 100% RBA-compliant, meaning you can shoot your film, commercial, or play with total peace of mind. Never risk your production or legal standing by using non-compliant prints.',
    date: 'July 5, 2026',
    category: 'Legality',
    readTime: '5 min read',
    image: 'images/blog/1'
  },
  {
    id: 'lighting-prop-money-camera',
    title: 'How to Light and Shoot Prop Cash to Look 100% Realistic on Screen',
    excerpt: 'Are your prop bills looking fake on camera? Our lead set designer shares professional lighting and camera angle techniques for high-end results.',
    content: 'Lighting paper props is a subtle art. One of the biggest giveaways of low-quality prop money is the "plastic shine" or paper glare caused by high-powered studio lights. Genuine bills have a very specific matte, fibrous look. When shooting scenes involving prop stacks, avoid direct, hard key-lights that create reflections. Instead, use soft diffusers, indirect bounce boards, or backlighting to accentuate the paper texture. Our prop bills are manufactured with heavy matte non-glare ink which absorbs light rather than bouncing it back. Another trick is to angle the stacks slightly away from the lens and use a shallow depth of field (low f-stop like f/2.8 or f/1.8) to keep focus sharp on the character handling the money while keeping the background stacks beautifully soft, adding instant cinematic value to your frame.',
    date: 'June 28, 2026',
    category: 'Production Tips',
    readTime: '4 min read',
    image: 'images/blog/2'
  },
  {
    id: 'aged-money-tutorial',
    title: 'Aged vs. Crisp: Choosing the Right Prop Aesthetic for Your Character',
    excerpt: 'The condition of a character’s money tells a rich story. Learn how to align your prop money selection with your film’s narrative arc.',
    content: 'Every prop on set should contribute to character development. If your scene involves a wealthy executive opening a bank vault, crisp, perfectly banded, fresh-looking New Series stacks are appropriate. However, if your scene involves a street-level transaction, a ransom drop-off, or a cash stash hidden under floorboards, brand-new crisp notes will look artificial and ruin the suspension of disbelief. Heavily weathered, creased, and custom-stained prop bills tell the viewer that the cash has a history, that it has passed through dirty hands, and that it represents a gritty, high-stakes situation. At Australian Prop Money, we offer professional hand-aged options that use real pigment washes and manual distressing to give directors that tactile, lived-in cinematic reality.',
    date: 'June 15, 2026',
    category: 'Set Design',
    readTime: '6 min read',
    image: 'images/blog/3'
  },
  {
    id: 'crime-drama-props',
    title: 'Behind the Scenes: Sourcing Authentic Props for Australian Crime Dramas',
    excerpt: 'From police records to stacks of cash, see how Aussie crime drama art directors build tension and realism on set.',
    content: 'Aussie crime dramas have a unique, gritty look. Building realism requires more than just throwing items together. Props like cash stacks are central to heist plots, and they must appear completely natural. Art directors work closely with our local Sydney warehouse to procure custom-worn cash blocks, sealed cop evidence bags, and drug-deal briefcases. Using local prop manufacturers ensures all shipping is secure, bypassing the risk of customs intercepts that occur with cheap overseas replicas.',
    date: 'June 02, 2026',
    category: 'Industry Insights',
    readTime: '5 min read',
    image: 'images/blog/4'
  },
  {
    id: 'evolution-of-prop-money',
    title: 'The Evolution of Currency Props in Modern Cinema History',
    excerpt: 'A history of how Hollywood and Australian studios transitioned from mock paper drawings to high-fidelity compliant camera-ready currency props.',
    content: 'In the early days of cinema, background bills were often crude photocopies or simplified illustrations. As camera resolutions scaled to high-definition digital formats, background details could no longer be hidden with blur. Studios had to pivot toward color-calibrated, texture-rich replica props. In Australia, the introduction of unique polymer banknotes in 1992 created a unique design challenge. Standard papers would look fake next to the translucent polymer, forcing local prop designers to develop specialty calendered matte bonds that replicate polymer colors under intense studio lights while ensuring legal compliance.',
    date: 'May 20, 2026',
    category: 'Cinema History',
    readTime: '7 min read',
    image: 'images/blog/5'
  },
  {
    id: 'theatre-stage-props-cash',
    title: 'How Theatre Prop Masters Manage Cash on Stage Under Spotlight',
    excerpt: 'Live theatre demands high tactile durability and zero light reflection. We look at the prop requirements of modern stage performance.',
    content: 'Live theatre represents a high-stress arena for props. Unlike films, there are no retakes if a bill is dropped or tear occurs. Actors need props that behave naturally. Theatre prop directors favor pre-softened, cotton-bond cash props that offer high tactile compliance and distinct "crisp" sounds when counted under live acoustics. The non-reflective surface prevents blinding high-beam spot glare from disrupting front-row seating.',
    date: 'May 08, 2026',
    category: 'Stagecraft',
    readTime: '4 min read',
    image: 'images/blog/6'
  },
  {
    id: 'safe-staging-heist-scenes',
    title: 'Best Practices for Staging High-Volume Cash Heist Scenes Safely',
    excerpt: 'Tips on managing massive piles of replica cash on public streets during film shoots to avoid public alarm and stay compliant.',
    content: 'Staging bank vaults or ransom deliveries on open streets can lead to major public panic and police responses. First, clear all necessary permits with your municipal council. When filming open cash scenes, keep all currency props safely contained in marked boxes until the camera is active. Always work with licensed prop managers who carry compliance checklists demonstrating that all materials strictly carry RBA spec disclaimers.',
    date: 'April 25, 2026',
    category: 'Production Tips',
    readTime: '8 min read',
    image: 'images/blog/7'
  },
  {
    id: 'digital-sensors-vs-props',
    title: 'Why High-Resolution Digital Cameras Demand Better Film Props',
    excerpt: 'How 4K and 8K digital camera sensors expose poor quality set props, and why professional printing is required to hold cinematic immersion.',
    content: 'Digital cameras like RED, ARRI, and Sony Venice capture micro-details at levels never seen before. Standard printed fakes with grainy, low-DPI dots will instantly pixelate and break immersion. Modern prop makers utilize micro-plate lithography presses that print at 1200 DPI on specialized cotton art paper, ensuring that the currency retains pristine lines even in extreme macro lens configurations.',
    date: 'April 11, 2026',
    category: 'Technical Guides',
    readTime: '5 min read',
    image: 'images/blog/8'
  },
  {
    id: 'music-video-prop-tips',
    title: 'Top 5 Music Video Prop Disasters (And How to Avoid Them)',
    excerpt: 'From reflections to lost notes, here are five critical mistakes hip-hop and commercial video directors make with cash props.',
    content: 'Music videos are fast-paced and high-energy. However, many indie directors buy low-quality fakes from random sellers, only to discover they cause severe camera glare or reflect blue and purple hues under RGB lighting. Always use specialized non-glare prop cash, budget for loose floating paper options if doing cash rain shots, and ensure you have secure lockboxes on set to prevent real-world theft of your premium prop bundles.',
    date: 'March 29, 2026',
    category: 'Creative Direction',
    readTime: '4 min read',
    image: 'images/blog/9'
  },
  {
    id: 'prop-weathering-guide',
    title: 'A Prop Master Guide to Weathering and Distressing Paper Currency',
    excerpt: 'An inside look at the techniques prop stylists use to turn candy printed sheets into gritty, street-worn banknotes.',
    content: 'Weathering cash is a complex art form. You can’t just crumple bills. To achieve street-grade wear, stylists soak the bills in custom diluted walnut or black tea baths to stain the white fibers. Once dried, sandpaper is applied to corners to split the paper fibers, simulating heavy circulation. For extreme scenes, soot dust or water warping is applied. At Australian Prop Money, our in-house stylists do all this by hand to save productions hours of setup.',
    date: 'March 14, 2026',
    category: 'DIY Props',
    readTime: '6 min read',
    image: 'images/blog/10'
  },
  {
    id: 'creative-editorial-photography',
    title: 'Creative Photography: Elevating Editorial Shots with Props',
    excerpt: 'How to use replica notes to build high-end visual concepts in fashion, sneaker, and luxury lifestyle photography.',
    content: 'Fashion and product photography are all about story and status. Using replica money as flatlay backgrounds can add a high-end luxury touch. To shoot cash rolls or stacks cleanly under hard camera strobe flashes, choose specialized high-contrast extra-matte papers. This ensures the design pop-out beautifully without throwing reflections back into your lens.',
    date: 'February 28, 2026',
    category: 'Photography Tips',
    readTime: '5 min read',
    image: 'images/blog/11'
  },
  {
    id: 'rba-compliance-details',
    title: 'Understanding RBA Compliance: The Fine Line of Prop Replicas',
    excerpt: 'A deep dive into the legal requirements set by the Reserve Bank of Australia to ensure your production props are fully compliant and safe.',
    content: 'The Crimes (Currency) Act 1981 sets severe penalties for reproducing currency. To protect your film crew and avoid legal issues, your prop money must be easily distinguishable from genuine money. It must be significantly larger or smaller (at least 25% difference), printed on one side, or contain prominent, non-removable specimen banners. Standard paper bond must be used (never polymer), and all bills must carry "PROP MONEY ONLY" watermarks.',
    date: 'February 10, 2026',
    category: 'Legality',
    readTime: '6 min read',
    image: 'images/blog/12'
  },
  {
    id: 'training-currency-benefits',
    title: 'How Training Currency Improves Teller and Cash-Handler Training Speeds',
    excerpt: 'Why real banks and retail outlets are swapping to professional, slip-coated training money to reduce teller cash-handling mistakes.',
    content: 'Using real cash to train employees carries significant theft risks and is legally impractical. In contrast, training currency allows cashiers, casino croupiers, and armored transport crews to master cash sorting, counting, and register balancing in a safe environment. Slip-coated training bills mimic the touch and weight of actual polymer banknotes, speeding up muscle memory development.',
    date: 'January 25, 2026',
    category: 'Business Training',
    readTime: '4 min read',
    image: 'images/blog/13'
  },
  {
    id: 'briefcase-requisition-design',
    title: 'Briefcase Requisition Layouts: Designing the Perfect Ransom Drop Prop',
    excerpt: 'The design secrets behind locking cash briefcases. How to calculate stack volume and pack foam for spectacular opening shots.',
    content: 'A classic movie shot: the villain slides open a heavy metal briefcase, revealing rows of green bills. To get this shot right, prop master use specialized flat foam inserts. A standard brief case holds exactly 20 flat-nested stacks of AUD notes ($200,000 face value). Pre-cut velvet foam prevents stacks from tumbling when the case is held upright by characters.',
    date: 'January 11, 2026',
    category: 'Set Design',
    readTime: '5 min read',
    image: 'images/blog/14'
  },
  {
    id: 'budgeting-wholesale-prop-packs',
    title: 'Budgeting for Indie Films: When to Buy Bulk Wholesale Prop Packs',
    excerpt: 'Indie filmmakers must optimize every dollar. We look at when buying bulk prop packs makes more financial sense than rental prop rooms.',
    content: 'Indie films have tight budgets. When filming scenes with bank vaults, ransom briefcases, or street heists, renting cash from prop rooms can be costly due to daily rates and security bonds. Buying bulk wholesale crates or indie pack bundles is often much more economical. Our wholesale flight cases are permanent assets that can be repurposed across multiple film scenes or sold to other crews post-production.',
    date: 'January 02, 2026',
    category: 'Indie Filmmaking',
    readTime: '6 min read',
    image: 'images/blog/15'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'legality',
    question: 'Are your prop money stacks legal to own and use in Australia?',
    answer: 'Yes, 100%. All of our prop money products are designed to strictly comply with the Reserve Bank of Australia (RBA) regulations and the Crimes (Currency) Act 1981. They feature prominent, non-removable legal disclaimers stating "PROP ONLY" and "NOT LEGAL TENDER", utilize specific scale adjustments, and are printed on premium paper (not polymer) so they can never be mistaken for real currency. They are strictly intended for film, TV, photography, and creative productions.'
  },
  {
    category: 'shipping',
    question: 'How fast do you ship within Australia?',
    answer: 'We provide super-fast shipping nationwide from our warehouse in Australia. Orders are processed within 24-48 hours. Standard shipping takes 3-5 business days, while Express Post delivery is available at checkout and usually takes 1-2 business days to major metropolitan areas (Sydney, Melbourne, Brisbane, Adelaide, Perth).'
  },
  {
    category: 'ordering',
    question: 'What is your minimum order amount?',
    answer: 'To maintain our high production standards and offer free or highly subsidized shipping, we enforce a minimum order value of AUD $150 across our website. This makes our service perfect for independent films, theater companies, and professional production studios.'
  },
  {
    category: 'custom',
    question: 'Do you offer custom aging, weathered stacks, or custom packaging?',
    answer: 'Yes! We have a dedicated in-house prop team that specializes in custom requests. Whether you need burned stacks, blood-stained bills, briefcase layouts, or extremely distressed cash bundles for high-action film scenes, we can accommodate. Contact us via our Wholesale page or Contact form with your production script details.'
  },
  {
    category: 'ordering',
    question: 'What payment methods do you accept, and is there a discount for Crypto?',
    answer: 'We accept direct Bank Transfer (EFT), PayID, and major Cryptocurrencies (Bitcoin, Ethereum, USDT). To promote fast, low-friction digital payments, we offer an exclusive 30% discount on your first checkout when paying with Cryptocurrency. Use Coupon Code "PROPMONEYAU" during checkout.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'David Jenkins',
    role: 'Lead Set Decorator',
    production: 'Crimson Sky Films',
    rating: 5,
    comment: 'The quality of the hand-aged $100 stacks is unmatched. They looked incredibly realistic under 4K camera close-ups. Saved us hours of distress work in post-production. Will absolutely use Australian Prop Money for all our future feature films.',
    date: 'June 18, 2026'
  },
  {
    id: 'rev-2',
    name: 'Sarah Lin',
    role: 'Executive Producer',
    production: 'Sydney Creative Group',
    rating: 5,
    comment: 'Exceptional service and extremely fast shipping. We had a sudden script change requiring a full ransom briefcase, and their customer service assembled a custom pack and had it delivered within 24 hours. The RBA compliance markings are subtle but clear, keeping our legal team happy.',
    date: 'July 1, 2026'
  },
  {
    id: 'rev-3',
    name: 'Marcus Vance',
    role: 'Commercial Photographer',
    production: 'Vance Studio',
    rating: 5,
    comment: 'Absolutely perfect for high-fashion photoshoots. The matte paper means zero reflection from our direct strobe lights. Highly recommended!',
    date: 'May 12, 2026'
  }
];
