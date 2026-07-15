import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Australian Prop Money | Professional Prop Money Australia for Film & TV',
  description: 'Premium Australian prop money and fake australian money prop notes for film, television, theatre, photography, and training. Realistic size, dual-sided premium prints conforming to RBA legal rules.',
  alternates: {
    canonical: `${cleanBaseUrl}/`,
  },
  openGraph: {
    title: 'Australian Prop Money | Professional Prop Money Australia for Film & TV',
    description: 'Premium Australian prop money and fake australian money prop notes for film, television, theatre, photography, and training. Realistic size, dual-sided premium prints conforming to RBA legal rules.',
    url: `${cleanBaseUrl}/`,
  }
};

export default function Page() {
  return <ClientPage />;
}
