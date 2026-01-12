"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export default function UseCasesMore() {
  const t = useTranslations("Company.UseCasesMore");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === "dark";
  const [expanded, setExpanded] = useState(false);
  const buttonStyle = isDark
    ? "border-white/15 text-white/90 hover:text-white hover:border-white/25"
    : "border-slate-300 text-slate-800 hover:text-slate-900 hover:border-slate-400 bg-white shadow-sm";
  const divider = isDark ? "border-white/10" : "border-slate-200";
  const label = isDark ? "text-white/50" : "text-slate-500";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mt-5">
      <div className="text-center">
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${buttonStyle}`}
        >
          {expanded ? (
            <>
              {t("showLess")} <span aria-hidden>↑</span>
            </>
          ) : (
            <>
              {t("showMore")} <span aria-hidden>→</span>
            </>
          )}
        </button>
      </div>

      {expanded ? (
        <div className={`mt-6 border-t pt-5 ${divider}`}>
          <div className={`text-xs tracking-widest uppercase mb-3 text-center ${label}`}>
            {t("title")}
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Mini
              title={t("items.0.title")}
              desc={t("items.0.description")}
              isDark={isDark}
            />
            <Mini
              title={t("items.1.title")}
              desc={t("items.1.description")}
              isDark={isDark}
            />
            <Mini
              title={t("items.2.title")}
              desc={t("items.2.description")}
              isDark={isDark}
            />
            <Mini
              title={t("items.3.title")}
              desc={t("items.3.description")}
              isDark={isDark}
            />
            <Mini
              title={t("items.4.title")}
              desc={t("items.4.description")}
              isDark={isDark}
            />
            <Mini
              title={t("items.5.title")}
              desc={t("items.5.description")}
              isDark={isDark}
            />
            <Mini
              title={t("items.6.title")}
              desc={t("items.6.description")}
              isDark={isDark}
            />
            <Mini
              title={t("items.7.title")}
              desc={t("items.7.description")}
              isDark={isDark}
            />
          </div>

          {/* Integrations section removed as requested */}
        </div>
      ) : null}
    </div>
  );
}

function Mini({ title, desc, isDark }: { title: string; desc: string; isDark: boolean }) {
  const surface = isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white shadow-sm";
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const bodyColor = isDark ? "text-white/60" : "text-slate-700";
  return (
    <div className={`rounded-2xl border p-5 ${surface}`}>
      <div className={`text-base font-semibold ${titleColor}`}>{title}</div>
      <p className={`mt-1.5 text-sm leading-relaxed ${bodyColor}`}>{desc}</p>
    </div>
  );
}
