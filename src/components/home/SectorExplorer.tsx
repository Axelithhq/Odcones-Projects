"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { Sprout, Fish, ShieldCheck, Flower2, Utensils, Snowflake, Building2, Factory, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface SectorItem {
  id: string;
  num: string;
  name: string;
  name_or: string;
  bgImage: string;
  icon: React.ReactNode;
  desc: string;
  projects: string[];
}

const SECTOR_ITEMS: SectorItem[] = [
  {
    id: "agriculture",
    num: "01",
    name: "Agriculture",
    name_or: "କୃଷି ଉନ୍ନୟନ",
    bgImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1600",
    icon: <Sprout className="w-6 h-6 text-theme-gold" />,
    desc: "Climate-resilient crop planning, soil organic carbon restoration, precision GIS zoning, and seed processing infrastructure.",
    projects: ["Precision Crop Planning", "Soil Regeneration Systems", "GIS Micro-Zoning"]
  },
  {
    id: "fisheries",
    num: "02",
    name: "Fisheries & Aquaculture",
    name_or: "ମତ୍ସ୍ୟଚାଷ ଓ ଜଳଚର ପାଳନ",
    bgImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1600",
    icon: <Fish className="w-6 h-6 text-theme-water" />,
    desc: "Biofloc circular tanks, HDPE floating cages for reservoirs, RAS units, and solar ice plants.",
    projects: ["Reservoir HDPE Floating Cages", "Biofloc & RAS Circular Tanks", "Solar Ice Plants"]
  },
  {
    id: "dairy",
    num: "03",
    name: "Dairy & Animal Husbandry",
    name_or: "ଦୁଗ୍ଧ ଓ ପଶୁସମ୍ପଦ",
    bgImage: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&q=80&w=1600",
    icon: <ShieldCheck className="w-6 h-6 text-theme-accent" />,
    desc: "Commercial cattle sheds, Bulk Milk Chilling (BMC) hubs, hydroponic green fodder trays, and poultry layer units.",
    projects: ["Smart BMC Dairy Hubs", "Hydroponic Fodder Security", "Cattle Shed Architecture"]
  },
  {
    id: "horticulture",
    num: "04",
    name: "Horticulture",
    name_or: "ଉଦ୍ୟାନ କୃଷି",
    bgImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1600",
    icon: <Flower2 className="w-6 h-6 text-theme-gold" />,
    desc: "Naturally ventilated polyhouses, shade-net nurseries, exotic vegetable cultivation, mushroom units, and floriculture.",
    projects: ["Hi-Tech Polyhouses", "Shade-Net Nurseries", "Button Mushroom Units"]
  },
  {
    id: "food-processing",
    num: "05",
    name: "Food Processing",
    name_or: "ଖାଦ୍ୟ ପ୍ରସଂସ୍କରଣ",
    bgImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1600",
    icon: <Utensils className="w-6 h-6 text-theme-gold" />,
    desc: "Modern rice mills, oil expellers, pulse processing units, spice grinding complexes, and PM-FME micro-food enterprises.",
    projects: ["Agro-Processing Clusters", "FSSAI Quality Labs", "PM-FME Enterprise Hubs"]
  },
  {
    id: "cold-chain",
    num: "06",
    name: "Cold Chain & Storage",
    name_or: "କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍ ଓ କୋଲ୍ଡ-ଚେନ୍",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    icon: <Snowflake className="w-6 h-6 text-theme-water" />,
    desc: "Integrated Packhouses, PUF panel cold rooms, pre-cooling chambers, refrigerated vans, and ripening chambers.",
    projects: ["Integrated Packhouses", "Multi-Commodity Cold Rooms", "Reefer Transportation"]
  },
  {
    id: "rural-infrastructure",
    num: "07",
    name: "Rural Infrastructure",
    name_or: "ଗ୍ରାମୀଣ ଭିତ୍ତିଭୂମି",
    bgImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1600",
    icon: <Building2 className="w-6 h-6 text-theme-accent" />,
    desc: "Check dams, farm ponds, sub-surface drainage, rural connectivity structures, grain godowns, and renewable micro-grids.",
    projects: ["Watershed Check Dams", "AIF Scientific Grain Godowns", "Drainage Pipe Networks"]
  },
  {
    id: "msme-projects",
    num: "08",
    name: "Allied MSME Projects",
    name_or: "ଆନୁଷଙ୍ଗିକ MSME ପ୍ରକଳ୍ପ",
    bgImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1600",
    icon: <Factory className="w-6 h-6 text-theme-gold" />,
    desc: "PMEGP, PM-FME, and MKUY micro-industrial projects including bio-pellet units, bio-pesticide labs, custom hiring centers, and feed mills.",
    projects: ["Custom Hiring Centers (CHC)", "Extruder Feed Mills", "Bio-Pellet Press Units"]
  }
];

export function SectorExplorer() {
  const [selectedSector, setSelectedSector] = useState<SectorItem>(SECTOR_ITEMS[0]);
  const { language } = useTranslation();

  return (
    <section className="py-24 bg-theme-base text-theme-text relative border-b border-theme-border overflow-hidden min-h-screen flex flex-col justify-between transition-colors duration-500">
      {/* Background Full-Screen Visual Switcher */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-20 scale-105 pointer-events-none"
        style={{ backgroundImage: `url('${selectedSector.bgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-12 my-auto">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-bold uppercase tracking-widest text-theme-gold font-display">
            <span>8 INTEGRATED SECTOR DOMAINS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-theme-text uppercase tracking-tight text-balance">
            {language === "or" ? "ଆମର କ୍ଷେତ୍ରଗୁଡ଼ିକ" : "SECTOR COVERAGE DIRECTORY"}
          </h2>
        </div>

        {/* Sector Navigation List & Dynamic Detail Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Vertical List (8 Domains) */}
          <div className="lg:col-span-6 space-y-2.5">
            {SECTOR_ITEMS.map((sec) => {
              const isSelected = selectedSector.id === sec.id;
              return (
                <div
                  key={sec.id}
                  onClick={() => setSelectedSector(sec)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-theme-elevated border-harvest-400 shadow-xl"
                      : "glass-card hover:border-theme-border/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-theme-gold">{sec.num}.</span>
                    <span className="font-display font-bold text-base text-theme-text">
                      {language === "or" ? sec.name_or : sec.name}
                    </span>
                  </div>
                  {sec.icon}
                </div>
              );
            })}
          </div>

          {/* Right Selected Sector Detail View */}
          <div className="lg:col-span-6 p-8 rounded-3xl glass-panel space-y-6 shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono font-bold text-theme-gold uppercase block">
                  SECTOR DOMAIN {selectedSector.num}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-theme-text text-balance">
                  {language === "or" ? selectedSector.name_or : selectedSector.name}
                </h3>
              </div>
              <div className="p-3 rounded-2xl bg-theme-surface border border-theme-border">
                {selectedSector.icon}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-theme-text-muted leading-relaxed font-normal max-w-prose-custom">
              {selectedSector.desc}
            </p>

            <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border space-y-2">
              <span className="text-[10px] font-bold text-theme-gold uppercase tracking-widest font-display">
                TECHNICAL PROJECT TYPES INCLUDED:
              </span>
              <div className="space-y-1 text-xs text-theme-text font-mono">
                {selectedSector.projects.map((proj, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-theme-gold">✓</span>
                    <span>{proj}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={`/sectors/${selectedSector.id}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest-900 text-sand-50 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg hover:bg-forest-800 transition-all"
            >
              <span>Explore {language === "or" ? selectedSector.name_or : selectedSector.name} Domain Specification →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
