import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Australian Prop Money | Buy Prop Money Australia | RBA Compliant Prop Notes',
  description: 'Australia’s #1 trusted source to buy prop money in Australia. RBA-compliant prop 100, 50, 20 dollar notes, new series 100 AUD prop money stacks, briefcase bundles & prop cash for film, TV, music videos, and training. Next day delivery & Afterpay.',
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
    'counterfeit',
    'counterfeit money',
    'cash counterfeit',
    'fake money counterfeit',
    'counterfeit money australia',
    'australian prop money',
    'prop money australia',
    'prop australian money',
    'fake australian money prop',
    'au prop money',
    'prop money au'
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
