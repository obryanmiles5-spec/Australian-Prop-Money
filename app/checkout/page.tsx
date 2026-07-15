import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Checkout | Australian Prop Money',
  description: 'Securely complete your purchase of premium australian prop money and au prop money.',
  alternates: {
    canonical: `${cleanBaseUrl}/checkout`,
  },
  openGraph: {
    title: 'Checkout | Australian Prop Money',
    description: 'Securely complete your purchase of premium australian prop money and au prop money.',
    url: `${cleanBaseUrl}/checkout`,
  }
};

export default function Page() {
  return <ClientPage />;
}
