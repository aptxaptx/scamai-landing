import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ScamAI - AI Trust Platform | Deepfake Detection & Synthetic Media Verification",
    template: "%s | ScamAI"
  },
  description: "All-in-one AI Trust Platform for detecting synthetic media and deepfakes in real-time. Industry-leading accuracy with SOC 2 Type II compliance. 200 free images per month.",
  keywords: [
    "deepfake detection",
    "synthetic media detection",
    "AI fraud prevention",
    "deepfake detector",
    "fake video detection",
    "audio deepfake detection",
    "AI trust platform",
    "media verification",
    "synthetic voice detection",
    "AI-powered security",
    "real-time detection",
    "Eva-v1 AI model"
  ],
  authors: [{ name: "Reality Inc." }],
  creator: "Reality Inc.",
  publisher: "Reality Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://scam.ai"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "es": "/es",
      "pt": "/pt",
      "ja": "/ja",
      "ko": "/ko",
      "zh-TW": "/zh-TW",
      "zh-CN": "/zh-CN",
      "id": "/id",
      "fr": "/fr",
      "de": "/de",
      "ar": "/ar",
      "x-default": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scam.ai",
    title: "ScamAI - AI Trust Platform | Deepfake Detection",
    description: "Detect synthetic media and deepfakes in real-time with industry-leading accuracy. SOC 2 Type II compliant. 200 free images per month.",
    siteName: "ScamAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScamAI - AI Trust Platform | Deepfake Detection",
    description: "Detect synthetic media and deepfakes in real-time with industry-leading accuracy. SOC 2 Type II compliant.",
    creator: "@scamai",
    site: "@scamai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-black.ico", sizes: "any", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-white.ico", sizes: "any", media: "(prefers-color-scheme: dark)" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "ZPzA6gMNEygDaZMIRMH-Gijcpx_I5TL5FaKhlvmQrw8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-[#0b0b0b]">
      <head>
        <StructuredData />
        <link rel="alternate" type="application/rss+xml" title="ScamAI News" href="/feed.xml" />
      </head>
      <body className={`${inter.variable} ${dmSerif.variable} antialiased bg-[#0b0b0b]`}>
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
