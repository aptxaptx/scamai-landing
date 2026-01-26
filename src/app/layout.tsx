import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Inter } from "next/font/google";
import NewNav from "@/components/new-site/NewNav";
import NewFooter from "@/components/new-site/NewFooter";
import "./globals.css";
import { defaultLocale, rtlLocales, type Locale } from "@/i18n/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scam AI - Scam Prevention Platform",
  description: "A clean, modern landing page inspired by OpenAI's GPT-5 hero.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const cookieStore = await cookies();
  const headerLocale = headerStore.get("x-next-intl-locale") as Locale | null;
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value as Locale | undefined;
  const locale = headerLocale ?? cookieLocale ?? defaultLocale;
  const direction = rtlLocales.includes(locale)
    ? "rtl"
    : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <NewNav />
        {children}
        <NewFooter />
      </body>
    </html>
  );
}
