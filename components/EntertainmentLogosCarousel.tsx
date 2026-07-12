'use client';

import React from 'react';

interface LogoItem {
  name: string;
  svg: React.ReactNode;
}

const LOGO_ITEMS: LogoItem[] = [
  {
    name: 'Netflix',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <path d="M46 4v32h7V15.5l14.5 19.5h6.5V4h-7v16.5L52.5 4H46z" />
        </g>
      </svg>
    )
  },
  {
    name: 'Prime Video',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <text x="24" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="15" letterSpacing="-0.5">prime</text>
          <text x="65" y="22" fontFamily="sans-serif" fontWeight="light" fontSize="15">video</text>
          <path d="M24 28c15 6 42 6 56 0c1.5-.6 2.5.5.8 1.5c-13.5 8-44 8-57.5 0c-1.7-1-.7-2.1.7-1.5z" />
          <path d="M78 26l3.5 4.5l-5.5-.5l2-4z" />
        </g>
      </svg>
    )
  },
  {
    name: 'Disney+',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <path d="M30 10c-5 0-10 4-10 10s5 10 10 10c4 0 7-3 7-7s-3-7-7-7zm0 11c-1.5 0-3-1-3-4s1.5-4 3-4s3 1 3 4s-1.5 4-3 4z" />
          <path d="M24 22c-2-2-4-2-6-1c-1.5.5-2 1.5-2.5 3c-.5-1.5-1-2.5-2.5-3c-2-1-4-1-6 1c1.5-2 3.5-3 5.5-3s3 1 4.5 2c1.5-1 2.5-2 4.5-2s4 1 5.5 3z" />
          <path d="M12 28C24 16 48 8 72 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M84 15h3v-3h2v3h3v2h-3v3h-2v-3h-3v-2z" />
          <text x="36" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="14" letterSpacing="-0.5">Disney</text>
        </g>
      </svg>
    )
  },
  {
    name: 'Apple TV+',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <path d="M36 22c0-3.3 2.7-4.9 2.8-5c-1.5-2.2-3.9-2.5-4.8-2.6-2.1-.2-4.1 1.2-5.2 1.2s-2.7-1.2-4.4-1.2c-2.3 0-4.4 1.3-5.6 3.4c-2.4 4.1-.6 10.2 1.7 13.5c1.1 1.6 2.4 3.4 4.2 3.3c1.7-.1 2.4-1.1 4.4-1.1s2.7 1.1 4.4 1c1.9 0 3-.1 4.1-1.7c1.3-1.9 1.8-3.7 1.9-3.8c-.1 0-3.6-1.4-3.6-5.5z" />
          <path d="M33 13.5c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.9.9-3.8 2c-.8.9-1.5 2.5-1.3 4c1.5.1 3-1.1 3.8-1.9z" />
          <text x="48" y="24" fontFamily="sans-serif" fontWeight="bold" fontSize="16" letterSpacing="0">tv+</text>
        </g>
      </svg>
    )
  },
  {
    name: 'Paramount+',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <path d="M30 30l10-18l10 18H30z" />
          <path d="M35 30l5-9l5 9H35z" opacity="0.5" />
          <circle cx="40" cy="22" r="12" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
          <text x="56" y="23" fontFamily="sans-serif" fontWeight="bold" fontSize="10" letterSpacing="0.5">Paramount+</text>
        </g>
      </svg>
    )
  },
  {
    name: 'HBO',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <path d="M25 10h6v8h8v-8h6v20h-6v-8h-8v8h-6V10z" />
          <path d="M48 10h10c3 0 5 1.5 5 4c0 2-1.5 3-3 3.5c2 .5 3.5 1.5 3.5 4c0 2.5-2 4.5-5.5 4.5H48V10zm6 4.5v3h3.5c.8 0 1.5-.4 1.5-1.5s-.7-1.5-1.5-1.5H54zm0 6v4h4c.8 0 1.5-.4 1.5-2s-.7-2-1.5-2H54z" />
          <path d="M78 20c0-6 4.5-10 10-10s10 4 10 10s-4.5 10-10 10s-10-4-10-10zm14.5 0c0-3-2-4.5-4.5-4.5s-4.5 1.5-4.5 4.5s2 4.5 4.5 4.5s4.5-1.5 4.5-4.5z" />
          <circle cx="56.5" cy="16" r="1.5" />
          <circle cx="56.5" cy="22.5" r="1.5" />
          <circle cx="88" cy="20" r="3" />
        </g>
      </svg>
    )
  },
  {
    name: 'Hulu',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <path d="M32 8h5v6.5h.1c.8-1.8 2.8-2.5 5.2-2.5c4 0 6.8 2 6.8 7v9h-5v-10c0-2-.9-2.8-2.3-2.8c-1.4 0-2.2.8-2.2 2.8v10h-5V8z" />
          <path d="M53 12h5v10c0 2 .8 2.8 2.2 2.8c1.4 0 2.3-.8 2.3-2.8V12h5v10c0 5-2.8 7-6.8 7c-2.4 0-4.4-.7-5.2-2.5h-.1v2.1h-4.8V12z" />
          <path d="M72 8h5v20h-5V8z" />
          <path d="M81 12h5v10c0 2 .8 2.8 2.2 2.8c1.4 0 2.3-.8 2.3-2.8V12h5v10c0 5-2.8 7-6.8 7c-2.4 0-4.4-.7-5.2-2.5h-.1v2.1H79V12z" />
        </g>
      </svg>
    )
  },
  {
    name: 'Peacock',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor" transform="translate(48, 6)">
          <path d="M12 18c.5 0 1-.5 1-1V12c0-1-.5-2-1.5-2H11c-.5 0-1 .5-1 1s.5 1 1 1h.5v6c0 .5.5 1 1 1z" />
          <path d="M12 8c1-3 3-5 5-5s2 1 1.5 3S15 9 12 10z" opacity="0.9" />
          <path d="M11 8c-1-3-3-5-5-5s-2 1-1.5 3s3.5 3 6.5 4z" opacity="0.9" />
          <path d="M13 9c2-2 5-3 6.5-1.5s.5 2.5-1.5 4s-4 1-5-2.5z" opacity="0.8" />
          <path d="M11 9C9 7 6 6 4.5 7.5S4 10 6 11.5s4 1 5-2.5z" opacity="0.8" />
          <path d="M13 11c3-1 6 0 7 1.5s-.5 3-3 2.5s-4-2-4-4z" opacity="0.7" />
          <path d="M11 11c-3-1-6 0-7 1.5s.5 3 3 2.5s4-2 4-4z" opacity="0.7" />
        </g>
      </svg>
    )
  },
  {
    name: 'ABC',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <circle cx="60" cy="20" r="16" />
          <text x="60" y="24" fontFamily="sans-serif" fontWeight="bold" fontSize="12" fill="white" textAnchor="middle">abc</text>
        </g>
      </svg>
    )
  },
  {
    name: 'NBC',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor" transform="translate(48, 6)">
          <path d="M12 20c1.5-2.5 3.5-5.5 3.5-8s-1.5-4-3.5-4s-3.5 1.5-3.5 4s2 5.5 3.5 8z" />
          <path d="M12 20c3.5-1.5 6.5-3.5 7.5-6s.5-4-1.5-5s-4.5 1.5-6 11z" opacity="0.8" />
          <path d="M12 20c-3.5-1.5-6.5-3.5-7.5-6s-.5-4 1.5-5s4.5 1.5 6 11z" opacity="0.8" />
          <path d="M12 20c4-1 8-1 9 1s-1 4-4 4s-5-1-5-6z" opacity="0.6" />
          <path d="M12 20c-4-1-8-1-9 1s1 4 4 4s5-1 5-6z" opacity="0.6" />
          <text x="12" y="30" fontFamily="sans-serif" fontWeight="bold" fontSize="8" letterSpacing="1" textAnchor="middle">NBC</text>
        </g>
      </svg>
    )
  },
  {
    name: 'CBS',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <path d="M60 10c-14 0-25 10-25 10s11 10 25 10s25-10 25-10s-11-10-25-10zm0 16.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5z" />
          <circle cx="60" cy="20" r="3.5" />
        </g>
      </svg>
    )
  },
  {
    name: 'FOX',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <path d="M35 12h10v4h-6v3h5v4h-5v5h-4V12z" />
          <path d="M48 12c0-4 10-4 10 0v8c0 4-10 4-10 0v-8zm4 0v8c0 1 2 1 2 0v-8c0-1-2-1-2 0z" />
          <path d="M62 12h4.5l3 4.5l3-4.5h4.5l-5 7.5l5.5 8h-4.5l-3.5-5l-3.5 5H61.5l5.5-8l-5-7.5z" />
        </g>
      </svg>
    )
  },
  {
    name: 'BBC',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <rect x="36" y="12" width="14" height="16" />
          <rect x="53" y="12" width="14" height="16" />
          <rect x="70" y="12" width="14" height="16" />
          <text x="43" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="white" textAnchor="middle">B</text>
          <text x="60" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="white" textAnchor="middle">B</text>
          <text x="77" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="white" textAnchor="middle">C</text>
        </g>
      </svg>
    )
  },
  {
    name: 'ITV',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <circle cx="45" cy="14" r="2" />
          <path d="M44 18h2v10h-2z" />
          <path d="M51 14h2v4h3v2h-3v6c0 1 .5 1.5 1.5 1.5h1.5v2h-2c-2 0-3-1-3-3v-6.5h-2v-2h2v-4z" />
          <path d="M59 18h2.5l2.5 7.5l2.5-7.5h2.5l-4 10h-2l-4-10z" />
        </g>
      </svg>
    )
  },
  {
    name: 'Channel 4',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <path d="M50 10h4v12h4v4h-4v4h-4v-4h-8v-4l8-12zm0 12v-6.5L45.5 22H50z" />
          <text x="62" y="27" fontFamily="sans-serif" fontWeight="bold" fontSize="10" letterSpacing="0.5">Channel 4</text>
        </g>
      </svg>
    )
  },
  {
    name: 'BET',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <text x="36" y="26" fontFamily="sans-serif" fontWeight="900" fontSize="16">BET</text>
          <path d="M74 12l2 4.5l4.5.5l-3.5 3l1 4.5l-4-2.5l-4 2.5l1-4.5l-3.5-3l4.5-.5z" />
        </g>
      </svg>
    )
  },
  {
    name: 'Warner Bros.',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <path d="M60 8c12 0 14 12 14 16c0 6-6 11-14 13c-8-2-14-7-14-13c0-4 2-16 14-16zm0 2c-9 0-11 10-11 14c0 4.5 5.5 8.5 11 10c5.5-1.5 11-5.5 11-10c0-4-2-14-11-14z" />
          <text x="60" y="27" fontFamily="sans-serif" fontWeight="900" fontSize="11" textAnchor="middle" letterSpacing="-1">WB</text>
        </g>
      </svg>
    )
  },
  {
    name: 'Universal Pictures',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <ellipse cx="60" cy="20" rx="20" ry="16" fill="none" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="60" cy="20" rx="14" ry="16" fill="none" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="60" cy="20" rx="8" ry="16" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="40" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="1" />
          <rect x="36" y="15" width="48" height="10" fill="white" />
          <text x="60" y="23" fontFamily="sans-serif" fontWeight="900" fontSize="7" textAnchor="middle" letterSpacing="1">UNIVERSAL</text>
        </g>
      </svg>
    )
  },
  {
    name: 'Sony Pictures',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <text x="60" y="25" fontFamily="Georgia, serif" fontWeight="bold" fontSize="18" letterSpacing="4" textAnchor="middle">SONY</text>
        </g>
      </svg>
    )
  },
  {
    name: 'Lionsgate',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <text x="60" y="24" fontFamily="sans-serif" fontWeight="light" fontSize="13" letterSpacing="3" textAnchor="middle">LIONSGATE</text>
        </g>
      </svg>
    )
  },
  {
    name: 'A24',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <text x="60" y="27" fontFamily="sans-serif" fontWeight="900" fontSize="22" letterSpacing="-1.5" textAnchor="middle">A24</text>
        </g>
      </svg>
    )
  },
  {
    name: 'Village Roadshow',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <path d="M42 12h6v10c0 4 3 6 6 6s6-2 6-6V12h6v10c0 8-5 12-12 12s-12-4-12-12V12z" />
          <path d="M68 12h10c4 0 6 2 6 5s-2 5-6 5h-4l5 6h-6.5l-4.5-6h-1v6H68V12zm6 4v3h4c1 0 1.5-.5 1.5-1.5s-.5-1.5-1.5-1.5h-4z" />
        </g>
      </svg>
    )
  },
  {
    name: 'Screen Australia',
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-full" aria-hidden="true">
        <g fill="currentColor">
          <polygon points="35,14 42,10 49,15 45,26 38,22" stroke="currentColor" strokeWidth="1" fill="none" />
          <polygon points="46,14 55,8 60,16 52,24" stroke="currentColor" strokeWidth="1" fill="none" />
          <text x="64" y="24" fontFamily="sans-serif" fontWeight="bold" fontSize="9" letterSpacing="0.5">SCREEN AUSTRALIA</text>
        </g>
      </svg>
    )
  }
];

// Duplicate list to achieve infinite seamless marquee loop
const DOUBLE_LOGOS = [...LOGO_ITEMS, ...LOGO_ITEMS];

export default function EntertainmentLogosCarousel() {
  return (
    <section className="bg-white py-16 sm:py-20 border-y border-gray-100 overflow-hidden" id="trusted-entertainment-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block mb-4">
            Trusted Across Modern Entertainment
          </span>
          <h2 className="text-3xl font-light text-black tracking-tight leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            A Grade Standards for Cinematic Production
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6 mb-4"></div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Perfect for film productions, television, commercials, music videos, photography, streaming content and creative projects.
          </p>
        </div>

        {/* Disclaimer Above Slider */}
        <div className="text-center mb-8">
          <span className="text-[10px] sm:text-[11px] text-gray-400 tracking-wider uppercase font-mono bg-gray-50/50 border border-gray-100/50 px-4 py-2 rounded-full">
            Suitable for productions similar to those seen across today&apos;s leading entertainment platforms.
          </span>
        </div>

        {/* Continuous Logo Scrolling Carousel Container */}
        <div className="relative w-full overflow-hidden bg-gray-50/70 border border-gray-100 rounded-2xl p-8 sm:p-10 select-none">
          {/* Subtle fade overlay on edges to blend in desktop view */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

          {/* Scrolling wrapper */}
          <div className="flex w-max relative">
            <div className="flex gap-12 sm:gap-16 items-center animate-marquee-smooth hover-pause">
              {DOUBLE_LOGOS.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="group relative flex items-center justify-center w-28 sm:w-36 md:w-40 lg:w-44 h-12 text-gray-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                  title={logo.name}
                  id={`carousel-logo-${index}`}
                >
                  <div className="w-full h-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {logo.svg}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Embedded CSS for smooth infinite loop marquee & pausing on hover */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-smooth {
          display: flex;
          animation: marquee 45s linear infinite;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-smooth {
            animation: none !important;
            overflow-x: auto;
            flex-wrap: wrap;
            justify-content: center;
          }
          .hover-pause:hover {
            animation-play-state: running;
          }
        }
      `}} />
    </section>
  );
}
