import { ProductPageProps } from "../research/ProductPage";

export type DetectionModelType =
  | "deepfakes"
  | "ai-generated-media"
  | "voice-clones";

export const detectionModelsConfig: Record<
  DetectionModelType,
  ProductPageProps
> = {
  deepfakes: {
    metadata: {
      title: "Deepfakes (Faceswap) — ScamAI",
      description:
        "Detect deepfakes and faceswaps with ScamAI's advanced real-time detection.",
    },

    hero: {
      category: "Deepfake Detection",
      headline: "Defending the Truth in Human Face",
      subtitle: "Real-Time Deepfake Detection",
      description: "",
      tags: ["GenAI", "Deepfake", "Faceswap"],
      visual: {
        type: "video",
        src: "/deepfake_scamai.webm",
      },
    },
    problemSection: {
      headline: 'The Threat: "Seeing is Believing" Is a Thing of the Past',
      description:
        "Today, creating a deepfake video convincing enough to fool human eyes—and even traditional bank KYC systems—costs just a few dollars. Is your verification process ready for this challenge?",
      visual: {
        type: "image",
        src: "/deeepfake-detection.png",
        alt: "Deepfake detection interface showing analysis results",
      },
      valueProps: [
        {
          title: "Identity Verification Fraud (KYC Fraud)",
          description:
            'Attackers use dynamic, fake face videos to bypass "liveness detection" checks at financial institutions and exchanges.',
        },
        {
          title: "Executive Impersonation",
          description:
            "Forging the likeness of a CEO or CFO in a video conference to issue fraudulent directives.",
        },
        {
          title: "Disinformation & News Manipulation",
          description:
            "Maliciously creating videos of public figures to cause social panic or damage a company's reputation.",
        },
      ],
    },
    threatLandscape: {
      headline: "The Challenge of Deepfake Technology",
      description:
        "Deepfake technology has reached a point where synthetic videos are indistinguishable from authentic content, creating unprecedented security challenges.",
      keyThreats: [
        { icon: "ShieldAlert", text: "Identity Verification Fraud" },
        { icon: "Briefcase", text: "Executive Impersonation" },
        { icon: "MessageSquareWarning", text: "Disinformation Campaigns" },
      ],
      dataPoint:
        "Over 90% of deepfake videos are now indistinguishable from real content to the human eye, requiring advanced AI detection systems.",
    },
    solution: {
      productName: "DeepGuard",
      headline: "Our Solution: DeepGuard — Real-Time Deepfake Detection",
      description:
        "DeepGuard analyzes facial movements, expressions, and visual artifacts to detect deepfake content in real-time, providing instant verification for video communications.",
      coreDimensions: [
        {
          title: "Facial Movement Analysis",
          description:
            "Analyzes micro-expressions and facial movement patterns that are difficult for AI to replicate naturally.",
        },
        {
          title: "Visual Artifact Detection",
          description:
            "Identifies telltale signs of digital manipulation in facial features, lighting, and video compression.",
        },
        {
          title: "Real-Time Processing",
          description:
            "Provides instant detection suitable for live video calls and streaming applications.",
        },
      ],
      outputDescription:
        'The API returns a JSON object in real-time, containing an "is_deepfake" boolean, a "confidence_score", and detailed "analysis_points".',
    },
    advantages: {
      headline: "The DeepGuard Advantage",
      items: [
        {
          icon: "Zap",
          title: "Millisecond-Level Response",
          description:
            "Optimized for real-time communications like phone calls and voice chat, ensuring instant detection with no perceivable latency.",
        },
        {
          icon: "Target",
          title: "Unparalleled Accuracy",
          description:
            "Trained on the world's largest proprietary database of synthetic and real visual data, achieving industry-leading low false-positive and high-recall rates.",
        },
        {
          icon: "Globe",
          title: "Exceptional Robustness",
          description:
            "Maintains stable, high-performance detection even across various compression formats and image qualities.",
        },
        {
          icon: "BrainCircuit",
          title: "Constantly Evolving",
          description:
            "Our model continuously learns from the latest global scam attempts and emerging generation techniques, allowing it to self-evolve and always stay one step ahead of attackers.",
        },
      ],
    },
    useCases: {
      headline: "Use Cases & Applications",
      items: [
        "Banking & Financial Services",
        "Corporate Communications",
        "Social Media Platforms",
        "News & Media Verification",
      ],
    },
    apiSection: {
      headline: "API Integration",
      description:
        "Ready to integrate DeepGuard into your platform? Our comprehensive API documentation provides everything you need to get started, including detailed endpoints, authentication, and code examples.",
      apiDocumentation: {
        text: "View Complete API Documentation",
        href: "https://docu.scam.ai/introduction",
      },
    },
    cta: {
      headline: "Take the Next Step",
      description:
        "Protect your organization with advanced deepfake detection.",
      primary: { text: "Request a Demo", href: "/demo" },
    },
    backgroundImage: "/deepfake.webp",
  },

  "ai-generated-media": {
    metadata: {
      title: "AI Image Detection — ScamAI",
      description:
        "Detect AI-generated images and videos with ScamAI's advanced detection technology.",
    },

    hero: {
      category: "AI-Generated Media Detection",
      headline: "Detect AI-Generated Images and Video",
      subtitle: "Verifying Reality in a Synthetic World",
      description:
        "Scam.ai's GhostScripter model analyzes visual content for the hidden signatures of generative AI, providing instant alerts before fake products, evidence, or realities can be used to deceive.",
      tags: ["GenAI", "Synthetic Media", "Detection", "GhostScripter"],
      visual: {
        type: "image",
        src: "/fake-news.jpg",
        alt: "Examples of AI-generated fake news images showing fabricated content",
      },
    },
    problemSection: {
      headline: "The Threat: Is Any Image\nReal Anymore?",
      description:
        "With text-to-image and text-to-video models, anyone can create convincing, high-resolution visuals of anything imaginable in seconds. This has created a new wave of fraud based on fabricating reality itself, rendering simple visual inspection obsolete.",
      visual: {
        type: "image",
        src: "/gen-ai-detected.png",
        alt: "GhostScripter AI detection interface showing AI-generated content identification results",
      },
      valueProps: [
        {
          title: "E-commerce & Product Fraud",
          description:
            "Scammers use AI to generate alluring images of products that don't exist, taking payment for items they can never ship.",
        },
        {
          title: "Fabricated Evidence & Forgery",
          description:
            'Creating fake but realistic photo or video "evidence" for use in insurance claims, legal disputes, or news reports.',
        },
        {
          title: "Advanced Catfishing & Romance Scams",
          description:
            "Using unique, hyper-realistic, and completely fake profile pictures that cannot be found with a reverse image search.",
        },
      ],
    },
    threatLandscape: {
      headline: "The Challenge of Synthetic Visual Content",
      description:
        "AI-generated images and videos are becoming indistinguishable from reality, creating unprecedented challenges for content verification and trust.",
      keyThreats: [
        { icon: "ShieldAlert", text: "E-commerce & Product Fraud" },
        { icon: "Briefcase", text: "Fabricated Evidence & Forgery" },
        { icon: "MessageSquareWarning", text: "Brand & Copyright Dilution" },
      ],
      dataPoint:
        "As of August 2025, it is estimated that over 15 billion images have been created by generative AI models, with less than 5% containing visible watermarks or disclosures.",
    },
    solution: {
      productName: "GhostScripter",
      headline: "Our Solution: GhostScripter — The Pixel Provenance Expert",
      description:
        "GhostScripter acts as a digital art forensics expert. It looks beyond what an image depicts and analyzes the very fabric of its pixels to determine its origin—whether it was captured by a camera or created by a generative model.",
      coreDimensions: [
        {
          title: "Generative Model Fingerprinting",
          description:
            'Identifies the invisible, systematic patterns and noise profiles that are unique to specific families of generative models (e.g., the digital "brushstrokes" of DALL-E vs. Midjourney).',
        },
        {
          title: "Unnatural Detail & Consistency Analysis",
          description:
            "Scrutinizes images for tell-tale AI flaws, such as flawed physics in shadows and reflections, unnatural symmetry, or illogical details in complex backgrounds.",
        },
        {
          title: "Frequency Spectrum Analysis",
          description:
            "Analyzes the image in the frequency domain to spot the overly smooth or unnaturally regular patterns that are characteristic of generated, rather than naturally captured, visual information.",
        },
      ],
      outputDescription:
        'The API returns a JSON object in real-time, containing an "is_generated" boolean, a "confidence_score", and a prediction of the "source_model_family".',
    },
    advantages: {
      headline: "Our Advantage: Why Choose GhostScripter?",
      items: [
        {
          icon: "Zap",
          title: "Millisecond-Level Response",
          description:
            "Optimized for real-time communications like phone calls and voice chat, ensuring instant detection with no perceivable latency.",
        },
        {
          icon: "Target",
          title: "Unparalleled Accuracy",
          description:
            "Trained on the world's largest proprietary database of synthetic and real visual data, achieving industry-leading low false-positive and high-recall rates.",
        },
        {
          icon: "Globe",
          title: "Exceptional Robustness",
          description:
            "Maintains stable, high-performance detection even across various compression formats and image qualities.",
        },
        {
          icon: "BrainCircuit",
          title: "Constantly Evolving",
          description:
            "Our model continuously learns from the latest global scam attempts and emerging generation techniques, allowing it to self-evolve and always stay one step ahead of attackers.",
        },
      ],
    },
    useCases: {
      headline: "Use Cases & Applications",
      items: [
        "E-commerce & Marketplace Trust",
        "Insurance & Financial Services",
        "Social Media & Dating Apps",
        "Legal & News Media",
      ],
    },
    apiSection: {
      headline: "API Integration",
      description:
        "Ready to integrate GhostScripter into your platform? Our comprehensive API documentation provides everything you need to get started, including detailed endpoints, authentication, and code examples.",
      apiDocumentation: {
        text: "View Complete API Documentation",
        href: "https://docu.scam.ai/introduction",
      },
    },
    cta: {
      headline: "Take the Next Step",
      description:
        "Protect your organization with advanced AI-generated media detection.",
      primary: { text: "Request a Demo", href: "/demo" },
    },
    backgroundImage: "/GenAI.webp",
  },

  "voice-clones": {
    metadata: {
      title: "Voice Cloning — ScamAI",
      description:
        "Detect AI voice clones and synthetic audio with ScamAI's real-time detection technology.",
    },

    hero: {
      category: "AI Voice Clone Detection",
      headline: "Real-Time AI Voice Clone Detection",
      subtitle: "Secure Every Conversation",
      description:
        "Our VoiceGuard model instantly identifies synthetic speech and deepfake audio, stopping voice-based fraud in real time. It can detect synthetic audio like Sale0625.mp3, which was generated by minimax.io.",
      tags: ["Voice AI", "Audio Synthesis", "Detection", "VoiceGuard"],
      visual: {
        type: "audio",
        src: "/Sale0625.mp3",
        alt: "Example synthetic audio file Sale0625.mp3 generated by minimax.io",
      },
    },
    problemSection: {
      headline: "The Threat: Can You Trust What You Hear?",
      description:
        "With just seconds of audio, AI can create a convincing voice clone indistinguishable from the human ear. This enables a new vector for fraud in finance, enterprise, and personal communications.",
      visual: {
        type: "image",
        src: "/voice-detected.png",
        alt: "VoiceGuard detection interface showing analysis results for synthetic audio",
      },
      valueProps: [
        {
          title: "Financial Fraud (Vishing)",
          description:
            "Attackers use voice clones to authorize fraudulent transactions.",
        },
        {
          title: "Corporate Fraud",
          description:
            "Impersonating executives or vendors to approve high-risk payments.",
        },
        {
          title: "Personal Attacks",
          description:
            "Using synthetic audio for highly targeted harassment and extortion.",
        },
      ],
    },
    threatLandscape: {
      headline: "The Challenge of Synthetic Audio",
      description:
        "Voice cloning technology can now fool human listeners, creating unprecedented security challenges for voice-based authentication and communication.",
      keyThreats: [
        { icon: "ShieldAlert", text: "Financial Fraud (Vishing)" },
        { icon: "Briefcase", text: "Corporate & Internal Fraud" },
        { icon: "MessageSquareWarning", text: "Disinformation Campaigns" },
      ],
      dataPoint:
        "The accessibility of voice cloning technology is leading to a rapid increase in sophisticated vishing and impersonation attacks.",
    },
    solution: {
      productName: "VoiceGuard",
      headline: "Solution: VoiceGuard",
      description:
        "VoiceGuard analyzes the acoustic and spectral footprint of audio to find microscopic traces left by AI voice generators, detecting what the human ear cannot.",
      coreDimensions: [
        {
          title: "Acoustic Fingerprinting",
          description:
            "Identifies non-human timbral and phase characteristics introduced during audio synthesis.",
        },
        {
          title: "Spectrogram Anomaly Detection",
          description:
            "Locates unnatural harmonics and inconsistencies that differ from organic speech.",
        },
        {
          title: "Generative Artifact Recognition",
          description:
            "Detects tell-tale signatures from specific AI models used to create the clone.",
        },
      ],
      outputDescription:
        "The API returns a real-time verdict, confidence score, and evidence for automated action.",
    },
    advantages: {
      headline: "The VoiceGuard Advantage",
      items: [
        {
          icon: "Zap",
          title: "Millisecond Response",
          description:
            "Provides low-latency detection suitable for live calls and contact centers.",
        },
        {
          icon: "Target",
          title: "Unparalleled Accuracy",
          description:
            "Trained on diverse global datasets for high precision across different accents and languages.",
        },
        {
          icon: "Globe",
          title: "Exceptional Robustness",
          description:
            "Resilient to compression, background noise, and other real-world audio artifacts.",
        },
        {
          icon: "BrainCircuit",
          title: "Constantly Evolving",
          description:
            "Models are continuously updated to adapt to the latest voice cloning techniques.",
        },
      ],
    },
    useCases: {
      headline: "Use Cases & Applications",
      items: [
        "Banking & Finance",
        "Corporate Communications Security",
        "Social Media & Content Platforms",
        "Intelligent Contact Centers",
      ],
    },
    apiSection: {
      headline: "API Integration",
      description:
        "Ready to integrate VoiceGuard into your platform? Our comprehensive API documentation provides everything you need to get started, including detailed endpoints, authentication, and code examples.",
      apiDocumentation: {
        text: "View Complete API Documentation",
        href: "https://docu.scam.ai/introduction",
      },
    },
    cta: {
      headline: "Secure Your Audio Channels",
      description:
        "Protect your users from voice-based fraud and impersonation.",
      primary: { text: "Request a Demo", href: "/demo" },
    },
    backgroundImage: "/visual.webp",
    overlayColor: "bg-purple-600/32",
  },
};

// Helper function to get configuration for a specific model
export function getDetectionModelConfig(
  modelType: DetectionModelType
): ProductPageProps {
  return detectionModelsConfig[modelType];
}

// Export metadata for each model (for Next.js metadata API)
export const detectionModelsMetadata = {
  deepfakes: { title: "Deepfakes (Faceswap) — ScamAI" },
  "ai-generated-media": { title: "AI Image Detection — ScamAI" },
  "voice-clones": { title: "Voice Cloning — ScamAI" },
};
