import { ProductPage, ProductPageProps } from "../ProductPage";

export const metadata = { title: "Link & QR Code Detection — ScamAI" };

const linkQRCodePageData: ProductPageProps = {
  metadata: {
    title: "Link & QR Code Detection — ScamAI",
    description: "Detect malicious links and QR codes with ScamAI's advanced URL analysis technology.",
  },
  breadcrumb: {
    parentPath: "/research",
    parentName: "Research",
    currentName: "Link & QR Code",
    nextPath: "/research/large-scale-database",
    nextName: "ScamNet Database",
  },
  hero: {
    category: "Link & QR Code Detection",
    headline: "Link & QR Code Detection",
    subtitle: "Malicious URL Analysis",
    description: "Identify dangerous links and malicious QR codes. Protect against URL-based attacks and fraud.",
    tags: ["URL Analysis", "QR Code", "Link Detection"],
    visual: {
      type: "image",
      src: "/link.webp",
      alt: "Link and QR Code Analysis",
    },
  },
  problemSection: {
    headline: "Malicious Links\nAre Everywhere",
    description: "Attackers use shortened URLs, QR codes, and deceptive links to bypass security measures and trick users.",
    additionalContent: "Researchers need tools to analyze and detect malicious URLs and QR codes that are used in various attack vectors and fraud schemes.",
    visual: {
      type: "image",
      src: "/visual.webp",
      alt: "URL and link analysis tools",
    },
    valueProps: [
      { title: "Detect malicious URLs", description: "Identify dangerous links and shortened URLs automatically." },
      { title: "Analyze QR codes", description: "Decode and analyze QR codes for malicious content." },
      { title: "Research security", description: "Study URL-based attack patterns and trends." },
    ],
  },
  solution: {
    productName: "LinkGuard™",
    headline: "Our Solution: LinkGuard™",
    description: "LinkGuard™ analyzes URLs, shortened links, and QR codes to detect malicious destinations, phishing attempts, and fraudulent websites using advanced pattern recognition.",
    coreDimensions: [
      { title: "URL Analysis", description: "Deep analysis of URL structure, domain reputation, and redirection chains." },
      { title: "QR Code Decoding", description: "Decode QR codes and analyze embedded URLs for malicious content." },
      { title: "Reputation Scoring", description: "Real-time reputation analysis of domains and URL patterns." },
    ],
    outputDescription: "Provides comprehensive analysis with risk scores and detailed threat intelligence for URLs and QR codes.",
  },
  advantages: {
    headline: "Why Choose LinkGuard™?",
    items: [
      { icon: "Target", title: "High Detection Rate", description: "Advanced algorithms trained on millions of malicious URLs." },
      { icon: "Zap", title: "Real-time Analysis", description: "Instant URL and QR code analysis for immediate threat detection." },
      { icon: "Globe", title: "Global Coverage", description: "Monitors threats across all top-level domains and URL shorteners." },
      { icon: "BrainCircuit", title: "Adaptive Intelligence", description: "Continuously updated with new URL-based attack patterns." },
    ],
  },
  useCases: {
    headline: "Research Applications",
    items: ["Phishing Research", "URL Security Analysis", "QR Code Security", "Fraud Pattern Studies"],
  },
  apiSection: {
    headline: "URL Analysis API",
    description: "Integrate link and QR code analysis into your research workflow with our comprehensive URL security API.",
    codeExample: {
      request: '{\n  "url": "https://bit.ly/suspicious-link",\n  "analyze_qr": true,\n  "deep_scan": true\n}',
      response: '{\n  "request_id": "url-pqr-901",\n  "is_malicious": true,\n  "confidence_score": 0.918,\n  "threat_type": "phishing",\n  "final_destination": "fake-bank-login.com",\n  "reputation_score": 0.12,\n  "redirects": 3\n}',
    },
  },
  cta: {
    headline: "Analyze links with confidence.",
    description: "Protect your research with advanced URL and QR code threat detection capabilities.",
    primary: { text: "Schedule a Demo", href: "https://cal.com/scamai/25min?overlayCalendar=true" },
  },
  backgroundImage: "/fakenews.webp",
};

export default function LinkQRCodePage() {
  return <ProductPage data={linkQRCodePageData} />;
}
