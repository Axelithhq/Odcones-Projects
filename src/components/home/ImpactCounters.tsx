"use client";

import React from "react";
import { IMPACT_METRICS } from "@/data/impactData";
import { useTranslation } from "@/lib/i18n";
import { Compass, CheckCircle2 } from "lucide-react";

export function ImpactCounters() {
  const { language } = useTranslation();

  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative border-b border-forest-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/90 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
            <Compass className="w-4 h-4" />
            <span>PROJECT CONSULTANCY EXCELLENCE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 uppercase tracking-tight">
            {language === "or" ? "ବୈଷୟିକ ଦକ୍ଷତା ଓ ମାପଦଣ୍ଡ" : "CORE TECHNICAL CAPABILITIES"}
          </h2>

          <p className="text-sand-200/80 text-sm sm:text-base leading-relaxed font-light">
            ODCONS PROJECTS combines technical project planning, civil engineering estimation, financial modeling, and government scheme advisory within a single framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_METRICS.map((metric) => (
            <div key={metric.id} className="p-6 rounded-3xl bg-forest-900/40 border border-forest-700/50 space-y-3 shadow-xl flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-harvest-400 uppercase tracking-widest block">
                  {language === "or" && metric.category_or ? metric.category_or : metric.category}
                </span>
                <h3 className="font-display font-bold text-lg text-sand-50">
                  {language === "or" && metric.label_or ? metric.label_or : metric.label}
                </h3>
                <p className="text-xs text-sand-200/80 leading-relaxed font-light">
                  {language === "or" && metric.description_or ? metric.description_or : metric.description}
                </p>
              </div>

              <div className="pt-2 border-t border-forest-800/60 flex items-center gap-1.5 text-[11px] font-mono text-forest-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-harvest-400" />
                <span>ODCONS TECHNICAL STANDARD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
