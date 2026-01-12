import { ProductPageProps } from "../research/ProductPage";

export type DetectionModelType =
  | "deepfakes"
  | "ai-generated-media"
  | "voice-clones";

type Translator = (key: string) => string;

export const detectionModelNamespaces: Record<DetectionModelType, string> = {
  deepfakes: "Models.Deepfakes",
  "ai-generated-media": "Models.AiGeneratedMedia",
  "voice-clones": "Models.VoiceClones",
};

const buildDeepfakesConfig = (t: Translator): ProductPageProps => ({
  metadata: {
    title: t("metadata.title"),
    description: t("metadata.description"),
  },
  hero: {
    category: t("hero.category"),
    headline: t("hero.headline"),
    subtitle: t("hero.subtitle"),
    description: "",
    tags: [t("hero.tags.0"), t("hero.tags.1"), t("hero.tags.2")],
    visual: {
      type: "video",
      src: "/deepfake_scamai.webm",
    },
  },
  problemSection: {
    headline: t("problemSection.headline"),
    description: "",
    visual: {
      type: "image",
      src: "/deeepfake-detection.png",
      alt: t("problemSection.visualAlt"),
    },
    valueProps: [],
  },
  threatLandscape: {
    headline: "",
    description: "",
    keyThreats: [],
    dataPoint: "",
  },
  solution: {
    productName: "",
    headline: "",
    description: "",
    coreDimensions: [],
    outputDescription: "",
  },
  advantages: {
    headline: "",
    items: [],
  },
  useCases: {
    headline: "",
    items: [],
  },
  apiSection: {
    headline: "",
    description: "",
    apiDocumentation: {
      text: "",
      href: "",
    },
  },
  cta: {
    headline: t("cta.headline"),
    description: t("cta.description"),
    primary: { text: "", href: "" },
  },
  backgroundImage: "/deepfake.webp",
});

const buildAiGeneratedMediaConfig = (t: Translator): ProductPageProps => ({
  metadata: {
    title: t("metadata.title"),
    description: t("metadata.description"),
  },
  hero: {
    category: t("hero.category"),
    headline: t("hero.headline"),
    subtitle: t("hero.subtitle"),
    description: "",
    tags: [t("hero.tags.0"), t("hero.tags.1"), t("hero.tags.2")],
    visual: {
      type: "image",
      src: "/fake-news.jpg",
      alt: t("hero.visualAlt"),
    },
  },
  problemSection: {
    headline: t("problemSection.headline"),
    description: "",
    visual: {
      type: "image",
      src: "/gen-ai-detected.png",
      alt: t("problemSection.visualAlt"),
    },
    valueProps: [],
  },
  threatLandscape: {
    headline: "",
    description: "",
    keyThreats: [],
    dataPoint: "",
  },
  solution: {
    productName: "",
    headline: "",
    description: "",
    coreDimensions: [],
    outputDescription: "",
  },
  advantages: {
    headline: "",
    items: [],
  },
  useCases: {
    headline: "",
    items: [],
  },
  apiSection: {
    headline: "",
    description: "",
    apiDocumentation: {
      text: "",
      href: "",
    },
  },
  cta: {
    headline: "",
    description: "",
    primary: { text: "", href: "" },
  },
  backgroundImage: "/GenAI.webp",
});

const buildVoiceClonesConfig = (t: Translator): ProductPageProps => ({
  metadata: {
    title: t("metadata.title"),
    description: t("metadata.description"),
  },
  hero: {
    category: t("hero.category"),
    headline: t("hero.headline"),
    subtitle: t("hero.subtitle"),
    description: "",
    tags: [
      t("hero.tags.0"),
      t("hero.tags.1"),
      t("hero.tags.2"),
      t("hero.tags.3"),
    ],
    visual: {
      type: "audio",
      src: "/Sale0625.mp3",
      alt: t("hero.visualAlt"),
    },
  },
  problemSection: {
    headline: t("problemSection.headline"),
    description: "",
    visual: {
      type: "image",
      src: "/voice-detected.png",
      alt: t("problemSection.visualAlt"),
    },
    valueProps: [],
  },
  threatLandscape: {
    headline: "",
    description: "",
    keyThreats: [],
    dataPoint: "",
  },
  solution: {
    productName: "",
    headline: "",
    description: "",
    coreDimensions: [],
    outputDescription: "",
  },
  advantages: {
    headline: "",
    items: [],
  },
  useCases: {
    headline: "",
    items: [],
  },
  apiSection: {
    headline: "",
    description: "",
    apiDocumentation: {
      text: "",
      href: "",
    },
  },
  cta: {
    headline: t("cta.headline"),
    description: t("cta.description"),
    primary: { text: "", href: "" },
  },
  backgroundImage: "/visual.webp",
  overlayColor: "bg-purple-600/32",
});

export function getDetectionModelConfig(
  modelType: DetectionModelType,
  t: Translator
): ProductPageProps {
  switch (modelType) {
    case "deepfakes":
      return buildDeepfakesConfig(t);
    case "ai-generated-media":
      return buildAiGeneratedMediaConfig(t);
    case "voice-clones":
      return buildVoiceClonesConfig(t);
  }
}
