import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'Scam.ai - Enterprise Deepfake Detection API | Self-Serve Platform',
  description: 'Detect deepfakes in video, audio, and images with 99.9% accuracy. Self-serve API platform with pay-per-scan pricing. No sales calls required. Start in 60 seconds.',
  keywords: ['deepfake detection', 'AI detection', 'video verification', 'audio verification', 'image verification', 'deepfake API', 'fraud prevention'],
  authors: [{ name: 'Reality Inc.' }],
  openGraph: {
    title: 'Scam.ai - Enterprise Deepfake Detection API',
    description: 'Detect deepfakes with 99.9% accuracy. Self-serve API platform with transparent pricing.',
    url: 'https://scam.ai',
    siteName: 'Scam.ai',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Scam.ai - Reality Inc.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scam.ai - Enterprise Deepfake Detection API',
    description: 'Detect deepfakes with 99.9% accuracy. Self-serve platform.',
    images: ['/logo.svg'],
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
    google: 'your-google-verification-code',
  },
};

export default function ScamAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scam.ai',
            applicationCategory: 'SecurityApplication',
            offers: {
              '@type': 'Offer',
              price: '0.01',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '0.01',
                priceCurrency: 'USD',
                unitText: 'per scan',
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              ratingCount: '500',
            },
            description: 'Enterprise-grade deepfake detection API with 99.9% accuracy',
          }),
        }}
      />
      {children}
    </>
  );
}
