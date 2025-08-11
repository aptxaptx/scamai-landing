import { ProductPage, ProductPageProps } from "../ProductPage";

export const metadata = { title: "ScamNet Database — ScamAI" };

const scamNetDatabasePageData: ProductPageProps = {
  metadata: {
    title: "ScamNet Database — ScamAI",
    description: "Access the world's largest database of scam patterns and fraudulent content for research.",
  },
  breadcrumb: {
    parentPath: "/research",
    parentName: "Research",
    currentName: "ScamNet Database",
    nextPath: "/research/datasets",
    nextName: "Datasets",
  },
  hero: {
    category: "Research Database for Scam Analysis",
    headline: "ScamNet Database\nGlobal Scam Intelligence",
    subtitle: "Access the world's largest database of scam patterns.\nFuel your research with comprehensive fraud data.",
    tags: ["Database", "Scam Intelligence", "Research Data"],
    visual: {
      type: "image",
      src: "/scamdb.webp",
      alt: "ScamNet Database",
    },
  },
  problemSection: {
    headline: "Researchers Need\nComprehensive Scam Data",
    description: "Understanding fraud patterns requires access to large-scale, well-organized datasets that are difficult to obtain.",
    additionalContent: "ScamNet Database provides researchers with the most comprehensive collection of scam data ever assembled, enabling groundbreaking research in fraud detection and prevention.",
    visual: {
      type: "image",
      src: "/dashboard.webm",
      alt: "Database dashboard",
    },
    valueProps: [
      { title: "Comprehensive data", description: "Millions of verified scam samples across all categories." },
      { title: "Research-ready", description: "Clean, labeled datasets perfect for academic research." },
      { title: "Continuously updated", description: "Real-time addition of new scam patterns and variants." },
    ],
  },
  solution: {
    productName: "ScamNet Database™",
    headline: "Our Solution: ScamNet Database™",
    description: "ScamNet Database™ is the world's most comprehensive collection of scam data, providing researchers with access to millions of verified fraud samples across text, images, audio, and video.",
    coreDimensions: [
      { title: "Multi-Modal Data", description: "Text, image, audio, and video scam samples in one database." },
      { title: "Global Coverage", description: "Scam patterns from across the globe in multiple languages." },
      { title: "Verified Samples", description: "All data is verified and labeled by security experts." },
    ],
    outputDescription: "Provides structured datasets with comprehensive metadata and labels for research use.",
  },
  advantages: {
    headline: "Why Choose ScamNet Database™?",
    items: [
      { icon: "Globe", title: "Global Scale", description: "The largest collection of verified scam data worldwide." },
      { icon: "Target", title: "High Quality", description: "Expert-verified and labeled datasets ready for research." },
      { icon: "Zap", title: "Easy Access", description: "Simple API access and downloadable datasets." },
      { icon: "BrainCircuit", title: "Research Focused", description: "Designed specifically for academic and research use." },
    ],
  },
  useCases: {
    headline: "Research Applications",
    items: ["Machine Learning Training", "Fraud Pattern Analysis", "Security Research", "Academic Studies"],
  },
  apiSection: {
    headline: "Database Access API",
    description: "Access our comprehensive scam database through our research-friendly API with flexible querying options.",
    codeExample: {
      request: '{\n  "query": {\n    "type": "phishing",\n    "language": "en",\n    "date_range": "2024"\n  },\n  "limit": 1000\n}',
      response: '{\n  "request_id": "db-mno-678",\n  "total_results": 15420,\n  "samples": [\n    {\n      "id": "scam_001",\n      "type": "phishing",\n      "content": "...",\n      "labels": ["urgent", "financial"],\n      "verified": true\n    }\n  ]\n}',
    },
  },
  cta: {
    headline: "Access the data you need.",
    description: "Get research access to the world's most comprehensive scam database.",
    primary: { text: "Request Access", href: "https://cal.com/scamai/25min?overlayCalendar=true" },
  },
  backgroundImage: "/scamdb.webp",
};

export default function ScamNetDatabasePage() {
  return <ProductPage data={scamNetDatabasePageData} />;
}
