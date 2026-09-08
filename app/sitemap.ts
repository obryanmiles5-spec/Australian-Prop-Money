import type { MetadataRoute } from 'next';
import { PRODUCTS, BLOG_POSTS } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');
  const now = new Date();

  // Primary static routes across the website
  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  }> = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/shop', priority: 0.9, changeFrequency: 'daily' },
    { path: '/wholesale', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/blog', priority: 0.85, changeFrequency: 'daily' },
    { path: '/videos', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/faq', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/shipping-policy', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/refund-policy', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${cleanBase}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Dynamic product paths with rich metadata
  const productEntries: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${cleanBase}/product/${product.id}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.85,
    ...(product.image ? { images: [product.image] } : {}),
  }));

  // Dynamic blog articles
  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${cleanBase}/blog/${post.id}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: 'weekly',
    priority: 0.8,
    ...(post.image ? { images: [post.image] } : {}),
  }));

  return [...staticEntries, ...productEntries, ...blogEntries];
}

