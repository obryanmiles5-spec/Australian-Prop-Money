import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url, Accept'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://drive.google.com https://lh3.googleusercontent.com https://images.unsplash.com https://www.google-analytics.com https://www.googletagmanager.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://drive.google.com https://lh3.googleusercontent.com; frame-src 'self' https://www.youtube.com https://youtube.com; object-src 'none'; base-uri 'self';"
          }
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/shop/australian-dollar',
        destination: '/shop/australian-notes',
        permanent: true,
      },
      {
        source: '/shop/us-dollar',
        destination: '/shop/bundle-packs',
        permanent: true,
      },
      {
        source: '/product/100-australian-dollar-prop-note',
        destination: '/product/100-aud-new-prop-money',
        permanent: true,
      },
      {
        source: '/blog/how-prop-money-is-used-in-film',
        destination: '/blog/where-to-buy-realistic-australian-prop-money-film-photography',
        permanent: true,
      },
      {
        source: '/product/buy-counterfeit-$10-aud-old',
        destination: '/product/10-aud-old-prop-money',
        permanent: true,
      },
      {
        source: '/product/buy-counterfeit-$20-aud-old',
        destination: '/product/20-aud-old-prop-money',
        permanent: true,
      },
      {
        source: '/product/buy-counterfeit-$50-aud-old',
        destination: '/product/50-aud-old-prop-money',
        permanent: true,
      },
      {
        source: '/product/buy-counterfeit-$100-aud-old',
        destination: '/product/100-aud-old-prop-money',
        permanent: true,
      },
      {
        source: '/product/buy-counterfeit-$10-aud-new',
        destination: '/product/10-aud-new-prop-money',
        permanent: true,
      },
      {
        source: '/product/buy-counterfeit-$20-aud-new',
        destination: '/product/20-aud-new-prop-money',
        permanent: true,
      },
      {
        source: '/product/buy-counterfeit-$50-aud-new',
        destination: '/product/50-aud-new-prop-money',
        permanent: true,
      },
      {
        source: '/product/buy-counterfeit-$100-aud-new',
        destination: '/product/100-aud-new-prop-money',
        permanent: true,
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'standalone',
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
