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
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const baseMessages = (await import("../../messages/en.json")).default;
  let localeMessages: AbstractIntlMessages = {};
  if (locale !== defaultLocale) {
    try {
      localeMessages = (await import(`../../messages/${locale}.json`)).default;
    } catch {
      localeMessages = {};
    }
  }

  const messages = {
    ...baseMessages,
    ...localeMessages,
  } as unknown as AbstractIntlMessages;

  return (
    <Providers locale={locale} messages={messages}>
      {children}
    </Providers>
  );
}
