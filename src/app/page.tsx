"use client";

import SiteShell from "@/components/SiteShell";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MinimalGame from "./MinimalGame";

export default function Home() {
  const secondaryLinks: string[] = [];

  const [gameMode] = useState(false);
  const [started, setStarted] = useState(false);
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<
    Record<number, "deepfake" | "real" | undefined>
  >({});
  const [items, setItems] = useState<
    Array<{ id: number; label: "deepfake" | "real" }>
  >([]);

  // Initialize items on client-side only to avoid hydration mismatch
  useEffect(() => {
    // 30 items total: 15 deepfake, 15 real; shuffle
    const base = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      label: (i < 15 ? "deepfake" : "real") as "deepfake" | "real",
    }));
    for (let i = base.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [base[i], base[j]] = [base[j], base[i]];
    }
    setItems(base);
  }, []);

  console.log({ started, email, answers, items }); // Use variables to avoid warnings

  const sectionVariants = {
    initial: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.35 } },
  };

  return (
    <SiteShell secondaryLinks={secondaryLinks}>
      <div className="relative w-full">
        {/* Hero */}
        <AnimatePresence>
          {!gameMode && (
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
                <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight leading-[0.95] md:leading-[1.05] max-w-4xl mx-auto">
                  Detect <br />
                  Fakes and Scams <br />
                </h1>
                <p className="mt-3 sm:mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-2xl mx-auto">
                  AI-driven scams are skyrocketing. Protect against deepfakes,
                  voice clones, and synthetic media with real-time detection
                  technology.
                </p>

                <div className="mt-6 sm:mt-8 flex items-center justify-center">
                  <a
                    href="/demo"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Spacer for fixed hero */}
        <div className="h-screen" />

        {/* Game mode */}
        {gameMode && (
          <section className="mt-6">
            {!started ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-white/10 p-6 text-center max-w-2xl mx-auto"
              >
                <h2 className="text-2xl font-semibold tracking-tight">
                  Deepfake Challenge
                </h2>
                <p className="mt-2 text-white/80">
                  Enter your work email to start. You’ll see 30 images (15
                  deepfake, 15 real). Score 65%+ to win a $100 gift card.
                </p>
                <div className="mt-4 flex gap-2 justify-center">
                  <input
                    className="bg-white/5 border border-white/15 px-3 py-2 w-full max-w-sm"
                    placeholder="your.name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="bg-white text-black px-4 py-2 font-semibold"
                    onClick={() => setStarted(true)}
                    disabled={!email}
                  >
                    Start
                  </button>
                </div>
              </motion.div>
            ) : (
              items.length > 0 && (
                <MinimalGame
                  items={items}
                  answers={answers}
                  setAnswers={setAnswers}
                  email={email}
                />
              )
            )}
          </section>
        )}
      </div>
    </SiteShell>
  );
}
