"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { Sprout, Fish, Milk, Egg, Trees, Utensils, Snowflake, ArrowUpRight } from "lucide-react";
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
    name: "Agriculture & Agribusiness",
    name_or: "କୃଷି ଓ କୃଷି ବ୍ୟବସାୟ",
    bgImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1600",
    icon: <Sprout className="w-6 h-6 text-harvest-400" />,
    desc: "Commercial crop farming, seed processing plants, precision micro-irrigation, and rural warehouse godowns.",
    projects: ["Seed Processing Units", "Micro-Irrigation Networks", "Rural Godowns & Warehouses"]
  },
  {
    id: "fisheries",
    num: "02",
    name: "Fisheries & Aquaculture",
    name_or: "ମତ୍ସ୍ୟଚାଷ ଓ ଜଳଚର ପାଳନ",
    bgImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1600",
    icon: <Fish className="w-6 h-6 text-aqua-400" />,
    desc: "Biofloc fish farming, freshwater fish ponds, reservoir cage aquaculture, and hatchery infrastructure.",
    projects: ["Biofloc Fish Farming Units", "Reservoir Cage Aquaculture", "Fish & Shrimp Hatcheries"]
  },
  {
    id: "dairy",
    num: "03",
    name: "Dairy & Livestock",
    name_or: "ପଶୁପାଳନ ଓ ଦୁଗ୍ଧ ଉତ୍ପାଦନ",
    bgImage: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&q=80&w=1600",
    icon: <Milk className="w-6 h-6 text-forest-300" />,
    desc: "Modern cattle sheds, bulk milk cooling (BMC) units, milk collection centers, and goat/sheep farms.",
    projects: ["Commercial Dairy Farms", "Bulk Milk Cooling Units", "Goat & Sheep Breeding Farms"]
  },
  {
    id: "poultry",
    num: "04",
    name: "Poultry Farming",
    name_or: "କୁକୁଡ଼ା ପାଳନ",
    bgImage: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1600",
    icon: <Egg className="w-6 h-6 text-harvest-300" />,
    desc: "Environmentally controlled (EC) broiler sheds, layer farms, and poultry feed processing plants.",
    projects: ["EC Broiler Sheds", "Layer Poultry Farms", "Poultry Feed Plants"]
  },
  {
    id: "horticulture",
    num: "05",
    name: "Horticulture & Mushroom",
    name_or: "ଉଦ୍ୟାନ କୃଷି ଓ ଛତୁ ଚାଷ",
    bgImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1600",
    icon: <Trees className="w-6 h-6 text-emerald-400" />,
    desc: "High-density polyhouse cultivation, shade-net structures, Hi-Tech nurseries, and button mushroom units.",
    projects: ["Hi-Tech Polyhouses", "Button Mushroom Units", "Commercial Fruit Nurseries"]
  },
  {
    id: "food-processing",
    num: "06",
    name: "Food Processing & Feed",
    name_or: "ଖାଦ୍ୟ ପ୍ରସେସିଂ ଓ ଦାଣା ଉତ୍ପାଦନ",
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    icon: <Utensils className="w-6 h-6 text-harvest-400" />,
    desc: "Rice mills, flour mills, pulse processing units, oil expellers, spice processing, and cattle/fish feed plants.",
    projects: ["Modern Rice & Flour Mills", "Pulse & Spice Processing", "Floating Fish Feed Plants"]
  },
  {
    id: "cold-chain",
    num: "07",
    name: "Cold Chain & Logistics",
    name_or: "କୋଲ୍ଡ ଚେନ୍ ଓ ଲଜିଷ୍ଟିକ୍ସ",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    icon: <Snowflake className="w-6 h-6 text-aqua-300" />,
    desc: "Multi-chamber cold storage facilities, pack houses, pre-cooling units, and insulated reefer vehicles.",
    projects: ["Multi-Chamber Cold Storage", "Pack Houses & Pre-Coolers", "Reefer Transportation Vehicles"]
  }
];

export function SectorExplorer() {
  const [selectedSector, setSelectedSector] = useState<SectorItem>(SECTOR_ITEMS[0]);
  const { language } = useTranslation();

  return (
    <section className="py-24 bg-theme-base text-sand-50 relative border-b border-forest-800/40 overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Background Full-Screen Visual Switcher */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-30 scale-105"
        style={{ backgroundImage: `url('${selectedSector.bgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-12 my-auto">
        <div className="space-y-3">
          <span className="text-xs font-bold text-harvest-400 uppercase tracking-widest font-display">
            SECTOR COVERAGE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 uppercase tracking-tight">
            {language === "or" ? "ଆମର କ୍ଷେତ୍ରଗୁଡ଼ିକ" : "SECTOR COVERAGE"}
          </h2>
        </div>

        {/* Sector Navigation List & Dynamic Detail Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Vertical List */}
          <div className="lg:col-span-6 space-y-2">
            {SECTOR_ITEMS.map((sec) => {
              const isSelected = selectedSector.id === sec.id;
              return (
                <div
                  key={sec.id}
                  onClick={() => setSelectedSector(sec)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-forest-900/90 border-harvest-400 shadow-xl"
                      : "bg-theme-base/40 border-forest-800/60 hover:border-forest-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-harvest-400">{sec.num}.</span>
                    <span className="font-display font-bold text-base text-sand-50">
                      {language === "or" ? sec.name_or : sec.name}
                    </span>
                  </div>
                  {sec.icon}
                </div>
              );
            })}
          </div>

          {/* Right Selected Sector Detail View */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-forest-900/60 border border-forest-700/60 space-y-6 backdrop-blur-xl shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono font-bold text-harvest-400 uppercase block">
                  SECTOR {selectedSector.num}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-sand-50">
                  {language === "or" ? selectedSector.name_or : selectedSector.name}
                </h3>
              </div>
              <div className="p-3 rounded-2xl bg-theme-base border border-forest-800">
                {selectedSector.icon}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-theme-text-muted leading-relaxed font-light">
              {selectedSector.desc}
            </p>

            <div className="p-4 rounded-2xl bg-theme-base border border-forest-800 space-y-2">
              <span className="text-[10px] font-bold text-forest-300 uppercase tracking-widest font-display">
                TECHNICAL PROJECT TYPES INCLUDED:
              </span>
              <div className="space-y-1 text-xs text-theme-text font-mono">
                {selectedSector.projects.map((proj, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-harvest-400">✓</span>
                    <span>{proj}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={`/sectors/${selectedSector.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg hover:bg-harvest-400 transition-all"
            >
              <span>Explore Sector Technical Profile →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
