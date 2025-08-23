import { ProductPage, ProductPageProps } from "../../research/ProductPage";

export const metadata = { title: "GenAI Media Detection — ScamAI" };

const aiGeneratedMediaPageData: ProductPageProps = {
  metadata: {
    title: "GenAI Media Detection — ScamAI",
    description: "Detect AI-generated images and videos with ScamAI's advanced detection technology.",
  },

  hero: {
    category: "AI-Generated Media Detection",
    headline: "Detect AI-Generated Images and Video",
    subtitle: "Verifying Reality in a Synthetic World",
    description: "Scam.ai's Visual Authenticity™ model analyzes visual content for the hidden signatures of generative AI, providing instant alerts before fake products, evidence, or realities can be used to deceive.",
    tags: ["GenAI", "Synthetic Media", "Detection", "Visual Authenticity"],
    visual: {
      type: "image",
      src: "/GenAI.webp",
      alt: "AI Generated Media Detection",
    },
  },
  problemSection: {
    headline: "The Threat: Is Any Image\nReal Anymore?",
    description: "With text-to-image and text-to-video models, anyone can create convincing, high-resolution visuals of anything imaginable in seconds. This has created a new wave of fraud based on fabricating reality itself, rendering simple visual inspection obsolete.",
    visual: {
      type: "image",
      src: "/visual.webp",
      alt: "Visual generation threat landscape",
    },
    valueProps: [
      { title: "E-commerce & Product Fraud", description: "Scammers use AI to generate alluring images of products that don't exist, taking payment for items they can never ship." },
      { title: "Fabricated Evidence & Forgery", description: "Creating fake but realistic photo or video \"evidence\" for use in insurance claims, legal disputes, or news reports." },
      { title: "Advanced Catfishing & Romance Scams", description: "Using unique, hyper-realistic, and completely fake profile pictures that cannot be found with a reverse image search." },
    ],
  },
  threatLandscape: {
    headline: "The Challenge of Synthetic Visual Content",
    description: "AI-generated images and videos are becoming indistinguishable from reality, creating unprecedented challenges for content verification and trust.",
    keyThreats: [
      { icon: "ShieldAlert", text: "E-commerce & Product Fraud" },
      { icon: "Briefcase", text: "Fabricated Evidence & Forgery" },
      { icon: "MessageSquareWarning", text: "Brand & Copyright Dilution" },
    ],
    dataPoint: "As of August 2025, it is estimated that over 15 billion images have been created by generative AI models, with less than 5% containing visible watermarks or disclosures.",
  },
  solution: {
    productName: "Visual Authenticity™",
    headline: "Our Solution: Visual Authenticity™ — The Pixel Provenance Expert",
    description: "Visual Authenticity™ acts as a digital art forensics expert. It looks beyond what an image depicts and analyzes the very fabric of its pixels to determine its origin—whether it was captured by a camera or created by a generative model.",
    coreDimensions: [
      { title: "Generative Model Fingerprinting", description: "Identifies the invisible, systematic patterns and noise profiles that are unique to specific families of generative models (e.g., the digital \"brushstrokes\" of DALL-E vs. Midjourney)." },
      { title: "Unnatural Detail & Consistency Analysis", description: "Scrutinizes images for tell-tale AI flaws, such as flawed physics in shadows and reflections, unnatural symmetry, or illogical details in complex backgrounds." },
      { title: "Frequency Spectrum Analysis", description: "Analyzes the image in the frequency domain to spot the overly smooth or unnaturally regular patterns that are characteristic of generated, rather than naturally captured, visual information." },
    ],
    outputDescription: "The API returns a JSON object in real-time, containing an \"is_generated\" boolean, a \"confidence_score\", and a prediction of the \"source_model_family\".",
  },
  advantages: {
    headline: "Our Advantage: Why Choose Visual Authenticity™?",
    items: [
      { icon: "Zap", title: "Millisecond-Level Response", description: "Optimized for real-time communications like phone calls and voice chat, ensuring instant detection with no perceivable latency." },
      { icon: "Target", title: "Unparalleled Accuracy", description: "Trained on the world's largest proprietary database of synthetic and real visual data, achieving industry-leading low false-positive and high-recall rates." },
      { icon: "Globe", title: "Exceptional Robustness", description: "Maintains stable, high-performance detection even across various compression formats and image qualities." },
      { icon: "BrainCircuit", title: "Constantly Evolving", description: "Our model continuously learns from the latest global scam attempts and emerging generation techniques, allowing it to self-evolve and always stay one step ahead of attackers." },
    ],
  },
  useCases: {
    headline: "Use Cases & Applications",
    items: ["E-commerce & Marketplace Trust", "Insurance & Financial Services", "Social Media & Dating Apps", "Legal & News Media"],
  },
  apiSection: {
    headline: "API Integration",
    description: "Ready to integrate Visual Authenticity™ into your platform? Our comprehensive API documentation provides everything you need to get started, including detailed endpoints, authentication, and code examples.",
    apiDocumentation: {
      text: "View Complete API Documentation",
      href: "https://docu.scam.ai/introduction",
    },
  },
  cta: {
    headline: "Take the Next Step",
    description: "Protect your organization with advanced AI-generated media detection.",
    primary: { text: "Request a Demo", href: "/demo" },
  },
  backgroundImage: "/GenAI.webp",
};

export default function AIGeneratedMediaPage() {
  return <ProductPage data={aiGeneratedMediaPageData} />;
}
