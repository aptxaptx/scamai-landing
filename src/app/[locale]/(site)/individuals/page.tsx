import { Suspense } from "react";
import { getTranslations } from "next-intl/server";

import { type Locale } from "@/i18n/config";

import IndividualsClient from "./IndividualsClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Individuals.Page" });
  return {
    title: t("metadata.title"),
  };
}

export default function IndividualsPage() {
  return (
    <Suspense fallback={<div />}>
      <IndividualsClient />
    </Suspense>
  );
}

