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
        {/* Hero Section */}
        <AnimatePresence>
          <HeroSection hero={HERO_CONFIG} />
        </AnimatePresence>

        {/* Partnership Section */}
        <section className="py-12 px-0 md:px-8 bg-black/10">
          <div className="max-w-6xl mx-auto px-5 md:px-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white/70">
                <h3 className="text-lg font-medium mb-2">Partnering with</h3>
                <p className="text-base">Global Innovators</p>
              </div>

              <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
                {/* NVIDIA */}
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">N</span>
                  </div>
                  <span className="text-xl font-bold">NVIDIA</span>
                </div>

                {/* Inception Program */}
                <div className="text-white/80 text-center">
                  <div className="text-sm font-medium">INCEPTION</div>
                  <div className="text-xs">PROGRAM</div>
                </div>

                {/* Google Cloud */}
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs">☁</span>
                  </div>
                  <span className="text-xl font-medium">Google Cloud</span>
                </div>

                {/* AWS */}
                <div className="text-white/80">
                  <span className="text-2xl font-bold italic">aws</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </SiteShell>
  );
}
