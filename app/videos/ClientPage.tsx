'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Play, 
  ShieldCheck, 
  Lock, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Camera, 
  Film, 
  Layers, 
  Maximize2, 
  Minimize2,
  AlertCircle,
  Volume2,
  Sliders,
  ChevronRight
} from 'lucide-react';

export default function VideosPage() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isTheatreMode, setIsTheatreMode] = useState<boolean>(false);
  const [showRightClickNotice, setShowRightClickNotice] = useState<boolean>(false);
  const rightClickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Video Data Specification
  const videoData = {
    title: 'Reviewing Prop Money Notes 20s, 50, and 100s',
    subtitle: '4K Studio Camera Test: Australian Polymer Prop Notes Under Direct Lenses',
    duration: '04:15',
    resolution: '4K Ultra HD (3840 x 2160)',
    fps: '60 FPS',
    lens: 'ARRI Master Macro 100mm f/2.0',
    videoUrl: 'https://drive.google.com/file/d/1i3Rr-xJh9n_gvbAbtlwupWA6-GPB--GG/preview',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1i3Rr-xJh9n_gvbAbtlwupWA6-GPB--GG',
    description: 'High-definition 4K camera testing and hands-on review of our high-grade Australian replica polymer bills ($20, $50, and $100 notes). Demonstrates non-glare matte finish, authentic thickness, realistic hand-feel, and anti-reflective coating under intense studio lighting rigs.'
  };

  // Block right click menu and display security warning
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    if (rightClickTimeoutRef.current) {
      clearTimeout(rightClickTimeoutRef.current);
    }
    setShowRightClickNotice(true);
    rightClickTimeoutRef.current = setTimeout(() => {
      setShowRightClickNotice(false);
    }, 3200);
  };

  // Prevent keyboard shortcuts for saving / printing video
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        setShowRightClickNotice(true);
        setTimeout(() => setShowRightClickNotice(false), 3000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#FBFBFA] py-10 sm:py-16 text-black select-none" 
      id="videos-page-container"
      onContextMenu={handleContextMenu}
    >
      {/* Protected Right-Click / Download Notice Toast */}
      {showRightClickNotice && (
        <div 
          role="alert"
          aria-live="assertive"
          className="fixed bottom-6 right-6 z-50 bg-black/95 text-white border border-gold/60 p-4 rounded-2xl shadow-2xl backdrop-blur-md max-w-sm flex items-start gap-3 animate-fade-in"
        >
          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
            <Lock className="w-4 h-4 text-gold" />
          </div>
          <div className="space-y-1 text-left">
            <h4 className="text-xs font-bold text-gold uppercase tracking-wider">Protected Studio Media</h4>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              Right-click menu, video downloads, and stream copying are locked to preserve intellectual property and production compliance.
            </p>
          </div>
        </div>
      )}

      <div className={`mx-auto px-4 sm:px-6 lg:px-8 space-y-10 transition-all duration-500 ${isTheatreMode ? 'max-w-[96vw]' : 'max-w-6xl'}`}>
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-gold bg-black px-3 py-1 rounded">
                Official Studio Camera Review
              </span>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/90 border border-emerald-300/80 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-emerald-700" />
                Protected Master Video • Deletion Locked
              </span>
              <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
                <Film className="w-3.5 h-3.5 text-gold" />
                4K Ultra HD
              </span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Reviewing Prop Money Notes 20s, 50, and 100s
            </h1>
            
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              Direct lens macro evaluation demonstrating the anti-glare matte texture, Reserve Bank legal compliance markings, and true-to-life color reproduction under studio continuous lighting.
            </p>
          </div>

          {/* Right Action: Theatre Toggle & Security Status */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsTheatreMode(!isTheatreMode)}
              className="inline-flex items-center gap-2 bg-white hover:bg-black hover:text-white text-black border border-gray-300 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer"
              title={isTheatreMode ? 'Exit theatre view' : 'Enter theatre wide view'}
            >
              {isTheatreMode ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-gold" />
                  <span>Standard View</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-gold" />
                  <span>Theatre Mode</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* SINGLE PROTECTED VIDEO PLAYER COMPONENT */}
        <div 
          className="relative bg-black rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 group"
          id="main-video-player-component"
        >
          {/* Top Security & Format Pill Bar */}
          <div className="bg-zinc-950/90 border-b border-zinc-800/80 px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-300 font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-white font-bold text-[11px] uppercase tracking-wider">
                Reviewing Prop Money Notes 20s, 50, and 100s
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-zinc-400">
              <span className="bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded text-gold font-bold">
                {videoData.duration}
              </span>
              <span className="hidden sm:inline-block">•</span>
              <span className="hidden sm:inline-block">No-Download Stream</span>
              <span className="hidden sm:inline-block">•</span>
              <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Anti-Piracy Guard Active
              </span>
            </div>
          </div>

          {/* Video Player Frame Container */}
          <div className="relative aspect-video w-full bg-zinc-950 flex items-center justify-center overflow-hidden">
            {isPlaying ? (
              <iframe
                src={videoData.videoUrl}
                title={videoData.title}
                className="w-full h-full border-0 select-none pointer-events-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              /* Interactive Pre-Play Poster with 4K Lens Overlay */
              <div 
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full cursor-pointer group/poster flex items-center justify-center"
              >
                <Image
                  src={videoData.thumbnailUrl}
                  alt={videoData.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  referrerPolicy="no-referrer"
                  className="object-cover object-center opacity-75 group-hover/poster:scale-105 group-hover/poster:opacity-90 transition-all duration-700 ease-out"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 pointer-events-none" />

                {/* Center High-End Play Button */}
                <div className="relative z-20 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/60 shadow-2xl group-hover/poster:scale-115 group-hover/poster:bg-gold group-hover/poster:border-gold transition-all duration-500">
                    <Play className="w-9 h-9 sm:w-10 sm:h-10 text-white fill-white group-hover/poster:text-black group-hover/poster:fill-black ml-1.5 transition-colors" />
                  </div>
                  <span className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 group-hover/poster:border-gold transition-colors">
                    Click to Play 4K Camera Review
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between pointer-events-none z-10">
                  <div className="space-y-1.5 max-w-2xl">
                    <span className="bg-gold text-black font-mono font-bold uppercase tracking-widest text-[10px] px-2.5 py-0.5 rounded">
                      Featured Review
                    </span>
                    <h2 className="font-serif text-lg sm:text-2xl text-white font-normal leading-snug drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
                      {videoData.title}
                    </h2>
                    <p className="text-xs text-zinc-300 font-light line-clamp-1">
                      {videoData.subtitle}
                    </p>
                  </div>

                  <div className="hidden sm:flex flex-col items-end gap-1 text-[11px] font-mono text-zinc-300">
                    <span className="bg-black/70 px-2.5 py-1 rounded border border-white/10">
                      Duration: {videoData.duration}
                    </span>
                    <span className="text-gold font-bold">4K 60FPS Test</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Security & Compliance Bar */}
          <div className="bg-[#121212] border-t border-zinc-800 p-5 sm:p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>{videoData.title}</span>
                <span className="text-[10px] font-mono bg-zinc-800 text-gold px-2 py-0.5 rounded border border-gold/30">
                  Locked Studio Asset
                </span>
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {videoData.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <Link
                href="/shop"
                className="bg-gold hover:bg-white text-black font-bold uppercase tracking-wider text-xs px-5 py-2.5 rounded-xl transition-colors shadow-md flex items-center gap-2"
              >
                <span>Order Prop Notes</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4K PRODUCTION SPECS & LEGAL HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Camera Test Rig */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs space-y-4 hover:border-gold/60 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
              <Camera className="w-5 h-5 text-black" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-black uppercase tracking-wider">4K Studio Camera Test</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Recorded using anamorphic and macro cinema glass at f/2.0 to demonstrate optical sharpness, zero moiré, and anti-glare matte coating under continuous key lights.
              </p>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center gap-2 text-[11px] font-mono text-gray-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00b67a]" />
              <span>Tested on $20, $50 & $100 Stacks</span>
            </div>
          </div>

          {/* Card 2: Note Comparison */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs space-y-4 hover:border-gold/60 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
              <Layers className="w-5 h-5 text-black" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-black uppercase tracking-wider">20s, 50s & 100s Comparison</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Comprehensive overview comparing the vibrant red ($20), gold/yellow ($50), and green ($100) color balance against real broadcast camera gamuts.
              </p>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center gap-2 text-[11px] font-mono text-gray-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00b67a]" />
              <span>Full Double-Sided Realism</span>
            </div>
          </div>

          {/* Card 3: Security & Non-Deletable Protection */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs space-y-4 hover:border-gold/60 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
              <Lock className="w-5 h-5 text-black" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-black uppercase tracking-wider">Protected Stream Security</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                This media is permanently locked and protected against deletion or unauthorized downloading. Right-click context menus and direct download captures are blocked.
              </p>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center gap-2 text-[11px] font-mono text-gray-500">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>Permanent Studio Showcase</span>
            </div>
          </div>

        </div>

        {/* Bottom Contact & Quick Order Bar */}
        <div className="bg-black text-white rounded-3xl p-8 sm:p-10 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gold text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Need Custom Stacks for Your Production?</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Ready-to-Shoot Australian Prop Stacks Delivered Fast
            </h3>
            <p className="text-xs text-zinc-400 font-light max-w-xl">
              Express overnight delivery to film sets, photo studios, and music video locations across Sydney, Melbourne, Brisbane, and Australia-wide.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/shop"
              className="bg-gold hover:bg-white text-black px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors shadow-lg"
            >
              Browse All Notes
            </Link>
            <Link
              href="/contact"
              className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors"
            >
              Contact Art Dept
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
