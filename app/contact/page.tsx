import { Metadata } from 'next';
import ClientPage from './ClientPage';
import JsonLd from '@/components/JsonLd';

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
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Australian Prop Money',
    description: 'Get in touch with the Australian Prop Money team for support, custom aus prop money orders, or general inquiries.',
  },
};

export default function Page() {
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
        'name': 'Contact Us',
        'item': `${cleanBaseUrl}/contact`
      }
    ]
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Australian Prop Money',
    'description': 'Direct studio contacts, email, phone, and WhatsApp rapid response desk for Australian prop currency orders.',
    'url': `${cleanBaseUrl}/contact`,
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Australian Prop Money',
      'telephone': '+61 468 187 340',
      'email': 'info@australianpropmoney.org',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+61 468 187 340',
        'contactType': 'customer support',
        'availableLanguage': 'English'
      }
    }
  };

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={contactSchema} />
      <ClientPage />
    </>
  );
}
