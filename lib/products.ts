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
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    id: 'blog-1',
    title: 'Camera-Ready: Avoiding Light Reflection on Set',
    excerpt: 'How our matte anti-glare finish solves common studio lighting issues when filming high-stakes cash scenes.',
    content: `Filming cash stacks under intense studio key-lights can be a nightmare for cinematographers. Real polymer currency can bounce back extremely high specular reflections, creating ugly white highlights and ruining the exposure of your shot.\n\nOur custom-engineered paper prop money uses a calendered, ultra-matte bond. By utilizing non-reflective organic pigments, our replica notes scatter light evenly, ensuring that cash counts look absolutely pristine on high-dynamic-range camera sensors in 4K, 8K, and beyond.`,
    date: '2025-12-05',
    category: 'Production',
    readTime: '3 min read',
  },
  {
    id: 'blog-2',
    title: 'Navigating RBA Compliance for Australian Media',
    excerpt: 'An essential checklist for directors and production managers to keep prop currency strictly within legal limits.',
    content: `The Crimes (Currency) Act of 1981 outlines strict regulations regarding reproduction of Australian banknotes. Violating these rules can result in severe federal penalties, halting your production entirely.\n\nTo keep your shoot safe, always verify that your props: (1) Use obvious non-polymer paper materials, (2) Display prominent NOT LEGAL TENDER disclaimers, and (3) Use modified colors or dimensions. Our notes are pre-approved to follow these RBA guidelines, offering peace of mind so you can focus on the story.`,
    date: '2026-03-10',
    category: 'Legal',
    readTime: '5 min read',
  },
  {
    id: 'blog-3',
    title: 'Dressing the Scene: Briefcases, Bags, and Crates',
    excerpt: 'Best practices for prop masters to arrange cash bundles for cinematic maximum visual scale.',
    content: `When dressing a major heist or ransom scene, how you pack the bills is just as important as the quality of the notes themselves.\n\nTo make a briefcase or duffle bag look incredibly packed and heavy on camera: (1) Secure each stack with a premium heavy-duty paper band, (2) Stagger the stacks in a brick-style overlapping pattern to add texture, and (3) Place custom accessories like a functional motorized counter or an aluminium briefcase in the shot to heighten the dramatic value of the exchange.`,
    date: '2026-06-22',
    category: 'Tutorial',
    readTime: '4 min read',
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'legality',
    question: 'Is it legal to buy and use replica prop money in Australia?',
    answer: 'Yes, it is 100% legal to buy, own, and use replica prop money for artistic and media productions, provided they conform strictly to the Reserve Bank of Australia (RBA) regulations and Crimes (Currency) Act 1981. Our prop cash features standard RBA non-circulation watermarks, "PROP ONLY — NOT LEGAL TENDER" wording, is printed on non-glossy, heavy-bond matte paper (never polymer), and has scaled/modified dimensions to prevent any confusion with real currency.'
  },
  {
    category: 'legality',
    question: 'What are the main RBA design rules for props?',
    answer: 'The RBA requires that prop notes are printed with distinguishable differences. This includes being significantly larger or smaller (usually more than 1.5 times or less than 0.5 times the size of the original note), being printed only on one side, or if printed double-sided, possessing prominent, clear legal disclaimers. Our double-sided notes are custom engineered with high-contrast warning lines and strict matte paper finishes to easily distinguish them from real currency upon tactile touch.'
  },
  {
    category: 'shipping',
    question: 'How fast is dispatch and shipping across Australia?',
    answer: 'All orders are dispatched from our warehouse in Sydney within 24 hours of purchase on business days. We offer secure, private checkout and dispatch items in unmarked, plain packaging. Standard delivery takes 3-5 business days, while Express Fast Shipping delivers within 1-2 business days to metropolitan areas across Australia.'
  },
  {
    category: 'ordering',
    question: 'Do you offer custom props or bulk crates?',
    answer: 'Absolutely! We specialize in bulk prop orders for high-intensity heist and vault scenes, supplying up to 100 stacks in customized lockable aluminum briefcases or industrial crates. For customized solutions or commercial proposals, please contact us via our Wholesale page or reach out directly.'
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
