import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Sparkles, ShieldAlert, ArrowRight, Film, Star, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import JsonLd from '@/components/JsonLd';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return [
    { category: 'australian-notes' },
    { category: 'bundle-packs' },
    { category: 'accessories' }
  ];
}

const CATEGORY_META: Record<string, {
  title: string;
  description: string;
  h1: string;
  lead: string;
  keywords: string[];
}> = {
  'australian-notes': {
    title: 'Australian Notes Prop Money | Buy Realistic Old & New Series AUD Props',
    description: 'Buy RBA-compliant Australian prop money notes ($100, $50, $20, $10 AUD) in classic vintage and next-gen styles. Studio non-glare matte bond paper with express Australian dispatch.',
    h1: 'Australian Notes Prop Currency',
    lead: 'Australian Notes Prop Currency refers to camera-ready, high-fidelity replica polymer-look banknotes ($10, $20, $50, $100 AUD) engineered specifically for film, television, theatre, and photography sets. Sourced and printed in Australia on heavy-weight calendered matte bond paper, every note complies strictly with federal Reserve Bank of Australia (RBA) guidelines.',
    keywords: [
      'australian notes prop money',
      'prop 100 dollar note australia',
      'prop 50 dollar note australia',
      'prop 20 dollar note aud',
      'prop 10 dollar note australia',
      'new series 100 aud prop money',
      'old series australian prop money',
      'buy fake australian money props'
    ]
  },
  'bundle-packs': {
    title: 'Prop Money Bundle Packs & Production Stacks | Australian Prop Money',
    description: 'Explore wholesale prop money bundle packs, film crates, and production stacks designed for cinematic heist, vault, and drama scenes with fast nationwide shipping.',
    h1: 'Production Bundle Packs & Stacks',
    lead: 'Production Bundle Packs refer to pre-banded, high-volume prop currency stacks, producer kits, and industrial master crates curated for action-heavy heist, bank vault, and casino cinematic sequences. Available in 50-stack and 100-stack reserves matching federal reproduction guidelines.',
    keywords: [
      'prop money bundle packs',
      'prop money stacks australia',
      'film producer pack prop cash',
      'millionaire heist master crate',
      'wholesale prop money australia',
      'bulk fake money stacks'
    ]
  },
  'accessories': {
    title: 'Prop Money Accessories, Bags & Counters | Australian Prop Money',
    description: 'Essential production accessories including heavy-duty canvas money bags, heist duffle bags, prop money guns, and motorized cash counters for authentic on-screen realism.',
    h1: 'Cinematic Accessories & Stunt Props',
    lead: 'Cinematic Accessories encompass purpose-built production props including heavy-duty canvas dollar-sign bags, industrial heist duffle bags, aluminum presentation briefcases, motorized currency counters, and rapid-fire money pistols engineered to dress high-stakes commercial and film sets.',
    keywords: [
      'prop money accessories',
      'canvas money bag prop',
      'heist duffle bag prop',
      'silver aluminium briefcase prop',
      'prop money counting machine',
      'prop money gun australia'
    ]
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORY_META[category];
  
  if (!meta) {
    return {
      title: 'Category Not Found | Australian Prop Money'
    };
  }

  const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');
  const categoryUrl = `${cleanBase}/shop/${category}`;

  return {
    title: `${meta.title} | Australian Prop Money`,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: categoryUrl,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: categoryUrl,
      type: 'website',
      images: [
        {
          url: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000',
          width: 1200,
          height: 630,
          alt: meta.h1,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'],
    }
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const meta = CATEGORY_META[category];

  if (!meta) {
    notFound();
  }

  const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');
  const categoryUrl = `${cleanBase}/shop/${category}`;

  const categoryProducts = PRODUCTS.filter((p) => p.category === category);
  const currentCatObj = CATEGORIES.find((c) => c.id === category);

  // Breadcrumb Schema
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
        'name': 'Shop',
        'item': `${cleanBase}/shop`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': meta.h1,
        'item': categoryUrl
      }
    ]
  };

  // Collection & ItemList Schema
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': meta.h1,
    'description': meta.description,
    'url': categoryUrl,
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': categoryProducts.map((p, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': `${cleanBase}/product/${p.id}`,
        'name': p.name,
        'image': p.image
      }))
    }
  };

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={collectionSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in" id="category-page-container">
        
        {/* Breadcrumb Navigation Bar */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono uppercase tracking-wider text-gray-400">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/shop" className="hover:text-black transition-colors">Shop</Link>
            </li>
            <li>/</li>
            <li className="text-black font-bold" aria-current="page">
              {meta.h1}
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-gold/10 text-gold-dark px-3.5 py-1.5 rounded-full text-[10px] uppercase font-mono tracking-widest font-bold border border-gold/20">
            <Sparkles className="w-3.5 h-3.5" />
            Verified RBA Compliance Standards
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-black tracking-tight">
            {meta.h1}
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {meta.lead}
          </p>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-yellow-800 leading-relaxed max-w-5xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-gold shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Legality Disclaimer:</strong> All currency replicas displayed are strictly for artistic, cinematic, training, and promotional media. They incorporate prominent, un-erasable legal disclaimers stating &quot;NOT LEGAL TENDER&quot;, cannot be mistaken for genuine currency, and are printed on fine matte paper (not genuine polymer).
          </p>
        </div>

        {/* Category Navigation Bar (Clean URLs) */}
        <div className="max-w-5xl mx-auto bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto" id="clean-category-links">
            <Link
              href="/shop"
              className="px-4 py-2 rounded-xl text-xs uppercase tracking-widest font-bold transition-all bg-white hover:bg-gray-100 text-gray-600 border border-gray-200/60"
            >
              All Props
            </Link>
            {[
              { id: 'australian-notes', label: 'Australian Notes' },
              { id: 'bundle-packs', label: 'Bundle Packs' },
              { id: 'accessories', label: 'Accessories' }
            ].map((cat) => (
              <Link
                key={cat.id}
                href={`/shop/${cat.id}`}
                className={`px-4 py-2 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${
                  category === cat.id
                    ? 'bg-black text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200/60'
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          <span className="text-[11px] font-mono text-gray-400">
            {categoryProducts.length} Products Available
          </span>
        </div>

        {/* Product Grid */}
        <div className="space-y-4">
          <h2 className="sr-only">{meta.h1} Inventory</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="category-product-grid">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>

        {/* Cross Category Linking Hub */}
        <div className="pt-12 border-t border-gray-100 max-w-5xl mx-auto">
          <h2 className="text-xl font-serif font-light text-black mb-6 text-center">
            Explore Other Production Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORIES.filter((c) => c.id !== category).map((otherCat) => (
              <Link
                key={otherCat.id}
                href={`/shop/${otherCat.id}`}
                className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-gold hover:shadow-md transition-all flex items-center justify-between"
              >
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-black group-hover:text-gold transition-colors">
                    {otherCat.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 max-w-sm">
                    {otherCat.description}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 group-hover:text-gold group-hover:border-gold/30 transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
