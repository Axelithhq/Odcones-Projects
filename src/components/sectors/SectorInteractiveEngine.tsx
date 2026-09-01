"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  Fish,
  ShieldCheck,
  Flower2,
  Utensils,
  Snowflake,
  Building2,
  Factory,
  Sparkles,
  Calculator,
  TrendingUp,
  Award,
  CheckCircle2,
  Zap,
  ArrowRight,
  Shield,
  Droplets,
  Thermometer,
  Layers,
  FileText
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface Props {
  slug: string;
  accentColor: string;
}

export function SectorInteractiveEngine({ slug, accentColor }: Props) {
  const { language } = useTranslation();
  const isOr = language === "or";

  // Generic State parameters
  const [scaleValue, setScaleValue] = useState<number>(5);

  return (
    <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-theme-border shadow-2xl space-y-6 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-15 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />

      {/* AGRICULTURE TOOL */}
      {slug === "agriculture" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-theme-border/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-forest-950 border border-forest-800 text-harvest-400">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-theme-text">
                  {isOr ? "GIS କୃଷି ଜମି ଓ ଉତ୍ପାଦନ କାଲକୁଲେଟର" : "GIS Micro-Zoning & Crop Yield Estimator"}
                </h3>
                <span className="text-xs text-theme-text-muted">
                  {isOr ? "ଜମି ପରିମାଣ ବାଛନ୍ତୁ ଓ ସମ୍ଭାବ୍ୟ ଅମଳ ଦେଖନ୍ତୁ" : "Simulate precision farming yield increase for your land area"}
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-forest-900 border border-harvest-400/50 text-xs font-mono text-harvest-400 font-bold">
              AGRICULTURE TOOL
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-theme-text-muted">{isOr ? "ଚାଷ ଜମି ପରିମାଣ (ଏକର)" : "Farming Land Area (Acres)"}:</span>
              <span className="font-bold text-harvest-400 text-base">{scaleValue} Acres</span>
            </div>
            <input
              type="range"
              min={1}
              max={50}
              value={scaleValue}
              onChange={(e) => setScaleValue(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-forest-950 accent-harvest-400 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ଅତିରିକ୍ତ ଅମଳ" : "Est. Yield Increase"}</span>
              <p className="font-display font-extrabold text-2xl text-sand-50">+{(scaleValue * 4.2).toFixed(1)} MT</p>
              <span className="text-[10px] text-emerald-400">+42% Avg Increase</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ମୃତ୍ତିକା ଜୈବ କାର୍ବନ" : "Soil Organic Carbon"}</span>
              <p className="font-display font-extrabold text-2xl text-harvest-400">1.45 %</p>
              <span className="text-[10px] text-emerald-400">Optimal Soil Health</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ସବସିଡି ସହାୟତା" : "Govt Scheme Subsidy"}</span>
              <p className="font-display font-extrabold text-2xl text-aqua-400">₹{(scaleValue * 0.45).toFixed(2)} Lakhs</p>
              <span className="text-[10px] text-emerald-400">MIDH & State Agri</span>
            </div>
          </div>
        </div>
      )}

      {/* FISHERIES TOOL */}
      {slug === "fisheries" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-theme-border/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-forest-950 border border-forest-800 text-aqua-400">
                <Fish className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-theme-text">
                  {isOr ? "ବାୟୋଫ୍ଲୋକ୍ ଓ ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍ ସିମୁଲେଟର" : "Biofloc & Floating Reservoir Cage Simulator"}
                </h3>
                <span className="text-xs text-theme-text-muted">
                  {isOr ? "କେଜ୍ ସଂଖ୍ୟା ବାଛି ମାଛ ଉତ୍ପାଦନ ଆକଳନ କରନ୍ତୁ" : "Simulate commercial fish biomass production for reservoir cage farming"}
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-forest-900 border border-aqua-400/50 text-xs font-mono text-aqua-400 font-bold">
              PMMSY FISHERIES ENGINE
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-theme-text-muted">{isOr ? "HDPE ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍ ସଂଖ୍ୟା" : "HDPE Floating Cages Count"}:</span>
              <span className="font-bold text-aqua-400 text-base">{scaleValue} Cages</span>
            </div>
            <input
              type="range"
              min={2}
              max={40}
              value={scaleValue}
              onChange={(e) => setScaleValue(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-forest-950 accent-aqua-400 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ବାର୍ଷିକ ମାଛ ଉତ୍ପାଦନ" : "Annual Fish Production"}</span>
              <p className="font-display font-extrabold text-2xl text-sand-50">{(scaleValue * 3.5).toFixed(1)} MT</p>
              <span className="text-[10px] text-emerald-400">Pangasius & IMC</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ଦ୍ରବୀଭୂତ ଅମ୍ଳଜାନ" : "Dissolved Oxygen"}</span>
              <p className="font-display font-extrabold text-2xl text-aqua-400">6.85 mg/L</p>
              <span className="text-[10px] text-emerald-400">24/7 Telemetry Aerators</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "PMMSY ସବସିଡି (୪୦%-୬୦%)" : "PMMSY Subsidy Grant"}</span>
              <p className="font-display font-extrabold text-2xl text-harvest-400">₹{(scaleValue * 1.8).toFixed(2)} Lakhs</p>
              <span className="text-[10px] text-emerald-400">Bankable DPR Approved</span>
            </div>
          </div>
        </div>
      )}

      {/* DAIRY TOOL */}
      {slug === "dairy" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-theme-border/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-forest-950 border border-forest-800 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-theme-text">
                  {isOr ? "ସ୍ମାର୍ଟ ଦୁଗ୍ଧ ଫାର୍ମ ଓ BMC ଚିଲର କାଲକୁଲେଟର" : "Smart Dairy Hub & Bulk Milk Chiller Calculator"}
                </h3>
                <span className="text-xs text-theme-text-muted">
                  {isOr ? "ଗାଈ ସଂଖ୍ୟା ବାଛି ଦୈନିକ କ୍ଷୀର ଉତ୍ପାଦନ ଆକଳନ କରନ୍ତୁ" : "Estimate daily milk output and chilling hub capacity for your cattle farm"}
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-forest-900 border border-amber-400/50 text-xs font-mono text-amber-400 font-bold">
              DAIRY ENGINE
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-theme-text-muted">{isOr ? "ଗାଈ ସଂଖ୍ୟା (High Yield Cattle)" : "High-Yield Cattle Count"}:</span>
              <span className="font-bold text-amber-400 text-base">{scaleValue * 5} Cattle</span>
            </div>
            <input
              type="range"
              min={1}
              max={20}
              value={scaleValue}
              onChange={(e) => setScaleValue(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-forest-950 accent-amber-400 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ଦୈନିକ କ୍ଷୀର ଉତ୍ପାଦନ" : "Daily Milk Output"}</span>
              <p className="font-display font-extrabold text-2xl text-sand-50">{scaleValue * 5 * 14} Liters/Day</p>
              <span className="text-[10px] text-emerald-400">4.0°C BMC Chilled</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ହାଇଡ୍ରୋପୋନିକ୍ ଘାସ ସଂରକ୍ଷଣ" : "Hydroponic Fodder Saved"}</span>
              <p className="font-display font-extrabold text-2xl text-harvest-400">35 %</p>
              <span className="text-[10px] text-emerald-400">Feed Cost Reduced</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ବ୍ୟାଙ୍କ ଋଣ ଓ ସବସିଡି" : "Bank DPR & Subsidy"}</span>
              <p className="font-display font-extrabold text-2xl text-aqua-400">₹{(scaleValue * 1.5).toFixed(2)} Lakhs</p>
              <span className="text-[10px] text-emerald-400">100% Bank Sanction</span>
            </div>
          </div>
        </div>
      )}

      {/* HORTICULTURE TOOL */}
      {slug === "horticulture" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-theme-border/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-forest-950 border border-forest-800 text-emerald-400">
                <Flower2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-theme-text">
                  {isOr ? "ସଂରକ୍ଷିତ ପଲିହାଉସ ଗ୍ରୀନହାଉସ କାଲକୁଲେଟର" : "Protected Polyhouse Greenhouse Calculator"}
                </h3>
                <span className="text-xs text-theme-text-muted">
                  {isOr ? "ପଲିହାଉସ କ୍ଷେତ୍ରଫଳ ବାଛି ଆୟ ଗୁଣନଫଳ ଦେଖନ୍ତୁ" : "Simulate greenhouse yield for off-season capsicum, tomato & mushroom"}
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-forest-900 border border-emerald-400/50 text-xs font-mono text-emerald-400 font-bold">
              MIDH HORTICULTURE ENGINE
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-theme-text-muted">{isOr ? "ପଲିହାଉସ କ୍ଷେତ୍ରଫଳ (Sq. Meters)" : "Polyhouse Area (Sq. Meters)"}:</span>
              <span className="font-bold text-emerald-400 text-base">{scaleValue * 500} Sq.M</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={scaleValue}
              onChange={(e) => setScaleValue(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-forest-950 accent-emerald-400 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ଆୟ ବୃଦ୍ଧି ଅନୁପାତ" : "Income Multiplier"}</span>
              <p className="font-display font-extrabold text-2xl text-sand-50">3.5x</p>
              <span className="text-[10px] text-emerald-400">Off-Season Premium</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ସ୍ୱୟଂଚାଳିତ ଫର୍ଟିଗେସନ" : "Drip & Fertigation"}</span>
              <p className="font-display font-extrabold text-2xl text-emerald-400">1.4 dS/m</p>
              <span className="text-[10px] text-emerald-400">Precision Soil EC</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "MIDH ସବସିଡି (୫୦%)" : "MIDH Polyhouse Subsidy"}</span>
              <p className="font-display font-extrabold text-2xl text-harvest-400">₹{(scaleValue * 4.2).toFixed(2)} Lakhs</p>
              <span className="text-[10px] text-emerald-400">Government Sanctioned</span>
            </div>
          </div>
        </div>
      )}

      {/* FOOD PROCESSING TOOL */}
      {slug === "food-processing" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-theme-border/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-forest-950 border border-forest-800 text-harvest-400">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-theme-text">
                  {isOr ? "ଖାଦ୍ୟ ପ୍ରସଂସ୍କରଣ ଓ PM-FME ୟୁନିଟ୍ କାଲକୁଲେଟର" : "Agro-Processing & PM-FME Enterprise Calculator"}
                </h3>
                <span className="text-xs text-theme-text-muted">
                  {isOr ? "ପ୍ରସେସିଂ କ୍ଷମତା (MT/Hr) ବାଛି ଲାଭ ଆକଳନ କରନ୍ତୁ" : "Estimate processing throughput for rice mill, oil expeller & spice plant"}
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-forest-900 border border-harvest-400/50 text-xs font-mono text-harvest-400 font-bold">
              PM-FME FOOD ENGINE
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-theme-text-muted">{isOr ? "ପ୍ରସେସିଂ କ୍ଷମତା (MT/ଘଣ୍ଟା)" : "Plant Throughput (MT/Hour)"}:</span>
              <span className="font-bold text-harvest-400 text-base">{scaleValue} MT/Hr</span>
            </div>
            <input
              type="range"
              min={1}
              max={20}
              value={scaleValue}
              onChange={(e) => setScaleValue(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-forest-950 accent-harvest-400 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ଦୈନିକ ପ୍ରସେସିଂ କ୍ଷମତା" : "Daily Processing Capacity"}</span>
              <p className="font-display font-extrabold text-2xl text-sand-50">{scaleValue * 16} MT/Day</p>
              <span className="text-[10px] text-emerald-400">Color Sorter Active</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "FSSAI ଗୁଣବତ୍ତା ଲ୍ୟାବ୍" : "FSSAI Standards"}</span>
              <p className="font-display font-extrabold text-2xl text-harvest-300">100 %</p>
              <span className="text-[10px] text-emerald-400">Food Safety Compliant</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "PM-FME ସବସିଡି (୩୫%)" : "PM-FME Capital Subsidy"}</span>
              <p className="font-display font-extrabold text-2xl text-aqua-400">₹{(scaleValue * 2.8).toFixed(2)} Lakhs</p>
              <span className="text-[10px] text-emerald-400">Bankable DPR Ready</span>
            </div>
          </div>
        </div>
      )}

      {/* COLD CHAIN TOOL */}
      {slug === "cold-chain" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-theme-border/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-forest-950 border border-forest-800 text-aqua-400">
                <Snowflake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-theme-text">
                  {isOr ? "PUF କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍ ଓ ରିଫର କାଲକୁଲେଟର" : "PUF Cold Room Storage & Reefer Calculator"}
                </h3>
                <span className="text-xs text-theme-text-muted">
                  {isOr ? "ଷ୍ଟୋରେଜ୍ କ୍ଷମତା (MT) ବାଛି ଅମଳ ପରବର୍ତ୍ତୀ କ୍ଷତି ହ୍ରାସ ଦେଖନ୍ତୁ" : "Estimate cold storage capacity and post-harvest loss prevention"}
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-forest-900 border border-aqua-400/50 text-xs font-mono text-aqua-400 font-bold">
              COLD CHAIN ENGINE
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-theme-text-muted">{isOr ? "କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍ କ୍ଷମତା (Metric Tons)" : "Cold Room Capacity (Metric Tons)"}:</span>
              <span className="font-bold text-aqua-400 text-base">{scaleValue * 50} MT</span>
            </div>
            <input
              type="range"
              min={1}
              max={20}
              value={scaleValue}
              onChange={(e) => setScaleValue(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-forest-950 accent-aqua-400 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ଫସଲ କ୍ଷତି ହ୍ରାସ" : "Post-Harvest Loss Cut"}</span>
              <p className="font-display font-extrabold text-2xl text-sand-50">85 %</p>
              <span className="text-[10px] text-emerald-400">Zero Degradation</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ଚାମ୍ବର ତାପମାତ୍ରା" : "Chamber Temperature"}</span>
              <p className="font-display font-extrabold text-2xl text-aqua-400">2.5 °C</p>
              <span className="text-[10px] text-emerald-400">Multi-Zone Thermal Lock</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "AIF କୋଲ୍ଡ-ଚେନ୍ ଋଣ/ସବସିଡି" : "AIF Cold Chain Grant"}</span>
              <p className="font-display font-extrabold text-2xl text-harvest-400">₹{(scaleValue * 4.5).toFixed(2)} Lakhs</p>
              <span className="text-[10px] text-emerald-400">3% Interest Subvention</span>
            </div>
          </div>
        </div>
      )}

      {/* RURAL INFRASTRUCTURE TOOL */}
      {slug === "rural-infrastructure" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-theme-border/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-forest-950 border border-forest-800 text-teal-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-theme-text">
                  {isOr ? "ଜଳଛାୟା ଚେକ୍ ଡ୍ୟାମ୍ ଓ ଗୋଦାମ କାଲକୁଲେଟର" : "Watershed Check Dam & Grain Godown Planner"}
                </h3>
                <span className="text-xs text-theme-text-muted">
                  {isOr ? "ଚେକ୍ ଡ୍ୟାମ୍ ସଂଖ୍ୟା ବାଛି ଜଳ ଧାରଣ କ୍ଷମତା ଆକଳନ କରନ୍ତୁ" : "Estimate groundwater recharge & scientific godown storage"}
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-forest-900 border border-teal-400/50 text-xs font-mono text-teal-400 font-bold">
              WATERSHED CIVIL ENGINE
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-theme-text-muted">{isOr ? "RCC ଚେକ୍ ଡ୍ୟାମ୍ ସଂଖ୍ୟା" : "RCC Check Dams Count"}:</span>
              <span className="font-bold text-teal-400 text-base">{scaleValue} Check Dams</span>
            </div>
            <input
              type="range"
              min={1}
              max={15}
              value={scaleValue}
              onChange={(e) => setScaleValue(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-forest-950 accent-teal-400 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ଜଳ ଧାରଣ କ୍ଷମତା" : "Water Retention Capacity"}</span>
              <p className="font-display font-extrabold text-2xl text-sand-50">{(scaleValue * 12500).toLocaleString()} m³</p>
              <span className="text-[10px] text-emerald-400">+3.2m Groundwater</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ବୈଜ୍ଞାନିକ ଗୋଦାମ କ୍ଷମତା" : "Warehouse Storage"}</span>
              <p className="font-display font-extrabold text-2xl text-teal-400">{(scaleValue * 8000).toLocaleString()} Sq.Ft</p>
              <span className="text-[10px] text-emerald-400">AIF & CWC Norms</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ସିଭିଲ୍ ଭିତ୍ତିଭୂମି ଋଣ" : "Civil Project Financing"}</span>
              <p className="font-display font-extrabold text-2xl text-harvest-400">₹{(scaleValue * 6.0).toFixed(2)} Lakhs</p>
              <span className="text-[10px] text-emerald-400">DPR Approved</span>
            </div>
          </div>
        </div>
      )}

      {/* MSME TOOL */}
      {slug === "msme-projects" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-theme-border/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-forest-950 border border-forest-800 text-forest-300">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-theme-text">
                  {isOr ? "MSME ପ୍ରକଳ୍ପ ଓ PMEGP/MKUY ସବସିଡି କାଲକୁଲେଟର" : "Allied MSME DPR & Subsidy Eligibility Calculator"}
                </h3>
                <span className="text-xs text-theme-text-muted">
                  {isOr ? "ପ୍ରକଳ୍ପ ବଜେଟ୍ (₹ ଲକ୍ଷ) ବାଛି ସବସିଡି ମଞ୍ଜୁରୀ ଦେଖନ୍ତୁ" : "Estimate DSCR ratio & government subsidy for feed mills & CHC projects"}
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-forest-900 border border-forest-400/50 text-xs font-mono text-forest-300 font-bold">
              PMEGP / MKUY MSME ENGINE
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-theme-text-muted">{isOr ? "ପ୍ରକଳ୍ପ ମୋଟ ବଜେଟ୍ (₹ ଲକ୍ଷ)" : "Total MSME Project Cost (₹ Lakhs)"}:</span>
              <span className="font-bold text-forest-300 text-base">₹{scaleValue * 5} Lakhs</span>
            </div>
            <input
              type="range"
              min={1}
              max={20}
              value={scaleValue}
              onChange={(e) => setScaleValue(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-forest-950 accent-forest-300 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ସରକାରୀ ସବସିଡି (୨୫%-୩୫%)" : "PMEGP / MKUY Subsidy"}</span>
              <p className="font-display font-extrabold text-2xl text-sand-50">₹{(scaleValue * 5 * 0.35).toFixed(2)} Lakhs</p>
              <span className="text-[10px] text-emerald-400">Capital Grant</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "DSCR ଅନୁପାତ (ବ୍ୟାଙ୍କଯୋଗ୍ୟ)" : "Bankable DSCR Ratio"}</span>
              <p className="font-display font-extrabold text-2xl text-harvest-400">1.85</p>
              <span className="text-[10px] text-emerald-400">Bank Loan Approved</span>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
              <span className="text-[10px] text-theme-text-muted font-mono uppercase">{isOr ? "ବ୍ୟାଙ୍କ DPR ମଞ୍ଜୁରୀ ହାର" : "DPR Approval Rate"}</span>
              <p className="font-display font-extrabold text-2xl text-aqua-400">100 %</p>
              <span className="text-[10px] text-emerald-400">Turnkey Operational</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
