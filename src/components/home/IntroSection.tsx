"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Cpu, Waves, Sprout, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function IntroSection() {
  const { localizeHref } = useTranslation();
  return (
    <section className="py-24 bg-theme-base text-theme-text relative overflow-hidden border-b border-theme-border transition-colors duration-500">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A4D2E_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-bold uppercase tracking-widest text-theme-gold font-display">
              <Sprout className="w-3.5 h-3.5 text-theme-gold" />
              <span>OUR CORE PURPOSE</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-theme-text text-balance">
              Building Systems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 via-harvest-400 to-aqua-400">
                That Grow Beyond Today.
              </span>
            </h2>

            <p className="text-theme-text-muted text-base sm:text-lg leading-relaxed max-w-prose-custom font-normal">
              ODCONS PROJECTS operates at the intersection of <strong className="text-theme-text font-semibold">Agriculture, Blue Economy, Precision Technology, Agri-Infrastructure, and Community Resilience</strong>. We engineer holistic, scaleable solutions that empower smallholder farmers, fishing communities, and institutional partners across India.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl glass-card space-y-1">
                <Sprout className="w-5 h-5 text-theme-gold" />
                <h4 className="font-display font-bold text-sm text-theme-text">Agri-Resilience</h4>
                <p className="text-xs text-theme-text-muted">Climate-smart cropping & soil health</p>
              </div>

              <div className="p-4 rounded-2xl glass-card space-y-1">
                <Waves className="w-5 h-5 text-theme-water" />
                <h4 className="font-display font-bold text-sm text-theme-text">Blue Economy</h4>
                <p className="text-xs text-theme-text-muted">Biofloc, RAS & reservoir cages</p>
              </div>

              <div className="p-4 rounded-2xl glass-card space-y-1 col-span-2 sm:col-span-1">
                <Cpu className="w-5 h-5 text-theme-accent" />
                <h4 className="font-display font-bold text-sm text-theme-text">Agritech Integration</h4>
                <p className="text-xs text-theme-text-muted">ODCONS FieldOS & telemetry</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={localizeHref("/about")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-900 hover:bg-forest-800 border border-forest-500/40 text-sand-50 text-xs font-display font-bold uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all"
                data-cursor-text="ABOUT"
              >
                <span>Learn More About ODCONS</span>
                <ArrowUpRight className="w-4 h-4 text-harvest-400" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Feature Box with Poster */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-theme-border shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200"
                alt="Agricultural field landscape"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-forest-950/90 backdrop-blur-xl border border-forest-500/40 space-y-2">
                <div className="flex items-center justify-between text-xs text-harvest-400 font-bold tracking-wider uppercase font-display">
                  <span>ECOSYSTEM VISION</span>
                  <ShieldCheck className="w-4 h-4 text-forest-300" />
                </div>
                <p className="text-xs text-sand-100/90 leading-relaxed italic">
                  "Engineering better outcomes for the people who grow, produce, and sustain our future."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
