"use client";

import React, { useState } from "react";
import { useTranslation, Language } from "@/lib/i18n";
import { Globe, ChevronDown } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-900/60 border border-forest-700/50 text-xs font-semibold text-sand-100 hover:text-harvest-400 transition-colors"
        aria-label="Select Language"
        data-cursor-text="LANG"
      >
        <Globe className="w-3.5 h-3.5 text-harvest-400" />
        <span className="font-display font-bold">
          {language === "en" ? "English" : "ଓଡ଼ିଆ"}
        </span>
        <ChevronDown className="w-3 h-3 opacity-60" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-forest-950 border border-forest-700/60 shadow-2xl z-50 overflow-hidden py-1">
          <button
            onClick={() => {
              setLanguage("en");
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-xs font-bold transition-colors flex items-center justify-between ${
              language === "en"
                ? "bg-forest-800 text-harvest-300 font-display"
                : "text-sand-200/80 hover:bg-forest-900"
            }`}
          >
            <span>English</span>
            {language === "en" && <span className="w-1.5 h-1.5 rounded-full bg-harvest-400" />}
          </button>

          <button
            onClick={() => {
              setLanguage("or");
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-xs font-bold transition-colors flex items-center justify-between ${
              language === "or"
                ? "bg-forest-800 text-harvest-300 font-display"
                : "text-sand-200/80 hover:bg-forest-900"
            }`}
          >
            <span>ଓଡ଼ିଆ (Odia)</span>
            {language === "or" && <span className="w-1.5 h-1.5 rounded-full bg-harvest-400" />}
          </button>
        </div>
      )}
    </div>
  );
}
