import { getTranslations } from "next-intl/server";

import SiteShell from "@/components/SiteShell";
import { type Locale } from "@/i18n/config";
import AboutContent from "./AboutContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Company.About" });
  return {
    title: t("metadata.title"),
  };
}

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutContent />
    </SiteShell>
  );
}
