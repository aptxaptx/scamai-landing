"use client";

import SiteShell from "@/components/SiteShell";
import HeroSection from "@/components/sections/HeroSection";
import { AnimatePresence } from "framer-motion";
import { HERO_CONFIG } from "@/constants";

export default function Home() {
  const secondaryLinks: string[] = [];

  return (
    <SiteShell secondaryLinks={secondaryLinks}>
      <div className="relative w-full">
        {/* Hero */}
        <AnimatePresence>
          <HeroSection hero={HERO_CONFIG} />
        </AnimatePresence>

        {/* Spacer for fixed hero */}
        <div className="h-screen" />
      </div>
    </SiteShell>
  );
}
