"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
import { Landmark, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

const SCHEME_AREAS = [
  "Agriculture Infrastructure",
  "Food Processing & Feed Units",
  "Fisheries & Aquaculture",
  "Dairy Development & Cattle Sheds",
  "Animal Husbandry & Livestock",
  "Poultry Infrastructure",
  "Horticulture & Protected Cultivation",
  "Cold Chain & Pack Houses",
  "Warehousing & Rural Godowns",
  "Farmer Producer Companies (FPCs)",
  "MSME Development Projects",
  "Rural Entrepreneurship Initiatives"
];

const SCHEME_STEPS = [
  "Scheme Identification",
  "Eligibility Assessment",
  "Project Structuring",
  "Cost Assessment",
  "DPR Preparation",
  "Financial Analysis",
  "Documentation Support"
];

export default function GovernmentSchemesPage() {
  const { language } = useTranslation();

  return (
    <main className="min-h-screen bg-theme-base text-theme-text relative has-custom-cursor pt-20">
      <CustomCursor />
      <Header />

      {/* Hero Header */}
      <section className="py-20 bg-theme-base border-b border-forest-800/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/90 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
            <Landmark className="w-4 h-4" />
            <span>GOVERNMENT SCHEME & SUBSIDY CONSULTANCY</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight max-w-4xl">
            {language === "or" ? "ସରକାରୀ ଯୋଜନା ଓ ସବସିଡି ପରାମର୍ଶ" : "GOVERNMENT SCHEME & SUBSIDY CONSULTANCY"}
          </h1>

          <p className="text-theme-text-muted text-base sm:text-lg max-w-3xl leading-relaxed font-light">
            Government assistance can significantly improve the financial feasibility of eligible projects. ODCONS PROJECTS assists entrepreneurs in identifying relevant schemes and structuring projects according to applicable guidelines.
          </p>
        </div>
      </section>

      {/* Areas of Assistance */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-b border-forest-800/40">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-harvest-400 font-display uppercase tracking-widest">
            ELIGIBLE DOMAINS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-sand-50 uppercase">
            Areas of Scheme Assistance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SCHEME_AREAS.map((area, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-forest-900/40 border border-forest-800/60 space-y-2">
              <span className="text-xs font-mono font-bold text-harvest-400">0{idx + 1}.</span>
              <h3 className="font-display font-bold text-sm text-sand-50">{area}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Scheme Process Stepper */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-b border-forest-800/40">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-harvest-400 font-display uppercase tracking-widest">
            METHODOLOGY
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-sand-50 uppercase">
            Our Scheme Consultancy Process
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {SCHEME_STEPS.map((step, idx) => (
            <React.Fragment key={idx}>
              <span className="px-5 py-3 rounded-2xl bg-forest-900 border border-forest-700 text-xs font-bold text-sand-50 font-mono">
                {idx + 1}. {step}
              </span>
              {idx < SCHEME_STEPS.length - 1 && <span className="text-harvest-400 font-bold">→</span>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Mandatory Source Disclaimer */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-forest-900/60 border border-harvest-500/40 space-y-3 text-center shadow-2xl">
          <AlertTriangle className="w-8 h-8 text-harvest-400 mx-auto" />
          <span className="text-xs font-mono font-bold text-harvest-400 uppercase tracking-widest block">
            IMPORTANT POLICY DISCLAIMER
          </span>
          <p className="text-xs sm:text-sm text-theme-text-muted leading-relaxed font-light italic">
            "Government schemes, subsidy rates, eligible components and application procedures are subject to the prevailing guidelines of the respective department or implementing agency."
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
