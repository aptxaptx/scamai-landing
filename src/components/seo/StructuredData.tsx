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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5"
    },
    "description": "AI-powered deepfake detection and synthetic media verification platform with real-time analysis.",
    "featureList": [
      "Real-time deepfake detection with 95.3% accuracy",
      "Vision detection for images and videos",
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
          "text": "ScamAI is an AI-powered platform for detecting deepfakes and synthetic media in real-time. We provide vision detection, audio detection, and GenAI content verification with industry-leading accuracy."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is ScamAI's deepfake detection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ScamAI achieves 95.3% detection accuracy with processing times under 200ms. Our platform is continuously trained on the latest synthetic media techniques."
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
          "text": "ScamAI offers 200 free images per month. For higher volumes and enterprise needs, custom pricing is available based on your usage."
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
