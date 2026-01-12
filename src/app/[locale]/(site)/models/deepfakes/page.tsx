import { getTranslations } from "next-intl/server";

import { type Locale } from "@/i18n/config";

import DetectionModelPage from "../DetectionModelPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Models.Deepfakes" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function DeepfakesPage() {
  return <DetectionModelPage modelType="deepfakes" />;
}
