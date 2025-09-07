import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeroSection as HeroSectionType } from "@/types";
import Button from "@/components/ui/Button";
import TypingEffect from "@/components/ui/TypingEffect";

interface HeroSectionProps {
  hero: HeroSectionType;
}

const sectionVariants = {
  initial: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.35 } },
};

export default function HeroSection({ hero }: HeroSectionProps) {
  const [showTypingEffect, setShowTypingEffect] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedScamAI");

    if (!hasVisited) {
      // First visit - show typing effect
      setShowTypingEffect(true);
      // Mark as visited
      localStorage.setItem("hasVisitedScamAI", "true");
    } else {
      // Returning visitor - show static text
      setShowTypingEffect(false);
    }
  }, []);

  return (
    <motion.section
      key="hero"
      variants={sectionVariants}
      initial="initial"
      exit="exit"
      className="relative overflow-hidden h-screen grid place-items-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
      }}
    >
      <div className="hero-image-bg" aria-hidden="true" />
      <div className="hero-image-vignette" aria-hidden="true" />

      <div className="relative z-10 text-center p-6 sm:p-8 md:p-12 lg:p-14">
        {hero.title && (
          <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight leading-[0.95] md:leading-[1.05] max-w-4xl mx-auto">
            {hero.title.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < hero.title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        )}

        {hero.subtitle && (
          <div
            className="mt-3 sm:mt-4 text-white text-[clamp(32px,5vw,64px)] max-w-2xl mx-auto font-normal"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {showTypingEffect ? (
              <TypingEffect
                text={hero.subtitle}
                speed={80}
                className="block"
                fadeOutDelay={0}
              />
            ) : (
              <div className="block">
                {hero.subtitle.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < hero.subtitle.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        )}

        {hero.description && (
          <p className="mt-3 sm:mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-2xl mx-auto">
            {hero.description}
          </p>
        )}

        {hero.cta && (
          <div className="mt-6 sm:mt-8 flex items-center justify-center">
            <Button
              href={hero.cta.href}
              className="rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm"
            >
              {hero.cta.label}
            </Button>
          </div>
        )}
      </div>
    </motion.section>
  );
}
