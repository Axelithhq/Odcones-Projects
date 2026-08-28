"use client";

import React from "react";
import { Layers, Droplets, Sprout, Fish, ShieldCheck, ShoppingBag, Users, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { pickOr } from "@/lib/localize";

const PIPELINE_NODES: { label: [string, string]; icon: React.ReactNode; desc: [string, string] }[] = [
  { label: ["SOIL", "ମୃତ୍ତିକା"], icon: <Layers className="w-5 h-5 text-harvest-400" />, desc: ["Carbon regeneration & sub-surface drainage", "କାର୍ବନ ପୁନରୁତ୍ପାଦନ ଓ ଭୂତଳ ନିଷ୍କାସନ ବ୍ୟବସ୍ଥା"] },
  { label: ["WATER", "ଜଳ"], icon: <Droplets className="w-5 h-5 text-aqua-400" />, desc: ["Check dams, farm ponds & drip networks", "ଚେକ୍ ଡ୍ୟାମ, କୃଷି ପୋଖରୀ ଓ ଡ୍ରିପ୍ ନେଟ୍‌ୱାର୍କ"] },
  { label: ["AGRICULTURE", "କୃଷି"], icon: <Sprout className="w-5 h-5 text-forest-300" />, desc: ["Climate-resilient DSR paddy & crop planning", "ଜଳବାୟୁ ସହନଶୀଳ ଡିଏସଆର ଧାନ ଓ ଫସଲ ଯୋଜନା"] },
  { label: ["FISHERIES", "ମତ୍ସ୍ୟ"], icon: <Fish className="w-5 h-5 text-aqua-400" />, desc: ["Inland water bodies & landing dock hubs", "ଅନ୍ତଃସ୍ଥଳୀୟ ଜଳାଶୟ ଓ ମାଛ ଉତାରିବା କେନ୍ଦ୍ର"] },
  { label: ["LIVESTOCK", "ପଶୁପାଳନ"], icon: <ShieldCheck className="w-5 h-5 text-harvest-300" />, desc: ["Dairy hubs & hydroponic green fodder", "ଦୁଗ୍ଧ କେନ୍ଦ୍ର ଓ ହାଇଡ୍ରୋପୋନିକ ସବୁଜ ପଶୁଖାଦ୍ୟ"] },
  { label: ["MARKET", "ବଜାର"], icon: <ShoppingBag className="w-5 h-5 text-forest-300" />, desc: ["Direct retail buyback & cold-chain logistics", "ପ୍ରତ୍ୟକ୍ଷ ଖୁଚୁରା ପୁନଃକ୍ରୟ ଓ କୋଲ୍ଡ-ଚେନ୍ ଲଜିଷ୍ଟିକ୍ସ"] },
  { label: ["COMMUNITIES", "ସମୁଦାୟ"], icon: <Users className="w-5 h-5 text-harvest-400" />, desc: ["Empowered FPOs & fishing cooperatives", "ସଶକ୍ତ ଏଫପିଓ ଓ ମତ୍ସ୍ୟ ସମବାୟ ସମିତି"] },
];

export function OneEcosystem() {
  const { t, language } = useTranslation();
  const pick = (pair: [string, string]) => pickOr(pair[0], pair[1], language);

  return (
    <section className="py-24 bg-theme-base text-sand-50 relative border-b border-forest-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>{t("ecosystem.badge")}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight">
            {t("ecosystem.title")}
          </h2>
          <p className="text-sand-200/80 text-sm leading-relaxed">
            {t("ecosystem.subtitle")}
          </p>
        </div>

        {/* Connected Node Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PIPELINE_NODES.map((node, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-3 hover:border-forest-600/60 transition-all group"
            >
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-theme-base border border-forest-700 flex items-center justify-center">
                  {node.icon}
                </div>
                <span className="text-xs font-mono text-forest-400 font-bold">0{idx + 1}</span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-sand-50 group-hover:text-harvest-400 transition-colors">
                {pick(node.label)}
              </h3>
              <p className="text-xs text-sand-200/70 leading-relaxed">{pick(node.desc)}</p>
            </div>
          ))}

          {/* Final Summary Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-forest-900 to-forest-800 border border-forest-600/40 flex flex-col justify-between space-y-4">
            <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-widest font-display">
              {t("ecosystem.impact")}
            </span>
            <p className="font-display font-extrabold text-xl text-sand-50 leading-snug">
              {t("ecosystem.impactText")}
            </p>
            <div className="flex items-center gap-1 text-xs font-bold text-harvest-400 pt-2">
              <span>{t("ecosystem.exploreAll")}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
