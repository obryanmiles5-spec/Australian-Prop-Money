'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const VIDEOS = [
  {
    id: 'vid-1',
    title: 'Prop Money on Set: The Ultimate Guide',
    duration: '05:24',
    thumbnail: 'images/categories/Movie-Prop-Money.jpg',
    description: 'Learn how our prop money looks under various cinematic lighting setups, including harsh daylight and moody studio lights.',
  },
  {
    id: 'vid-2',
    title: 'The Making of Australian Prop Money',
    duration: '03:45',
    thumbnail: 'images/categories/TV Props.jpg',
    description: 'Take a behind-the-scenes look at our production process, from design compliance to printing and cutting.',
  },
  {
    id: 'vid-3',
    title: 'Music Video Masterclass with Prop Money',
    duration: '07:12',
    thumbnail: 'images/categories/Photography Props.jpg',
    description: 'Watch how professional directors use our prop money in high-energy music video shoots and slow-motion money rain scenes.',
  },
  {
    id: 'vid-4',
    title: 'RBA Compliance & Legal Guidelines Explained',
    duration: '04:18',
    thumbnail: 'images/categories/Australian Notes.webp',
    description: 'A comprehensive guide on the legal requirements for using prop money in Australia and how our products meet all federal regulations.',
  },
];

export default function VideosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in" id="videos-page-container">
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono uppercase tracking-widest text-xs font-semibold block">Media Gallery</span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-black tracking-tight">
          Videos & Features
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
          See our prop money in action. Explore how industry professionals use our replicas in film, television, and photography.
        </p>
      </div>

      {/* Featured Video */}
      <div className="relative aspect-video sm:aspect-21/9 bg-black rounded-3xl overflow-hidden shadow-xl border border-gray-100 max-w-5xl mx-auto group cursor-pointer">
        <Image
          src={VIDEOS[0].thumbnail}
          alt={VIDEOS[0].title}
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-500">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 pointer-events-none">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-gold text-black font-mono font-bold uppercase tracking-widest text-[9px] px-2 py-1 rounded-sm">Featured</span>
            <span className="text-white/80 font-mono text-[10px]">{VIDEOS[0].duration}</span>
          </div>
          <h2 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-white max-w-xl">
            {VIDEOS[0].title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-2xl line-clamp-2">
            {VIDEOS[0].description}
          </p>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {VIDEOS.slice(1).map((video) => (
          <div key={video.id} className="group cursor-pointer flex flex-col">
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden mb-4 border border-gray-100 shadow-sm">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                referrerPolicy="no-referrer"
                className="object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white font-mono text-[9px] px-1.5 py-0.5 rounded">
                {video.duration}
              </div>
            </div>
            
            <h3 className="font-serif font-bold text-lg text-black leading-tight group-hover:text-gold transition-colors mb-2">
              {video.title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
              {video.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
