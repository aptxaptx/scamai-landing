import { getTranslations } from "next-intl/server";

import { type Locale } from "@/i18n/config";

import DetectionModelPage from "../DetectionModelPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Models.AiGeneratedMedia",
  });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function AIGeneratedMediaPage() {
  return <DetectionModelPage modelType="ai-generated-media" />;
}
