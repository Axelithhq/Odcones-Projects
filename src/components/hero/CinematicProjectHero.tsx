"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { ArrowUpRight, Calendar, Compass, Layers, ShieldCheck, Activity, Cpu } from "lucide-react";

export function CinematicProjectHero() {
  const { t, language } = useTranslation();

  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 bg-theme-base flex flex-col justify-between overflow-hidden border-b border-forest-800/40">
      {/* Background Panoramic Landscape with Atmospheric Layers */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-40 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=2000')`
        }}
      />

      {/* Dark Gradient Mask & Blueprint Grid */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(#40916C_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      {/* Animated Blueprint CAD Vector Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 stroke-harvest-400/40" fill="none">
        <line x1="5%" y1="20%" x2="95%" y2="20%" strokeDasharray="4 4" strokeWidth="1" />
        <line x1="5%" y1="80%" x2="95%" y2="80%" strokeDasharray="4 4" strokeWidth="1" />
        <circle cx="20%" cy="35%" r="60" strokeWidth="1" strokeDasharray="6 6" />
        <rect x="70%" y="40%" width="180" height="120" strokeWidth="1" strokeDasharray="8 4" />
        <text x="71%" y="38%" fill="#E9C46A" fontSize="10" fontFamily="monospace">ZONE-A: PROCESSING SHED</text>
      </svg>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto space-y-8">
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest-900/90 border border-forest-500/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-harvest-400 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
              {language === "or" ? "ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ — ବୈଷୟିକ ପରାମର୍ଶ" : "PROJECT CONSULTANCY × ENGINEERING × FINANCE"}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-sand-50 tracking-tight leading-[1.04] uppercase">
            {language === "or" ? (
              <>
                ସୁସ୍ଥିର ପ୍ରକଳ୍ପରେ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-harvest-300 via-forest-300 to-aqua-400">
                  ରୂପାନ୍ତରିତ କରନ୍ତୁ।
                </span>
              </>
            ) : (
              <>
                TURNING IDEAS INTO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-harvest-300 via-forest-300 to-aqua-400">
                  BANKABLE & SUSTAINABLE
                </span> <br />
                PROJECTS.
              </>
            )}
          </h1>

          <p className="text-sand-200/80 text-base sm:text-xl font-light max-w-2xl leading-relaxed">
            {language === "or"
              ? "ପରିକଳ୍ପନା • ନକ୍ସା • ଆର୍ଥିକ ଯୋଜନା • କ୍ଷେତ୍ରସ୍ତରୀୟ କାର୍ଯ୍ୟକାରିତା।"
              : "PLAN. DESIGN. FINANCE. IMPLEMENT. End-to-end technical DPR consultancy, 2D/3D layouts, and subsidy advisory across Agriculture, Fisheries, Aquaculture, and Agribusiness."}
          </p>
        </div>

        {/* Action Buttons & Project Telemetry Pills */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/start-project"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-forest-600 via-forest-500 to-harvest-600 text-sand-50 font-display font-extrabold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>{language === "or" ? "ପ୍ରକଳ୍ପ ଆରମ୍ଭ କରନ୍ତୁ" : "START YOUR PROJECT"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/book-consultation"
            className="px-8 py-4 rounded-full bg-forest-900/80 border border-forest-600 text-sand-50 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-forest-800 transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-harvest-400" />
            <span>{language === "or" ? "ବୁକିଂ କରନ୍ତୁ" : "BOOK A CONSULTATION"}</span>
          </Link>
        </div>
      </div>

      {/* Bottom Technical Status Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-8 border-t border-forest-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-sand-200/60">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-harvest-400 font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>PROJECT DOMAINS: AGRICULTURE | FISHERIES | FOOD PROCESSING | COLD CHAIN</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>DPR & FEASIBILITY STANDARDS VERIFIED</span>
        </div>
      </div>
    </section>
  );
}
