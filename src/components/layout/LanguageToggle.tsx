"use client";

import React from "react";
import { useTranslation, Language } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "or" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language between English and Odia"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all border border-forest-500/30 bg-forest-900/40 text-sand-100 hover:border-forest-400 hover:bg-forest-800/60"
      data-cursor-text="LANG"
    >
      <Globe className="w-3.5 h-3.5 text-forest-300" />
      <span className={language === "en" ? "text-harvest-400 font-bold" : "text-sand-100"}>EN</span>
      <span className="text-sand-200/40">/</span>
      <span className={language === "or" ? "text-harvest-400 font-bold" : "text-sand-100"}>ଓଡ଼ିଆ</span>
    </button>
  );
}
