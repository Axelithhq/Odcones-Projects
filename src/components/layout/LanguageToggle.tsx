"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation, Language } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();
  const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isLight = resolvedTheme === "light";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options: { code: Language; label: string; native: string }[] = [
    { code: "en", label: "English", native: "EN" },
    { code: "or", label: "ଓଡ଼ିଆ (Odia)", native: "ଓଡ଼ିଆ" },
  ];

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-200 ${
          isLight
            ? "bg-white border-[#D4DDD5] text-[#4A5D50] hover:text-harvest-600 hover:border-harvest-500/50"
            : "bg-forest-900/60 border-forest-700/50 text-sand-100 hover:text-harvest-400"
        }`}
        aria-label="Select Language"
        aria-expanded={isOpen}
        data-cursor-text="LANG"
      >
        <Globe className={`w-3.5 h-3.5 ${isLight ? "text-harvest-600" : "text-harvest-400"}`} />
        <span className="font-display font-bold">
          {language === "en" ? "English" : "ଓଡ଼ିଆ"}
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`absolute right-0 mt-2 w-40 rounded-2xl border shadow-2xl z-50 overflow-hidden py-1 ${
              isLight
                ? "bg-white border-[#D4DDD5] shadow-forest-900/10"
                : "bg-theme-base border-forest-700/60 shadow-forest-950/60"
            }`}
          >
            {options.map((opt) => {
              const selected = language === opt.code;
              return (
                <button
                  key={opt.code}
                  onClick={() => {
                    setLanguage(opt.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-xs font-bold transition-colors flex items-center justify-between ${
                    selected
                      ? isLight
                        ? "bg-harvest-400/15 text-harvest-700"
                        : "bg-forest-800 text-harvest-300 font-display"
                      : isLight
                      ? "text-[#4A5D50] hover:bg-[#F0F3EE]"
                      : "text-theme-text-muted hover:bg-forest-900"
                  }`}
                >
                  <span>{opt.label}</span>
                  <AnimatePresence>
                    {selected && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`w-2 h-2 rounded-full ${
                          isLight ? "bg-harvest-600" : "bg-harvest-400"
                        }`}
                      >
                        <Check className="w-2 h-2 text-transparent" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
