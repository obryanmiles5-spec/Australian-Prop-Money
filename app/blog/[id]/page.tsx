import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ChevronLeft, ShieldCheck, Sparkles, Share2 } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/lib/products';
import JsonLd from '@/components/JsonLd';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const post = BLOG_POSTS.find((p) => p.id === id || p.id === decodedId);
  
  if (!post) {
    return {
      title: 'Blog Article Not Found | Australian Prop Money',
    };
  }

  const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');
  const articleUrl = `${cleanBase}/blog/${post.id}`;

  return {
    title: `${post.title} | Australian Prop Money Journal`,
    description: post.excerpt,
    keywords: [
      'australian prop money',
      'prop money australia',
      'fake australian money prop',
      post.category.toLowerCase(),
      'movie money australia',
      'RBA prop money rules',
      'film production props australia'
    ],
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: articleUrl,
      type: 'article',
      publishedTime: post.date,
      authors: ['Australian Prop Money Specialist'],
      images: [
        {
          url: post.image || 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const post = BLOG_POSTS.find((p) => p.id === id || p.id === decodedId);

  if (!post) {
    notFound();
  }

  const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');
  const articleUrl = `${cleanBase}/blog/${post.id}`;

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'image': post.image || `${cleanBase}/icon.png`,
    'datePublished': post.date,
    'author': {
      '@type': 'Organization',
      'name': 'Australian Prop Money Specialist'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Australian Prop Money',
      'url': cleanBase,
      'logo': {
        '@type': 'ImageObject',
        'url': `${cleanBase}/icon.png`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': articleUrl
    },
    'articleBody': post.content
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': cleanBase
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Journal & Compliance',
        'item': `${cleanBase}/blog`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': post.title,
        'item': articleUrl
      }
    ]
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <JsonLd schema={blogPostSchema} />
      <JsonLd schema={breadcrumbSchema} />
      
      <div className="bg-white min-h-screen py-10 sm:py-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Top Navigation & Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-xs font-mono uppercase tracking-wider text-gray-400">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-black transition-colors">Journal</Link></li>
              <li>/</li>
              <li className="text-black font-bold truncate max-w-[280px]" aria-current="page">{post.title}</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono uppercase tracking-widest bg-gold/10 text-gold-dark border border-gold/20 font-bold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans border-l-2 border-gold pl-4 py-1 italic">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="relative h-64 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden mb-10 border border-gray-100 shadow-md">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover" 
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Main Body Content */}
          <div className="prose prose-lg max-w-none text-gray-800 space-y-6 leading-relaxed font-sans text-base sm:text-lg">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-serif text-xl sm:text-2xl font-bold text-black mt-8 mb-4 border-b pb-2">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h2 key={index} className="font-serif text-xl sm:text-2xl font-bold text-black mt-8 mb-4 border-b pb-2">
                    {paragraph.replace('### ', '')}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Call to action card */}
          <div className="mt-12 p-6 sm:p-8 bg-zinc-950 text-white rounded-2xl border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-gold text-xs font-mono uppercase tracking-widest font-bold">
                <ShieldCheck className="w-4 h-4" /> RBA Compliant Studio Props
              </div>
              <h2 className="font-serif text-xl font-bold text-white">Need Prop Money for Your Next Production?</h2>
              <p className="text-xs text-gray-400 max-w-md">
                Order non-glare, camera-ready Australian prop banknotes ($10, $20, $50, $100) or bundle crates with fast nationwide dispatch.
              </p>
            </div>
            <Link 
              href="/shop" 
              className="bg-gold hover:bg-gold-light text-black font-bold uppercase tracking-widest text-xs px-6 py-3.5 rounded-xl transition-all duration-300 shrink-0 shadow-lg"
            >
              Shop Prop Cash
            </Link>
          </div>

          {/* Related Articles Section */}
          {otherPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-100 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-black">
                Related Articles & Production Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-gold hover:shadow-md transition-all flex flex-col justify-between p-4"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-serif font-bold text-sm text-black group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono mt-4 block">
                      {relatedPost.readTime}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </>
  );
}
