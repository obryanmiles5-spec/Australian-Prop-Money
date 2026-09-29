import { Metadata } from 'next';
import ClientPage from './ClientPage';
import JsonLd from '@/components/JsonLd';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Reviewing Prop Money Notes 20s, 50, and 100s | Australian Prop Money',
  description: 'Watch the 4K studio camera test reviewing realistic Australian prop money notes ($20, $50, and $100 notes) under direct macro lenses, demonstrating anti-glare matte coating and RBA legal compliance.',
  keywords: [
    'reviewing prop money notes',
    'australian prop money 20s 50s 100s',
    'prop money camera test',
    'australian prop money video',
    'fake australian money prop review'
  ],
  alternates: {
    canonical: `${cleanBaseUrl}/videos`,
  },
  openGraph: {
    title: 'Reviewing Prop Money Notes 20s, 50, and 100s | Australian Prop Money',
    description: 'Watch the 4K studio camera test reviewing realistic Australian prop money notes ($20, $50, and $100 notes) under direct macro lenses.',
    url: `${cleanBaseUrl}/videos`,
    type: 'website',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/d/1i3Rr-xJh9n_gvbAbtlwupWA6-GPB--GG',
        width: 1200,
        height: 630,
        alt: 'Reviewing Prop Money Notes 20s, 50, and 100s',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reviewing Prop Money Notes 20s, 50, and 100s | Australian Prop Money',
    description: 'Watch the 4K studio camera test reviewing realistic Australian prop money notes ($20, $50, and $100 notes).',
    images: ['https://lh3.googleusercontent.com/d/1i3Rr-xJh9n_gvbAbtlwupWA6-GPB--GG'],
  },
};

export default function Page() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': cleanBaseUrl
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Prop Money Video Showcase',
        'item': `${cleanBaseUrl}/videos`
      }
    ]
  };

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    'name': 'Reviewing Prop Money Notes 20s, 50, and 100s',
    'description': '4K macro camera test reviewing realistic Australian prop money notes ($20, $50, and $100 notes) under direct studio lighting.',
    'thumbnailUrl': ['https://lh3.googleusercontent.com/d/1i3Rr-xJh9n_gvbAbtlwupWA6-GPB--GG'],
    'uploadDate': '2026-07-20T10:00:00+10:00',
    'duration': 'PT1M30S',
    'contentUrl': `${cleanBaseUrl}/videos`,
    'embedUrl': `${cleanBaseUrl}/videos`,
    'publisher': {
      '@type': 'Organization',
      'name': 'Australian Prop Money',
      'logo': {
        '@type': 'ImageObject',
        'url': `${cleanBaseUrl}/icon.svg`
      }
    }
  };

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={videoSchema} />
      <ClientPage />
    </>
  );
}
