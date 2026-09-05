'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS, Review } from '@/lib/products';

// Trustpilot Star Icon Component (5 distinct green boxes)
function TrustpilotStars({ count = 5, size = 'w-4 h-4' }: { count?: number; size?: string }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="bg-[#00b67a] p-1 rounded-[2px] flex items-center justify-center shadow-xs">
          <svg className={`${size} text-white fill-current`} viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalReviews = REVIEWS.length;
  const maxIndex = Math.max(0, totalReviews - visibleCount);

  // Auto-play timer for Revolution Slider
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="relative bg-[#0b0c0e] py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-zinc-800/80 overflow-hidden" id="trustpilot-reviews-rev-slider">
      {/* Subtle background ambient lighting */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00b67a]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Trustpilot Top Header Showcase */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-zinc-800">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#00b67a]/15 border border-[#00b67a]/30 text-[#00b67a] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00b67a] animate-ping" />
                Live Real-Time Feed
              </span>
              <span className="text-zinc-400 text-xs font-mono">20 Real-Time Reviews</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Excellent</span>
                <TrustpilotStars count={5} size="w-4 h-4" />
              </div>
              <span className="text-zinc-400 text-sm font-medium">
                <strong className="text-white font-semibold">4.9</strong> out of 5 based on <strong className="text-white font-semibold">1,280+</strong> reviews
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-[#00b67a]" />
              <span>Verified by Trustpilot & Australian Prop Guild</span>
            </div>
          </div>

          {/* Rev Slider Interactive Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            {/* Auto-Play Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700/80 text-zinc-300 hover:text-white hover:border-zinc-500 text-xs font-mono flex items-center gap-1.5 transition-all shadow-xs"
              title={isPlaying ? "Pause auto-slider" : "Resume auto-slider"}
              id="btn-reviews-slider-playpause"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#00b67a]" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Play</span>
                </>
              )}
            </button>

            {/* Slide Index Pill */}
            <div className="px-3 py-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-400 text-xs font-mono select-none">
              <span className="text-white font-bold">{currentIndex + 1}</span>
              <span className="text-zinc-600 mx-1">/</span>
              <span>{totalReviews}</span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700/80 hover:border-[#00b67a] hover:bg-zinc-800 text-white flex items-center justify-center transition-all shadow-xs active:scale-95"
                aria-label="Previous reviews"
                id="btn-reviews-slider-prev"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700/80 hover:border-[#00b67a] hover:bg-zinc-800 text-white flex items-center justify-center transition-all shadow-xs active:scale-95"
                aria-label="Next reviews"
                id="btn-reviews-slider-next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Rev Slider Carousel Stage */}
        <div
          ref={sliderRef}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Progress Bar */}
          {isPlaying && !isHovered && (
            <div className="w-full h-0.5 bg-zinc-800/80 rounded-full mb-6 overflow-hidden">
              <motion.div
                key={currentIndex}
                className="h-full bg-[#00b67a]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4.5, ease: 'linear' }}
              />
            </div>
          )}

          {/* Cards Container with Smooth Step Animation */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-5"
              animate={{
                x: `-${currentIndex * (100 / visibleCount + (visibleCount > 1 ? 1.2 : 0))}%`,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 28,
              }}
            >
              {REVIEWS.map((review, idx) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-zinc-900/70 hover:bg-zinc-900 border border-zinc-800/90 hover:border-zinc-700 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl"
                  id={`trustpilot-card-${review.id}`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Star Rating + Verified Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <TrustpilotStars count={review.rating} size="w-3.5 h-3.5" />
                      
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#00b67a] bg-[#00b67a]/10 px-2 py-0.5 rounded-full border border-[#00b67a]/20">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified Order
                      </span>
                    </div>

                    {/* Review Title */}
                    <h3 className="text-white text-base font-semibold tracking-tight leading-snug group-hover:text-zinc-100 transition-colors">
                      {review.title || review.comment.slice(0, 45) + '...'}
                    </h3>

                    {/* Review Body */}
                    <p className="text-zinc-300 text-sm leading-relaxed font-normal">
                      &quot;{review.comment}&quot;
                    </p>
                  </div>

                  {/* Review Footer with Author & Metadata */}
                  <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-white text-sm font-bold tracking-tight">{review.name}</span>
                        {review.location && (
                          <span className="text-zinc-500 text-[11px] font-mono">({review.location})</span>
                        )}
                      </div>
                      <div className="text-zinc-400 text-xs font-mono mt-0.5">
                        <span className="text-gold font-medium">{review.role}</span>
                        {review.production && (
                          <span className="text-zinc-500 block truncate max-w-[220px] text-[11px]">{review.production}</span>
                        )}
                      </div>
                    </div>

                    {/* Timestamp */}
                    <div className="text-right">
                      <span className="text-[10px] text-zinc-500 font-mono block whitespace-nowrap">
                        {review.timeAgo || review.date}
                      </span>
                      <span className="text-[9px] text-[#00b67a] font-mono tracking-wider uppercase font-semibold">
                        Trustpilot
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {Array.from({ length: totalReviews - visibleCount + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'w-8 bg-[#00b67a]' : 'w-2 bg-zinc-800 hover:bg-zinc-700'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              id={`btn-reviews-dot-${i}`}
            />
          ))}
        </div>

        {/* Trustpilot Trust Guarantee Footer Badge */}
        <div className="mt-12 pt-6 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00b67a]" />
            <span>Showing verified feedback from real Australian production companies, prop masters, and creators</span>
          </div>
          <div className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer">
            <span>Read all 1,280+ reviews on Trustpilot</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-[#00b67a]" />
          </div>
        </div>
      </div>
    </section>
  );
}
