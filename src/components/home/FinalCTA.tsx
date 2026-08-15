"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sprout } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function FinalCTA() {
  const { t, localizeHref } = useTranslation();

  return (
    <section className="relative py-28 bg-forest-950 text-sand-50 overflow-hidden">
      {/* Background Graphic & Glow */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600)` }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900/80 border border-forest-500/40 text-xs font-bold uppercase tracking-widest text-harvest-400">
          <Sprout className="w-4 h-4 text-harvest-400" />
          <span>{t("cta.badge")}</span>
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-sand-50 tracking-tight leading-[1.05] uppercase">
          {t("cta.title")}
        </h2>

        <p className="text-sand-200/80 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-light">
          {t("cta.desc")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href={localizeHref("/start-project")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-harvest-500 via-harvest-400 to-forest-500 text-forest-950 font-display font-extrabold text-xs tracking-widest uppercase shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            data-cursor-text="ENQUIRE"
          >
            <span>{t("nav.startProject")}</span>
            <ArrowUpRight className="w-4 h-4 text-forest-950" />
          </Link>

          <Link
            href={localizeHref("/projects")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-forest-900/80 border border-forest-500/40 text-sand-50 font-display font-bold text-xs tracking-widest uppercase hover:bg-forest-800 transition-all flex items-center justify-center gap-2"
            data-cursor-text="EXPLORE"
          >
            <span>{t("nav.exploreWork")}</span>
            <ArrowRight className="w-4 h-4 text-harvest-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
