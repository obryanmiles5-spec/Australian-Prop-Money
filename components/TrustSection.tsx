'use client';

import React from 'react';
import { Truck, Film, PackageCheck, ShieldCheck } from 'lucide-react';

const TRUST_CARDS = [
  {
    title: 'Shipped from Australia',
    description: '100% stocked and dispatched from our local warehouse. Zero custom transit delays or unexpected international seizure risks.',
    icon: Truck,
    badge: '🇦🇺 Local Dispatch'
  },
  {
    title: 'Trusted by Film & TV',
    description: 'Our color-accurate matte prop bills have been featured in major Australian feature films, Netflix dramas, and television commercial spots.',
    icon: Film,
    badge: '🎬 Set Ready'
  },
  {
    title: 'Wholesale Orders Welcome',
    description: 'We offer discounted bulk tiers and bespoke hand-aging services for high-volume heist, ransom, or custom creative requests.',
    icon: PackageCheck,
    badge: '📦 Bulk Pricing'
  },
  {
    title: 'Secure Checkout',
    description: 'Flexible, low-profile payments via Direct EFT Bank Transfer, PayID Instant, or Cryptocurrencies with full end-to-end discrete shipping.',
    icon: ShieldCheck,
    badge: '🔒 Privacy Shield'
  }
];

export default function TrustSection() {
  return (
    <section className="bg-white py-20 border-y border-gray-100" id="trust-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block mb-4">
            The Industry Standard
          </span>
          <h2 className="text-3xl font-light text-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Why Production Crews Choose Australian Prop Money
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6 mb-4"></div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We deliver the highest quality, fully compliant replica currencies that help filmmakers maintain visual authenticity without violating Commonwealth regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_CARDS.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 p-8 hover:border-gold transition-all duration-300 flex flex-col justify-between group"
                id={`trust-card-${idx}`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-gold/5 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-[9px] uppercase tracking-wider text-gray-400 font-mono font-medium">
                      {card.badge}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base text-black font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
