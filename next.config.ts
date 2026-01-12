import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
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
      {
        source: '/research/ai-generated-media',
        destination: '/models/ai-generated-media',
        permanent: true,
      },
      {
        source: '/research/deepfakes',
        destination: '/models/deepfakes',
        permanent: true,
      },
      {
        source: '/research/voice-clones',
        destination: '/models/voice-clones',
        permanent: true,
      },
      {
        source: '/research/scam-text-detection',
        destination: '/models/scam-text-detection',
        permanent: true,
      },
      {
        source: '/research/link-qr-code',
        destination: '/models/link-qr-code',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
