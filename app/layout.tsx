import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css'; // Global styles
import { CartProvider } from '@/context/CartContext';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import SideCart from '@/components/SideCart';
import Footer from '@/components/Footer';
import NewsletterPopup from '@/components/NewsletterPopup';
import AnalyticsScripts from '@/components/AnalyticsScripts';
import WhatsAppChat from '@/components/WhatsAppChat';
import SaleNotification from '@/components/SaleNotification';
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

function cleanSearchConsoleId(id: string | undefined): string {
  if (!id) return '';
  const match = id.match(/content=["']([a-zA-Z0-9_\-]+)["']/);
  if (match) return match[1];
  return id.replace(/<[^>]*>/g, '').trim();
}

const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
const cleanBaseUrl = baseUrl.replace(/\/$/, '');

const rawSearchConsoleId = process.env.NEXT_PUBLIC_SEARCH_CONSOLE_ID;
const searchConsoleId = rawSearchConsoleId ? cleanSearchConsoleId(rawSearchConsoleId) : undefined;

import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL(cleanBaseUrl),
  title: {
    default: 'Australian Prop Money | #1 Prop Money Australia & Fake Australian Money Props',
    template: '%s | Australian Prop Money'
  },
  description: 'Australia’s leading supplier of RBA-compliant Australian prop money, fake australian money prop notes, old and new $100, $50, $20, $10 AUD notes, and USD prop cash for film, TV, music videos, and photography. Fast shipping to Sydney, Melbourne, Brisbane, Perth & nationwide.',
  keywords: [
    // Core User Injected High-Intent Keywords
    'is prop money legal in australia',
    'rba prop money reproduction rules',
    'reserve bank of australia prop money guidelines',
    'counterfeit vs prop money australia',
    'where to buy prop money in australia',
    'legal prop money for film australia',
    'how to get prop money for videos',
    'movie prop money australia',
    'film production prop money sydney',
    'theatre prop money melbourne',
    'prop cash for music videos australia',
    'cashier training prop money australia',
    'photography prop money aud',
    'tv production money props brisbane',
    'prank prop money australia',
    'aud money gun prop cash',
    'prop 100 dollar note australia',
    'prop 50 dollar note australia',
    'prop 20 dollar note aud',
    'australian 100 dollar prop notes',
    'new series 100 aud prop money',
    'prop money 10000 stack aud',
    'prop money briefcase bundle australia',
    'full print prop money aud',
    'double sided prop money australia',
    'blank filler prop money stacks australia',
    'buy prop money australia',
    'australian prop money for sale',
    'prop money aud',
    'australian dollar prop notes',
    'realistic prop money australia',
    'buy fake australian money props',
    'prop money australia next day delivery',
    'prop money australia afterpay',
    'cheap prop money australia',
    'wholesale prop money australia',
    'prop money bundle australia',
    'counterfeit',
    'counterfeit money',
    'cash counterfeit',
    'fake money counterfeit',
    'counterfeit money australia',

    // Primary High-Volume Search Keywords
    'australian prop money',
    'prop money australia',
    'prop australian money',
    'fake australian money prop',
    'realistic fake money australia',
    'au prop money',
    'aus prop money',
    'prop money au',
    'australian fake money',
    'fake money australia',
    'props money',
    'australia fake money',
    'best fake money',
    'prop money buy online',
    
    // Counterfeit/Detector Related (Educational/Legal context)
    'counterfeit australian currency',
    'counterfeit money detector australia',
    'counterfeit money in australia',
    'fake money detector',
    'fake note australia',
    'fake notes australia',
    'counterfeit money tester',
    'fake cash detector',

    // Specific Items & Denominations
    'fake $100 australia',
    '$100 prop money',
    'fake $100 notes australia',
    'fake $50 notes australia',
    'fake $20 notes australia',
    'fake $10 notes australia',
    '100 AUD prop notes',
    '50 AUD prop notes',
    '20 AUD prop notes',
    '10 AUD prop notes',
    'old design australian prop money',
    'new design australian prop notes',
    'australian polymer prop cash',
    'bag of fake money',
    '1 1 prop money',
    'fake money print',
    'prop american money',
    'fake us dollars',
    '100 USD prop cash',

    // City & Location Search Keywords
    'prop money sydney',
    'prop money melbourne',
    'prop money brisbane',
    'prop money perth',
    'prop money adelaide',
    'prop money gold coast',
    'prop money Canberra',

    // Production & Use-Case Keywords
    'film prop money australia',
    'tv show prop cash',
    'music video prop money',
    'photography prop notes',
    'theatre prop money australia',
    'training prop money australia',
    'casino prop money australia',
    'heist scene prop cash',
    'prop money gun australia',
    'bulk prop money wholesale australia',
    'full print prop money stacks',

    // Legality & Compliance Queries
    'RBA compliant prop money',
    'non-negotiable prop cash australia',
    'Reserve Bank of Australia prop money rules'
  ],
  authors: [{ name: 'Australian Prop Money Specialist' }],
  creator: 'Australian Prop Money',
  publisher: 'Australian Prop Money',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: cleanBaseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: searchConsoleId || 'rrCPhA4xaJmRhlVmKy3oo6aKP4rYE3Wa5QLwS3SEV04',
  },
  openGraph: {
    title: 'Australian Prop Money | #1 Prop Money Australia for Film & TV',
    description: 'Australia’s top source for camera-ready RBA-compliant Australian prop money notes ($100, $50, $20, $10) and prop bundles. Fast shipping to Sydney, Melbourne, Brisbane, and nationwide.',
    url: cleanBaseUrl,
    siteName: 'Australian Prop Money',
    images: [
      {
        url: 'https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000',
        width: 1200,
        height: 630,
        alt: 'Australian Prop Money - Camera Ready Prop Cash Stacks',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australian Prop Money | Professional Prop Money Australia',
    description: 'Australia’s top source for camera-ready RBA-compliant Australian prop money notes and prop bundles. Fast shipping nationwide.',
    images: ['https://drive.google.com/thumbnail?id=1KjvH98mJVQDUJKvTGL6O-Bl6xaggGuRR&sz=w1000'],
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
    'telephone': '+61 468 187 340',
    'contactType': 'customer service',
    'email': 'info@australianpropmoney.org',
    'availableLanguage': 'en'
  },
  'sameAs': [
    'https://www.facebook.com/australianpropmoney',
    'https://www.instagram.com/australianpropmoney'
  ]
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'Australian Prop Money',
  'url': cleanBaseUrl,
  'potentialAction': {
    '@type': 'SearchAction',
    'target': `${cleanBaseUrl}/shop?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Australian Prop Money',
  '@id': `${cleanBaseUrl}/#localbusiness`,
  'url': cleanBaseUrl,
  'telephone': '+61468187340',
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
    <html lang="en-AU" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-ZWRWC5Z63W" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZWRWC5Z63W');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="bg-white text-black min-h-screen flex flex-col">
        <CartProvider>
          <JsonLd schema={organizationSchema} />
          <JsonLd schema={localBusinessSchema} />
          <JsonLd schema={websiteSchema} />
          <AnalyticsScripts />
          <AnnouncementBar />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <SideCart />
          <NewsletterPopup />
          <WhatsAppChat />
          <SaleNotification />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}


