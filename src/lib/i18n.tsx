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
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.what_we_do": "What We Do",
    "nav.projects": "Projects",
    "nav.platform": "FieldOS Platform",
    "nav.impact": "Impact",
    "nav.insights": "Insights",
    "nav.contact": "Contact",
    "nav.gallery": "Gallery",
    "nav.careers": "Careers",
    "nav.start_project": "Start a Project",
    "nav.explore_work": "Explore Our Work",
    "nav.read_aloud": "Read Aloud",

    // Hero & Taglines
    "hero.tagline": "WHERE LAND, WATER & PEOPLE MEET.",
    "hero.subtagline": "ODCONES PROJECTS develops and delivers integrated solutions across agriculture, fisheries, aquaculture, horticulture and sustainable rural development.",
    "hero.founder_badge": "Anshuman Mohapatra — Founder",

    // Sectors
    "sector.agriculture": "Agriculture",
    "sector.horticulture": "Horticulture",
    "sector.fisheries": "Fisheries",
    "sector.aquaculture": "Aquaculture",
    "sector.animal_husbandry": "Animal Husbandry",
    "sector.water_soil": "Water & Soil Conservation",

    // Section Headings
    "section.intro_title": "We Work Where Life Grows.",
    "section.intro_desc": "From the fields that feed communities to the waters that sustain livelihoods, ODCONES PROJECTS works across interconnected agricultural and aquatic ecosystems to build practical, sustainable and scalable solutions.",
    "section.field_to_future": "From The Field To The Future",
    "section.day_in_field": "A Day In The Field",
    "section.field_kit": "What Moves The Field",
    "section.fieldos_title": "ODCONES FieldOS™ Spatial Platform",
    "section.people_title": "The People Behind The Systems",
    "section.founder_title": "The Vision Behind ODCONES",
    "section.map_title": "Interactive Field Execution Map",
    "section.impact_title": "Empirical Results Across Sectors",

    // Founder
    "founder.name": "Anshuman Mohapatra",
    "founder.role": "Founder",
    "founder.quote": "ODCONES PROJECTS was built around a simple belief — development should create systems that remain productive, sustainable and useful long after a project is completed.",

    // CTA
    "cta.title": "LET'S BUILD WHAT GROWS BEYOND TODAY.",
    "cta.desc": "Have a project in agriculture, fisheries, aquaculture, horticulture or sustainable development? Let's explore what we can build together.",

    // Footer
    "footer.rights": "ODCONES PROJECTS. All rights reserved.",
    "footer.tagline": "Building sustainable systems across agriculture, fisheries, aquaculture and rural development.",

    // Controls & Status
    "status.optimal": "Optimal Growth",
    "status.running": "Active Telemetry",
    "action.search": "Search projects or locations...",
    "action.submit": "Submit Proposal",
    "action.apply": "Apply Now",
    "not_found.title": "Looks like this path hasn't been cultivated yet.",
    "not_found.btn": "Return Home"
  },
  or: {
    // Navigation
    "nav.home": "ମୁଖ୍ୟ ପୃଷ୍ଠା",
    "nav.about": "ଆମ ବିଷୟରେ",
    "nav.what_we_do": "ଆମର ସେବା",
    "nav.projects": "ପ୍ରକଳ୍ପ ସମୂହ",
    "nav.platform": "ଫିଲ୍ଡ-ଓଏସ୍ ପୋର୍ଟାଲ",
    "nav.impact": "ପ୍ରଭାବ ଓ ପରିସଂଖ୍ୟାନ",
    "nav.insights": "ଜ୍ଞାନ କେନ୍ଦ୍ର",
    "nav.contact": "ଯୋଗାଯୋଗ",
    "nav.gallery": "ଗ୍ୟାଲେରୀ",
    "nav.careers": "କାର୍ଯ୍ୟସୁଯୋଗ",
    "nav.start_project": "ପ୍ରକଳ୍ପ ଆରମ୍ଭ କରନ୍ତୁ",
    "nav.explore_work": "ଆମ କାର୍ଯ୍ୟ ଦେଖନ୍ତୁ",
    "nav.read_aloud": "ପୃଷ୍ଠା ଶୁଣନ୍ତୁ",

    // Hero & Taglines
    "hero.tagline": "ଜମି, ଜଳ ଓ ମାନବ ସମ୍ପଦର ସଙ୍ଗମ।",
    "hero.subtagline": "ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ କୃଷି, ମତ୍ସ୍ୟଚାଷ, ଜଳଚର ପାଳନ, ଉଦ୍ୟାନ କୃଷି ଓ ଗ୍ରାମୀଣ ବିକାଶ କ୍ଷେତ୍ରରେ ସୁସ୍ଥିର ଓ ପ୍ରାଯୋଗିକ ସମାଧାନ ଯୋଗାଇଦିଏ।",
    "hero.founder_badge": "ଅଂଶୁମାନ ମହାପାତ୍ର — ସଂସ୍ଥାପକ",

    // Sectors
    "sector.agriculture": "କୃଷି",
    "sector.horticulture": "ଉଦ୍ୟାନ କୃଷି",
    "sector.fisheries": "ମତ୍ସ୍ୟଚାଷ",
    "sector.aquaculture": "ଜଳଚର ପାଳନ",
    "sector.animal_husbandry": "ପଶୁପାଳନ",
    "sector.water_soil": "ମୃତ୍ତିକା ଓ ଜଳ ସଂରକ୍ଷଣ",

    // Section Headings
    "section.intro_title": "ଜୀବନ ଓ ପ୍ରଗତିର ନୂତନ ଦିଗ",
    "section.intro_desc": "ଗ୍ରାମୀଣ ସମୃଦ୍ଧି ଓ କୃଷକମାନଙ୍କ ଉନ୍ନତି ପାଇଁ ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ କ୍ଷେତ୍ରସ୍ତରରେ ଜଳ, ମାଟି, ଫସଲ ଓ ଜୀବିକାର ସୁସ୍ଥିର ବିକାଶ କରୁଛି।",
    "section.field_to_future": "କ୍ଷେତ୍ରରୁ ଭବିଷ୍ୟତ",
    "section.day_in_field": "କ୍ଷେତ୍ର କାର୍ଯ୍ୟର ଏକ ଦିନ",
    "section.field_kit": "କ୍ଷେତ୍ର ଉପକରଣ ସମ୍ଭାର",
    "section.fieldos_title": "ଓଡକୋନ୍ସ ଫିଲ୍ଡ-ଓଏସ୍™",
    "section.people_title": "ସୁସ୍ଥିର ପ୍ରଗତିର କାରିଗର",
    "section.founder_title": "ସଂସ୍ଥାପକଙ୍କ ଦୂରଦୃଷ୍ଟି",
    "section.map_title": "ଆଞ୍ଚଳିକ କାର୍ଯ୍ୟକାରିତା ମାନଚିତ୍ର",
    "section.impact_title": "କ୍ଷେତ୍ରସ୍ତରୀୟ ପ୍ରମାଣିତ ପ୍ରଭାବ",

    // Founder
    "founder.name": "ଅଂଶୁମାନ ମହାପାତ୍ର",
    "founder.role": "ସଂସ୍ଥାପକ (Founder)",
    "founder.quote": "ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ ଏକ ସରଳ ବିଶ୍ୱାସ ଉପରେ ଆଧାରିତ — ବିକାଶ ଏପରି ଏକ ବ୍ୟବସ୍ଥା ସୃଷ୍ଟି କରିବା ଉଚିତ ଯାହା ପ୍ରକଳ୍ପ ଶେଷ ହେବା ପରେ ମଧ୍ୟ ବହୁ ବର୍ଷ ଧରି ଫଳପ୍ରଦ ଓ ସୁସ୍ଥିର ରହିବ।",

    // CTA
    "cta.title": "ଆସନ୍ତୁ ଗଢ଼ିବା ସୁସ୍ଥିର ଭବିଷ୍ୟତ।",
    "cta.desc": "କୃଷି, ମତ୍ସ୍ୟ ସମ୍ପଦ, ଉଦ୍ୟାନ କୃଷି କିମ୍ବା ଗ୍ରାମୀଣ ବିକାଶ ପାଇଁ ଆମ ସହ ଯୋଡ଼ି ହୁଅନ୍ତୁ।",

    // Footer
    "footer.rights": "ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",
    "footer.tagline": "କୃଷି, ମତ୍ସ୍ୟଚାଷ, ଜଳସେଚନ ଓ ଗ୍ରାମୀଣ ବିକାଶ କ୍ଷେତ୍ରରେ ନିରନ୍ତର ଅଗ୍ରଗତି।",

    // Controls & Status
    "status.optimal": "ଉତ୍ତମ ଅଭିବୃଦ୍ଧି",
    "status.running": "ସକ୍ରିୟ ଟେଲିମେଟ୍ରି",
    "action.search": "ପ୍ରକଳ୍ପ କିମ୍ବା ସ୍ଥାନ ଖୋଜନ୍ତୁ...",
    "action.submit": "ପ୍ରସ୍ତାବ ଦାଖଲ କରନ୍ତୁ",
    "action.apply": "ଆବେଦନ କରନ୍ତୁ",
    "not_found.title": "ଏହି ପୃଷ୍ଠାଟି ଏପର୍ଯ୍ୟନ୍ତ ଗଢ଼ା ହୋଇନାହିଁ।",
    "not_found.btn": "ମୁଖ୍ୟ ପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ"
  },
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("odcones_lang") as Language;
    if (saved && (saved === "en" || saved === "or")) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = "en";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("odcones_lang", lang);
    document.documentElement.lang = lang;
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
