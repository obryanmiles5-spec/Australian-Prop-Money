import { Metadata } from 'next';
import { Suspense } from 'react';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Shop Australian Prop Money | Buy Realistic Fake Australian Money Props & USD Stacks',
  description: 'Shop our premium collection of Australian prop money, fake australian money prop notes, old/new AUD designs ($100, $50, $20, $10), USD prop cash, and heist bundle crates. Engineered for 4K cameras with RBA-compliant non-glare prints.',
  keywords: [
    'shop australian prop money',
    'buy prop money australia',
    'fake australian money prop',
    'prop money shop sydney',
    'prop money melbourne',
    'au prop money store',
    'aus prop money shop',
    'buy fake $100 notes australia',
    'buy fake $50 notes australia',
    'prop american money shop',
    'wholesale prop cash australia'
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
        url: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000',
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
    images: ['https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'],
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading shop...</div>}>
      <ClientPage />
    </Suspense>
  );
}
