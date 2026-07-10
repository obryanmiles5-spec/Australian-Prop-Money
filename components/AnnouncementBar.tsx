'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, AlertCircle } from 'lucide-react';

const ANNOUNCEMENTS = [
  { text: 'Minimum Order AUD $150 for compliance standards', icon: AlertCircle },
  { text: 'Wholesale Orders Welcome — Bulk Pricing Available', icon: null },
  { text: 'Fast Express Shipping Australia-Wide', icon: null },
  { text: '30% OFF First Crypto Payment (Coupon: PROPMONEYAU)', icon: null },
  { text: 'WhatsApp Support available 24/7', icon: MessageSquare },
  { text: 'Follow us on TikTok @AustralianPropMoney', icon: null },
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % ANNOUNCEMENTS.length);
  };

  const CurrentIcon = ANNOUNCEMENTS[index].icon;

  return (
    <div className="bg-gold text-white py-2 px-4 relative overflow-hidden border-b border-gold-dark/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm font-medium tracking-wide">
        
        {/* Left Nav Button */}
        <button 
          onClick={handlePrev}
          className="text-white/80 hover:text-white transition-colors focus:outline-none"
          aria-label="Previous announcement"
          id="btn-announcement-prev"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scrolling/Changing Content */}
        <div className="flex-1 flex justify-center items-center gap-2 text-center select-none animate-fade-in px-4">
          {CurrentIcon && <CurrentIcon className="w-4 h-4 text-white shrink-0" />}
          <span className="text-white uppercase tracking-[0.15em] text-[10px] sm:text-xs font-bold">
            {ANNOUNCEMENTS[index].text}
          </span>
        </div>

        {/* Right Nav Button */}
        <button 
          onClick={handleNext}
          className="text-white/80 hover:text-white transition-colors focus:outline-none"
          aria-label="Next announcement"
          id="btn-announcement-next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}
