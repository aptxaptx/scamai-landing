export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ScamAI",
    "legalName": "Reality Inc.",
    "url": "https://scam.ai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://scam.ai/scamai-logo.svg",
      "width": "400",
      "height": "100"
    },
    "image": "https://scam.ai/scamai-logo.svg",
    "foundingDate": "2024",
    "description": "All-in-one AI Trust Platform for detecting synthetic media and deepfakes in real-time with industry-leading accuracy.",
    "slogan": "Building trust in the AI era",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/scamai",
      "https://linkedin.com/company/scamai",
      "https://www.producthunt.com/products/scam-ai"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "email": "contact@scam.ai"
      },
      {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "ceo@scam.ai"
      }
    ],
    "knowsAbout": [
      "deepfake detection",
      "synthetic media verification",
      "AI trust",
      "computer vision",
      "audio forensics",
      "KYC verification",
      "fraud prevention"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Berkeley SkyDeck"
    },
    "funding": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "2500000"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ScamAI",
    "url": "https://scam.ai",
    "description": "All-in-one AI Trust Platform for detecting synthetic media and deepfakes",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://scam.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ScamAI Platform",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web",
    "url": "https://scam.ai",
    "image": "https://scam.ai/scamai-logo.svg",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "200 free images per month",
      "availability": "https://schema.org/InStock"
    },
    "description": "AI-powered deepfake detection and synthetic media verification platform with real-time analysis.",
    "featureList": [
      "Real-time deepfake detection with 95.3% accuracy",
      "AI detection for images and videos",
      "Audio detection for synthetic voices",
      "GenAI content detection",
      "API integration in under 10 minutes",
      "SOC 2 Type II compliant",
      "GDPR compliant",
      "Processing time under 200ms"
    ],
    "creator": {
      "@type": "Organization",
      "name": "Reality Inc."
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ScamAI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ScamAI is an AI-powered platform for detecting deepfakes and synthetic media in real-time. We provide AI detection, audio detection, and GenAI content verification with industry-leading accuracy."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is ScamAI's deepfake detection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ScamAI's Eva-v1 models are continuously trained on the latest synthetic media techniques with processing times under 200ms. Accuracy varies by media type and attack technique — contact us for benchmark details relevant to your use case."
        }
      },
      {
        "@type": "Question",
        "name": "Is ScamAI compliant with security standards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ScamAI is SOC 2 Type II compliant and GDPR compliant, ensuring enterprise-grade security and data protection."
        }
      },
      {
        "@type": "Question",
        "name": "How much does ScamAI cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ScamAI offers 200 free images per month for free. Pay-as-you-go pricing starts at $0.05 per image. Optional add-ons (face attributes, liveness detection, ID document verification) are $0.008 per image each. Enterprise pricing is available for high-volume users."
        }
      },
      {
        "@type": "Question",
        "name": "How does ScamAI compare to other deepfake detection tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ScamAI offers both vision and audio detection in a single platform with sub-200ms processing, and provides a developer-friendly API with integration in under 10 minutes. Unlike many competitors, ScamAI offers a free tier of 200 images per month, transparent per-image pricing, and is SOC 2 Type II and GDPR compliant."
        }
      },
      {
        "@type": "Question",
        "name": "What industries use ScamAI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ScamAI is used across financial services for KYC verification, content platforms for moderation, call centers for voice authentication, media organizations for content verification, HR departments for remote interview verification, insurance for claims validation, and government agencies for public sector security."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
