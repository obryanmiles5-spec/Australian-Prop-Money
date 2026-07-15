import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Video Gallery | Australian Prop Money',
  description: 'Watch our premium prop money australia and fake australian money prop in action. See the high-definition quality of our replica notes on camera.',
  alternates: {
    canonical: `${cleanBaseUrl}/videos`,
  },
  openGraph: {
    title: 'Video Gallery | Australian Prop Money',
    description: 'Watch our premium prop money australia and fake australian money prop in action. See the high-definition quality of our replica notes on camera.',
    url: `${cleanBaseUrl}/videos`,
  }
};

export default function Page() {
  return <ClientPage />;
}
