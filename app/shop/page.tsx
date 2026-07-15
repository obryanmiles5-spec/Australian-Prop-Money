import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Shop Australian Prop Money | Best Fake Australian Money Prop',
  description: 'Shop our premium collection of australian prop money, au prop money, and aus prop money bundles. Engineered for 4K cameras and film productions.',
  alternates: {
    canonical: `${cleanBaseUrl}/shop`,
  },
  openGraph: {
    title: 'Shop Australian Prop Money | Best Fake Australian Money Prop',
    description: 'Shop our premium collection of australian prop money, au prop money, and aus prop money bundles. Engineered for 4K cameras and film productions.',
    url: `${cleanBaseUrl}/shop`,
  }
};

export default function Page() {
  return <ClientPage />;
}
