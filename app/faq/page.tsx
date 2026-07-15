import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'FAQ | Australian Prop Money Legal Guidelines & Information',
  description: 'Frequently asked questions about prop money australia. Learn about the legality, shipping, and usage of our fake australian money prop for film and TV.',
  alternates: {
    canonical: `${cleanBaseUrl}/faq`,
  },
  openGraph: {
    title: 'FAQ | Australian Prop Money Legal Guidelines & Information',
    description: 'Frequently asked questions about prop money australia. Learn about the legality, shipping, and usage of our fake australian money prop for film and TV.',
    url: `${cleanBaseUrl}/faq`,
  }
};

export default function Page() {
  return <ClientPage />;
}
