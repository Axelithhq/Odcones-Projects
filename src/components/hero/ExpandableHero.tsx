"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SECTORS } from "@/data/sectorsData";
import { useTranslation } from "@/lib/i18n";
import { ArrowUpRight, Sprout, Flower2, Fish, Waves, ShieldCheck, Droplets, ChevronRight } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Sprout: <Sprout className="w-6 h-6" />,
  Flower2: <Flower2 className="w-6 h-6" />,
  Fish: <Fish className="w-6 h-6" />,
  Waves: <Waves className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
};

export function ExpandableHero() {
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(0);
  const { t, language, localizeHref } = useTranslation();

  return (
    <section className="relative w-full min-h-[92vh] pt-20 bg-forest-950 flex flex-col justify-between overflow-hidden">
      {/* Top Banner Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 w-full flex flex-col md:flex-row md:items-end justify-between gap-4 z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-harvest-400 animate-pulse" />
            <span>{t("hero.badge")}</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-sand-50 tracking-tight leading-[1.05]">
            {t("hero.title1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-harvest-300 via-forest-300 to-aqua-400">
              {t("hero.title2")}
            </span>
          </h1>
        </div>

        <p className="text-sand-200/70 text-xs sm:text-sm max-w-md leading-relaxed font-light">
          {t("hero.subtitle")}
        </p>
      </div>

      {/* DESKTOP: 6 Vertical Expandable Panels */}
      <div className="hidden lg:flex w-full h-[65vh] border-y border-forest-800/40 relative z-10">
        {SECTORS.map((sector, index) => {
          const isExpanded = activeHoverIndex === index;
          const flexGrowClass = isExpanded ? "flex-[3.5]" : "flex-1";
          const displayName = language === "or" && sector.name_or ? sector.name_or : sector.name;
          const displayTagline = language === "or" && sector.tagline_or ? sector.tagline_or : sector.tagline;

          return (
            <Link
              key={sector.id}
              href={localizeHref(`/sectors/${sector.slug}`)}
              onMouseEnter={() => setActiveHoverIndex(index)}
              className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group overflow-hidden border-r border-forest-800/40 last:border-r-0 ${flexGrowClass}`}
              data-cursor-text="DISCOVER"
            >
              {/* Background Image with Zoom */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out ${
                  isExpanded ? "scale-110" : "scale-100 group-hover:scale-105"
                }`}
                style={{ backgroundImage: `url(${sector.heroImage})` }}
              />

              {/* Dark Gradient Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isExpanded
                    ? "bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/30 opacity-90"
                    : "bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950/60 opacity-80 group-hover:opacity-75"
                }`}
              />

              {/* Panel Content Container */}
              <div className="relative z-10 w-full h-full p-6 flex flex-col justify-between">
                {/* Top Bar: Sector Index & Icon */}
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-bold tracking-widest text-harvest-400 font-display">
                    0{index + 1}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 border ${
                      isExpanded
                        ? "bg-harvest-500 text-forest-950 border-harvest-400 shadow-lg scale-110"
                        : "bg-forest-900/60 text-sand-100 border-forest-500/30 group-hover:bg-forest-800/80"
                    }`}
                  >
                    {ICON_MAP[sector.iconName] || <Sprout className="w-5 h-5" />}
                  </div>
                </div>

                {/* Bottom Bar: Title, Description & CTA */}
                <div className="space-y-3 transform transition-transform duration-500">
                  <h3 className="font-display font-extrabold text-xl lg:text-2xl text-sand-50 tracking-wider uppercase leading-tight group-hover:text-harvest-300">
                    {displayName}
                  </h3>

                  {/* Expandable Description */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-sand-200/80 leading-relaxed max-w-md pt-1 pb-2">
                      {displayTagline}
                    </p>
                  </motion.div>

                  {/* Action Link Arrow */}
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sand-50 group-hover:text-harvest-400 pt-1">
                    <span>{t("fromField.exploreDomain")}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? "translate-x-1 -translate-y-1 text-harvest-400" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Subtle Glowing Line */}
              {isExpanded && (
                <motion.div
                  layoutId="heroPanelGlow"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-harvest-400 via-forest-400 to-aqua-400"
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* MOBILE & TABLET: Interactive Grid/Carousel Fallback */}
      <div className="lg:hidden w-full px-4 py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SECTORS.map((sector, index) => {
          const displayName = language === "or" && sector.name_or ? sector.name_or : sector.name;
          const displayDesc = language === "or" && sector.shortDesc_or ? sector.shortDesc_or : sector.shortDesc;

          return (
            <Link
              key={sector.id}
              href={localizeHref(`/sectors/${sector.slug}`)}
              className="relative h-56 rounded-2xl overflow-hidden border border-forest-800/60 group shadow-lg flex flex-col justify-between p-5"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${sector.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950/40" />

              <div className="relative z-10 flex justify-between items-center">
                <span className="text-xs font-bold text-harvest-400">0{index + 1}</span>
                <div className="w-8 h-8 rounded-lg bg-forest-900/80 border border-forest-500/40 text-sand-100 flex items-center justify-center">
                  {ICON_MAP[sector.iconName]}
                </div>
              </div>

              <div className="relative z-10 space-y-1">
                <h3 className="font-display font-extrabold text-lg text-sand-50 uppercase tracking-wide">
                  {displayName}
                </h3>
                <p className="text-xs text-sand-200/80 line-clamp-2">{displayDesc}</p>
                <div className="flex items-center gap-1 text-xs font-semibold text-harvest-400 pt-1">
                  <span>{t("hero.discover")}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
