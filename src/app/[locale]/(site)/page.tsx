"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import SimpleNav from "@/components/SimpleNav";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "@/i18n/navigation";

type PlaygroundTab = "image" | "voice";
type SolutionTab = "vision" | "audio" | "firewall";

export default function Home() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === "dark";
  const playgroundTabs = useMemo(
    () => [
      { key: "image" as const, label: t("Playground.tabs.image.label"), badge: t("Playground.tabs.image.badge") },
      { key: "voice" as const, label: t("Playground.tabs.voice.label"), badge: t("Playground.tabs.voice.badge") },
    ],
    [t]
  );
  const solutionTabs = useMemo(
    () => ({
      vision: {
        title: t("Solutions.tabs.vision.title"),
        description: t("Solutions.tabs.vision.description"),
        bullets: [
          t("Solutions.tabs.vision.bullets.0"),
          t("Solutions.tabs.vision.bullets.1"),
          t("Solutions.tabs.vision.bullets.2"),
        ],
      },
      audio: {
        title: t("Solutions.tabs.audio.title"),
        description: t("Solutions.tabs.audio.description"),
        bullets: [
          t("Solutions.tabs.audio.bullets.0"),
          t("Solutions.tabs.audio.bullets.1"),
          t("Solutions.tabs.audio.bullets.2"),
        ],
      },
      firewall: {
        title: t("Solutions.tabs.firewall.title"),
        description: t("Solutions.tabs.firewall.description"),
        bullets: [
          t("Solutions.tabs.firewall.bullets.0"),
          t("Solutions.tabs.firewall.bullets.1"),
          t("Solutions.tabs.firewall.bullets.2"),
        ],
      },
    }),
    [t]
  );
  const problemStats = useMemo(
    () => [
      t("Problem.stats.0"),
      t("Problem.stats.1"),
      t("Problem.stats.2"),
    ],
    [t]
  );
  const developerBullets = useMemo(
    () => [
      t("Developer.bullets.0"),
      t("Developer.bullets.1"),
      t("Developer.bullets.2"),
      t("Developer.bullets.3"),
    ],
    [t]
  );
  const featureLabels = useMemo(
    () => ({
      image: t("Pricing.features.image"),
      voice: t("Pricing.features.voice"),
    }),
    [t]
  );
  const [activePlaygroundTab, setActivePlaygroundTab] =
    useState<PlaygroundTab>("image");
  const [demoCount, setDemoCount] = useState(0);
  const initialPlaygroundResult = useMemo(
    () => ({
      verdict: t("Playground.result.default.verdict"),
      analysis: t("Playground.result.default.analysis"),
      action: t("Playground.result.default.action"),
    }),
    [t]
  );
  const [playgroundResult, setPlaygroundResult] = useState(initialPlaygroundResult);
  const [activeSolution, setActiveSolution] = useState<SolutionTab>("vision");
  const [videoOverlay, setVideoOverlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [monthlyVerifications, setMonthlyVerifications] = useState(10000);
  const [featureToggles, setFeatureToggles] = useState({
    image: true,
    voice: false,
  });
  const panelClass = "bg-zinc-900 border border-zinc-800";
  const cardOverlay = "border bg-zinc-900 border-zinc-800";
  const softText = "text-zinc-300";
  const mutedText = "text-zinc-400";

  useEffect(() => {
    const storedCount = Number(localStorage.getItem("demo_count") ?? "0");
    if (!Number.isNaN(storedCount)) {
      setDemoCount(storedCount);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    setPlaygroundResult(initialPlaygroundResult);
  }, [initialPlaygroundResult]);

  const handleRunDetection = () => {
    const newCount = demoCount + 1;
    setDemoCount(newCount);
    localStorage.setItem("demo_count", String(newCount));

    const verdicts = {
      image: t("Playground.result.image.verdict"),
      voice: t("Playground.result.voice.verdict"),
    };
    const analyses = {
      image: t("Playground.result.image.analysis"),
      voice: t("Playground.result.voice.analysis"),
    };

    setPlaygroundResult({
      verdict: verdicts[activePlaygroundTab],
      analysis: analyses[activePlaygroundTab],
      action: t("Playground.result.action"),
    });
  };

  const priceLabel = useMemo(() => {
    if (monthlyVerifications > 100000) return t("Pricing.contactSales");
    const overageBlocks = Math.max(0, Math.ceil((monthlyVerifications - 10000) / 10000));
    const estimate = 49 + overageBlocks * 29 + (featureToggles.voice ? 20 : 0);
    return t("Pricing.estimate", { price: estimate.toLocaleString(locale) });
  }, [monthlyVerifications, featureToggles.voice, locale, t]);

  const handleVideoPlay = () => {
    setVideoOverlay(false);
    videoRef.current?.play();
  };

  const toggleFeature = (key: "image" | "voice") => {
    setFeatureToggles((prev) => ({
      ...prev,
      [key]: key === "image" ? true : !prev[key],
    }));
  };

  return (
    <div
      suppressHydrationWarning
      className="min-h-screen relative overflow-hidden bg-zinc-950 text-zinc-100"
    >
      <SimpleNav />

      <main className="pt-[78px] relative z-10">
          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center relative">
              <h1
                className="text-4xl md:text-6xl font-semibold leading-tight md:leading-[1.05] mb-6 whitespace-pre-line text-zinc-100"
              >
                {t("Hero.title")}
              </h1>
              <p className={`text-lg md:text-xl ${softText} max-w-3xl mx-auto mb-10 whitespace-pre-line`}>
                {t("Hero.subtitle")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <a
                  href="#playground"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-tight shadow-sm hover:shadow-md transition-all"
                >
                  {t("Hero.primaryCta")}
                </a>
                <a
                  href="https://app.scam.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 font-semibold tracking-tight transition border border-zinc-600 text-zinc-100 hover:bg-zinc-800"
                >
                  {t("Hero.secondaryCta")}
                </a>
              </div>
            </div>
          </section>

          {/* Playground */}
          <section
            id="playground"
            className="py-20 border-t border-zinc-800 bg-zinc-950"
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-8">
                <p
                  className={`text-xs uppercase tracking-[0.2em] mb-2 ${
                    isDark ? "text-indigo-200" : "text-indigo-700"
                  }`}
                >
                  {t("Playground.kicker")}
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold">{t("Playground.title")}</h2>
              </div>

              <div className={`backdrop-blur-lg p-6 md:p-8 relative overflow-hidden ${panelClass}`}>
                <div className="relative">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {playgroundTabs.map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setActivePlaygroundTab(tab.key)}
                        className={`px-4 py-2 text-sm font-medium border transition ${
                          activePlaygroundTab === tab.key
                            ? isDark
                              ? "border-indigo-400/60 bg-indigo-500/10 text-white"
                              : "border-indigo-300 bg-indigo-100 text-indigo-900"
                          : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                        }`}
                      >
                        <span>{tab.label}</span>{" "}
                        {tab.badge && (
                          <span
                            className={`ml-2 text-[10px] uppercase tracking-[0.16em] ${
                              isDark ? "text-indigo-200" : "text-indigo-700"
                            }`}
                          >
                            {tab.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div
                      className="p-5 h-full flex flex-col justify-between border border-zinc-800 bg-zinc-900"
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault();
                        handleRunDetection();
                      }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className={`text-sm ${mutedText}`}>{t("Playground.uploadArea")}</p>
                          <p className="text-sm text-zinc-400">
                            {t("Playground.uploadHint")}
                          </p>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.16em] text-indigo-200">
                          {activePlaygroundTab === "image"
                            ? t("Playground.badges.image")
                            : t("Playground.badges.voice")}
                        </span>
                      </div>
                      <div
                        className="flex-1 border border-dashed min-h-[220px] flex items-center justify-center text-center px-6 border-zinc-700 bg-zinc-900"
                      >
                        <p className={softText}>
                          {t("Playground.dropzonePrompt")}
                          <br />
                          <span className="text-sm text-zinc-400">
                            {t("Playground.dropzoneFormats")}
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <button
                          onClick={handleRunDetection}
                          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm hover:shadow-md transition"
                        >
                          {t("Playground.runDetection")}
                        </button>
                        <span className={`text-xs ${mutedText}`}>
                          {t("Playground.remaining", {
                            count: 5 - Math.min(demoCount, 5),
                          })}
                        </span>
                      </div>
                    </div>

                    <div className={`relative p-5 flex flex-col gap-4 ${cardOverlay}`}>
                      {demoCount >= 5 && (
                        <div
                          className="absolute inset-0 backdrop-blur-xl border flex flex-col items-center justify-center text-center px-6 bg-zinc-900/80 border-zinc-800"
                        >
                          <p className="text-lg font-semibold mb-2">
                            {t("Playground.limit.title", { limit: 5 })}
                          </p>
                          <p className={`mb-4 ${softText}`}>
                            {t("Playground.limit.description")}
                          </p>
                          <a
                            href="https://app.scam.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-tight"
                          >
                            {t("Playground.limit.cta")}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-indigo-200 mb-2">
                            {t("Playground.result.label")}
                          </p>
                          <p className="text-xl font-semibold">{playgroundResult.verdict}</p>
                        </div>
                        <span className="px-3 py-1 text-xs bg-red-500/20 border border-red-500/30 text-red-200">
                          {t("Playground.risk")}
                        </span>
                      </div>
                      <div className={`p-4 ${panelClass}`}>
                        <p className={softText}>{playgroundResult.analysis}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className={softText}>{playgroundResult.action}</p>
                        <a
                          href="#developer"
                          className={`text-sm font-semibold ${
                            isDark ? "text-indigo-200 hover:text-white" : "text-indigo-700"
                          }`}
                        >
                          {t("Playground.integrate")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust */}
          <section
            className="py-16 border-t border-zinc-800 bg-zinc-950"
          >
            <div className="max-w-6xl mx-auto px-6">
              <p className={`text-xs uppercase tracking-[0.2em] mb-4 ${mutedText}`}>
                {t("Trust.kicker")}
              </p>
              <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-10">
                {[
                  { src: "/skydeck.png", alt: t("Trust.logos.skydeck"), width: 120, height: 34 },
                  { src: "/aws.webp", alt: t("Trust.logos.aws"), width: 90, height: 30 },
                  { src: "/nvidia.webp", alt: t("Trust.logos.nvidia"), width: 110, height: 32 },
                  { src: "/google.webp", alt: t("Trust.logos.google"), width: 90, height: 30 },
                ].map((logo) => (
                  <div
                    key={logo.alt}
                    className="opacity-60 hover:opacity-100 transition transform hover:-translate-y-1"
                  >
                    <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`relative overflow-hidden ${panelClass}`}>
                  <Image
                    src="/skydeck.png"
                    alt={t("Trust.featured.imageAlt")}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <p
                    className={`text-sm uppercase tracking-[0.18em] ${
                      isDark ? "text-indigo-200" : "text-indigo-700"
                    }`}
                  >
                    {t("Trust.featured.kicker")}
                  </p>
                  <h3 className="text-3xl font-semibold">
                    {t("Trust.featured.title")}
                  </h3>
                  <p className={softText}>
                    {t("Trust.featured.description")}
                  </p>
                  <Link
                    href="/stories/skydeck"
                    className={`font-semibold ${
                      isDark ? "text-indigo-200 hover:text-white" : "text-indigo-700"
                    }`}
                  >
                    {t("Trust.featured.cta")}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Problem */}
          <section
            className="py-20 border-t border-zinc-800 bg-zinc-950"
          >
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
              <div
                className="relative p-4 overflow-hidden border border-red-500/20 bg-zinc-900"
              >
                <div className="absolute inset-0 border border-red-500/30 pointer-events-none" />
                <div className="iphone-frame">
                  <video
                    ref={videoRef}
                    src="/deepfake_scamai.webm"
                    poster="/deepfake_frame.webp"
                    className="w-full h-full object-cover rounded-none"
                    controls={false}
                    onPlay={() => setVideoOverlay(false)}
                  />
                  {videoOverlay && (
                    <button
                      onClick={handleVideoPlay}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition bg-zinc-900/80 hover:bg-zinc-900/90"
                    >
                      <span
                        className={`text-sm uppercase tracking-[0.18em] mb-2 ${
                          isDark ? "text-red-200" : "text-red-600"
                        }`}
                      >
                        {t("Problem.video.kicker")}
                      </span>
                      <p className="text-lg font-semibold mb-4">
                        {t("Problem.video.title")}
                      </p>
                      <span className="px-4 py-2 border border-red-400/60 text-red-100">
                        {t("Problem.video.cta")}
                      </span>
                    </button>
                  )}
                </div>
              </div>
              <div>
                <p
                  className={`text-sm uppercase tracking-[0.2em] mb-3 ${
                    isDark ? "text-red-200" : "text-red-600"
                  }`}
                >
                  {t("Problem.kicker")}
                </p>
                <h3 className="text-3xl font-semibold mb-3">{t("Problem.title")}</h3>
                <p className={`${softText} mb-6`}>
                  {t("Problem.description")}
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {problemStats.map((stat) => (
                    <div
                      key={stat}
                      className="p-4 flex items-center justify-between border border-zinc-800 bg-zinc-900"
                    >
                      <p
                        className={`text-lg font-semibold ${
                          isDark ? "text-red-100" : "text-red-700"
                        }`}
                      >
                        {stat}
                      </p>
                      <span className="h-2 w-2 bg-red-400 animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Solutions */}
          <section
            className="py-20 border-t border-zinc-800 bg-zinc-950"
          >
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <p
                  className={`text-xs uppercase tracking-[0.18em] mb-2 ${
                    isDark ? "text-indigo-200" : "text-indigo-700"
                  }`}
                >
                  {t("Solutions.kicker")}
                </p>
                <h3 className="text-3xl font-semibold mb-6">{t("Solutions.title")}</h3>
                <div className="space-y-3">
                  {(["vision", "audio", "firewall"] as SolutionTab[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveSolution(key)}
                      className={`w-full text-left p-4 border transition ${
                        activeSolution === key
                          ? isDark
                            ? "border-indigo-400/60 bg-indigo-500/10"
                            : "border-indigo-300 bg-indigo-100"
                          : "border-zinc-800 bg-zinc-900 hover:bg-zinc-800"
                      }`}
                    >
                      <p className="text-lg font-semibold">{solutionTabs[key].title}</p>
                      <p className={`${softText} text-sm`}>{solutionTabs[key].description}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div className={`lg:col-span-3 p-6 relative overflow-hidden ${panelClass}`}>
                <div className="relative">
                  <p
                    className={`text-sm uppercase tracking-[0.18em] mb-2 ${
                      isDark ? "text-indigo-200" : "text-indigo-700"
                    }`}
                  >
                    {t("Solutions.analysis.kicker")}
                  </p>
                  <h4 className="text-2xl font-semibold mb-4">{solutionTabs[activeSolution].title}</h4>
                  <p className={`${softText} mb-6`}>{solutionTabs[activeSolution].description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {solutionTabs[activeSolution].bullets.map((item) => (
                      <div
                        key={item}
                        className="p-4 border border-zinc-800 bg-zinc-900"
                      >
                        <p className={softText}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border p-4 border-zinc-800 bg-zinc-900">
                    <div className="flex items-center justify-between mb-2">
                      <p className={`text-sm ${softText}`}>{t("Solutions.analysis.logTitle")}</p>
                      <span className="px-3 py-1 text-xs bg-green-500/10 text-green-200 border border-green-500/30">
                        {t("Solutions.analysis.realtime")}
                      </span>
                    </div>
                    <div
                      className="space-y-2 text-sm font-mono text-zinc-200"
                    >
                      <p>{t("Solutions.analysis.logs.0")}</p>
                      <p>{t("Solutions.analysis.logs.1")}</p>
                      <p>{t("Solutions.analysis.logs.2")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Developer Experience */}
          <section
            id="developer"
            className="py-20 border-t border-zinc-800 bg-zinc-950"
          >
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p
                  className={`text-xs uppercase tracking-[0.2em] mb-2 ${
                    isDark ? "text-indigo-200" : "text-indigo-700"
                  }`}
                >
                  {t("Developer.kicker")}
                </p>
                <h3 className="text-3xl font-semibold mb-4">
                  {t("Developer.title")}
                </h3>
                <ul className={`space-y-3 ${softText}`}>
                  {developerBullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-indigo-300 mt-1">▣</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/docs"
                  className="inline-flex mt-6 px-5 py-2 font-semibold border border-zinc-700 text-indigo-400 hover:bg-zinc-800"
                >
                  {t("Developer.cta")}
                </Link>
              </div>
              <div
                className="p-5 shadow-[0_0_45px_rgba(79,70,229,0.25)] border border-zinc-800 bg-zinc-900"
              >
                <div className={`flex items-center justify-between text-xs mb-3 ${mutedText}`}>
                  <span>{t("Developer.sdk")}</span>
                  <span className={isDark ? "text-indigo-200" : "text-indigo-700"}>
                    {t("Developer.latencyTarget")}
                  </span>
                </div>
                <pre
                  className="text-sm p-4 overflow-x-auto text-zinc-100 bg-zinc-900"
                >
{t("Developer.code")}
                </pre>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section
            className="py-20 border-t border-zinc-800 bg-zinc-950"
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                <div>
                  <p
                    className={`text-xs uppercase tracking-[0.2em] mb-2 ${
                      isDark ? "text-indigo-200" : "text-indigo-700"
                    }`}
                  >
                    {t("Pricing.kicker")}
                  </p>
                  <h3 className="text-3xl font-semibold">{t("Pricing.title")}</h3>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className={`md:col-span-2 p-6 ${panelClass}`}>
                  <label className={`text-sm mb-2 block ${mutedText}`}>
                    {t("Pricing.monthlyLabel", {
                      count: monthlyVerifications.toLocaleString(locale),
                    })}
                  </label>
                  <input
                    type="range"
                    min={1000}
                    max={1000000}
                    step={1000}
                    value={monthlyVerifications}
                    onChange={(e) => setMonthlyVerifications(Number(e.target.value))}
                    className="w-full accent-indigo-400"
                  />
                  <div className={`flex items-center gap-3 mt-6 ${softText}`}>
                    {(["image", "voice"] as const).map((key) => (
                      <label key={key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={featureToggles[key]}
                          disabled={key === "image"}
                          onChange={() => toggleFeature(key)}
                          className="accent-indigo-400"
                        />
                        <span className={key === "image" ? "text-white" : ""}>
                          {featureLabels[key]}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="border p-6 border-zinc-800 bg-zinc-900">
                  <p
                    className={`text-sm uppercase tracking-[0.18em] mb-2 ${
                      isDark ? "text-indigo-200" : "text-indigo-700"
                    }`}
                  >
                    {t("Pricing.estimateLabel")}
                  </p>
                  <p className="text-3xl font-semibold mb-2">{priceLabel}</p>
                  <p className={`text-sm mb-4 ${softText}`}>{t("Pricing.includes")}</p>
                  <p className={`text-sm mb-4 ${mutedText}`}>
                    {t("Pricing.note")}
                  </p>
                  <ul className={`text-sm space-y-2 ${softText}`}>
                    <li>{t("Pricing.list.0")}</li>
                    <li>{t("Pricing.list.1")}</li>
                    <li>{t("Pricing.list.2")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section
            id="final-cta"
            className="py-20 border-t border-zinc-800 bg-zinc-950"
          >
            <div className="max-w-3xl mx-auto px-6 text-center">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                {t("FinalCta.title")}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-3">
                <a
                  href="https://cal.com/scamai/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm hover:shadow-md transition"
                >
                  {t("FinalCta.primary")}
                </a>
                <a
                  href="https://app.scam.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 transition font-semibold border border-zinc-600 text-zinc-100 hover:bg-zinc-800"
                >
                  {t("FinalCta.secondary")}
                </a>
              </div>
              <p className={softText}>
                {t("FinalCta.description")}
              </p>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
  );
}
