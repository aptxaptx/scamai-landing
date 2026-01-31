import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";

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
  description: "All-in-one AI Trust Platform for detecting synthetic media and deepfakes in real-time. Industry-leading accuracy with SOC 2 Type II compliance. 100 free checks per month.",
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
    description: "Detect synthetic media and deepfakes in real-time with industry-leading accuracy. SOC 2 Type II compliant. 100 free checks per month.",
    siteName: "ScamAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScamAI - AI Trust Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScamAI - AI Trust Platform | Deepfake Detection",
    description: "Detect synthetic media and deepfakes in real-time with industry-leading accuracy.",
    images: ["/og-image.png"],
    creator: "@scamai",
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
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
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
      </body>
    </html>
  );
}
