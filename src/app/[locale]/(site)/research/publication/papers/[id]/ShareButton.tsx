"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ShareButton() {
  const t = useTranslations("Research.Paper");
  const [copySuccess, setCopySuccess] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error(t("copyError"), err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
    >
      {copySuccess ? t("copied") : t("share")}
    </button>
  );
}
