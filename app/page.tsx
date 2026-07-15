'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Sparkles, ChevronRight, MessageSquare, 
  Plus, Minus, Film, Star, ShieldAlert, CheckCircle2 
} from 'lucide-react';
import { FAQS, REVIEWS, PRODUCTS, Product } from '@/lib/products';
import TrustSection from '@/components/TrustSection';
import EntertainmentLogosCarousel from '@/components/EntertainmentLogosCarousel';
import { cleanWhatsAppNumber } from '@/lib/utils';
import ProductCard from '@/components/ProductCard';
import ProductDetailsModal from '@/components/ProductDetailsModal';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const featuredProducts = PRODUCTS.filter(p => 
    ['buy-counterfeit-$100-aud-new', 'buy-counterfeit-$50-aud-new', 'film-producer-pack'].includes(p.id)
  );

  return (
    <div className="animate-fade-in space-y-16 sm:space-y-24 pb-16">
      
      {/* SECTION 1: CINEMATIC HERO BANNER */}
      <section className="relative h-[500px] sm:h-[600px] flex items-center bg-gray-900 overflow-hidden" id="homepage-hero">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://drive.google.com/thumbnail?id=18Lkpjp0VSgrZ2CHuB0Yo_gK-1pHbP-hU&sz=w1920"
            alt="Australian Prop Money Cinematic Hero Banner"
            fill
            priority
            unoptimized={true}
            referrerPolicy="no-referrer"
            className="object-cover object-center opacity-85 transition-opacity duration-700"
          />
        </div>
        
        {/* Cinematic Gradient Overlays for Color Pop & Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full text-left">
          <div className="max-w-2xl text-white space-y-6">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block">
              EST. 2024
            </span>
            <h1 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
              Premium <span className="italic text-gold">Australian</span> <br />
              Prop Money
            </h1>
            
            {/* Subheading */}
            <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-md font-sans font-light leading-relaxed">
              Professional replica prop money for film, television, photography, theatre and creative productions. Conforming strictly to federal legal standards and optimized for high-definition camera lenses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/shop"
                className="bg-gold text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-gold-dark transition-all duration-300 flex items-center justify-center gap-2 group"
                id="hero-shop-btn"
              >
                Shop Collection
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/wholesale"
                className="border border-white/30 text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                id="hero-wholesale-btn"
              >
                Wholesale Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16" id="featured-products">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block mb-4">Set Favorites</span>
          <h2 className="text-3xl font-light text-black tracking-tight animate-fade-in" style={{ fontFamily: 'Georgia, serif' }}>Featured Prop Collections</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6 mb-4"></div>
          <p className="text-xs text-gray-500 leading-relaxed font-sans max-w-md mx-auto">
            Our most requested high-definition replica notes and producer bundles, engineered to meet RBA guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={handleViewProduct} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-1 bg-black hover:bg-gold text-white hover:text-black px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-all rounded"
            id="view-all-products-btn"
          >
            Explore Full Shop
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* PROP CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16" id="prop-categories">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block mb-4">Browse Collection</span>
          <h2 className="text-3xl font-light text-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>Prop Categories</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6 mb-4"></div>
          <p className="text-xs text-gray-500 leading-relaxed font-sans max-w-md mx-auto">
            From individual premium currency series to complete production heist setups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: 'australian-notes',
              title: 'Australian Notes',
              description: 'Individual premium replica notes. Choose from classic old styles or next-generation polymer look designs.',
              cta: 'Shop Note Series',
              icon: Sparkles,
              image: 'https://drive.google.com/thumbnail?id=18Lkpjp0VSgrZ2CHuB0Yo_gK-1pHbP-hU&sz=w1000',
              label: 'Individual Series'
            },
            {
              id: 'bundle-packs',
              title: 'Bundle Packs',
              description: 'Massive volume stacks, crates, and bundles curated specifically for action-heavy heist and bank scenes.',
              cta: 'Browse Production Bundles',
              icon: Film,
              image: 'https://drive.google.com/thumbnail?id=1F9m1tgScgYGfgGYlAPt_VAsClDFsjSvq&sz=w1000',
              label: 'Production Stacks'
            },
            {
              id: 'accessories',
              title: 'Accessories',
              description: 'Stunt canvas bags, cash pistols, aluminium briefcases, and professional high-speed note counters.',
              cta: 'Explore Accessories',
              icon: Star,
              image: 'https://drive.google.com/thumbnail?id=1fPZnvtxGu602xPCpIpCh-cfJuZTsqRVZ&sz=w1000',
              label: 'Set Accessories'
            }
          ].map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div 
                key={cat.id} 
                className="group relative h-80 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl flex flex-col justify-between p-8 bg-black"
                style={{ contentVisibility: 'auto' }}
              >
                {/* Background Image with Premium Zoom Transition */}
                {cat.image && (
                  <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
                    <Image
                      src={cat.image}
                      alt={`${cat.title} Category Preview`}
                      fill
                      unoptimized={true}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      referrerPolicy="no-referrer"
                      className="object-cover object-center opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  </div>
                )}
                
                {/* High Contrast Gradient Overlays for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 pointer-events-none z-1" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-1" />
                
                {/* Top Row: Icon & Label */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/10 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-300 group-hover:text-gold transition-colors duration-300 font-mono">
                    {cat.label}
                  </span>
                </div>

                {/* Bottom Row: Details & CTA */}
                <div className="relative z-10 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif font-light text-xl text-white tracking-wide">{cat.title}</h3>
                    <p className="text-xs text-zinc-200 font-light leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>
                  </div>
                  
                  <Link 
                    href={`/shop?category=${cat.id}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-gold group-hover:text-white transition-colors pt-2"
                  >
                    {cat.cta}
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CINEMATIC PROPS VISUAL SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16" id="cinematic-showcase">
        <div className="relative aspect-[16/10] md:aspect-[21/9] min-h-[340px] md:min-h-[420px] bg-zinc-950 rounded-3xl overflow-hidden shadow-xl border border-zinc-800 flex items-end p-6 sm:p-10 md:p-12">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://drive.google.com/thumbnail?id=1Up8efD1IdipBIEAS3jAfLECAlPoeRz68&sz=w1200"
              alt="Engineered for high-definition digital lenses and 4K cameras"
              fill
              priority
              unoptimized={true}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center opacity-70 transition-transform duration-700 hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
          </div>
          
          <div className="relative z-10 max-w-xl text-white">
            <span className="text-gold font-mono uppercase tracking-widest text-[10px] sm:text-xs font-bold block mb-2">
              Industry Standard Props
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-white leading-tight">
              A Grade Standards for Cinematic Production
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed mt-2 sm:mt-3">
              Engineered specifically for high-definition digital lenses and 4K cameras. Our replicas maintain pristine, non-glare visual clarity under intense studio lighting setups.
            </p>
            <div className="pt-4 sm:pt-6">
              <Link 
                href="/shop" 
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-gold hover:text-black px-6 py-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-all duration-300 rounded"
                id="showcase-cta-btn"
              >
                Explore Pro Series
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST CARDS SECTION */}
      <TrustSection />

      {/* SECTION 2.8: ENTERTAINMENT LOGO CAROUSEL */}
      <EntertainmentLogosCarousel />

      {/* SECTION 5: HOW IT WORKS */}
      <section className="relative bg-black py-28 border-y border-zinc-900 overflow-hidden" id="how-it-works">
        {/* Background Image with Cinematic Overlays */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="https://drive.google.com/thumbnail?id=1ce6RMCnovIG5nM9Uj2ulENR6OcaNnWg8&sz=w1920"
            alt="From Press to Production Background"
            fill
            unoptimized={true}
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover object-center opacity-80"
          />
          {/* Gradients to merge cleanly and guarantee high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/85 z-1" />
          <div className="absolute inset-0 bg-black/20 z-1" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block mb-4">The Process</span>
            <h2 className="text-3xl font-light text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>From Press to Production</h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-6 mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Select Currency', desc: 'Choose from our range of RBA-compliant new series polymer looks or classic paper prop notes.' },
              { step: '02', title: 'Specify Volume', desc: 'Order individual stacks for photography or bulk briefcase bundles for feature film heist scenes.' },
              { step: '03', title: 'Secure Dispatch', desc: 'All orders are packed securely in plain, unmarked boxes and dispatched within 24 hours Australia-wide.' },
              { step: '04', title: 'Action', desc: 'Receive cinematic-grade non-glare notes ready immediately for high-definition 4K camera lenses.' },
            ].map((item, idx) => (
              <div key={idx} className="relative group p-6 bg-zinc-950/45 backdrop-blur-md border border-zinc-800/80 hover:border-gold/50 hover:bg-zinc-900/60 transition-all duration-500 rounded-2xl">
                <span className="text-4xl font-light text-zinc-800 group-hover:text-gold/20 absolute top-4 right-6 transition-colors duration-500" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.step}
                </span>
                <div className="space-y-4 pt-8">
                  <h3 className="font-bold text-sm text-white uppercase tracking-wider">{item.title}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: COMPLIANCE BANNER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16" id="compliance-banner">
        <div className="bg-white border border-gray-100 p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 rounded-3xl relative overflow-hidden shadow-sm">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center shrink-0 border border-gold/20">
            <ShieldAlert className="w-8 h-8 text-gold" />
          </div>
          <div className="space-y-3 relative z-10 flex-1">
            <h2 className="text-xl font-bold text-black font-sans">Strictly Compliant with Federal Law</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
              Australian Prop Money strictly follows the Reserve Bank of Australia (RBA) guidelines and the Crimes (Currency) Act 1981. Our products are clearly marked &quot;PROP ONLY — NOT LEGAL TENDER&quot;, printed on high-grade paper instead of polymer, and have modified scale dimensions. Attempting to use prop money as real currency is a federal offense.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: PRODUCTION REVIEWS */}
      <section className="bg-[#0D0D0D] py-24 text-white" id="production-reviews">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block">Set Reports</span>
            <h2 className="text-3xl font-light text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>Trusted by Prop Masters</h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-6 mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-gold/30 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light italic">
                  &quot;{review.comment}&quot;
                </p>
                <div>
                  <strong className="block text-white text-sm font-bold">{review.name}</strong>
                  <span className="text-gray-500 text-xs">{review.role} — {review.production}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: HOMEPAGE FAQS */}
      <section className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16" id="homepage-faqs">
        <div className="text-center space-y-4 mb-12">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block">Support</span>
          <h2 className="text-3xl font-light text-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>Common Questions</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4 mb-8"></div>
        </div>
        
        <div className="space-y-4">
          {FAQS.slice(0, 4).map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-gold/30 transition-colors shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                  id={`btn-toggle-faq-${idx}`}
                >
                  <span className="font-bold text-black text-sm">{faq.question}</span>
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-gold shrink-0 ml-4" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-400 shrink-0 ml-4" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-xs leading-relaxed border-t border-gray-50 pt-4 bg-gray-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/faq" 
            className="inline-flex items-center gap-1 bg-black hover:bg-gold text-white hover:text-black px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-bold transition-all"
            id="btn-all-faqs"
          >
            Read All Legal FAQs
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 9: CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="cta-banner">
        <div className="bg-[#0D0D0D] text-white rounded-3xl p-8 sm:p-12 text-center border-t-2 border-gold relative overflow-hidden shadow-2xl space-y-6">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-gold font-mono uppercase tracking-widest text-[10px] sm:text-xs font-bold block">
              Equip Your Set With Ultra-Realistic Props Today
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              100% RBA Compliant. Express Fast Shipping.
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
              Our pre-designed, color-matched, non-glare prop cash is ready to dispatch. Secure, private checkout is available.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
            <Link 
              href="/shop" 
              className="bg-gold hover:bg-gold-dark text-black py-3.5 px-6 rounded-lg text-xs uppercase tracking-widest font-bold transition-colors"
              id="cta-shop-btn"
            >
              Shop Prop Cash
            </Link>
            <Link 
              href="/wholesale" 
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 py-3.5 px-6 rounded-lg text-xs uppercase tracking-widest font-bold transition-colors"
              id="cta-wholesale-btn"
            >
              Wholesale Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT DETAILS QUICK VIEW MODAL */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}
