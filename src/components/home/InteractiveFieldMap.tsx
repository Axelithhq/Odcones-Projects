"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/data/projectsData";
import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";

export function InteractiveFieldMap() {
  const [selectedProj, setSelectedProj] = useState(FEATURED_PROJECTS[0]);

  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative border-b border-forest-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>REGIONAL FIELD FOOTPRINT</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight">
            Interactive Field Execution Map
          </h2>
          <p className="text-sand-200/70 text-sm leading-relaxed">
            Click project markers across Odisha and Eastern India to inspect field locations, sectors, and verified impact data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Map Graphic Container */}
          <div className="lg:col-span-7 h-[420px] rounded-3xl bg-forest-900/60 border border-forest-700/50 p-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(#1A4D2E_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
            
            {/* Top Map Label */}
            <div className="relative z-10 flex justify-between items-center text-xs font-bold text-forest-300 font-display uppercase">
              <span>EASTERN INDIA / ODISHA FIELD REGIONAL GRID</span>
              <span className="px-2.5 py-1 rounded-md bg-forest-950 border border-forest-800 text-harvest-400">
                25+ DISTRICTS COVERED
              </span>
            </div>

            {/* Interactive Pins Container */}
            <div className="relative z-10 w-full h-[280px] my-auto flex items-center justify-center">
              {FEATURED_PROJECTS.map((proj, idx) => {
                const isSelected = selectedProj.id === proj.id;
                // Position pins across the map area
                const positions = [
                  { top: "30%", left: "25%" }, // Sambalpur
                  { top: "70%", left: "35%" }, // Koraput
                  { top: "60%", left: "65%" }, // Ganjam
                  { top: "25%", left: "75%" }, // Mayurbhanj
                  { top: "45%", left: "80%" }, // Bhadrak
                  { top: "35%", left: "45%" }, // Bargarh
                ];
                const pos = positions[idx % positions.length];

                return (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedProj(proj)}
                    style={{ top: pos.top, left: pos.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all group ${
                      isSelected
                        ? "bg-harvest-500 text-forest-950 scale-125 z-20 shadow-2xl"
                        : "bg-forest-900 border border-forest-500/50 text-harvest-400 hover:scale-110 z-10"
                    }`}
                    data-cursor-text="PIN"
                  >
                    <MapPin className="w-5 h-5" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 rounded text-[9px] font-bold bg-forest-950 border border-forest-700 text-sand-50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {proj.location.split(",")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative z-10 text-[10px] text-sand-200/50 text-center font-mono uppercase">
              [ Click pins to inspect project field data ]
            </div>
          </div>

          {/* Right Side Selected Project Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-forest-900/40 border border-forest-700/50 space-y-6">
            <div className="flex justify-between items-center text-xs font-bold text-harvest-400 uppercase font-display">
              <span>{selectedProj.sector}</span>
              <span className="text-sand-200/60">{selectedProj.location}</span>
            </div>

            <div className="h-44 rounded-2xl overflow-hidden">
              <img src={selectedProj.images[0]} alt={selectedProj.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-xl text-sand-50">{selectedProj.title}</h3>
              <p className="text-xs text-sand-200/80 line-clamp-3 leading-relaxed">{selectedProj.description}</p>
            </div>

            <div className="pt-2">
              <Link
                href={`/projects/${selectedProj.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-harvest-400 hover:underline"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
