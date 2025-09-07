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

        {/* Research Collaboration Section */}
        <section className="py-16 px-5 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Collaborate with Our Research Team
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Interested in research collaboration, dataset access, or
              discussing our publications? Get in touch with our research team.
            </p>
          </div>
        </section>

        {/* New Section */}
        <section className="py-16 px-5 md:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Protect What Matters Most
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Advanced AI detection technology to safeguard your identity and
              prevent deepfake scams.
            </p>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
