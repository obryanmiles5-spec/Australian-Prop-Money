import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Australian Prop Money Journal & Compliance Guides | Film Set Design & RBA Rules',
  description: 'Expert production guides, film set lighting tips, and Reserve Bank of Australia (RBA) compliance breakdowns for Australian prop money, fake australian money prop notes, and cinema prop cash.',
  keywords: [
    'australian prop money journal',
    'prop money legality australia',
    'RBA prop money rules',
    'Crimes Currency Act 1981 prop money',
    'where to buy realistic australian prop money',
    'how to age prop money for film',
    'old vs new australian dollar prop notes',
    'prop money for music videos sydney'
  ],
  alternates: {
    canonical: `${cleanBaseUrl}/blog`,
  },
  openGraph: {
    title: 'Australian Prop Money Journal & Compliance Guides',
    description: 'Expert production guides and RBA compliance breakdowns for Australian prop money and film props.',
    url: `${cleanBaseUrl}/blog`,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Australian Prop Money Production Journal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australian Prop Money Journal & Compliance Guides',
    description: 'Expert production guides and RBA compliance breakdowns for Australian prop money and film props.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <ClientPage />;
}
