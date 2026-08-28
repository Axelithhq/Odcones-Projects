"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { Compass, Box, Layers, ShieldCheck, Wrench } from "lucide-react";

interface BlueprintZone {
  id: string;
  name: string;
  name_or: string;
  code: string;
  desc: string;
  specs: string[];
}

const BLUEPRINT_ZONES: BlueprintZone[] = [
  {
    id: "zone-a",
    name: "Processing Shed & PEB Infrastructure",
    name_or: "ପ୍ରସେସିଂ ସେଡ୍ ଓ PEB ସଂରଚନା",
    code: "ZONE-A",
    desc: "Pre-Engineered Building (PEB) structural steel framing with food-grade epoxy flooring and clear height geometry.",
    specs: ["Span: 24m Clear Span", "Eave Height: 7.5m", "Epoxy Flooring: 3mm Self-Leveling"]
  },
  {
    id: "zone-b",
    name: "PUF Insulated Cold Storage Facility",
    name_or: "କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍ ଓ ଶୀତଳ ଭଣ୍ଡାର",
    code: "ZONE-B",
    desc: "150mm thick Polyurethane Foam (PUF) sandwich panel insulation with automatic temperature humidity logging.",
    specs: ["Temp Range: -2°C to +4°C", "PUF Thickness: 150mm", "Hermetic Compressor Manifold"]
  },
  {
    id: "zone-c",
    name: "HDPE Reservoir Floating Cage Cluster",
    name_or: "ଏଚଡିପିଇ ଫ୍ଲୋଟିଙ୍ଗ୍ କେଜ୍ କ୍ଲଷ୍ଟର୍",
    code: "ZONE-C",
    desc: "High-Density Polyethylene (HDPE) frame floating cages configured in 6m x 6m battery arrays.",
    specs: ["Frame: 140mm Virgin HDPE", "Net Depth: 4.0m Braided Nylon", "Buoyancy Barrels: UV Stabilized"]
  },
  {
    id: "zone-d",
    name: "Sub-surface Tile Drainage Grid",
    name_or: "ଭୂତଳ ନିଷ୍କାସନ ନଳି ଗ୍ରୀଡ୍",
    code: "ZONE-D",
    desc: "Corrugated perforated PVC pipe drainage network leaching salts out of coastal agricultural soils.",
    specs: ["Pipe Depth: 1.2m Sub-surface", "Geotextile Filter Wrap", "Collector Sump Pump System"]
  }
];

export function EngineeringBlueprints() {
  const [activeZone, setActiveZone] = useState<BlueprintZone>(BLUEPRINT_ZONES[0]);
  const { language } = useTranslation();

  return (
    <section className="py-24 bg-theme-base text-sand-50 relative border-b border-forest-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <Compass className="w-3.5 h-3.5" />
            <span>CIVIL & STRUCTURAL ENGINEERING DRAWINGS</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight uppercase">
            {language === "or" ? "୨D/୩D ଇଞ୍ଜିନିୟରିଂ ନକ୍ସା ଓ ସିଭିଲ୍ ଲେ-ଆଉଟ୍" : "ENGINEERING & TECHNICAL DRAWINGS"}
          </h2>

          <p className="text-sand-200/80 text-sm sm:text-base leading-relaxed font-light">
            Every ODCONS project includes precision AutoCAD structural plans, machinery arrangement drawings, and civil site layouts.
          </p>
        </div>

        {/* Blueprint Viewer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* CAD Blueprint SVG Simulation Container */}
          <div className="lg:col-span-7 h-[440px] rounded-3xl bg-forest-900/80 border border-forest-700/60 p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A4D2E_1px,transparent_1px),linear-gradient(to_bottom,#1A4D2E_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

            <div className="relative z-10 flex justify-between items-center text-xs font-mono font-bold text-harvest-400">
              <span>AUTOCAD DRAWING NO: ODC-CAD-2026</span>
              <span className="px-2.5 py-1 rounded bg-theme-base border border-forest-800 text-sand-50">
                SCALE: 1:100 METRIC
              </span>
            </div>

            {/* Interactive Blueprint Vector Graphics */}
            <div className="relative z-10 w-full h-[300px] my-auto flex items-center justify-center">
              <svg className="w-full h-full stroke-harvest-400" fill="none">
                {/* Structural Outer Boundary */}
                <rect x="10%" y="10%" width="80%" height="80%" strokeWidth="2" strokeDasharray="6 4" />
                
                {/* Zone Rectangles */}
                <rect
                  x="15%" y="18%" width="32%" height="40%"
                  className={`transition-colors cursor-pointer ${activeZone.code === "ZONE-A" ? "fill-harvest-500/20 stroke-harvest-300 stroke-2" : "stroke-forest-500 fill-transparent"}`}
                  onClick={() => setActiveZone(BLUEPRINT_ZONES[0])}
                />
                <text x="17%" y="30%" fill="#E9C46A" fontSize="11" fontWeight="bold" fontFamily="monospace">ZONE-A: PEB SHED</text>

                <rect
                  x="52%" y="18%" width="38%" height="40%"
                  className={`transition-colors cursor-pointer ${activeZone.code === "ZONE-B" ? "fill-harvest-500/20 stroke-harvest-300 stroke-2" : "stroke-forest-500 fill-transparent"}`}
                  onClick={() => setActiveZone(BLUEPRINT_ZONES[1])}
                />
                <text x="54%" y="30%" fill="#E9C46A" fontSize="11" fontWeight="bold" fontFamily="monospace">ZONE-B: COLD STORAGE</text>

                <circle
                  cx="30%" cy="73%" r="35"
                  className={`transition-colors cursor-pointer ${activeZone.code === "ZONE-C" ? "fill-harvest-500/20 stroke-harvest-300 stroke-2" : "stroke-forest-500 fill-transparent"}`}
                  onClick={() => setActiveZone(BLUEPRINT_ZONES[2])}
                />
                <text x="20%" y="75%" fill="#149ECA" fontSize="10" fontWeight="bold" fontFamily="monospace">ZONE-C: CAGES</text>

                <line x1="52%" y1="65%" x2="90%" y2="85%" stroke="#52B788" strokeWidth="2" strokeDasharray="4 2" />
                <text x="54%" y="78%" fill="#52B788" fontSize="10" fontWeight="bold" fontFamily="monospace">ZONE-D: TILE DRAINS</text>
              </svg>
            </div>

            <div className="relative z-10 text-[10px] font-mono text-sand-200/50 text-center uppercase">
              [ Click CAD Zones to inspect structural specifications ]
            </div>
          </div>

          {/* Right Sidebar Structural Specs */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-forest-900/40 border border-forest-700/50 space-y-6">
            <div className="flex justify-between items-center text-xs font-mono font-bold text-harvest-400 uppercase">
              <span>{activeZone.code}</span>
              <span className="text-sand-200/60">AUTOCAD APPROVED</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-2xl text-sand-50">
                {language === "or" ? activeZone.name_or : activeZone.name}
              </h3>
              <p className="text-xs text-sand-200/80 leading-relaxed font-light">{activeZone.desc}</p>
            </div>

            <div className="p-4 rounded-2xl bg-theme-base border border-forest-800 space-y-2">
              <span className="text-[10px] font-bold text-forest-300 uppercase tracking-widest font-display">
                STRUCTURAL SPECIFICATIONS:
              </span>
              <div className="space-y-1.5 text-xs text-sand-100 font-mono">
                {activeZone.specs.map((sp, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-harvest-400">✓</span>
                    <span>{sp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
