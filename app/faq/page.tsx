import { Metadata } from 'next';
import ClientPage from './ClientPage';
import JsonLd from '@/components/JsonLd';
import { FAQS } from '@/lib/products';

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
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Australian Prop Money Legal Guidelines & Information',
    description: 'Frequently asked questions about prop money australia. Learn about the legality, shipping, and usage of our fake australian money prop for film and TV.',
  },
};

export default function Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': cleanBaseUrl
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'FAQ',
        'item': `${cleanBaseUrl}/faq`
      }
    ]
  };

  return (
    <>
      <JsonLd schema={faqSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <ClientPage />
    </>
  );
}
