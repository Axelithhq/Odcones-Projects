"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { Layers, Droplets, Wrench, Box, FileText, Landmark, ShieldCheck, ArrowRight } from "lucide-react";

interface PipelineStage {
  step: string;
  title: string;
  title_or: string;
  category: string;
  desc: string;
  desc_or: string;
  icon: React.ReactNode;
  image: string;
  specs: string[];
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    step: "01",
    title: "Site Assessment & Land Suitability",
    title_or: "ସ୍ଥାନ ନିରୂପଣ ଓ ମୃତ୍ତିକା ପରୀକ୍ଷା",
    category: "LAND & TOPOGRAPHY",
    desc: "GIS elevation mapping, soil carbon analysis, and road connectivity auditing for proposed project sites.",
    desc_or: "ଜମିର ଉଚ୍ଚତା, ମାଟିର ପୋଷକ ତତ୍ତ୍ୱ ଓ ଗମନାଗମନ ସୁବିଧାର ସମ୍ପୂର୍ଣ୍ଣ ସର୍ବେକ୍ଷଣ।",
    icon: <Layers className="w-5 h-5 text-harvest-400" />,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
    specs: ["GIS Elevation Zoning", "Soil Organic Carbon Scan", "Drainage Outfall Audit"]
  },
  {
    step: "02",
    title: "Hydrological & Water Parameters",
    title_or: "ଜଳ ସମ୍ପଦ ଓ ଗୁଣବତ୍ତା ଆକଳନ",
    category: "WATER SECURITY",
    desc: "Borewell yield testing, reservoir bathymetry, and seasonal water quality profiling (DO, pH, Ammonia).",
    desc_or: "ଭୂତଳ ଜଳସ୍ତର ଓ ପୋଖରୀ ଜଳର ଗୁଣବତ୍ତା ମାପ ନିରୂପଣ।",
    icon: <Droplets className="w-5 h-5 text-aqua-400" />,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200",
    specs: ["Dissolved Oxygen Profiling", "Aquifer Recharge Modeling", "Drainage Channel Sizing"]
  },
  {
    step: "03",
    title: "2D Engineering & Machinery Layout",
    title_or: "୨D ଇଞ୍ଜିନିୟରିଂ ଓ ମେସିନାରି ଲେ-ଆଉଟ୍",
    category: "CIVIL ENGINEERING",
    desc: "AutoCAD structural drawings, processing shed layouts, biofloc tank placement, and electrical load diagrams.",
    desc_or: "ସିଭିଲ୍ ସଂରଚନା, ମେସିନ ବସାଇବା ନକ୍ସା ଓ ବିଦ୍ୟୁତ୍ ଭାର ଆକଳନ।",
    icon: <Wrench className="w-5 h-5 text-forest-300" />,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200",
    specs: ["PEB Structure Blueprints", "Processing Flow Geometry", "Utility Line Mapping"]
  },
  {
    step: "04",
    title: "3D Architectural Visualization",
    title_or: "୩D ଆର୍କିଟେକ୍ଚରାଲ୍ ଭିଜୁଆଲାଇଜେସନ୍",
    category: "3D PROJECT VISUALIZATION",
    desc: "Photorealistic 3D spatial models showcasing full project infrastructure prior to capital expenditure.",
    desc_or: "ନିର୍ମାଣ ପୂର୍ବରୁ ପ୍ରକଳ୍ପର ସମ୍ପୂର୍ଣ୍ଣ ୩D ଚିତ୍ରାଙ୍କନ।",
    icon: <Box className="w-5 h-5 text-harvest-300" />,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    specs: ["Spatial Infrastructure Walkthrough", "Machinery Spatial Clearance", "Internal Road Zoning"]
  },
  {
    step: "05",
    title: "Detailed Project Report (DPR)",
    title_or: "ବିସ୍ତୃତ ପ୍ରକଳ୍ପ ରିପୋର୍ଟ (DPR)",
    category: "BANKABLE DPR",
    desc: "Bankable DPR preparation incorporating market demand analysis, raw material sourcing, and production schedules.",
    desc_or: "ବ୍ୟାଙ୍କ ଋଣ ଓ ସରକାରୀ ଯୋଜନା ପାଇଁ ବୈଷୟିକ DPR।",
    icon: <FileText className="w-5 h-5 text-harvest-400" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    specs: ["Market Assessment", "Raw Material Linkages", "Production Output Schedule"]
  },
  {
    step: "06",
    title: "Financial Modeling & Loan Appraisal",
    title_or: "ଆର୍ଥିକ ଯୋଜନା ଓ ଋଣ ଆକଳନ",
    category: "FINANCIAL MODELING",
    desc: "Detailed cash flow statements, DSCR repayment calculations, break-even analysis, and subsidy eligibility structuring.",
    desc_or: "ଆୟ-ବ୍ୟୟ ହିସାବ, DSCR ଋଣ ପରିଶୋଧ କ୍ଷମତା ଓ ସବସିଡି ଆକଳନ।",
    icon: <Landmark className="w-5 h-5 text-aqua-400" />,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    specs: ["DSCR Ratio Calculation", "Means of Finance Structure", "Government Subsidy Advisory"]
  },
  {
    step: "07",
    title: "Turn-key Project Implementation",
    title_or: "ପ୍ରକଳ୍ପ କାର୍ଯ୍ୟକାରିତା ଓ ତଦାରଖ",
    category: "PROJECT EXECUTION",
    desc: "EPC vendor coordination, civil construction supervision, equipment commissioning, and commercial trial runs.",
    desc_or: "ସିଭିଲ୍ ନିର୍ମାଣ ଓ ମେସିନ ସ୍ଥାପନର ପ୍ରତ୍ୟକ୍ଷ ତଦାରଖ।",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200",
    specs: ["EPC Site Supervision", "Equipment Commissioning", "Commercial Trial Run"]
  }
];

export function FieldToFinance() {
  const [activeStep, setActiveStep] = useState<PipelineStage>(PIPELINE_STAGES[0]);
  const { language } = useTranslation();

  return (
    <section className="py-24 bg-theme-base text-sand-50 relative border-b border-forest-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>SIGNATURE PROJECT METHODOLOGY</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight uppercase">
            {language === "or" ? "କ୍ଷେତ୍ରରୁ ଆର୍ଥିକ ଯୋଜନା ପର୍ଯ୍ୟନ୍ତ" : "FROM FIELD TO FINANCE"}
          </h2>

          <p className="text-sand-200/80 text-sm sm:text-base leading-relaxed font-light">
            How ODCONS PROJECTS transforms raw agricultural or aquatic land into a bankable, high-yield commercial enterprise.
          </p>
        </div>

        {/* Horizontal Step Stepper */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-forest-800/40">
          {PIPELINE_STAGES.map((stg) => {
            const isSelected = activeStep.step === stg.step;
            return (
              <button
                key={stg.step}
                onClick={() => setActiveStep(stg)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase transition-all border ${
                  isSelected
                    ? "bg-harvest-500 text-forest-950 border-harvest-400 shadow-xl scale-105"
                    : "bg-forest-900/40 text-sand-200/70 border-forest-800 hover:text-sand-50"
                }`}
              >
                <span>{stg.step}.</span>
                <span>{language === "or" ? stg.title_or.split(" ")[0] : stg.category.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Display Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-forest-900/40 border border-forest-700/50 shadow-2xl"
          >
            <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden relative border border-forest-700/50">
              <img src={activeStep.image} alt={activeStep.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-theme-base/80 text-xs font-bold text-harvest-400">
                STAGE {activeStep.step} • {activeStep.category}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-harvest-400 font-display uppercase tracking-widest">
                  METHODOLOGY STAGE {activeStep.step}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-sand-50">
                  {language === "or" ? activeStep.title_or : activeStep.title}
                </h3>
              </div>

              <p className="text-sand-200/80 text-sm leading-relaxed font-light">
                {language === "or" ? activeStep.desc_or : activeStep.desc}
              </p>

              <div className="p-4 rounded-2xl bg-theme-base border border-forest-800 space-y-2">
                <span className="text-[10px] font-bold text-forest-300 uppercase tracking-widest">
                  DELIVERABLE SPECIFICATIONS:
                </span>
                <div className="space-y-1 text-xs text-sand-100 font-mono">
                  {activeStep.specs.map((sp, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-harvest-400">•</span>
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
