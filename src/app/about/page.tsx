import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { FounderSection } from "@/components/home/FounderSection";
import { Eye, Target } from "lucide-react";

export const metadata = {
  title: "About ODCONES PROJECTS | Founder Anshuman Mohapatra & Ecosystem Vision",
  description: "Learn about ODCONES PROJECTS mission, vision, Founder Anshuman Mohapatra, and 5-stage evolutionary roadmap across rural development.",
};

const TIMELINE = [
  { stage: "01. IDEA", title: "Conceptualization & Ground Research", year: "2018", desc: "Identification of critical systemic gaps in Eastern Indian inland fisheries, smallholder soil carbon depletion, and fragmented market access." },
  { stage: "02. DEVELOPMENT", title: "Tech Architecture & Field Pilots", year: "2020", desc: "Design of HDPE reservoir floating cage frameworks, Biofloc circular tanks, and ODCONES FieldOS IoT telemetry algorithms." },
  { stage: "03. IMPLEMENTATION", title: "Institutional & EPC Execution", year: "2022", desc: "Execution of government DPRs, World Bank supported reservoir cage installations, and coastal saline land drainage grids." },
  { stage: "04. IMPACT", title: "Community Verification & Scale", year: "2024", desc: "Achieved 10,000+ empowered farmers/fisherfolk, 150+ completed projects, and 50,000+ hectares of modernized farmlands." },
  { stage: "05. SCALE", title: "Pan-India Expansion & Export Links", year: "2026+", desc: "Scaling digital platform monitoring and cold-chain value addition networks across national and international markets." }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>ABOUT ODCONES PROJECTS</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            Engineering Sustainable Rural Futures
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            Founded by <strong className="text-sand-50">Anshuman Mohapatra</strong>, ODCONES PROJECTS is dedicated to building agricultural, aquatic, and watershed systems that grow beyond today.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Vision & Mission */}
      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 border border-forest-600 flex items-center justify-center text-harvest-400">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-sand-50 uppercase">Our Corporate Vision</h3>
            <p className="text-xs sm:text-sm text-sand-200/80 leading-relaxed">
              To be India's premier integrated technology and project execution platform across Agriculture, Fisheries, Aquaculture, and Soil-Water conservation—restoring natural ecosystems while maximizing rural economic productivity.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 border border-forest-600 flex items-center justify-center text-harvest-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-sand-50 uppercase">Our Operational Mission</h3>
            <p className="text-xs sm:text-sm text-sand-200/80 leading-relaxed">
              Deploy turn-key climate-resilient infrastructure, precise IoT telemetry, scientific feed/seed protocols, and direct market aggregation to double the net household income of smallholders and fisherfolk.
            </p>
          </div>
        </div>
      </section>

      {/* Evolutionary Timeline */}
      <section className="py-20 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-harvest-400 uppercase tracking-widest font-display">
              EVOLUTIONARY MILESTONES
            </span>
            <h2 className="font-display font-extrabold text-3xl text-sand-50 uppercase">
              Our Journey of Execution
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 md:w-1/3">
                  <span className="text-xs font-bold text-harvest-400">{item.stage} • {item.year}</span>
                  <h4 className="font-display font-extrabold text-lg text-sand-50">{item.title}</h4>
                </div>
                <p className="text-xs text-sand-200/80 md:w-2/3 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
