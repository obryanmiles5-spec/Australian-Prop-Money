import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'About Us | Australian Prop Money | Prop Money Australia',
  description: 'Learn about Australian Prop Money, the leading provider of premium fake australian money prop and replica notes for film, television, and creative productions in Australia.',
  alternates: {
    canonical: `${cleanBaseUrl}/about`,
  },
  openGraph: {
    title: 'About Us | Australian Prop Money | Prop Money Australia',
    description: 'Learn about Australian Prop Money, the leading provider of premium fake australian money prop and replica notes for film, television, and creative productions in Australia.',
    url: `${cleanBaseUrl}/about`,
  }
};

export default function Page() {
  return <ClientPage />;
}
