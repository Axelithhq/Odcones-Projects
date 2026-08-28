"use client";

import React, { useState } from "react";
import { Wrench, Smartphone, Droplets, Layers, Sprout, Navigation, BookOpen, Search, Info } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { pickOr } from "@/lib/localize";

type L10nString = [string, string];

interface KitItem {
  id: string;
  name: L10nString;
  category: L10nString;
  desc: L10nString;
  icon: React.ReactNode;
  image: string;
}

const FIELD_KIT_ITEMS: KitItem[] = [
  {
    id: "soil-vial",
    name: ["Soil Sample Testing Tube", "ମୃତ୍ତିକା ନମୁନା ପରୀକ୍ଷା ଟ୍ୟୁବ୍"],
    category: ["Soil Health", "ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟ"],
    desc: [
      "Collects core soil samples for organic carbon (SOC) analysis and nitrogen-phosphorus-potassium (NPK) profiling.",
      "ଜୈବିକ କାର୍ବନ (ଏସଓସି) ବିଶ୍ଳେଷଣ ଓ ନାଇଟ୍ରୋଜେନ-ଫସଫରସ-ପୋଟାସିୟମ (ଏନପିକେ) ମାପ ପାଇଁ ମୂଳ ମୃତ୍ତିକା ନମୁନା ସଂଗ୍ରହ କରେ।"
    ],
    icon: <Layers className="w-5 h-5 text-harvest-400" />,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "water-meter",
    name: ["Water Quality Telemetry Meter", "ଜଳ ଗୁଣବତ୍ତା ଟେଲିମେଟ୍ରି ମିଟର"],
    category: ["Aquaculture & Blue Economy", "ଜଳଚର ଚାଷ ଓ ବ୍ଲୁ ଇକୋନୋମି"],
    desc: [
      "Submersible probe measuring Dissolved Oxygen (DO), pH, temperature, and ammonia in Biofloc tanks and reservoir cages.",
      "ବାୟୋଫ୍ଲୋକ୍ ଟାଙ୍କି ଓ ଜଳାଶୟ କେଜ୍ ରେ ଦ୍ରବୀଭୂତ ଅମ୍ଳଜାନ (ଡିଓ), ପିଏଚ୍, ତାପମାତ୍ରା ଓ ଆମୋନିଆ ମାପୁଥିବା ଜଳରେ ବୁଡ଼ୁଥିବା ପ୍ରୋବ।"
    ],
    icon: <Droplets className="w-5 h-5 text-aqua-400" />,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "field-device",
    name: ["Rugged FieldOS Handheld Device", "ଟକ୍କର ସହିବା ଫିଲ୍ଡଓଏସ୍ ହ୍ୟାଣ୍ଡହେଲ୍ଡ ଡିଭାଇସ"],
    category: ["Agritech Telemetry", "କୃଷି ପ୍ରଯୁକ୍ତି ଟେଲିମେଟ୍ରି"],
    desc: [
      "IP68 water-resistant Android terminal used by field officers to sync sensor logs and track farmer beneficiary payouts.",
      "ଆଇପି୬୮ ଜଳପ୍ରତିରୋଧୀ ଆଣ୍ଡ୍ରଏଡ୍ ଟର୍ମିନାଲ୍, ଯାହା କ୍ଷେତ୍ର ଅଧିକାରୀମାନେ ସେନ୍ସର ଲଗ୍ ସିଙ୍କ୍ କରିବା ଓ ଚାଷୀ ଲାଭଭୋଗୀଙ୍କ ପଇସା ବଣ୍ଟନ ଟ୍ରାକ୍ କରିବା ପାଇଁ ବ୍ୟବହାର କରନ୍ତି।"
    ],
    icon: <Smartphone className="w-5 h-5 text-forest-300" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "crop-leaf",
    name: ["Perennial Crop Leaf Scanner", "ବାରମାସୀ ଫସଲ ପତ୍ର ସ୍କାନର"],
    category: ["Horticulture", "ଉଦ୍ୟାନ କୃଷି"],
    desc: [
      "Optical leaf clip evaluating chlorophyll content (SPAD index) and early fungal pathogen detection in polyhouses.",
      "ପଲିହାଉସରେ କ୍ଲୋରୋଫିଲ୍ ମାତ୍ରା (ସ୍ପାଡ୍ ସୂଚକାଙ୍କ) ମୂଲ୍ୟାଙ୍କନ ଓ ଛତୁ ରୋଗ ପ୍ରାରମ୍ଭିକ ଚିହ୍ନଟ କରୁଥିବା ଅପ୍ଟିକାଲ ପତ୍ର କ୍ଲିପ୍।"
    ],
    icon: <Sprout className="w-5 h-5 text-harvest-300" />,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gps-unit",
    name: ["GIS Precision GPS Tracker", "ଜିଆଇଏସ୍ ପ୍ରିସିଜନ ଜିପିଏସ୍ ଟ୍ରାକର"],
    category: ["Watershed Mapping", "ଜଳଛାୟା ମାନଚିତ୍ରଣ"],
    desc: [
      "High-accuracy GNSS receiver used to map check dam contours, farm pond boundary coordinates, and sub-surface tile drains.",
      "ଚେକ୍ ଡ୍ୟାମର ବାହ୍ୟରୂପ, କୃଷି ପୋଖରୀ ସୀମା ନିର୍ଦ୍ଦେଶାଙ୍କ ଓ ଭୂତଳ ଟାଇଲ୍ ଡ୍ରେନ୍ ମାନଚିତ୍ରଣ ପାଇଁ ବ୍ୟବହୃତ ଉଚ୍ଚ-ସଠିକତା ଜିଏନ୍ଏସ୍ଏସ୍ ରିସିଭର।"
    ],
    icon: <Navigation className="w-5 h-5 text-aqua-400" />,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "logbook",
    name: ["Field Operations Ledger", "କ୍ଷେତ୍ର କାର୍ଯ୍ୟ ରେଜିଷ୍ଟର"],
    category: ["FPO Governance", "ଏଫପିଓ ପରିଚାଳନା"],
    desc: [
      "Waterproof physical logbook for recording fish auction receipts, seed stocking counts, and local cooperative meetings.",
      "ମାଛ ଲିଲାମ ରସିଦ, ମଞ୍ଜି ମହଜୁଦ ହିସାବ ଓ ସ୍ଥାନୀୟ ସମବାୟ ବୈଠକ ଲିପିବଦ୍ଧ କରିବା ପାଇଁ ଜଳପ୍ରତିରୋଧୀ ଶାରୀରିକ ଲଗବୁକ୍।"
    ],
    icon: <BookOpen className="w-5 h-5 text-harvest-400" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  }
];

export function FieldKit() {
  const [selectedItem, setSelectedItem] = useState<KitItem>(FIELD_KIT_ITEMS[2]);
  const { t, language } = useTranslation();
  const pick = (pair: L10nString) => pickOr(pair[0], pair[1], language);

  return (
    <section className="py-24 bg-theme-base text-sand-50 relative border-b border-forest-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>{t("fieldKit.badge")}</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight">
            {t("fieldKit.title")}
          </h2>

          <p className="text-theme-text-muted text-sm leading-relaxed">
            {t("fieldKit.subtitle")}
          </p>
        </div>

        {/* Interactive Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FIELD_KIT_ITEMS.map((item) => {
            const isSelected = selectedItem.id === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setSelectedItem(item)}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 ${
                  isSelected
                    ? "bg-forest-900/80 border-harvest-400 shadow-2xl scale-[1.02]"
                    : "bg-forest-900/30 border-forest-800 hover:border-forest-600/50"
                }`}
                data-cursor-text="TOOL"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-theme-base border border-forest-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-widest font-display">
                    {pick(item.category)}
                  </span>
                </div>

                <div className="h-36 rounded-2xl overflow-hidden relative border border-forest-800">
                  <img src={item.image} alt={pick(item.name)} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-sand-50">{pick(item.name)}</h3>
                  <p className="text-xs text-theme-text-muted leading-relaxed">{pick(item.desc)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
