'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ShieldCheck, Pause, Play } from 'lucide-react';
import { Review } from '@/lib/products';

interface TrustpilotReviewsSliderProps {
  reviews: Review[];
}

export default function TrustpilotReviewsSlider({ reviews }: TrustpilotReviewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive items per view calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.max(1, reviews.length - cardsPerView + 1);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Trustpilot green star icon
  const TrustpilotStar = ({ filled = true }: { filled?: boolean }) => (
    <div className={`w-5 h-5 flex items-center justify-center rounded-[2px] ${filled ? 'bg-[#00b67a]' : 'bg-gray-200'}`}>
      <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </div>
  );

  return (
    <div 
      className="w-full relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Top Trustpilot Header Badge Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/80 border border-gray-200/80 rounded-2xl p-4 sm:p-5 mb-10">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-black font-extrabold text-lg tracking-tight">Excellent</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <TrustpilotStar key={i} filled={true} />
              ))}
            </div>
          </div>
          <div className="h-4 w-[1px] bg-gray-300 hidden sm:block"></div>
          <div className="text-xs sm:text-sm text-gray-700 font-medium">
            Rated <span className="font-bold text-black">4.9 / 5.0</span> based on <span className="font-bold text-black underline decoration-gold/60 decoration-2">150+ verified client reviews</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-[#00b67a] font-bold bg-[#00b67a]/10 px-3 py-1 rounded-full border border-[#00b67a]/20">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00b67a]" />
            <span>Trustpilot Verified Business</span>
          </div>

          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            title={isAutoPlaying ? 'Pause review slider' : 'Resume review slider'}
            className="p-1.5 text-gray-400 hover:text-black hover:bg-gray-200 rounded-lg transition-colors"
            aria-label={isAutoPlaying ? 'Pause autoplay' : 'Play autoplay'}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Slider Viewport Container */}
      <div 
        className="overflow-hidden relative select-none py-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="shrink-0 flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-gold/60 transition-all duration-300"
              style={{
                width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * (24 / cardsPerView)}px)`,
              }}
            >
              <div>
                {/* Trustpilot Star & Verified Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <TrustpilotStar key={i} filled={true} />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">{review.date}</span>
                </div>

                {/* Verified Order Tag */}
                <div className="flex items-center gap-1.5 text-[11px] text-[#00b67a] font-semibold mb-3">
                  <CheckCircle className="w-3 h-3 text-[#00b67a]" />
                  <span>{review.verifiedBadge || 'Verified Order'}</span>
                  {review.location && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 font-normal">{review.location}</span>
                    </>
                  )}
                </div>

                {/* Headline */}
                {review.headline && (
                  <h3 className="text-sm sm:text-[15px] font-bold text-black mb-2 leading-snug">
                    {review.headline}
                  </h3>
                )}

                {/* Comment */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light mb-6 line-clamp-4 italic">
                  &quot;{review.comment}&quot;
                </p>
              </div>

              {/* Author & Production Metadata */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <strong className="block text-black text-sm font-bold">{review.name}</strong>
                  <span className="text-gray-600 text-xs block truncate max-w-[210px] sm:max-w-[240px]">
                    {review.role} • <span className="text-zinc-800 font-medium">{review.production}</span>
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-100 border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-700 uppercase shrink-0">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls: Arrows and Dots */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600 font-medium">
            Showing <strong className="text-black">{currentIndex + 1}</strong> to <strong className="text-black">{Math.min(currentIndex + cardsPerView, reviews.length)}</strong> of <strong className="text-black">{reviews.length}</strong> client reviews
          </span>
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center gap-1">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className="p-2 min-w-[32px] min-h-[32px] flex items-center justify-center focus:outline-none"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-6 bg-gold' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`} />
            </button>
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-gray-200 bg-white hover:bg-black hover:text-white hover:border-black text-black flex items-center justify-center shadow-xs transition-all duration-200 focus:outline-none"
            aria-label="Previous client reviews"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-gray-200 bg-white hover:bg-black hover:text-white hover:border-black text-black flex items-center justify-center shadow-xs transition-all duration-200 focus:outline-none"
            aria-label="Next client reviews"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
