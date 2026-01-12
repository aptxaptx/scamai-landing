import { getTranslations } from "next-intl/server";

import { type Locale } from "@/i18n/config";

import { ProductPage, ProductPageProps } from "../ProductPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Research.ScamNetDatabase" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function ScamNetDatabasePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Research.ScamNetDatabase" });

  const scamNetDatabasePageData: ProductPageProps = {
    metadata: {
      title: t("metadata.title"),
      description: t("metadata.description"),
    },
    hero: {
      category: t("hero.category"),
      headline: t("hero.headline"),
      subtitle: t("hero.subtitle"),
      description: t("hero.description"),
      tags: [
        t("hero.tags.0"),
        t("hero.tags.1"),
        t("hero.tags.2"),
        t("hero.tags.3"),
      ],
      visual: {
        type: "image",
        src: "/scamdb.webp",
        alt: t("hero.visualAlt"),
      },
    },
    problemSection: {
      headline: t("problemSection.headline"),
      description: t("problemSection.description"),
      visual: {
        type: "image",
        src: "/visual.webp",
        alt: t("problemSection.visualAlt"),
      },
      valueProps: [
        {
          title: t("problemSection.valueProps.0.title"),
          description: t("problemSection.valueProps.0.description"),
        },
        {
          title: t("problemSection.valueProps.1.title"),
          description: t("problemSection.valueProps.1.description"),
        },
        {
          title: t("problemSection.valueProps.2.title"),
          description: t("problemSection.valueProps.2.description"),
        },
      ],
    },
    threatLandscape: {
      headline: t("threatLandscape.headline"),
      description: t("threatLandscape.description"),
      keyThreats: [
        { icon: "ShieldAlert", text: t("threatLandscape.keyThreats.0") },
        { icon: "Briefcase", text: t("threatLandscape.keyThreats.1") },
        { icon: "MessageSquareWarning", text: t("threatLandscape.keyThreats.2") },
      ],
      dataPoint: t("threatLandscape.dataPoint"),
    },
    solution: {
      productName: t("solution.productName"),
      headline: t("solution.headline"),
      description: t("solution.description"),
      coreDimensions: [
        {
          title: t("solution.coreDimensions.0.title"),
          description: t("solution.coreDimensions.0.description"),
        },
        {
          title: t("solution.coreDimensions.1.title"),
          description: t("solution.coreDimensions.1.description"),
        },
        {
          title: t("solution.coreDimensions.2.title"),
          description: t("solution.coreDimensions.2.description"),
        },
      ],
      outputDescription: t("solution.outputDescription"),
    },
    advantages: {
      headline: t("advantages.headline"),
      items: [
        {
          icon: "Globe",
          title: t("advantages.items.0.title"),
          description: t("advantages.items.0.description"),
        },
        {
          icon: "Zap",
          title: t("advantages.items.1.title"),
          description: t("advantages.items.1.description"),
        },
        {
          icon: "Target",
          title: t("advantages.items.2.title"),
          description: t("advantages.items.2.description"),
        },
        {
          icon: "BrainCircuit",
          title: t("advantages.items.3.title"),
          description: t("advantages.items.3.description"),
        },
      ],
    },
    useCases: {
      headline: t("useCases.headline"),
      items: [
        t("useCases.items.0"),
        t("useCases.items.1"),
        t("useCases.items.2"),
        t("useCases.items.3"),
      ],
    },
    apiSection: {
      headline: t("apiSection.headline"),
      description: t("apiSection.description"),
      apiDocumentation: {
        text: t("apiSection.apiDocumentation.text"),
        href: "https://docu.scam.ai/introduction",
      },
    },
    cta: {
      headline: t("cta.headline"),
      description: t("cta.description"),
      primary: { text: t("cta.primary.text"), href: "/demo" },
    },
    backgroundImage: "/scamdb.webp",
  };

  return <ProductPage data={scamNetDatabasePageData} />;
}
