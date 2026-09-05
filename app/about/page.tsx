import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'About Us | Leading Supplier of Australian Prop Money & Film Props',
  description: 'Learn about Australian Prop Money, the leading provider of premium fake australian money prop and replica notes for film, television, and creative productions in Australia.',
  keywords: [
    'about australian prop money',
    'prop money supplier australia',
    'sydney prop money manufacturer',
    'RBA compliant prop money studio',
    'movie money supplier australia'
  ],
  alternates: {
    canonical: `${cleanBaseUrl}/about`,
  },
  openGraph: {
    title: 'About Us | Australian Prop Money',
    description: 'Learn about Australian Prop Money, the leading provider of premium fake australian money prop and replica notes for film and TV.',
    url: `${cleanBaseUrl}/about`,
    type: 'website',
    images: [
      {
        url: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000',
        width: 1200,
        height: 630,
        alt: 'About Australian Prop Money',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Australian Prop Money',
    description: 'Learn about Australian Prop Money, the leading provider of premium fake australian money prop and replica notes.',
    images: ['https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'],
  },
};

export default function Page() {
  return <ClientPage />;
}
