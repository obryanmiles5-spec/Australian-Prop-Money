import { Metadata } from 'next';
import ClientPage from './ClientPage';
import JsonLd from '@/components/JsonLd';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Australian Prop Money | #1 Legal Prop Money Australia & Fake Australian Money Props',
  description: 'Buy realistic Australian prop money, new series 100 AUD prop money, prop 50 & 20 dollar notes, full print and blank filler stacks, and briefcase bundles. 100% compliant with Reserve Bank of Australia (RBA) guidelines. Fast next day delivery in Sydney, Melbourne, Brisbane & nationwide with Afterpay.',
  keywords: [
    'is prop money legal in australia',
    'rba prop money reproduction rules',
    'reserve bank of australia prop money guidelines',
    'counterfeit vs prop money australia',
    'where to buy prop money in australia',
    'legal prop money for film australia',
    'how to get prop money for videos',
    'movie prop money australia',
    'film production prop money sydney',
    'theatre prop money melbourne',
    'prop cash for music videos australia',
    'cashier training prop money australia',
    'photography prop money aud',
    'tv production money props brisbane',
    'prank prop money australia',
    'aud money gun prop cash',
    'prop 100 dollar note australia',
    'prop 50 dollar note australia',
    'prop 20 dollar note aud',
    'australian 100 dollar prop notes',
    'new series 100 aud prop money',
    'prop money 10000 stack aud',
    'prop money briefcase bundle australia',
    'full print prop money aud',
    'double sided prop money australia',
    'blank filler prop money stacks australia',
    'buy prop money australia',
    'australian prop money for sale',
    'prop money aud',
    'australian dollar prop notes',
    'realistic prop money australia',
    'buy fake australian money props',
    'prop money australia next day delivery',
    'prop money australia afterpay',
    'cheap prop money australia',
    'wholesale prop money australia',
    'prop money bundle australia',
    'australian prop money',
    'prop money australia',
    'fake australian money prop',
    'au prop money',
    'aus prop money',
    'prop money au'
  ],
  alternates: {
    canonical: `${cleanBaseUrl}/`,
  },
  openGraph: {
    title: 'Australian Prop Money | #1 Legal Prop Money Australia for Film, TV & Videos',
    description: 'Buy premium Australian prop money, prop 100, 50, 20 dollar notes AUD, and prop bundles for film, TV, music videos, and photography. Non-glare matte paper conforming strictly to RBA guidelines.',
    url: `${cleanBaseUrl}/`,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Australian Prop Money Stacks & Bundles Australia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australian Prop Money | Legal Fake Australian Money Props & Stacks',
    description: 'Buy premium Australian prop money and fake australian money prop notes for film, TV, music videos, and photography. Next day delivery Australia-wide.',
    images: ['/images/og-image.jpg'],
  },
};

const homeItemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  'name': 'Featured Australian Prop Money Collections',
  'description': 'RBA-compliant Australian prop money notes, movie prop money stacks, and production bundles.',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'New Series 100 AUD Prop Money ($10,000 Stack)',
      'url': `${cleanBaseUrl}/product/100-aud-new-prop-money`
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'New Series 50 AUD Prop Money ($5,000 Stack)',
      'url': `${cleanBaseUrl}/product/50-aud-new-prop-money`
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'name': 'Film Producer Master Pack (Multi-Denomination Prop Bundle)',
      'url': `${cleanBaseUrl}/product/film-producer-pack`
    },
    {
      '@type': 'ListItem',
      'position': 4,
      'name': 'Prop Money Briefcase Bundle Australia (Aluminum Case)',
      'url': `${cleanBaseUrl}/product/millionaire-briefcase-bundle`
    }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd schema={homeItemListSchema} />
      <ClientPage />
    </>
  );
}
