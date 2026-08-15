"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Clock, Sprout, Fish, Droplets, Activity, CheckCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { pickOr } from "@/lib/localize";

type L10nString = [string, string];

interface FieldScene {
  time: L10nString;
  title: L10nString;
  category: L10nString;
  desc: L10nString;
  image: string;
  telemetry: L10nString;
}

const FIELD_SCENES: FieldScene[] = [
  {
    time: ["05:30 AM", "୦୫:୩୦ AM"],
    title: ["Morning Dawn & Reservoir Dispatch", "ସକାଳର ଉଷା ଓ ଜଳାଶୟ ଅଭିଯାନ"],
    category: ["Fisheries & Water", "ମତ୍ସ୍ୟ ଓ ଜଳ"],
    desc: [
      "Fishermen in Hirakud reservoir assemble at sunrise to inspect net lines and check HDPE floating cage tension before morning feeding.",
      "ହିରାକୁଦ ଜଳାଶୟରେ ମତ୍ସ୍ୟଜୀବୀମାନେ ସୂର୍ଯ୍ୟୋଦୟ ବେଳେ ଏକାଠି ହୋଇ ଜାଲର ଧାଡ଼ି ଯାଞ୍ଚ କରନ୍ତି ଏବଂ ସକାଳ ଖାଇବା ପୂର୍ବରୁ ଏଚଡିପିଇ ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍ ର ଟାନ୍ସନ ଯାଞ୍ଚ କରନ୍ତି।"
    ],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200",
    telemetry: ["Air Temp: 22°C | Water Temp: 26.2°C", "ବାୟୁ ତାପମାତ୍ରା: ୨୨°ସେ | ଜଳ ତାପମାତ୍ରା: ୨୬.୨°ସେ"]
  },
  {
    time: ["07:00 AM", "୦୭:୦୦ AM"],
    title: ["Paddy Field Sowing & Soil Moisture Audit", "ଧାନ ଖେତ ବୁଣାଣ ଓ ମୃତ୍ତିକା ଆର୍ଦ୍ରତା ଯାଞ୍ଚ"],
    category: ["Agriculture", "କୃଷି"],
    desc: [
      "Farmers in Bargarh begin paddy transplanting using direct-seeded rice (DSR) techniques, verifying soil moisture levels.",
      "ବରଗଡ଼ର ଚାଷୀମାନେ ପ୍ରତ୍ୟକ୍ଷ ବୁଣାଣ ଧାନ (ଡିଏସଆର) ପ୍ରଣାଳୀରେ ଧାନ ଲଗାଇବା ଆରମ୍ଭ କରନ୍ତି ଏବଂ ମୃତ୍ତିକାର ଆର୍ଦ୍ରତା ସ୍ତର ଯାଞ୍ଚ କରନ୍ତି।"
    ],
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1200",
    telemetry: ["Soil Carbon: 0.82% | Moisture: 58%", "ମୃତ୍ତିକା କାର୍ବନ: ୦.୮୨% | ଆର୍ଦ୍ରତା: ୫୮%"]
  },
  {
    time: ["09:30 AM", "୦୯:୩୦ AM"],
    title: ["Polyhouse Micro-Fertigation Dosing", "ପଲିହାଉସ ମାଇକ୍ରୋ-ଫର୍ଟିଗେସନ ଡୋଜିଂ"],
    category: ["Horticulture", "ଉଦ୍ୟାନ କୃଷି"],
    desc: [
      "In Koraput polyhouses, automated drip fertigation channels deliver liquid micro-nutrients to capsicum and strawberry beds.",
      "କୋରାପୁଟର ପଲିହାଉସରେ ସ୍ୱୟଂଚାଳିତ ଡ୍ରିପ୍ ଫର୍ଟିଗେସନ ମାଧ୍ୟମରେ କ୍ୟାପ୍ସିକମ୍ ଓ ଷ୍ଟ୍ରବେରୀ ବିଛଣାକୁ ତରଳ ସୂକ୍ଷ୍ମ ପୋଷକ ପହଞ୍ଚାଯାଏ।"
    ],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200",
    telemetry: ["Greenhouse Temp: 26.5°C | Humidity: 68%", "ଗ୍ରୀନହାଉସ ତାପମାତ୍ରା: ୨୬.୫°ସେ | ଆର୍ଦ୍ରତା: ୬୮%"]
  },
  {
    time: ["12:00 PM", "୧୨:୦୦ PM"],
    title: ["Midday Solar Aeration & Oxygen Check", "ମଧ୍ୟାହ୍ନ ସୌର ବାୟୁ ସଞ୍ଚାଳନ ଓ ଅମ୍ଳଜାନ ଯାଞ୍ଚ"],
    category: ["Aquaculture", "ଜଳଚର ଚାଷ"],
    desc: [
      "Biofloc circular tanks in Bhadrak reach peak photosynthesis. Solar microbubble aerators maintain dissolved oxygen above 6.5 mg/L.",
      "ଭଦ୍ରକର ବାୟୋଫ୍ଲୋକ୍ ଗୋଲାକାର ଟାଙ୍କିରେ ସର୍ବାଧିକ ପ୍ରକାଶସଂଶ୍ଳେଷଣ ହୁଏ। ସୌର ମାଇକ୍ରୋବବଲ ଏରେଟର ଦ୍ରବୀଭୂତ ଅମ୍ଳଜାନକୁ ୬.୫ ମି.ଗ୍ରା./ଲି. ଉପରେ ବଜାୟ ରଖେ।"
    ],
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200",
    telemetry: ["Dissolved Oxygen: 6.8 mg/L | pH: 7.4", "ଦ୍ରବୀଭୂତ ଅମ୍ଳଜାନ: ୬.୮ ମି.ଗ୍ରା./ଲି | ପିଏଚ୍: ୭.୪"]
  },
  {
    time: ["03:00 PM", "୦୩:୦୦ PM"],
    title: ["Check Dam Water Management", "ଚେକ୍ ଡ୍ୟାମ ଜଳ ପରିଚାଳନା"],
    category: ["Soil & Water", "ମାଟି ଓ ଜଳ"],
    desc: [
      "Ganjam watershed officers inspect check dam overflow channels and groundwater recharge shafts following monsoon rain.",
      "ବର୍ଷା ପରେ ଗଞ୍ଜାମର ଜଳଛାୟା ଅଧିକାରୀମାନେ ଚେକ୍ ଡ୍ୟାମର ଅତିରିକ୍ତ ଜଳ ମାର୍ଗ ଓ ଭୂତଳ ଜଳ ପୁନଃଭରଣ କୂଅ ଯାଞ୍ଚ କରନ୍ତି।"
    ],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
    telemetry: ["Water Harvested: 4.5M m³ | Flow: Normal", "ସଂଗୃହୀତ ଜଳ: ୪.୫ ମି. ଘନମିଟର | ପ୍ରବାହ: ସ୍ୱାଭାବିକ"]
  },
  {
    time: ["05:30 PM", "୦୫:୩୦ PM"],
    title: ["Fish Landing Dock Harvest & Cold Icing", "ମାଛ ଉତାରିବା କେନ୍ଦ୍ରରେ ଫସଲ ଓ ବରଫ ସଂରକ୍ଷଣ"],
    category: ["Fisheries Logistics", "ମତ୍ସ୍ୟ ଲଜିଷ୍ଟିକ୍ସ"],
    desc: [
      "Evening harvest from reservoir cages is sorted, weighed, and slurry-iced at solar-powered landing docks for urban transport.",
      "ସନ୍ଧ୍ୟା ବେଳେ ଜଳାଶୟ କେଜ୍ ରୁ ଫସଲ ସୌର ଚାଳିତ ଉତାରିବା କେନ୍ଦ୍ରରେ ବାଛି, ଓଜନ କରି, ସ୍ଲରି ବରଫରେ ସଂରକ୍ଷିତ କରାଯାଇ ସହରକୁ ପଠାଯାଏ।"
    ],
    image: "https://images.unsplash.com/photo-1516683018641-547af6c268df?auto=format&fit=crop&q=80&w=1200",
    telemetry: ["Harvest Biomass: 4.2 MT | Chill Temp: 2°C", "ଫସଲ ଜୈବମାତ୍ରା: ୪.୨ ମେଟ୍ରିକ୍ ଟନ୍ | ଥଣ୍ଡା ତାପମାତ୍ରା: ୨°ସେ"]
  },
  {
    time: ["07:00 PM", "୦୭:୦୦ PM"],
    title: ["FieldOS Data Synchronization", "ଫିଲ୍ଡଓଏସ୍ ତଥ୍ୟ ସିଙ୍କ୍ରୋନାଇଜେସନ"],
    category: ["Field Operations", "କ୍ଷେତ୍ର କାର୍ଯ୍ୟ"],
    desc: [
      "Field officers log daily beneficiary payouts, FPO crop ledgers, and sensor telemetry logs to the central ODCONES FieldOS server.",
      "କ୍ଷେତ୍ର ଅଧିକାରୀମାନେ ଦୈନିକ ଲାଭଭୋଗୀ ପଇସା ବଣ୍ଟନ, ଏଫପିଓ ଫସଲ ହିସାବ ଓ ସେନ୍ସର ଟେଲିମେଟ୍ରି ଲଗ୍ କେନ୍ଦ୍ରୀୟ ଓଡକୋନ୍ସ ଫିଲ୍ଡଓଏସ୍ ସର୍ଭରରେ ସଞ୍ଚୟ କରନ୍ତି।"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    telemetry: ["FieldOS Sync: 100% | 24 Nodes Online", "ଫିଲ୍ଡଓଏସ୍ ସିଙ୍କ୍: ୧୦୦% | ୨୪ ନୋଡ୍ ଅନଲାଇନ"]
  }
];

export function DayInFieldStory() {
  const [activeScene, setActiveScene] = useState<FieldScene>(FIELD_SCENES[0]);
  const { t, language } = useTranslation();
  const pick = (pair: L10nString) => pickOr(pair[0], pair[1], language);

  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative border-b border-forest-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
              <Sun className="w-3.5 h-3.5 text-harvest-400" />
              <span>{t("dayInField.badge")}</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight">
              {t("dayInField.title")}
            </h2>
          </div>
          <p className="text-sand-200/70 text-xs sm:text-sm max-w-md leading-relaxed">
            {t("dayInField.subtitle")}
          </p>
        </div>

        {/* Timeline Stepper */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-forest-800/40 mb-12">
          {FIELD_SCENES.map((scene, idx) => {
            const isSelected = activeScene === scene;
            return (
              <button
                key={pick(scene.time)}
                onClick={() => setActiveScene(scene)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all border ${
                  isSelected
                    ? "bg-harvest-500 text-forest-950 border-harvest-400 shadow-lg scale-105"
                    : "bg-forest-900/40 text-sand-200/70 border-forest-800 hover:text-sand-50"
                }`}
                data-cursor-text="TIME"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{pick(scene.time)}</span>
              </button>
            );
          })}
        </div>

        {/* Story Display Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pick(activeScene.time)}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Image Banner */}
            <div className="lg:col-span-7 h-[420px] rounded-3xl overflow-hidden border border-forest-700/50 relative group shadow-2xl">
              <img
                src={activeScene.image}
                alt={pick(activeScene.title)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md text-xs font-bold text-harvest-400 uppercase">
                {pick(activeScene.category)}
              </div>
            </div>

            {/* Content Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-harvest-400 font-display uppercase tracking-widest">
                  {pick(activeScene.time)} {t("dayInField.operationalCycle")}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-sand-50">
                  {pick(activeScene.title)}
                </h3>
              </div>

              <p className="text-sand-200/80 text-sm leading-relaxed font-light">
                {pick(activeScene.desc)}
              </p>

              <div className="p-4 rounded-2xl bg-forest-900/60 border border-forest-700/40 space-y-1">
                <span className="text-[10px] font-bold text-forest-300 uppercase tracking-widest">
                  {t("dayInField.telemetry")}:
                </span>
                <p className="font-mono font-bold text-xs text-harvest-300">{pick(activeScene.telemetry)}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
