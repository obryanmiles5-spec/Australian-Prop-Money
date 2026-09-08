import { Metadata } from 'next';
import ClientPage from './ClientPage';

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
  return <ClientPage />;
}
