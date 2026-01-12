import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { defaultLocale, locales, type Locale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const baseMessages = (await import("../messages/en.json")).default;

  if (locale === defaultLocale) {
    return {
      locale,
      messages: baseMessages,
    };
  }

  let localeMessages = {};
  try {
    localeMessages = (await import(`../messages/${locale}.json`)).default;
  } catch {
    localeMessages = {};
  }

  return {
    locale,
    messages: {
      ...baseMessages,
      ...localeMessages,
    },
  };
});
