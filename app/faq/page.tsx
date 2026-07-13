'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronRight, MessageSquare, Sparkles, AlertCircle } from 'lucide-react';
import { FAQS } from '@/lib/products';
import JsonLd from '@/components/JsonLd';
import { cleanWhatsAppNumber } from '@/lib/utils';

export default function FAQPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'legality', label: 'Compliance' },
    { id: 'shipping', label: 'Shipping & Delivery' },
    { id: 'ordering', label: 'Ordering & Payment' },
    { id: 'custom', label: 'Custom Aging' },
  ];

  // Map product categories slightly differently to support filtering correctly
  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 sm:space-y-24 animate-fade-in" id="faq-page-container">
      <JsonLd schema={faqSchema} />
      
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <span className="text-gold font-mono uppercase tracking-widest text-xs font-semibold block">Knowledge Base</span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-black tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          Get transparent, expert guidance regarding the legality of prop currency, custom aging services, local shipping speeds, and payment methods.
        </p>
      </div>

      {/* Category Selection Tabs */}
      <div className="flex flex-wrap justify-center gap-1.5 border-b pb-4 border-gray-100" id="faq-categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setActiveFaq(null); // Close active question on change
            }}
            className={`px-4 py-2 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${
              activeCategory === cat.id
                ? 'bg-black text-white'
                : 'bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200/50'
            }`}
            id={`faq-tab-${cat.id}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4 max-w-3xl mx-auto" id="faq-accordion-list">
        {filteredFaqs.length === 0 ? (
          <p className="text-center py-10 text-gray-400 text-xs font-mono">No matching FAQs found.</p>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xs hover:border-black/20 transition-all duration-300"
                id={`faq-accordion-item-${idx}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50/30 transition-colors"
                  id={`btn-faq-accordion-${idx}`}
                >
                  <span className="font-serif font-bold text-xs sm:text-sm md:text-base text-black">{faq.question}</span>
                  <span className="text-gold shrink-0 font-bold font-mono text-lg">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-gray-50 text-xs sm:text-sm text-gray-500 leading-relaxed space-y-3 animate-fade-in">
                    <p>{faq.answer}</p>
                    
                    {/* Legality specificity addition */}
                    {faq.category === 'legality' && (
                      <div className="bg-yellow-50 p-3 rounded-lg text-[11px] text-yellow-800 flex gap-2 border border-yellow-100/60 leading-normal">
                        <AlertCircle className="w-4.5 h-4.5 text-gold shrink-0 mt-0.5" />
                        <span>Every note incorporates RBA-compliant size scales, paper texture material changes, and permanent <strong>&quot;PROP MONEY ONLY&quot;</strong> double-sided stamps. Recommended strictly for theatrical/educational use.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Boxed CTA */}
      <div className="bg-[#0D0D0D] text-white p-8 rounded-3xl border border-gold/15 max-w-3xl mx-auto text-center space-y-5 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gold" />
        
        <div className="space-y-2">
          <span className="text-gold uppercase font-mono tracking-widest text-[9px] font-bold block">
            Custom Inquiries Welcome
          </span>
          <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
            Still Have Questions About Scene Setup?
          </h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
            Need custom prop bundles, specialized distress treatments, or certificates of compliance for your legal department? Our team is standing by.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
          <Link 
            href="/contact" 
            className="bg-gold hover:bg-gold-dark text-black py-3 px-5 rounded-lg text-xs uppercase tracking-widest font-bold transition-all text-center flex-1"
            id="faq-cta-contact"
          >
            Contact Prop Masters
          </Link>
          {true && (
            <a 
              href={`https://wa.me/${cleanWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "61480852682")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 py-3 px-5 rounded-lg text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-1.5 flex-1"
              id="faq-cta-whatsapp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              WhatsApp Chat
            </a>
          )}
        </div>
      </div>

    </div>
  );
}
