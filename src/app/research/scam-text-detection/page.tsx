import { ProductPage, ProductPageProps } from "../ProductPage";

export const metadata = { title: "Scam Text Detection — ScamAI" };

const scamTextDetectionPageData: ProductPageProps = {
  metadata: {
    title: "Scam Text Detection — ScamAI",
    description: "Detect scam text messages and fraudulent communications with ScamAI's advanced detection technology.",
  },
  breadcrumb: {
    parentPath: "/research",
    parentName: "Research",
    currentName: "Messages",
    nextPath: "/research/link-qr-code",
    nextName: "Link/QR Code",
  },
  hero: {
    category: "Research Solutions for Scam Text Detection",
    headline: "Scam Text Detection\n& Communication Analysis",
    subtitle: "Identify fraudulent messages and malicious communications.\nProtect research participants from text-based scams.",
    tags: ["Text Analysis", "Scam Detection", "NLP"],
    visual: {
      type: "image",
      src: "/link.webp",
      alt: "Text and Link Analysis",
    },
  },
  problemSection: {
    headline: "Text-Based Scams\nAre Becoming Sophisticated",
    description: "Fraudsters use advanced social engineering and AI-generated text to create convincing scam messages.",
    additionalContent: "Researchers studying digital communication need tools to identify and analyze fraudulent text patterns for their work.",
    visual: {
      type: "image",
      src: "/fakenews.webp",
      alt: "Fake news and scam detection",
    },
    valueProps: [
      { title: "Detect scam messages", description: "Identify fraudulent text and phishing attempts." },
      { title: "Analyze patterns", description: "Study communication fraud for research." },
      { title: "Protect participants", description: "Safeguard research subjects from text scams." },
    ],
  },
  solution: {
    productName: "TextGuard™",
    headline: "Our Solution: TextGuard™",
    description: "TextGuard™ uses advanced natural language processing to identify scam patterns, malicious links, and fraudulent communication tactics in text messages and documents.",
    coreDimensions: [
      { title: "Pattern Recognition", description: "Identifies common scam phrases and social engineering tactics." },
      { title: "Link Analysis", description: "Analyzes URLs and QR codes for malicious destinations." },
      { title: "Context Understanding", description: "Evaluates message context and sender behavior patterns." },
    ],
    outputDescription: "Provides detailed analysis with risk scores and specific indicators of fraudulent intent.",
  },
  advantages: {
    headline: "Why Choose TextGuard™?",
    items: [
      { icon: "Target", title: "High Accuracy", description: "Advanced NLP models trained on diverse scam datasets." },
      { icon: "Zap", title: "Real-time Detection", description: "Instant analysis suitable for live communication monitoring." },
      { icon: "Globe", title: "Multi-language Support", description: "Detects scams across multiple languages and regions." },
      { icon: "BrainCircuit", title: "Adaptive Learning", description: "Continuously updated with new scam patterns and tactics." },
    ],
  },
  useCases: {
    headline: "Research Applications",
    items: ["Communication Analysis", "Fraud Research", "Security Studies", "Digital Literacy"],
  },
  apiSection: {
    headline: "Text Analysis API",
    description: "Integrate scam detection into your research workflow with our comprehensive text analysis API.",
    codeExample: {
      request: '{\n  "text": "Congratulations! You\'ve won $1000. Click here to claim: bit.ly/fake-link",\n  "analyze_links": true\n}',
      response: '{\n  "request_id": "txt-jkl-345",\n  "is_scam": true,\n  "confidence_score": 0.943,\n  "indicators": [\n    {\n      "type": "urgency_language",\n      "confidence": 0.89\n    },\n    {\n      "type": "suspicious_link",\n      "confidence": 0.95\n    }\n  ]\n}',
    },
  },
  cta: {
    headline: "Analyze text with confidence.",
    description: "Protect your research and participants with advanced scam text detection capabilities.",
    primary: { text: "Schedule a Demo", href: "https://cal.com/scamai/25min?overlayCalendar=true" },
  },
  backgroundImage: "/link.webp",
};

export default function ScamTextDetectionPage() {
  return <ProductPage data={scamTextDetectionPageData} />;
}
