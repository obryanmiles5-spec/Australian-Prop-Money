export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  category: string;
  sku: string;
  seoTitle: string;
  metaDescription: string;
  stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
  relatedProducts: string[];
  features: string[];
  specifications: {
    [key: string]: string;
  };
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
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
  return cat;
}

export const PRODUCTS: Product[] = [
  {
    id: 'buy-counterfeit-$10-aud-old',
    name: 'Buy Counterfeit $10 AUD (Old Design)',
    price: 150.00,
    description: 'High-fidelity replica $10 AUD banknote (classic design), engineered to match look and dimensions for film sets.',
    longDescription: 'This replica $10 AUD banknote captures the classic pre-2016 design elements. Meticulously designed for cinematic sets, it features correct color matching and matte non-reflective inks to prevent studio light flares, ensuring total realism on camera.',
    category: 'australian-notes',
    sku: 'AUD-10-OLD',
    seoTitle: 'Buy Counterfeit $10 AUD Old Design Prop | Australian Prop Money',
    metaDescription: 'High-quality $10 AUD classic design prop banknotes for film and television productions.',
    stockStatus: 'in-stock',
    relatedProducts: ['buy-counterfeit-$20-aud-old', 'buy-counterfeit-$50-aud-old'],
    features: ['Matte non-glare ink', 'Double-sided crisp paper bond', 'Exact dimension matching', 'RBA guideline compliant marking'],
    specifications: {
      'Denomination': '$10 AUD',
      'Series': 'Classic (Old)',
      'Material': 'Premium Double-Calendered Matte Paper',
      'Compliance': 'NOT LEGAL TENDER watermark'
    },
    image: 'https://drive.google.com/thumbnail?id=1rFp5hvKCKqccY34q6GsFDDo9XiIA6s-a&sz=w1000'
  },
  {
    id: 'buy-counterfeit-$20-aud-old',
    name: 'Buy Counterfeit $20 AUD (Old Design)',
    price: 150.00,
    description: 'Highly accurate $20 AUD prop bank note in the vintage pre-2016 style, optimized for realistic set dressing.',
    longDescription: 'This classic $20 AUD prop banknote is crafted specifically for action scenes, heist themes, and television dramas. It delivers high-resolution visual performance under direct studio key-lights without any artificial shine.',
    category: 'australian-notes',
    sku: 'AUD-20-OLD',
    seoTitle: 'Buy Counterfeit $20 AUD Old Design Prop | Australian Prop Money',
    metaDescription: 'Vintage style $20 AUD replica prop banknote printed on professional non-glare paper.',
    stockStatus: 'in-stock',
    relatedProducts: ['buy-counterfeit-$10-aud-old', 'buy-counterfeit-$50-aud-old'],
    features: ['Professional lithographic style print', 'Perfect size matching', 'Zero-glare under high-intensity lights', 'RBA-compliant disclaimers'],
    specifications: {
      'Denomination': '$20 AUD',
      'Series': 'Classic (Old)',
      'Material': 'Premium Double-Calendered Matte Paper',
      'Compliance': 'NOT LEGAL TENDER watermark'
    },
    image: 'https://drive.google.com/thumbnail?id=1h866VxjaoChlsMzU_Y8CcNUoCOPIJvYi&sz=w1000'
  },
  {
    id: 'buy-counterfeit-$50-aud-old',
    name: 'Buy Counterfeit $50 AUD (Old Design)',
    price: 150.00,
    description: 'Perfect replica of the classic $50 AUD polymer note, printed on non-glare prop paper.',
    longDescription: 'Our classic $50 AUD banknote replica is one of our most popular prop pieces. Printed with custom matte organic inks on high-density paper, it mimics the hand-feel and crisp sound of paper currency while remaining 100% compliant with national laws.',
    category: 'australian-notes',
    sku: 'AUD-50-OLD',
    seoTitle: 'Buy Counterfeit $50 AUD Old Design Prop | Australian Prop Money',
    metaDescription: 'Prisinte $50 AUD classic design prop banknotes. Ideal for stacks, bags, and close-ups.',
    stockStatus: 'in-stock',
    relatedProducts: ['buy-counterfeit-$20-aud-old', 'buy-counterfeit-$100-aud-old'],
    features: ['Vibrant color replication', 'Heavy matte finish', 'Double-sided high-DPI print', '100% legal RBA compliance'],
    specifications: {
      'Denomination': '$50 AUD',
      'Series': 'Classic (Old)',
      'Material': 'Premium Double-Calendered Matte Paper',
      'Compliance': 'NOT LEGAL TENDER watermark'
    },
    image: 'https://drive.google.com/thumbnail?id=1AXxLQYJ6jqjD4IHj7NmwKczTFN6sCYeF&sz=w1000'
  },
  {
    id: 'buy-counterfeit-$100-aud-old',
    name: 'Buy Counterfeit $100 AUD (Old Design)',
    price: 200.00,
    description: 'High-denomination $100 AUD classic note prop. Elegant double-sided printing on premium matte bond.',
    longDescription: 'Make a lasting impression in luxury scenes, ransom setups, or poker games. This classic $100 AUD prop bank note features meticulous detail on every millimetre, perfectly adapted for sharp cinematic focus.',
    category: 'australian-notes',
    sku: 'AUD-100-OLD',
    seoTitle: 'Buy Counterfeit $100 AUD Old Design Prop | Australian Prop Money',
    metaDescription: 'High-denomination classic $100 AUD replica banknotes. Perfect for high-stakes scenes.',
    stockStatus: 'in-stock',
    relatedProducts: ['buy-counterfeit-$50-aud-old', 'buy-counterfeit-$100-new'],
    features: ['Rich high-contrast inks', 'Realistic visual depth', 'Authentic weight and handling', 'Clear prop markings'],
    specifications: {
      'Denomination': '$100 AUD',
      'Series': 'Classic (Old)',
      'Material': 'Premium Double-Calendered Matte Paper',
      'Compliance': 'NOT LEGAL TENDER watermark'
    },
    image: 'https://drive.google.com/thumbnail?id=1J80lhZkLkQ5jYCMW2p-09rXptQL_22sr&sz=w1000'
  },
  {
    id: 'buy-counterfeit-$10-aud-new',
    name: 'Buy Counterfeit $10 AUD (New Design)',
    price: 150.00,
    description: 'The modern-style $10 AUD note replica featuring correct color matching for high-definition close-up shots.',
    longDescription: 'This replica represents the latest generation of Australian $10 banknotes. Designed to mimic the vibrant colors and signature layout of the modern series, it is optimized for high-resolution 4K and 8K cinematic lenses.',
    category: 'australian-notes',
    sku: 'AUD-10-NEW',
    seoTitle: 'Buy Counterfeit $10 AUD New Design Prop | Australian Prop Money',
    metaDescription: 'Next-generation style $10 AUD prop banknotes with precise color matching.',
    stockStatus: 'in-stock',
    relatedProducts: ['buy-counterfeit-$20-aud-new', 'buy-counterfeit-$50-aud-new'],
    features: ['Next-gen design layout', 'High fidelity color match', 'Thick organic paper base', 'Clear compliant disclaimer'],
    specifications: {
      'Denomination': '$10 AUD',
      'Series': 'Modern (New)',
      'Material': 'Premium Double-Calendered Matte Paper',
      'Compliance': 'NOT LEGAL TENDER watermark'
    },
    image: 'https://drive.google.com/thumbnail?id=1I4bmiTRbvzoBBlkxlc9zjQDtCyG6ptYn&sz=w1000'
  },
  {
    id: 'buy-counterfeit-$20-aud-new',
    name: 'Buy Counterfeit $20 AUD (New Design)',
    price: 150.00,
    description: 'New-generation $20 AUD design prop note. Features matte non-reflective inks designed for modern film sensors.',
    longDescription: 'Optimized for modern camera sensors, this $20 AUD replica mimics the bold red hues of the contemporary Australian series. It is perfect for fast cash counts, wallet scene fillers, or dynamic action-packed close-ups.',
    category: 'australian-notes',
    sku: 'AUD-20-NEW',
    seoTitle: 'Buy Counterfeit $20 AUD New Design Prop | Australian Prop Money',
    metaDescription: 'Contemporary style $20 AUD replica prop banknotes. Meticulous detail for modern film.',
    stockStatus: 'in-stock',
    relatedProducts: ['buy-counterfeit-$10-aud-new', 'buy-counterfeit-$50-aud-new'],
    features: ['Bold new-series colors', 'Strict dimension compliance', 'Zero camera reflections', 'NOT LEGAL TENDER printed'],
    specifications: {
      'Denomination': '$20 AUD',
      'Series': 'Modern (New)',
      'Material': 'Premium Double-Calendered Matte Paper',
      'Compliance': 'NOT LEGAL TENDER watermark'
    },
    image: 'https://drive.google.com/thumbnail?id=1zdW0Ftk185yyt66l9hasBdXrlOrjpMMW&sz=w1000'
  },
  {
    id: 'buy-counterfeit-$50-aud-new',
    name: 'Buy Counterfeit $50 AUD (New Design)',
    price: 150.00,
    description: 'Next-gen $50 AUD prop note. Meticulously designed according to Reserve Bank of Australia compliance guidelines.',
    longDescription: 'Bring extreme accuracy to your heist, corporate boardroom, or luxury sets with the modern-style $50 AUD banknote replica. This high-demand prop utilizes deep yellow-gold pigments formulated strictly to avoid yellow flare under harsh flashes.',
    category: 'australian-notes',
    sku: 'AUD-50-NEW',
    seoTitle: 'Buy Counterfeit $50 AUD New Design Prop | Australian Prop Money',
    metaDescription: 'Modern style $50 AUD prop notes. Vibrant yellow-gold hues for beautiful set staging.',
    stockStatus: 'in-stock',
    relatedProducts: ['buy-counterfeit-$20-aud-new', 'buy-counterfeit-$100-aud-new'],
    features: ['Vibrant next-gen graphics', 'Excellent hand-handling properties', 'Anti-reflective surface finish', 'Compliant disclaimer lettering'],
    specifications: {
      'Denomination': '$50 AUD',
      'Series': 'Modern (New)',
      'Material': 'Premium Double-Calendered Matte Paper',
      'Compliance': 'NOT LEGAL TENDER watermark'
    },
    image: 'https://drive.google.com/thumbnail?id=113xEHLGgkJ8TO5IR5kmojH7YKf5aTOTk&sz=w1000'
  },
  {
    id: 'buy-counterfeit-$100-aud-new',
    name: 'Buy Counterfeit $100 AUD (New Design)',
    price: 200.00,
    description: 'Our highest denomination $100 AUD prop bank note (new series), perfect for cinematic high-stakes reveals.',
    longDescription: 'Complete your high-stakes narrative with the supreme next-generation $100 AUD replica note. Expertly color-graded for optimal video presence, it is the ideal prop for suitcases, safes, and detailed foreground counts.',
    category: 'australian-notes',
    sku: 'AUD-100-NEW',
    seoTitle: 'Buy Counterfeit $100 AUD New Design Prop | Australian Prop Money',
    metaDescription: 'Modern series $100 AUD prop banknotes. Ultimate cash prop for film masterclasses.',
    stockStatus: 'in-stock',
    relatedProducts: ['buy-counterfeit-$50-aud-new', 'buy-counterfeit-$100-aud-old'],
    features: ['Flawless digital replication', 'Unparalleled color depth', 'Double-sided precision mapping', 'RBA-compliant markings'],
    specifications: {
      'Denomination': '$100 AUD',
      'Series': 'Modern (New)',
      'Material': 'Premium Double-Calendered Matte Paper',
      'Compliance': 'NOT LEGAL TENDER watermark'
    },
    image: 'https://drive.google.com/thumbnail?id=1hsVMPSI2tt3UJs3czwqWPsfcI6xCT-Yz&sz=w1000'
  },
  {
    id: 'commercial-producer-bulk-reserve-50-stacks',
    name: 'Commercial Producer Bulk Reserve (50 Stacks)',
    price: 350.00,
    description: 'Bulk reserve set featuring 50 full stacks of high-fidelity replica currency for commercial productions.',
    longDescription: 'Engineered specifically for commercial film production, this bulk reserve set delivers 50 premium paper-bond cash stacks. Hand-secured with heavy-duty paper bands, they provide realistic volume and movement for large-scale camera pans.',
    category: 'bundle-packs',
    sku: 'BND-CP-050',
    seoTitle: 'Commercial Producer Bulk Reserve 50 Stacks | Australian Prop Money',
    metaDescription: 'Bulk prop money set containing 50 cash stacks for cinematic production sets.',
    stockStatus: 'in-stock',
    relatedProducts: ['film-producer-pack', 'millionaire-heist-master-crate-100-stacks'],
    features: ['50 complete cash stacks', 'Matte non-glare ink technology', 'Compliant markings on every note', 'Pre-banded and ready for set'],
    specifications: {
      'Total Stacks': '50 Stacks',
      'Currency Match': 'Mixed AUD Denominations',
      'Material': 'Premium Matte Cotton Bond',
      'Compliance': 'RBA Distinguishable Standard'
    },
    image: 'https://drive.google.com/thumbnail?id=1VK238Nx-VplE7DRgXu98TtW4aWM31jBg&sz=w1000'
  },
  {
    id: 'film-producer-pack',
    name: 'Film Producer Pack',
    price: 900.00,
    description: 'The ultimate production bundle, including mixed denomination stacks for premium narrative and dramatic scenes.',
    longDescription: 'Specially curated for feature films, television shows, and streaming series, the Film Producer Pack offers a comprehensive mix of new and old design denominations. Fully optimized for ultra-high-resolution digital cinema cameras.',
    category: 'bundle-packs',
    sku: 'BND-FP-100',
    seoTitle: 'Film Producer Pack Prop Cash | Australian Prop Money',
    metaDescription: 'Ultimate cinematic prop money bundle designed specifically for feature-length productions.',
    stockStatus: 'in-stock',
    relatedProducts: ['commercial-producer-bulk-reserve-50-stacks', 'millionaire-heist-master-crate-100-stacks'],
    features: ['High-DPI offset lithography printing', 'Mixed modern & classic styles', 'Authentic weight & paper thickness', 'Non-glare anti-flare coatings'],
    specifications: {
      'Bundle Contents': 'Premium Selection of High-Denomination Stacks',
      'Paper Type': '100% Cotton-blend Double-Calendered',
      'Dimensions': 'Strictly scale-matched',
      'Compliance': 'Legal tender alternative markings'
    },
    image: 'https://drive.google.com/thumbnail?id=1wAL_8HxdvUL6SBvLXA5C-wENTAyGi6FG&sz=w1000'
  },
  {
    id: 'millionaire-heist-master-crate-100-stacks',
    name: 'Millionaire Heist Master Crate (100 Stacks)',
    price: 2500.00,
    description: 'A massive industrial prop crate containing 100 complete stacks of pristine replica cash.',
    longDescription: 'Designed for high-intensity heist, vault, and major ransom scenes, the Millionaire Heist Master Crate provides unparalleled visual scale. Complete with 100 fully-wrapped prop stacks, this set is the crown jewel of professional prop houses.',
    category: 'bundle-packs',
    sku: 'BND-MH-100',
    seoTitle: 'Millionaire Heist Master Crate 100 Stacks | Australian Prop Money',
    metaDescription: 'Ultimate vault set containing 100 premium prop money stacks in an industrial presentation.',
    stockStatus: 'in-stock',
    relatedProducts: ['film-producer-pack', 'wholesale-pack'],
    features: ['100 high-fidelity cash stacks', 'Premium heavy-duty presentation', 'Zero-glare under direct studio spots', 'RBA compliant detailing'],
    specifications: {
      'Total Stacks': '100 Stacks',
      'Acoustic Feel': 'Crisp currency-grade rustle',
      'Weight': 'Fully packed visual weight',
      'Compliance': 'Watermark and edge-mark compliant'
    },
    image: 'https://drive.google.com/thumbnail?id=1svWNqggsBiasSCNQUIAEsVIexLdwLvfN&sz=w1000'
  },
  {
    id: 'photography-studio-pack',
    name: 'Photography Studio Pack',
    price: 500.00,
    description: 'Custom selection of crisp prop notes designed for macro lens focus, editorial, and flatlay photography.',
    longDescription: 'A custom prop selection designed for high-resolution photographers. With rich color saturation, perfect registration, and matte paper, this bundle is the perfect foreground or background backdrop for editorial layouts and creative advertising.',
    category: 'bundle-packs',
    sku: 'BND-PS-080',
    seoTitle: 'Photography Studio Pack Prop Currency | Australian Prop Money',
    metaDescription: 'Superb macro-ready prop money bundle designed for studio photographers and artists.',
    stockStatus: 'in-stock',
    relatedProducts: ['commercial-producer-bulk-reserve-50-stacks', 'film-producer-pack'],
    features: ['Macro close-up ready details', 'Rich pigments without reflection', 'Individually selected pristine notes', 'Compliant borders & markings'],
    specifications: {
      'Focus Grade': 'Ultra-fine high-DPI macro',
      'Material': 'Professional heavy-weight cotton matte paper',
      'Count': 'Multi-stack selection',
      'Compliance': 'Legal markings included'
    },
    image: 'https://drive.google.com/thumbnail?id=1sWEhEnHT1cmhqmTCXFeYFCD3HnHjBDmm&sz=w1000'
  },
  {
    id: 'wholesale-pack',
    name: 'Wholesale Pack',
    price: 1500.00,
    description: 'Bulk wholesale package ideal for prop rental agencies, stunt crews, and recurring studio productions.',
    longDescription: 'Perfect for rental houses or continuous film projects requiring a steady supply of camera-ready currency. The Wholesale Pack offers extensive mixed stacks at our most competitive pricing, backed by industrial production quality.',
    category: 'bundle-packs',
    sku: 'BND-WP-200',
    seoTitle: 'Wholesale Prop Money Pack | Australian Prop Money',
    metaDescription: 'Large-scale wholesale prop banknote pack for studio recurring supplies and prop houses.',
    stockStatus: 'in-stock',
    relatedProducts: ['millionaire-heist-master-crate-100-stacks', 'film-producer-pack'],
    features: ['Extremely durable construction', 'Easy to distressed and clean', 'Industry-trusted offset press quality', 'Fully legal reserve compliant'],
    specifications: {
      'Distribution Pack': 'Wholesale Volume',
      'Styles Included': 'Full spectrum of AUD denominations',
      'Format': 'Secured and banded packets',
      'Compliance': 'Standard RBA non-circulation watermark'
    },
    image: 'https://drive.google.com/thumbnail?id=1VIKhkT3NVbxgQr7SDbNt230BdaXDr8eT&sz=w1000'
  },
  {
    id: 'canvas-money-bag',
    name: 'Canvas Money Bag',
    price: 19.99,
    description: 'A classic canvas money bag with a printed dollar sign, perfect for props and storage.',
    longDescription: 'This heavy-duty canvas money bag features a realistic design with a bold dollar sign. It is ideal for theatrical productions, film sets, or simply as a fun way to store your prop money.',
    category: 'accessories',
    sku: 'ACC-CMB-001',
    seoTitle: 'Canvas Money Bag Prop | Australian Prop Money',
    metaDescription: 'Buy a realistic canvas money bag prop. Perfect for film, TV, and photography.',
    stockStatus: 'in-stock',
    relatedProducts: [],
    features: ['Heavy-duty canvas material', 'Classic dollar sign print', 'Drawstring closure', 'Durable construction'],
    specifications: {
      'Material': 'Canvas',
      'Dimensions': '11" x 17"',
      'Color': 'Natural / Black print'
    },
    image: 'https://drive.google.com/thumbnail?id=1PFak1IeIeSNg1EVUzoBHLdSmsXAchp1L&sz=w1000'
  },
  {
    id: 'duffle-bag',
    name: 'Duffle Bag',
    price: 49.99,
    description: 'A large, durable duffle bag ideal for transporting large quantities of prop money.',
    longDescription: 'Make your heist scene authentic with this sturdy duffle bag. Designed to look inconspicuous yet capable of holding bundles of prop currency, it is a staple for any crime or action production.',
    category: 'accessories',
    sku: 'ACC-DB-001',
    seoTitle: 'Heist Duffle Bag Prop | Australian Prop Money',
    metaDescription: 'Large duffle bag prop for transporting fake money. Ideal for action films and theater.',
    stockStatus: 'in-stock',
    relatedProducts: [],
    features: ['Large capacity', 'Durable nylon material', 'Reinforced handles', 'Heavy-duty zippers'],
    specifications: {
      'Material': 'Nylon',
      'Dimensions': '24" x 12" x 12"',
      'Color': 'Black'
    },
    image: 'https://drive.google.com/thumbnail?id=1bzAscynjnlNS4qQLuVHQVhGlXnqGxumB&sz=w1000'
  },
  {
    id: 'money-counter',
    name: 'Money Counter',
    price: 129.99,
    description: 'A functional prop money counting machine that adds realism to your set.',
    longDescription: 'Add a professional touch to your bank or casino scenes with this realistic money counting machine. It looks the part and even features realistic motorized action for genuine on-screen authenticity.',
    category: 'accessories',
    sku: 'ACC-MC-001',
    seoTitle: 'Prop Money Counting Machine | Australian Prop Money',
    metaDescription: 'Realistic money counting machine prop. Perfect for casino and bank scenes in film and TV.',
    stockStatus: 'in-stock',
    relatedProducts: [],
    features: ['Realistic appearance', 'Motorized action', 'Digital display', 'Standard plug'],
    specifications: {
      'Material': 'Plastic / Metal',
      'Power': '110-240V',
      'Dimensions': '11" x 10" x 8"'
    },
    image: 'https://drive.google.com/thumbnail?id=1lvn9AP0XvQJfMmpnUWWZ4eVGjYjxEMSK&sz=w1000'
  },
  {
    id: 'prop-money-gun',
    name: 'Prop Money Gun',
    price: 34.99,
    description: 'A fun and flashy money gun that shoots out prop bills rapidly.',
    longDescription: 'Make it rain! This prop money gun is the ultimate accessory for music videos, parties, and promotional events. Simply load it with our prop currency and pull the trigger for a spectacular cascade of bills.',
    category: 'accessories',
    sku: 'ACC-PMG-001',
    seoTitle: 'Prop Money Gun | Make It Rain | Australian Prop Money',
    metaDescription: 'Buy a prop money gun to shoot fake bills. Perfect for music videos, parties, and events.',
    stockStatus: 'in-stock',
    relatedProducts: [],
    features: ['Rapid fire action', 'Easy to load', 'Battery operated', 'Includes sample bills'],
    specifications: {
      'Material': 'Plastic',
      'Power': '4x AA Batteries (not included)',
      'Capacity': 'Up to 100 bills'
    },
    image: 'https://drive.google.com/thumbnail?id=1B_iSRIb6JbBM_4drlmsYYeBbkCTsqvZD&sz=w1000'
  },
  {
    id: 'silver-aluminium-briefcase',
    name: 'Silver Aluminium Briefcase',
    price: 89.99,
    description: 'A classic silver aluminium briefcase, the quintessential prop for carrying cash.',
    longDescription: 'The iconic silver briefcase, synonymous with high-stakes deals and dramatic reveals. This durable aluminium case is foam-lined and perfect for securely (and stylishly) presenting bundles of prop money on screen.',
    category: 'accessories',
    sku: 'ACC-SAB-001',
    seoTitle: 'Silver Aluminium Prop Briefcase | Australian Prop Money',
    metaDescription: 'Classic silver aluminium briefcase for prop money. Essential for cinematic high-stakes deals.',
    stockStatus: 'in-stock',
    relatedProducts: [],
    features: ['Durable aluminium exterior', 'Secure locking mechanism', 'Foam-lined interior', 'Classic cinematic look'],
    specifications: {
      'Material': 'Aluminium',
      'Dimensions': '18" x 13" x 4.5"',
      'Weight': '4.5 lbs'
    },
    image: 'https://drive.google.com/thumbnail?id=14pqxvToRwY62wDCjXrNk1GXEMvJjRppo&sz=w1000'
  }
];
export const CATEGORIES: { id: string; name: string; description: string; }[] = [
  {
    id: 'australian-notes',
    name: 'Australian Notes',
    description: 'High-fidelity replica polymer notes designed to comply strictly with federal guidelines.',
  },
  {
    id: 'bundle-packs',
    name: 'Bundle Packs',
    description: 'Premium pre-packaged stacks and mixed bundle packs for bulk prop scenes.',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Essential props, bags, and high-fidelity money counters to perfect your scene.',
  }
];
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'where-to-buy-realistic-australian-prop-money-film-photography',
    title: 'Where to Buy Realistic Australian Prop Money for Film & Photography',
    excerpt: 'Looking for camera-ready replica cash in Sydney, Melbourne, or Brisbane? Our guide covers what to look for and where to buy premium, fully-compliant prop banknotes.',
    content: `Finding high-quality, realistic Australian prop money is a common challenge for independent filmmakers, commercial production companies, and photographers. When setting up a high-stakes scene or fashion shoot, the last thing you want is a fake bank note that looks like cheap photocopy paper or reflection-heavy plastic.

### What Makes Prop Money Look Realistic on Camera?
To achieve total immersion under 4K and 8K camera lenses, prop money must possess specific material and visual qualities:
1. **Matte Paper Finish:** Real polymer notes bounce light back directly into the lens, causing exposure blowouts. Calendered matte paper scatters light evenly, which mimics how currency is viewed in natural studio setups.
2. **Double-Sided Crisp Printing:** Stacks being handled by actors must look authentic from every single angle. Single-sided props quickly ruin the illusion if a note flips.
3. **Precision Size Scaling:** Authentic look and feel require dimension ratios that feel natural in hand and match legal guidelines.

### Where to Purchase Compliant Australian Props Online
For fast, private dispatch across Sydney, Melbourne, Brisbane, and beyond, our store offers premium non-glare, RBA-compliant banknotes. From individual stacks of $100 AUD, $50 AUD, and vintage old-style designs, to wholesale master crates of 100 stacks, we supply the finest quality movie money in Australia.

**Ready to dress your set?** Explore our [Australian Notes](/shop?category=australian-notes) and pre-arranged [Bundle Packs](/shop?category=bundle-packs) to secure high-fidelity props with overnight fast shipping options.`,
    date: '2026-07-15',
    category: 'Production',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'legality-of-prop-money-australia-crimes-currency-act-1981-explained',
    title: 'The Legality of Prop Money in Australia: Crimes (Currency) Act 1981 Explained',
    excerpt: 'Is it legal to buy and use replica prop money in Australia? We break down the Crimes (Currency) Act 1981 and Reserve Bank guidelines to ensure your production stays 100% compliant.',
    content: `Understanding the strict federal regulations surrounding replica currency in Australia is critical for every director, producer, and prop master. Reproducing currency incorrectly can lead to severe penalties, legal seizures, and production halts under the Crimes (Currency) Act 1981.

### The Reserve Bank of Australia (RBA) Guidelines
The RBA has set forth strict compliance standards to prevent confusion between artistic replicas and counterfeit legal tender. The core criteria include:
- **Distinctive Materials:** Prop cash should never be printed on polymer (plastic) substrate. Instead, non-glossy, heavy-bond calendered matte paper must be used.
- **Watermarks and Disclaimers:** All legal replicas must have prominent, high-contrast, easily readable markings. Our props feature the standard warning "PROP ONLY — NOT LEGAL TENDER" across both sides of the bills.
- **Tactile Differences:** The paper hand-feel, thickness, and stiffness must instantly signal to any handler that the note is an artistic replica, not circulating currency.

### Absolute Compliance for Peace of Mind
Our entire inventory is designed from the ground up to comply strictly with the Crimes (Currency) Act 1981. We combine legal-distinguishing features with stunning high-fidelity visual accuracy on camera, giving you the perfect visual results without any of the legal risks.

Keep your shoot safe and secure. Learn more about our compliance standards or browse our compliant [Australian Notes collections](/shop).`,
    date: '2026-07-14',
    category: 'Legal',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'real-polymer-vs-matte-prop-money-keeping-film-sets-flare-free',
    title: 'Real Polymer vs. Matte Prop Money: Keeping Your Film Sets Flare-Free',
    excerpt: 'Why do professional cinematographers refuse to use real polymer bills under studio key-lights? Discover how our matte paper finish eliminates glare and preserves perfect exposure.',
    content: `In the era of high-dynamic-range (HDR) digital cinema cameras like the ARRI Alexa, RED V-Raptor, and Sony Venice, lighting reflections are a constant battle. Real polymer (plastic) Australian banknotes possess a high-gloss specular surface that is notoriously difficult to film under high-intensity studio key-lights.

### The Problem with Real Banknotes
- **Specular Highlights:** Under studio lighting, real polymer notes reflect intense white highlights directly into the camera sensor, washing out details and creating distracting flares.
- **Color Distortion:** Plastic substrates shift under certain color temperatures, making real bills look unnaturally neon or plastic on digital screens.

### The Solution: Double-Calendered Matte Paper
Our prop notes are printed with organic matte inks on premium calendered, heavy-bond cotton matte paper. This creates a surface that:
1. **Scatters Light:** Evenly distributes studio illumination, ensuring every bill in a stack retains its rich color gradients on screen.
2. **Sounds Real:** Delivers the crisp, satisfying cash-rustle and tactile snap when counted by actors on camera.
3. **Hides Imperfections:** Maintains a pristine look under tight macro close-ups.

For professional results on your next television commercial or feature drama, invest in a premium [Film Producer Pack](/product/film-producer-pack) today.`,
    date: '2026-07-13',
    category: 'Production',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'how-to-style-high-stakes-heist-scenes-bulk-cash-stacks',
    title: 'How to Style High-Stakes Heist Scenes with Bulk Prop Cash Stacks',
    excerpt: 'Tips from seasoned industry prop masters on how to arrange, band, and present bulk cash bundles to maximize screen scale and dramatic tension.',
    content: `A classic bank heist, ransom drop, or back-alley trade is a staple of action thrillers. But creating a visually convincing million-dollar exchange requires more than just piling bills. It requires expert styling, staging, and accessorizing.

### 1. Build Layered Textures
Instead of stacking cash in perfectly neat rows, stagger and overlap them in a "brick-style" overlapping pattern. This introduces shadows and highlights, giving the cash bundles a dramatic, heavy visual weight on camera.

### 2. Use Premium Heavy-Duty Paper Bands
Each bundle should be bound with structured, high-quality currency straps. Our pre-packaged bundles are secured with realistic bands that lock in the authentic shape, making handling and counting look fluid and convincing.

### 3. Elevate with Authentic Accessories
Frame your cash bundles with the right gear. Place an active [High-Fidelity Money Counter](/product/money-counter) in the background, or package your stacks inside our classic, foam-lined [Silver Aluminium Briefcase](/product/silver-aluminium-briefcase) or [Millionaire Heist Master Crate](/product/millionaire-heist-master-crate-100-stacks) for maximum dramatic effect.

Want to achieve a massive visual scale for your heist? Save up to 25% by ordering our specialized [Wholesale Pack](/product/wholesale-pack) or [Commercial Producer Bulk Reserve (50 Stacks)](/product/commercial-producer-bulk-reserve-50-stacks).`,
    date: '2026-07-12',
    category: 'Tutorial',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'guide-to-rba-compliant-disclaimers-on-replica-australian-banknotes',
    title: 'A Guide to RBA Compliant Disclaimers on Replica Australian Banknotes',
    excerpt: 'What makes replica cash legally safe to print and use? Learn about the design regulations of watermark markings and legal disclaimers.',
    content: `For prop buyers, distinguishing between "counterfeit" cash and "legal replica" props is critical. True counterfeit money attempts to deceive, whereas professional prop money is designed specifically for artistic representation with transparent, legally compliant markers.

### Anatomy of a Compliant Replica Note
To be safe for use in public film productions, theater, and corporate events, prop cash must contain obvious distinguishing factors:
- **No Holographic Foils:** Real Australian notes use complex window foils; compliant props omit these to ensure they cannot pass as legal tender in physical transactions.
- **Legal Tender Watermarks:** A bold, high-contrast disclaimer stating "PROP ONLY — NOT LEGAL TENDER" must be printed clearly on both sides of the note.
- **Distinctive Hand-feel:** Polymer substrate is restricted by the government. Legal replicas are always printed on high-grade matte cotton paper, providing an immediate tactile difference.

Our products meet all these benchmarks perfectly, protecting your shoot from legal complications while providing beautiful, camera-ready aesthetics.

Ensure compliance on your next shoot. Browse our certified [Australian Notes](/shop?category=australian-notes) to buy securely.`,
    date: '2026-07-11',
    category: 'Legal',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-money-guns-adding-dynamic-action-music-videos-events-australia',
    title: 'Prop Money Guns: Adding Dynamic Action to Music Videos and Events in Australia',
    excerpt: 'Want to make your next music video, night club event, or promo go viral? Discover how our Prop Money Gun adds high-octane visual flare.',
    content: `If you are directing a rap music video, organizing a high-energy nightclub promotion, or staging a theatrical release, you need visuals that instantly grab attention. Nothing does this quite as dynamically as a cash rain effect.

### The Ultimate Visual Accent: The Prop Money Gun
Our motorized [Prop Money Gun](/product/prop-money-gun) is a highly reliable, high-speed device designed to spray prop notes smoothly and continuously without jamming. 

### Essential Tips for a Flawless Cash Rain Shot
- **Shoot in High Frame Rates (Slow-Motion):** Capture the falling cash at 120fps or 240fps. The slow-motion movement of our custom-sized bills gliding through the air creates an incredibly lavish and premium aesthetic.
- **Use the Perfect Bill Size:** Standard paper is too heavy or too light. Our custom prop bills are optimized for the gun, gliding through the motorized mechanism smoothly up to 100 times in a row.
- **Contrast with Dark Backdrops:** Stage your cash rain against deep charcoal or black backdrops under focused spotlights to make the gold and red AUD colors pop.

Make a major impact on screen. Grab the [Prop Money Gun](/product/prop-money-gun) along with our specialized [Photography Studio Pack](/product/photography-studio-pack) for immediate, ready-to-shoot action.`,
    date: '2026-07-10',
    category: 'Promotion',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd6a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'how-prop-masters-manage-and-age-movie-money-vintage-grit',
    title: 'How Prop Masters Manage and Age Movie Money for a Vintage Grit Aesthetic',
    excerpt: 'Need worn, weathered, or vintage-looking cash for a gritty crime thriller? Learn these practical workshop techniques to age your prop money safely.',
    content: `Fresh, crisp banknotes straight out of the printer are perfect for high-stakes corporate deals or pristine bank vault scenes. However, if your script involves a back-alley ransom, drug deal, or an old treasure chest, shiny new cash will ruin the gritty visual atmosphere.

### The Workshop Guide to Aging Prop Money
Professional prop masters use several simple, safe techniques to add decades of wear-and-tear to replica cash in minutes:
1. **The Tea-Staining Bath:** Brew a strong batch of black tea. Lightly brush or dip individual prop bills in the tea, then let them air-dry. This adds a realistic, aged yellow-brown sepia tint.
2. **The Crumple and Flat Technique:** Crumple the notes into tight balls, then carefully flatten them out. Repeating this breaks down the paper fibers, giving them a soft, worn, heavily-circulated texture.
3. **Adding Sand & Dirt Textures:** Rub small amounts of fine gray charcoal powder or dry potting soil along the edges of the cash bundles. This replicates the grime that accumulates over years of circulation.

**Note:** Because our prop cash is printed on durable, double-calendered heavy-bond paper (never flimsy office paper), it can withstand intensive aging techniques without tearing or falling apart.

Get started on your gritty indie project with our flexible [Film Producer Pack](/product/film-producer-pack) and style your perfect scene.`,
    date: '2026-07-09',
    category: 'Tutorial',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'setting-up-realistic-bank-vault-scene-indie-budget',
    title: 'Setting Up a Realistic Bank Vault Scene on an Indie Budget',
    excerpt: 'Learn how to design and build an authentic bank vault set using smart camera angles, lighting, and our bulk prop cash stacks.',
    content: `Staging a major bank heist scene on an independent budget can seem daunting. Building high-tech vaults and piles of secure safes can quickly drain your resources. However, with the right combination of tight camera angles, smart lighting, and high-quality bulk props, you can achieve a multi-million-dollar aesthetic on a modest budget.

### 1. Control the Frame with Tight Focal Lengths
You do not need to build an entire bank vault room. Focus the camera on a small, hyper-detailed corner of the set—such as a single security safe box or an open table. Using a telephoto lens with a shallow depth-of-field keeps the background beautifully blurred while drawing maximum attention to the cash bundles.

### 2. Build Multi-Million Dollar Piles on a Budget
Instead of buying individual notes, use pre-arranged [Bundle Packs](/shop?category=bundle-packs). Our bulk packs, such as the [Millionaire Heist Master Crate (100 Stacks)](/product/millionaire-heist-master-crate-100-stacks) or the [Commercial Producer Bulk Reserve (50 Stacks)](/product/commercial-producer-bulk-reserve-50-stacks), provide enough physical stacks to fill an entire suitcase, tabletop, or safe box, instantly selling the scale of the heist.

### 3. Stage the Scene with Contextual Props
Complete the banking atmosphere by placing our [Canvas Money Bag](/product/canvas-money-bag) or a motorized [Money Counter](/product/money-counter) in the frame. These small details signal "bank vault" instantly to the audience's brain, allowing you to spend less on set construction and more on performance.

**Ready to build your set?** Check out our [Accessories collection](/shop?category=accessories) to discover high-fidelity tools that perfect your heist scene.`,
    date: '2026-07-08',
    category: 'Production',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'legality',
    question: 'Is it legal to buy and use replica prop money in Australia?',
    answer: 'Yes, it is 100% legal to buy, own, and use replica prop money for artistic and media productions, provided they conform strictly to the Reserve Bank of Australia (RBA) regulations and Crimes (Currency) Act 1981. Our fake australian money prop features standard RBA non-circulation watermarks, "PROP ONLY — NOT LEGAL TENDER" wording, is printed on non-glossy, heavy-bond matte paper (never polymer), and has scaled/modified dimensions to prevent any confusion with real currency.'
  },
  {
    category: 'legality',
    question: 'What are the main RBA design rules for props?',
    answer: 'The RBA requires that prop notes are printed with distinguishable differences. This includes being significantly larger or smaller (usually more than 1.5 times or less than 0.5 times the size of the original note), being printed only on one side, or if printed double-sided, possessing prominent, clear legal disclaimers. Our double-sided australia prop money and prop money au notes are custom engineered with high-contrast warning lines and strict matte paper finishes to easily distinguish them from real currency upon tactile touch.'
  },
  {
    category: 'shipping',
    question: 'How fast is dispatch and shipping for prop money australia?',
    answer: 'All orders are dispatched from our warehouse in Sydney within 24 hours of purchase on business days. We offer secure, private checkout and dispatch items in unmarked, plain packaging. Standard delivery for au prop money takes 3-5 business days, while Express Fast Shipping delivers within 1-2 business days to metropolitan areas across Australia.'
  },
  {
    category: 'ordering',
    question: 'Do you offer custom aus prop money or bulk crates?',
    answer: 'Absolutely! We specialize in bulk prop australian money orders for high-intensity heist and vault scenes, supplying up to 100 stacks in customized lockable aluminum briefcases or industrial crates. For customized solutions or commercial proposals for prop american money or local notes, please contact us via our Wholesale page.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Marcus Vance',
    role: 'Lead Prop Master',
    production: 'Sydney Crime Syndicate (TV Series)',
    rating: 5,
    comment: 'The quality of these notes is stunning. Under our 4K ARRI Alexa cameras, there is absolutely zero reflection or lighting flare. The matte paper feel is extremely realistic for cash counting closeups.',
    date: '2025-11-12'
  },
  {
    id: 'rev-2',
    name: 'Sarah Chen',
    role: 'Art Director',
    production: 'The Great Vault Heist (Feature Film)',
    rating: 5,
    comment: 'Ordered the 100-stack Master Crate. It was the centerpiece of our bank vault scenes. Secure, fast delivery and completely compliant with legal guidelines.',
    date: '2026-02-18'
  },
  {
    id: 'rev-3',
    name: 'David Thompson',
    role: 'Commercial Photographer',
    production: 'Premium Fashion Editorial',
    rating: 5,
    comment: 'The macro focus details are top-notch. The double-sided print matches perfectly and the colors are extremely vibrant. Will definitely order again.',
    date: '2026-05-01'
  }
];
