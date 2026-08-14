"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Clock, Sprout, Fish, Droplets, Activity, CheckCircle, ArrowRight } from "lucide-react";

interface FieldScene {
  time: string;
  title: string;
  category: string;
  desc: string;
  image: string;
  telemetry: string;
}

const FIELD_SCENES: FieldScene[] = [
  {
    time: "05:30 AM",
    title: "Morning Dawn & Reservoir Dispatch",
    category: "Fisheries & Water",
    desc: "Fishermen in Hirakud reservoir assemble at sunrise to inspect net lines and check HDPE floating cage tension before morning feeding.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200",
    telemetry: "Air Temp: 22°C | Water Temp: 26.2°C"
  },
  {
    time: "07:00 AM",
    title: "Paddy Field Sowing & Soil Moisture Audit",
    category: "Agriculture",
    desc: "Farmers in Bargarh begin paddy transplanting using direct-seeded rice (DSR) techniques, verifying soil moisture levels.",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1200",
    telemetry: "Soil Carbon: 0.82% | Moisture: 58%"
  },
  {
    time: "09:30 AM",
    title: "Polyhouse Micro-Fertigation Dosing",
    category: "Horticulture",
    desc: "In Koraput polyhouses, automated drip fertigation channels deliver liquid micro-nutrients to capsicum and strawberry beds.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200",
    telemetry: "Greenhouse Temp: 26.5°C | Humidity: 68%"
  },
  {
    time: "12:00 PM",
    title: "Midday Solar Aeration & Oxygen Check",
    category: "Aquaculture",
    desc: "Biofloc circular tanks in Bhadrak reach peak photosynthesis. Solar microbubble aerators maintain dissolved oxygen above 6.5 mg/L.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200",
    telemetry: "Dissolved Oxygen: 6.8 mg/L | pH: 7.4"
  },
  {
    time: "03:00 PM",
    title: "Check Dam Water Management",
    category: "Soil & Water",
    desc: "Ganjam watershed officers inspect check dam overflow channels and groundwater recharge shafts following monsoon rain.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
    telemetry: "Water Harvested: 4.5M m³ | Flow: Normal"
  },
  {
    time: "05:30 PM",
    title: "Fish Landing Dock Harvest & Cold Icing",
    category: "Fisheries Logistics",
    desc: "Evening harvest from reservoir cages is sorted, weighed, and slurry-iced at solar-powered landing docks for urban transport.",
    image: "https://images.unsplash.com/photo-1516683018641-547af6c268df?auto=format&fit=crop&q=80&w=1200",
    telemetry: "Harvest Biomass: 4.2 MT | Chill Temp: 2°C"
  },
  {
    time: "07:00 PM",
    title: "FieldOS Data Synchronization",
    category: "Field Operations",
    desc: "Field officers log daily beneficiary payouts, FPO crop ledgers, and sensor telemetry logs to the central ODCONES FieldOS server.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    telemetry: "FieldOS Sync: 100% | 24 Nodes Online"
  }
];

export function DayInFieldStory() {
  const [activeScene, setActiveScene] = useState<FieldScene>(FIELD_SCENES[0]);

  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative border-b border-forest-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
              <Sun className="w-3.5 h-3.5 text-harvest-400" />
              <span>REAL-WORLD FIELD OPERATIONS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight">
              A Day In The Field
            </h2>
          </div>
          <p className="text-sand-200/70 text-xs sm:text-sm max-w-md leading-relaxed">
            Follow the 24-hour cycle of real operations across paddy fields, fish landing docks, greenhouses, and watershed structures.
          </p>
        </div>

        {/* Timeline Stepper */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-forest-800/40 mb-12">
          {FIELD_SCENES.map((scene, idx) => {
            const isSelected = activeScene.time === scene.time;
            return (
              <button
                key={scene.time}
                onClick={() => setActiveScene(scene)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all border ${
                  isSelected
                    ? "bg-harvest-500 text-forest-950 border-harvest-400 shadow-lg scale-105"
                    : "bg-forest-900/40 text-sand-200/70 border-forest-800 hover:text-sand-50"
                }`}
                data-cursor-text="TIME"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{scene.time}</span>
              </button>
            );
          })}
        </div>

        {/* Story Display Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScene.time}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Image Banner */}
            <div className="lg:col-span-7 h-[420px] rounded-3xl overflow-hidden border border-forest-700/50 relative group shadow-2xl">
              <img
                src={activeScene.image}
                alt={activeScene.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md text-xs font-bold text-harvest-400 uppercase">
                {activeScene.category}
              </div>
            </div>

            {/* Content Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-harvest-400 font-display uppercase tracking-widest">
                  {activeScene.time} OPERATIONAL CYCLE
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-sand-50">
                  {activeScene.title}
                </h3>
              </div>

              <p className="text-sand-200/80 text-sm leading-relaxed font-light">
                {activeScene.desc}
              </p>

              <div className="p-4 rounded-2xl bg-forest-900/60 border border-forest-700/40 space-y-1">
                <span className="text-[10px] font-bold text-forest-300 uppercase tracking-widest">
                  FIELD TELEMETRY AUDIT:
                </span>
                <p className="font-mono font-bold text-xs text-harvest-300">{activeScene.telemetry}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
