'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronLeft, Star, Heart, Check, ShoppingCart, 
  Plus, Minus, ShieldCheck, HelpCircle, ArrowRight, MessageSquare 
} from 'lucide-react';
import { PRODUCTS, Product, getCategoryLabel } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import { getImageUrl } from '@/lib/imagekit';

interface UserReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  role: string;
  verified: boolean;
}

export default function ProductDetailClient({ productId }: { productId: string }) {
  const router = useRouter();
  const { addToCart, toggleWishlist, isInWishlist, addToRecentlyViewed, recentlyViewed } = useCart();
  
  const product = PRODUCTS.find((p) => p.id === productId);

  // Options State
  const [agingOption, setAgingOption] = useState('Standard Clean');
  const [bandOption, setBandOption] = useState('Standard Paper Band');
  const [serialOption, setSerialOption] = useState('Standard Sequential');
  const [serialText, setSerialText] = useState('');
  
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'compliance'>('specs');

  // Reviews State
  const [reviews, setReviews] = useState<UserReview[]>([]);
  const [newReviewForm, setNewReviewForm] = useState({
    name: '',
    comment: '',
    rating: 5,
    role: 'Production Coordinator'
  });
  const [reviewSubmitSuccess, setReviewSubmitSuccess] = useState(false);

  // Core product effect
  useEffect(() => {
    if (product) {
      // Add to recently viewed list
      addToRecentlyViewed(product);
      
      // Load and set reviews asynchronously to prevent synchronous render cascade
      const savedReviews = localStorage.getItem(`amp_reviews_${product.id}`);
      const defaultReviews: UserReview[] = [
        {
          id: 'rev-1',
          name: 'Sarah G.',
          rating: 5,
          comment: `Absolutely flawless under 4K lenses. We ordered a clean stack and a hand-aged stack. The hand-aged notes added immediate realism to our bank heist close-up shot. Will definitely reorder!`,
          date: '04/06/2026',
          role: 'Art Director',
          verified: true
        },
        {
          id: 'rev-2',
          name: 'Michael T.',
          rating: 5,
          comment: `RBA disclaimer is integrated seamlessly so it looks fully professional but remains completely legal. The paper texture makes a perfect crisp noise during counting scenes. Highly recommended for any serious Aussie production.`,
          date: '28/05/2026',
          role: 'Prop Master',
          verified: true
        }
      ];

      const timer = setTimeout(() => {
        if (savedReviews) {
          try {
            setReviews([...JSON.parse(savedReviews), ...defaultReviews]);
          } catch (e) {
            setReviews(defaultReviews);
          }
        } else {
          setReviews(defaultReviews);
        }
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [product, productId, addToRecentlyViewed]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold">Replica Product Not Found</h1>
        <p className="text-gray-500">The requested film prop is not available in our RBA-compliant registry.</p>
        <Link href="/shop" className="inline-block bg-black text-white px-6 py-3 uppercase tracking-widest font-bold text-xs hover:bg-gold hover:text-black transition-colors">
          Return to Inventory
        </Link>
      </div>
    );
  }

  // Dynamic Image Gallery setup
  const galleryImages = product.gallery && product.gallery.length > 0 ? [product.image, ...product.gallery] : [product.image];

  // Price Calculation depending on selections
  const calculatePricing = () => {
    let base = product.price;
    if (agingOption === 'Light Circulation') base += 5.00;
    if (agingOption === 'Heavy Distress') base += 10.00;
    if (agingOption === 'Burned/Damaged') base += 15.00;
    if (serialOption === 'Custom Specified') base += 15.00;
    return base;
  };

  const currentPrice = calculatePricing();
  const totalPrice = currentPrice * quantity;

  // Option lists
  const agingOptions = [
    { label: 'Standard Clean', desc: 'Fresh from print, crisp and flat', cost: 0 },
    { label: 'Light Circulation', desc: 'Mild creases, lightly handled look', cost: 5.00 },
    { label: 'Heavy Distress', desc: 'Simulated dirt, creased, frayed corners', cost: 10.00 },
    { label: 'Burned/Damaged', desc: 'Heist-grade soot, singed margins, heavy wear', cost: 15.00 }
  ];

  const bandOptions = [
    { label: 'Standard Paper Band', desc: 'Generic white studio band wrapper' },
    { label: 'Reserve Bank Style', desc: 'Mimics real bank teller secure straps' },
    { label: 'Loose Notes', desc: 'Unbanded individual notes for distribution' }
  ];

  const serialOptions = [
    { label: 'Standard Sequential', desc: 'Included standard sequential codes' },
    { label: 'Custom Specified', desc: 'Provide custom letters & numbers', cost: 15.00 }
  ];

  // Handlers
  const handleAddToCart = () => {
    addToCart(product, quantity, {
      aging: agingOption,
      band: bandOption,
      customSerial: serialOption,
      serialText: serialOption === 'Custom Specified' ? serialText : undefined
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product.id);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewForm.name.trim() || !newReviewForm.comment.trim()) return;

    const newReview: UserReview = {
      id: `rev-user-${Date.now()}`,
      name: newReviewForm.name,
      rating: newReviewForm.rating,
      comment: newReviewForm.comment,
      date: new Date().toLocaleDateString('en-AU'),
      role: newReviewForm.role || 'Verified Customer',
      verified: true
    };

    const updatedLocalStorageReviews = [
      newReview,
      ...reviews.filter(r => r.id.startsWith('rev-user-'))
    ];
    localStorage.setItem(`amp_reviews_${product.id}`, JSON.stringify(updatedLocalStorageReviews));
    
    setReviews([newReview, ...reviews]);
    setNewReviewForm({
      name: '',
      comment: '',
      rating: 5,
      role: 'Production Coordinator'
    });
    setReviewSubmitSuccess(true);
    setTimeout(() => setReviewSubmitSuccess(false), 4000);
  };

  // Find Related Products (same category, excluding current product)
  const relatedProducts = PRODUCTS
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '5.0';

  const isFavorited = isInWishlist(product.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 animate-fade-in" id="product-detail-container">
      
      {/* Breadcrumb / Back button */}
      <div className="flex items-center justify-between">
        <Link href="/shop" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-black transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Shop Inventory
        </Link>
        <span className="text-[10px] font-mono uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded border border-gold/15">
          RBA Rule Compliant Prop
        </span>
      </div>

      {/* Main Grid: Left Gallery, Right Options */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Image Gallery (Grid-Span 6) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Main Visual Display */}
          <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden border border-gray-100 rounded-3xl group">
            <Image 
              src={getImageUrl(galleryImages[activeImageIdx])} 
              alt={`${product.name} View`} 
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              priority
              referrerPolicy="no-referrer"
              className="object-cover"
              id="main-product-gallery-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold font-mono block">Reserve Bank of Australia Compliance</span>
              <p className="text-[10px] text-gray-300 italic leading-relaxed mt-1">
                Conforms strictly to federal legal limits. Printed double-sided on non-glare fine matte paper. Includes required &quot;NOT LEGAL TENDER&quot; watermarks.
              </p>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-4 gap-3" id="gallery-thumbnails">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIdx(idx)}
                className={`relative aspect-[4/3] bg-gray-50 border overflow-hidden rounded-xl transition-all duration-300 ${
                  activeImageIdx === idx 
                    ? 'border-gold ring-1 ring-gold shadow-xs' 
                    : 'border-gray-100 hover:border-gray-400'
                }`}
                id={`thumb-btn-${idx}`}
              >
                <Image 
                  src={getImageUrl(img)} 
                  alt="Prop view thumbnail" 
                  fill
                  sizes="150px"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

        </div>

        {/* Right: Product Selections & Customizations (Grid-Span 6) */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Headline & Pricing info */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block font-mono">
              {getCategoryLabel(product.category)}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-black tracking-tight leading-tight">
              {product.name}
            </h1>
            
            {/* Rating Stars Summary */}
            <div className="flex items-center gap-1.5 pt-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs font-semibold text-black">{averageRating}</span>
              <span className="text-xs text-gray-400 font-mono">({reviews.length} Production Reviews)</span>
            </div>

            {/* Pricing Section */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-3xl font-serif font-bold text-black font-mono">
                ${currentPrice.toFixed(2)}
              </span>
              <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">AUD (Exempt from GST)</span>
            </div>
            
            <p className="text-xs text-gray-500 leading-relaxed max-w-xl">
              {product.longDescription}
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* DYNAMIC VARIATION FORM */}
          <div className="space-y-6">
            
            {/* VARIATION 1: Aging Treatment options */}
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider font-mono block">
                  1. Distressing / Circulation level
                </label>
                <span className="text-[10px] text-gray-400 font-mono">Selected: {agingOption}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {agingOptions.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setAgingOption(opt.label)}
                    className={`p-3 text-left border rounded-xl transition-all duration-300 ${
                      agingOption === opt.label 
                        ? 'border-black bg-black/5 ring-0.5 ring-black' 
                        : 'border-gray-100 bg-white hover:border-gray-400'
                    }`}
                    id={`variation-aging-${opt.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex justify-between font-bold text-xs text-black">
                      <span>{opt.label}</span>
                      {opt.cost > 0 && <span className="text-gold-dark font-mono">+${opt.cost.toFixed(2)}</span>}
                    </div>
                    <span className="text-[10px] text-gray-400 block mt-0.5 leading-tight">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* VARIATION 2: Currency Band style options */}
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider font-mono block">
                  2. Packaging / Currency Band style
                </label>
                <span className="text-[10px] text-gray-400 font-mono">Selected: {bandOption}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {bandOptions.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setBandOption(opt.label)}
                    className={`p-2.5 text-center border rounded-xl transition-all duration-300 ${
                      bandOption === opt.label 
                        ? 'border-black bg-black/5 ring-0.5 ring-black' 
                        : 'border-gray-100 bg-white hover:border-gray-400'
                    }`}
                    id={`variation-band-${opt.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="font-bold text-xs text-black block leading-tight">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* VARIATION 3: Custom Serial Numbers */}
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider font-mono block">
                  3. Serialization style
                </label>
                <span className="text-[10px] text-gray-400 font-mono">Selected: {serialOption}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {serialOptions.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setSerialOption(opt.label)}
                    className={`p-3 text-left border rounded-xl transition-all duration-300 ${
                      serialOption === opt.label 
                        ? 'border-black bg-black/5 ring-0.5 ring-black' 
                        : 'border-gray-100 bg-white hover:border-gray-400'
                    }`}
                    id={`variation-serial-${opt.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex justify-between font-bold text-xs text-black">
                      <span>{opt.label}</span>
                      {opt.cost !== undefined && opt.cost > 0 && <span className="text-gold-dark font-mono">+${opt.cost.toFixed(2)}</span>}
                    </div>
                    <span className="text-[10px] text-gray-400 block mt-0.5 leading-tight">{opt.desc}</span>
                  </button>
                ))}
              </div>
              
              {/* Optional custom specified serial textbox */}
              {serialOption === 'Custom Specified' && (
                <div className="space-y-1.5 animate-scale-in">
                  <label className="text-[10px] uppercase font-bold text-gray-400 block font-mono">Enter Custom Letters/Numbers (Format: AA 12345678)</label>
                  <input
                    type="text"
                    maxLength={15}
                    value={serialText}
                    onChange={(e) => setSerialText(e.target.value)}
                    placeholder="e.g. JB 77001122"
                    className="w-full bg-white border border-gray-200 p-2.5 text-xs rounded-xl focus:outline-gold focus:ring-0 uppercase text-black"
                    id="input-variation-serial-text"
                  />
                  <p className="text-[9px] text-gray-400">Specify any custom sequence for specific high-definition camera pans.</p>
                </div>
              )}
            </div>

          </div>

          <hr className="border-gray-100" />

          {/* QUANTITY SELECTOR, ADD TO BAG & WISHLIST ROW */}
          <div className="space-y-4">
            
            {/* Live calculated summary */}
            <div className="flex items-center justify-between text-xs font-mono text-gray-500 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
              <span>Item unit price: ${currentPrice.toFixed(2)}</span>
              <span>Total value: <strong className="text-black font-bold font-sans">${totalPrice.toFixed(2)}</strong></span>
            </div>

            <div className="flex items-center gap-4">
              
              {/* Quantity selector */}
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-black transition-colors"
                  id="btn-qty-minus"
                >
                  -
                </button>
                <span className="px-5 py-2 text-xs font-bold text-black min-w-[36px] text-center font-mono">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-black transition-colors"
                  id="btn-qty-plus"
                >
                  +
                </button>
              </div>

              {/* Add to Bag CTA */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                  added 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-black text-white hover:bg-gold hover:text-black'
                }`}
                id="btn-add-to-bag"
              >
                {added ? (
                  <>
                    <Check className="w-4.5 h-4.5" />
                    Successfully Added
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4.5 h-4.5" />
                    Add {quantity > 1 ? `(${quantity} Stacks)` : 'to Bag'}
                  </>
                )}
              </button>

              {/* Wishlist toggle */}
              <button
                type="button"
                onClick={handleWishlistToggle}
                className={`p-3.5 rounded-xl border transition-all duration-300 shrink-0 ${
                  isFavorited 
                    ? 'border-red-100 bg-red-50 text-red-500 hover:bg-red-100' 
                    : 'border-gray-200 text-gray-400 hover:border-black hover:text-black bg-white'
                }`}
                aria-label={isFavorited ? "Remove from Wishlist" : "Add to Wishlist"}
                id="btn-wishlist-toggle-detail"
              >
                <Heart className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Tabs & Tech Specifications block */}
      <div className="space-y-6 pt-10 border-t border-gray-100">
        
        {/* Accordion Tabs selectors */}
        <div className="flex border-b border-gray-100">
          <button
            type="button"
            onClick={() => setActiveTab('specs')}
            className={`py-3 px-6 text-xs uppercase tracking-widest font-bold border-b-2 transition-all ${
              activeTab === 'specs' 
                ? 'border-gold text-black' 
                : 'border-transparent text-gray-400 hover:text-black'
            }`}
            id="tab-specs-select"
          >
            Technical Specifications
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('compliance')}
            className={`py-3 px-6 text-xs uppercase tracking-widest font-bold border-b-2 transition-all ${
              activeTab === 'compliance' 
                ? 'border-gold text-black' 
                : 'border-transparent text-gray-400 hover:text-black'
            }`}
            id="tab-compliance-select"
          >
            Compliance & Legality
          </button>
        </div>

        {/* Tab 1 content */}
        {activeTab === 'specs' && (
          <div className="bg-gray-50/50 p-6 sm:p-8 rounded-3xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in" id="specs-content-panel">
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-black">Production Highlights</h3>
              <ul className="space-y-2">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed">
                    <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-black">Product Parameters</h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                {Object.entries(product.specifications).map(([k, v]) => (
                  <div key={k} className="border-b border-gray-100 pb-2 flex flex-col justify-between">
                    <span className="text-gray-400 font-medium font-sans uppercase tracking-wider text-[9px]">{k}</span>
                    <span className="text-black font-semibold mt-1 font-mono">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2 content */}
        {activeTab === 'compliance' && (
          <div className="bg-gray-50/50 p-6 sm:p-8 rounded-3xl border border-gray-100 space-y-4 animate-fade-in text-xs leading-relaxed text-gray-600 max-w-4xl" id="compliance-content-panel">
            <h3 className="font-serif font-bold text-lg text-black">Reserve Bank of Australia (RBA) Guideline Conformation</h3>
            <p>
              Under the Crimes (Currency) Act 1981, reproduction of Australian banknotes is heavily regulated. To ensure prop notes can be safely utilized inside cinematic productions and art programs without risk of federal seizure or prosecution, Australian Prop Money Pty Ltd designs and prints all replica bills to strictly comply with the following mandates:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>
                <strong>Material Variance:</strong> Authentic Australian currency is minted exclusively on a highly specialized polymer plastic film. Our replica banknotes are printed on fine matte, heavyweight non-glare studio paper. They can never be mistaken for polymer notes by touch.
              </li>
              <li>
                <strong>Tactile Markings:</strong> There are no raised ink elements or genuine security features.
              </li>
              <li>
                <strong>Compliance Markings:</strong> Every banknote features un-erasable compliance text reading &quot;PROP MONEY ONLY — NOT LEGAL TENDER&quot; watermarked directly into the ink layers.
              </li>
              <li>
                <strong>Non-Reflective Surface:</strong> Engineered specifically to prevent light reflection or glare when captured under high-intensity movie lighting.
              </li>
            </ul>
          </div>
        )}

      </div>

      {/* REVIEWS SECTION: Display reviews & ratings + Review Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-gray-100">
        
        {/* Left: Review list (Grid-Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-serif text-2xl font-light text-black">
            Verified Production Reviews ({reviews.length})
          </h3>

          <div className="space-y-4 divide-y divide-gray-100">
            {reviews.map((rev) => (
              <div key={rev.id} className="pt-4 first:pt-0 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-black">{rev.name}</h4>
                    <p className="text-[10px] text-gray-400 font-mono mt-0.5">{rev.role} • Verified Crew</p>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-0.5 justify-end">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < rev.rating ? 'fill-gold text-gold' : 'text-gray-200'}`} />
                      ))}
                    </div>
                    <span className="text-[9px] text-gray-400 font-mono block mt-0.5">{rev.date}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-light italic">
                  &quot;{rev.comment}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Write a Review Form (Grid-Span 5) */}
        <div className="lg:col-span-5 bg-gray-50/50 p-6 rounded-3xl border border-gray-100 space-y-4 h-fit">
          <h3 className="font-serif text-lg font-bold text-black flex items-center gap-1.5">
            <MessageSquare className="w-5 h-5 text-gold-dark" />
            Submit Set Report
          </h3>
          <p className="text-[11px] text-gray-400">Share your camera-test results or set feedback with our studio engineers.</p>

          <form onSubmit={handleReviewSubmit} className="space-y-3.5 text-xs">
            {reviewSubmitSuccess && (
              <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg border border-emerald-100">
                🎉 Set report submitted! Your review is saved locally and displayed immediately.
              </div>
            )}

            <div>
              <label className="text-[9px] uppercase font-bold text-gray-400 block mb-1">Your Name</label>
              <input 
                type="text" 
                value={newReviewForm.name}
                onChange={(e) => setNewReviewForm({...newReviewForm, name: e.target.value})}
                placeholder="e.g. John K. (Grip)"
                className="w-full border bg-white p-2.5 rounded-lg focus:outline-gold focus:ring-0 text-black"
                required
                id="input-review-name"
              />
            </div>

            <div>
              <label className="text-[9px] uppercase font-bold text-gray-400 block mb-1">Production Role / Title</label>
              <input 
                type="text" 
                value={newReviewForm.role}
                onChange={(e) => setNewReviewForm({...newReviewForm, role: e.target.value})}
                placeholder="e.g. Director of Photography"
                className="w-full border bg-white p-2.5 rounded-lg focus:outline-gold focus:ring-0 text-black"
                id="input-review-role"
              />
            </div>

            <div>
              <label className="text-[9px] uppercase font-bold text-gray-400 block mb-1">Set Rating</label>
              <div className="flex gap-1.5 items-center bg-white border p-2 rounded-lg w-fit">
                {[1, 2, 3, 4, 5].map((starVal) => (
                  <button
                    key={starVal}
                    type="button"
                    onClick={() => setNewReviewForm({...newReviewForm, rating: starVal})}
                    className="focus:outline-none"
                    id={`btn-review-star-${starVal}`}
                  >
                    <Star className={`w-5 h-5 ${starVal <= newReviewForm.rating ? 'fill-gold text-gold' : 'text-gray-200'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[9px] uppercase font-bold text-gray-400 block mb-1">Feedback / Set Experience</label>
              <textarea 
                rows={3}
                value={newReviewForm.comment}
                onChange={(e) => setNewReviewForm({...newReviewForm, comment: e.target.value})}
                placeholder="Describe how the notes handled under lighting, crispness of sound, or audience reaction..."
                className="w-full border bg-white p-2.5 rounded-lg focus:outline-gold focus:ring-0 text-black leading-relaxed"
                required
                id="input-review-comment"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#111111] hover:bg-gold text-white hover:text-black py-2.5 rounded-lg font-bold uppercase tracking-widest text-[10px] transition-all"
              id="btn-review-submit"
            >
              Post Set Review
            </button>
          </form>
        </div>

      </div>

      {/* RELATED REPLICAS SECTION */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-10 border-t border-gray-100">
          <h3 className="font-serif text-2xl font-light text-black">
            Related Replicas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onViewDetails={(prod) => router.push(`/product/${prod.id}`)}
              />
            ))}
          </div>
        </div>
      )}

      {/* RECENTLY VIEWED SECTION */}
      {recentlyViewed.length > 1 && (
        <div className="space-y-6 pt-10 border-t border-gray-100">
          <h3 className="font-serif text-2xl font-light text-black">
            Recently Viewed Replicas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {recentlyViewed
              .filter((p) => p.id !== product.id)
              .map((p) => (
                <Link
                  href={`/product/${p.id}`}
                  key={p.id}
                  className="bg-white border border-gray-100 p-3 rounded-2xl hover:border-gold hover:shadow-xs transition-all flex gap-3 items-center group cursor-pointer"
                  id={`recent-link-${p.id}`}
                >
                  <div className="relative w-12 h-12 bg-gray-50 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                    <Image 
                      src={getImageUrl(p.image)} 
                      alt={p.name} 
                      fill
                      sizes="48px"
                      referrerPolicy="no-referrer"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif font-bold text-xs text-black line-clamp-1 group-hover:text-gold transition-colors">
                      {p.name}
                    </h4>
                    <span className="text-[10px] text-gray-400 font-mono block mt-0.5">${p.price.toFixed(2)} AUD</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}

    </div>
  );
}
