import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Contact Us | Australian Prop Money',
  description: 'Get in touch with the Australian Prop Money team for support, custom aus prop money orders, or general inquiries.',
  alternates: {
    canonical: `${cleanBaseUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Us | Australian Prop Money',
    description: 'Get in touch with the Australian Prop Money team for support, custom aus prop money orders, or general inquiries.',
    url: `${cleanBaseUrl}/contact`,
  }
};

export default function Page() {
  return <ClientPage />;
}
