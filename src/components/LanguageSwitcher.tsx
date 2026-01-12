"use client";

import { useTransition, type ChangeEvent } from "react";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      disabled={isPending}
      aria-label="Select language"
      className={cn(
        "h-10 rounded-full border px-3 text-sm font-medium transition-colors",
        "bg-transparent",
        className
      )}
    >
      <option value="en">English</option>
      <option value="zh-CN">简体中文</option>
      <option value="zh-TW">繁體中文</option>
      <option value="de">Deutsch</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
      <option value="pt">Português</option>
      <option value="ja">日本語</option>
      <option value="ko">한국어</option>
      <option value="ar">العربية</option>
      <option value="id">Bahasa Indonesia</option>
    </select>
  );
}
