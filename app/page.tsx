'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Sparkles, ChevronRight, MessageSquare, 
  Plus, Minus, Film, Star, ShieldAlert, CheckCircle2 
} from 'lucide-react';
import { PRODUCTS, BLOG_POSTS, FAQS, REVIEWS, Product, BlogPost } from '@/lib/products';
import TrustSection from '@/components/TrustSection';
import CreativeIndustryCarousel from '@/components/CreativeIndustryCarousel';
import EntertainmentLogosCarousel from '@/components/EntertainmentLogosCarousel';
import ProductCard from '@/components/ProductCard';
import ProductDetailsModal from '@/components/ProductDetailsModal';
import { getImageUrl } from '@/lib/imagekit';
import { cleanWhatsAppNumber } from '@/lib/utils';


export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // Top 3 featured products for the home page
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="animate-fade-in space-y-16 sm:space-y-24 pb-16">
      
      {/* SECTION 1: CINEMATIC HERO BANNER */}
      <section className="relative h-[500px] sm:h-[600px] flex items-center bg-gray-900 overflow-hidden" id="homepage-hero">
        {/* Background Image with Dark & Gold Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getImageUrl('images/hero/hero.webp')}
            alt="Cinematic prop money background"
            fill
            priority
            referrerPolicy="no-referrer"
            className="object-cover opacity-40 scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full text-left">
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

      {/* SECTION 2: TRUST CARDS SECTION */}
      <TrustSection />

      {/* SECTION 2.5: CREATIVE INDUSTRY CAROUSEL */}
      <CreativeIndustryCarousel />

      {/* SECTION 2.8: ENTERTAINMENT LOGO CAROUSEL */}
      <EntertainmentLogosCarousel />

      {/* SECTION 3: FEATURED CATEGORIES (BENTO GRID) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16" id="featured-categories">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block mb-4">Design Ranges</span>
          <h2 className="text-3xl font-light text-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>Explore Our Curated Ranges</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6 mb-4"></div>
          <p className="text-xs sm:text-sm text-gray-500">Choose the perfect cash prop style to complement your scene narrative.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: New Series Polymer Look */}
          <div className="bg-white p-8 border border-gray-100 flex flex-col justify-between h-80 relative overflow-hidden group hover:border-gold transition-all duration-300">
            <div className="space-y-3 relative z-10">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] block">Color Balanced</span>
              <h3 className="text-lg font-light text-black leading-tight" style={{ fontFamily: 'Georgia, serif' }}>Australian Notes</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                Brilliant hues matching modern polymer currency, optimized specifically for digital sensors with zero glare.
              </p>
            </div>
            <Link href="/shop?category=australian-notes" className="text-[10px] font-bold uppercase tracking-widest text-black hover:text-gold flex items-center gap-1.5 transition-all" id="category-link-new">
              Browse Notes <ChevronRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>

          {/* Card 2: Hand-Aged & Weathered */}
          <div className="bg-white p-8 border border-gray-100 flex flex-col justify-between h-80 relative overflow-hidden group hover:border-gold transition-all duration-300">
            <div className="space-y-3 relative z-10">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] block">Artisan Treatment</span>
              <h3 className="text-lg font-light text-black leading-tight" style={{ fontFamily: 'Georgia, serif' }}>Movie Prop Money</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                Meticulously distressed with custom organic pigments, folds, and wear. Essential for heist and crime scenes.
              </p>
            </div>
            <Link href="/shop?category=movie-prop-money" className="text-[10px] font-bold uppercase tracking-widest text-black hover:text-gold flex items-center gap-1.5 transition-all" id="category-link-aged">
              Browse Movie Props <ChevronRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>

          {/* Card 3: Briefcases & Bundles */}
          <div className="bg-white p-8 border border-gray-100 flex flex-col justify-between h-80 relative overflow-hidden group hover:border-gold transition-all duration-300">
            <div className="space-y-3 relative z-10">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] block">Production Packs</span>
              <h3 className="text-lg font-light text-black leading-tight" style={{ fontFamily: 'Georgia, serif' }}>Bundle Packs</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                Saves over 20% on prop cases and multi-note stacks. Curated specifically for ransom drops and safehouse layouts.
              </p>
            </div>
            <Link href="/shop?category=bundle-packs" className="text-[10px] font-bold uppercase tracking-widest text-black hover:text-gold flex items-center gap-1.5 transition-all" id="category-link-bundles">
              Browse Wholesale <ChevronRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 4: FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16" id="featured-products">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-12 border-b pb-4 border-gray-100">
          <div>
            <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block mb-2">Store Highlights</span>
            <h2 className="text-3xl font-light text-black" style={{ fontFamily: 'Georgia, serif' }}>Our Best Selling Props</h2>
          </div>
          <Link href="/shop" className="text-[11px] font-bold uppercase tracking-widest text-black hover:text-gold flex items-center gap-1 hover:translate-x-1 transition-all" id="btn-view-all-shop">
            View Complete Catalog <ChevronRight className="w-4 h-4 text-gold" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={handleViewProduct} 
              
            />
          ))}
        </div>
      </section>

      {/* SECTION 4.5: SHOP BY DENOMINATION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16" id="shop-by-denomination">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block mb-4">Precision Selection</span>
          <h2 className="text-3xl font-light text-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>Shop by Denomination</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6 mb-4"></div>
          <p className="text-xs sm:text-sm text-gray-500">
            Browse our RBA-compliant prop series by individual denomination. Optimized for screen clarity and authentic color profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              denom: '100',
              title: '$100 Australian Prop Money',
              desc: 'Premium Australian $100 prop notes for film, television, photography and creative productions.',
              btnText: 'Shop $100 Notes',
              image: 'images/products/Australian Notes/New-Notes/100 AUD/100-aud-front',
              colorTheme: 'hover:border-emerald-500/50',
              badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200/50',
              accentText: 'text-emerald-600',
              btnHover: 'hover:bg-emerald-600 hover:text-white',
            },
            {
              denom: '50',
              title: '$50 Australian Prop Money',
              desc: 'Professional Australian $50 replica notes suitable for production, theatre and media projects.',
              btnText: 'Shop $50 Notes',
              image: 'images/products/Australian Notes/New-Notes/50 AUD/50-aud-front',
              colorTheme: 'hover:border-amber-500/50',
              badgeColor: 'bg-amber-50 text-amber-800 border-amber-200/50',
              accentText: 'text-amber-600',
              btnHover: 'hover:bg-amber-600 hover:text-white',
            },
            {
              denom: '20',
              title: '$20 Australian Prop Money',
              desc: 'High-quality Australian $20 prop notes designed for film sets, advertising and training purposes.',
              btnText: 'Shop $20 Notes',
              image: 'images/products/Australian Notes/New-Notes/20 AUD/20-aud-front',
              colorTheme: 'hover:border-red-500/50',
              badgeColor: 'bg-red-50 text-red-800 border-red-200/50',
              accentText: 'text-red-600',
              btnHover: 'hover:bg-red-600 hover:text-white',
            },
          ].map((card) => (
            <div 
              key={card.denom}
              className={`bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col hover:shadow-lg ${card.colorTheme} group`}
              id={`denom-card-${card.denom}`}
            >
              {/* Card Image using getImageUrl to support future ImageKit integration */}
              <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden shrink-0 border-b border-gray-100">
                <Image
                  src={getImageUrl(card.image)}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <span className={`absolute top-4 left-4 text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border ${card.badgeColor}`}>
                  {card.denom} AUD
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-lg text-black leading-snug group-hover:text-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>

                <Link
                  href={`/shop?denom=${card.denom}`}
                  className={`w-full py-3.5 px-6 rounded-xl border border-gray-200 text-xs font-bold uppercase tracking-widest text-center transition-all duration-300 block ${card.btnHover} text-gray-700 bg-white shadow-xs`}
                  id={`btn-shop-denom-${card.denom}`}
                >
                  {card.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: WHOLESALE BANNER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16" id="wholesale-banner">
        <div className="bg-[#111111] text-white p-8 sm:p-14 relative overflow-hidden border border-gold/20 shadow-xs">
          {/* Ambient Design Overlays */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-at-r from-gold/15 to-transparent pointer-events-none" />

          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block">
              Bespoke Production Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Bespoke Large Volume Props & Metal Security Briefcases
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans font-light">
              Planning a high-stakes banking raid, vault breakdown, or a dramatic cash explosion scene? Our experienced prop studio builds custom layouts, pre-filled metal briefcases, custom aging (burned, bloodied, waterlogged notes), and bulk currency crates.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/wholesale" 
                className="bg-gold hover:bg-gold-dark text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-center transition-all duration-300"
                id="btn-wholesale-banner-cta"
              >
                Request Custom Bulk Quote
              </Link>
              {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && (
                <a 
                  href={`https://wa.me/${cleanWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white hover:text-black px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-center transition-all"
                  id="btn-wholesale-wa-chat"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  Live WhatsApp Supervisor
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: LATEST BLOG POSTS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16" id="latest-blog-posts">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block mb-4">Insights</span>
          <h2 className="text-3xl font-light text-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>On Set Compliance & Production Blogs</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6 mb-4"></div>
          <p className="text-xs sm:text-sm text-gray-500">Expert tips on staying legally compliant while shooting with fake notes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BLOG_POSTS.slice(0, 4).map((post) => (
            <article key={post.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <Image
                    src={getImageUrl(post.image)}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black text-white text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] text-gray-400 font-mono block">{post.date} • {post.readTime}</span>
                  <h3 className="font-serif font-bold text-sm text-black group-hover:text-gold transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link href={`/blog#${post.id}`} className="text-xs font-bold uppercase tracking-widest text-black hover:text-gold flex items-center gap-1 group-hover:translate-x-1 transition-all" id={`blog-read-link-${post.id}`}>
                  Read Article <ChevronRight className="w-4 h-4 text-gold" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 7: CUSTOMER REVIEWS (SLIDER/GRID) */}
      <section className="bg-gray-50 py-16 border-y border-gray-100" id="customer-reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-gold font-mono uppercase tracking-widest text-xs font-semibold block">Testimonials</span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-black">Praised by Production Houses</h2>
            <p className="text-xs sm:text-sm text-gray-500">Read reviews from lead directors, set designers, and executive producers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-black block">{rev.name}</span>
                    <span className="text-[10px] text-gray-400 font-mono block">{rev.role}</span>
                  </div>
                  <span className="text-[9px] bg-black text-gold uppercase tracking-widest font-mono font-bold px-2 py-0.5 rounded border border-gold/15">
                    {rev.production}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ PREVIEW SECTION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" id="faq-preview-section">
        <div className="text-center mb-10 space-y-2">
          <span className="text-gold font-mono uppercase tracking-widest text-xs font-semibold block">FAQ Preview</span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-black">Have Legal or Shipping Questions?</h2>
          <p className="text-xs sm:text-sm text-gray-500">Quick answers regarding Reserve Bank compliance and local dispatch.</p>
        </div>

        <div className="space-y-3">
          {FAQS.slice(0, 3).map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-xs"
                id={`faq-item-${idx}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50/50 transition-colors"
                  id={`btn-faq-toggle-${idx}`}
                >
                  <span className="font-serif font-bold text-xs sm:text-sm text-black">{faq.question}</span>
                  <span className="text-gold shrink-0 font-bold font-mono text-base">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-gray-50 text-xs text-gray-500 leading-relaxed animate-fade-in">
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

      {/* SECTION 10: PROFESSIONAL SEO COMPLIANCE & SET GUIDE */}
      <section className="bg-white py-20 border-t border-gray-100" id="compliance-seo-guide">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="space-y-4 text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-mono uppercase tracking-[0.2em] text-[10px] font-bold block">Compliance & Staging Manual</span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-black tracking-tight">
              Australian Prop Money Laws & Cinematic Set Best Practices
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-4 mb-4"></div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              An educational resource for directors, set designers, photographers, and producers handling reproduction banknotes in Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-600 text-xs sm:text-sm leading-relaxed font-sans" id="seo-rich-content">
            {/* Column 1 */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-base text-black">
                  Understanding Crimes (Currency) Act 1981 & RBA Directives
                </h3>
                <p>
                  For filmmakers, directors, set decorators, and commercial photographers operating in the Australian creative landscape, acquiring high-quality replica currency is a standard logistical step for heist scenes, music videos, and theatrical set pieces. However, procuring and staging <strong>Australian prop money</strong> is subject to rigorous regulatory oversight. Understanding the strict legal constraints set by local authorities and learning how to choose cinematic-grade paper materials is vital to ensuring your production remains 100% compliant and legally safe.
                </p>
                <p>
                  The reproduction of Australian banknotes is strictly governed by the <em>Crimes (Currency) Act 1981</em> and guidelines established by the Reserve Bank of Australia (RBA). Under these mandates, any copy or imitation of national legal tender must be easily distinguishable from actual currency to prevent any risk of fraud or accidental circulation. Our prop notes are specifically engineered to respect these boundaries while preserving pristine photographic realism under professional studio conditions.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-black uppercase tracking-wider text-[11px] font-mono">
                  Why Substrate Materials Matter (Polymer vs. Paper)
                </h4>
                <p>
                  Standard Australian banknotes are printed on a highly sophisticated polymer plastic substrate. To comply with national laws, all of our replica notes are printed exclusively on high-grade, double-calendered matte cotton paper bonds. This material provides the necessary rigid hand-feel and characteristic crisp acoustic rustle needed by stage actors while remaining instantly identifiable as non-genuine to any financial handler or teller.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-base text-black">
                  Optimizing Prop Money for High-Resolution Cinematic Cameras
                </h3>
                <p>
                  With modern cinematic sensors capturing footage in 4K, 8K, and beyond, low-quality printed fakes represent a major set liability. Standard home printers or low-DPI online knockoffs produce visible halftone dots and incorrect color casts under intense studio strobe lights, shattering viewer immersion.
                </p>
                <p>
                  Our custom prop packs are produced on professional offset lithographic presses using non-glare, ultra-matte inks. Under direct key lights, our notes reflect zero glare, preventing blue or purple camera sensor distortion common with high-contrast surfaces. This makes them ideal for tight macro shots, slow-motion money counts, and fast-paced hip-hop video clips.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-black uppercase tracking-wider text-[11px] font-mono">
                  Staging, Distressing, and Stacking Props on Set
                </h4>
                <p>
                  To achieve organic visual immersion, many productions require aged or weathered cash. Crisp, perfectly flat cash stacks look unnatural in a gritty crime drama. Professional prop masters utilize specialized hand-aging techniques, treating bills with custom tea staining, edge fraying, and tumble distressing to simulate heavily circulated currency.
                </p>
                <p>
                  Whether you are staging a dramatic briefcase ransom exchange, filling a secure bank vault layout, or designing a creative flatlay background for luxury editorial photography, selecting the right prop currency is paramount. By choosing Australian Prop Money, you receive 100% compliant, premium camera-ready replica cash backed by years of industrial production expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Detail Modal */}
      <ProductDetailsModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}
