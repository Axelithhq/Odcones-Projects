"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EcosystemCanvas } from "@/components/3d/EcosystemCanvas";
import { Layers, Droplets, Sprout, ShieldCheck, Fish, Users, ShoppingBag, ArrowRight } from "lucide-react";

interface NodeStep {
  id: string;
  title: string;
  sub: string;
  icon: React.ReactNode;
  color: string;
  desc: string;
  impact: string;
}

const NODES: NodeStep[] = [
  {
    id: "soil",
    title: "1. SOIL",
    sub: "Foundation of Terrestrial Productivity",
    icon: <Layers className="w-5 h-5" />,
    color: "#D4A373",
    desc: "Organic carbon amendment, micro-nutrient balancing, and sub-surface drainage leaching excess salts.",
    impact: "Soil Organic Carbon restored from <0.4% to >0.8%"
  },
  {
    id: "water",
    title: "2. WATER",
    sub: "Lifeblood of Agriculture & Blue Economy",
    icon: <Droplets className="w-5 h-5" />,
    color: "#149ECA",
    desc: "Catchment check dams, percolation farm ponds, solar micro-drip fertigation networks, and telemetry gauges.",
    impact: "4.5 Million m³ Rainwater Harvested Annually"
  },
  {
    id: "crop",
    title: "3. CROP",
    sub: "Climate-Resilient High-Yield Systems",
    icon: <Sprout className="w-5 h-5" />,
    color: "#52B788",
    desc: "High-density polyhouse horticulture, certified seed varieties, and Integrated Pest Management (IPM).",
    impact: "3.2x Average Farm Income Enhancement"
  },
  {
    id: "livestock",
    title: "4. LIVESTOCK",
    sub: "Dairy & Rural Household Security",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "#E9C46A",
    desc: "Perennial hydroponic green fodder security, bulk milk chilling units, and doorstep veterinary tele-care.",
    impact: "65,000 Liters Daily Milk Aggregated"
  },
  {
    id: "fish",
    title: "5. FISH",
    sub: "Sustainable Blue Economy Biomass",
    icon: <Fish className="w-5 h-5" />,
    color: "#0D879F",
    desc: "High-density HDPE floating cages, Biofloc circular tanks, automated bio-feeders, and water quality sensors.",
    impact: "18,000 MT Annual Biomass Harvested"
  },
  {
    id: "community",
    title: "6. COMMUNITY",
    sub: "Empowering Rural & Tribal Cooperatives",
    icon: <Users className="w-5 h-5" />,
    color: "#74C69D",
    desc: "Farmer Producer Organizations (FPOs), Women Self-Help Groups (SHGs), and youth mechanization training.",
    impact: "10,000+ Active Producer Shareholder Members"
  },
  {
    id: "market",
    title: "7. MARKET",
    sub: "Direct Value-Chain Integration",
    icon: <ShoppingBag className="w-5 h-5" />,
    color: "#F4A261",
    desc: "Solar packhouses, cold-chain logistics, retail buyback contracts, and transparent price realization.",
    impact: "Eliminated 4 Layers of Intermediary Costs"
  }
];

export function InteractiveEcosystem() {
  const [activeStep, setActiveStep] = useState<NodeStep>(NODES[0]);

  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative border-b border-forest-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>THE INTEGRATED ODCONES PIPELINE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight">
            An Interconnected Sustainable Ecosystem
          </h2>
          <p className="text-sand-200/70 text-sm leading-relaxed">
            Click across each node of our project pipeline to discover how ODCONES connects soil, water, crops, livestock, fish, communities, and markets into one unified engine.
          </p>
        </div>

        {/* Horizontal Node Navigation Bar */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-6 scrollbar-none border-b border-forest-800/40 mb-12">
          {NODES.map((node, index) => {
            const isSelected = activeStep.id === node.id;
            return (
              <React.Fragment key={node.id}>
                <button
                  onClick={() => setActiveStep(node)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all border ${
                    isSelected
                      ? "bg-forest-800 text-harvest-300 border-harvest-400 shadow-lg scale-105"
                      : "bg-forest-900/40 text-sand-200/70 border-forest-700/30 hover:text-sand-50 hover:bg-forest-800/40"
                  }`}
                >
                  <span style={{ color: node.color }}>{node.icon}</span>
                  <span>{node.title.split(". ")[1]}</span>
                </button>

                {index < NODES.length - 1 && (
                  <div className="hidden md:block w-4 h-[1px] bg-forest-800 flex-shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Detailed Interactive Display & 3D Canvas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 3D Interactive Canvas Scene */}
          <div className="lg:col-span-6 h-[400px]">
            <EcosystemCanvas />
          </div>

          {/* Right Column: Node Details & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 p-8 rounded-3xl bg-forest-900/50 border border-forest-700/40 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-lg"
                    style={{ backgroundColor: `${activeStep.color}20`, borderColor: activeStep.color, color: activeStep.color }}
                  >
                    {activeStep.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-forest-300 uppercase">
                      PIPELINE STAGE {activeStep.title.split(".")[0]}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-sand-50 uppercase">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-harvest-400">{activeStep.sub}</h4>
                  <p className="text-sand-200/80 text-sm leading-relaxed">{activeStep.desc}</p>
                </div>

                <div className="p-4 rounded-xl bg-forest-950/80 border border-forest-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-forest-400">
                      MEASURABLE OUTCOME IMPACT
                    </span>
                    <p className="font-display font-bold text-sm text-sand-50">{activeStep.impact}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-harvest-400" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
