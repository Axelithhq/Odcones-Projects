"use client";

import React from "react";
import { Sprout, Quote, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function FounderSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative overflow-hidden border-b border-forest-800/40">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-harvest-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Founder Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-forest-700/50 bg-forest-900/60 shadow-2xl group">
              {/* Founder Image Container with CMS Ready Fallback */}
              <div className="h-[460px] bg-gradient-to-t from-forest-950 via-forest-900 to-forest-800 flex flex-col items-center justify-end p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#52B788_1px,transparent_1px)] [background-size:24px_24px]" />
                
                {/* Founder Portrait Frame — Replace with <img> when real photo is provided */}
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-forest-600 via-forest-800 to-harvest-600 p-1 mb-6 shadow-xl relative z-10">
                  <div className="w-full h-full bg-forest-950 rounded-full flex items-center justify-center text-harvest-400 font-display font-extrabold text-4xl">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
              <Sprout className="w-3.5 h-3.5" />
              <span>{t("founder.badge")}</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight leading-[1.08]">
              {t("founder.title0")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-harvest-300 via-forest-300 to-aqua-400">
                {t("founder.title1")} {t("founder.title2")}
              </span>
            </h2>

            {/* Founder Quote Card */}
            <div className="p-6 rounded-2xl bg-forest-900/40 border border-forest-700/40 relative space-y-3">
              <Quote className="w-8 h-8 text-harvest-400/40 absolute top-4 right-4" />
              <p className="text-sand-100/90 text-sm sm:text-base leading-relaxed italic font-light">
                "{t("founder.quote")}"
              </p>
              <div className="pt-2 border-t border-forest-800/60 flex items-center justify-between text-xs">
                <span className="font-bold text-sand-50 font-display">{t("founder.name")}</span>
                <span className="text-forest-400 font-semibold uppercase tracking-wider">{t("founder.roleFull")}</span>
              </div>
            </div>

            <div className="space-y-3 text-sand-200/80 text-xs sm:text-sm leading-relaxed">
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
