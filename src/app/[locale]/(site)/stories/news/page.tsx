import { getTranslations } from "next-intl/server";

import { type Locale } from "@/i18n/config";

import NewsClient from "./NewsClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Stories.News" });
  return {
    title: t("metadata.title"),
  };
}

export default function NewsPage() {
  return <NewsClient />;
}
