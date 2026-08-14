import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Wholesale Prop Money Australia | Bulk Orders, Film Crates & Master Bundles',
  description: 'Order bulk Australian prop money, fake australian money prop notes, and USD prop stacks for large scale heist, bank vault, and film studio productions. Industry wholesale pricing & express delivery.',
  keywords: [
    'wholesale prop money australia',
    'bulk prop money australia',
    'bulk fake australian money prop',
    'heist crate prop cash',
    'bulk prop money stack australia',
    'prop money supplier wholesale sydney',
    'prop american money bulk'
  ],
  alternates: {
    canonical: `${cleanBaseUrl}/wholesale`,
  },
  openGraph: {
    title: 'Wholesale Prop Money Australia | Bulk Orders & Film Crates',
    description: 'Order bulk Australian prop money and USD prop stacks for large scale film and TV productions.',
    url: `${cleanBaseUrl}/wholesale`,
    type: 'website',
    images: [
      {
        url: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000',
        width: 1200,
        height: 630,
        alt: 'Wholesale Australian Prop Money Bundles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Prop Money Australia | Bulk Orders & Film Crates',
    description: 'Order bulk Australian prop money and USD prop stacks for large scale film and TV productions.',
    images: ['https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'],
  },
};

export default function Page() {
  return <ClientPage />;
}
