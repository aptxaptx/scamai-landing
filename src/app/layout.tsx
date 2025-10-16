import type { Metadata } from "next";
import { Inter, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Scam AI - Scam Prevention Platform",
  description: "Advanced detection for deepfakes, voice clones and frauds. Protect your organization from AI-powered fraud.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Scam AI - Scam Prevention Platform",
    description: "Advanced detection for deepfakes, voice clones and frauds. Protect your organization from AI-powered fraud.",
    url: "https://scam.ai",
    siteName: "Scam AI",
    images: [
      {
        url: "/Logo2.png",
        width: 1200,
        height: 630,
        alt: "Scam AI - Scam Prevention Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scam AI - Scam Prevention Platform",
    description: "Advanced detection for deepfakes, voice clones and frauds. Protect your organization from AI-powered fraud.",
    images: ["/Logo2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
