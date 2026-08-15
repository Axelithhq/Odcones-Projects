"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Smartphone, Droplets, Layers, Sprout, Navigation, BookOpen, Search, Info } from "lucide-react";

interface KitItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}

const FIELD_KIT_ITEMS: KitItem[] = [
  {
    id: "soil-vial",
    name: "Soil Sample Testing Tube",
    category: "Soil Health",
    desc: "Collects core soil samples for organic carbon (SOC) analysis and nitrogen-phosphorus-potassium (NPK) profiling.",
    icon: <Layers className="w-5 h-5 text-harvest-400" />,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "water-meter",
    name: "Water Quality Telemetry Meter",
    category: "Aquaculture & Blue Economy",
    desc: "Submersible probe measuring Dissolved Oxygen (DO), pH, temperature, and ammonia in Biofloc tanks and reservoir cages.",
    icon: <Droplets className="w-5 h-5 text-aqua-400" />,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "field-device",
    name: "Rugged FieldOS Handheld Device",
    category: "Agritech Telemetry",
    desc: "IP68 water-resistant Android terminal used by field officers to sync sensor logs and track farmer beneficiary payouts.",
    icon: <Smartphone className="w-5 h-5 text-forest-300" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "crop-leaf",
    name: "Perennial Crop Leaf Scanner",
    category: "Horticulture",
    desc: "Optical leaf clip evaluating chlorophyll content (SPAD index) and early fungal pathogen detection in polyhouses.",
    icon: <Sprout className="w-5 h-5 text-harvest-300" />,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gps-unit",
    name: "GIS Precision GPS Tracker",
    category: "Watershed Mapping",
    desc: "High-accuracy GNSS receiver used to map check dam contours, farm pond boundary coordinates, and sub-surface tile drains.",
    icon: <Navigation className="w-5 h-5 text-aqua-400" />,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "logbook",
    name: "Field Operations Ledger",
    category: "FPO Governance",
    desc: "Waterproof physical logbook for recording fish auction receipts, seed stocking counts, and local cooperative meetings.",
    icon: <BookOpen className="w-5 h-5 text-harvest-400" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  }
];

export function FieldKit() {
  const [selectedItem, setSelectedItem] = useState<KitItem>(FIELD_KIT_ITEMS[2]);

  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative border-b border-forest-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>FIELD EQUIPMENT & TELEMETRY KIT</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight">
            What Moves The Field
          </h2>

          <p className="text-sand-200/80 text-sm leading-relaxed">
            Hover over each tool in our physical field equipment kit to discover how ODCONES collects ground-truth data across farms, ponds, and watersheds.
          </p>
        </div>

        {/* Interactive Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FIELD_KIT_ITEMS.map((item) => {
            const isSelected = selectedItem.id === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setSelectedItem(item)}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 ${
                  isSelected
                    ? "bg-forest-900/80 border-harvest-400 shadow-2xl scale-[1.02]"
                    : "bg-forest-900/30 border-forest-800 hover:border-forest-600/50"
                }`}
                data-cursor-text="TOOL"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-forest-950 border border-forest-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-widest font-display">
                    {item.category}
                  </span>
                </div>

                <div className="h-36 rounded-2xl overflow-hidden relative border border-forest-800">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-sand-50">{item.name}</h3>
                  <p className="text-xs text-sand-200/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
