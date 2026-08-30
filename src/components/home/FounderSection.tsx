"use client";

import React from "react";
import { Sprout, Quote } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function FounderSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-theme-base text-theme-text relative overflow-hidden border-b border-theme-border transition-colors duration-500">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-harvest-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Founder Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-theme-border glass-card shadow-2xl group">
              {/* Founder Image Container with CMS Ready Fallback */}
              <div className="h-[460px] bg-gradient-to-t from-forest-950 via-forest-900 to-forest-800 flex flex-col items-center justify-end p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#52B788_1px,transparent_1px)] [background-size:24px_24px]" />
                
                {/* Founder Portrait Frame */}
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-forest-600 via-forest-800 to-harvest-600 p-1 mb-6 shadow-xl relative z-10">
                  <div className="w-full h-full bg-theme-base rounded-full flex items-center justify-center text-harvest-400 font-display font-extrabold text-4xl">
                    AM
                  </div>
                </div>

                <div className="relative z-10 space-y-1">
                  <h3 className="font-display font-extrabold text-2xl text-sand-50 tracking-tight">
                    {t("founder.name")}
                  </h3>
                  <span className="text-xs font-bold tracking-widest text-harvest-400 uppercase font-display block">
                    {t("founder.role")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Vision Statement & Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-bold uppercase tracking-widest text-theme-gold font-display">
              <Sprout className="w-3.5 h-3.5 text-theme-gold" />
              <span>{t("founder.badge")}</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-theme-text tracking-tight leading-[1.1] text-balance">
              {t("founder.title0")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-harvest-400 via-forest-400 to-aqua-400">
                {t("founder.title1")} {t("founder.title2")}
              </span>
            </h2>

            {/* Founder Quote Card */}
            <div className="p-6 rounded-2xl glass-card relative space-y-3">
              <Quote className="w-8 h-8 text-theme-gold/30 absolute top-4 right-4" />
              <p className="text-theme-text text-sm sm:text-base leading-relaxed italic font-normal max-w-prose-custom">
                "{t("founder.quote")}"
              </p>
              <div className="pt-3 border-t border-theme-border flex items-center justify-between text-xs">
                <span className="font-bold text-theme-text font-display">{t("founder.name")}</span>
                <span className="text-theme-gold font-semibold uppercase tracking-wider">{t("founder.roleFull")}</span>
              </div>
            </div>

            <div className="space-y-3 text-theme-text-muted text-sm leading-relaxed max-w-prose-custom font-normal">
              <p>
                {t("founder.para1")}
              </p>
              <p>
                {t("founder.para2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
