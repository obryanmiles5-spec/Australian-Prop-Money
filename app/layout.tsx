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
    default: 'Australian Prop Money | #1 Prop Money Australia & Legal Fake Australian Money Props',
    template: '%s | Australian Prop Money'
  },
  description: 'Australia’s #1 trusted supplier of RBA-compliant Australian prop money, realistic movie prop money Australia, and prop bundles for film, TV, music videos, and photography. Prop 100, 50, 20 dollar notes AUD. Next day delivery Australia-wide with Afterpay.',
  keywords: [
    // User Specified Target Keyword List
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

    // Core Domain High-Volume Search Keywords
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
    
    // Counterfeit/Detector Related
    'counterfeit australian currency',
    'counterfeit money detector australia',
    'counterfeit money in australia',
    'fake money detector',
    'fake note australia',
    'fake notes australia',
    'counterfeit money tester',
    'fake cash detector',
    'australian counterfeit money',

    // City & Location Search Keywords
    'prop money sydney',
    'prop money melbourne',
    'prop money brisbane',
    'prop money perth',
    'prop money adelaide',
    'prop money gold coast',
    'prop money canberra'
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
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Sydney, New South Wales, Australia',
    'geo.position': '-33.8688;151.2093',
    'ICBM': '-33.8688, 151.2093',
    'coverage': 'Australia',
    'distribution': 'Global',
    'rating': 'General',
    'target': 'all',
    'audience': 'all'
  },
  openGraph: {
    title: 'Australian Prop Money | #1 Prop Money Australia & Legal Film Props',
    description: 'Australia’s top source for camera-ready RBA-compliant Australian prop money notes ($100, $50, $20, $10) and prop bundles. Next day delivery in Sydney, Melbourne, Brisbane & nationwide.',
    url: cleanBaseUrl,
    siteName: 'Australian Prop Money',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Australian Prop Money - Camera Ready Prop Cash Stacks Australia',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australian Prop Money | Professional Prop Money Australia',
    description: 'Australia’s leading source for camera-ready RBA-compliant Australian prop money notes and prop bundles. Next day delivery nationwide with Afterpay.',
    images: ['/images/og-image.jpg'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Australian Prop Money',
  'legalName': 'Australian Prop Money Pty Ltd',
  'taxID': 'ABN 46 674 267 559',
  'alternateName': ['APM Prop Studios', 'Australian Prop Cash'],
  'url': cleanBaseUrl,
  'logo': `${cleanBaseUrl}/icon.png`,
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+61 468 187 340',
    'contactType': 'customer service',
    'email': 'info@australianpropmoney.org',
    'areaServed': 'AU',
    'availableLanguage': 'en'
  },
  'sameAs': [
    'https://www.facebook.com/australianpropmoney',
    'https://www.instagram.com/australianpropmoney',
    'https://www.tiktok.com/@australianpropmoney',
    'https://www.youtube.com/@australianpropmoney',
    'https://www.pinterest.com/australianpropmoney',
    'https://twitter.com/aupropmoney'
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
  'email': 'info@australianpropmoney.org',
  'priceRange': '$$',
  'currenciesAccepted': 'AUD',
  'paymentAccepted': 'Credit Card, Debit Card, Afterpay, PayPal, Cryptocurrency',
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
  'areaServed': {
    '@type': 'Country',
    'name': 'Australia'
  },
  'knowsAbout': [
    'Australian Prop Money',
    'Reserve Bank of Australia Prop Money Guidelines',
    'Film Production Prop Money Sydney',
    'Theatre Prop Money Melbourne',
    'TV Production Money Props Brisbane',
    'Prop Cash for Music Videos Australia',
    'Cashier Training Prop Money Australia',
    'Prop 100 Dollar Note Australia',
    'New Series 100 AUD Prop Money',
    'Double Sided Prop Money Australia'
  ],
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

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Is prop money legal in Australia?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes, prop money is 100% legal to buy, possess, and use in Australia for artistic, cinematographic, educational, and novelty purposes. The Crimes (Currency) Act 1981 and Reserve Bank of Australia (RBA) guidelines permit replica currency provided it cannot be mistaken for genuine banknotes. Australian Prop Money products are printed on non-polymer matte bond paper, feature prominent "PROP ONLY — NOT LEGAL TENDER" disclaimers, and have modified scale to ensure full legal compliance.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What are the Reserve Bank of Australia (RBA) prop money reproduction rules?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Under RBA prop money guidelines: (1) Reproductions must not be printed on genuine polymer plastic substrates; (2) Notes must display prominent, indelible legal disclaimers like "PROP ONLY — NOT LEGAL TENDER"; (3) No genuine microprinting, holographic patches, or tactile intaglio print may be copied; (4) Dimensions must be visually modified. Australian Prop Money strictly adheres to all RBA reproduction rules.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is the difference between counterfeit vs prop money Australia?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Counterfeit currency is illegal fraudulent money manufactured with criminal intent to deceive and circulate as real currency. Prop money is legitimate replica theatrical currency made for closed film sets, music videos, and theatre, featuring matte studio paper and clear "NOT LEGAL TENDER" markings with zero intent to deceive.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Where to buy prop money in Australia with next day delivery and Afterpay?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'You can buy Australian prop money online at australianpropmoney.org. We dispatch from our Sydney warehouse with next day delivery across Australia via Australia Post Express and StarTrack, with Afterpay, credit card, PayPal, and crypto payment options.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is the difference between full print prop money AUD and blank filler prop money stacks?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Full print prop money AUD is printed double-sided on every single note in the stack—perfect for camera close-ups, counting, and throwing. Blank filler prop money stacks have high-detail printed notes on the top and bottom of each 100-note stack with blank color-matched paper in between to create realistic bulk for briefcases and bank vault scenes at an affordable price.'
      }
    }
  ]
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
          <JsonLd schema={faqPageSchema} />
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


