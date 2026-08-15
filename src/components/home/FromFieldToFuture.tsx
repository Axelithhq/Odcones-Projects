"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Smartphone, Activity, Droplets, Sprout, Fish, Flower2, Layers, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { pickOr } from "@/lib/localize";

type SectorType = "agriculture" | "fisheries" | "aquaculture" | "horticulture";
type L10nString = [string, string];

interface SectorVisual {
  id: SectorType;
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
    title: ["AGRICULTURE", "କୃଷି"],
    subtitle: ["From Paddy Cultivation to Yield Optimization", "ଧାନ ଚାଷରୁ ଫସଲ ଉତ୍ପାଦନ ଅପ୍ଟିମାଇଜେସନ ପର୍ଯ୍ୟନ୍ତ"],
    heroObject: ["Indian Paddy Farmer & Smart Seeder", "ଭାରତୀୟ ଧାନ ଚାଷୀ ଓ ସ୍ମାର୍ଟ ସିଡର"],
    bgImage: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1600",
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
    title: ["FISHERIES", "ମତ୍ସ୍ୟ"],
    subtitle: ["Supporting Aquatic Livelihoods & Natural Water Bodies", "ଜଳଚର ଜୀବିକା ଓ ପ୍ରାକୃତିକ ଜଳାଶୟକୁ ସମର୍ଥନ"],
    heroObject: ["Inland Fishermen Boat & Cast Net", "ଅନ୍ତଃସ୍ଥଳୀୟ ମତ୍ସ୍ୟଜୀବୀ ଡଙ୍ଗା ଓ ଜାଲ"],
    bgImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1600",
    accentColor: "#006680",
    badgeBg: "rgba(0, 102, 128, 0.2)",
    operatorRole: ["Cooperative Fisherman (Hirakud)", "ସମବାୟ ମତ୍ସ୍ୟଜୀବୀ (ହିରାକୁଦ)"],
    foregroundItems: [
      ["Hand-Woven Nets", "ହାତବୁଣା ଜାଲ"],
      ["Slurry Ice Crates", "ସ୍ଲରି ବରଫ ବାକ୍ସ"],
      ["Boat Oars", "ଡଙ୍ଗା ଦଣ୍ଡା"]
    ],
    telemetry: {
      soilOrWater: ["Water Body: Reservoir Backwaters", "ଜଳାଶୟ: ଜଳାଶୟର ପଛପଟ ଜଳଭାଗ"],
      stageOrSpecies: ["Species: Indian Major Carps", "ଜାତି: ଭାରତୀୟ ପ୍ରମୁଖ କାର୍ପ ମାଛ"],
      temp: ["Water Temp: 26.2°C", "ଜଳ ତାପମାତ୍ରା: ୨୬.୨°ସେ"],
      status: ["Harvest Status: Active Netting", "ଫସଲ ସ୍ଥିତି: ସକ୍ରିୟ ଜାଲ ଚଳାଇବା"]
    }
  },
  aquaculture: {
    id: "aquaculture",
    title: ["AQUACULTURE", "ଜଳଚର ଚାଷ"],
    subtitle: ["High-Density Biofloc & Floating Cage Production", "ଉଚ୍ଚ ଘନତ୍ୱ ବାୟୋଫ୍ଲୋକ୍ ଓ ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍ ଉତ୍ପାଦନ"],
    heroObject: ["Biofloc Tank & Microbubble Aerator", "ବାୟୋଫ୍ଲୋକ୍ ଟାଙ୍କି ଓ ମାଇକ୍ରୋବବଲ ଏରେଟର"],
    bgImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1600",
    accentColor: "#149ECA",
    badgeBg: "rgba(20, 158, 202, 0.2)",
    operatorRole: ["Biofloc Tech Operator (Bhadrak)", "ବାୟୋଫ୍ଲୋକ୍ ଟେକ୍ ଚାଳକ (ଭଦ୍ରକ)"],
    foregroundItems: [
      ["Paddlewheel Aerator", "ପାଡଲ୍ୱ୍ହିଲ ଏରେଟର"],
      ["Dissolved Oxygen Probe", "ଦ୍ରବୀଭୂତ ଅମ୍ଳଜାନ ପ୍ରୋବ"],
      ["Floating Feed Trays", "ଫ୍ଲୋଟିଙ୍ଗ ଖାଦ୍ୟ ଟ୍ରେ"]
    ],
    telemetry: {
      soilOrWater: ["Dissolved Oxygen: 6.85 mg/L", "ଦ୍ରବୀଭୂତ ଅମ୍ଳଜାନ: ୬.୮୫ ମି.ଗ୍ରା./ଲି"],
      stageOrSpecies: ["Biofloc Density: 35 kg/m³", "ବାୟୋଫ୍ଲୋକ୍ ଘନତା: ୩୫ କି.ଗ୍ରା./ମି³"],
      temp: ["Water Temp: 28.1°C", "ଜଳ ତାପମାତ୍ରା: ୨୮.୧°ସେ"],
      status: ["Telemetry Status: Aerators Active", "ଟେଲିମେଟ୍ରି ସ୍ଥିତି: ଏରେଟର ସକ୍ରିୟ"]
    }
  },
  horticulture: {
    id: "horticulture",
    title: ["HORTICULTURE", "ଉଦ୍ୟାନ କୃଷି"],
    subtitle: ["Naturally Ventilated Polyhouse Climate Control", "ପ୍ରାକୃତିକ ବାୟୁ ଚଳାଚଳ ସହ ପଲିହାଉସ ଜଳବାୟୁ ନିୟନ୍ତ୍ରଣ"],
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
  }
};

export function FromFieldToFuture() {
  const [activeSector, setActiveSector] = useState<SectorType>("agriculture");
  const { t, language } = useTranslation();
  const pick = (pair: L10nString) => pickOr(pair[0], pair[1], language);
  const comp = SECTOR_COMPOSITIONS[activeSector];

  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative border-b border-forest-800/40 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t("fromField.badge")}</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-sand-50 tracking-tight leading-[1.05]">
            {t("fromField.title1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-harvest-300 via-forest-300 to-aqua-400">
              {t("fromField.title2")}
            </span>
          </h2>

          <p className="text-sand-200/80 text-sm sm:text-base leading-relaxed font-light">
            {t("fromField.subtitle")}
          </p>

          {/* Interactive Sector Switcher Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pt-4 pb-2 scrollbar-none">
            {(Object.keys(SECTOR_COMPOSITIONS) as SectorType[]).map((secKey) => {
              const sec = SECTOR_COMPOSITIONS[secKey];
              const isSelected = activeSector === secKey;
              return (
                <button
                  key={secKey}
                  onClick={() => setActiveSector(secKey)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 border ${
                    isSelected
                      ? "bg-forest-800 text-sand-50 border-harvest-400 shadow-xl scale-105"
                      : "bg-forest-900/50 text-sand-200/70 border-forest-800 hover:text-sand-50 hover:bg-forest-800/50"
                  }`}
                  style={isSelected ? { borderColor: sec.accentColor } : {}}
                  data-cursor-text="SECTOR"
                >
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-forest-900/50 border border-forest-700/40 backdrop-blur-xl shadow-2xl relative"
          >
            {/* Left 7 Cols: Layered 3D Scene */}
            <div className="lg:col-span-7 h-[460px] rounded-2xl overflow-hidden relative group border border-forest-700/50 shadow-2xl">
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
                <div className="px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md border border-forest-700/50 text-[11px] font-bold text-forest-300">
                  📍 {pick(comp.operatorRole)}
                </div>
              </div>

              {/* Layer 5: Floating Rugged Device Mockup (Right Side Overlay) */}
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
                  <div className="p-2 rounded-lg bg-forest-900/60 border border-forest-800 font-mono font-semibold text-sand-50">
                    {pick(comp.telemetry.soilOrWater)}
                  </div>
                  <div className="p-2 rounded-lg bg-forest-900/60 border border-forest-800 font-mono font-semibold text-harvest-300">
                    {pick(comp.telemetry.stageOrSpecies)}
                  </div>
                  <div className="p-2 rounded-lg bg-forest-900/60 border border-forest-800 font-mono font-semibold text-aqua-400">
                    {pick(comp.telemetry.temp)}
                  </div>
                </div>

                <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{pick(comp.telemetry.status)}</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Operational Story & Sector Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span
                  className="text-xs font-bold uppercase tracking-widest font-display"
                  style={{ color: comp.accentColor }}
                >
                  {t("fromField.sectorSpec")}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-sand-50 uppercase">
                  {pick(comp.subtitle)}
                </h3>
              </div>

              <div className="p-5 rounded-2xl bg-forest-950/80 border border-forest-800 space-y-3">
                <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-wider font-display">
                  {t("fromField.heroObject")}:
                </span>
                <p className="font-display font-bold text-sm text-sand-50">{pick(comp.heroObject)}</p>
                <div className="space-y-1.5 pt-1">
                  {comp.foregroundItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-sand-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-forest-300" />
                      <span>{pick(item)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Pipeline Flow Banner */}
              <div className="p-4 rounded-xl bg-forest-900/40 border border-forest-700/30 text-xs text-sand-200/80 space-y-1">
                <strong className="text-sand-50 uppercase text-[10px] tracking-wider block font-display">
                  {t("fromField.dataPipeline")}
                </strong>
                <p className="font-mono text-[11px] text-harvest-300">
                  {t("fromField.pipelineText")}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
