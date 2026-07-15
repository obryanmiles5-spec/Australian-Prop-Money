import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Wholesale & Bulk Orders | Australian Prop Money Australia',
  description: 'Order bulk australian prop money and prop american money bundles for large scale heist, vault, and cinematic productions. Special pricing for industry professionals.',
  alternates: {
    canonical: `${cleanBaseUrl}/wholesale`,
  },
  openGraph: {
    title: 'Wholesale & Bulk Orders | Australian Prop Money Australia',
    description: 'Order bulk australian prop money and prop american money bundles for large scale heist, vault, and cinematic productions. Special pricing for industry professionals.',
    url: `${cleanBaseUrl}/wholesale`,
  }
};

export default function Page() {
  return <ClientPage />;
}
