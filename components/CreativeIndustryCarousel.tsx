'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Film, Tv, Camera, 
  Sparkles, Smartphone, Video, Layers, MonitorPlay 
} from 'lucide-react';

interface CarouselItem {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  icon: React.ComponentType<any>;
}

import { getImageUrl } from '@/lib/imagekit';

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    title: 'Film Production',
    category: 'CINEMA & FEATURE FILMS',
    description: 'Supplying legal, color-calibrated and non-glare prop cash stacks for cinematic productions, independent dramas, and blockbusters.',
    imageUrl: getImageUrl('images/categories/Movie-Prop-Money.jpg'),
    icon: Film
  },
  {
    title: 'Television',
    category: 'BROADCAST & SERIES',
    description: 'High-contrast replica notes designed to resolve beautifully under television studio lighting and digital TV broadcast sensors.',
    imageUrl: getImageUrl('images/categories/TV Props.jpg'),
    icon: Tv
  },
  {
    title: 'Photography',
    category: 'EDITORIAL & FLATLAY',
    description: 'Ultra-matte, reflection-free individual bills and pre-fanned prop bundles for luxury, fashion, and commercial product photography.',
    imageUrl: getImageUrl('images/categories/Photography Props.jpg'),
    icon: Camera
  },
  {
    title: 'Theatre',
    category: 'STAGE & LIVE PERFORMANCE',
    description: 'Pre-softened, cotton-bond replica notes offering durable handling, clear stage acoustics, and zero spotlight blinding glare.',
    imageUrl: getImageUrl('images/categories/Australian Notes.webp'),
    icon: Layers
  },
  {
    title: 'Content Creation',
    category: 'SOCIAL MEDIA & WEB',
    description: 'High-quality props customized for digital content creators, online videos, and viral social media branding campaigns.',
    imageUrl: getImageUrl('images/categories/Bundle Packs.jpg'),
    icon: Smartphone
  },
  {
    title: 'Video Production',
    category: 'MUSIC CLIPS & PROMO',
    description: 'Specially engineered loose floating banknotes and weathered currency stacks designed for music videos and dynamic camera pans.',
    imageUrl: getImageUrl('images/categories/Training Currency.jpg'),
    icon: Video
  },
  {
    title: 'Commercial Advertising',
    category: 'BRANDS & MARKETING',
    description: 'Premium, photorealistic replica currency stacks styled for commercial ads, high-end promotional shoots, and billboard imagery.',
    imageUrl: getImageUrl('images/categories/Australian Notes.webp'),
    icon: Sparkles
  }
];

export default function CreativeIndustryCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // width of card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gray-50 py-20 border-y border-gray-100 overflow-hidden" id="creative-industry-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header with controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block">
              Supporting Australia&apos;s Creative Industry
            </span>
            <h2 className="text-3xl font-light text-black tracking-tight leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Empowering Filmmakers, Artists & Designers
            </h2>
            <div className="w-12 h-[1px] bg-gold mt-4 mb-2"></div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl leading-relaxed">
              From theatrical stages to international movie sets, we provide compliant, camera-optimized prop currency that brings artistic visions to life.
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0 self-end">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:border-gold hover:bg-gold/5 transition-all duration-300 flex items-center justify-center text-gray-500 hover:text-black focus:outline-none"
              aria-label="Scroll left"
              id="carousel-btn-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:border-gold hover:bg-gold/5 transition-all duration-300 flex items-center justify-center text-gray-500 hover:text-black focus:outline-none"
              aria-label="Scroll right"
              id="carousel-btn-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          id="creative-carousel-container"
        >
          {CAROUSEL_ITEMS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="w-[290px] sm:w-[320px] shrink-0 bg-white border border-gray-100 shadow-xs hover:border-gold/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group snap-start relative overflow-hidden rounded-xl"
                id={`carousel-card-${idx}`}
              >
                {/* Image Section */}
                <div className="relative h-44 w-full bg-gray-100 overflow-hidden shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  {/* Premium overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-gold font-mono block">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gold/5 border border-gold/10 flex items-center justify-center shrink-0">
                        <IconComponent className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <h3 className="text-sm font-bold text-black font-serif">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-sans font-light">
                      {item.description}
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
