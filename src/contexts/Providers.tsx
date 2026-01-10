"use client";

import { LanguageProvider } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LanguageProvider>
  );
}
