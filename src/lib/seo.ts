import { Metadata } from 'next';
import { locales } from '@/i18n/config';

export type Locale = (typeof locales)[number];

const baseUrl = 'https://scam.ai';

interface GenerateMetadataParams {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
}

export function generatePageMetadata({
  locale,
  path,
  title,
  description,
  keywords = [],
  ogImage = `${baseUrl}/scamai-logo.svg`,
  noindex = false,
}: GenerateMetadataParams): Metadata {
  const fullUrl = `${baseUrl}/${locale}${path}`;
  const fullTitle = path === '' ? title : `${title} | ScamAI`;

  // Generate alternates for all locales
  const languages: Record<string, string> = {};
  locales.forEach((loc) => {
    languages[loc] = `${baseUrl}/${loc}${path}`;
  });

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'deepfake detection',
      'synthetic media detection',
      'AI fraud prevention',
      'ScamAI',
    ],
    authors: [{ name: 'Reality Inc.' }],
    creator: 'Reality Inc.',
    publisher: 'Reality Inc.',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
      languages,
    },
    openGraph: {
      type: 'website',
      locale,
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: 'ScamAI',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@scamai',
      site: '@scamai',
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
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
  };
}

// Pre-defined metadata for common pages
export const pageMetadata = {
  home: {
    title: 'ScamAI - AI Trust Platform | Deepfake Detection & Synthetic Media Verification',
    description:
      'All-in-one AI Trust Platform for detecting synthetic media and deepfakes in real-time. Industry-leading accuracy with SOC 2 Type II compliance. 200 free images per month.',
    keywords: [
      'AI trust platform',
      'real-time detection',
      'Eva-v1 AI model',
      'media verification',
    ],
  },
  products: {
    title: 'Products - AI Detection Solutions',
    description:
      'Comprehensive suite of AI-powered detection tools for synthetic media, deepfakes, and fraud prevention. Vision, audio, and database solutions.',
    keywords: ['AI products', 'detection solutions', 'API integration'],
  },
  visionDetection: {
    title: 'Vision Detection - Image & Video Deepfake Detection',
    description:
      'Detect AI-generated images and deepfake videos with 95.3% accuracy. Real-time processing under 200ms. Perfect for KYC, content moderation, and fraud prevention.',
    keywords: [
      'image detection',
      'video detection',
      'face swap detection',
      'synthetic image',
    ],
  },
  audioDetection: {
    title: 'Audio Detection - Voice Clone & Synthetic Audio Detection',
    description:
      'Identify synthetic voices, cloned audio, and AI-generated speech with industry-leading accuracy. Protect against voice phishing and audio fraud.',
    keywords: [
      'voice clone detection',
      'audio deepfake',
      'synthetic voice',
      'voice phishing',
    ],
  },
  scamDatabase: {
    title: 'Scam Database - Comprehensive Fraud Intelligence',
    description:
      'Access our extensive database of known scams, fraud patterns, and synthetic media examples. Stay protected with real-time threat intelligence.',
    keywords: ['scam database', 'fraud intelligence', 'threat database'],
  },
  pricing: {
    title: 'Pricing - Flexible Plans for Every Need',
    description:
      'Start free with 200 images per month. Transparent pricing for individuals, businesses, and enterprises. No hidden fees.',
    keywords: ['pricing', 'plans', 'free tier', 'enterprise pricing'],
  },
  resources: {
    title: 'Resources - Documentation & Learning Center',
    description:
      'Explore our comprehensive documentation, guides, and resources to get the most out of ScamAI platform.',
    keywords: ['documentation', 'resources', 'guides', 'tutorials'],
  },
  documentation: {
    title: 'Documentation - API Reference & Integration Guides',
    description:
      'Complete API documentation, integration guides, and code examples. Get started with ScamAI in under 10 minutes.',
    keywords: ['API documentation', 'integration guide', 'API reference'],
  },
  securityCompliance: {
    title: 'Security & Compliance - SOC 2 Type II & GDPR',
    description:
      'Enterprise-grade security with SOC 2 Type II and GDPR compliance. Learn about our security practices and certifications.',
    keywords: [
      'SOC 2',
      'GDPR',
      'security compliance',
      'data protection',
      'privacy',
    ],
  },
  about: {
    title: 'About Us - Building Trust in the AI Era',
    description:
      'Learn about Reality Inc., the team behind ScamAI. Our mission is to build trust and safety in the age of AI-generated content.',
    keywords: ['about', 'Reality Inc', 'company', 'team', 'mission'],
  },
  company: {
    title: 'Company - Meet the Team Behind ScamAI',
    description:
      'Built by a team obsessed with trust, safety, and verification. Learn about our vision and values.',
    keywords: ['company', 'team', 'vision', 'values'],
  },
  contact: {
    title: 'Contact Us - Get in Touch',
    description:
      'Get in touch with our team for sales inquiries, support, or partnership opportunities.',
    keywords: ['contact', 'support', 'sales', 'partnership'],
  },
  news: {
    title: 'News & Updates - Latest from ScamAI',
    description:
      'Stay updated with the latest news, product updates, and insights from ScamAI.',
    keywords: ['news', 'updates', 'blog', 'announcements'],
  },
  demo: {
    title: 'Book a Demo - Experience ScamAI',
    description:
      'Schedule a personalized demo to see how ScamAI can protect your business from synthetic media and deepfakes.',
    keywords: ['demo', 'trial', 'consultation', 'book demo'],
  },
  msa: {
    title: 'Master Service Agreement - Legal Terms',
    description:
      'Review our Master Service Agreement outlining the terms and conditions for using ScamAI services.',
    keywords: ['MSA', 'service agreement', 'legal terms'],
  },
  privacy: {
    title: 'Privacy Policy - Your Data Protection',
    description:
      'Learn how ScamAI protects your privacy and handles your data. GDPR compliant privacy practices.',
    keywords: ['privacy policy', 'data protection', 'GDPR', 'privacy'],
  },
  terms: {
    title: 'Terms of Service - Usage Terms',
    description:
      'Read our terms of service outlining the rules and guidelines for using ScamAI platform.',
    keywords: ['terms of service', 'TOS', 'usage terms', 'legal'],
  },
  cookies: {
    title: 'Cookie Policy - How We Use Cookies',
    description:
      'Learn about how ScamAI uses cookies to improve your experience and our compliance with cookie regulations.',
    keywords: ['cookies', 'cookie policy', 'tracking', 'privacy'],
  },
  newsletter: {
    title: 'Deepfake Weekly Newsletter',
    description:
      'Stay informed with curated weekly insights on deepfake technology, security breaches, and policy updates from ScamAI.',
    keywords: ['newsletter', 'deepfake news', 'AI security', 'weekly digest', 'threat intelligence'],
  },
};
