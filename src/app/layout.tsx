import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
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
      "id": "/id",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scam.ai",
    title: "ScamAI - AI Trust Platform | Deepfake Detection",
    description: "Detect synthetic media and deepfakes in real-time with industry-leading accuracy. SOC 2 Type II compliant. 200 free images per month.",
    siteName: "ScamAI",
    images: [
      {
        url: "https://scam.ai/scamai-logo.svg",
        width: 1200,
        height: 630,
        alt: "ScamAI - AI Trust Platform for Deepfake Detection",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScamAI - AI Trust Platform | Deepfake Detection",
    description: "Detect synthetic media and deepfakes in real-time with industry-leading accuracy. SOC 2 Type II compliant.",
    images: ["https://scam.ai/scamai-logo.svg"],
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
    yandex: "your-yandex-verification-code",
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
      </head>
      <body className={`${inter.variable} antialiased bg-[#0b0b0b]`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
