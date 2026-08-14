"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "or";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.what_we_do": "What We Do",
    "nav.projects": "Projects",
    "nav.impact": "Impact",
    "nav.insights": "Insights",
    "nav.contact": "Contact",
    "nav.platform": "FieldOS Platform",
    "nav.gallery": "Gallery",
    "nav.careers": "Careers",
    "nav.start_project": "Start a Project",
    "nav.explore_work": "Explore Our Work",
    "hero.tagline": "AGRICULTURE THAT BUILDS THE FUTURE.",
    "hero.subtagline": "FROM SOIL TO WATER TO SUSTAINABLE GROWTH.",
    "footer.rights": "ODCONES PROJECTS. All rights reserved.",
    "footer.tagline": "Building sustainable systems across agriculture, fisheries, aquaculture and rural development.",
    "cta.title": "LET'S BUILD WHAT GROWS BEYOND TODAY.",
    "cta.desc": "Have a project in agriculture, fisheries, aquaculture, horticulture or sustainable development? Let's explore what we can build together.",
  },
  or: {
    "nav.home": "ମୁଖ୍ୟ ପୃଷ୍ଠା (Home)",
    "nav.about": "ଆମ ବିଷୟରେ (About)",
    "nav.what_we_do": "ଆମର ସେବା (What We Do)",
    "nav.projects": "ପ୍ରକଳ୍ପ (Projects)",
    "nav.impact": "ପ୍ରଭାବ (Impact)",
    "nav.insights": "ଜ୍ଞାନ କେନ୍ଦ୍ର (Insights)",
    "nav.contact": "ଯୋଗାଯୋଗ (Contact)",
    "nav.platform": "ଫିଲ୍ଡ-ଓଏସ୍ (FieldOS Platform)",
    "nav.gallery": "ଗ୍ୟାଲେରୀ (Gallery)",
    "nav.careers": "କାର୍ଯ୍ୟସୁଯୋଗ (Careers)",
    "nav.start_project": "ପ୍ରକଳ୍ପ ଆରମ୍ଭ କରନ୍ତୁ",
    "nav.explore_work": "ଆମ କାର୍ଯ୍ୟ ଦେଖନ୍ତୁ",
    "hero.tagline": "ଭବିଷ୍ୟତ ଗଢ଼ୁଥିବା କୃଷି ଓ ସୁସ୍ଥିର ବିକାଶ।",
    "hero.subtagline": "ମାଟିରୁ ଜଳ, ପ୍ରଗତିର ଏକ ନୂତନ ଦିଗ।",
    "footer.rights": "ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",
    "footer.tagline": "କୃଷି, ମତ୍ସ୍ୟଚାଷ, ଜଳସେଚନ ଓ ଗ୍ରାମୀଣ ବିକାଶ କ୍ଷେତ୍ରରେ ନିରନ୍ତର ଅଗ୍ରଗତି।",
    "cta.title": "ଆସନ୍ତୁ ଗଢ଼ିବା ସୁସ୍ଥିର ଭବିଷ୍ୟତ।",
    "cta.desc": "କୃଷି, ମତ୍ସ୍ୟ ସମ୍ପଦ, ଉଦ୍ୟାନ କୃଷି କିମ୍ବା ଗ୍ରାମୀଣ ବିକାଶ ପାଇଁ ଆମ ସହ ଯୋଡ଼ି ହୁଅନ୍ତୁ।",
  },
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("odcones_lang") as Language;
    if (saved && (saved === "en" || saved === "or")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("odcones_lang", lang);
  };

  const t = (key: string, fallback?: string): string => {
    return translations[language]?.[key] || fallback || translations["en"]?.[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
