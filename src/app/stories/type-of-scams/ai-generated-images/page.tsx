import { ScamTypePage, ScamTypePageProps } from "../scamType";

export const metadata = { title: "AI-Generated Images Scam — ScamAI" };

const aiGeneratedImagesPageData: ScamTypePageProps = {
  metadata: {
    title: "AI-Generated Images Scam — ScamAI",
    description: "Learn about AI-generated image scams and how ScamAI protects against synthetic media fraud.",
  },
  breadcrumb: {
    parentPath: "/stories/type-of-scams",
    parentName: "Types of Scams",
    currentName: "AI-Generated Images Scam",
    nextPath: "/stories/type-of-scams/identity-theft",
    nextName: "Identity Theft Scams",
  },
  hero: {
    category: "Synthetic Media Fraud",
    headline: "AI-Generated Images Scam\nWhen Pixels Lie",
    subtitle: "AI can now create photorealistic images that are virtually indistinguishable\nfrom real photographs, enabling sophisticated visual deception.",
    tags: ["AI Images", "Synthetic Media", "Visual Fraud", "Deepfake"],
    visual: {
      type: "image",
      src: "/ai-images-demo.webp",
    },
  },
  problemSection: {
    headline: "The Threat: Every Image\nCould Be Fake",
    description: "AI image generation has reached a level where fake photos can fool even trained professionals. Scammers use these synthetic images to create fake profiles, manipulate evidence, and deceive victims.",
    visual: {
      type: "image",
      src: "/ai-images-threat.webp",
      alt: "AI-generated images threat landscape",
    },
    dataPoint: "Studies indicate that 89% of people cannot reliably distinguish AI-generated images from real photographs.",
  },
  threatLandscape: {
    headline: "The Rise of Synthetic Visual Content",
    description: "AI image generation tools are becoming more accessible and sophisticated, making it easier to create convincing fake visuals.",
    keyThreats: [
      { icon: "ShieldAlert", text: "Fake Profile Creation", description: "Scammers create convincing fake profiles using AI-generated photos to build trust." },
      { icon: "Briefcase", text: "Evidence Manipulation", description: "Fake images used to support false claims or discredit legitimate evidence." },
      { icon: "MessageSquareWarning", text: "Product Scams", description: "Fake product images that don't match the actual items being sold." },
    ],
  },
  solution: {
    productName: "ImageGuard™",
    headline: "Our Solution: ImageGuard™ — The Visual Authenticity Expert",
    description: "ImageGuard™ uses advanced computer vision and AI analysis to detect synthetic images by identifying subtle patterns and artifacts invisible to the human eye.",
    coreDimensions: [
      { title: "Pixel Pattern Analysis", description: "Detects unnatural pixel arrangements and compression artifacts typical of AI generation." },
      { title: "Metadata Forensics", description: "Analyzes image metadata and creation patterns to identify synthetic origins." },
      { title: "Semantic Inconsistency Detection", description: "Identifies logical inconsistencies and impossible scenarios in generated images." },
    ],
    outputDescription: "The API provides detailed analysis with confidence scores and specific detection of AI generation markers.",
  },
  advantages: {
    headline: "Why Choose ImageGuard™?",
    items: [
      { icon: "Zap", title: "Instant Analysis", description: "Processes images in milliseconds with real-time detection capabilities." },
      { icon: "Target", title: "High Precision", description: "98.5% accuracy in detecting AI-generated images across all major models." },
      { icon: "Globe", title: "Universal Compatibility", description: "Works with all image formats and social media platforms." },
      { icon: "BrainCircuit", title: "Model-Agnostic", description: "Detects images from any AI generation model, including new and unknown ones." },
    ],
  },

  cta: {
    headline: "Verify Image Authenticity",
    description: "Don't let AI-generated images deceive you or your customers.",
    primary: { text: "Try Now", href: "/demo" },
  },
  backgroundImage: "/ai-images-background.webp",
};

export default function AIGeneratedImagesPage() {
  return <ScamTypePage data={aiGeneratedImagesPageData} />;
}
