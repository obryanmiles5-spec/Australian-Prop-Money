import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Video Showcase & Camera Tests | Australian Prop Money On Screen',
  description: 'Watch realistic Australian prop money, fake australian money prop notes, and prop cash guns in action under 4K film studio lighting, music video sets, and high-speed motion testing.',
  keywords: [
    'australian prop money video',
    'prop money camera test',
    'prop money music video showcase',
    'prop money gun test video',
    'fake australian money prop review'
  ],
  alternates: {
    canonical: `${cleanBaseUrl}/videos`,
  },
  openGraph: {
    title: 'Video Showcase & Camera Tests | Australian Prop Money On Screen',
    description: 'Watch realistic Australian prop money and fake australian money prop notes in action under 4K studio lighting.',
    url: `${cleanBaseUrl}/videos`,
    type: 'website',
    images: [
      {
        url: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000',
        width: 1200,
        height: 630,
        alt: 'Australian Prop Money Video Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Showcase & Camera Tests | Australian Prop Money On Screen',
    description: 'Watch realistic Australian prop money and fake australian money prop notes in action under 4K studio lighting.',
    images: ['https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'],
  },
};

export default function Page() {
  return <ClientPage />;
}
