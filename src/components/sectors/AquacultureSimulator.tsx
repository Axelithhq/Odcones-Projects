"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, ShieldCheck, Waves, Fish, ShoppingBag, CheckCircle, ArrowRight } from "lucide-react";

interface Stage {
  id: number;
  name: string;
  title: string;
  icon: React.ReactNode;
  temp: string;
  doLevel: string;
  feedType: string;
  desc: string;
  keyTech: string[];
}

const STAGES: Stage[] = [
  {
    id: 1,
    name: "STAGE 01: WATER",
    title: "Water Intake & Bio-Remediation",
    icon: <Droplets className="w-5 h-5 text-aqua-400" />,
    temp: "26.5 - 28.0 °C",
    doLevel: "6.5 - 7.2 mg/L",
    feedType: "Probiotic Inoculation",
    desc: "Intake water is filtered through 50-micron sand filters, treated with ozone/UV sterilization, and inoculated with probiotic biofloc bacteria prior to fingerling stocking.",
    keyTech: ["Micro-mesh inlet screens", "Ozone sterilization loop", "Nitrifying biofloc starter culture"]
  },
  {
    id: 2,
    name: "STAGE 02: HATCHERY",
    title: "SPF High-Health Seed Hatchery",
    icon: <ShieldCheck className="w-5 h-5 text-harvest-400" />,
    temp: "28.0 - 29.5 °C",
    doLevel: "7.5 mg/L",
    feedType: "Live Artemia & Micro-Pellets",
    desc: "Broodstock is maintained in strictly bio-secure indoor tanks. Fry are nurtured with Artemia nauplii to achieve high survival rates (>92%) before transfer.",
    keyTech: ["SPF broodstock certified tanks", "Automated feeding timer", "PCR pathogen screening"]
  },
  {
    id: 3,
    name: "STAGE 03: NURSERY",
    title: "Nursery Acclimatization Ponds",
    icon: <Waves className="w-5 h-5 text-forest-300" />,
    temp: "27.0 - 29.0 °C",
    doLevel: "6.8 mg/L",
    feedType: "0.8mm High-Protein Crumble",
    desc: "Fingerlings (1g to 15g) undergo 30-day intensive nursery rearing under continuous paddlewheel aeration to build immune strength.",
    keyTech: ["Paddlewheel aeration grid", "High-protein starter feed", "Growth sampling checks"]
  },
  {
    id: 4,
    name: "STAGE 04: GROW-OUT",
    title: "Grow-Out Biofloc / RAS Tanks",
    icon: <Fish className="w-5 h-5 text-aqua-400" />,
    temp: "27.5 - 28.5 °C",
    doLevel: "6.0 - 6.8 mg/L",
    feedType: "Floating Extruded Feed",
    desc: "High-density grow-out phase. IoT oxygen sensors continuously trigger venturi air injectors to maintain FCR at an industry-leading 1.12.",
    keyTech: ["Acoustic demand feeders", "IoT telemetry oxygen sensors", "Sludge drain suction"]
  },
  {
    id: 5,
    name: "STAGE 05: HARVEST",
    title: "Purging, Harvest & Cold-Chain Market",
    icon: <ShoppingBag className="w-5 h-5 text-harvest-300" />,
    temp: "0.0 - 4.0 °C (Chilled)",
    doLevel: "N/A (Iced)",
    feedType: "Depuration Fasting",
    desc: "Fish are purged in clear water tanks for 24 hours to ensure zero off-flavor, harvested with soft knotless nets, and slurry-iced for immediate cold-chain dispatch.",
    keyTech: ["Fasting depuration tanks", "Slurry-ice chill vehicles", "Direct retail delivery dispatch"]
  }
];

export function AquacultureSimulator() {
  const [currentStage, setCurrentStage] = useState<Stage>(STAGES[0]);

  return (
    <div className="p-8 rounded-3xl bg-forest-900/60 border border-forest-700/50 backdrop-blur-xl space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-forest-800 pb-6">
        <div>
          <span className="text-xs font-bold text-harvest-400 uppercase tracking-widest font-display">
            INTERACTIVE BLUE ECONOMY SIMULATOR
          </span>
          <h3 className="font-display font-extrabold text-2xl text-sand-50 uppercase">
            5-Stage Scientific Aquaculture Lifecycle
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-forest-300 bg-theme-base px-3 py-1.5 rounded-lg border border-forest-800">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Click stage nodes to simulate environmental telemetry</span>
        </div>
      </div>

      {/* Stage Stepper Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {STAGES.map((stg) => {
          const isActive = currentStage.id === stg.id;
          return (
            <button
              key={stg.id}
              onClick={() => setCurrentStage(stg)}
              className={`p-3 rounded-2xl border text-left transition-all ${
                isActive
                  ? "bg-forest-800 border-harvest-400 text-sand-50 shadow-lg scale-105"
                  : "bg-theme-base/60 border-forest-800 text-theme-text-muted hover:text-sand-50 hover:bg-forest-900/40"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-harvest-400">{stg.id}</span>
                {stg.icon}
              </div>
              <p className="text-xs font-bold font-display line-clamp-1">{stg.title.split(" ")[0]}</p>
            </button>
          );
        })}
      </div>

      {/* Interactive Detail Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 rounded-2xl bg-theme-base/80 border border-forest-800/60"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 border border-forest-700/50 flex items-center justify-center">
                {currentStage.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold text-forest-400 uppercase tracking-widest font-display">
                  {currentStage.name}
                </span>
                <h4 className="font-display font-extrabold text-xl text-sand-50">
                  {currentStage.title}
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-theme-text-muted leading-relaxed">
              {currentStage.desc}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-wider">
                COMMISSIONED TECHNOLOGIES:
              </span>
              <ul className="space-y-1.5 text-xs text-theme-text">
                {currentStage.keyTech.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-forest-300" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Telemetry Display Side Card */}
          <div className="lg:col-span-5 p-5 rounded-xl bg-forest-900/60 border border-forest-700/40 space-y-4">
            <span className="text-[10px] font-bold text-forest-300 uppercase tracking-widest font-display">
              STAGE {currentStage.id} TELEMETRY PARAMETERS
            </span>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-theme-base border border-forest-800">
                <span className="text-theme-text-muted">Target Temperature:</span>
                <span className="font-mono font-bold text-sand-50">{currentStage.temp}</span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-theme-base border border-forest-800">
                <span className="text-theme-text-muted">Dissolved Oxygen:</span>
                <span className="font-mono font-bold text-aqua-400">{currentStage.doLevel}</span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-theme-base border border-forest-800">
                <span className="text-theme-text-muted">Feed Regimen:</span>
                <span className="font-mono font-bold text-harvest-400">{currentStage.feedType}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
