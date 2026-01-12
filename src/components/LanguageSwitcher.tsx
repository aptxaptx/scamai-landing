"use client";

import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

const localeLabels: Record<Locale, string> = {
  en: "English",
  "zh-CN": "中文 (简体)",
  "zh-TW": "繁體中文",
  ja: "日本語",
  ko: "한국어",
  es: "Español",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
  id: "Bahasa Indonesia",
  ar: "العربية",
};

function buildLocalizedPath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/");
  const firstSegment = segments[1] as Locale | undefined;

  if (firstSegment && locales.includes(firstSegment)) {
    segments[1] = nextLocale;
  } else if (pathname === "/") {
    segments[1] = nextLocale;
  } else {
    segments.splice(1, 0, nextLocale);
  }

  const nextPath = segments.join("/");
  return nextPath.length ? nextPath : `/${defaultLocale}`;
}

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    const nextPathname = buildLocalizedPath(pathname, nextLocale);
    const search = searchParams.toString();
    router.replace(search ? `${nextPathname}?${search}` : nextPathname);
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      aria-label="Select language"
      className={cn(
        "h-10 rounded-full border px-3 text-sm font-medium transition-colors",
        "bg-transparent",
        className
      )}
    >
      {locales.map((entry) => (
        <option key={entry} value={entry}>
          {localeLabels[entry]}
        </option>
      ))}
    </select>
  );
}
