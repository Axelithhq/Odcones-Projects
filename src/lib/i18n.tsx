"use client";

import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getDictionary } from "./messages";
import { Language, defaultLocale, getLocaleFromPath, getPathWithLocale } from "./i18n-config";

export type { Language };

type TranslationParams = Record<string, string | number>;

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: TranslationParams) => string;
  localizeHref: (href: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale?: Language;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const [language, setLanguageState] = useState<Language>(() => {
    if (locale && (locale === "en" || locale === "or")) return locale;
    const routeLang = getLocaleFromPath(pathname);
    return routeLang ?? defaultLocale;
  });

  useEffect(() => {
    const routeLang = getLocaleFromPath(pathname);
    if (routeLang) {
      setLanguageState(routeLang);
      document.documentElement.lang = routeLang;
      return;
    }
    const saved = localStorage.getItem("odcons_lang");
    if (saved === "en" || saved === "or") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = defaultLocale;
    }
  }, [pathname]);

  const setLanguage = (lang: Language) => {
    localStorage.setItem("odcons_lang", lang);
    const routeLang = getLocaleFromPath(pathname);
    if (routeLang && routeLang !== lang) {
      document.documentElement.lang = lang;
      router.replace(getPathWithLocale(pathname, lang));
      return;
    }
    setLanguageState(lang);
    document.documentElement.lang = lang;
  };

  const localizeHref = (href: string): string => {
    const routeLang = getLocaleFromPath(pathname);
    if (!routeLang) return href;
    return getPathWithLocale(href, language);
  };

  const t = (key: string, params?: TranslationParams): string => {
    const dict = getDictionary(language);
    const fallback = getDictionary(defaultLocale);
    let template = dict[key] ?? fallback[key] ?? key;
    if (params) {
      template = template.replace(/\{(\w+)\}/g, (match, name: string) =>
        name in (params as Record<string, string | number>) ? String(params[name]) : match
      );
    }
    return template;
  };

  const value = useMemo(
    () => ({ language, setLanguage, t, localizeHref }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language, pathname]
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
