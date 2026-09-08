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
import TrustpilotReviewsSlider from '@/components/TrustpilotReviewsSlider';
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
    ['100-aud-new-prop-money', '50-aud-new-prop-money', 'film-producer-pack'].includes(p.id)
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
            <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-lg font-sans font-light leading-relaxed">
              Professional prop money australia and fake australian money prop replica notes for film, television, photography, theatre and creative productions. 
              The most realistic au prop money, money heist props, and prop bundles of money australia, conforming strictly to federal legal standards and optimized for high-definition camera lenses. Buy prop money and fake money props securely online today.
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
              description: 'Individual premium australian prop money notes. Choose from classic old styles or next-generation polymer look designs.',
              cta: 'Shop Note Series',
              icon: Sparkles,
              image: 'https://drive.google.com/thumbnail?id=18Lkpjp0VSgrZ2CHuB0Yo_gK-1pHbP-hU&sz=w1000',
              label: 'Individual Series'
            },
            {
              id: 'bundle-packs',
              title: 'Bundle Packs',
              description: 'Massive volume stacks, crates, and bundles of prop money curated specifically for action-heavy heist and bank scenes.',
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
              image: 'https://drive.google.com/thumbnail?id=16UnmI3SBn-LgOWEaS4dlp1g_LsBLGR_s&sz=w1000',
              label: 'Set Accessories'
            }
          ].map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div 
                key={cat.id} 
                id={`category-card-${cat.id}`}
                className="group flex flex-col rounded-3xl overflow-hidden border border-zinc-200/80 bg-white shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300"
                style={{ contentVisibility: 'auto' }}
              >
                {/* Image Banner */}
                <Link 
                  href={`/shop?category=${cat.id}`}
                  className="relative aspect-[16/10] w-full overflow-hidden block bg-zinc-950"
                  id={`category-banner-${cat.id}`}
                >
                  {cat.image && (
                    <Image
                      src={cat.image}
                      alt={`${cat.title} Category Preview`}
                      fill
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      referrerPolicy="no-referrer"
                      className="object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  )}
                </Link>
                
                {/* Write-ups Under Image Banner */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase font-bold tracking-widest text-gold font-mono">
                        {cat.label}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 group-hover:text-gold group-hover:border-gold/30 transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-serif font-normal text-2xl text-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                      <Link href={`/shop?category=${cat.id}`} className="hover:text-gold transition-colors">
                        {cat.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-4 border-t border-zinc-100">
                    <Link 
                      href={`/shop?category=${cat.id}`}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-black group-hover:text-gold transition-colors"
                      id={`category-link-${cat.id}`}
                    >
                      <span>{cat.cta}</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CINEMATIC PROPS VISUAL SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16" id="cinematic-showcase">
        <div className="bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Visual Showcase (Image visible & full content show) */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[400px] lg:min-h-[480px] bg-zinc-900 flex items-center justify-center overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/d/1bb0IoCmrqAesCg3xCOnoT42Ake-o7cnQ"
              alt="A Grade Standards for Cinematic Production"
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover sm:object-contain object-center hover:scale-[1.02] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Write-up & Actions */}
          <div className="lg:col-span-5 p-8 sm:p-10 md:p-12 flex flex-col justify-between text-white bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-800 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-gold font-mono uppercase tracking-widest text-[10px] sm:text-xs font-bold bg-gold/10 border border-gold/20 px-2.5 py-1 rounded">
                  Industry Standard Props
                </span>
                <span className="text-zinc-400 font-mono text-[10px] uppercase">
                  4K Studio Ready
                </span>
              </div>

              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                A Grade Standards for Cinematic Production
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                Engineered specifically for high-definition digital lenses and 4K cameras. Our fake australian money prop replicas maintain pristine, non-glare visual clarity under intense studio lighting setups, making us the top choice for prop money australia.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Ultra-matte anti-glare finish for studio lighting</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Exact scale & double-sided polymer texture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>100% compliant with Reserve Bank of Australia rules</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/shop" 
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-gold hover:text-black px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-xl shadow-md"
                id="showcase-cta-btn"
              >
                <span>Explore Pro Series</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST CARDS SECTION */}
      <TrustSection />

      {/* SECTION 2.8: ENTERTAINMENT LOGO CAROUSEL */}
      <EntertainmentLogosCarousel />

      {/* SECTION 5: HOW IT WORKS (From Press to Production) */}
      <section className="relative bg-white py-20 sm:py-28 border-y border-gray-200 text-black overflow-hidden" id="how-it-works">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block">The Process</span>
            <h2 className="text-3xl sm:text-4xl font-light text-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              From Press to Production
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-4 mb-3"></div>
            <p className="text-gray-600 text-sm max-w-lg mx-auto font-sans leading-relaxed">
              Precision engineering and strict Reserve Bank compliance at every stage of the manufacturing process.
            </p>
          </div>

          {/* Featured Cover Image Showcase (Visible & High Fidelity) */}
          <div className="mb-14 relative rounded-3xl overflow-hidden border border-gray-200 shadow-md bg-zinc-950 group">
            <div className="relative aspect-[21/9] sm:aspect-[2.4/1] min-h-[260px] sm:min-h-[360px] lg:min-h-[420px] w-full flex items-center justify-center">
              <Image
                src="https://lh3.googleusercontent.com/d/1M7oRix6yupBUKnWiiL7f91JJBSHV0p2Z"
                alt="From Press to Production - Australian Prop Money Manufacturing"
                fill
                priority
                unoptimized
                sizes="100vw"
                referrerPolicy="no-referrer"
                className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
              />
              {/* Subtle top/bottom edge gradients for smooth presentation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
              
              {/* Cover Floating Badge */}
              <div className="absolute bottom-5 left-6 sm:left-10 sm:bottom-8 z-10 max-w-md">
                <span className="inline-flex items-center gap-2 bg-black/80 backdrop-blur-md border border-gold/40 text-gold text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  Industrial Offset Press
                </span>
                <h3 className="text-white text-base sm:text-xl font-bold tracking-tight drop-shadow-sm">
                  Precision Non-Glare Polymer Print Run
                </h3>
              </div>
            </div>
          </div>
          
          {/* 4 Process Steps in Clean White Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Select Currency', desc: 'Choose from our range of RBA-compliant new series polymer looks or classic paper prop notes.' },
              { step: '02', title: 'Specify Volume', desc: 'Order individual stacks for photography or bulk briefcase bundles for feature film heist scenes.' },
              { step: '03', title: 'Secure Dispatch', desc: 'All orders are packed securely in plain, unmarked boxes and dispatched within 24 hours Australia-wide.' },
              { step: '04', title: 'Action', desc: 'Receive cinematic-grade non-glare notes ready immediately for high-definition 4K camera lenses.' },
            ].map((item, idx) => (
              <div key={idx} className="relative group p-7 bg-white border border-gray-200 hover:border-gold hover:shadow-xl transition-all duration-300 rounded-2xl flex flex-col justify-between">
                <span className="text-4xl font-light text-gray-200 group-hover:text-gold/40 absolute top-4 right-6 transition-colors duration-300" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.step}
                </span>
                <div className="space-y-3 pt-6">
                  <h3 className="font-bold text-sm text-black uppercase tracking-wider">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] font-semibold text-gray-400 group-hover:text-gold transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  <span>Quality Assured</span>
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

      {/* SECTION 7: PRODUCTION REVIEWS (Trusted by Prop Masters with 15 Trustpilot Reviews Slider) */}
      <section className="bg-white py-20 sm:py-28 text-black border-y border-gray-200" id="production-reviews">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block">Verified Set Reports</span>
            <h2 className="text-3xl sm:text-4xl font-light text-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Trusted by Prop Masters
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-4 mb-3"></div>
            <p className="text-gray-600 text-sm max-w-lg mx-auto font-sans leading-relaxed">
              Read real-time verified client reviews from cinematographers, art directors, and studio producers across Australia.
            </p>
          </div>
          
          {/* Trustpilot Review Slider with 15 Client Reviews */}
          <TrustpilotReviewsSlider reviews={REVIEWS} />
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
