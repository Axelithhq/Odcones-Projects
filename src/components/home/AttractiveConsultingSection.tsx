"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Ruler,
  Layers,
  TrendingUp,
  Landmark,
  Rocket,
  Sprout,
  Fish,
  Flower2,
  Utensils,
  Snowflake,
  Building2,
  Factory,
  Package,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Award,
  Target,
  Cpu,
  Compass,
  DollarSign
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import Link from "next/link";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  title_or: string;
  icon: React.ElementType;
  desc: string;
  desc_or: string;
  highlights: [string, string][];
  accentColor: string;
}

const CORE_SERVICES: ServiceItem[] = [
  {
    id: "dpr",
    num: "01",
    title: "Detailed Project Reports (DPR)",
    title_or: "ବୈଷୟିକ DPR ପ୍ରସ୍ତୁତି",
    icon: FileText,
    desc: "Customized and structured DPRs covering technical, commercial, and financial aspects tailored for bank loans and government sanctioning.",
    desc_or: "ବ୍ୟାଙ୍କ ଋଣ ଓ ସରକାରୀ ସବସିଡି ମଞ୍ଜୁରୀ ପାଇଁ ବୈଷୟିକ, ବାଣିଜ୍ୟିକ ଓ ଆର୍ଥିକ ତଥ୍ୟ ସମ୍ବଳିତ DPR ପ୍ରସ୍ତୁତି।",
    highlights: [
      ["Bank Financing Model", "ବ୍ୟାଙ୍କ ଋଣ ମଡେଲ"],
      ["Commercial Viability Audit", "ବାଣିଜ୍ୟିକ ସୁଫଳତା"],
      ["Scheme Compliance", "ଯୋଜନା ଅନୁମୋଦିତ"]
    ],
    accentColor: "#40916C"
  },
  {
    id: "engineering",
    num: "02",
    title: "Engineering & Cost Estimation",
    title_or: "ଇଞ୍ଜିନିୟରିଂ ଓ ଖର୍ଚ୍ଚ ଆକଳନ",
    icon: Ruler,
    desc: "Precision civil construction estimates, machinery & equipment costing, structural blueprints, and infrastructure Bill of Quantities (BOQ).",
    desc_or: "ସିଭିଲ ନିର୍ମାଣ ଆକଳନ, ମେସିନାରୀ ମୂଲ୍ୟ ନିର୍ଦ୍ଧାରଣ, ବ୍ଲୁପ୍ରିଣ୍ଟ ଓ ସଂରଚନାତ୍ମକ BOQ ପ୍ରସ୍ତୁତି।",
    highlights: [
      ["Civil BOQ Estimation", "ସିଭିଲ୍ BOQ ଆକଳନ"],
      ["Machinery Specs", "ମେସିନାରୀ ସ୍ପେସିଫିକେସନ୍"],
      ["Infrastructure Budgeting", "ଭିତ୍ତିଭୂମି ବଜେଟ୍"]
    ],
    accentColor: "#006680"
  },
  {
    id: "layouts",
    num: "03",
    title: "2D & 3D Project Layouts",
    title_or: "୨D ଓ ୩D ପ୍ରକଳ୍ପ ନକ୍ସା",
    icon: Layers,
    desc: "Functional project layouts for processing plants, modern farms, hatcheries, feed mills, cattle sheds, and cold storage facilities.",
    desc_or: "ପ୍ରସେସିଂ ପ୍ଲାଣ୍ଟ, ଫାର୍ମ, ମାଛ ଚାରା କେନ୍ଦ୍ର, ଦାଣା ମିଲ୍ ଓ କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍ ପାଇଁ ୨D/୩D ନକ୍ସା।",
    highlights: [
      ["Plant Workflow Efficiency", "ପ୍ଲାଣ୍ଟ କାର୍ଯ୍ୟକ୍ଷମତା"],
      ["3D Spatial Renders", "୩D ସ୍ପାସିଆଲ୍ ରେଣ୍ଡର୍"],
      ["Site Master Planning", "ମାଷ୍ଟର ପ୍ଲାନିଂ"]
    ],
    accentColor: "#D4A373"
  },
  {
    id: "financial",
    num: "04",
    title: "Financial Analysis & DSCR",
    title_or: "ଆର୍ଥିକ ବିଶ୍ଳେଷଣ ଓ DSCR",
    icon: TrendingUp,
    desc: "Comprehensive profitability modeling, cash flow forecasts, balance sheet preparation, DSCR computation, and repayment planning.",
    desc_or: "ଲାଭ-କ୍ଷତି ବିଶ୍ଳେଷଣ, କ୍ୟାଶ୍-ଫ୍ଲୋ ଆକଳନ, ବାଲାନ୍ସ ଶିଟ୍, DSCR ଓ ଋଣ ପରିଶୋଧ ସମୟସୂଚୀ।",
    highlights: [
      ["DSCR & Break-Even Ratios", "DSCR ଓ ବ୍ରେକ୍-ଇଭେନ୍"],
      ["Multi-Year Cash Flow", "ବହୁବର୍ଷୀୟ କ୍ୟାଶ୍-ଫ୍ଲୋ"],
      ["Bank Feasibility Metrics", "ବ୍ୟାଙ୍କ ପ୍ରାପ୍ୟତା ମାପଦଣ୍ଡ"]
    ],
    accentColor: "#52B788"
  },
  {
    id: "schemes",
    num: "05",
    title: "Government Scheme Consultancy",
    title_or: "ସରକାରୀ ଯୋଜନା ଓ ସବସିଡି",
    icon: Landmark,
    desc: "Identification of applicable schemes (PMMSY, MIDH, AIF, PM-FME, PMEGP, MKUY) and complete subsidy documentation support.",
    desc_or: "PMMSY, MIDH, AIF, PM-FME, PMEGP, MKUY ଯୋଜନା ଚିହ୍ନଟ ଓ ସବସିଡି ନଥିପତ୍ର ସହାୟତା।",
    highlights: [
      ["Central & State Subsidies", "କେନ୍ଦ୍ର ଓ ରାଜ୍ୟ ସବସିଡି"],
      ["Nodal Agency Liaison", "ସରକାରୀ ସଂସ୍ଥା ସମନ୍ୱୟ"],
      ["Subsidy Disbursement DPR", "ସବସିଡି DPR ପ୍ରସ୍ତୁତି"]
    ],
    accentColor: "#E9C46A"
  },
  {
    id: "implementation",
    num: "06",
    title: "Project Implementation Support",
    title_or: "ପ୍ରକଳ୍ପ କାର୍ଯ୍ୟକାରିତା ସହାୟତା",
    icon: Rocket,
    desc: "Technical coordination, vendor sourcing advisory, and step-by-step project planning from initial concept to operational launch.",
    desc_or: "ପରିକଳ୍ପନାରୁ ସ୍ଥାପନା ପର୍ଯ୍ୟନ୍ତ ବୈଷୟିକ ସମନ୍ୱୟ, ମେସିନ୍ ଚୟନ ଓ କ୍ଷେତ୍ରସ୍ତରୀୟ ପରିଚାଳନା।",
    highlights: [
      ["Turnkey Advisory", "ଟର୍ଣ୍ଣକି ପରାମର୍ଶ"],
      ["Vendor Assessment", "ଭେଣ୍ଡର ପରୀକ୍ଷଣ"],
      ["Milestones Monitoring", "ସମୟସୂଚୀ ନିରୀକ୍ଷଣ"]
    ],
    accentColor: "#0D879F"
  }
];

const INDUSTRIES = [
  { name: "Agriculture", name_or: "କୃଷି", icon: Sprout },
  { name: "Fisheries", name_or: "ମତ୍ସ୍ୟଚାଷ", icon: Fish },
  { name: "Aquaculture", name_or: "ଜଳଚର ପାଳନ", icon: Compass },
  { name: "Dairy", name_or: "ଦୁଗ୍ଧ ଚାଷ", icon: ShieldCheck },
  { name: "Animal Husbandry", name_or: "ପଶୁସମ୍ପଦ", icon: ShieldCheck },
  { name: "Poultry", name_or: "କୁକୁଡ଼ା ପାଳନ", icon: Sparkles },
  { name: "Horticulture", name_or: "ଉଦ୍ୟାନ କୃଷି", icon: Flower2 },
  { name: "Mushroom", name_or: "ଛତୁ ଚାଷ", icon: Sparkles },
  { name: "Food Processing", name_or: "ଖାଦ୍ୟ ପ୍ରସଂସ୍କରଣ", icon: Utensils },
  { name: "Feed Manufacturing", name_or: "ଦାଣା ଉତ୍ପାଦନ", icon: Factory },
  { name: "Cold Storage", name_or: "କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍", icon: Snowflake },
  { name: "Warehousing", name_or: "ଶସ୍ୟ ଗୋଦାମ", icon: Package },
  { name: "Rural Infrastructure", name_or: "ଗ୍ରାମୀଣ ଭିତ୍ତିଭୂମି", icon: Building2 }
];

const LIFECYCLE_STEPS = [
  { step: "01", name: "Concept", desc: "Initial Blueprint & Vision" },
  { step: "02", name: "Feasibility", desc: "Site & Market Audit" },
  { step: "03", name: "Design", desc: "2D/3D Master Layouts" },
  { step: "04", name: "Estimation", desc: "Civil & BOQ Costing" },
  { step: "05", name: "DPR", desc: "Bank-Ready DPR Prep" },
  { step: "06", name: "Finance", desc: "Loan & DSCR Structuring" },
  { step: "07", name: "Scheme Support", desc: "Subsidy Sanctioning" },
  { step: "08", name: "Implementation", desc: "Turnkey On-Ground Launch" }
];

export function AttractiveConsultingSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const { language } = useTranslation();
  const isOr = language === "or";

  return (
    <section className="py-24 bg-theme-base text-theme-text relative border-b border-theme-border overflow-hidden transition-colors duration-500">
      {/* Background Ambient Gradient & Grid Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#40916C_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-transparent to-forest-950/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel text-xs font-bold uppercase tracking-widest text-theme-gold font-display shadow-lg">
            <Cpu className="w-3.5 h-3.5 text-harvest-400 animate-pulse" />
            <span>{isOr ? "ପ୍ରକଳ୍ପ ପରାମର୍ଶ କ୍ଷମତା" : "PROJECT CONSULTANCY EXCELLENCE"}</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-theme-text tracking-tight leading-[1.08] text-balance">
            {isOr ? "ଆମର ମୁଖ୍ୟ ସେବାଗୁଡ଼ିକ" : "Our Core Services"}
          </h2>

          <p className="text-theme-text-muted text-sm sm:text-base leading-relaxed font-normal max-w-prose-custom mx-auto">
            {isOr
              ? "ଆମେ ବୈଷୟିକ ଜ୍ଞାନ, ପ୍ରକଳ୍ପ ଯୋଜନା, ଇଞ୍ଜିନିୟରିଂ ଆକଳନ ଓ ଆର୍ଥିକ ବିଶ୍ଳେଷଣକୁ ଏକତ୍ରିତ କରି ବ୍ୟାଙ୍କଯୋଗ୍ୟ ଓ ସୁସ୍ଥିର ପ୍ରକଳ୍ପ ଗଠନ କରୁ।"
              : "We combine technical knowledge, project planning, engineering estimation, and financial analysis to develop practical, bankable, and investment-ready projects."}
          </p>
        </div>

        {/* 01. CORE SERVICES GRID (6 Featured Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group p-6 rounded-3xl glass-panel border border-theme-border hover:border-harvest-400/60 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background Accent Pill */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-2xl pointer-events-none transition-transform group-hover:scale-150"
                  style={{ backgroundColor: service.accentColor }}
                />

                <div className="space-y-4">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-theme-gold px-2.5 py-1 rounded-lg bg-forest-950/80 border border-forest-800">
                      {service.num}
                    </span>
                    <div
                      className="p-3 rounded-2xl bg-forest-950 border border-forest-800 shadow-md group-hover:scale-110 transition-transform"
                      style={{ color: service.accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-xl text-theme-text group-hover:text-harvest-400 transition-colors">
                      {isOr ? service.title_or : service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-theme-text-muted leading-relaxed font-normal">
                      {isOr ? service.desc_or : service.desc}
                    </p>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="pt-2 border-t border-theme-border/60 space-y-1.5">
                    {service.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-theme-text font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-harvest-400 shrink-0" />
                        <span>{isOr ? hl[1] : hl[0]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Redirect Action Button */}
                <div className="pt-6">
                  <Link
                    href="/start-project"
                    className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-harvest-400 group-hover:text-sand-50 transition-colors"
                  >
                    <span>{isOr ? "ପ୍ରକଳ୍ପ ଆରମ୍ଭ କରନ୍ତୁ" : "Consult On This Service"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 02. INTERACTIVE PROCESS LIFECYCLE TRACK (Concept → Implementation) */}
        <div className="p-8 rounded-3xl glass-panel border border-theme-border shadow-2xl space-y-8 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-theme-gold uppercase tracking-widest block">
              END-TO-END METHODOLOGY
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-theme-text">
              {isOr ? "ପ୍ରକଳ୍ପ ଜୀବନଚକ୍ର — ପରିକଳ୍ପନାରୁ ସ୍ଥାପନା" : "Project Lifecycle Track"}
            </h3>
            <p className="text-xs sm:text-sm text-theme-text-muted">
              Concept → Feasibility → Design → Estimation → DPR → Finance → Scheme Support → Implementation
            </p>
          </div>

          {/* Step Pill Buttons Track */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {LIFECYCLE_STEPS.map((st, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={st.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-2xl border transition-all text-center flex flex-col items-center gap-1 relative ${
                    isActive
                      ? "bg-forest-900 border-harvest-400 text-sand-50 shadow-xl scale-105"
                      : "glass-card hover:border-theme-border/80 text-theme-text-muted"
                  }`}
                >
                  <span className="font-mono text-[10px] font-bold text-theme-gold">{st.step}</span>
                  <span className="font-display font-extrabold text-xs text-theme-text">{st.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-forest-950 border border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-forest-900 border border-harvest-400/50 font-mono font-extrabold text-lg text-harvest-400 flex items-center justify-center shrink-0">
                  {LIFECYCLE_STEPS[activeStep].step}
                </span>
                <div>
                  <h4 className="font-display font-extrabold text-lg text-sand-50">
                    STAGE {LIFECYCLE_STEPS[activeStep].step}: {LIFECYCLE_STEPS[activeStep].name.toUpperCase()}
                  </h4>
                  <p className="text-xs text-theme-text-muted font-normal">
                    {LIFECYCLE_STEPS[activeStep].desc}
                  </p>
                </div>
              </div>

              <Link
                href="/start-project"
                className="px-6 py-3 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg hover:bg-harvest-400 transition-all shrink-0 flex items-center gap-2"
              >
                <span>{isOr ? "ପରାମର୍ଶ ନିଅନ୍ତୁ" : "Get Started Now"}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 03. INDUSTRIES WE SERVE (13 Domain Pills Grid) */}
        <div className="space-y-6 text-center max-w-5xl mx-auto">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-theme-gold uppercase tracking-widest block">
              13 INTEGRATED SECTORS
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-theme-text">
              {isOr ? "ଆମେ ସେବା ପ୍ରଦାନ କରୁଥିବା ଶିଳ୍ପଗୁଡ଼ିକ" : "Industries We Serve"}
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {INDUSTRIES.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={idx}
                  className="px-4 py-2.5 rounded-2xl glass-card border border-theme-border hover:border-harvest-400 transition-all flex items-center gap-2.5 shadow-md hover:scale-105 cursor-default"
                >
                  <span className="p-1 rounded-lg bg-forest-950 text-harvest-400 border border-forest-800">
                    <IconComp className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-display font-bold text-xs text-theme-text uppercase tracking-wider">
                    {isOr ? ind.name_or : ind.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 04. WHY ODCONS PROJECTS? (Value Proposition Card) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-forest-950 via-forest-900 to-aqua-950 border border-forest-700/60 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-forest-700 text-xs font-mono text-harvest-400 font-bold uppercase">
              <Award className="w-3.5 h-3.5 text-harvest-400" />
              <span>THE ODCONS ADVANTAGE</span>
            </div>

            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-sand-50">
              Why ODCONS PROJECTS?
            </h3>

            <p className="text-sand-200/90 text-sm sm:text-base leading-relaxed font-normal">
              {isOr
                ? "ଆମେ ବୈଷୟିକ ଜ୍ଞାନ, ପ୍ରକଳ୍ପ ଯୋଜନା, ଇଞ୍ଜିନିୟରିଂ ଆକଳନ ଓ ଆର୍ଥିକ ବିଶ୍ଳେଷଣକୁ ଏକତ୍ରିତ କରି ବ୍ୟବହାରିକ, ବ୍ୟାଙ୍କଯୋଗ୍ୟ ଓ ସୁସ୍ଥିର ପ୍ରକଳ୍ପ ଗଠନ କରୁ।"
                : "We combine technical knowledge, project planning, engineering estimation, and financial analysis to develop practical, bankable, and investment-ready projects."}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-sand-100">
              <div className="p-3 rounded-xl bg-forest-950/80 border border-forest-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Bank Approval Rate</span>
              </div>
              <div className="p-3 rounded-xl bg-forest-950/80 border border-forest-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>State & Central Subsidies</span>
              </div>
              <div className="p-3 rounded-xl bg-forest-950/80 border border-forest-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Turnkey On-Field Handholding</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right">
            <Link
              href="/start-project"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-forest-500 via-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 transition-all"
            >
              <span>{isOr ? "ପ୍ରକଳ୍ପ ଆରମ୍ଭ କରନ୍ତୁ" : "START YOUR PROJECT NOW"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
