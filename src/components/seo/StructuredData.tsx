export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ScamAI",
    "legalName": "Reality Inc.",
    "url": "https://scam.ai",
    "logo": "https://scam.ai/scamai-logo.svg",
    "foundingDate": "2024",
    "description": "All-in-one AI Trust Platform for detecting synthetic media and deepfakes in real-time with industry-leading accuracy.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/scamai",
      "https://linkedin.com/company/scamai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "contact@scam.ai"
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
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "100 free checks per month"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "description": "AI-powered deepfake detection and synthetic media verification platform with real-time analysis.",
    "featureList": [
      "Real-time deepfake detection",
      "Vision detection for images and videos",
      "Audio detection for synthetic voices",
      "API integration in under 10 minutes",
      "SOC 2 Type II compliant",
      "GDPR compliant"
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
    </>
  );
}
