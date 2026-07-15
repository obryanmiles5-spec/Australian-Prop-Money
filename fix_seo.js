const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://australianpropmoney.com.au';

const pages = [
  {
    dir: 'app',
    path: 'app/page.tsx',
    title: 'Australian Prop Money | Professional Prop Money Australia for Film & TV',
    desc: 'Premium Australian prop money and fake australian money prop notes for film, television, theatre, photography, and training. Realistic size, dual-sided premium prints conforming to RBA legal rules.',
    canonical: '/'
  },
  {
    dir: 'app/about',
    path: 'app/about/page.tsx',
    title: 'About Us | Australian Prop Money | Prop Money Australia',
    desc: 'Learn about Australian Prop Money, the leading provider of premium fake australian money prop and replica notes for film, television, and creative productions in Australia.',
    canonical: '/about'
  },
  {
    dir: 'app/shop',
    path: 'app/shop/page.tsx',
    title: 'Shop Australian Prop Money | Best Fake Australian Money Prop',
    desc: 'Shop our premium collection of australian prop money, au prop money, and aus prop money bundles. Engineered for 4K cameras and film productions.',
    canonical: '/shop'
  },
  {
    dir: 'app/faq',
    path: 'app/faq/page.tsx',
    title: 'FAQ | Australian Prop Money Legal Guidelines & Information',
    desc: 'Frequently asked questions about prop money australia. Learn about the legality, shipping, and usage of our fake australian money prop for film and TV.',
    canonical: '/faq'
  },
  {
    dir: 'app/blog',
    path: 'app/blog/page.tsx',
    title: 'Blog & Articles | Australian Prop Money',
    desc: 'Read the latest insights, tips, and news about using prop money australia, fake australian money prop, and prop american money in your next production.',
    canonical: '/blog'
  },
  {
    dir: 'app/checkout',
    path: 'app/checkout/page.tsx',
    title: 'Checkout | Australian Prop Money',
    desc: 'Securely complete your purchase of premium australian prop money and au prop money.',
    canonical: '/checkout'
  },
  {
    dir: 'app/wholesale',
    path: 'app/wholesale/page.tsx',
    title: 'Wholesale & Bulk Orders | Australian Prop Money Australia',
    desc: 'Order bulk australian prop money and prop american money bundles for large scale heist, vault, and cinematic productions. Special pricing for industry professionals.',
    canonical: '/wholesale'
  },
  {
    dir: 'app/contact',
    path: 'app/contact/page.tsx',
    title: 'Contact Us | Australian Prop Money',
    desc: 'Get in touch with the Australian Prop Money team for support, custom aus prop money orders, or general inquiries.',
    canonical: '/contact'
  },
  {
    dir: 'app/videos',
    path: 'app/videos/page.tsx',
    title: 'Video Gallery | Australian Prop Money',
    desc: 'Watch our premium prop money australia and fake australian money prop in action. See the high-definition quality of our replica notes on camera.',
    canonical: '/videos'
  },
  {
    dir: 'app/shipping-policy',
    path: 'app/shipping-policy/page.tsx',
    title: 'Shipping Policy | Australian Prop Money',
    desc: 'Fast, discreet shipping for your australian prop money orders. Learn about our dispatch times and delivery options across Australia.',
    canonical: '/shipping-policy'
  },
  {
    dir: 'app/refund-policy',
    path: 'app/refund-policy/page.tsx',
    title: 'Refund Policy | Australian Prop Money',
    desc: 'Read our refund and return policy for prop money au and prop australian money purchases.',
    canonical: '/refund-policy'
  },
  {
    dir: 'app/terms',
    path: 'app/terms/page.tsx',
    title: 'Terms of Service | Australian Prop Money',
    desc: 'Terms of service and legal guidelines for purchasing and using our fake australian money prop products.',
    canonical: '/terms'
  },
  {
    dir: 'app/privacy-policy',
    path: 'app/privacy-policy/page.tsx',
    title: 'Privacy Policy | Australian Prop Money',
    desc: 'Our commitment to your privacy when purchasing australian prop money and au prop money.',
    canonical: '/privacy-policy'
  }
];

pages.forEach(page => {
  const content = fs.readFileSync(page.path, 'utf8');
  
  if (content.includes("'use client'") || content.includes('"use client"')) {
    // Need to extract to Client component
    const clientPath = path.join(page.dir, 'ClientPage.tsx');
    
    // Rename default export to ClientPage (optional but good practice, though default exports can be anything)
    // Actually, just save as ClientPage.tsx
    fs.writeFileSync(clientPath, content);
    
    // Create new server component page.tsx
    const serverPageContent = `import { Metadata } from 'next';
import ClientPage from './ClientPage';

const baseUrl = process.env.APP_URL || '${DOMAIN}';
const cleanBaseUrl = baseUrl.replace(/\\/$/, '');

export const metadata: Metadata = {
  title: '${page.title}',
  description: '${page.desc}',
  alternates: {
    canonical: \`\${cleanBaseUrl}${page.canonical}\`,
  },
  openGraph: {
    title: '${page.title}',
    description: '${page.desc}',
    url: \`\${cleanBaseUrl}${page.canonical}\`,
  }
};

export default function Page() {
  return <ClientPage />;
}
`;
    fs.writeFileSync(page.path, serverPageContent);
    console.log(`Updated ${page.path} (extracted ClientPage)`);
  } else {
    // Server component already. Let's inject metadata if not present
    if (!content.includes('export const metadata')) {
      const metadataStr = `\nimport { Metadata } from 'next';\n\nconst baseUrl = process.env.APP_URL || '${DOMAIN}';\nconst cleanBaseUrl = baseUrl.replace(/\\/$/, '');\n\nexport const metadata: Metadata = {\n  title: '${page.title}',\n  description: '${page.desc}',\n  alternates: {\n    canonical: \`\${cleanBaseUrl}${page.canonical}\`,\n  }\n};\n\n`;
      
      // Inject after imports
      const lastImportIndex = content.lastIndexOf('import ');
      const endOfLastImport = content.indexOf(';', lastImportIndex) + 1;
      
      const newContent = content.slice(0, endOfLastImport) + metadataStr + content.slice(endOfLastImport);
      fs.writeFileSync(page.path, newContent);
      console.log(`Updated ${page.path} (injected metadata)`);
    }
  }
});
