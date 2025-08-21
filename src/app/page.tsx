"use client";

import SiteShell from "@/components/SiteShell";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MinimalGame from "./MinimalGame";

export default function Home() {
  const secondaryLinks: string[] = [];

  const [gameMode, setGameMode] = useState(false);
  const [started, setStarted] = useState(false);
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<Record<number, "deepfake" | "real" | undefined>>({});

  const items = useMemo(() => {
    // 30 items total: 15 deepfake, 15 real; shuffle
    const base = Array.from({ length: 30 }, (_, i) => ({ id: i, label: (i < 15 ? "deepfake" : "real") as "deepfake" | "real" }));
    for (let i = base.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [base[i], base[j]] = [base[j], base[i]];
    }
    return base;
  }, [started]);

  const totalAnswered = Object.values(answers).filter(Boolean).length;
  const correct = useMemo(() => items.reduce((acc, it) => (answers[it.id] === it.label ? acc + 1 : acc), 0), [answers, items]);
  const percent = Math.round((correct / items.length) * 100);

  const sectionVariants = {
    initial: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.35 } },
  };

  return (
    <SiteShell secondaryLinks={secondaryLinks}>
      <div className="relative">
        {/* Hero */}
        <AnimatePresence>{!gameMode && (
          <motion.section
            key="hero"
            variants={sectionVariants}
            initial="initial"
            exit="exit"
            className="relative overflow-hidden rounded-2xl border border-white/10 min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh] grid place-items-center"
          >
            <div className="hero-image-bg" aria-hidden="true" />
            <div className="hero-image-vignette" aria-hidden="true" />
            <div className="relative z-10 text-center p-6 sm:p-8 md:p-12 lg:p-14">
              <p className="text-white text-base mb-3 sm:mb-4">Build with ScamAI to</p>
              <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight leading-[0.95] md:leading-[1.05] max-w-4xl mx-auto">
                Detect  <br />Fakes and Scams <br />
             
              </h1>
              <p className="mt-3 sm:mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-2xl mx-auto">
                Prevention of Deepfakes, GenAI,
                Voice clones & Scams.
              </p>

              <div className="mt-6 sm:mt-8 flex items-center justify-center">
                <a href="/demo" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm">Demo</a>
              </div>
            </div>


          </motion.section>
        )}</AnimatePresence>

        {/* Cards (preserve backgrounds) */}
        <AnimatePresence>{!gameMode && (
          <motion.section
            key="cards"
            variants={sectionVariants}
            initial="initial"
            exit="exit"
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              {
                title: "Deepfake Detection",
                desc: "Catch face swaps, lip‑sync and synthetic personas across images and video.",
                bg: <div className="absolute inset-0 -z-10 bg-[url('/deepfake.webp')] bg-cover bg-top opacity-60" />,
                overlay: <div className="absolute inset-0 -z-10 bg-[#3D38F5]/43" />,
                href: "/models/deepfakes",
              },
              {
                title: "GenAI Detection",
                desc: "Detect AI-generated images and videos; flag manipulations and synthetic content.",
                bg: <div className="absolute inset-0 -z-10 bg-[url('/GenAI.webp')] bg-cover bg-center opacity-70" />,
                href: "/models/ai-generated-media",
              },
              {
                title: "Voice-cloning Detection",
                desc: "Identify cloned voices and synthetic audio with signal-level analysis.",
                bg: <div className="absolute inset-0 -z-10 bg-[url('https://i.pinimg.com/originals/d8/e6/eb/d8e6eb6b345ada088e2448947c483ab4.gif')] bg-cover bg-center opacity-40" />,
                href: "/models/voice-clones",
              },
              {
                title: "Link & QR Code Detection",
                desc: "Detect malicious URLs, QR codes and redirectors used in phishing scams.",
                bg: <div className="absolute inset-0 -z-10 bg-[url('/link.webp')] bg-cover bg-center opacity-60" />,
                href: "/models/scam-text-detection",
              },
              {
                title: "ScamDB",
                desc: "Check accounts, phone numbers, emails or crypto wallets against reported scams.",
                bg: <div className="absolute inset-0 -z-10 bg-[url('/scamdb.webp')] bg-cover bg-center opacity-60" />,
                href: "/research/large-scale-database",
              },
              {
                title: "Why Us",
                desc: "Best‑in‑class accuracy and low‑latency inference with simple, production‑ready APIs. Ship trust in days, not months.",
                bg: <div className="absolute inset-0 -z-10 bg-[url('/whyus.webp')] bg-cover bg-center opacity-70" />,
                href: "/demo",
                light: true,
              },
            ].map((card) => (
              <article
                key={card.title}
                className={`relative rounded-2xl p-8 backdrop-blur-sm transition-colors overflow-hidden min-h-[280px] flex flex-col justify-between ${card.light ? "bg-white text-black hover:bg-white" : "bg-white/5 hover:bg-white/10"}`}
              >
                {card.bg}
                {card.overlay}
                <h3 className="text-lg font-semibold tracking-tight">{card.title}</h3>
                <p className={`mt-2 text-sm ${card.light ? "text-black/70" : "text-white/80"}`}>{card.desc}</p>
                <a href={card.href} className={`mt-4 inline-flex text-sm font-semibold underline underline-offset-4 ${card.light ? "text-black/90" : "text-white/90"}`}>Learn more</a>
                {card.href && (
                  <a href={card.href} aria-label={`Open ${card.title}`} className="absolute inset-0">
                    <span className="sr-only">Open {card.title}</span>
                  </a>
                )}
              </article>
            ))}
          </motion.section>
        )}</AnimatePresence>

        {/* Game mode */}
        {gameMode && (
          <section className="mt-6">
            {!started ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-white/10 p-6 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold tracking-tight">Deepfake Challenge</h2>
                <p className="mt-2 text-white/80">Enter your work email to start. You’ll see 30 images (15 deepfake, 15 real). Score 65%+ to win a $100 gift card.</p>
                <div className="mt-4 flex gap-2 justify-center">
                  <input className="bg-white/5 border border-white/15 px-3 py-2 w-full max-w-sm" placeholder="your.name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <button className="bg-white text-black px-4 py-2 font-semibold" onClick={() => setStarted(true)} disabled={!email}>Start</button>
                </div>
              </motion.div>
            ) : (
              <MinimalGame items={items} answers={answers} setAnswers={setAnswers} email={email} />
            )}
          </section>
        )}
      </div>
    </SiteShell>
  );
}
