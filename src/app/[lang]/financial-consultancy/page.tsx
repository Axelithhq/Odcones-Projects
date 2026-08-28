"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
import { Landmark, CheckCircle2, BarChart, FileText, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const FINANCIAL_METRICS = [
  {
    title: "Projected Profit & Loss Statement",
    title_or: "ଆକଳନିତ ଲାଭ ଓ କ୍ଷେତ୍ର ହିସାବ",
    desc: "Multi-year revenue, raw material cost, operating overheads, depreciation, and net margin forecasts."
  },
  {
    title: "Projected Cash Flow Statement",
    title_or: "ଆକଳନିତ କ୍ୟାଶ୍ ଫ୍ଲୋ ସ୍ଟେଟମେଣ୍ଟ",
    desc: "Operational, investing, and financing cash inflow/outflow projections to ensure year-round liquidity."
  },
  {
    title: "Debt Service Coverage Ratio (DSCR)",
    title_or: "DSCR ଋଣ ପରିଶୋଧ କ୍ଷମତା ଆକଳନ",
    desc: "Evaluation of net operating income against annual principal and interest obligations to verify loan repayment capacity."
  },
  {
    title: "Break-Even Revenue Analysis",
    title_or: "ବ୍ରେକ୍-ଇଭେନ୍ ରାଜସ୍ୱ ବିଶ୍ଲେଷଣ",
    desc: "Determination of minimum operational capacity and sales volume required to cover fixed and variable costs."
  },
  {
    title: "Working Capital Assessment",
    title_or: "କାର୍ଯ୍ୟକାରୀ ମୂଳଧନ ମୂଲ୍ୟାଙ୍କନ",
    desc: "Raw material inventory, receivables, operating cycle duration, and bank working capital limit sizing."
  },
  {
    title: "Loan Repayment Schedule & Sensitivity",
    title_or: "ଋଣ ପରିଶୋଧ ସୂଚୀ ଓ ସମ୍ଭାବ୍ୟତା ବିଶ୍ଲେଷଣ",
    desc: "Year-wise principal amortization, interest coverage, and sensitivity analysis under varying revenue conditions."
  }
];

export default function FinancialConsultancyPage() {
  const { language } = useTranslation();

  return (
    <main className="min-h-screen bg-theme-base text-sand-100 relative has-custom-cursor pt-20">
      <CustomCursor />
      <Header />

      {/* Hero Header */}
      <section className="py-20 bg-theme-base border-b border-forest-800/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/90 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
            <Landmark className="w-4 h-4" />
            <span>FINANCIAL MODELING & VIABILITY ANALYSIS</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight max-w-4xl">
            {language === "or" ? "ଆର୍ଥିକ ଯୋଜନା, DSCR ଓ ଋଣ ଆକଳନ" : "FINANCIAL MODELING & LOAN APPRAISAL"}
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
            ODCONS PROJECTS delivers rigorous financial modeling, 10-year cash flow projections, Debt Service Coverage Ratio (DSCR) calculations, break-even analysis, and loan repayment scheduling for commercial agribusiness and industrial investments.
          </p>
        </div>
      </section>

      {/* Financial Modeling Capabilities */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-b border-forest-800/40">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-harvest-400 font-display uppercase tracking-widest">
            FINANCIAL SCHEDULES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-sand-50 uppercase">
            Financial Modeling & Viability Schedules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FINANCIAL_METRICS.map((m, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-forest-900/40 border border-forest-700/50 space-y-3 shadow-xl flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-harvest-400 p-2 rounded-lg bg-theme-base border border-forest-800 inline-block">
                  0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-lg text-sand-50">
                  {language === "or" ? m.title_or : m.title}
                </h3>
                <p className="text-xs text-sand-200/80 leading-relaxed font-light">{m.desc}</p>
              </div>

              <div className="pt-3 border-t border-forest-800/60 flex items-center gap-1.5 text-[11px] font-mono text-forest-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-harvest-400" />
                <span>NABARD / BANK APPRAISAL STANDARD</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display font-extrabold text-3xl text-sand-50 uppercase">
          Need Financial Projections for Your DPR?
        </h2>
        <p className="text-sand-200/80 text-sm max-w-xl mx-auto font-light">
          Structure bankable financial models, DSCR schedules, and means of finance tailored for bank appraisal and subsidy applications.
        </p>

        <div>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-harvest-400 transition-all"
          >
            <span>Book Financial Consultation →</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
