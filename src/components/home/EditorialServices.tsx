"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { FileText, Wrench, Landmark, ShieldCheck, Box, Calculator, Compass, Layers, ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  title_or: string;
  category: string;
  desc: string;
  deliverables: string[];
  image: string;
}

const EDITORIAL_SERVICES: ServiceItem[] = [
  {
    id: "dpr-preparation",
    num: "01",
    title: "Detailed Project Report (DPR) Preparation",
    title_or: "ବିସ୍ତୃତ ପ୍ରକଳ୍ପ ରିପୋର୍ଟ (DPR) ପ୍ରସ୍ତୁତି",
    category: "BANK CONSULTANCY & DPR",
    desc: "Bankable DPR preparation for bank loans, World Bank, PMMSY, AIF, and MIDH schemes covering promoter profiles, technical parameters, cost estimations, and DSCR analysis.",
    deliverables: ["Bankable Technical DPR Document", "DSCR Repayment Calculation", "Market Demand-Supply Assessment"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "techno-feasibility",
    num: "02",
    title: "Techno-Economic Feasibility Audit",
    title_or: "ତ୍ରାକ୍ନୋ-ଇକୋନୋମିକ ସମ୍ଭାବ୍ୟତା ସର୍ବେକ୍ଷଣ",
    category: "FEASIBILITY & AUDIT",
    desc: "Pre-investment technical audits examining land suitability, water availability, raw material sourcing, and financial viability prior to capital expenditure.",
    deliverables: ["Land & Hydrological Audit Report", "Raw Material Linkage Analysis", "Sensitivity & Risk Profile"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "engineering-estimates",
    num: "03",
    title: "Civil & Structural Engineering Estimates",
    title_or: "ସିଭିଲ୍ ଓ ଇଞ୍ଜିନିୟରିଂ ଆକଳନ",
    category: "CIVIL ENGINEERING",
    desc: "Itemized civil engineering bill of quantities (BOQ), structural steel estimates, foundation specifications, and earthwork volume calculations.",
    deliverables: ["Itemized Civil BOQ Schedule", "PEB Structural Steel Quantities", "Foundation Earthwork Calculations"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "2d-3d-layouts",
    num: "04",
    title: "2D & 3D Architectural Project Layouts",
    title_or: "୨D ଓ ୩D ସିଭିଲ୍ ଓ ଇଞ୍ଜିନିୟରିଂ ଲେ-ଆଉଟ୍",
    category: "ARCHITECTURAL LAYOUTS",
    desc: "AutoCAD 2D floor plans, machinery arrangement drawings, utility piping diagrams, and 3D architectural visual walk-throughs.",
    deliverables: ["AutoCAD 2D Site Blueprints", "Machinery Spatial Placement Layout", "Photorealistic 3D Spatial Renders"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "financial-modeling",
    num: "05",
    title: "Financial Modeling & Loan Appraisal",
    title_or: "ଆର୍ଥିକ ଯୋଜନା ଓ ଋଣ ଆକଳନ",
    category: "FINANCIAL PLANNING",
    desc: "Comprehensive 10-year projected financial statements, cash flow statements, Debt Service Coverage Ratio (DSCR), and break-even revenue models.",
    deliverables: ["10-Year Cash Flow Model", "DSCR & Interest Coverage Schedules", "Break-Even Revenue Metrics"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "government-schemes",
    num: "06",
    title: "Government Scheme & Subsidy Advisory",
    title_or: "ସରକାରୀ ଯୋଜନା ଓ ସବସିଡି ପରାମର୍ଶ",
    category: "SCHEME CONSULTANCY",
    desc: "Eligibility assessment and application documentation for State & Central government subsidy schemes (PMMSY, AIF, MIDH, MKUY, RKVY).",
    deliverables: ["Scheme Eligibility Audit Report", "Application Documentation Dossier", "Subsidy Structuring Guidance"],
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=1200"
  }
];

export function EditorialServices() {
  const [activeService, setActiveService] = useState<ServiceItem>(EDITORIAL_SERVICES[0]);
  const { language } = useTranslation();

  return (
    <section className="py-24 bg-theme-base text-sand-50 relative border-b border-forest-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>TECHNICAL SERVICES & CAPABILITIES</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight uppercase">
            {language === "or" ? "ଆମର ବୈଷୟିକ ସେବା ସମୂହ" : "EDITORIAL SERVICE SYSTEM"}
          </h2>

          <p className="text-theme-text-muted text-sm sm:text-base leading-relaxed font-light">
            ODCONS PROJECTS provides complete end-to-end technical consultancy across project planning, engineering, DPR preparation, and financial modeling.
          </p>
        </div>

        {/* Editorial Magazine Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Service Menu List */}
          <div className="lg:col-span-5 space-y-3">
            {EDITORIAL_SERVICES.map((srv) => {
              const isSelected = activeService.id === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => setActiveService(srv)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-forest-900/90 border-harvest-400 shadow-xl"
                      : "bg-theme-base/40 border-forest-800/60 hover:border-forest-700"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold text-harvest-400 uppercase block">
                      SERVICE {srv.num}
                    </span>
                    <h3 className="font-display font-bold text-base text-sand-50">
                      {language === "or" ? srv.title_or : srv.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-harvest-400">→</span>
                </div>
              );
            })}
          </div>

          {/* Right Selected Service Editorial View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 p-8 rounded-3xl bg-forest-900/50 border border-forest-700/60 space-y-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="h-64 rounded-2xl overflow-hidden relative border border-forest-700">
                <img src={activeService.image} alt={activeService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-theme-base/80 text-xs font-bold text-harvest-400 font-mono">
                  {activeService.category}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-2xl text-sand-50">
                  {language === "or" ? activeService.title_or : activeService.title}
                </h3>
                <p className="text-xs sm:text-sm text-theme-text-muted leading-relaxed font-light">
                  {activeService.desc}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-theme-base border border-forest-800 space-y-2">
                <span className="text-[10px] font-bold text-forest-300 uppercase tracking-widest font-display">
                  SERVICE DELIVERABLES:
                </span>
                <div className="space-y-1 text-xs text-theme-text font-mono">
                  {activeService.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-harvest-400">✓</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/services/${activeService.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg hover:bg-harvest-400 transition-all"
                >
                  <span>Explore Service Specifications →</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
