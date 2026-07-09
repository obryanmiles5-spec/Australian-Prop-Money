'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, HelpCircle, Eye, Scale, Users, Award, Landmark } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 sm:space-y-24 animate-fade-in" id="about-page-container">
      
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono uppercase tracking-widest text-xs font-semibold block">Behind the Camera</span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-black tracking-tight">
          About Australian Prop Money
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Crafting the highest quality, color-calibrated replica currencies for television, film, theatre, and training across Oceania while prioritizing federal compliance.
        </p>
      </div>

      {/* Cinematic Image banner */}
      <div className="relative aspect-21/9 bg-black rounded-3xl overflow-hidden shadow-xl border border-gray-100 max-w-5xl mx-auto">
        <Image
          src="https://picsum.photos/seed/production/1200/500"
          alt="Behind the scenes on a film set with cameras"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10">
          <span className="text-gold font-mono uppercase tracking-widest text-[10px] sm:text-xs font-bold">Industry Standard Props</span>
          <h2 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-white max-w-xl mt-1">
            Engineered for high-definition digital lenses and 4K cameras.
          </h2>
        </div>
      </div>

      {/* Two Column Section: Story and Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
        <div className="space-y-4">
          <span className="text-gold font-mono uppercase tracking-widest text-xs font-semibold block">Our Story</span>
          <h2 className="font-serif font-bold text-2xl text-black">A Passion for Screen Realism</h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Founded in Sydney in 2021 by a team of veteran cinematic prop masters, Australian Prop Money was born out of frustration with poor-quality imports. Standard replica notes often look reflective under direct studio lighting or lack color accuracy, resulting in artificial-looking frames in 4K resolution.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            We spent two years testing and calibrating paper weights, non-glossy binders, and organic matte inks to replicate the precise organic feel and camera-response of genuine bills without violating currency guidelines. Today, our products are the first choice for independent creators and major production studios alike.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { count: '100+', label: 'Film Productions Equipped', icon: Award },
            { count: '150k+', label: 'Replica Notes Printed', icon: Eye },
            { count: '100%', label: 'RBA Compliance Rating', icon: ShieldCheck },
            { count: '24h', label: 'Urgent Dispatch Setup', icon: Users },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center space-y-1">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mx-auto mb-2 border border-gold/15">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <span className="font-serif font-bold text-xl sm:text-2xl text-black block">{stat.count}</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block leading-snug">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep Regulatory & Legal compliance section */}
      <section className="bg-gray-50 py-16 border-y border-gray-100" id="compliance-deep-dive">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Landmark className="w-10 h-10 text-gold mx-auto" />
            <span className="text-gold font-mono uppercase tracking-widest text-xs font-semibold block">Regulatory Compliance</span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-black">
              Reserve Bank of Australia (RBA) Guidelines
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              We operate strictly within the legal frameworks dictated by the <strong>Crimes (Currency) Act 1981</strong> and federal guidelines. To protect your production from legal disruptions, every note we produce is designed according to the following strict rules:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-black font-serif font-bold text-sm uppercase">
                <Scale className="w-5 h-5 text-gold shrink-0" />
                <span>RBA Design Specifications</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-500 leading-relaxed">
                <li>
                  <strong>• Scale Alteration:</strong> Our replica notes conform strictly to size scale mandates, ensuring that they can never be fed into coin-operated machines or ATM deposit systems.
                </li>
                <li>
                  <strong>• Material Discrepancy:</strong> True Australian notes are printed on plastic polymer film. Our props are strictly printed on <strong>fine heavyweight matte bond paper</strong>. The texture and thickness are immediately noticeable to the human touch.
                </li>
                <li>
                  <strong>• Clear Compliance Markings:</strong> Every single double-sided note features prominent, non-erasable, bold lettering on both faces saying <strong>&quot;PROP ONLY — NOT LEGAL TENDER&quot;</strong> as required by law.
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-black font-serif font-bold text-sm uppercase">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                <span>On-Set Safety Best Practices</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                We advise production supervisors and prop masters to adopt the following security best practices during high-volume shoots:
              </p>
              <ul className="space-y-2 text-xs text-gray-500 leading-relaxed">
                <li>
                  <strong>1. Appoint a Prop Supervisor:</strong> Nominate a crew member responsible for securing and counting all prop money before and after every scene.
                </li>
                <li>
                  <strong>2. Avoid Public Display:</strong> Never leave prop notes visible on set in public or unsecured outdoor areas where passersby could mistake them for legal tender.
                </li>
                <li>
                  <strong>3. Controlled Storage:</strong> Store all prop briefcases, bundles, and loose bills in secure cardboard boxes or cases off-camera.
                </li>
              </ul>
            </div>

          </div>

          <div className="bg-yellow-50 p-5 rounded-2xl border border-yellow-200 text-xs text-yellow-800 leading-relaxed max-w-3xl mx-auto italic text-center font-serif">
            &quot;We believe that cinematic art should never compromise on safety. By maintaining total transparency with regulatory bodies, Australian Prop Money helps local creators build award-winning visuals with absolute security.&quot;
          </div>

        </div>
      </section>

    </div>
  );
}
