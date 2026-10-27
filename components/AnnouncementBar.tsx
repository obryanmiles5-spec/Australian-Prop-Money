'use client';

import React from 'react';
import { MessageSquare, Truck, Phone } from 'lucide-react';

const ANNOUNCEMENTS = [
  { text: 'ABN: 50 181 247 291 | Australian Prop Money', icon: null },
  { text: 'Standard Shipping $25 | Express Shipping $60 Australia-Wide', icon: Truck },
  { text: 'Direct Calls & WhatsApp: +61 480 802 872', icon: Phone },
  { text: 'Follow us on TikTok @AustralianPropMoney', icon: null },
];

const TRIPLE_ANNOUNCEMENTS = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS, ...ANNOUNCEMENTS];

export default function AnnouncementBar() {
  return (
    <div className="bg-[#111111] text-white py-2 border-b border-gold/30 relative overflow-hidden select-none" id="announcement-bar">
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Scrolling wrapper */}
        <div className="flex w-max relative">
          <div className="flex gap-16 sm:gap-24 items-center animate-announcement-marquee hover-pause whitespace-nowrap">
            {TRIPLE_ANNOUNCEMENTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2 px-4">
                  {Icon && <Icon className="w-4 h-4 text-gold shrink-0" />}
                  <span className="text-zinc-100 uppercase tracking-[0.15em] text-[10px] sm:text-xs font-bold">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Embedded CSS for smooth infinite loop marquee & pausing on hover, matching the homepage marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes announcement-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-announcement-marquee {
          display: flex;
          animation: announcement-marquee 45s linear infinite;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-announcement-marquee {
            animation: none !important;
            overflow-x: auto;
            flex-wrap: nowrap;
          }
        }
      `}} />
    </div>
  );
}
