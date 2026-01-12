import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { type Locale } from "@/i18n/config";

import { ProductPage, ProductPageProps } from "../../research/ProductPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Models.LinkQrCode",
  });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function LinkQRCodePage() {
  const t = useTranslations("Models.LinkQrCode");
  const linkQRCodePageData: ProductPageProps = {
    metadata: {
      title: t("metadata.title"),
      description: t("metadata.description"),
    },

    hero: {
      category: t("hero.category"),
      headline: t("hero.headline"),
      subtitle: t("hero.subtitle"),
      description: t("hero.description"),
      tags: [t("hero.tags.0"), t("hero.tags.1"), t("hero.tags.2")],
      visual: {
        type: "image",
        src: "/link.webp",
        alt: t("hero.visualAlt"),
      },
    },
    problemSection: {
      headline: t("problemSection.headline"),
      description: t("problemSection.description"),
      additionalContent: t("problemSection.additionalContent"),
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
          icon: "Target",
          title: t("advantages.items.0.title"),
          description: t("advantages.items.0.description"),
        },
        {
          icon: "Zap",
          title: t("advantages.items.1.title"),
          description: t("advantages.items.1.description"),
        },
        {
          icon: "Globe",
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
      primary: {
        text: t("cta.primary.text"),
        href: "https://cal.com/scamai/25min?overlayCalendar=true",
      },
    },
    backgroundImage: "/fakenews.webp",
  };

  return <ProductPage data={linkQRCodePageData} />;
}
