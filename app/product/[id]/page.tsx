import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PRODUCTS, getCategoryLabel } from '@/lib/products';
import ProductDetailClient from './ProductDetailClient';
import JsonLd from '@/components/JsonLd';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const product = PRODUCTS.find((p) => p.id === id || p.id === decodedId);
  if (!product) {
    return {
      title: 'Product Not Found | Australian Prop Money',
    };
  }

  const baseUrl = process.env.APP_URL || 'https://australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');
  const productUrl = `${cleanBase}/product/${product.id}`;

  return {
    title: `${product.seoTitle} | Australian Prop Money`,
    description: product.metaDescription,
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.metaDescription,
      url: productUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: product.seoTitle,
      description: product.metaDescription,
    }
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const product = PRODUCTS.find((p) => p.id === id || p.id === decodedId);

  if (!product) {
    notFound();
  }

  const baseUrl = process.env.APP_URL || 'https://australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');

  // Dynamic Product JSON-LD Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'description': product.longDescription,
    'sku': product.sku,
    'mpn': product.sku,
    'brand': {
      '@type': 'Brand',
      'name': 'Australian Prop Money'
    },
    'offers': {
      '@type': 'Offer',
      'url': `${cleanBase}/product/${product.id}`,
      'priceCurrency': 'AUD',
      'price': product.price.toString(),
      'itemCondition': 'https://schema.org/NewCondition',
      'availability': (product.stockStatus === 'in-stock' || product.stockStatus === 'low-stock') ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      'seller': {
        '@type': 'Organization',
        'name': 'Australian Prop Money'
      }
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '18'
    }
  };

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
        'name': getCategoryLabel(product.category),
        'item': `${cleanBase}/shop?category=${product.category}`
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': product.name,
        'item': `${cleanBase}/product/${product.id}`
      }
    ]
  };

  return (
    <>
      <JsonLd schema={productSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <ProductDetailClient productId={id} />
    </>
  );
}
