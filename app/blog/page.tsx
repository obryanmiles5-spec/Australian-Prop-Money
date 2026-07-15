'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, BookOpen, ChevronRight, X, Sparkles } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/lib/products';
import JsonLd from '@/components/JsonLd';


export default function BlogPage() {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const baseUrl = process.env.APP_URL || 'https://australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Australian Prop Money Journals & Set Compliance Guides',
    'description': 'Professional columns on film set design, lighting configurations, and Reserve Bank of Australia prop compliance.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Australian Prop Money'
    },
    'blogPost': BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': post.excerpt,
      'author': {
        '@type': 'Organization',
        'name': 'Australian Prop Money Specialist'
      },
      'url': `${cleanBase}/blog`
    }))
  };

  const activePostSchema = activeArticle ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': activeArticle.title,
    'description': activeArticle.excerpt,
    'articleBody': activeArticle.content,
    'author': {
      '@type': 'Organization',
      'name': 'Australian Prop Money Specialist'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Australian Prop Money'
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${cleanBase}/blog`
    }
  } : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 sm:space-y-24 animate-fade-in" id="blog-page-container">
      <JsonLd schema={blogSchema} />
      {activePostSchema && <JsonLd schema={activePostSchema} />}
      
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono uppercase tracking-widest text-xs font-semibold block">Production Journals</span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-black tracking-tight">
          Production Blog & Compliance Tutorials
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Read expert columns on film set decorating, lighting design for paper props, and regulatory updates from the Reserve Bank of Australia (RBA).
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            onClick={() => setActiveArticle(post)}
            id={`blog-card-${post.id}`}
          >
            <div>
              {/* Cover Graphic Card */}
              <div className="relative aspect-video bg-zinc-900 overflow-hidden flex items-center justify-center border-b border-zinc-800">
                {post.image ? (
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <BookOpen className="w-8 h-8 text-gold opacity-50 group-hover:scale-110 transition-transform duration-300" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 pointer-events-none" />
                <span className="absolute top-3 left-3 bg-black/85 backdrop-blur-xs text-gold text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded border border-gold/15 z-10">
                  {post.category}
                </span>
              </div>

              {/* Text content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-[10px] text-gray-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-black group-hover:text-gold transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Read Button */}
            <div className="p-6 pt-0">
              <button
                type="button"
                className="text-xs font-bold uppercase tracking-widest text-black hover:text-gold flex items-center gap-1.5 transition-all group-hover:translate-x-1"
                id={`btn-read-post-${post.id}`}
              >
                Read Complete Journal
                <ChevronRight className="w-4 h-4 text-gold" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Dynamic Article Reader modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6" id="article-reader-modal">
          {/* Backdrop */}
          <div 
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 bg-black/75 transition-opacity backdrop-blur-xs"
          />

          {/* Reader Card */}
          <div className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-gray-100 flex flex-col animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors focus:outline-none"
              aria-label="Close Article Reader"
              id="btn-close-reader"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Dark gradient header */}
            <div className="relative h-60 bg-zinc-950 shrink-0 p-6 flex flex-col justify-end border-b border-zinc-800 overflow-hidden">
              {activeArticle.image && (
                <Image 
                  src={activeArticle.image} 
                  alt={activeArticle.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[9px] uppercase tracking-widest font-bold text-gold font-mono bg-black/80 border border-gold/15 px-2 py-0.5 rounded-md inline-block w-fit mb-2">
                  {activeArticle.category}
                </span>
                <h2 className="font-serif font-bold text-lg sm:text-xl text-white leading-tight">
                  {activeArticle.title}
                </h2>
              </div>
            </div>

            {/* Content area */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[50vh] space-y-4">
              <div className="flex items-center gap-4 text-[10px] text-gray-400 font-mono border-b pb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  Published: {activeArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  Reading Time: {activeArticle.readTime}
                </span>
              </div>

              {/* Main Text */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {activeArticle.content}
              </p>

              {/* Set Compliance footer */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-[11px] text-gray-500 leading-relaxed mt-6">
                <strong>Disclaimer:</strong> The compliance articles and tutorials provided in our journal represent guidelines compiled in accordance with the Reserve Bank of Australia (RBA) regulations. Always consult your set safety manager or compliance team to ensure your project&apos;s security.
              </div>
            </div>

            {/* Modal action */}
            <div className="p-6 bg-gray-50 border-t flex justify-end shrink-0">
              <button
                onClick={() => setActiveArticle(null)}
                className="bg-black hover:bg-gold text-white hover:text-black px-6 py-2.5 rounded-xl text-xs uppercase tracking-widest font-bold transition-all"
                id="btn-reader-close-cta"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
