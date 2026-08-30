"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Smartphone, Activity, Droplets, Sprout, Fish, Flower2, Layers, ArrowRight, ShieldCheck, CheckCircle2, Utensils, Snowflake, Building2, Factory } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { pickOr } from "@/lib/localize";
import Link from "next/link";

type SectorType = "agriculture" | "fisheries" | "dairy" | "horticulture" | "food-processing" | "cold-chain" | "rural-infrastructure" | "msme-projects";
type L10nString = [string, string];

interface SectorVisual {
  id: SectorType;
  slug: string;
  num: string;
  title: L10nString;
  subtitle: L10nString;
  heroObject: L10nString;
  bgImage: string;
  accentColor: string;
  badgeBg: string;
  operatorRole: L10nString;
  foregroundItems: L10nString[];
  telemetry: {
    soilOrWater: L10nString;
    stageOrSpecies: L10nString;
    temp: L10nString;
    status: L10nString;
  };
}

const SECTOR_COMPOSITIONS: Record<SectorType, SectorVisual> = {
  agriculture: {
    id: "agriculture",
    slug: "agriculture",
    num: "01",
    title: ["AGRICULTURE", "କୃଷି"],
    subtitle: ["From Soil to Harvest, Precision Crop Systems", "ମାଟିରୁ ଅମଳ ପର୍ଯ୍ୟନ୍ତ, ସୁସ୍ଥିର ଓ ଉଚ୍ଚ ଉତ୍ପାଦନକ୍ଷମ କୃଷି ବ୍ୟବସ୍ଥା"],
    heroObject: ["Paddy Farmer & Direct Seeder Gear", "ଧାନ ଚାଷୀ ଓ ସ୍ମାର୍ଟ ସିଡର"],
    bgImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1600",
    accentColor: "#40916C",
    badgeBg: "rgba(64, 145, 108, 0.2)",
    operatorRole: ["Paddy Farmer (Bargarh, Odisha)", "ଧାନ ଚାଷୀ (ବରଗଡ଼, ଓଡ଼ିଶା)"],
    foregroundItems: [
      ["Rice Seedlings", "ଧାନ ଚାରା"],
      ["Direct Seeder Gear", "ପ୍ରତ୍ୟକ୍ଷ ବୁଣାଣ ଯନ୍ତ୍ର"],
      ["Sub-surface Drip Line", "ଭୂତଳ ଡ୍ରିପ୍ ଲାଇନ"]
    ],
    telemetry: {
      soilOrWater: ["Soil Moisture: 68%", "ମୃତ୍ତିକା ଆର୍ଦ୍ରତା: ୬୮%"],
      stageOrSpecies: ["Crop Stage: Vegetative DSR", "ଫସଲ ପର୍ଯ୍ୟାୟ: ବୃଦ୍ଧିଶୀଳ ଡିଏସଆର"],
      temp: ["Ambient Temp: 28.4°C", "ପରିବେଶ ତାପମାତ୍ରା: ୨୮.୪°ସେ"],
      status: ["Field Status: Optimal Growth", "କ୍ଷେତ୍ର ସ୍ଥିତି: ଉତ୍ତମ ବୃଦ୍ଧି"]
    }
  },
  fisheries: {
    id: "fisheries",
    slug: "fisheries",
    num: "02",
    title: ["FISHERIES & AQUACULTURE", "ମତ୍ସ୍ୟଚାଷ ଓ ଜଳଚର ପାଳନ"],
    subtitle: ["Biofloc Tanks & Floating Reservoir Cages", "ବାୟୋଫ୍ଲୋକ୍ ଟାଙ୍କି, HDPE କେଜ୍ ଓ ସ୍ମାର୍ଟ ଜଳଚର ପାଳନ"],
    heroObject: ["Biofloc Tank & Microbubble Aerator", "ବାୟୋଫ୍ଲୋକ୍ ଟାଙ୍କି ଓ ମାଇକ୍ରୋବବଲ ଏରେଟର"],
    bgImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1600",
    accentColor: "#006680",
    badgeBg: "rgba(0, 102, 128, 0.2)",
    operatorRole: ["Fisheries Tech Operator (Hirakud)", "ମତ୍ସ୍ୟ ଚାଳକ (ହିରାକୁଦ)"],
    foregroundItems: [
      ["HDPE Floating Cage Netting", "HDPE ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍"],
      ["Dissolved Oxygen Probe", "ଦ୍ରବୀଭୂତ ଅମ୍ଳଜାନ ପ୍ରୋବ"],
      ["Slurry Ice Crate", "ସ୍ଲରି ବରଫ ବାକ୍ସ"]
    ],
    telemetry: {
      soilOrWater: ["Dissolved Oxygen: 6.85 mg/L", "ଦ୍ରବୀଭୂତ ଅମ୍ଳଜାନ: ୬.୮୫ ମି.ଗ୍ରା./ଲି"],
      stageOrSpecies: ["Species: Pangasius & IMC", "ଜାତି: ପାଙ୍ଗାସିୟସ୍ ଓ କାର୍ପ"],
      temp: ["Water Temp: 26.2°C", "ଜଳ ତାପମାତ୍ରା: ୨୬.୨°ସେ"],
      status: ["Telemetry Status: Aerators Active", "ଟେଲିମେଟ୍ରି ସ୍ଥିତି: ଏରେଟର ସକ୍ରିୟ"]
    }
  },
  dairy: {
    id: "dairy",
    slug: "dairy",
    num: "03",
    title: ["DAIRY & ANIMAL HUSBANDRY", "ଦୁଗ୍ଧ ଓ ପଶୁସମ୍ପଦ"],
    subtitle: ["Smart Dairy Hubs & Hydroponic Fodder Trays", "ସ୍ମାର୍ଟ ଦୁଗ୍ଧ ସଂଗ୍ରହ କେନ୍ଦ୍ର, ଗୋପାଳନ, କୁକୁଡ଼ା ପାଳନ ଓ ଘାସ"],
    heroObject: ["Cattle Shed & Bulk Milk Chiller", "ଆଧୁନିକ ଗୋଶାଳା ଓ ବଲ୍କ ମିଲ୍କ ଚିଲର"],
    bgImage: "https://images.unsplash.com/photo-1570042707220-410a563f8d9b?auto=format&fit=crop&q=80&w=1600",
    accentColor: "#D4A373",
    badgeBg: "rgba(212, 163, 115, 0.2)",
    operatorRole: ["Dairy Farm Manager (Puri)", "ଦୁଗ୍ଧ ଫାର୍ମ ମ୍ୟାନେଜର (ପୁରୀ)"],
    foregroundItems: [
      ["Automated Milking Claw", "ସ୍ୱୟଂଚାଳିତ ଦୋହନ କ୍ଲ"],
      ["Hydroponic Fodder Trays", "ହାଇଡ୍ରୋପୋନିକ୍ ଘାସ ଟ୍ରେ"],
      ["RFID Tag Scanner", "RFID ଟ୍ୟାଗ୍ ସ୍କାନର"]
    ],
    telemetry: {
      soilOrWater: ["Milk Chilling Temp: 4.0°C", "ଦୁଗ୍ଧ ଚିଲିଂ ତାପମାତ୍ରା: ୪.୦°ସେ"],
      stageOrSpecies: ["Herd Health: 100% Vaccinated", "ପଶୁ ସ୍ୱାସ୍ଥ୍ୟ: ୧୦୦% ଟିକାକରଣ"],
      temp: ["Ambient Temp: 27.0°C", "ପରିବେଶ ତାପମାତ୍ରା: ୨୭.୦°ସେ"],
      status: ["Chiller Status: BMC Active", "ଚିଲର ସ୍ଥିତି: BMC ସକ୍ରିୟ"]
    }
  },
  horticulture: {
    id: "horticulture",
    slug: "horticulture",
    num: "04",
    title: ["HORTICULTURE", "ଉଦ୍ୟାନ କୃଷି"],
    subtitle: ["Hi-Tech Polyhouses & Controlled Climate Farming", "ସଂରକ୍ଷିତ ପଲିହାଉସ, ସେଡନେଟ୍ ନର୍ସରୀ, ପନିପରିବା ଓ ଛତୁ ଚାଷ"],
    heroObject: ["Polyhouse Grower & Drip Manifold", "ପଲିହାଉସ ଚାଷୀ ଓ ଡ୍ରିପ୍ ମାନିଫୋଲ୍ଡ"],
    bgImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1600",
    accentColor: "#52B788",
    badgeBg: "rgba(82, 183, 136, 0.2)",
    operatorRole: ["Greenhouse Grower (Koraput)", "ଗ୍ରୀନହାଉସ ଚାଷୀ (କୋରାପୁଟ)"],
    foregroundItems: [
      ["Yellow Capsicum Trays", "ହଳଦିଆ କ୍ୟାପ୍ସିକମ୍ ଟ୍ରେ"],
      ["Fertigation Manifold", "ଫର୍ଟିଗେସନ ମାନିଫୋଲ୍ଡ"],
      ["UV Polyfilm", "ୟୁଭି ପଲିଫିଲ୍ମ"]
    ],
    telemetry: {
      soilOrWater: ["Soil EC: 1.4 dS/m", "ମୃତ୍ତିକା ଇସି: ୧.୪ ଡିଏସ/ମି"],
      stageOrSpecies: ["Crop: Dutch Yellow Capsicum", "ଫସଲ: ଡଚ୍ ହଳଦିଆ କ୍ୟାପ୍ସିକମ୍"],
      temp: ["Polyhouse Temp: 26.5°C", "ପଲିହାଉସ ତାପମାତ୍ରା: ୨୬.୫°ସେ"],
      status: ["Irrigation Status: Drip Active", "ସିଞ୍ଚନ ସ୍ଥିତି: ଡ୍ରିପ୍ ସକ୍ରିୟ"]
    }
  },
  "food-processing": {
    id: "food-processing",
    slug: "food-processing",
    num: "05",
    title: ["FOOD PROCESSING", "ଖାଦ୍ୟ ପ୍ରସଂସ୍କରଣ"],
    subtitle: ["Primary & Secondary Agro-Processing Enterprises", "ଅମଳ ପରବର୍ତ୍ତୀ କ୍ଷତି ରୋକିବା ପାଇଁ ଆଗ୍ରୋ-ପ୍ରସେସିଂ ଓ ମୂଲ୍ୟ ବୃଦ୍ଧି"],
    heroObject: ["Color Sorter & Rice Mill Complex", "କଲର ସର୍ଟର ଓ ଧାନ ମିଲ୍ କମ୍ପ୍ଲେକ୍ସ"],
    bgImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1600",
    accentColor: "#E9C46A",
    badgeBg: "rgba(233, 196, 106, 0.2)",
    operatorRole: ["Mill Plant Engineer (Sambalpur)", "ମିଲ୍ ପ୍ଲାଣ୍ଟ ଇଞ୍ଜିନିୟର (ସମ୍ବଲପୁର)"],
    foregroundItems: [
      ["Optical Color Sorter", "ଅପ୍ଟିକାଲ କଲର ସର୍ଟର"],
      ["Pneumatic Packaging Line", "ନିଉମାଟିକ୍ ପ୍ୟାକେଜିଂ ଲାଇନ୍"],
      ["FSSAI Quality Lab", "FSSAI ଗୁଣବତ୍ତା ଲ୍ୟାବ୍"]
    ],
    telemetry: {
      soilOrWater: ["Moisture Content: 12.5%", "ଆଦ୍ରତା ମାତ୍ରା: ୧୨.୫%"],
      stageOrSpecies: ["Throughput: 8.5 MT/Hr", "ପ୍ରସେସିଂ କ୍ଷମତା: ୮.୫ MT/ଘଣ୍ଟା"],
      temp: ["Dryer Temp: 45°C", "ଡ୍ରାୟର ତାପମାତ୍ରା: ୪୫°ସେ"],
      status: ["Plant Status: Processing Active", "ପ୍ଲାଣ୍ଟ ସ୍ଥିତି: ପ୍ରସେସିଂ ସକ୍ରିୟ"]
    }
  },
  "cold-chain": {
    id: "cold-chain",
    slug: "cold-chain",
    num: "06",
    title: ["COLD CHAIN & STORAGE", "କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍ ଓ କୋଲ୍ଡ-ଚେନ୍"],
    subtitle: ["PUF Panel Cold Rooms & Reefer Logistics", "ତାପମାତ୍ରା ନିୟନ୍ତ୍ରିତ ଷ୍ଟୋରେଜ୍ ଓ ଶୀତଳ ଭଣ୍ଡାର ମାଧ୍ୟମରେ ଫସଲ ସୁରକ୍ଷା"],
    heroObject: ["Multi-Chamber Cold Room & Reefer Van", "କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍ ଓ ରିଫର ଭ୍ୟାନ୍"],
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    accentColor: "#0D879F",
    badgeBg: "rgba(13, 135, 159, 0.2)",
    operatorRole: ["Cold Chain Supervisor (Cuttack)", "କୋଲ୍ଡ ଚେନ୍ ସୁପରଭାଇଜର (କଟକ)"],
    foregroundItems: [
      ["PUF Insulated Panel", "PUF ଇନସୁଲେଟେଡ୍ ପ୍ୟାନେଲ୍"],
      ["Screw Compressor Rack", "ସ୍କ୍ରୁ କମ୍ପ୍ରେସର ରାକ୍"],
      ["Refrigerated Reefer Van", "ରିଫ୍ରିଜେରେଟେଡ୍ ରିଫର ଭ୍ୟାନ୍"]
    ],
    telemetry: {
      soilOrWater: ["Chamber Temp: 2.5°C", "ଚାମ୍ବର ତାପମାତ୍ରା: ୨.୫°ସେ"],
      stageOrSpecies: ["Relative Humidity: 92%", "ଆପେକ୍ଷିକ ଆର୍ଦ୍ରତା: ୯୨%"],
      temp: ["Reefer Van Temp: 4.0°C", "ରିଫର ଭ୍ୟାନ୍ ତାପମାତ୍ରା: ୪.୦°ସେ"],
      status: ["Thermal Status: Multi-Zone Locked", "ଥର୍ମାଲ ସ୍ଥିତି: ନିୟନ୍ତ୍ରିତ"]
    }
  },
  "rural-infrastructure": {
    id: "rural-infrastructure",
    slug: "rural-infrastructure",
    num: "07",
    title: ["RURAL INFRASTRUCTURE", "ଗ୍ରାମୀଣ ଭିତ୍ତିଭୂମି"],
    subtitle: ["Watershed Check Dams & Grain Warehouses", "ଚେକ୍ ଡ୍ୟାମ୍, ଫାର୍ମ ପୋଣ୍ଡ, ଗ୍ରାମୀଣ ରାସ୍ତା ଓ ଶସ୍ୟ ଗୋଦାମ"],
    heroObject: ["RCC Check Dam & Solar Water Pump", "RCC ଚେକ୍ ଡ୍ୟାମ୍ ଓ ସୌର ୱାଟର ପମ୍ପ"],
    bgImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1600",
    accentColor: "#0A3A40",
    badgeBg: "rgba(10, 58, 64, 0.2)",
    operatorRole: ["Civil Engineer (Kalahandi)", "ସିଭିଲ୍ ଇଞ୍ଜିନିୟର (କଳାହାଣ୍ଡି)"],
    foregroundItems: [
      ["Masonry Check Dam", "ମେସନରୀ ଚେକ୍ ଡ୍ୟାମ୍"],
      ["Solar Micro-Pump", "ସୌର ମାଇକ୍ରୋ-ପମ୍ପ"],
      ["AIF Scientific Godown", "AIF ବୈଜ୍ଞାନିକ ଗୋଦାମ"]
    ],
    telemetry: {
      soilOrWater: ["Water Retention: 42,000 m³", "ଜଳ ଧାରଣ କ୍ଷମତା: ୪୨,୦୦୦ ମି³"],
      stageOrSpecies: ["Structure: RCC Check Dam", "ସଂରଚନା: RCC ଚେକ୍ ଡ୍ୟାମ୍"],
      temp: ["Groundwater Recharge: +3.2m", "ଭୂତଳ ଜଳ ବୃଦ୍ଧି: +୩.୨ମି"],
      status: ["Civil Status: Structure Sealed", "ସିଭିଲ୍ ସ୍ଥିତି: ସଂରଚନା ସୁରକ୍ଷିତ"]
    }
  },
  "msme-projects": {
    id: "msme-projects",
    slug: "msme-projects",
    num: "08",
    title: ["ALLIED MSME PROJECTS", "ଆନୁଷଙ୍ଗିକ MSME ପ୍ରକଳ୍ପ"],
    subtitle: ["Micro-Enterprise Incubators & PM-FME Units", "ଗ୍ରାମୀଣ ଉଦ୍ୟୋଗୀମାନଙ୍କ ପାଇଁ MSME, PMEGP, MKUY ଓ PM-FME ପ୍ରକଳ୍ପ"],
    heroObject: ["Custom Hiring Center & Feed Extruder", "କୃଷି ଯନ୍ତ୍ରପାତି କେନ୍ଦ୍ର ଓ ଦାଣା ପ୍ରସେସିଂ"],
    bgImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1600",
    accentColor: "#246C41",
    badgeBg: "rgba(36, 108, 65, 0.2)",
    operatorRole: ["MSME Entrepreneur (Balasore)", "MSME ଉଦ୍ୟୋଗୀ (ବାଲେଶ୍ୱର)"],
    foregroundItems: [
      ["Extruder Feed Mill", "ଏକ୍ସଟ୍ରୁଡର ଦାଣା ମିଲ୍"],
      ["CHC Tractor & Harvester", "CHC ଟ୍ରାକ୍ଟର ଓ ହାର୍ଭେଷ୍ଟର"],
      ["Biomass Pellet Press", "ବାୟୋମାସ ପେଲେଟ୍ ପ୍ରେସ୍"]
    ],
    telemetry: {
      soilOrWater: ["Bank Loan Approved: 100%", "ବ୍ୟାଙ୍କ ଋଣ ମଞ୍ଜୁରୀ: ୧୦୦%"],
      stageOrSpecies: ["Scheme: PM-FME & MKUY", "ଯୋଜନା: PM-FME ଓ MKUY"],
      temp: ["DSCR Ratio: 1.85", "DSCR ଅନୁପାତ: ୧.୮୫"],
      status: ["MSME Status: Operational Unit", "MSME ସ୍ଥିତି: ସକ୍ରିୟ ୟୁନିଟ୍"]
    }
  }
};

export function FromFieldToFuture() {
  const [activeSector, setActiveSector] = useState<SectorType>("agriculture");
  const { t, language } = useTranslation();
  const pick = (pair: L10nString) => pickOr(pair[0], pair[1], language);
  const comp = SECTOR_COMPOSITIONS[activeSector];

  return (
    <section className="py-24 bg-theme-base text-theme-text relative border-b border-theme-border overflow-hidden transition-colors duration-500">
      {/* Dynamic Ambient Background Glow */}
      <div
        className="absolute inset-0 opacity-15 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${comp.accentColor} 0%, transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-bold uppercase tracking-widest text-theme-gold font-display">
            <Cpu className="w-3.5 h-3.5 text-theme-gold" />
            <span>{t("fromField.badge")}</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-theme-text tracking-tight leading-[1.08] text-balance">
            {t("fromField.title1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-harvest-400 via-forest-400 to-aqua-400">
              {t("fromField.title2")}
            </span>
          </h2>

          <p className="text-theme-text-muted text-sm sm:text-base leading-relaxed font-normal max-w-prose-custom mx-auto">
            {t("fromField.subtitle")}
          </p>

          {/* Interactive Sector Switcher Slide Buttons (8 Core Domains) */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pt-4 pb-2 scrollbar-none">
            {(Object.keys(SECTOR_COMPOSITIONS) as SectorType[]).map((secKey) => {
              const sec = SECTOR_COMPOSITIONS[secKey];
              const isSelected = activeSector === secKey;
              return (
                <button
                  key={secKey}
                  onClick={() => setActiveSector(secKey)}
                  className={`px-4 py-2 rounded-full text-xs font-display font-bold tracking-wider uppercase transition-all flex items-center gap-2 border whitespace-nowrap ${
                    isSelected
                      ? "bg-forest-900 text-sand-50 border-harvest-400 shadow-xl scale-105"
                      : "glass-card hover:border-theme-border/80"
                  }`}
                  style={isSelected ? { borderColor: sec.accentColor } : {}}
                  data-cursor-text="SECTOR"
                >
                  <span className="font-mono text-[10px] text-theme-gold">{sec.num}</span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: sec.accentColor }}
                  />
                  <span>{pick(sec.title)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Multi-Layered Photorealistic Composition Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={comp.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl glass-panel relative shadow-2xl"
          >
            {/* Left 7 Cols: Layered 3D Scene */}
            <div className="lg:col-span-7 h-[460px] rounded-2xl overflow-hidden relative group border border-theme-border shadow-2xl">
              {/* Layer 1: Background Landscape */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${comp.bgImage})` }}
              />

              {/* Layer 2: Atmospheric Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent opacity-85" />

              {/* Layer 3: Dynamic Data Particle Streams */}
              <div className="absolute inset-0 bg-[radial-gradient(#52B788_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

              {/* Layer 4: Floating Telemetry Badges */}
              <div className="absolute top-6 left-6 space-y-2 z-10">
                <div
                  className="px-3 py-1 rounded-full backdrop-blur-md border text-xs font-bold text-sand-50 uppercase tracking-widest font-display"
                  style={{ backgroundColor: comp.badgeBg, borderColor: comp.accentColor }}
                >
                  {t("fromField.heroDomain")}: {pick(comp.title)}
                </div>
                <div className="px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md border border-forest-700/50 text-[11px] font-bold text-harvest-400">
                  📍 {pick(comp.operatorRole)}
                </div>
              </div>

              {/* Layer 5: Floating Device Mockup (Right Side Overlay) */}
              <div className="absolute bottom-6 right-6 max-w-xs p-5 rounded-2xl bg-forest-950/90 backdrop-blur-xl border border-forest-700/60 shadow-2xl space-y-3 z-20">
                <div className="flex items-center justify-between border-b border-forest-800 pb-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-harvest-400" />
                    <span className="text-[10px] font-bold tracking-widest text-sand-100 uppercase font-display">
                      {t("fromField.telemetry")}
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-forest-900/80 border border-forest-800 font-mono font-semibold text-sand-50">
                    {pick(comp.telemetry.soilOrWater)}
                  </div>
                  <div className="p-2 rounded-lg bg-forest-900/80 border border-forest-800 font-mono font-semibold text-harvest-300">
                    {pick(comp.telemetry.stageOrSpecies)}
                  </div>
                  <div className="p-2 rounded-lg bg-forest-900/80 border border-forest-800 font-mono font-semibold text-aqua-400">
                    {pick(comp.telemetry.temp)}
                  </div>
                </div>

                <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{pick(comp.telemetry.status)}</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Operational Story & Direct Sector Redirect */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span
                  className="text-xs font-bold uppercase tracking-widest font-display"
                  style={{ color: comp.accentColor }}
                >
                  SECTOR DOMAIN {comp.num}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-theme-text uppercase text-balance">
                  {pick(comp.subtitle)}
                </h3>
              </div>

              <div className="p-5 rounded-2xl bg-theme-surface border border-theme-border space-y-3">
                <span className="text-[10px] font-bold text-theme-gold uppercase tracking-wider font-display">
                  KEY TECHNICAL INFRASTRUCTURE:
                </span>
                <p className="font-display font-bold text-sm text-theme-text">{pick(comp.heroObject)}</p>
                <div className="space-y-1.5 pt-1">
                  {comp.foregroundItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-theme-text font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-gold" />
                      <span>{pick(item)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide Button Redirect to Dynamic Sector Page */}
              <div className="pt-2">
                <Link
                  href={`/sectors/${comp.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest-900 text-sand-50 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-forest-800 hover:scale-[1.02] transition-all"
                >
                  <span>Explore {pick(comp.title)} Domain Specification</span>
                  <ArrowRight className="w-4 h-4 text-harvest-400" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
