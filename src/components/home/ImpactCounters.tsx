"use client";

import React from "react";
import { IMPACT_METRICS } from "@/data/impactData";
import { useTranslation } from "@/lib/i18n";
import { Compass, CheckCircle2 } from "lucide-react";

export function ImpactCounters() {
  const { language } = useTranslation();

  return (
    <section className="py-24 relative border-b border-theme-border overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel text-xs font-bold uppercase tracking-widest text-theme-gold font-display">
            <Compass className="w-4 h-4" />
            <span>PROJECT CONSULTANCY EXCELLENCE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-theme-text uppercase tracking-tight">
            {language === "or" ? "ବୈଷୟିକ ଦକ୍ଷତା ଓ ମାପଦଣ୍ଡ" : "CORE TECHNICAL CAPABILITIES"}
          </h2>

          <p className="text-theme-text-muted text-sm sm:text-base leading-relaxed font-light">
            ODCONS PROJECTS combines technical project planning, civil engineering estimation, financial modeling, and government scheme advisory within a single framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_METRICS.map((metric) => (
            <div key={metric.id} className="p-6 rounded-3xl glass-card space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-theme-gold uppercase tracking-widest block">
                  {language === "or" && metric.category_or ? metric.category_or : metric.category}
                </span>
                <h3 className="font-display font-bold text-lg text-theme-text">
                  {language === "or" && metric.label_or ? metric.label_or : metric.label}
                </h3>
                <p className="text-xs text-theme-text-muted leading-relaxed font-light">
                  {language === "or" && metric.description_or ? metric.description_or : metric.description}
                </p>
              </div>

              <div className="pt-2 border-t border-theme-border flex items-center gap-1.5 text-[11px] font-mono text-theme-text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent" />
                <span>ODCONS TECHNICAL STANDARD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
