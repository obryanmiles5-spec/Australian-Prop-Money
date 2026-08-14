import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Australian Prop Money | #1 Fake Australian Money Prop Notes & AU Prop Stacks',
  description: 'Buy premium Australian prop money, fake australian money prop notes, and prop bundles for film, TV, music videos, and photography. The most realistic AU prop money ($10, $20, $50, $100 notes & USD props) conforming strictly to RBA legal rules. Express fast shipping Sydney, Melbourne, Brisbane & nationwide.',
  keywords: [
    'australian prop money',
    'prop money australia',
    'buy prop money australia',
    'fake australian money prop',
    'fake money australia',
    'prop australian money',
    'au prop money',
    'prop money au',
    'aus prop money',
    'australia prop money',
    'prop money buy online',
    'movie money australia',
    'cinema prop money australia',
    'prop cash australia',
    'fake $100 notes australia',
    'fake $50 notes australia',
    'fake $20 notes australia',
    'fake $10 notes australia',
    'prop american money',
    'RBA compliant prop money',
    'where to buy prop money australia'
  ],
  alternates: {
    canonical: `${cleanBaseUrl}/`,
  },
  openGraph: {
    title: 'Australian Prop Money | #1 Fake Australian Money Prop Notes & AU Prop Stacks',
    description: 'Buy premium Australian prop money, fake australian money prop notes, and prop bundles for film, TV, music videos, and photography. Non-glare matte paper conforming to RBA guidelines.',
    url: `${cleanBaseUrl}/`,
    type: 'website',
    images: [
      {
        url: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000',
        width: 1200,
        height: 630,
        alt: 'Australian Prop Money Stacks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australian Prop Money | Best Fake Australian Money Prop Notes',
    description: 'Buy premium Australian prop money and fake australian money prop notes for film, TV, music videos, and photography. Conforming to RBA legal rules.',
    images: ['https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'],
  },
};

export default function Page() {
  return <ClientPage />;
}
