"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
import { Landmark, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, Percent, Award, Building2, ChevronRight, FileText } from "lucide-react";
import Link from "next/link";
import { SCHEMES, SchemeItem } from "@/data/schemesData";
import { getStoredSchemes } from "@/lib/cmsStore";

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
  const isOr = language === "or";

  const [schemesList, setSchemesList] = useState<SchemeItem[]>(SCHEMES);

  useEffect(() => {
    try {
      const stored = getStoredSchemes();
      if (stored && stored.length > 0) {
        setSchemesList(stored);
      }
    } catch {
      setSchemesList(SCHEMES);
    }
  }, []);

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
            {isOr ? "ସରକାରୀ ଯୋଜନା ଓ ସବସିଡି ପରାମର୍ଶ" : "GOVERNMENT SCHEME & SUBSIDY CONSULTANCY"}
          </h1>

          <p className="text-theme-text-muted text-base sm:text-lg max-w-3xl leading-relaxed font-light">
            Government assistance can significantly improve the financial feasibility of eligible projects. ODCONS PROJECTS assists entrepreneurs in identifying relevant schemes, preparing bankable DPRs, and structuring projects according to guidelines.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* DIRECTORY OF ACTIVE GOVERNMENT SCHEMES & SUBSIDIES */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-b border-forest-800/40">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-harvest-400 font-display uppercase tracking-widest">
            SUBSIDY DIRECTORY
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-sand-50 uppercase">
            {isOr ? "ପ୍ରମୁଖ ସରକାରୀ ଯୋଜନା ଓ ସବସିଡି" : "Active Government Schemes & Subsidies"}
          </h2>
          <p className="text-theme-text-muted text-xs sm:text-sm font-light">
            Comprehensive subsidy & grant programs for Agribusiness, Fisheries, Horticulture, and Cold Chain Infrastructure.
          </p>
        </div>

        {/* Scheme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemesList.map((scheme) => (
            <div
              key={scheme.id || scheme.slug}
              className="p-7 rounded-3xl glass-panel border border-theme-border shadow-2xl space-y-6 flex flex-col justify-between hover:border-harvest-400/80 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Sector Badge */}
                <div className="flex justify-between items-start gap-2">
                  <span className="px-3 py-1 rounded-full bg-forest-950 border border-forest-800 text-[11px] font-mono font-bold text-harvest-400 uppercase">
                    {scheme.sector}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-[11px] font-mono font-extrabold text-emerald-400">
                    {scheme.subsidyPct || (scheme as any).subsidy_percentage}
                  </span>
                </div>

                {/* Scheme Title */}
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 group-hover:text-harvest-400 transition-colors">
                    {scheme.name}
                  </h3>
                  {scheme.name_or && (
                    <p className="text-xs text-harvest-300/80 font-sans">{scheme.name_or}</p>
                  )}
                </div>

                {/* Grant Metric Box */}
                <div className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800 grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-theme-text-muted uppercase block">Max Grant Limit</span>
                    <span className="font-display font-extrabold text-base text-harvest-400">
                      {scheme.maxGrant || (scheme as any).max_grant}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-theme-text-muted uppercase block">Subsidy Rate</span>
                    <span className="font-display font-extrabold text-base text-emerald-400">
                      {scheme.subsidyPct || (scheme as any).subsidy_percentage}
                    </span>
                  </div>
                </div>

                {/* Nodal Agency */}
                <div className="space-y-1 text-xs">
                  <span className="font-bold text-theme-gold font-mono uppercase block text-[10px]">
                    Nodal Implementing Agency:
                  </span>
                  <p className="text-sand-200 font-medium leading-snug">
                    {scheme.nodalAgency || (scheme as any).nodal_agency}
                  </p>
                </div>

                {/* Eligibility Criteria */}
                <div className="space-y-1 text-xs">
                  <span className="font-bold text-theme-gold font-mono uppercase block text-[10px]">
                    Eligibility & Covered Components:
                  </span>
                  <p className="text-theme-text-muted leading-relaxed">
                    {isOr && scheme.eligibility_or ? scheme.eligibility_or : scheme.eligibility}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-theme-border/60">
                <Link
                  href={`/${language}/book-consultation`}
                  className="w-full py-3 rounded-xl bg-forest-900 border border-forest-700 hover:bg-forest-800 hover:border-harvest-400 text-sand-50 font-display font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <span>Apply / Consult for Scheme →</span>
                </Link>
              </div>
            </div>
          ))}
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
