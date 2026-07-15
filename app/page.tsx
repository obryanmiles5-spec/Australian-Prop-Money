'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Sparkles, ChevronRight, MessageSquare, 
  Plus, Minus, Film, Star, ShieldAlert, CheckCircle2 
} from 'lucide-react';
import { FAQS, REVIEWS } from '@/lib/products';
import TrustSection from '@/components/TrustSection';
import EntertainmentLogosCarousel from '@/components/EntertainmentLogosCarousel';
import { cleanWhatsAppNumber } from '@/lib/utils';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

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
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
        </div>
        
        {/* Cinematic Gradient Background */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-950 via-zinc-900/80 to-black/90 opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-15" />

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

      {/* SECTION 2: TRUST CARDS SECTION */}
      <TrustSection />

      {/* SECTION 2.8: ENTERTAINMENT LOGO CAROUSEL */}
      <EntertainmentLogosCarousel />

      {/* SECTION 5: HOW IT WORKS */}
      <section className="bg-gray-50 py-24" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block mb-4">The Process</span>
            <h2 className="text-3xl font-light text-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>From Press to Production</h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-6 mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Select Currency', desc: 'Choose from our range of RBA-compliant new series polymer looks or classic paper prop notes.' },
              { step: '02', title: 'Specify Volume', desc: 'Order individual stacks for photography or bulk briefcase bundles for feature film heist scenes.' },
              { step: '03', title: 'Secure Dispatch', desc: 'All orders are packed securely in plain, unmarked boxes and dispatched within 24 hours Australia-wide.' },
              { step: '04', title: 'Action', desc: 'Receive cinematic-grade non-glare notes ready immediately for high-definition 4K camera lenses.' },
            ].map((item, idx) => (
              <div key={idx} className="relative group p-6 bg-white border border-gray-100 hover:border-gold hover:shadow-lg transition-all duration-300 rounded-2xl">
                <span className="text-4xl font-light text-gray-100 group-hover:text-gold/20 absolute top-4 right-6 transition-colors duration-300" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.step}
                </span>
                <div className="space-y-4 pt-8">
                  <h3 className="font-bold text-sm text-black uppercase tracking-wider">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">{item.desc}</p>
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



    </div>
  );
}
