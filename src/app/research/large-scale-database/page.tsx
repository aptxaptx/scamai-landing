import { ProductPage, ProductPageProps } from "../ProductPage";

export const metadata = { title: "ScamNet Database — ScamAI" };

const scamNetDatabasePageData: ProductPageProps = {
  metadata: {
    title: "ScamNet Database — ScamAI",
    description: "Access the world's largest database of scam patterns and fraudulent content for research.",
  },

  hero: {
    category: "Research Database for Scam Analysis",
    headline: "The Intelligence Engine Powering",
    subtitle: "Next-Generation Fraud Defense",
    description: "Welcome to ScamNet DB™, the most comprehensive and real-time database of active scams on the planet. This is not just a static blocklist; it's a living ecosystem of threat intelligence that forms the core foundation of the entire Scam.ai platform.",
    tags: ["Database", "Scam Intelligence", "Research Data", "ScamNet DB"],
    visual: {
      type: "image",
      src: "/scamdb.webp",
      alt: "ScamNet Database",
    },
  },
  problemSection: {
    headline: "The Threat: Outpacing\nthe Speed of Scams",
    description: "Scammers launch and discard fraudulent domains, phone numbers, and crypto wallets in minutes. By the time traditional threat intelligence reports are published, the damage is done and the attackers have moved on. Fighting a real-time threat with outdated data is a losing battle.",
    visual: {
      type: "image",
      src: "/visual.webp",
      alt: "Scam speed threat landscape",
    },
    valueProps: [
      { title: "Rapid Mutation", description: "Scammers constantly change their tactics, content, and infrastructure to evade detection." },
      { title: "Siloed Information", description: "Threat data is often scattered across different platforms, making it impossible to see the full picture of a coordinated attack." },
      { title: "Data Latency", description: "Static blocklists are often hours or days old, leaving a critical window of vulnerability open." },
    ],
  },
  threatLandscape: {
    headline: "The Challenge of Real-Time Threat Intelligence",
    description: "Traditional threat intelligence cannot keep pace with modern scam operations that evolve and adapt in real-time, requiring a fundamentally different approach to threat detection and prevention.",
    keyThreats: [
      { icon: "ShieldAlert", text: "Rapid Mutation" },
      { icon: "Briefcase", text: "Siloed Information" },
      { icon: "MessageSquareWarning", text: "Lack of Context" },
    ],
    dataPoint: "In 2025, the average lifespan of a phishing website is less than 4 hours, making real-time intelligence the only effective defense.",
  },
  solution: {
    productName: "ScamNet DB™",
    headline: "Our Solution: ScamNet DB™ — A Living Intelligence Ecosystem",
    description: "ScamNet DB™ is designed to ingest, process, and act on threat data at machine speed. It provides the crucial context and ground truth needed to power effective, real-time fraud detection.",
    coreDimensions: [
      { title: "Multi-Source, Global Ingestion Engine", description: "We collect data from a massive network of reliable sources, including dark web monitoring, a global honeypot network, direct user reports, and proprietary data feeds from our partners." },
      { title: "AI-Powered Correlation & Enrichment", description: "Our AI engine instantly processes and enriches raw data, linking seemingly unrelated entities. It connects a scammer's phone number to the phishing link they sent, the scam content used, the crypto wallet for payment, and the time of the report." },
      { title: "Instantaneous Verification & Propagation", description: "Verified intelligence is propagated across our network in milliseconds. When a new scam is detected, every Scam.ai model is instantly updated and ready to block it." },
    ],
    outputDescription: "The API returns a rich JSON object containing an entity's risk score, history, and all known connections to other malicious infrastructure.",
  },
  advantages: {
    headline: "The Unbeatable Edge",
    items: [
      { icon: "Globe", title: "Massive Scale", description: "Contains tens of millions of continuously updated, verified entries, including fraudulent phone numbers, domains, email addresses, crypto wallets, and more." },
      { icon: "Zap", title: "Real-Time Speed", description: "Responds to API queries in milliseconds, providing instant risk assessment for your applications. New threats are added to the database the moment they are detected." },
      { icon: "Target", title: "Unmatched Richness", description: "Provides deep context, not just a \"bad/not bad\" label. Understand the history, connections, and risk profile of any entity." },
      { icon: "BrainCircuit", title: "Platform Synergy", description: "This is the single source of truth that trains, validates, and powers all other Scam.ai models. It's why our detection products are always smarter and faster. ⚡️" },
    ],
  },
  useCases: {
    headline: "Use Cases & Applications",
    items: ["Threat Intelligence Enrichment", "Proactive Infrastructure Blocking", "Security Research & Forensics", "Transaction & Onboarding Risk Assessment"],
  },
  apiSection: {
    headline: "API Integration",
    description: "Ready to integrate ScamNet DB™ into your platform? Our comprehensive API documentation provides everything you need to get started, including detailed endpoints, authentication, and code examples.",
    apiDocumentation: {
      text: "View Complete API Documentation",
      href: "https://docu.scam.ai/introduction",
    },
  },
  cta: {
    headline: "Harness Our Core Intelligence",
    description: "Power your fraud detection with the world's most comprehensive real-time scam database.",
    primary: { text: "Request a Demo", href: "/demo" },
  },
  backgroundImage: "/scamdb.webp",
};

export default function ScamNetDatabasePage() {
  return <ProductPage data={scamNetDatabasePageData} />;
}
