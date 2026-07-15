import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles
import { CartProvider } from '@/context/CartContext';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import SideCart from '@/components/SideCart';
import Footer from '@/components/Footer';
import NewsletterPopup from '@/components/NewsletterPopup';
import AnalyticsScripts from '@/components/AnalyticsScripts';
import WhatsAppChat from '@/components/WhatsAppChat';
import JsonLd from '@/components/JsonLd';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const baseUrl = process.env.APP_URL || 'https://australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Australian Prop Money | Professional Replica Currency for Film & TV',
  description: 'Premium Australian prop money replica notes for film, television, theatre, photography, and training. Realistic size, dual-sided premium prints conforming to RBA legal rules.',
  alternates: {
    canonical: cleanBaseUrl,
  },
  verification: process.env.NEXT_PUBLIC_SEARCH_CONSOLE_ID ? {
    google: process.env.NEXT_PUBLIC_SEARCH_CONSOLE_ID,
  } : undefined,
  openGraph: {
    title: 'Australian Prop Money | Professional Replica Currency for Film & TV',
    description: 'Premium Australian prop money replica notes for film, television, theatre, photography, and training. Realistic size, dual-sided premium prints conforming to RBA legal rules.',
    url: cleanBaseUrl,
    siteName: 'Australian Prop Money',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Australian Prop Money | Professional Replica Currency for Film & TV',
    description: 'Premium Australian prop money replica notes for film, television, theatre, photography, and training. Conforming to RBA guidelines.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Australian Prop Money',
  'alternateName': 'APM Prop Studios',
  'url': cleanBaseUrl,
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+61 480 852 682',
    'contactType': 'customer service',
    'email': 'info@australianpropmoney.org',
    'availableLanguage': 'en'
  },
  'sameAs': [
    'https://www.facebook.com/australianpropmoney',
    'https://www.instagram.com/australianpropmoney'
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Australian Prop Money',
  '@id': `${cleanBaseUrl}/#localbusiness`,
  'url': cleanBaseUrl,
  'telephone': '+61480852682',
  'priceRange': '$$',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'George Street',
    'addressLocality': 'Sydney',
    'addressRegion': 'NSW',
    'postalCode': '2000',
    'addressCountry': 'AU'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': -33.8688,
    'longitude': 151.2093
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    'opens': '09:00',
    'closes': '18:00'
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="bg-white text-black min-h-screen flex flex-col">
        <CartProvider>
          <JsonLd schema={organizationSchema} />
          <JsonLd schema={localBusinessSchema} />
          <AnalyticsScripts />
          <AnnouncementBar />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <SideCart />
          <NewsletterPopup />
          <WhatsAppChat />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}


