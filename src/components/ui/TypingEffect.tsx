"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  fadeOutDelay?: number;
}

export default function TypingEffect({
  text,
  speed = 100,
  className = "",
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (currentIndex === text.length && !isTypingComplete) {
      // Typing is complete
      setIsTypingComplete(true);
    }
  }, [currentIndex, text, speed, isTypingComplete]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 1 }}
    >
      {displayText.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < displayText.split("\n").length - 1 && <br />}
        </React.Fragment>
      ))}
      {!isTypingComplete && (
        <span className="animate-pulse">|</span>
      )}
    </motion.span>
  );
}
