import React, { useState, useEffect, useRef } from "react";
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
  const [titleTypingComplete, setTitleTypingComplete] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const titleCharCount = hero.title?.length || 0;
  const typingSpeed = 80;

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
      setShowSubtitle(true); // Show subtitle immediately for returning visitors
    }
  }, []);
  
  // Show subtitle after title is done typing
  useEffect(() => {
    if (showTypingEffect && !showSubtitle) {
      const delay = titleCharCount * typingSpeed + 300; // Add a small buffer
      const timer = setTimeout(() => {
        setShowSubtitle(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [showTypingEffect, showSubtitle, titleCharCount]);

  return (
    <motion.section
      key="hero"
      variants={sectionVariants}
      initial="initial"
      exit="exit"
      className="relative overflow-hidden h-screen grid place-items-center"
    >
      <div className="hero-image-bg" aria-hidden="true" />
      <div className="hero-image-vignette" aria-hidden="true" />

      <div className="relative z-10 text-center p-6 sm:p-8 md:p-12 lg:p-14">
        {/* Logo directly above headline */}
        <div className="flex justify-center mb-6">
          <img src="/scamailogo.png" alt="Scam AI" className="h-12 w-auto md:h-14" />
        </div>
        
        {hero.title && (
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-tight">
            {showTypingEffect ? (
              <TypingEffect
                text={hero.title}
                speed={80}
                className="block"
                fadeOutDelay={0}
              />
            ) : (
              <span className="block">{hero.title}</span>
            )}
          </h1>
        )}

        {hero.subtitle && showSubtitle && (
          <p className="text-xl md:text-2xl text-white/85 mb-12 font-light tracking-wide">
            {showTypingEffect ? (
              <TypingEffect
                text={hero.subtitle}
                speed={80}
                className="block"
                fadeOutDelay={0}
              />
            ) : (
              <span className="block">{hero.subtitle}</span>
            )}
          </p>
        )}

        {hero.cta && (
          <div className="mt-12 flex items-center justify-center gap-4">
            <Button
              href="https://www.youtube.com/watch?v=qh3NGpYRG3I"
              external
              variant="outline"
              className="rounded-full px-8 py-3 font-semibold"
            >
              Watch Demo
            </Button>
            <Button
              href={hero.cta.href}
              className="rounded-full bg-white text-black px-8 py-3 font-semibold shadow-sm"
            >
              {hero.cta.label}
            </Button>
          </div>
        )}
      </div>
    </motion.section>
  );
}
