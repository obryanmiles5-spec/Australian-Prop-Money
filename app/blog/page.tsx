import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Blog & Articles | Australian Prop Money',
  description: 'Read the latest insights, tips, and news about using prop money australia, fake australian money prop, and prop american money in your next production.',
  alternates: {
    canonical: `${cleanBaseUrl}/blog`,
  },
  openGraph: {
    title: 'Blog & Articles | Australian Prop Money',
    description: 'Read the latest insights, tips, and news about using prop money australia, fake australian money prop, and prop american money in your next production.',
    url: `${cleanBaseUrl}/blog`,
  }
};

export default function Page() {
  return <ClientPage />;
}
