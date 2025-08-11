import { ProductPage, ProductPageProps } from "../ProductPage";

export const metadata = { title: "GenAI Images/Videos — ScamAI" };

const aiGeneratedMediaPageData: ProductPageProps = {
  metadata: {
    title: "GenAI Images/Videos — ScamAI",
    description: "Detect AI-generated images and videos with ScamAI's advanced detection technology.",
  },
  breadcrumb: {
    parentPath: "/research",
    parentName: "Research",
    currentName: "AI-Generated Media",
    nextPath: "/research/voice-clones",
    nextName: "Voice Clones",
  },
  hero: {
    category: "Research Solutions for AI-Generated Media Detection",
    headline: "AI-Generated Media\nDetection & Verification",
    subtitle: "Identify synthetic images and videos created by AI models.\nEnsure media authenticity in your research.",
    tags: ["GenAI", "Synthetic Media", "Detection"],
    visual: {
      type: "image",
      src: "/GenAI.webp",
      alt: "AI Generated Media Detection",
    },
  },
  problemSection: {
    headline: "AI-Generated Content\nIs Everywhere",
    description: "With tools like Midjourney, DALL-E, and Sora, synthetic media is becoming indistinguishable from reality.",
    additionalContent: "Researchers need reliable tools to verify media authenticity and ensure the integrity of their work and datasets.",
    visual: {
      type: "image",
      src: "/visual.webp",
      alt: "Visual verification tools",
    },
    valueProps: [
      { title: "Detect synthetic media", description: "Identify AI-generated images and videos automatically." },
      { title: "Verify authenticity", description: "Ensure media integrity for research datasets." },
      { title: "Research reliability", description: "Build trust in your research findings." },
    ],
  },
  solution: {
    productName: "Visual Authenticity™",
    headline: "Our Solution: Visual Authenticity™",
    description: "Visual Authenticity™ analyzes digital media for the subtle artifacts and patterns that indicate AI generation, providing researchers with reliable verification tools.",
    coreDimensions: [
      { title: "Model Fingerprinting", description: "Identifies unique signatures from popular AI generation models." },
      { title: "Artifact Detection", description: "Finds compression artifacts and generation inconsistencies." },
      { title: "Pattern Analysis", description: "Analyzes pixel-level patterns that indicate synthetic generation." },
    ],
    outputDescription: "Returns detailed analysis with confidence scores and specific evidence of AI generation.",
  },
  advantages: {
    headline: "Why Choose Visual Authenticity™?",
    items: [
      { icon: "Target", title: "High Accuracy", description: "Industry-leading detection rates across multiple AI models." },
      { icon: "Zap", title: "Fast Processing", description: "Rapid analysis suitable for large research datasets." },
      { icon: "Globe", title: "Multi-Model Coverage", description: "Detects content from various popular AI generation tools." },
      { icon: "BrainCircuit", title: "Continuous Updates", description: "Updated regularly to detect new generation methods." },
    ],
  },
  useCases: {
    headline: "Research Applications",
    items: ["Dataset Verification", "Media Authentication", "Academic Research", "Content Analysis"],
  },
  apiSection: {
    headline: "Research-Ready API",
    description: "Integrate seamlessly into your research workflow with our developer-friendly API designed for academic and research use.",
    codeExample: {
      request: '{\n  "image_url": "https://example.com/research_image.jpg"\n}',
      response: '{\n  "request_id": "img-def-789",\n  "is_ai_generated": true,\n  "confidence_score": 0.952,\n  "detected_model": "stable_diffusion",\n  "evidence": [\n    {\n      "type": "compression_artifacts",\n      "confidence": 0.89\n    }\n  ]\n}',
    },
  },
  cta: {
    headline: "Verify with confidence.",
    description: "Ensure the authenticity of media in your research with our advanced detection tools.",
    primary: { text: "Schedule a Demo", href: "https://cal.com/scamai/25min?overlayCalendar=true" },
  },
  backgroundImage: "/GenAI.webp",
};

export default function AIGeneratedMediaPage() {
  return <ProductPage data={aiGeneratedMediaPageData} />;
}
