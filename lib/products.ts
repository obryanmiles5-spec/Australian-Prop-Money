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
  {
    "id": "10-aud-classic-notes-front",
    "name": "$10 AUD Classic Notes Front",
    "price": 15,
    "description": "Premium single-sided replica representing the front (obverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "10-AUD-CLASSIC-NOTES-FRONT",
    "seoTitle": "$10 AUD Classic Notes Front | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $10 AUD Classic Notes Front for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-front",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-front"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "20-aud-classic-notes-back",
      "100-aud-new-notes-bundle",
      "20-aud-classic-notes-bundle"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Obverse Side Only",
      "Dimensions": "137mm x 65mm"
    }
  },
  {
    "id": "10-aud-classic-notes-back",
    "name": "$10 AUD Classic Notes Back",
    "price": 15,
    "description": "Premium single-sided replica representing the back (reverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "10-AUD-CLASSIC-NOTES-BACK",
    "seoTitle": "$10 AUD Classic Notes Back | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $10 AUD Classic Notes Back for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-back",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-back"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "100-aud-classic-notes-stack",
      "100-aud-classic-notes-front",
      "50-aud-classic-notes-front"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Reverse Side Only",
      "Dimensions": "137mm x 65mm"
    }
  },
  {
    "id": "10-aud-classic-notes-bundle",
    "name": "$10 AUD Classic Notes Bundle",
    "price": 45,
    "description": "A loose, pre-arranged collection of replica banknotes. Perfectly styled and packaged for dynamic fanning, casting, or cash-counting camera shots.",
    "longDescription": "Make your production value stand out with our premium prop bundle. Designed specifically for active fanning and count-outs, each note features realistic color grading, crisp textures, and zero lighting reflections. It offers the authentic snapping noise of real cash when handled by production talents. Fully RBA-compliant and perfect for 4K/8K filming.",
    "category": "australian-notes",
    "sku": "10-AUD-CLASSIC-NOTES-BUNDLE",
    "seoTitle": "$10 AUD Classic Notes Bundle | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $10 AUD Classic Notes Bundle for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-bundle",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-bundle"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "10-aud-new-notes-front",
      "100-aud-classic-notes-stack",
      "50-aud-new-notes-stack"
    ],
    "features": [
      "Pre-fanned and arranged for quick setup",
      "Matte finish for clear focus under professional lighting",
      "Excellent handle crispness and sound signature",
      "Complies fully with reserve bank specifications",
      "Perfect for close-ups, counting, and throwing shots"
    ],
    "specifications": {
      "Paper Type": "High-Density Crisp Bond",
      "Ink Type": "Reflective-Neutral Studio Ink",
      "Style": "Fanned & Strapped Bundle",
      "Dimensions": "Standard scale matching real currency"
    }
  },
  {
    "id": "10-aud-classic-notes-stack",
    "name": "$10 AUD Classic Notes Stack",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "australian-notes",
    "sku": "10-AUD-CLASSIC-NOTES-STACK",
    "seoTitle": "$10 AUD Classic Notes Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $10 AUD Classic Notes Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-stack",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/10 AUD/10-aud-stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "100-aud-classic-notes-stack",
      "100-aud-new-notes-back",
      "50-aud-classic-notes-bundle"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "20-aud-classic-notes-front",
    "name": "$20 AUD Classic Notes Front",
    "price": 15,
    "description": "Premium single-sided replica representing the front (obverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "20-AUD-CLASSIC-NOTES-FRONT",
    "seoTitle": "$20 AUD Classic Notes Front | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $20 AUD Classic Notes Front for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-front",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-front"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "10-aud-classic-notes-bundle",
      "10-aud-classic-notes-back",
      "20-aud-new-notes-bundle"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Obverse Side Only",
      "Dimensions": "144mm x 65mm"
    }
  },
  {
    "id": "20-aud-classic-notes-back",
    "name": "$20 AUD Classic Notes Back",
    "price": 15,
    "description": "Premium single-sided replica representing the back (reverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "20-AUD-CLASSIC-NOTES-BACK",
    "seoTitle": "$20 AUD Classic Notes Back | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $20 AUD Classic Notes Back for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-back",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-back"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "100-aud-classic-notes-front",
      "10-aud-classic-notes-stack",
      "20-aud-classic-notes-front"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Reverse Side Only",
      "Dimensions": "144mm x 65mm"
    }
  },
  {
    "id": "20-aud-classic-notes-bundle",
    "name": "$20 AUD Classic Notes Bundle",
    "price": 45,
    "description": "A loose, pre-arranged collection of replica banknotes. Perfectly styled and packaged for dynamic fanning, casting, or cash-counting camera shots.",
    "longDescription": "Make your production value stand out with our premium prop bundle. Designed specifically for active fanning and count-outs, each note features realistic color grading, crisp textures, and zero lighting reflections. It offers the authentic snapping noise of real cash when handled by production talents. Fully RBA-compliant and perfect for 4K/8K filming.",
    "category": "australian-notes",
    "sku": "20-AUD-CLASSIC-NOTES-BUNDLE",
    "seoTitle": "$20 AUD Classic Notes Bundle | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $20 AUD Classic Notes Bundle for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-bundle",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-bundle"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "50-aud-classic-notes-front",
      "10-aud-classic-notes-stack",
      "10-aud-new-notes-bundle"
    ],
    "features": [
      "Pre-fanned and arranged for quick setup",
      "Matte finish for clear focus under professional lighting",
      "Excellent handle crispness and sound signature",
      "Complies fully with reserve bank specifications",
      "Perfect for close-ups, counting, and throwing shots"
    ],
    "specifications": {
      "Paper Type": "High-Density Crisp Bond",
      "Ink Type": "Reflective-Neutral Studio Ink",
      "Style": "Fanned & Strapped Bundle",
      "Dimensions": "Standard scale matching real currency"
    }
  },
  {
    "id": "20-aud-classic-notes-stack",
    "name": "$20 AUD Classic Notes Stack",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "australian-notes",
    "sku": "20-AUD-CLASSIC-NOTES-STACK",
    "seoTitle": "$20 AUD Classic Notes Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $20 AUD Classic Notes Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-stack",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/20 AUD/20-aud-stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "50-aud-new-notes-back",
      "20-aud-classic-notes-front",
      "20-aud-classic-notes-bundle"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "50-aud-classic-notes-front",
    "name": "$50 AUD Classic Notes Front",
    "price": 15,
    "description": "Premium single-sided replica representing the front (obverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "50-AUD-CLASSIC-NOTES-FRONT",
    "seoTitle": "$50 AUD Classic Notes Front | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $50 AUD Classic Notes Front for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-front",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-front"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "10-aud-new-notes-stack",
      "20-aud-new-notes-stack",
      "100-aud-new-notes-back"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Obverse Side Only",
      "Dimensions": "151mm x 65mm"
    }
  },
  {
    "id": "50-aud-classic-notes-back",
    "name": "$50 AUD Classic Notes Back",
    "price": 15,
    "description": "Premium single-sided replica representing the back (reverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "50-AUD-CLASSIC-NOTES-BACK",
    "seoTitle": "$50 AUD Classic Notes Back | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $50 AUD Classic Notes Back for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-back",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-back"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "20-aud-classic-notes-front",
      "100-aud-new-notes-back",
      "50-aud-new-notes-back"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Reverse Side Only",
      "Dimensions": "151mm x 65mm"
    }
  },
  {
    "id": "50-aud-classic-notes-bundle",
    "name": "$50 AUD Classic Notes Bundle",
    "price": 45,
    "description": "A loose, pre-arranged collection of replica banknotes. Perfectly styled and packaged for dynamic fanning, casting, or cash-counting camera shots.",
    "longDescription": "Make your production value stand out with our premium prop bundle. Designed specifically for active fanning and count-outs, each note features realistic color grading, crisp textures, and zero lighting reflections. It offers the authentic snapping noise of real cash when handled by production talents. Fully RBA-compliant and perfect for 4K/8K filming.",
    "category": "australian-notes",
    "sku": "50-AUD-CLASSIC-NOTES-BUNDLE",
    "seoTitle": "$50 AUD Classic Notes Bundle | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $50 AUD Classic Notes Bundle for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-bundle",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-bundle"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "50-aud-new-notes-stack",
      "10-aud-classic-notes-stack",
      "50-aud-classic-notes-back"
    ],
    "features": [
      "Pre-fanned and arranged for quick setup",
      "Matte finish for clear focus under professional lighting",
      "Excellent handle crispness and sound signature",
      "Complies fully with reserve bank specifications",
      "Perfect for close-ups, counting, and throwing shots"
    ],
    "specifications": {
      "Paper Type": "High-Density Crisp Bond",
      "Ink Type": "Reflective-Neutral Studio Ink",
      "Style": "Fanned & Strapped Bundle",
      "Dimensions": "Standard scale matching real currency"
    }
  },
  {
    "id": "50-aud-classic-notes-stack",
    "name": "$50 AUD Classic Notes Stack",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "australian-notes",
    "sku": "50-AUD-CLASSIC-NOTES-STACK",
    "seoTitle": "$50 AUD Classic Notes Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $50 AUD Classic Notes Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-stack",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/50 AUD/50-aud-stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "100-aud-classic-notes-front",
      "20-aud-new-notes-back",
      "50-aud-new-notes-stack"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "100-aud-classic-notes-front",
    "name": "$100 AUD Classic Notes Front",
    "price": 15,
    "description": "Premium single-sided replica representing the front (obverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "100-AUD-CLASSIC-NOTES-FRONT",
    "seoTitle": "$100 AUD Classic Notes Front | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $100 AUD Classic Notes Front for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-front",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-front"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "50-aud-new-notes-stack",
      "10-aud-classic-notes-stack",
      "100-aud-new-notes-back"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Obverse Side Only",
      "Dimensions": "158mm x 65mm"
    }
  },
  {
    "id": "100-aud-classic-notes-back",
    "name": "$100 AUD Classic Notes Back",
    "price": 15,
    "description": "Premium single-sided replica representing the back (reverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "100-AUD-CLASSIC-NOTES-BACK",
    "seoTitle": "$100 AUD Classic Notes Back | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $100 AUD Classic Notes Back for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-back",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-back"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "50-aud-classic-notes-stack",
      "50-aud-new-notes-back",
      "10-aud-classic-notes-front"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Reverse Side Only",
      "Dimensions": "158mm x 65mm"
    }
  },
  {
    "id": "100-aud-classic-notes-bundle",
    "name": "$100 AUD Classic Notes Bundle",
    "price": 45,
    "description": "A loose, pre-arranged collection of replica banknotes. Perfectly styled and packaged for dynamic fanning, casting, or cash-counting camera shots.",
    "longDescription": "Make your production value stand out with our premium prop bundle. Designed specifically for active fanning and count-outs, each note features realistic color grading, crisp textures, and zero lighting reflections. It offers the authentic snapping noise of real cash when handled by production talents. Fully RBA-compliant and perfect for 4K/8K filming.",
    "category": "australian-notes",
    "sku": "100-AUD-CLASSIC-NOTES-BUNDLE",
    "seoTitle": "$100 AUD Classic Notes Bundle | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $100 AUD Classic Notes Bundle for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-bundle",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-bundle"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "20-aud-classic-notes-back",
      "100-aud-new-notes-bundle",
      "20-aud-new-notes-back"
    ],
    "features": [
      "Pre-fanned and arranged for quick setup",
      "Matte finish for clear focus under professional lighting",
      "Excellent handle crispness and sound signature",
      "Complies fully with reserve bank specifications",
      "Perfect for close-ups, counting, and throwing shots"
    ],
    "specifications": {
      "Paper Type": "High-Density Crisp Bond",
      "Ink Type": "Reflective-Neutral Studio Ink",
      "Style": "Fanned & Strapped Bundle",
      "Dimensions": "Standard scale matching real currency"
    }
  },
  {
    "id": "100-aud-classic-notes-stack",
    "name": "$100 AUD Classic Notes Stack",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "australian-notes",
    "sku": "100-AUD-CLASSIC-NOTES-STACK",
    "seoTitle": "$100 AUD Classic Notes Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $100 AUD Classic Notes Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-stack",
    "gallery": [
      "images/products/Australian Notes/Classic-Notes/100 AUD/100-aud-stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "50-aud-new-notes-bundle",
      "20-aud-new-notes-front",
      "50-aud-new-notes-back"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "10-aud-new-notes-front",
    "name": "$10 AUD New Notes Front",
    "price": 15,
    "description": "Premium single-sided replica representing the front (obverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "10-AUD-NEW-NOTES-FRONT",
    "seoTitle": "$10 AUD New Notes Front | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $10 AUD New Notes Front for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/10 AUD/10-aud-front",
    "gallery": [
      "images/products/Australian Notes/New-Notes/10 AUD/10-aud-front"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "10-aud-classic-notes-front",
      "10-aud-new-notes-stack",
      "100-aud-new-notes-stack"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Obverse Side Only",
      "Dimensions": "137mm x 65mm"
    }
  },
  {
    "id": "10-aud-new-notes-back",
    "name": "$10 AUD New Notes Back",
    "price": 15,
    "description": "Premium single-sided replica representing the back (reverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "10-AUD-NEW-NOTES-BACK",
    "seoTitle": "$10 AUD New Notes Back | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $10 AUD New Notes Back for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/10 AUD/10-aud-back",
    "gallery": [
      "images/products/Australian Notes/New-Notes/10 AUD/10-aud-back"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "50-aud-new-notes-stack",
      "100-aud-classic-notes-bundle",
      "50-aud-classic-notes-back"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Reverse Side Only",
      "Dimensions": "137mm x 65mm"
    }
  },
  {
    "id": "10-aud-new-notes-bundle",
    "name": "$10 AUD New Notes Bundle",
    "price": 45,
    "description": "A loose, pre-arranged collection of replica banknotes. Perfectly styled and packaged for dynamic fanning, casting, or cash-counting camera shots.",
    "longDescription": "Make your production value stand out with our premium prop bundle. Designed specifically for active fanning and count-outs, each note features realistic color grading, crisp textures, and zero lighting reflections. It offers the authentic snapping noise of real cash when handled by production talents. Fully RBA-compliant and perfect for 4K/8K filming.",
    "category": "australian-notes",
    "sku": "10-AUD-NEW-NOTES-BUNDLE",
    "seoTitle": "$10 AUD New Notes Bundle | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $10 AUD New Notes Bundle for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/10 AUD/10-aud-bundle",
    "gallery": [
      "images/products/Australian Notes/New-Notes/10 AUD/10-aud-bundle"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "20-aud-new-notes-back",
      "10-aud-classic-notes-bundle",
      "100-aud-new-notes-stack"
    ],
    "features": [
      "Pre-fanned and arranged for quick setup",
      "Matte finish for clear focus under professional lighting",
      "Excellent handle crispness and sound signature",
      "Complies fully with reserve bank specifications",
      "Perfect for close-ups, counting, and throwing shots"
    ],
    "specifications": {
      "Paper Type": "High-Density Crisp Bond",
      "Ink Type": "Reflective-Neutral Studio Ink",
      "Style": "Fanned & Strapped Bundle",
      "Dimensions": "Standard scale matching real currency"
    }
  },
  {
    "id": "10-aud-new-notes-stack",
    "name": "$10 AUD New Notes Stack",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "australian-notes",
    "sku": "10-AUD-NEW-NOTES-STACK",
    "seoTitle": "$10 AUD New Notes Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $10 AUD New Notes Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/10 AUD/10-aud-stack",
    "gallery": [
      "images/products/Australian Notes/New-Notes/10 AUD/10-aud-stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "20-aud-classic-notes-back",
      "50-aud-new-notes-front",
      "50-aud-classic-notes-bundle"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "20-aud-new-notes-front",
    "name": "$20 AUD New Notes Front",
    "price": 15,
    "description": "Premium single-sided replica representing the front (obverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "20-AUD-NEW-NOTES-FRONT",
    "seoTitle": "$20 AUD New Notes Front | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $20 AUD New Notes Front for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/20 AUD/20-aud-front",
    "gallery": [
      "images/products/Australian Notes/New-Notes/20 AUD/20-aud-front"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "100-aud-classic-notes-front",
      "10-aud-classic-notes-front",
      "100-aud-new-notes-bundle"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Obverse Side Only",
      "Dimensions": "144mm x 65mm"
    }
  },
  {
    "id": "20-aud-new-notes-back",
    "name": "$20 AUD New Notes Back",
    "price": 15,
    "description": "Premium single-sided replica representing the back (reverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "20-AUD-NEW-NOTES-BACK",
    "seoTitle": "$20 AUD New Notes Back | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $20 AUD New Notes Back for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/20 AUD/20-aud-back",
    "gallery": [
      "images/products/Australian Notes/New-Notes/20 AUD/20-aud-back"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "10-aud-new-notes-stack",
      "100-aud-classic-notes-bundle",
      "10-aud-classic-notes-front"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Reverse Side Only",
      "Dimensions": "144mm x 65mm"
    }
  },
  {
    "id": "20-aud-new-notes-bundle",
    "name": "$20 AUD New Notes Bundle",
    "price": 45,
    "description": "A loose, pre-arranged collection of replica banknotes. Perfectly styled and packaged for dynamic fanning, casting, or cash-counting camera shots.",
    "longDescription": "Make your production value stand out with our premium prop bundle. Designed specifically for active fanning and count-outs, each note features realistic color grading, crisp textures, and zero lighting reflections. It offers the authentic snapping noise of real cash when handled by production talents. Fully RBA-compliant and perfect for 4K/8K filming.",
    "category": "australian-notes",
    "sku": "20-AUD-NEW-NOTES-BUNDLE",
    "seoTitle": "$20 AUD New Notes Bundle | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $20 AUD New Notes Bundle for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/20 AUD/20-aud-bundle",
    "gallery": [
      "images/products/Australian Notes/New-Notes/20 AUD/20-aud-bundle"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "100-aud-new-notes-front",
      "50-aud-classic-notes-bundle",
      "10-aud-classic-notes-back"
    ],
    "features": [
      "Pre-fanned and arranged for quick setup",
      "Matte finish for clear focus under professional lighting",
      "Excellent handle crispness and sound signature",
      "Complies fully with reserve bank specifications",
      "Perfect for close-ups, counting, and throwing shots"
    ],
    "specifications": {
      "Paper Type": "High-Density Crisp Bond",
      "Ink Type": "Reflective-Neutral Studio Ink",
      "Style": "Fanned & Strapped Bundle",
      "Dimensions": "Standard scale matching real currency"
    }
  },
  {
    "id": "20-aud-new-notes-stack",
    "name": "$20 AUD New Notes Stack",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "australian-notes",
    "sku": "20-AUD-NEW-NOTES-STACK",
    "seoTitle": "$20 AUD New Notes Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $20 AUD New Notes Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/20 AUD/20-aud-stack",
    "gallery": [
      "images/products/Australian Notes/New-Notes/20 AUD/20-aud-stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "10-aud-classic-notes-bundle",
      "50-aud-new-notes-bundle",
      "20-aud-classic-notes-front"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "50-aud-new-notes-front",
    "name": "$50 AUD New Notes Front",
    "price": 15,
    "description": "Premium single-sided replica representing the front (obverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "50-AUD-NEW-NOTES-FRONT",
    "seoTitle": "$50 AUD New Notes Front | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $50 AUD New Notes Front for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/50 AUD/50-aud-front",
    "gallery": [
      "images/products/Australian Notes/New-Notes/50 AUD/50-aud-front"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "10-aud-classic-notes-back",
      "100-aud-new-notes-back",
      "20-aud-classic-notes-front"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Obverse Side Only",
      "Dimensions": "151mm x 65mm"
    }
  },
  {
    "id": "50-aud-new-notes-back",
    "name": "$50 AUD New Notes Back",
    "price": 15,
    "description": "Premium single-sided replica representing the back (reverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "50-AUD-NEW-NOTES-BACK",
    "seoTitle": "$50 AUD New Notes Back | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $50 AUD New Notes Back for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/50 AUD/50-aud-back",
    "gallery": [
      "images/products/Australian Notes/New-Notes/50 AUD/50-aud-back"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "50-aud-new-notes-stack",
      "20-aud-classic-notes-bundle",
      "20-aud-new-notes-stack"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Reverse Side Only",
      "Dimensions": "151mm x 65mm"
    }
  },
  {
    "id": "50-aud-new-notes-bundle",
    "name": "$50 AUD New Notes Bundle",
    "price": 45,
    "description": "A loose, pre-arranged collection of replica banknotes. Perfectly styled and packaged for dynamic fanning, casting, or cash-counting camera shots.",
    "longDescription": "Make your production value stand out with our premium prop bundle. Designed specifically for active fanning and count-outs, each note features realistic color grading, crisp textures, and zero lighting reflections. It offers the authentic snapping noise of real cash when handled by production talents. Fully RBA-compliant and perfect for 4K/8K filming.",
    "category": "australian-notes",
    "sku": "50-AUD-NEW-NOTES-BUNDLE",
    "seoTitle": "$50 AUD New Notes Bundle | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $50 AUD New Notes Bundle for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/50 AUD/50-aud-bundle",
    "gallery": [
      "images/products/Australian Notes/New-Notes/50 AUD/50-aud-bundle"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "10-aud-classic-notes-bundle",
      "10-aud-new-notes-stack",
      "10-aud-new-notes-back"
    ],
    "features": [
      "Pre-fanned and arranged for quick setup",
      "Matte finish for clear focus under professional lighting",
      "Excellent handle crispness and sound signature",
      "Complies fully with reserve bank specifications",
      "Perfect for close-ups, counting, and throwing shots"
    ],
    "specifications": {
      "Paper Type": "High-Density Crisp Bond",
      "Ink Type": "Reflective-Neutral Studio Ink",
      "Style": "Fanned & Strapped Bundle",
      "Dimensions": "Standard scale matching real currency"
    }
  },
  {
    "id": "50-aud-new-notes-stack",
    "name": "$50 AUD New Notes Stack",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "australian-notes",
    "sku": "50-AUD-NEW-NOTES-STACK",
    "seoTitle": "$50 AUD New Notes Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $50 AUD New Notes Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/50 AUD/50-aud-stack",
    "gallery": [
      "images/products/Australian Notes/New-Notes/50 AUD/50-aud-stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "100-aud-new-notes-bundle",
      "10-aud-classic-notes-front",
      "20-aud-new-notes-stack"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "100-aud-new-notes-front",
    "name": "$100 AUD New Notes Front",
    "price": 15,
    "description": "Premium single-sided replica representing the front (obverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "100-AUD-NEW-NOTES-FRONT",
    "seoTitle": "$100 AUD New Notes Front | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $100 AUD New Notes Front for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/100 AUD/100-aud-front",
    "gallery": [
      "images/products/Australian Notes/New-Notes/100 AUD/100-aud-front"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "20-aud-classic-notes-stack",
      "10-aud-classic-notes-front",
      "100-aud-new-notes-bundle"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Obverse Side Only",
      "Dimensions": "158mm x 65mm"
    }
  },
  {
    "id": "100-aud-new-notes-back",
    "name": "$100 AUD New Notes Back",
    "price": 15,
    "description": "Premium single-sided replica representing the back (reverse) of the Australian banknote. Specially formulated for high-definition close-up studio shots.",
    "longDescription": "Designed to comply fully with the Reserve Bank of Australia (RBA) guidelines, this specimen bill features ultra-high-definition, single-sided, non-reflective printing. Printed on high-density bond paper with organic matte ink, it eliminates camera lens flare and looks identical to genuine currency on film. Ideal for detailed insert shots, crime scene reconstructions, and training purposes.",
    "category": "australian-notes",
    "sku": "100-AUD-NEW-NOTES-BACK",
    "seoTitle": "$100 AUD New Notes Back | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $100 AUD New Notes Back for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/100 AUD/100-aud-back",
    "gallery": [
      "images/products/Australian Notes/New-Notes/100 AUD/100-aud-back"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "10-aud-new-notes-bundle",
      "50-aud-new-notes-front",
      "10-aud-new-notes-stack"
    ],
    "features": [
      "Dual-side matched high-resolution scanning",
      "Non-reflective organic matte inks preventing studio glare",
      "Standard scale and dimensions",
      "Legal \"SPECIMEN\" markings compliant with federal laws",
      "Crisp heavyweight paper feel"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Bond",
      "Ink Type": "Color-Calibrated Studio Inks",
      "Note Type": "Reverse Side Only",
      "Dimensions": "158mm x 65mm"
    }
  },
  {
    "id": "100-aud-new-notes-bundle",
    "name": "$100 AUD New Notes Bundle",
    "price": 45,
    "description": "A loose, pre-arranged collection of replica banknotes. Perfectly styled and packaged for dynamic fanning, casting, or cash-counting camera shots.",
    "longDescription": "Make your production value stand out with our premium prop bundle. Designed specifically for active fanning and count-outs, each note features realistic color grading, crisp textures, and zero lighting reflections. It offers the authentic snapping noise of real cash when handled by production talents. Fully RBA-compliant and perfect for 4K/8K filming.",
    "category": "australian-notes",
    "sku": "100-AUD-NEW-NOTES-BUNDLE",
    "seoTitle": "$100 AUD New Notes Bundle | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $100 AUD New Notes Bundle for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/100 AUD/100-aud-bundle",
    "gallery": [
      "images/products/Australian Notes/New-Notes/100 AUD/100-aud-bundle"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "20-aud-classic-notes-stack",
      "20-aud-classic-notes-front",
      "10-aud-new-notes-stack"
    ],
    "features": [
      "Pre-fanned and arranged for quick setup",
      "Matte finish for clear focus under professional lighting",
      "Excellent handle crispness and sound signature",
      "Complies fully with reserve bank specifications",
      "Perfect for close-ups, counting, and throwing shots"
    ],
    "specifications": {
      "Paper Type": "High-Density Crisp Bond",
      "Ink Type": "Reflective-Neutral Studio Ink",
      "Style": "Fanned & Strapped Bundle",
      "Dimensions": "Standard scale matching real currency"
    }
  },
  {
    "id": "100-aud-new-notes-stack",
    "name": "$100 AUD New Notes Stack",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "australian-notes",
    "sku": "100-AUD-NEW-NOTES-STACK",
    "seoTitle": "$100 AUD New Notes Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity $100 AUD New Notes Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack",
    "gallery": [
      "images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "100-aud-new-notes-back",
      "50-aud-new-notes-front",
      "10-aud-classic-notes-front"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "action-heist-weathered-100-stack",
    "name": "Action Heist Weathered $100 Stack",
    "price": 65,
    "description": "Bespoke weathered and distressed prop money stack of 100 bills. Artistically aged to add realistic grit and suspense to heist, action, or crime scene filming.",
    "longDescription": "Handcrafted by professional scenic artists, our aged stacks bring cinematic depth to your production. Each stack is distressed using customized non-toxic treatments to simulate grime, water exposure, burns, or underworld wear. Includes 100 double-sided notes wrapped in a realistic currency band. Extremely convincing in close-up high-definition shots.",
    "category": "movie-prop-money",
    "sku": "ACTION-HEIST-WEATHERED-100-STACK",
    "seoTitle": "Action Heist Weathered $100 Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Action Heist Weathered $100 Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Movie-Prop Money/Action-Heist-Weathered-$100-Stack",
    "gallery": [
      "images/products/Movie-Prop Money/Action-Heist-Weathered-$100-Stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "water-logged-underworld-cash-stack",
      "charred-and-singed-50-prop-note-stack",
      "crimson-stained-100-prop-note-stack"
    ],
    "features": [
      "Artisan-weathered for realistic grit",
      "Double-sided non-reflective premium print",
      "Includes 100 distressed bills and a custom bank strap",
      "Safe and non-toxic treatment processes",
      "Highly recommended for action, cartel, and heist movies"
    ],
    "specifications": {
      "Process": "Artisanal Hand-Weathering & Aging",
      "Count": "100 Replica Bills",
      "Strap": "Aged Kraft Bank Strap",
      "Inks": "Smudge-Resistant Organic Inks"
    }
  },
  {
    "id": "action-heist-weathered-50-stack",
    "name": "Action Heist Weathered $50 Stack",
    "price": 65,
    "description": "Bespoke weathered and distressed prop money stack of 100 bills. Artistically aged to add realistic grit and suspense to heist, action, or crime scene filming.",
    "longDescription": "Handcrafted by professional scenic artists, our aged stacks bring cinematic depth to your production. Each stack is distressed using customized non-toxic treatments to simulate grime, water exposure, burns, or underworld wear. Includes 100 double-sided notes wrapped in a realistic currency band. Extremely convincing in close-up high-definition shots.",
    "category": "movie-prop-money",
    "sku": "ACTION-HEIST-WEATHERED-50-STACK",
    "seoTitle": "Action Heist Weathered $50 Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Action Heist Weathered $50 Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Movie-Prop-Money/Action-Heist-Weathered-$50-Stack",
    "gallery": [
      "images/products/Movie-Prop-Money/Action-Heist-Weathered-$50-Stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "crimson-stained-100-prop-note-stack",
      "action-heist-weathered-100-stack",
      "water-logged-underworld-cash-stack"
    ],
    "features": [
      "Artisan-weathered for realistic grit",
      "Double-sided non-reflective premium print",
      "Includes 100 distressed bills and a custom bank strap",
      "Safe and non-toxic treatment processes",
      "Highly recommended for action, cartel, and heist movies"
    ],
    "specifications": {
      "Process": "Artisanal Hand-Weathering & Aging",
      "Count": "100 Replica Bills",
      "Strap": "Aged Kraft Bank Strap",
      "Inks": "Smudge-Resistant Organic Inks"
    }
  },
  {
    "id": "crimson-stained-100-prop-note-stack",
    "name": "Crimson Stained $100 Prop Note Stack",
    "price": 65,
    "description": "Bespoke weathered and distressed prop money stack of 100 bills. Artistically aged to add realistic grit and suspense to heist, action, or crime scene filming.",
    "longDescription": "Handcrafted by professional scenic artists, our aged stacks bring cinematic depth to your production. Each stack is distressed using customized non-toxic treatments to simulate grime, water exposure, burns, or underworld wear. Includes 100 double-sided notes wrapped in a realistic currency band. Extremely convincing in close-up high-definition shots.",
    "category": "movie-prop-money",
    "sku": "CRIMSON-STAINED-100-PROP-NOTE-STACK",
    "seoTitle": "Crimson Stained $100 Prop Note Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Crimson Stained $100 Prop Note Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Movie-Prop-Money/Crimson-Stained-$100-Prop-Note-Stack",
    "gallery": [
      "images/products/Movie-Prop-Money/Crimson-Stained-$100-Prop-Note-Stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "water-logged-underworld-cash-stack",
      "charred-and-singed-50-prop-note-stack",
      "action-heist-weathered-50-stack"
    ],
    "features": [
      "Artisan-weathered for realistic grit",
      "Double-sided non-reflective premium print",
      "Includes 100 distressed bills and a custom bank strap",
      "Safe and non-toxic treatment processes",
      "Highly recommended for action, cartel, and heist movies"
    ],
    "specifications": {
      "Process": "Artisanal Hand-Weathering & Aging",
      "Count": "100 Replica Bills",
      "Strap": "Aged Kraft Bank Strap",
      "Inks": "Smudge-Resistant Organic Inks"
    }
  },
  {
    "id": "charred-and-singed-50-prop-note-stack",
    "name": "Charred & Singed $50 Prop Note Stack",
    "price": 65,
    "description": "Bespoke weathered and distressed prop money stack of 100 bills. Artistically aged to add realistic grit and suspense to heist, action, or crime scene filming.",
    "longDescription": "Handcrafted by professional scenic artists, our aged stacks bring cinematic depth to your production. Each stack is distressed using customized non-toxic treatments to simulate grime, water exposure, burns, or underworld wear. Includes 100 double-sided notes wrapped in a realistic currency band. Extremely convincing in close-up high-definition shots.",
    "category": "movie-prop-money",
    "sku": "CHARRED-AND-SINGED-50-PROP-NOTE-STACK",
    "seoTitle": "Charred & Singed $50 Prop Note Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Charred & Singed $50 Prop Note Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Movie-Prop Money/Charred-&-Singed-$50-Prop-Note-Stack",
    "gallery": [
      "images/products/Movie-Prop Money/Charred-&-Singed-$50-Prop-Note-Stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "water-logged-underworld-cash-stack",
      "crimson-stained-100-prop-note-stack",
      "action-heist-weathered-50-stack"
    ],
    "features": [
      "Artisan-weathered for realistic grit",
      "Double-sided non-reflective premium print",
      "Includes 100 distressed bills and a custom bank strap",
      "Safe and non-toxic treatment processes",
      "Highly recommended for action, cartel, and heist movies"
    ],
    "specifications": {
      "Process": "Artisanal Hand-Weathering & Aging",
      "Count": "100 Replica Bills",
      "Strap": "Aged Kraft Bank Strap",
      "Inks": "Smudge-Resistant Organic Inks"
    }
  },
  {
    "id": "water-logged-underworld-cash-stack",
    "name": "Water Logged Underworld Cash Stack",
    "price": 65,
    "description": "Bespoke weathered and distressed prop money stack of 100 bills. Artistically aged to add realistic grit and suspense to heist, action, or crime scene filming.",
    "longDescription": "Handcrafted by professional scenic artists, our aged stacks bring cinematic depth to your production. Each stack is distressed using customized non-toxic treatments to simulate grime, water exposure, burns, or underworld wear. Includes 100 double-sided notes wrapped in a realistic currency band. Extremely convincing in close-up high-definition shots.",
    "category": "movie-prop-money",
    "sku": "WATER-LOGGED-UNDERWORLD-CASH-STACK",
    "seoTitle": "Water Logged Underworld Cash Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Water Logged Underworld Cash Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Movie-Prop Money/Water-Logged-Underworld-Cash-Stack",
    "gallery": [
      "images/products/Movie-Prop Money/Water-Logged-Underworld-Cash-Stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "action-heist-weathered-100-stack",
      "charred-and-singed-50-prop-note-stack",
      "action-heist-weathered-50-stack"
    ],
    "features": [
      "Artisan-weathered for realistic grit",
      "Double-sided non-reflective premium print",
      "Includes 100 distressed bills and a custom bank strap",
      "Safe and non-toxic treatment processes",
      "Highly recommended for action, cartel, and heist movies"
    ],
    "specifications": {
      "Process": "Artisanal Hand-Weathering & Aging",
      "Count": "100 Replica Bills",
      "Strap": "Aged Kraft Bank Strap",
      "Inks": "Smudge-Resistant Organic Inks"
    }
  },
  {
    "id": "cop-show-evidence-sealed-cash-bag",
    "name": "Cop Show Evidence Sealed Cash Bag",
    "price": 35,
    "description": "A beautiful, high-quality prop money item designed to enrich photography, TV productions, and cinematic storytelling.",
    "longDescription": "Optimized for professional imaging, this prop currency combines rich color profiles with a non-reflective matte finish. Ideal for background atmosphere, commercial flats, and actor interaction. Fully compliant with guidelines and legal standards.",
    "category": "tv-production-props",
    "sku": "COP-SHOW-EVIDENCE-SEALED-CASH-BAG",
    "seoTitle": "Cop Show Evidence Sealed Cash Bag | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Cop Show Evidence Sealed Cash Bag for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/TV-Props/Cop-Show-Evidence-Sealed-Cash-Bag",
    "gallery": [
      "images/products/TV-Props/Cop-Show-Evidence-Sealed-Cash-Bag"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "broadcaster-quality-20-prop-stack",
      "drug-bust-luxury-briefcase-layout",
      "game-show-grand-prize-jumbo-cash-pile"
    ],
    "features": [
      "Non-glossy, camera-ready premium surface",
      "Clean margins and professional scale",
      "Provides perfect visual rhythm under lights",
      "Fully compliant with reserve bank standards"
    ],
    "specifications": {
      "Paper Type": "Premium Matte Paper",
      "Ink": "Non-Reflective Organic UV Ink"
    }
  },
  {
    "id": "broadcaster-quality-20-prop-stack",
    "name": "Broadcaster Quality $20 Prop Stack",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "tv-production-props",
    "sku": "BROADCASTER-QUALITY-20-PROP-STACK",
    "seoTitle": "Broadcaster Quality $20 Prop Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Broadcaster Quality $20 Prop Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack",
    "gallery": [
      "images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "game-show-grand-prize-jumbo-cash-pile",
      "drug-bust-luxury-briefcase-layout",
      "telenovela-wealth-cartel-brick"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "drug-bust-luxury-briefcase-layout",
    "name": "Drug Bust Luxury Briefcase Layout",
    "price": 195,
    "description": "Cinematic, fully loaded luxury briefcase layout of replica cash stacks. Ready-to-shoot prop layout designed for high-profile ransom and heist scenes.",
    "longDescription": "Perfect for directors looking for a turn-key solution, this professional briefcase is meticulously packed with stacked premium replica cash. Every stack is bank-wrapped and features a non-glare finish to guarantee professional results under studio strobes. It delivers the ultimate visual impact on screen.",
    "category": "tv-production-props",
    "sku": "DRUG-BUST-LUXURY-BRIEFCASE-LAYOUT",
    "seoTitle": "Drug Bust Luxury Briefcase Layout | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Drug Bust Luxury Briefcase Layout for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/TV-Props/Drug-Bust-Luxury-Briefcase-Layout",
    "gallery": [
      "images/products/TV-Props/Drug-Bust-Luxury-Briefcase-Layout"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "telenovela-wealth-cartel-brick",
      "game-show-grand-prize-jumbo-cash-pile",
      "broadcaster-quality-20-prop-stack"
    ],
    "features": [
      "Includes professional metal briefcase",
      "Packed with realistic bank-wrapped cash stacks",
      "Ready-to-shoot out of the box",
      "Double-sided non-reflective bills",
      "Compliant with federal rules and guidelines"
    ],
    "specifications": {
      "Briefcase Style": "Silver Brushed Aluminum / Black Leather",
      "Stack Count": "10 Stacks Included",
      "Replication": "RBA Compliant Double-Sided"
    }
  },
  {
    "id": "game-show-grand-prize-jumbo-cash-pile",
    "name": "Game show Grand Prize Jumbo Cash Pile",
    "price": 35,
    "description": "A beautiful, high-quality prop money item designed to enrich photography, TV productions, and cinematic storytelling.",
    "longDescription": "Optimized for professional imaging, this prop currency combines rich color profiles with a non-reflective matte finish. Ideal for background atmosphere, commercial flats, and actor interaction. Fully compliant with guidelines and legal standards.",
    "category": "tv-production-props",
    "sku": "GAME-SHOW-GRAND-PRIZE-JUMBO-CASH-PILE",
    "seoTitle": "Game show Grand Prize Jumbo Cash Pile | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Game show Grand Prize Jumbo Cash Pile for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/TV-Props/Game-show-Grand-Prize-Jumbo-Cash-Pile",
    "gallery": [
      "images/products/TV-Props/Game-show-Grand-Prize-Jumbo-Cash-Pile"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "drug-bust-luxury-briefcase-layout",
      "broadcaster-quality-20-prop-stack",
      "telenovela-wealth-cartel-brick"
    ],
    "features": [
      "Non-glossy, camera-ready premium surface",
      "Clean margins and professional scale",
      "Provides perfect visual rhythm under lights",
      "Fully compliant with reserve bank standards"
    ],
    "specifications": {
      "Paper Type": "Premium Matte Paper",
      "Ink": "Non-Reflective Organic UV Ink"
    }
  },
  {
    "id": "telenovela-wealth-cartel-brick",
    "name": "Telenovela Wealth Cartel Brick",
    "price": 35,
    "description": "A beautiful, high-quality prop money item designed to enrich photography, TV productions, and cinematic storytelling.",
    "longDescription": "Optimized for professional imaging, this prop currency combines rich color profiles with a non-reflective matte finish. Ideal for background atmosphere, commercial flats, and actor interaction. Fully compliant with guidelines and legal standards.",
    "category": "tv-production-props",
    "sku": "TELENOVELA-WEALTH-CARTEL-BRICK",
    "seoTitle": "Telenovela Wealth Cartel Brick | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Telenovela Wealth Cartel Brick for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/TV-Props/Telenovela-Wealth-Cartel-Brick",
    "gallery": [
      "images/products/TV-Props/Telenovela-Wealth-Cartel-Brick"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "game-show-grand-prize-jumbo-cash-pile",
      "drug-bust-luxury-briefcase-layout",
      "broadcaster-quality-20-prop-stack"
    ],
    "features": [
      "Non-glossy, camera-ready premium surface",
      "Clean margins and professional scale",
      "Provides perfect visual rhythm under lights",
      "Fully compliant with reserve bank standards"
    ],
    "specifications": {
      "Paper Type": "Premium Matte Paper",
      "Ink": "Non-Reflective Organic UV Ink"
    }
  },
  {
    "id": "studio-grade-high-contrast-100-prop-stack",
    "name": "Studio Grade High Contrast $100 Prop Stack",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "photography-props",
    "sku": "STUDIO-GRADE-HIGH-CONTRAST-100-PROP-STACK",
    "seoTitle": "Studio Grade High Contrast $100 Prop Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Studio Grade High Contrast $100 Prop Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack",
    "gallery": [
      "images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "aesthetic-flatlay-loose-prop-currency-fan",
      "hip-hop-video-multi-denom-rain-pack",
      "instagram-influencer-luxury-cash-roll"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "aesthetic-flatlay-loose-prop-currency-fan",
    "name": "Aesthetic Flatlay Loose Prop Currency Fan",
    "price": 35,
    "description": "A beautiful, high-quality prop money item designed to enrich photography, TV productions, and cinematic storytelling.",
    "longDescription": "Optimized for professional imaging, this prop currency combines rich color profiles with a non-reflective matte finish. Ideal for background atmosphere, commercial flats, and actor interaction. Fully compliant with guidelines and legal standards.",
    "category": "photography-props",
    "sku": "AESTHETIC-FLATLAY-LOOSE-PROP-CURRENCY-FAN",
    "seoTitle": "Aesthetic Flatlay Loose Prop Currency Fan | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Aesthetic Flatlay Loose Prop Currency Fan for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Photography-Props/Aesthetic-Flatlay-Loose-Prop-Currency-Fan",
    "gallery": [
      "images/products/Photography-Props/Aesthetic-Flatlay-Loose-Prop-Currency-Fan"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "hyper-matte-close-up-macro-prop-stack",
      "hip-hop-video-multi-denom-rain-pack",
      "instagram-influencer-luxury-cash-roll"
    ],
    "features": [
      "Non-glossy, camera-ready premium surface",
      "Clean margins and professional scale",
      "Provides perfect visual rhythm under lights",
      "Fully compliant with reserve bank standards"
    ],
    "specifications": {
      "Paper Type": "Premium Matte Paper",
      "Ink": "Non-Reflective Organic UV Ink"
    }
  },
  {
    "id": "instagram-influencer-luxury-cash-roll",
    "name": "Instagram Influencer Luxury Cash Roll",
    "price": 35,
    "description": "A beautiful, high-quality prop money item designed to enrich photography, TV productions, and cinematic storytelling.",
    "longDescription": "Optimized for professional imaging, this prop currency combines rich color profiles with a non-reflective matte finish. Ideal for background atmosphere, commercial flats, and actor interaction. Fully compliant with guidelines and legal standards.",
    "category": "photography-props",
    "sku": "INSTAGRAM-INFLUENCER-LUXURY-CASH-ROLL",
    "seoTitle": "Instagram Influencer Luxury Cash Roll | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Instagram Influencer Luxury Cash Roll for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Photography-Props/Instagram-Influencer-Luxury-Cash-Roll",
    "gallery": [
      "images/products/Photography-Props/Instagram-Influencer-Luxury-Cash-Roll"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "hip-hop-video-multi-denom-rain-pack",
      "aesthetic-flatlay-loose-prop-currency-fan",
      "studio-grade-high-contrast-100-prop-stack"
    ],
    "features": [
      "Non-glossy, camera-ready premium surface",
      "Clean margins and professional scale",
      "Provides perfect visual rhythm under lights",
      "Fully compliant with reserve bank standards"
    ],
    "specifications": {
      "Paper Type": "Premium Matte Paper",
      "Ink": "Non-Reflective Organic UV Ink"
    }
  },
  {
    "id": "hyper-matte-close-up-macro-prop-stack",
    "name": "Hyper Matte Close Up Macro Prop Stack",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "photography-props",
    "sku": "HYPER-MATTE-CLOSE-UP-MACRO-PROP-STACK",
    "seoTitle": "Hyper Matte Close Up Macro Prop Stack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Hyper Matte Close Up Macro Prop Stack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Photography-Props/Hyper-Matte-Close-Up-Macro-Prop-Stack",
    "gallery": [
      "images/products/Photography-Props/Hyper-Matte-Close-Up-Macro-Prop-Stack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "studio-grade-high-contrast-100-prop-stack",
      "aesthetic-flatlay-loose-prop-currency-fan",
      "instagram-influencer-luxury-cash-roll"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "hip-hop-video-multi-denom-rain-pack",
    "name": "Hip Hop Video Multi Denom Rain Pack",
    "price": 35,
    "description": "A beautiful, high-quality prop money item designed to enrich photography, TV productions, and cinematic storytelling.",
    "longDescription": "Optimized for professional imaging, this prop currency combines rich color profiles with a non-reflective matte finish. Ideal for background atmosphere, commercial flats, and actor interaction. Fully compliant with guidelines and legal standards.",
    "category": "photography-props",
    "sku": "HIP-HOP-VIDEO-MULTI-DENOM-RAIN-PACK",
    "seoTitle": "Hip Hop Video Multi Denom Rain Pack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Hip Hop Video Multi Denom Rain Pack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Photography-Props/Hip-Hop-Video-Multi-Denom-Rain-Pack",
    "gallery": [
      "images/products/Photography-Props/Hip-Hop-Video-Multi-Denom-Rain-Pack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "studio-grade-high-contrast-100-prop-stack",
      "hyper-matte-close-up-macro-prop-stack",
      "aesthetic-flatlay-loose-prop-currency-fan"
    ],
    "features": [
      "Non-glossy, camera-ready premium surface",
      "Clean margins and professional scale",
      "Provides perfect visual rhythm under lights",
      "Fully compliant with reserve bank standards"
    ],
    "specifications": {
      "Paper Type": "Premium Matte Paper",
      "Ink": "Non-Reflective Organic UV Ink"
    }
  },
  {
    "id": "bank-teller-training-starter-bundle",
    "name": "Bank Teller Training Starter Bundle",
    "price": 45,
    "description": "A loose, pre-arranged collection of replica banknotes. Perfectly styled and packaged for dynamic fanning, casting, or cash-counting camera shots.",
    "longDescription": "Make your production value stand out with our premium prop bundle. Designed specifically for active fanning and count-outs, each note features realistic color grading, crisp textures, and zero lighting reflections. It offers the authentic snapping noise of real cash when handled by production talents. Fully RBA-compliant and perfect for 4K/8K filming.",
    "category": "training-currency",
    "sku": "BANK-TELLER-TRAINING-STARTER-BUNDLE",
    "seoTitle": "Bank Teller Training Starter Bundle | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Bank Teller Training Starter Bundle for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Training-Currency/Bank-Teller-Training-Starter-Bundle",
    "gallery": [
      "images/products/Training-Currency/Bank-Teller-Training-Starter-Bundle"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "retail-cash-register-training-kit",
      "gaming-club-croupier-practice-currency",
      "classroom-finance-education-play-pack"
    ],
    "features": [
      "Pre-fanned and arranged for quick setup",
      "Matte finish for clear focus under professional lighting",
      "Excellent handle crispness and sound signature",
      "Complies fully with reserve bank specifications",
      "Perfect for close-ups, counting, and throwing shots"
    ],
    "specifications": {
      "Paper Type": "High-Density Crisp Bond",
      "Ink Type": "Reflective-Neutral Studio Ink",
      "Style": "Fanned & Strapped Bundle",
      "Dimensions": "Standard scale matching real currency"
    }
  },
  {
    "id": "security-transport-cash-handler-trainer",
    "name": "Security Transport Cash Handler Trainer",
    "price": 35,
    "description": "A beautiful, high-quality prop money item designed to enrich photography, TV productions, and cinematic storytelling.",
    "longDescription": "Optimized for professional imaging, this prop currency combines rich color profiles with a non-reflective matte finish. Ideal for background atmosphere, commercial flats, and actor interaction. Fully compliant with guidelines and legal standards.",
    "category": "training-currency",
    "sku": "SECURITY-TRANSPORT-CASH-HANDLER-TRAINER",
    "seoTitle": "Security Transport Cash Handler Trainer | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Security Transport Cash Handler Trainer for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Training-Currency/Security-Transport-Cash-Handler-Trainer",
    "gallery": [
      "images/products/Training-Currency/Security-Transport-Cash-Handler-Trainer"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "retail-cash-register-training-kit",
      "gaming-club-croupier-practice-currency",
      "bank-teller-training-starter-bundle"
    ],
    "features": [
      "Non-glossy, camera-ready premium surface",
      "Clean margins and professional scale",
      "Provides perfect visual rhythm under lights",
      "Fully compliant with reserve bank standards"
    ],
    "specifications": {
      "Paper Type": "Premium Matte Paper",
      "Ink": "Non-Reflective Organic UV Ink"
    }
  },
  {
    "id": "gaming-club-croupier-practice-currency",
    "name": "Gaming Club Croupier Practice Currency",
    "price": 35,
    "description": "A beautiful, high-quality prop money item designed to enrich photography, TV productions, and cinematic storytelling.",
    "longDescription": "Optimized for professional imaging, this prop currency combines rich color profiles with a non-reflective matte finish. Ideal for background atmosphere, commercial flats, and actor interaction. Fully compliant with guidelines and legal standards.",
    "category": "training-currency",
    "sku": "GAMING-CLUB-CROUPIER-PRACTICE-CURRENCY",
    "seoTitle": "Gaming Club Croupier Practice Currency | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Gaming Club Croupier Practice Currency for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Training-Currency/Gaming-Club-Croupier-Practice-Currency",
    "gallery": [
      "images/products/Training-Currency/Gaming-Club-Croupier-Practice-Currency"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "classroom-finance-education-play-pack",
      "bank-teller-training-starter-bundle",
      "security-transport-cash-handler-trainer"
    ],
    "features": [
      "Non-glossy, camera-ready premium surface",
      "Clean margins and professional scale",
      "Provides perfect visual rhythm under lights",
      "Fully compliant with reserve bank standards"
    ],
    "specifications": {
      "Paper Type": "Premium Matte Paper",
      "Ink": "Non-Reflective Organic UV Ink"
    }
  },
  {
    "id": "retail-cash-register-training-kit",
    "name": "Retail Cash Register Training Kit",
    "price": 45,
    "description": "Educational and training currency set. Perfect for classroom finance lessons, cashier/teller simulations, and cash management training.",
    "longDescription": "Designed for educational institutions and financial training, this kit offers replica bills that represent realistic dimensions and handling textures. Perfect for teaching cash handling, cash register operations, and security protocols in a safe, risk-free environment.",
    "category": "training-currency",
    "sku": "RETAIL-CASH-REGISTER-TRAINING-KIT",
    "seoTitle": "Retail Cash Register Training Kit | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Retail Cash Register Training Kit for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Training-Currency/Retail-Cash-Register-Training-Kit",
    "gallery": [
      "images/products/Training-Currency/Retail-Cash-Register-Training-Kit"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "gaming-club-croupier-practice-currency",
      "security-transport-cash-handler-trainer",
      "bank-teller-training-starter-bundle"
    ],
    "features": [
      "Highly realistic feel and standard scale",
      "Excellent for cash register and security simulations",
      "Durable, tear-resistant paper composition",
      "Clearly marked as play/training money for safety",
      "Recommended for hospitality, retail, and security courses"
    ],
    "specifications": {
      "Use Case": "Teller and Cashier Practice",
      "Denominations": "Full Australian Range",
      "Paper Weight": "90gsm Uncoated Bond"
    }
  },
  {
    "id": "classroom-finance-education-play-pack",
    "name": "Classroom Finance Education Play Pack",
    "price": 25,
    "description": "Educational and training currency set. Perfect for classroom finance lessons, cashier/teller simulations, and cash management training.",
    "longDescription": "Designed for educational institutions and financial training, this kit offers replica bills that represent realistic dimensions and handling textures. Perfect for teaching cash handling, cash register operations, and security protocols in a safe, risk-free environment.",
    "category": "training-currency",
    "sku": "CLASSROOM-FINANCE-EDUCATION-PLAY-PACK",
    "seoTitle": "Classroom Finance Education Play Pack | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Classroom Finance Education Play Pack for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Training-Currency/Classroom-Finance-Education-Play-Pack",
    "gallery": [
      "images/products/Training-Currency/Classroom-Finance-Education-Play-Pack"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "gaming-club-croupier-practice-currency",
      "security-transport-cash-handler-trainer",
      "bank-teller-training-starter-bundle"
    ],
    "features": [
      "Highly realistic feel and standard scale",
      "Excellent for cash register and security simulations",
      "Durable, tear-resistant paper composition",
      "Clearly marked as play/training money for safety",
      "Recommended for hospitality, retail, and security courses"
    ],
    "specifications": {
      "Use Case": "Teller and Cashier Practice",
      "Denominations": "Full Australian Range",
      "Paper Weight": "90gsm Uncoated Bond"
    }
  },
  {
    "id": "the-millionaire-heist-master-crate-(100-stacks)",
    "name": "The Millionaire Heist Master Crate (100 Stacks)",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "bundle-packs",
    "sku": "THE-MILLIONAIRE-HEIST-MASTER-CRATE-(100-STACKS)",
    "seoTitle": "The Millionaire Heist Master Crate (100 Stacks) | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity The Millionaire Heist Master Crate (100 Stacks) for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Bundle-Packs/The-Millionaire-Heist-Master-Crate-(100 Stacks)",
    "gallery": [
      "images/products/Bundle-Packs/The-Millionaire-Heist-Master-Crate-(100 Stacks)"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "production-supply-wholesaler-mega-box",
      "indie-film-crew-full-range-pack-(10-stacks)",
      "high-stakes-ransom-briefcase-pro-(20-stacks)"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "indie-film-crew-full-range-pack-(10-stacks)",
    "name": "Indie Film Crew Full Range Pack (10 Stacks)",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "bundle-packs",
    "sku": "INDIE-FILM-CREW-FULL-RANGE-PACK-(10-STACKS)",
    "seoTitle": "Indie Film Crew Full Range Pack (10 Stacks) | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Indie Film Crew Full Range Pack (10 Stacks) for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Bundle-Packs/Indie-Film-Crew-Full-Range-Pack-(10 Stacks)",
    "gallery": [
      "images/products/Bundle-Packs/Indie-Film-Crew-Full-Range-Pack-(10 Stacks)"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "high-stakes-ransom-briefcase-pro-(20-stacks)",
      "the-millionaire-heist-master-crate-(100-stacks)",
      "commercial-producer-bulk-reserve-(50-stacks)"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "high-stakes-ransom-briefcase-pro-(20-stacks)",
    "name": "High Stakes Ransom Briefcase Pro (20 Stacks)",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "bundle-packs",
    "sku": "HIGH-STAKES-RANSOM-BRIEFCASE-PRO-(20-STACKS)",
    "seoTitle": "High Stakes Ransom Briefcase Pro (20 Stacks) | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity High Stakes Ransom Briefcase Pro (20 Stacks) for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Bundle-Packs/High-Stakes-Ransom-Briefcase-Pro-(20 Stacks)",
    "gallery": [
      "images/products/Bundle-Packs/High-Stakes-Ransom-Briefcase-Pro-(20 Stacks)"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "the-millionaire-heist-master-crate-(100-stacks)",
      "indie-film-crew-full-range-pack-(10-stacks)",
      "commercial-producer-bulk-reserve-(50-stacks)"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "commercial-producer-bulk-reserve-(50-stacks)",
    "name": "Commercial Producer Bulk Reserve (50 Stacks)",
    "price": 55,
    "description": "A bank-wrapped stack of 100 double-sided replica prop banknotes. Held together by a realistic currency band for high-stakes counting scenes.",
    "longDescription": "Our standard prop cash stacks provide the ultimate visual realism on screen. Each stack contains 100 double-sided replica bills printed with non-reflective matte inks. The crisp texture, accurate weight representation, and professional bank wrapping ensure authentic handling by actors. Formulated for high-contrast digital sensors.",
    "category": "bundle-packs",
    "sku": "COMMERCIAL-PRODUCER-BULK-RESERVE-(50-STACKS)",
    "seoTitle": "Commercial Producer Bulk Reserve (50 Stacks) | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Commercial Producer Bulk Reserve (50 Stacks) for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Bundle-Packs/Commercial-Producer-Bulk-Reserve-(50 Stacks)",
    "gallery": [
      "images/products/Bundle-Packs/Commercial-Producer-Bulk-Reserve-(50 Stacks)"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "the-millionaire-heist-master-crate-(100-stacks)",
      "indie-film-crew-full-range-pack-(10-stacks)",
      "high-stakes-ransom-briefcase-pro-(20-stacks)"
    ],
    "features": [
      "Includes 100 double-sided replica banknotes",
      "Secure bank-style paper wrapper",
      "Non-glare matte finish optimized for film sets",
      "Realistic weight and crisp snap",
      "Fully compliant with reserve bank specimen regulations"
    ],
    "specifications": {
      "Paper Type": "Premium Heavyweight Matte Paper",
      "Note Count": "100 Notes per Stack",
      "Ink Type": "Reflective-Neutral Organic Inks",
      "Strap": "Standard Paper Currency Strap"
    }
  },
  {
    "id": "production-supply-wholesaler-mega-box",
    "name": "Production Supply Wholesaler Mega Box",
    "price": 345,
    "description": "Ultimate bulk prop money reserve for large productions. Packed with multiple premium currency stacks, perfect for bank vault and high-stakes heist scenes.",
    "longDescription": "The ultimate collection for professional set designers, this bulk pack supplies ample currency to populate background safes, duffel bags, or bank vaults. Features highly realistic, double-sided color-balanced bills bound with bank wrappers. All notes possess a modern non-gloss texture to eliminate studio lights bounce.",
    "category": "bundle-packs",
    "sku": "PRODUCTION-SUPPLY-WHOLESALER-MEGA-BOX",
    "seoTitle": "Production Supply Wholesaler Mega Box | Realistic Prop Money Replicas",
    "metaDescription": "High-fidelity Production Supply Wholesaler Mega Box for film, theatre, television, and cash-handling training. 100% RBA compliant specimen.",
    "image": "images/products/Bundle-Packs/Production-Supply-Wholesaler-Mega-Box",
    "gallery": [
      "images/products/Bundle-Packs/Production-Supply-Wholesaler-Mega-Box"
    ],
    "stockStatus": "in-stock",
    "relatedProducts": [
      "commercial-producer-bulk-reserve-(50-stacks)",
      "the-millionaire-heist-master-crate-(100-stacks)",
      "high-stakes-ransom-briefcase-pro-(20-stacks)"
    ],
    "features": [
      "Cinematic volume and scale",
      "Multiple wrapped stacks for bulk background dressing",
      "Non-glare matte finish perfect for wide or tracking shots",
      "Realistic weight and cardboard shipping box",
      "100% legal specimen prop currency"
    ],
    "specifications": {
      "Packaging": "Heavy-Duty Production Crate/Box",
      "Contents": "Cinematic Stacks of Diverse Denominations",
      "Scale": "1:1 Standard Dimension Replica"
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
{
    id: 'prop-money-legality-australia',
    title: 'The Legality of Prop Money in Australia: What Filmmakers Need to Know',
    excerpt: 'Using fake currency for film and TV in Australia is governed by strict laws. Discover how to stay 100% compliant with the Reserve Bank of Australia.',
    content: `Filming in Australia with replica currency is highly regulated. The Reserve Bank of Australia (RBA) sets strict rules to prevent counterfeit confusion while still allowing creative productions to thrive. 

<br><br>
<h3>Key RBA Guidelines</h3>
<ul>
<li>Must be significantly larger or smaller than genuine notes</li>
<li>Must clearly display words like "SPECIMEN" or "PROP ONLY"</li>
<li>Must be single-sided if true-to-size</li>
</ul>
<br>
Our products at <a href="/" class="text-gold underline hover:text-black">Australian Prop Money</a> are meticulously designed to ensure they are 100% RBA-compliant. 

<br><br>
<div class="bg-gray-50 p-4 border rounded my-4">
  <h4 class="font-bold mb-2">Need Compliant Props for your Next Shoot?</h4>
  <p class="mb-3">Explore our RBA-compliant <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a>.</p>
  <a href="/shop" class="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase">Shop Now</a>
</div>

<h3>Frequently Asked Questions</h3>
<strong>Can I use these notes for close-up shots?</strong>
<p>Yes! Our <a href="/?category=photography-props" class="text-gold underline">Photography Props</a> are designed specifically for high-detail close-ups without violating RBA guidelines.</p>
`,
    date: 'July 5, 2026',
    category: 'Legality',
    readTime: '5 min read',
    image: 'images/blog/1'
  },
  {
    id: 'lighting-prop-money-camera',
    title: 'How to Light and Shoot Prop Cash to Look 100% Realistic on Screen',
    excerpt: 'Are your prop bills looking fake on camera? Our lead set designer shares professional lighting and camera angle techniques for high-end results.',
    content: `Lighting paper props is a subtle art. One of the biggest giveaways of low-quality prop money is the "plastic shine" or paper glare caused by high-powered studio lights. Genuine bills have a very specific matte, fibrous look. When shooting scenes involving prop stacks, avoid direct, hard key-lights that create reflections. Instead, use soft diffusers, indirect bounce boards, or backlighting to accentuate the paper texture. Our prop bills are manufactured with heavy matte non-glare ink which absorbs light rather than bouncing it back. Another trick is to angle the stacks slightly away from the lens and use a shallow depth of field (low f-stop like f/2.8 or f/1.8) to keep focus sharp on the character handling the money while keeping the background stacks beautifully soft, adding instant cinematic value to your frame. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Need Bulk Props for a Feature Film?</h4>
    <p class="text-sm text-gray-600 mb-4">We offer heavy discounts on <a href="/wholesale" class="text-gold underline hover:text-black transition-colors">Wholesale Orders</a> for major productions.</p>
    <a href="/wholesale" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">Request a Quote</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'June 28, 2026',
    category: 'Production Tips',
    readTime: '4 min read',
    image: 'images/blog/2'
  },
  {
    id: 'aged-money-tutorial',
    title: 'Aged vs. Crisp: Choosing the Right Prop Aesthetic for Your Character',
    excerpt: 'The condition of a character’s money tells a rich story. Learn how to align your prop money selection with your film’s narrative arc.',
    content: `Every prop on set should contribute to character development. If your scene involves a wealthy executive opening a bank vault, crisp, perfectly banded, fresh-looking New Series stacks are appropriate. However, if your scene involves a street-level transaction, a ransom drop-off, or a cash stash hidden under floorboards, brand-new crisp notes will look artificial and ruin the suspension of disbelief. Heavily weathered, creased, and custom-stained prop bills tell the viewer that the cash has a history, that it has passed through dirty hands, and that it represents a gritty, high-stakes situation. At Australian Prop Money, we offer professional hand-aged options that use real pigment washes and manual distressing to give directors that tactile, lived-in cinematic reality. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Perfect for Music Videos</h4>
    <p class="text-sm text-gray-600 mb-4">Get the perfect money rain effect with our <a href="/?category=bundle-packs" class="text-gold underline hover:text-black transition-colors">Bundle Packs</a>.</p>
    <a href="/shop" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">View Bundles</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'June 15, 2026',
    category: 'Set Design',
    readTime: '6 min read',
    image: 'images/blog/3'
  },
  {
    id: 'crime-drama-props',
    title: 'Behind the Scenes: Sourcing Authentic Props for Australian Crime Dramas',
    excerpt: 'From police records to stacks of cash, see how Aussie crime drama art directors build tension and realism on set.',
    content: `Aussie crime dramas have a unique, gritty look. Building realism requires more than just throwing items together. Props like cash stacks are central to heist plots, and they must appear completely natural. Art directors work closely with our local Sydney warehouse to procure custom-worn cash blocks, sealed cop evidence bags, and drug-deal briefcases. Using local prop manufacturers ensures all shipping is secure, bypassing the risk of customs intercepts that occur with cheap overseas replicas. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Upgrade Your Production Value</h4>
    <p class="text-sm text-gray-600 mb-4">Discover our <a href="/?category=movie-prop-money" class="text-gold underline hover:text-black transition-colors">Cinematic Prop Money Stacks</a> designed specifically for 4K cameras.</p>
    <a href="/shop" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">Shop The Collection</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'June 02, 2026',
    category: 'Industry Insights',
    readTime: '5 min read',
    image: 'images/blog/4'
  },
  {
    id: 'evolution-of-prop-money',
    title: 'The Evolution of Currency Props in Modern Cinema History',
    excerpt: 'A history of how Hollywood and Australian studios transitioned from mock paper drawings to high-fidelity compliant camera-ready currency props.',
    content: `In the early days of cinema, background bills were often crude photocopies or simplified illustrations. As camera resolutions scaled to high-definition digital formats, background details could no longer be hidden with blur. Studios had to pivot toward color-calibrated, texture-rich replica props. In Australia, the introduction of unique polymer banknotes in 1992 created a unique design challenge. Standard papers would look fake next to the translucent polymer, forcing local prop designers to develop specialty calendered matte bonds that replicate polymer colors under intense studio lights while ensuring legal compliance. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Need Bulk Props for a Feature Film?</h4>
    <p class="text-sm text-gray-600 mb-4">We offer heavy discounts on <a href="/wholesale" class="text-gold underline hover:text-black transition-colors">Wholesale Orders</a> for major productions.</p>
    <a href="/wholesale" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">Request a Quote</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'May 20, 2026',
    category: 'Cinema History',
    readTime: '7 min read',
    image: 'images/blog/5'
  },
  {
    id: 'theatre-stage-props-cash',
    title: 'How Theatre Prop Masters Manage Cash on Stage Under Spotlight',
    excerpt: 'Live theatre demands high tactile durability and zero light reflection. We look at the prop requirements of modern stage performance.',
    content: `Live theatre represents a high-stress arena for props. Unlike films, there are no retakes if a bill is dropped or tear occurs. Actors need props that behave naturally. Theatre prop directors favor pre-softened, cotton-bond cash props that offer high tactile compliance and distinct "crisp" sounds when counted under live acoustics. The non-reflective surface prevents blinding high-beam spot glare from disrupting front-row seating. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Perfect for Music Videos</h4>
    <p class="text-sm text-gray-600 mb-4">Get the perfect money rain effect with our <a href="/?category=bundle-packs" class="text-gold underline hover:text-black transition-colors">Bundle Packs</a>.</p>
    <a href="/shop" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">View Bundles</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'May 08, 2026',
    category: 'Stagecraft',
    readTime: '4 min read',
    image: 'images/blog/6'
  },
  {
    id: 'safe-staging-heist-scenes',
    title: 'Best Practices for Staging High-Volume Cash Heist Scenes Safely',
    excerpt: 'Tips on managing massive piles of replica cash on public streets during film shoots to avoid public alarm and stay compliant.',
    content: `Staging bank vaults or ransom deliveries on open streets can lead to major public panic and police responses. First, clear all necessary permits with your municipal council. When filming open cash scenes, keep all currency props safely contained in marked boxes until the camera is active. Always work with licensed prop managers who carry compliance checklists demonstrating that all materials strictly carry RBA spec disclaimers. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Upgrade Your Production Value</h4>
    <p class="text-sm text-gray-600 mb-4">Discover our <a href="/?category=movie-prop-money" class="text-gold underline hover:text-black transition-colors">Cinematic Prop Money Stacks</a> designed specifically for 4K cameras.</p>
    <a href="/shop" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">Shop The Collection</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'April 25, 2026',
    category: 'Production Tips',
    readTime: '8 min read',
    image: 'images/blog/7'
  },
  {
    id: 'digital-sensors-vs-props',
    title: 'Why High-Resolution Digital Cameras Demand Better Film Props',
    excerpt: 'How 4K and 8K digital camera sensors expose poor quality set props, and why professional printing is required to hold cinematic immersion.',
    content: `Digital cameras like RED, ARRI, and Sony Venice capture micro-details at levels never seen before. Standard printed fakes with grainy, low-DPI dots will instantly pixelate and break immersion. Modern prop makers utilize micro-plate lithography presses that print at 1200 DPI on specialized cotton art paper, ensuring that the currency retains pristine lines even in extreme macro lens configurations. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Need Bulk Props for a Feature Film?</h4>
    <p class="text-sm text-gray-600 mb-4">We offer heavy discounts on <a href="/wholesale" class="text-gold underline hover:text-black transition-colors">Wholesale Orders</a> for major productions.</p>
    <a href="/wholesale" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">Request a Quote</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'April 11, 2026',
    category: 'Technical Guides',
    readTime: '5 min read',
    image: 'images/blog/8'
  },
  {
    id: 'music-video-prop-tips',
    title: 'Top 5 Music Video Prop Disasters (And How to Avoid Them)',
    excerpt: 'From reflections to lost notes, here are five critical mistakes hip-hop and commercial video directors make with cash props.',
    content: `Music videos are fast-paced and high-energy. However, many indie directors buy low-quality fakes from random sellers, only to discover they cause severe camera glare or reflect blue and purple hues under RGB lighting. Always use specialized non-glare prop cash, budget for loose floating paper options if doing cash rain shots, and ensure you have secure lockboxes on set to prevent real-world theft of your premium prop bundles. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Perfect for Music Videos</h4>
    <p class="text-sm text-gray-600 mb-4">Get the perfect money rain effect with our <a href="/?category=bundle-packs" class="text-gold underline hover:text-black transition-colors">Bundle Packs</a>.</p>
    <a href="/shop" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">View Bundles</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'March 29, 2026',
    category: 'Creative Direction',
    readTime: '4 min read',
    image: 'images/blog/9'
  },
  {
    id: 'prop-weathering-guide',
    title: 'A Prop Master Guide to Weathering and Distressing Paper Currency',
    excerpt: 'An inside look at the techniques prop stylists use to turn candy printed sheets into gritty, street-worn banknotes.',
    content: `Weathering cash is a complex art form. You can’t just crumple bills. To achieve street-grade wear, stylists soak the bills in custom diluted walnut or black tea baths to stain the white fibers. Once dried, sandpaper is applied to corners to split the paper fibers, simulating heavy circulation. For extreme scenes, soot dust or water warping is applied. At Australian Prop Money, our in-house stylists do all this by hand to save productions hours of setup. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Upgrade Your Production Value</h4>
    <p class="text-sm text-gray-600 mb-4">Discover our <a href="/?category=movie-prop-money" class="text-gold underline hover:text-black transition-colors">Cinematic Prop Money Stacks</a> designed specifically for 4K cameras.</p>
    <a href="/shop" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">Shop The Collection</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'March 14, 2026',
    category: 'DIY Props',
    readTime: '6 min read',
    image: 'images/blog/10'
  },
  {
    id: 'creative-editorial-photography',
    title: 'Creative Photography: Elevating Editorial Shots with Props',
    excerpt: 'How to use replica notes to build high-end visual concepts in fashion, sneaker, and luxury lifestyle photography.',
    content: `Fashion and product photography are all about story and status. Using replica money as flatlay backgrounds can add a high-end luxury touch. To shoot cash rolls or stacks cleanly under hard camera strobe flashes, choose specialized high-contrast extra-matte papers. This ensures the design pop-out beautifully without throwing reflections back into your lens. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Need Bulk Props for a Feature Film?</h4>
    <p class="text-sm text-gray-600 mb-4">We offer heavy discounts on <a href="/wholesale" class="text-gold underline hover:text-black transition-colors">Wholesale Orders</a> for major productions.</p>
    <a href="/wholesale" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">Request a Quote</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'February 28, 2026',
    category: 'Photography Tips',
    readTime: '5 min read',
    image: 'images/blog/11'
  },
  {
    id: 'rba-compliance-details',
    title: 'Understanding RBA Compliance: The Fine Line of Prop Replicas',
    excerpt: 'A deep dive into the legal requirements set by the Reserve Bank of Australia to ensure your production props are fully compliant and safe.',
    content: `The Crimes (Currency) Act 1981 sets severe penalties for reproducing currency. To protect your film crew and avoid legal issues, your prop money must be easily distinguishable from genuine money. It must be significantly larger or smaller (at least 25% difference), printed on one side, or contain prominent, non-removable specimen banners. Standard paper bond must be used (never polymer), and all bills must carry "PROP MONEY ONLY" watermarks. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Perfect for Music Videos</h4>
    <p class="text-sm text-gray-600 mb-4">Get the perfect money rain effect with our <a href="/?category=bundle-packs" class="text-gold underline hover:text-black transition-colors">Bundle Packs</a>.</p>
    <a href="/shop" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">View Bundles</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'February 10, 2026',
    category: 'Legality',
    readTime: '6 min read',
    image: 'images/blog/12'
  },
  {
    id: 'training-currency-benefits',
    title: 'How Training Currency Improves Teller and Cash-Handler Training Speeds',
    excerpt: 'Why real banks and retail outlets are swapping to professional, slip-coated training money to reduce teller cash-handling mistakes.',
    content: `Using real cash to train employees carries significant theft risks and is legally impractical. In contrast, training currency allows cashiers, casino croupiers, and armored transport crews to master cash sorting, counting, and register balancing in a safe environment. Slip-coated training bills mimic the touch and weight of actual polymer banknotes, speeding up muscle memory development. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Upgrade Your Production Value</h4>
    <p class="text-sm text-gray-600 mb-4">Discover our <a href="/?category=movie-prop-money" class="text-gold underline hover:text-black transition-colors">Cinematic Prop Money Stacks</a> designed specifically for 4K cameras.</p>
    <a href="/shop" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">Shop The Collection</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'January 25, 2026',
    category: 'Business Training',
    readTime: '4 min read',
    image: 'images/blog/13'
  },
  {
    id: 'briefcase-requisition-design',
    title: 'Briefcase Requisition Layouts: Designing the Perfect Ransom Drop Prop',
    excerpt: 'The design secrets behind locking cash briefcases. How to calculate stack volume and pack foam for spectacular opening shots.',
    content: `A classic movie shot: the villain slides open a heavy metal briefcase, revealing rows of green bills. To get this shot right, prop master use specialized flat foam inserts. A standard brief case holds exactly 20 flat-nested stacks of AUD notes ($200,000 face value). Pre-cut velvet foam prevents stacks from tumbling when the case is held upright by characters. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Need Bulk Props for a Feature Film?</h4>
    <p class="text-sm text-gray-600 mb-4">We offer heavy discounts on <a href="/wholesale" class="text-gold underline hover:text-black transition-colors">Wholesale Orders</a> for major productions.</p>
    <a href="/wholesale" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">Request a Quote</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
    date: 'January 11, 2026',
    category: 'Set Design',
    readTime: '5 min read',
    image: 'images/blog/14'
  },
  {
    id: 'budgeting-wholesale-prop-packs',
    title: 'Budgeting for Indie Films: When to Buy Bulk Wholesale Prop Packs',
    excerpt: 'Indie filmmakers must optimize every dollar. We look at when buying bulk prop packs makes more financial sense than rental prop rooms.',
    content: `Indie films have tight budgets. When filming scenes with bank vaults, ransom briefcases, or street heists, renting cash from prop rooms can be costly due to daily rates and security bonds. Buying bulk wholesale crates or indie pack bundles is often much more economical. Our wholesale flight cases are permanent assets that can be repurposed across multiple film scenes or sold to other crews post-production. <br><br> <div class="bg-gray-50 p-6 border border-gray-200 rounded-xl my-6">
    <h4 class="font-serif font-bold text-lg mb-2">Perfect for Music Videos</h4>
    <p class="text-sm text-gray-600 mb-4">Get the perfect money rain effect with our <a href="/?category=bundle-packs" class="text-gold underline hover:text-black transition-colors">Bundle Packs</a>.</p>
    <a href="/shop" class="inline-block bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors">View Bundles</a>
  </div> 
<h3 class="font-serif font-bold text-xl mt-8 mb-4 border-b pb-2">Frequently Asked Questions</h3>
<div class="space-y-4">
  <div>
    <strong class="block text-black mb-1">Are these notes legal to use in Australia?</strong>
    <p class="text-gray-600 text-sm">Yes, all our <a href="/?category=australian-notes" class="text-gold underline">Australian Notes</a> strictly follow RBA guidelines.</p>
  </div>
  <div>
    <strong class="block text-black mb-1">Do you ship Australia-wide?</strong>
    <p class="text-gray-600 text-sm">Yes! We offer fast dispatch and secure shipping across all states.</p>
  </div>
</div>
`,
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
