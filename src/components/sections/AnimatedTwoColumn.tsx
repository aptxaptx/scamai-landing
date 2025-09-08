"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimatedTwoColumnProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  className?: string;
}

export default function AnimatedTwoColumn({
  leftContent,
  rightContent,
  className = "",
}: AnimatedTwoColumnProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, amount: 0.3 });
  const rightInView = useInView(rightRef, { once: true, amount: 0.3 });
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (leftInView) {
      leftControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
      });
    }
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (rightInView) {
      rightControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
      });
    }
  }, [rightInView, rightControls]);

  return (
    <section className={`w-full py-16 bg-black ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            ref={leftRef}
            className="w-full md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={leftControls}
          >
            {leftContent}
          </motion.div>
          
          <motion.div 
            ref={rightRef}
            className="w-full md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={rightControls}
          >
            {rightContent}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
