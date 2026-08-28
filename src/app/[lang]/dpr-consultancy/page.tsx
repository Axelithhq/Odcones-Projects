"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
import { FileText, CheckCircle2, ArrowRight, ShieldCheck, Landmark, BarChart, Layers, HelpCircle } from "lucide-react";
import Link from "next/link";

const DPR_COMPONENTS = [
  "Project Profile and Promoter Information",
  "Market Assessment and Demand-Supply Analysis",
  "Technical Assessment and Production Process",
  "Engineering Planning and Layout",
  "Project Cost and Working Capital",
  "Means of Finance",
  "Financial Projections (P&L, Cash Flow, Balance Sheet)",
  "DSCR, Break-Even and Other Viability Indicators",
  "Implementation Schedule",
  "Risk and Sensitivity Analysis (where applicable)"
];

const DPR_TYPES = [
  "Bank Finance DPRs",
  "Government Scheme & Subsidy DPRs",
  "New Business Project Proposals",
  "Expansion & Modernization DPRs",
  "Capacity Enhancement Projects",
  "Farmer Producer Company (FPC) Projects",
  "MSME & Startup Project Proposals"
];

export default function DPRConsultancyPage() {
  const { language } = useTranslation();

  return (
    <main className="min-h-screen bg-theme-base text-theme-text relative has-custom-cursor pt-20">
      <CustomCursor />
      <Header />

      {/* Hero Header */}
      <section className="py-20 bg-theme-base border-b border-forest-800/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/90 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
            <FileText className="w-4 h-4" />
            <span>DETAILED PROJECT REPORT CONSULTANCY</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight max-w-4xl">
            {language === "or" ? "ବିସ୍ତୃତ ପ୍ରକଳ୍ପ ରିପୋର୍ଟ (DPR) ପରାମର୍ଶ" : "FROM BUSINESS CONCEPT TO BANKABLE PROJECT PROPOSAL"}
          </h1>

          <p className="text-theme-text-muted text-base sm:text-lg max-w-3xl leading-relaxed font-light">
            ODCONS PROJECTS prepares customized Detailed Project Reports (DPRs) according to project capacity, technology, investment requirements, and commercial business models.
          </p>
        </div>
      </section>

      {/* What is a DPR */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-forest-800/40">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-bold text-harvest-400 font-display uppercase tracking-widest block">
            CORE DEFINITION
          </span>
          <h2 className="font-display font-extrabold text-3xl text-sand-50 uppercase">
            What is a Detailed Project Report (DPR)?
          </h2>
          <p className="text-theme-text-muted text-sm sm:text-base leading-relaxed font-light">
            A Detailed Project Report provides the technical, financial, and commercial framework required to evaluate and implement a proposed investment. It is the primary document evaluated by banks, financial institutions, and government scheme sanctioning authorities.
          </p>
        </div>

        <div className="lg:col-span-6 p-8 rounded-3xl bg-forest-900/40 border border-forest-700/50 space-y-4 shadow-2xl">
          <span className="text-xs font-bold text-forest-300 font-display uppercase tracking-widest block">
            ODCONS DPR STANDARDS
          </span>
          <div className="space-y-2 text-xs text-theme-text font-mono">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-harvest-400" />
              <span>Structured according to NABARD / RBI Bankable Norms</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-harvest-400" />
              <span>Customized civil engineering BOQ & machinery costing</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-harvest-400" />
              <span>Complete 10-year financial cash flow & DSCR schedules</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-harvest-400" />
              <span>Aligned with Central & State Subsidy Scheme Guidelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Our DPR Includes */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-b border-forest-800/40">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-harvest-400 font-display uppercase tracking-widest">
            COMPREHENSIVE STRUCTURE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-sand-50 uppercase">
            What Our DPR May Include
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DPR_COMPONENTS.map((comp, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-forest-900/40 border border-forest-800/60 flex items-start gap-4">
              <span className="font-mono text-xs font-bold text-harvest-400 p-2 rounded-lg bg-theme-base border border-forest-800">
                0{idx + 1}
              </span>
              <span className="text-sm font-display font-bold text-sand-50 pt-1">{comp}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Types of DPRs */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <h2 className="font-display font-extrabold text-3xl text-sand-50 uppercase">
          Types of DPRs Prepared by ODCONS
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {DPR_TYPES.map((t, idx) => (
            <span key={idx} className="px-5 py-2.5 rounded-full bg-forest-900/80 border border-forest-700 text-xs font-bold text-harvest-300 font-mono">
              {t}
            </span>
          ))}
        </div>

        <div className="pt-8">
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-harvest-400 transition-all"
          >
            <span>Request DPR Consultancy →</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
