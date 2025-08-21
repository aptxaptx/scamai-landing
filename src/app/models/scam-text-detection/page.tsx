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
    nextName: "Link & QR Code",
  },
  hero: {
    category: "Scam Text Detection",
    headline: "Instantly Identify and Neutralize",
    subtitle: "Malicious Texts",
    description: "Scam.ai's Text Guardian™ model analyzes text messages and short-form content in real time to detect and block phishing, smishing, and other text-based scams before a user can click a malicious link or fall for a fraudulent request. 🎣",
    tags: ["Text Analysis", "Scam Detection", "NLP", "Text Guardian"],
    visual: {
      type: "image",
      src: "/link.webp",
      alt: "Text and Link Analysis",
    },
  },
  problemSection: {
    headline: "The Threat: The Evolving Threat\nin Your Pocket",
    description: "Traditional spam filters are no longer enough. Scammers now use sophisticated tactics like personalized messages, URL shorteners, and urgent, emotion-driven language to trick even wary users. These attacks are a direct line to your customers and employees, bypassing many conventional security layers.",
    visual: {
      type: "image",
      src: "/visual.webp",
      alt: "Text-based threat landscape",
    },
    valueProps: [
      { title: "Smishing (SMS Phishing)", description: "Fake delivery notifications, bank alerts, or password reset links sent via text message." },
      { title: "Impersonation Scams", description: "Messages pretending to be from a CEO, colleague, or family member asking for gift cards, wire transfers, or sensitive information." },
      { title: "Urgency & Scare Tactics", description: "Fraudulent claims like \"Your account has been compromised\" or \"A warrant has been issued for your arrest\" to provoke an immediate, panicked response." },
    ],
  },
  threatLandscape: {
    headline: "The Challenge of Text-Based Fraud",
    description: "Text-based scams have evolved beyond simple spam, using sophisticated psychological manipulation and technical evasion tactics to bypass traditional security measures.",
    keyThreats: [
      { icon: "ShieldAlert", text: "Smishing (SMS Phishing)" },
      { icon: "Briefcase", text: "Impersonation Scams" },
      { icon: "MessageSquareWarning", text: "Malicious Links" },
    ],
    dataPoint: "A 2025 report from the Federal Trade Commission (FTC) shows that financial losses from text-based scams have surpassed those from email phishing for the first time, totaling over $350 million last year alone.",
  },
  solution: {
    productName: "Text Guardian™",
    headline: "Our Solution: Text Guardian™ — Proactive Threat Detection",
    description: "Text Guardian™ functions as a sophisticated language analysis engine, understanding the intent and context behind every message to identify malicious behavior with incredible accuracy.",
    coreDimensions: [
      { title: "LLM-Powered Intent Analysis", description: "Powered by a proprietary Large Language Model (LLM) fine-tuned on millions of scams from our ScamNet DB™, our model goes beyond keywords to understand the true intent, urgency, and manipulative tactics in a message." },
      { title: "Real-Time Link & URL Unmasking", description: "The model automatically analyzes any embedded links, following redirects and checking the final destination against our ScamNet DB™ for known phishing domains, even if the link is shortened or obfuscated." },
      { title: "Threat Actor Pattern Recognition", description: "Text Guardian™ identifies and cross-references unique phrases, phone number blocks, and URL patterns associated with known scam campaigns, allowing it to block new attacks that share a common origin." },
    ],
    outputDescription: "The model's output is a clear, actionable JSON response containing a risk score, the specific scam type detected (e.g., 'smishing', 'impersonation'), and any identified malicious entities.",
  },
  advantages: {
    headline: "Our Advantage: Why Choose Text Guardian™?",
    items: [
      { icon: "Zap", title: "Millisecond-Level Response", description: "Optimized for high-throughput messaging platforms, ensuring instant analysis without delaying message delivery." },
      { icon: "Target", title: "Unparalleled Accuracy", description: "Our fine-tuned LLM, trained on the world's largest proprietary database of scam texts, dramatically reduces false positives and detects novel threats." },
      { icon: "Globe", title: "Exceptional Robustness", description: "Effectively understands and analyzes text containing typos, slang, emojis, and multiple languages." },
      { icon: "BrainCircuit", title: "Constantly Evolving", description: "Our model is continuously re-trained with the latest scam data from ScamNet DB™, ensuring it stays ahead of evolving scammer tactics." },
    ],
  },
  useCases: {
    headline: "Use Cases & Applications",
    items: ["Telecommunications & Messaging Apps", "Enterprise Communications", "Financial Services", "Online Marketplaces"],
  },
  apiSection: {
    headline: "Seamless Integration & Code Example",
    description: "Deploying Text Guardian™ is straightforward. Our developer-friendly REST API allows you to start protecting your platform in minutes.",
    codeExample: {
      request: '{\n  "sender": "+18885551234",\n  "message_body": "Your Fedex package has a customs fee. Pay now to avoid delays: https://bit.ly/xyz123"\n}',
      response: '{\n  "request_id": "txt-def-456",\n  "is_scam": true,\n  "risk_score": 0.99,\n  "scam_type": "delivery_smishing",\n  "malicious_entities": [\n    {\n      "type": "url",\n      "value": "https://bit.ly/xyz123",\n      "final_destination": "https://phishing-site.example.com/payment"\n    }\n  ]\n}',
    },
  },
  cta: {
    headline: "Take the Next Step",
    description: "Protect your organization with advanced text-based scam detection.",
    primary: { text: "Request a Demo", href: "/demo" },
  },
  backgroundImage: "/link.webp",
};

export default function ScamTextDetectionPage() {
  return <ProductPage data={scamTextDetectionPageData} />;
}
