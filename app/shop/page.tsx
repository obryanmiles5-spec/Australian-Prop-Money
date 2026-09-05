import { Metadata } from 'next';
import { Suspense } from 'react';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Shop Australian Prop Money | Buy Prop Money Australia, 100 AUD Notes & Bundles',
  description: 'Shop Australian prop money for sale. Buy prop 100 dollar note Australia, prop 50 & 20 dollar notes, new series 100 AUD prop money, briefcase bundles, and AUD money gun props. Fast next day delivery in Sydney, Melbourne, Brisbane & nationwide with Afterpay.',
  keywords: [
    'buy prop money australia',
    'australian prop money for sale',
    'where to buy prop money in australia',
    'prop money aud',
    'australian dollar prop notes',
    'realistic prop money australia',
    'buy fake australian money props',
    'prop money australia next day delivery',
    'prop money australia afterpay',
    'cheap prop money australia',
    'wholesale prop money australia',
    'prop money bundle australia',
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
    'film production prop money sydney',
    'theatre prop money melbourne',
    'tv production money props brisbane',
    'prop cash for music videos australia',
    'aud money gun prop cash'
  ],
  alternates: {
    canonical: `${cleanBaseUrl}/shop`,
  },
  openGraph: {
    title: 'Shop Australian Prop Money | Buy Realistic Fake Australian Money Props',
    description: 'Shop our premium collection of Australian prop money, fake australian money prop notes, AUD designs, USD prop cash, and heist bundle crates.',
    url: `${cleanBaseUrl}/shop`,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shop Australian Prop Money Catalog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop Australian Prop Money | Buy Realistic Fake Australian Money Props',
    description: 'Shop our premium collection of australian prop money, au prop money, and aus prop money bundles.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading shop...</div>}>
      <ClientPage />
    </Suspense>
  );
}
