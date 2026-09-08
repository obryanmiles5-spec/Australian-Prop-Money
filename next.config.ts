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
            value: 'no-referrer-when-downgrade'
          }
        ],
      },
    ];
  },
  async redirects() {
    return [
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
