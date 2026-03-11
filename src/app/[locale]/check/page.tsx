"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";

type CheckResult = {
  verdict: "ai_generated" | "likely_real";
  confidence: number;
  label: string;
  details: string;
  checks: { name: string; passed: boolean; score: number }[];
  remaining: number;
};

type FileState = {
  file: File;
  preview: string;
  status: "idle" | "uploading" | "done" | "error";
  result?: CheckResult;
  error?: string;
};

export default function CheckPage() {
  const [files, setFiles] = useState<FileState[]>([]);
  const [dragging, setDragging] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch remaining quota on mount
  useEffect(() => {
    fetch("/api/check")
      .then((r) => r.json())
      .then((d) => setRemaining(d.remaining))
      .catch(() => {});
  }, []);

  const addFiles = useCallback(
    (newFiles: FileList | File[]) => {
      const arr = Array.from(newFiles).filter((f) => f.type.startsWith("image/"));
      if (arr.length === 0) return;

      const entries: FileState[] = arr.map((f) => ({
        file: f,
        preview: URL.createObjectURL(f),
        status: "idle" as const,
      }));

      setFiles((prev) => [...prev, ...entries]);

      // Auto-analyze each file
      for (const entry of entries) {
        analyzeFile(entry);
      }
    },
     
    []
  );

  const analyzeFile = async (entry: FileState) => {
    setFiles((prev) =>
      prev.map((f) => (f.file === entry.file ? { ...f, status: "uploading" as const } : f))
    );

    const formData = new FormData();
    formData.append("file", entry.file);

    try {
      const res = await fetch("/api/check", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok) {
        setFiles((prev) =>
          prev.map((f) =>
            f.file === entry.file ? { ...f, status: "error" as const, error: data.error } : f
          )
        );
        return;
      }

      setFiles((prev) =>
        prev.map((f) =>
          f.file === entry.file ? { ...f, status: "done" as const, result: data } : f
        )
      );
      setRemaining(data.remaining);
    } catch {
      setFiles((prev) =>
        prev.map((f) =>
          f.file === entry.file
            ? { ...f, status: "error" as const, error: "Network error. Please try again." }
            : f
        )
      );
    }
  };

  const removeFile = (file: File) => {
    setFiles((prev) => {
      const entry = prev.find((f) => f.file === file);
      if (entry) URL.revokeObjectURL(entry.preview);
      return prev.filter((f) => f.file !== file);
    });
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      addFiles(e.dataTransfer.files);
    },
    [addFiles]
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative px-4 sm:px-6" style={{ paddingTop: "140px", paddingBottom: "40px" }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
            AI DETECTION
          </p>
          <h1
            className="text-[2.2rem] sm:text-[3rem] font-semibold"
            style={{ lineHeight: "1.05em", letterSpacing: "-.015em" }}
          >
            Is it AI-generated?
          </h1>
          <p
            className="mt-4 text-base sm:text-lg mx-auto max-w-[520px]"
            style={{
              background:
                "radial-gradient(50% 150% at 50% 0%, #fff 60%, rgba(255,255,255,0.6) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Upload an image to instantly detect AI-generated content.
          </p>

          {/* Quota badge — shown when checks remain */}
          {remaining !== null && remaining > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 text-xs text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              {remaining} free check{remaining !== 1 ? "s" : ""} remaining today
            </div>
          )}
        </div>
      </section>

      {/* Limit reached — prominent sign-up CTA */}
      {remaining !== null && remaining <= 0 && (
        <section className="px-4 sm:px-6 pb-6">
          <div className="mx-auto max-w-3xl">
            <div
              className="relative overflow-hidden rounded-2xl p-8 sm:p-10 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(36,95,255,0.12) 0%, rgba(120,50,255,0.08) 50%, rgba(36,95,255,0.06) 100%)",
                boxShadow: "inset 0 0 0 1px rgba(36,95,255,0.2), 0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.1] mx-auto mb-5">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                You&apos;ve used all 5 free checks today
              </h2>
              <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
                Create a free ScamAI account to unlock unlimited checks, API access, batch processing, and detailed reports.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://app.scam.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
                >
                  Create Free Account
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <Link
                  href="/pricing"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  View pricing plans
                </Link>
              </div>
              <div className="flex items-center justify-center gap-6 mt-6 text-[11px] text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M5 13l4 4L19 7" /></svg>
                  200 free images/month
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M5 13l4 4L19 7" /></svg>
                  API access
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M5 13l4 4L19 7" /></svg>
                  No credit card
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upload area */}
      <section className="px-4 sm:px-6 pb-8">
        <div className="mx-auto max-w-3xl">
          <div
            className={`relative rounded-2xl border-2 border-dashed transition-all duration-200 ${
              remaining === 0
                ? "border-white/[0.06] bg-white/[0.01] cursor-not-allowed opacity-40"
                : dragging
                  ? "border-blue-400 bg-blue-400/[0.04] cursor-pointer"
                  : "border-white/[0.12] hover:border-white/[0.25] bg-white/[0.02] cursor-pointer"
            }`}
            style={{ minHeight: files.length === 0 ? "220px" : "120px" }}
            onDragOver={(e) => {
              e.preventDefault();
              if (remaining !== 0) setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              if (remaining !== 0) addFiles(e.dataTransfer.files);
            }}
            onClick={() => remaining !== 0 && inputRef.current?.click()}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              disabled={remaining === 0}
              onChange={(e) => {
                if (e.target.files) addFiles(e.target.files);
                e.target.value = "";
              }}
            />
            <div className="flex flex-col items-center justify-center h-full py-10 sm:py-14 pointer-events-none">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/[0.06] border border-white/[0.08] mb-4">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              {remaining === 0 ? (
                <p className="text-sm text-gray-500 font-medium">
                  Sign up to continue checking files
                </p>
              ) : (
                <>
                  <p className="text-sm text-gray-300 font-medium">
                    Drop images here or <span className="text-blue-400">browse</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1.5">
                    JPEG, PNG, WebP, GIF — up to 10MB
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-4">
          <AnimatePresence mode="popLayout">
            {files.map((f) => (
              <motion.div
                key={f.preview}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-white/[0.03] border border-white/[0.08] overflow-hidden"
              >
                <div className="flex items-start gap-4 p-4 sm:p-5">
                  {/* Thumbnail */}
                  <div className="relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-white/[0.04]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.preview}
                      alt={f.file.name}
                      className="w-full h-full object-cover"
                    />
                    {f.status === "uploading" && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          {f.file.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {(f.file.size / 1024).toFixed(0)} KB
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(f.file);
                        }}
                        className="flex-shrink-0 p-1 rounded hover:bg-white/[0.06] text-gray-500 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Status */}
                    {f.status === "uploading" && (
                      <div className="mt-3">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="w-3 h-3 border-2 border-gray-500 border-t-blue-400 rounded-full animate-spin" />
                          Analyzing image...
                        </div>
                      </div>
                    )}

                    {f.status === "error" && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-red-400">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4M12 16h.01" />
                        </svg>
                        {f.error}
                      </div>
                    )}

                    {f.status === "done" && f.result && (
                      <ResultDisplay result={f.result} />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA — only when quota remains and files exist */}
      {files.length > 0 && remaining !== 0 && (
        <section className="px-4 sm:px-6 pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8">
              <p className="text-sm text-gray-400 mb-3">
                Need higher volume or API access?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://app.scam.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-gray-200 transition-colors"
                >
                  Create Free Account
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <Link
                  href="/demo"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Talk to sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function ResultDisplay({ result }: { result: CheckResult }) {
  const [expanded, setExpanded] = useState(false);
  const isAI = result.verdict === "ai_generated";

  return (
    <div className="mt-3">
      {/* Verdict badge */}
      <div className="flex items-center gap-3">
        <div
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
            isAI
              ? "bg-red-500/10 text-red-400 border border-red-500/20"
              : "bg-green-500/10 text-green-400 border border-green-500/20"
          }`}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full ${isAI ? "bg-red-400" : "bg-green-400"}`}
          />
          {result.label}
        </div>
        <span className="text-xs text-gray-500">
          {result.confidence}% confidence
        </span>
      </div>

      {/* Details */}
      <p className="text-xs text-gray-400 mt-2 leading-relaxed">{result.details}</p>

      {/* Expand checks */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setExpanded(!expanded);
        }}
        className="mt-2 flex items-center gap-1 text-[11px] text-gray-500 hover:text-gray-300 transition-colors"
      >
        <svg
          className={`w-3 h-3 transition-transform ${expanded ? "rotate-90" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
        {expanded ? "Hide" : "View"} detailed checks
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-1.5">
              {result.checks.map((check) => (
                <div
                  key={check.name}
                  className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-white/[0.02]"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        check.passed ? "bg-green-400" : "bg-red-400"
                      }`}
                    />
                    <span className="text-gray-300">{check.name}</span>
                  </div>
                  <span
                    className={`text-[11px] font-mono ${
                      check.score > 70 ? "text-red-400" : "text-green-400"
                    }`}
                  >
                    {check.score}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
