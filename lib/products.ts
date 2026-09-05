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
    id: '10-aud-old-prop-money',
    name: 'Classic $10 AUD Prop Notes (Old Design Australia)',
    price: 200.00,
    description: 'High-fidelity replica $10 AUD banknote (classic design). RBA compliant double sided prop money Australia on non-glare matte paper.',
    longDescription: 'This classic old design $10 AUD prop banknote captures vintage pre-2016 aesthetics. Meticulously engineered for film production prop money Sydney, theatre prop money Melbourne, and TV scenes across Australia. Features double-sided crisp paper bond, non-reflective organic inks that prevent studio light flare, and clear compliance markings conforming to Reserve Bank of Australia prop money guidelines.',
    category: 'australian-notes',
    sku: 'AUD-10-OLD',
    seoTitle: 'Classic $10 AUD Prop Notes | Australian Dollar Prop Notes',
    metaDescription: 'Buy classic $10 AUD prop notes and Australian dollar prop notes. Double sided prop money Australia printed on non-glare matte paper. RBA compliant with fast shipping.',
    stockStatus: 'in-stock',
    relatedProducts: ['20-aud-old-prop-money', '50-aud-old-prop-money'],
    features: ['Matte non-glare organic ink', 'Double-sided crisp paper bond', 'Exact dimension matching', 'RBA guideline compliant marking (NOT LEGAL TENDER)'],
    specifications: {
      'Denomination': '$10 AUD',
      'Series': 'Classic (Old)',
      'Material': 'Premium Double-Calendered Matte Paper',
      'Compliance': 'NOT LEGAL TENDER watermark'
    },
    image: 'https://drive.google.com/thumbnail?id=1rFp5hvKCKqccY34q6GsFDDo9XiIA6s-a&sz=w1000'
  },
  {
    id: '20-aud-old-prop-money',
    name: 'Classic $20 AUD Prop Notes (Old Design Australia)',
    price: 200.00,
    description: 'Highly accurate $20 AUD prop bank note in the vintage pre-2016 style, optimized for realistic set dressing and heist action scenes.',
    longDescription: 'This vintage $20 AUD prop banknote is crafted specifically for action scenes, heist themes, and television dramas. It delivers high-resolution visual performance under direct studio key-lights without any artificial shine. Part of our authentic Australian dollar prop notes collection for filmmakers who need realistic prop money Australia.',
    category: 'australian-notes',
    sku: 'AUD-20-OLD',
    seoTitle: 'Classic $20 AUD Prop Notes | Buy Fake Australian Money Props',
    metaDescription: 'Vintage style $20 AUD replica prop banknotes. Buy fake Australian money props on professional non-glare paper. Ideal for theatre and film sets nationwide.',
    stockStatus: 'in-stock',
    relatedProducts: ['10-aud-old-prop-money', '50-aud-old-prop-money'],
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
    id: '50-aud-old-prop-money',
    name: 'Classic $50 AUD Prop Notes (Old Design Australia)',
    price: 200.00,
    description: 'Perfect replica of the classic $50 AUD note printed on non-glare prop paper. High-demand prop 50 dollar note Australia.',
    longDescription: 'Our classic $50 AUD banknote replica is one of our most popular prop pieces. Printed with custom matte organic inks on high-density paper, it mimics the hand-feel and crisp sound of paper currency while remaining 100% compliant with national laws and RBA prop money reproduction rules. Perfect for cashier training prop money Australia and film productions.',
    category: 'australian-notes',
    sku: 'AUD-50-OLD',
    seoTitle: 'Classic $50 AUD Prop Notes | Prop 50 Dollar Note Australia',
    metaDescription: 'Classic $50 AUD design prop banknotes. Realistic prop 50 dollar note Australia printed on non-glare matte paper. Buy Australian prop money for sale online.',
    stockStatus: 'in-stock',
    relatedProducts: ['20-aud-old-prop-money', '100-aud-old-prop-money'],
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
    id: '100-aud-old-prop-money',
    name: 'Classic Australian 100 Dollar Prop Notes (Old Series)',
    price: 250.00,
    description: 'High-denomination classic Australian 100 dollar prop notes. Elegant double-sided printing on premium matte bond.',
    longDescription: 'Make a lasting impression in luxury scenes, ransom setups, or high-stakes poker games. These classic Australian 100 dollar prop notes feature meticulous detail on every millimetre, perfectly adapted for sharp cinematic focus. Fully compliant with Reserve Bank of Australia prop money guidelines.',
    category: 'australian-notes',
    sku: 'AUD-100-OLD',
    seoTitle: 'Australian 100 Dollar Prop Notes Classic | Buy Prop Money Australia',
    metaDescription: 'High-denomination classic Australian 100 dollar prop notes. Perfect for high-stakes scenes and film sets. Prop money Australia next day delivery available.',
    stockStatus: 'in-stock',
    relatedProducts: ['50-aud-old-prop-money', '100-aud-new-prop-money'],
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
    id: '10-aud-new-prop-money',
    name: 'Prop 10 Dollar Note AUD (New Series Australian Dollar Prop Notes)',
    price: 200.00,
    description: 'Modern-style $10 AUD note replica featuring precise color matching for high-definition close-up shots.',
    longDescription: 'This replica represents the latest generation of Australian $10 banknotes. Designed to mimic the vibrant colors and signature layout of the modern series, it is optimized for high-resolution 4K and 8K cinematic lenses. Safe, legal, and non-reflective under studio lighting.',
    category: 'australian-notes',
    sku: 'AUD-10-NEW',
    seoTitle: 'Prop 10 Dollar Note AUD | Australian Dollar Prop Notes',
    metaDescription: 'Next-generation style $10 AUD prop banknotes with precise color matching. Double sided prop money Australia for film, TV, and photography.',
    stockStatus: 'in-stock',
    relatedProducts: ['20-aud-new-prop-money', '50-aud-new-prop-money'],
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
    id: '20-aud-new-prop-money',
    name: 'Prop 20 Dollar Note AUD (New Series Australian Dollar Prop Notes)',
    price: 200.00,
    description: 'New-generation prop 20 dollar note AUD. Features matte non-reflective inks designed for modern film sensors and cameras.',
    longDescription: 'Optimized for modern cinema camera sensors, this prop 20 dollar note AUD mimics the bold red hues of the contemporary Australian series. Perfect for fast cash counts, wallet scene fillers, music videos, or dynamic action-packed close-ups. 100% compliant with RBA prop money reproduction rules.',
    category: 'australian-notes',
    sku: 'AUD-20-NEW',
    seoTitle: 'Prop 20 Dollar Note AUD | Australian Prop Money For Sale',
    metaDescription: 'Contemporary prop 20 dollar note AUD replica prop banknotes. Meticulous detail for film production prop money Sydney, Melbourne, and Brisbane.',
    stockStatus: 'in-stock',
    relatedProducts: ['10-aud-new-prop-money', '50-aud-new-prop-money'],
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
    id: '50-aud-new-prop-money',
    name: 'Prop 50 Dollar Note Australia (New Series 50 AUD Notes)',
    price: 200.00,
    description: 'Next-gen prop 50 dollar note Australia. Meticulously designed according to Reserve Bank of Australia compliance guidelines.',
    longDescription: 'Bring extreme accuracy to your heist, corporate boardroom, or luxury sets with the modern-style prop 50 dollar note Australia. This high-demand prop utilizes deep yellow-gold pigments formulated strictly to avoid yellow flare under harsh flashes. Printed double-sided on non-glare matte paper. Available with prop money Australia next day delivery and prop money Australia Afterpay.',
    category: 'australian-notes',
    sku: 'AUD-50-NEW',
    seoTitle: 'Prop 50 Dollar Note Australia | Realistic Prop Money Australia',
    metaDescription: 'Modern style prop 50 dollar note Australia. Vibrant yellow-gold hues for film, TV, and photography. Australian prop money for sale with fast delivery.',
    stockStatus: 'in-stock',
    relatedProducts: ['20-aud-new-prop-money', '100-aud-new-prop-money'],
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
    id: '100-aud-new-prop-money',
    name: 'New Series 100 AUD Prop Money (Australian 100 Dollar Prop Notes)',
    price: 250.00,
    description: 'Our flagship prop 100 dollar note Australia (new series 100 aud prop money), perfect for cinematic high-stakes reveals.',
    longDescription: 'Complete your high-stakes narrative with the supreme new series 100 AUD prop money and Australian 100 dollar prop notes. Expertly color-graded for optimal video presence on 4K and 8K sensors, this is the ultimate prop 100 dollar note Australia for suitcases, safes, music videos, and detailed foreground counts. Features full print prop money AUD double-sided graphics with compliant Reserve Bank of Australia markings.',
    category: 'australian-notes',
    sku: 'AUD-100-NEW',
    seoTitle: 'Prop 100 Dollar Note Australia | New Series 100 AUD Prop Money',
    metaDescription: 'Modern series 100 AUD prop money and Australian 100 dollar prop notes. Realistic prop money Australia for film, TV, and videos. Next day delivery & Afterpay.',
    stockStatus: 'in-stock',
    relatedProducts: ['50-aud-new-prop-money', '100-aud-old-prop-money', 'prop-money-10000-stack-aud'],
    features: ['Flawless digital replication', 'Unparalleled color depth', 'Double-sided precision mapping', 'RBA-compliant markings (PROP ONLY — NOT LEGAL TENDER)'],
    specifications: {
      'Denomination': '$100 AUD',
      'Series': 'Modern (New)',
      'Material': 'Premium Double-Calendered Matte Paper',
      'Compliance': 'NOT LEGAL TENDER watermark'
    },
    image: 'https://drive.google.com/thumbnail?id=1hsVMPSI2tt3UJs3czwqWPsfcI6xCT-Yz&sz=w1000'
  },
  {
    id: 'prop-money-10000-stack-aud',
    name: 'Prop Money 10000 Stack AUD (Double Sided Full Print & Blank Filler)',
    price: 39.99,
    description: 'Authentic prop money 10000 stack AUD bound with realistic bank strap. Available as full print prop money AUD or blank filler prop money stacks Australia.',
    longDescription: 'The industry-standard prop money 10000 stack AUD for film productions, TV series, music videos, and social content. Each stack contains 100 crisp notes secured by an authentic currency strap. Choose full print prop money AUD (printed double-sided front and back) for dynamic close-up fanning and counting, or blank filler prop money stacks Australia for budget-friendly background filling in briefcases, safes, and duffle bags. 100% compliant with Reserve Bank of Australia prop money guidelines.',
    category: 'bundle-packs',
    sku: 'BND-STK-010',
    seoTitle: 'Prop Money 10000 Stack AUD | Full Print & Blank Filler Stacks Australia',
    metaDescription: 'Buy prop money 10000 stack AUD for film, TV, and music videos. Full print prop money AUD and blank filler prop money stacks Australia. Next day delivery & Afterpay.',
    stockStatus: 'in-stock',
    relatedProducts: ['100-aud-new-prop-money', 'prop-money-briefcase-bundle-australia', 'commercial-producer-bulk-reserve-50-stacks'],
    features: ['Prop money 10000 stack AUD with bank strap', 'Double sided prop money Australia (full print option)', 'Blank filler prop money stacks Australia option for bulk background volume', 'Matte non-reflective paper engineered for 4K cameras', 'Complies strictly with RBA reproduction rules'],
    specifications: {
      'Total Notes': '100 Notes per Stack',
      'Denomination': '$100 AUD Stacks (Face Value $10,000 Prop)',
      'Material': 'Premium Double-Calendered Matte Paper',
      'Compliance': 'NOT LEGAL TENDER watermarked'
    },
    image: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'
  },
  {
    id: 'prop-money-briefcase-bundle-australia',
    name: 'Prop Money Briefcase Bundle Australia (Silver Briefcase + 20 Stacks)',
    price: 450.00,
    description: 'The ultimate cinematic prop money briefcase bundle Australia. Premium foam-lined aluminium case packed with 20 banded AUD cash stacks.',
    longDescription: 'Elevate your bank heist, ransom reveal, or luxury VIP scene with the prop money briefcase bundle Australia. Includes a heavy-duty silver aluminium locking briefcase custom-fitted with 20 authentic prop money stacks AUD (representing $200,000 in cinema prop value). Meticulously styled for film production prop money Sydney, theatre prop money Melbourne, and TV production money props Brisbane. Wholesale prop money Australia pricing with fast shipping.',
    category: 'bundle-packs',
    sku: 'BND-BCB-020',
    seoTitle: 'Prop Money Briefcase Bundle Australia | Buy Prop Money Australia',
    metaDescription: 'Order the prop money briefcase bundle Australia with authentic aluminium case and 20 banded AUD stacks. Realistic prop money Australia with next day delivery.',
    stockStatus: 'in-stock',
    relatedProducts: ['prop-money-10000-stack-aud', 'commercial-producer-bulk-reserve-50-stacks', 'millionaire-heist-master-crate-100-stacks'],
    features: ['Silver aluminium locking briefcase with foam lining', '20 pre-banded realistic prop money stacks AUD', 'Zero glare under high-intensity movie lighting', 'RBA guideline compliant disclaimers on all notes'],
    specifications: {
      'Total Stacks': '20 Stacks ($200,000 Prop Value)',
      'Briefcase Material': 'Reinforced Aluminium & High-Density Foam',
      'Dimensions': '18" x 13" x 4.5"',
      'Compliance': 'Legal tender alternative markings'
    },
    image: 'https://drive.google.com/thumbnail?id=14pqxvToRwY62wDCjXrNk1GXEMvJjRppo&sz=w1000'
  },
  {
    id: 'commercial-producer-bulk-reserve-50-stacks',
    name: 'Commercial Producer Bulk Reserve (50 Stacks Wholesale Prop Money Australia)',
    price: 350.00,
    description: 'Bulk reserve set featuring 50 full stacks of high-fidelity replica currency for commercial productions and wholesale buyers.',
    longDescription: 'Engineered specifically for commercial film production, this bulk reserve set delivers 50 premium paper-bond cash stacks. Hand-secured with heavy-duty paper bands, they provide realistic volume and movement for large-scale camera pans. The premier choice for wholesale prop money Australia and cheap prop money Australia bulk requisitions.',
    category: 'bundle-packs',
    sku: 'BND-CP-050',
    seoTitle: 'Commercial Producer Bulk Reserve 50 Stacks | Wholesale Prop Money Australia',
    metaDescription: 'Bulk prop money bundle Australia containing 50 cash stacks for cinematic production sets. Cheap prop money Australia at wholesale rates with express shipping.',
    stockStatus: 'in-stock',
    relatedProducts: ['film-producer-pack', 'millionaire-heist-master-crate-100-stacks', 'prop-money-briefcase-bundle-australia'],
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
    name: 'Film Producer Pack (Film Production Prop Money Sydney & Melbourne)',
    price: 900.00,
    description: 'The ultimate production bundle, including mixed denomination stacks for premium narrative, dramatic, and theatre scenes.',
    longDescription: 'Specially curated for feature films, television shows, and streaming series, the Film Producer Pack offers a comprehensive mix of new and old design denominations. Fully optimized for ultra-high-resolution digital cinema cameras, this bundle is the primary choice for film production prop money Sydney, theatre prop money Melbourne, and TV production money props Brisbane.',
    category: 'bundle-packs',
    sku: 'BND-FP-100',
    seoTitle: 'Film Producer Pack | Legal Prop Money For Film Australia',
    metaDescription: 'Ultimate cinematic prop money bundle designed specifically for feature-length productions. Legal prop money for film Australia with next day delivery.',
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
    name: 'Millionaire Heist Master Crate (100 Stacks Prop Money Bundle Australia)',
    price: 2500.00,
    description: 'A massive industrial prop crate containing 100 complete stacks of pristine replica cash for major bank heist reveals.',
    longDescription: 'Designed for high-intensity heist, vault, and major ransom scenes, the Millionaire Heist Master Crate provides unparalleled visual scale. Complete with 100 fully-wrapped prop stacks, this set is the crown jewel of professional prop houses, providing realistic prop money Australia at wholesale scale.',
    category: 'bundle-packs',
    sku: 'BND-MH-100',
    seoTitle: 'Millionaire Heist Master Crate 100 Stacks | Prop Money Bundle Australia',
    metaDescription: 'Ultimate vault set containing 100 premium prop money stacks in an industrial presentation. Cheap prop money Australia wholesale rates with Afterpay.',
    stockStatus: 'in-stock',
    relatedProducts: ['film-producer-pack', 'wholesale-pack', 'prop-money-briefcase-bundle-australia'],
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
    name: 'Photography Studio Pack (Photography Prop Money AUD & Cashier Training)',
    price: 500.00,
    description: 'Custom selection of crisp prop notes designed for macro lens focus, editorial photography, and cashier training drills.',
    longDescription: 'A custom prop selection designed for high-resolution photographers and corporate trainers. With rich color saturation, perfect registration, and non-glare matte paper, this bundle is the perfect choice for photography prop money AUD, editorial fashion layouts, advertising shoots, and cashier training prop money Australia.',
    category: 'bundle-packs',
    sku: 'BND-PS-080',
    seoTitle: 'Photography Studio Pack | Photography Prop Money AUD',
    metaDescription: 'Superb macro-ready photography prop money AUD and cashier training prop money Australia. Vibrant colors without camera reflection. Fast delivery nationwide.',
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
    name: 'Wholesale Prop Money Australia Pack (Bulk Reserve 100 Stacks)',
    price: 1500.00,
    description: 'Bulk wholesale package ideal for prop rental agencies, stunt crews, and recurring studio productions in Australia.',
    longDescription: 'Perfect for rental houses or continuous film projects requiring a steady supply of camera-ready currency. The Wholesale Pack offers extensive mixed stacks at our most competitive pricing, backed by industrial production quality. The top option for wholesale prop money Australia and cheap prop money Australia.',
    category: 'bundle-packs',
    sku: 'BND-WP-200',
    seoTitle: 'Wholesale Prop Money Australia Pack | Cheap Prop Money Australia',
    metaDescription: 'Large-scale wholesale prop banknote pack for studio recurring supplies and prop houses. Buy Australian prop money for sale with express courier delivery.',
    stockStatus: 'in-stock',
    relatedProducts: ['millionaire-heist-master-crate-100-stacks', 'film-producer-pack', 'prop-money-briefcase-bundle-australia'],
    features: ['Extremely durable construction', 'Easy to distress and clean', 'Industry-trusted offset press quality', 'Fully legal reserve compliant'],
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
    name: 'AUD Money Gun Prop Cash (Money Shooter + AUD Notes)',
    price: 34.99,
    description: 'A fun, high-speed AUD money gun prop cash shooter that fires prop bills rapidly for music videos and parties.',
    longDescription: 'Make it rain! The AUD money gun prop cash shooter is the ultimate accessory for prop cash for music videos Australia, nightlife events, promotional activations, and prank prop money Australia skits. Smooth motorized trigger mechanism sprays bills continuously without jamming. Includes 100 sample prop notes.',
    category: 'accessories',
    sku: 'ACC-PMG-001',
    seoTitle: 'AUD Money Gun Prop Cash | Prop Cash for Music Videos Australia',
    metaDescription: 'Buy AUD money gun prop cash to shoot replica notes. Ideal prop cash for music videos Australia, club parties, and prank videos. Express delivery nationwide.',
    stockStatus: 'in-stock',
    relatedProducts: ['prop-money-10000-stack-aud'],
    features: ['Rapid fire action', 'Smooth bill feeder', 'Battery operated', 'Includes 100 AUD prop notes'],
    specifications: {
      'Material': 'Durable Plastic',
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
    relatedProducts: ['prop-money-briefcase-bundle-australia'],
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
    id: 'how-to-tell-counterfeit-money-australia-vs-prop-money',
    title: 'How to Tell Counterfeit Money in Australia: Prop Money vs. Fake Cash',
    excerpt: 'Learn the difference between legal prop money, counterfeit cash, and what to do if you encounter fake notes in Australia. We cover detectors, penalties, and RBA compliance.',
    content: `When producing a film, it's crucial to understand the difference between legal **australian prop money** and illegal **counterfeit money**. Many people ask, "what is counterfeit money?" or "define counterfeit money"—it is illegal currency created to deceive. Legal **props money** and **fake australian money prop** notes are expressly designed *not* to deceive.

### How to Tell if Money is Fake in Australia
If you're wondering **how to tell if money is fake australia** or **how to tell counterfeit money australia**, the Reserve Bank of Australia (RBA) has clear guidelines. Real Australian notes are made of polymer. If you use a **fake money tester pen** or a **fake cash detector**, real notes have specific UV properties and clear windows. In contrast, our **australian prop money realistic** notes are printed on premium matte paper. They will fail any **counterfeit money tester**, **fake money detector**, or **false money detector**. 

### Counterfeit Money Detectors & ATMs
Will an ATM accept our props? Absolutely not. **ATM counterfeit money** detectors and regular bank scanners will immediately reject paper props. If you ever say "an **atm gave me fake money**", that is a serious banking issue—but our **aus prop money** is explicitly marked and sized differently so it cannot be mistaken for real currency in a machine. Whether it's a standard **australian counterfeit money detector** or a retail **pen test counterfeit money**, our props are designed to be safe and legally compliant for camera use only.

### The Law: Counterfeit Money Australia Penalty
The **counterfeit money australia penalty** is severe. The **minimum sentence for counterfeit money australia** can involve heavy fines and jail time under the Crimes (Currency) Act 1981. If you are caught **making counterfeit money**, **making fake money**, or using **fake money flex** notes to buy goods, you face federal charges. We strictly prohibit the use of our **prop money au** for anything other than media production. You cannot use it as **baccarat fake money** in a real casino, nor as **pokies fake money**. 

### What Do I Do With Fake Money?
If you find a **fake note australia** or suspect you have **australian counterfeit** cash in circulation (like the recent **fake money circulating tasmania** or **counterfeit money charges hervey bay**), do not spend it. Turn it into the local police. If you ask, "**will the bank replace fake money**?" the answer is no; you bear the loss. 

### Why Choose Our Australian Prop Money For Sale
We provide the **best fake money** for cinema. Whether you need a **bag of fake money**, **1 1 prop money**, **$100 prop money**, or even **fake american money** / **american prop money** for a US-based script shot in Sydney, we are your trusted supplier. Avoid sketchy **alibaba fake money** or **alibaba prop money** which often violates RBA size and material rules. We supply **ready prop money**, **aud prop money**, and **fake us dollars** (**fake usd**) that look incredible on camera but remain 100% legal.

From **fake notes australia** for indie films to a massive **1000 fake money** stack for a heist scene, our **prop australian money** provides the **realistic fake money australia online** experience without the legal risks of actual **counterfiet money**.`,
    date: '2026-08-25',
    category: 'Compliance',
    readTime: '6 min read',
    image: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'
  },

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
    image: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'
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
    image: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'
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
    image: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'
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
    image: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'
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
    image: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'
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
    image: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'
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
    image: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'
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
    image: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'
  },
  {
    id: 'how-to-make-prop-money-look-and-feel-real',
    title: 'How to Make Prop Money Look and Feel Real',
    excerpt: 'Want to know how to make prop money feel real for your next film shoot? Learn the secrets to weathering and aging australian prop money realistic.',
    content: `When shooting close-up scenes, directors always want the highest quality prop money. But even the best australian prop money can look too pristine out of the box. So, how to make prop money feel real? 

### Weathering Fake Australian Money Props
To make your fake australian money prop for sale look circulated, you need to break down the paper fibers slightly. 
1. **The Crumple Method:** Crumple your prop money australian dollars tightly, then smooth them out. This gives the $100 prop money a worn-in texture.
2. **Staining:** Use coffee or tea to lightly stain your fake money stack prop. This is especially useful for vintage or old design notes. 

### Does MrBeast Use Prop Money?
Yes, large productions and YouTubers often use custom prop money or ready prop money for safety and visual impact. Using prop bundles of money australia ensures that sets remain secure while achieving the "money heist props" aesthetic. 

When you buy fake australian money props from us, you're getting double-sided, matte finish notes that already look fantastic on camera. Weathering them just adds that final touch of realism.`,
    date: '2026-08-01',
    category: 'Tutorial',
    readTime: '4 min read',
    image: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'
  },
  {
    id: 'is-prop-money-illegal-australia-laws',
    title: 'Is Prop Money Illegal? Understanding Australia Laws',
    excerpt: 'Is it illegal to buy prop money? We explore prop money australia laws and what makes our fake money props 100% legal to own and use on set.',
    content: `A common question we receive is: *is prop money illegal?* or *is it illegal to own prop money?* The short answer is no, it is perfectly legal to buy australian prop money and use it for artistic purposes, provided it follows the rules.

### Is Buying Prop Money Illegal?
Buying prop money is legal as long as the product adheres to the Reserve Bank of Australia (RBA) guidelines. Our australian movie prop money features the necessary disclaimers such as "PROP ONLY - NOT LEGAL TENDER". 

### Are They Counterfeit?
No. There is a distinct difference between a counterfeit money prop and a legal replica. Counterfeits attempt to deceive people into thinking they are real money. Our realistic prop money australia is designed strictly for cameras. We do not use polymer substrates (so no australian polymer prop money), which makes it instantly recognizable as a prop by touch. You might also wonder about euro prop money, canadian prop money, prop british money, or american prop money. Most international props have similar guidelines.

If you are looking for where to buy australian prop money safely, our store provides fully compliant motion picture prop money, ensuring your production stays out of legal trouble.`,
    date: '2026-08-05',
    category: 'Legal',
    readTime: '5 min read',
    image: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'legality',
    question: 'Is prop money legal in Australia?',
    answer: 'Yes, prop money is 100% legal to buy, possess, and utilize in Australia for artistic, cinematographic, educational, and novelty purposes. The Crimes (Currency) Act 1981 and Reserve Bank of Australia (RBA) guidelines regulate currency reproductions. Replica banknotes are fully lawful provided they cannot be mistaken for genuine currency. At Australian Prop Money, all our products are printed on non-polymer matte bond studio paper (never genuine polymer plastic), feature un-erasable "PROP ONLY — NOT LEGAL TENDER" markings, and have modified scale and security elements to ensure total legal compliance.'
  },
  {
    category: 'legality',
    question: 'What are the RBA prop money reproduction rules and guidelines?',
    answer: 'The Reserve Bank of Australia (RBA) prop money guidelines state that reproductions must be readily distinguishable from genuine notes. Key RBA prop money reproduction rules include: (1) Notes must not be printed on polymer plastic substrates; (2) If printed double-sided, notes must include prominent, indelible compliance disclosures such as "PROP ONLY — NOT LEGAL TENDER"; (3) No genuine microprinting, holographic patches, or tactile raised intaglio features may be copied; (4) Dimensions must be visually modified. Australian Prop Money designs every replica to conform strictly with these RBA reproduction rules.'
  },
  {
    category: 'legality',
    question: 'Counterfeit vs prop money Australia: What is the difference?',
    answer: 'The difference between counterfeit vs prop money Australia lies entirely in construction and legal intent. Counterfeiting is a federal felony involving an intention to deceive and defraud others into accepting fake bills as genuine legal tender. In contrast, prop money is legitimate replica theatrical currency created strictly for closed-set film productions, television broadcasts, theatre, and creative media. Legal prop money is manufactured on heavy matte paper with clear "NOT LEGAL TENDER" markings, lacking polymer film, clear windows, or metallic foils, ensuring it fails all cash counterfeit detectors instantly.'
  },
  {
    category: 'ordering',
    question: 'Where to buy prop money in Australia with fast delivery and Afterpay?',
    answer: 'If you are wondering where to buy prop money in Australia, Australian Prop Money (australianpropmoney.org) is the nation\'s #1 verified supplier. We provide Australian prop money for sale with same-day dispatch and prop money Australia next day delivery via Australia Post Express and StarTrack. We support prop money Australia Afterpay, PayPal, credit cards, and instant bank transfers, with shipping to Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, and regional Australia.'
  },
  {
    category: 'legality',
    question: 'How to get legal prop money for film Australia and video productions?',
    answer: 'To get legal prop money for film Australia, simply select your required denominations and quantities from our catalog. Whether you are producing a feature film, indie short, music video, or commercial, our movie prop money Australia is pre-cleared for broadcast and theatrical release under Australian law. Art directors and prop masters receive instant VAT/tax invoices showing our verified Australian Business Number (ABN: 46 674 267 559) for corporate production accounting.'
  },
  {
    category: 'ordering',
    question: 'Do you supply film production prop money Sydney, theatre prop money Melbourne, and TV props Brisbane?',
    answer: 'Yes. We are the trusted studio supplier of film production prop money Sydney (Fox Studios, Disney Studios Australia, Western Sydney production hubs), theatre prop money Melbourne (East End Theatre District, MTC, Arts Centre Melbourne), and TV production money props Brisbane and Gold Coast (Village Roadshow Studios). We offer next-day courier dispatch and express delivery direct to studio set gates and art department offices across NSW, VIC, and QLD.'
  },
  {
    category: 'ordering',
    question: 'Can I use prop cash for music videos Australia, cashier training, photography, and pranks?',
    answer: 'Yes. Our clients regularly use prop cash for music videos Australia (hip-hop clips, trap visuals, slow-motion 240fps cash rain), cashier training prop money Australia (teaching retail, banking, and hospitality staff currency handling drills without cash loss risk), photography prop money AUD (high-DPI macro lens editorial and fashion flatlays), and prank prop money Australia (social media skits with clear disclaimers). For high-energy party scenes, we also supply the AUD money gun prop cash shooter.'
  },
  {
    category: 'ordering',
    question: 'What is the difference between full print prop money AUD, double sided prop money, and blank filler prop money stacks Australia?',
    answer: 'We provide three tailored formats: (1) Full print prop money AUD is printed double sided prop money Australia with complete, high-resolution front and back artwork on every single bill in the stack—ideal for close-up camera fanning, counting, and throwing. (2) Blank filler prop money stacks Australia feature full double-sided printed notes on the top and bottom of each 100-note stack, while the middle notes are blank color-matched paper—providing realistic volume and thickness for briefcases, duffle bags, and bank vaults at a fraction of the cost. (3) Prop money 10000 stack AUD bundles come pre-wrapped in authentic currency straps.'
  },
  {
    category: 'custom',
    question: 'Which Australian dollar prop notes are available ($100, $50, $20, $10)?',
    answer: 'We manufacture all major denominations: the new series 100 AUD prop money, prop 100 dollar note Australia, classic Australian 100 dollar prop notes (old series), prop 50 dollar note Australia (new & old series), prop 20 dollar note AUD (new & old series), and prop 10 dollar note AUD. All notes feature rich, color-matched organic inks on heavy matte bond paper with zero camera glare.'
  },
  {
    category: 'ordering',
    question: 'Do you offer cheap prop money Australia and wholesale prop money Australia bundles?',
    answer: 'Yes, we provide the most competitive pricing in the nation for cheap prop money Australia and wholesale prop money Australia. Productions requiring high volumes can order our Prop Money Briefcase Bundle Australia, Commercial Producer Bulk Reserve (50 Stacks), or Millionaire Heist Master Crate (100 Stacks) with tiered wholesale discounts up to 40% off retail pricing, backed by full tax invoices.'
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
