import type { AbstractIntlMessages } from "next-intl";
import { notFound } from "next/navigation";

import { defaultLocale, locales, type Locale } from "@/i18n/config";
import Providers from "@/contexts/Providers";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  if (!locales.includes(params.locale)) {
    notFound();
  }

  const baseMessages = (await import("../../messages/en.json")).default;
  let localeMessages: AbstractIntlMessages = {};
  if (params.locale !== defaultLocale) {
    try {
      localeMessages = (await import(`../../messages/${params.locale}.json`)).default;
    } catch {
      localeMessages = {};
    }
  }

  const messages = {
    ...baseMessages,
    ...localeMessages,
  } as AbstractIntlMessages;

  return (
    <Providers locale={params.locale} messages={messages}>
      {children}
    </Providers>
  );
}
