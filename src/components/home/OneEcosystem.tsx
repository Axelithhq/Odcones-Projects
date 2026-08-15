"use client";

import React from "react";
import { Layers, Droplets, Sprout, Fish, ShieldCheck, ShoppingBag, Users, ArrowRight } from "lucide-react";

const PIPELINE_NODES = [
  { label: "SOIL", icon: <Layers className="w-5 h-5 text-harvest-400" />, desc: "Carbon regeneration & sub-surface drainage" },
  { label: "WATER", icon: <Droplets className="w-5 h-5 text-aqua-400" />, desc: "Check dams, farm ponds & drip networks" },
  { label: "AGRICULTURE", icon: <Sprout className="w-5 h-5 text-forest-300" />, desc: "Climate-resilient DSR paddy & crop planning" },
  { label: "FISHERIES", icon: <Fish className="w-5 h-5 text-aqua-400" />, desc: "Inland water bodies & landing dock hubs" },
  { label: "LIVESTOCK", icon: <ShieldCheck className="w-5 h-5 text-harvest-300" />, desc: "Dairy hubs & hydroponic green fodder" },
  { label: "MARKET", icon: <ShoppingBag className="w-5 h-5 text-forest-300" />, desc: "Direct retail buyback & cold-chain logistics" },
  { label: "COMMUNITIES", icon: <Users className="w-5 h-5 text-harvest-400" />, desc: "Empowered FPOs & fishing cooperatives" },
];

export function OneEcosystem() {
  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative border-b border-forest-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>INTEGRATED SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight">
            One Ecosystem. Many Possibilities.
          </h2>
          <p className="text-sand-200/80 text-sm leading-relaxed">
            ODCONES PROJECTS operates across interconnected agricultural and aquatic systems rather than isolated projects.
          </p>
        </div>

        {/* Connected Node Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PIPELINE_NODES.map((node, idx) => (
            <div
              key={node.label}
              className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-3 hover:border-forest-600/60 transition-all group"
            >
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-forest-950 border border-forest-700 flex items-center justify-center">
                  {node.icon}
                </div>
                <span className="text-xs font-mono text-forest-400 font-bold">0{idx + 1}</span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-sand-50 group-hover:text-harvest-400 transition-colors">
                {node.label}
              </h3>
              <p className="text-xs text-sand-200/70 leading-relaxed">{node.desc}</p>
            </div>
          ))}

          {/* Final Summary Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-forest-900 to-forest-800 border border-forest-600/40 flex flex-col justify-between space-y-4">
            <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-widest font-display">
              TOTAL SYSTEM IMPACT
            </span>
            <p className="font-display font-extrabold text-xl text-sand-50 leading-snug">
              Building systems that grow beyond today.
            </p>
            <div className="flex items-center gap-1 text-xs font-bold text-harvest-400 pt-2">
              <span>Explore All Sectors</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
