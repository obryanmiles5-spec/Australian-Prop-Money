import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Australian Prop Money | Best Fake Australian Money Prop & AU Prop Money',
  description: 'Buy premium Australian prop money, fake australian money prop notes, and prop bundles of money australia for film, TV, and photography. The most realistic au prop money conforming to RBA legal rules.',
  alternates: {
    canonical: `${cleanBaseUrl}/`,
  },
  openGraph: {
    title: 'Australian Prop Money | Best Fake Australian Money Prop & AU Prop Money',
    description: 'Buy premium Australian prop money, fake australian money prop notes, and prop bundles of money australia for film, TV, and photography. The most realistic au prop money conforming to RBA legal rules.',
    url: `${cleanBaseUrl}/`,
  }
};

export default function Page() {
  return <ClientPage />;
}
