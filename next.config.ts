import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Redirect root paths to default locale (en)
      {
        source: '/products',
        destination: '/en/products',
        permanent: true,
      },
      {
        source: '/products/vision-detection',
        destination: '/en/products/vision-detection',
        permanent: true,
      },
      {
        source: '/products/audio-detection',
        destination: '/en/products/audio-detection',
        permanent: true,
      },
      {
        source: '/products/scam-database',
        destination: '/en/products/scam-database',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/en/resources',
        permanent: true,
      },
      {
        source: '/resources/documentation',
        destination: '/en/resources/documentation',
        permanent: true,
      },
      {
        source: '/resources/security-compliance',
        destination: '/en/resources/security-compliance',
        permanent: true,
      },
      {
        source: '/resources/compliance',
        destination: '/en/resources/security-compliance',
        permanent: true,
      },
      {
        source: '/resources/security',
        destination: '/en/resources/security-compliance',
        permanent: true,
      },
      {
        source: '/company',
        destination: '/en/company',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/en/contact',
        permanent: true,
      },
      {
        source: '/demo',
        destination: '/en/demo',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/en/pricing',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/en/news',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/en/about',
        permanent: true,
      },
      {
        source: '/msa',
        destination: '/en/msa',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/en/privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/en/terms',
        permanent: true,
      },
      {
        source: '/cookies',
        destination: '/en/cookies',
        permanent: true,
      },
      {
        source: '/platform',
        destination: '/en/products',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/en/products',
        permanent: true,
      },
      {
        source: '/security',
        destination: '/en/resources/security-compliance',
        permanent: true,
      },
      // Old research/models redirects to products
      {
        source: '/research/:slug*',
        destination: '/en/products',
        permanent: true,
      },
      {
        source: '/models/:slug*',
        destination: '/en/products',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
