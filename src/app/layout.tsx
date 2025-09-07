import type { Metadata } from "next";
import { Inter, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/contexts/SidebarContext";

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
  description: "A clean, modern landing page inspired by OpenAI's GPT-5 hero.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
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
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  );
}
