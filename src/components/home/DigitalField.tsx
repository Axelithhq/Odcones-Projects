"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Tablet,
  Monitor,
  Activity,
  Droplets,
  Thermometer,
  ShieldCheck,
  CheckCircle2,
  Wifi,
  Battery,
  Signal,
  Lock,
  Globe,
  Sparkles,
  Bell,
  ArrowRight,
  Fish,
  Sprout
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import Link from "next/link";

type DeviceType = "phone" | "tablet" | "desktop";

export function DigitalField() {
  const [activeDevice, setActiveDevice] = useState<DeviceType>("phone");
  const { language } = useTranslation();
  const isOr = language === "or";

  return (
    <section className="py-24 bg-theme-base text-sand-50 relative border-b border-forest-800/40 overflow-hidden transition-colors duration-500">
      {/* Background Ambient Grid & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#0D879F_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-transparent to-forest-950/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-aqua-950/90 border border-aqua-500/40 text-xs font-bold uppercase tracking-widest text-aqua-400 font-display shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-harvest-400 animate-pulse" />
            <span>{isOr ? "ଆକ୍ୱା ବନ୍ଧୁ ଆପ୍ ଓ ୱେବସାଇଟ୍ — ଶୀଘ୍ର ଆସୁଛି" : "COMING SOON — AQUA BANDHU APP & WEB PLATFORM"}</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-sand-50 tracking-tight leading-[1.08] text-balance">
            {isOr ? "ଆକ୍ୱା ବନ୍ଧୁ™ ଡିଜିଟାଲ ପ୍ଲାଟଫର୍ମ" : "Aqua Bandhu™ Field Engine"}
          </h2>

          <p className="text-theme-text-muted text-sm sm:text-base leading-relaxed font-normal max-w-prose-custom mx-auto">
            {isOr
              ? "ଓଡ଼ିଶାର ଚାଷୀ, ମତ୍ସ୍ୟଜୀବୀ ଓ ଆଗ୍ରୋ-ଉଦ୍ୟୋଗୀମାନଙ୍କ ପାଇଁ ସ୍ମାର୍ଟ ମୋବାଇଲ ଆପ୍ ଓ ୱେବ୍ କମାଣ୍ଡ ସେଣ୍ଟର। ମୋବାଇଲ, ଟ୍ୟାବଲେଟ୍ ଓ ଡେସ୍କଟପ୍ ଭ୍ୟୁ ପରୀକ୍ଷା କରନ୍ତୁ।"
              : "Smart Aquaculture, Agriculture & Agribusiness companion app for field operators and district project managers across Odisha. Preview the upcoming Aqua Bandhu Mobile App, Tablet Hub, and Web Workstation below."}
          </p>

          {/* Interactive Device View Selector Tabs */}
          <div className="inline-flex items-center justify-center p-1.5 rounded-2xl glass-panel border border-forest-700/60 shadow-xl gap-1.5 sm:gap-2">
            {[
              { id: "phone", label: isOr ? "ମୋବାଇଲ ଆପ୍" : "Aqua Bandhu Mobile App", icon: Smartphone },
              { id: "tablet", label: isOr ? "ଟ୍ୟାବଲେଟ୍ କନସୋଲ୍" : "Tablet Field Console", icon: Tablet },
              { id: "desktop", label: isOr ? "ୱେବ୍ ୱର୍କଷ୍ଟେସନ" : "Web Workstation", icon: Monitor },
            ].map((device) => {
              const isSelected = activeDevice === device.id;
              const Icon = device.icon;

              return (
                <button
                  key={device.id}
                  onClick={() => setActiveDevice(device.id as DeviceType)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider transition-all flex items-center gap-2 border whitespace-nowrap ${
                    isSelected
                      ? "text-sand-50 shadow-xl border-harvest-400"
                      : "text-theme-text-muted hover:text-sand-50 border-transparent hover:bg-forest-900/40"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeDeviceTab"
                      className="absolute inset-0 rounded-xl bg-forest-900 border border-harvest-400 shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10 text-harvest-400" />
                  <span className="relative z-10">{device.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Hardware Device Showcase Area */}
        <div className="flex justify-center items-center py-4">
          <AnimatePresence mode="wait">
            {/* MOBILE HARDWARE FRAME */}
            {activeDevice === "phone" && (
              <motion.div
                key="phone"
                initial={{ opacity: 0, scale: 0.9, y: 20, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20, rotateX: -10 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-full max-w-[360px] relative"
              >
                {/* Smartphone Outer Chassis Shell */}
                <div className="rounded-[44px] border-[10px] border-slate-900 bg-slate-950 p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-t-[12px] border-b-[12px] relative overflow-hidden ring-1 ring-slate-800">
                  {/* Smartphone Top Speaker Line & Camera Notch / Dynamic Island */}
                  <div className="flex justify-center items-center gap-2 mb-2 relative z-30 pt-1">
                    <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-end px-2 gap-1.5 shadow-inner">
                      <div className="w-2 h-2 rounded-full bg-slate-950 border border-slate-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60 animate-pulse" />
                    </div>
                  </div>

                  {/* Phone Screen Status Bar */}
                  <div className="flex justify-between items-center px-4 py-1 text-[10px] font-mono text-sand-200/80 mb-2 border-b border-forest-900/60">
                    <span className="font-bold">09:41</span>
                    <div className="flex items-center gap-1.5">
                      <Signal className="w-3 h-3 text-emerald-400" />
                      <Wifi className="w-3 h-3 text-aqua-400" />
                      <Battery className="w-3.5 h-3.5 text-harvest-400" />
                    </div>
                  </div>

                  {/* Phone Screen App Content */}
                  <div className="rounded-2xl bg-forest-950 p-4 space-y-4 border border-forest-800/80 text-left min-h-[500px] flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* App Header */}
                      <div className="flex items-center justify-between border-b border-forest-800 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-xl bg-forest-900 border border-harvest-400/50">
                            <Fish className="w-4 h-4 text-harvest-400" />
                          </div>
                          <div>
                            <h4 className="font-display font-extrabold text-sm text-sand-50">Aqua Bandhu™</h4>
                            <span className="text-[9px] text-harvest-400 font-mono font-semibold uppercase block">
                              {isOr ? "ମୋବାଇଲ ଆପ୍ ପ୍ରିଭ୍ୟୁ" : "Field Companion Mobile"}
                            </span>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-[9px] font-mono font-bold text-emerald-400 animate-pulse">
                          LIVE
                        </span>
                      </div>

                      {/* Coming Soon Alert Banner */}
                      <div className="p-3 rounded-xl bg-gradient-to-r from-forest-900 to-aqua-950 border border-aqua-500/40 space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-bold text-aqua-400 uppercase font-display">
                          <span>{isOr ? "ଲଞ୍ଚ ନୋଟିଫିକେସନ୍" : "APP LAUNCH ANNOUNCEMENT"}</span>
                          <Bell className="w-3 h-3 text-harvest-400 animate-bounce" />
                        </div>
                        <p className="text-[11px] text-sand-100 leading-snug">
                          {isOr
                            ? "ଆକ୍ୱା ବନ୍ଧୁ ଆପ୍ ଶୀଘ୍ର Android & iOS ରେ ଉପଲବ୍ଧ ହେବ।"
                            : "Aqua Bandhu Mobile App launching soon on Android & iOS Play Store."}
                        </p>
                      </div>

                      {/* Live Telemetry Cards inside Phone */}
                      <div className="space-y-2">
                        <div className="p-3 rounded-xl bg-forest-900/80 border border-forest-800 flex items-center justify-between">
                          <div className="space-y-0.5">
                            <span className="text-[10px] text-theme-text-muted uppercase block">Hirakud Cage DO</span>
                            <span className="font-display font-extrabold text-base text-sand-50">6.85 mg/L</span>
                          </div>
                          <Droplets className="w-5 h-5 text-aqua-400" />
                        </div>

                        <div className="p-3 rounded-xl bg-forest-900/80 border border-forest-800 flex items-center justify-between">
                          <div className="space-y-0.5">
                            <span className="text-[10px] text-theme-text-muted uppercase block">Biofloc Temp</span>
                            <span className="font-display font-extrabold text-base text-sand-50">26.2 °C</span>
                          </div>
                          <Thermometer className="w-5 h-5 text-harvest-400" />
                        </div>
                      </div>
                    </div>

                    {/* Mobile App Navigation Footer Bar */}
                    <div className="pt-2 border-t border-forest-800 grid grid-cols-4 text-center text-[9px] font-mono text-theme-text-muted">
                      <div className="text-harvest-400 font-bold flex flex-col items-center gap-1">
                        <Fish className="w-3.5 h-3.5" />
                        <span>Hub</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Telemetry</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Sprout className="w-3.5 h-3.5" />
                        <span>Crops</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>DPR</span>
                      </div>
                    </div>
                  </div>

                  {/* Smartphone Home Indicator Line at Bottom */}
                  <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
                </div>
              </motion.div>
            )}

            {/* TABLET HARDWARE FRAME */}
            {activeDevice === "tablet" && (
              <motion.div
                key="tablet"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-full max-w-2xl relative"
              >
                {/* Tablet Chassis Shell */}
                <div className="rounded-[36px] border-[12px] border-slate-900 bg-slate-950 p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-slate-800">
                  {/* Tablet Top Camera Lens */}
                  <div className="flex justify-center mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-blue-900/80" />
                    </div>
                  </div>

                  {/* Tablet Screen Content */}
                  <div className="rounded-2xl bg-forest-950 p-6 space-y-6 border border-forest-800/80 text-left min-h-[460px]">
                    {/* Tablet Header Bar */}
                    <div className="flex items-center justify-between border-b border-forest-800 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-forest-900 border border-harvest-400/50">
                          <Tablet className="w-5 h-5 text-harvest-400" />
                        </div>
                        <div>
                          <h3 className="font-display font-extrabold text-xl text-sand-50">
                            Aqua Bandhu™ Tablet Console
                          </h3>
                          <span className="text-xs text-aqua-400 font-mono">
                            {isOr ? "ଜିଲ୍ଲା ମ୍ୟାନେଜର ପୋର୍ଟାଲ" : "District Project Manager Portal (Odisha Node)"}
                          </span>
                        </div>
                      </div>

                      <div className="px-3 py-1 rounded-full bg-harvest-950 border border-harvest-500/40 text-xs font-mono font-bold text-harvest-400">
                        {isOr ? "ଶୀଘ୍ର ଆସୁଛି" : "COMING SOON"}
                      </div>
                    </div>

                    {/* Tablet Grid Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-forest-900/60 border border-forest-800 space-y-1">
                        <span className="text-xs text-harvest-400 font-bold uppercase block">Hirakud Cage DO</span>
                        <p className="font-display font-bold text-2xl text-sand-50">6.85 mg/L</p>
                        <span className="text-[10px] text-emerald-400">Aerators Active</span>
                      </div>

                      <div className="p-4 rounded-xl bg-forest-900/60 border border-forest-800 space-y-1">
                        <span className="text-xs text-aqua-400 font-bold uppercase block">Biofloc Temp</span>
                        <p className="font-display font-bold text-2xl text-sand-50">26.2 °C</p>
                        <span className="text-[10px] text-emerald-400">Thermal Locked</span>
                      </div>

                      <div className="p-4 rounded-xl bg-forest-900/60 border border-forest-800 space-y-1">
                        <span className="text-xs text-forest-300 font-bold uppercase block">Soil Carbon</span>
                        <p className="font-display font-bold text-2xl text-sand-50">1.45 %</p>
                        <span className="text-[10px] text-emerald-400">Regenerative Level</span>
                      </div>
                    </div>

                    {/* Tablet Task Ledger */}
                    <div className="p-4 rounded-2xl bg-forest-900/40 border border-forest-800 space-y-3">
                      <span className="text-xs font-bold text-harvest-400 uppercase tracking-widest font-display block">
                        AQUA BANDHU REGIONAL NODE AUDIT:
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-forest-950 border border-forest-800 flex justify-between items-center">
                          <span>Hirakud Floating Cage Telemetry Sync</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="p-2.5 rounded-xl bg-forest-950 border border-forest-800 flex justify-between items-center">
                          <span>Koraput Polyhouse Drip Fertigation Dosing</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* DESKTOP / PC HARDWARE FRAME */}
            {activeDevice === "desktop" && (
              <motion.div
                key="desktop"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-full max-w-4xl relative"
              >
                {/* Desktop Monitor Frame */}
                <div className="rounded-t-2xl rounded-b-md border-[10px] border-slate-900 bg-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-slate-800 overflow-hidden">
                  {/* Browser Chrome Header Bar */}
                  <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
                    {/* Window Controls Red/Yellow/Green Dots */}
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    </div>

                    {/* Browser Address Bar */}
                    <div className="flex-1 max-w-md mx-4 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-sand-200/70 flex items-center justify-center gap-2">
                      <Lock className="w-3 h-3 text-emerald-400" />
                      <span>https://aquabandhu.odcons.com/command-center</span>
                    </div>

                    <div className="text-[10px] font-mono text-harvest-400 font-bold">
                      ODCONS ENGINE v2.4
                    </div>
                  </div>

                  {/* Workstation Screen Interface */}
                  <div className="p-6 rounded-b-md bg-forest-950 space-y-6 text-left min-h-[460px]">
                    <div className="flex justify-between items-center border-b border-forest-800 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-extrabold text-2xl text-sand-50">
                            Aqua Bandhu™ Enterprise Workstation
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-aqua-950 border border-aqua-500/40 text-[10px] font-mono text-aqua-400 font-bold">
                            WEB PLATFORM COMING SOON
                          </span>
                        </div>
                        <p className="text-xs text-theme-text-muted">
                          {isOr
                            ? "ଓଡ଼ିଶାର ଏକତ୍ରିତ ମତ୍ସ୍ୟଚାଷ, କୃଷି ଓ ଆଗ୍ରୋ-ପ୍ରସେସିଂ କମାଣ୍ଡ ସେଣ୍ଟର"
                            : "Integrated Executive Command Center for Agriculture & Agribusiness DPR Management"}
                        </p>
                      </div>

                      <div className="text-right font-mono text-xs text-harvest-400 font-bold">
                        <span>NODE: BHUBANESWAR HQ</span>
                      </div>
                    </div>

                    {/* Desktop Command Dashboard Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="p-4 rounded-xl bg-forest-900/60 border border-forest-800 space-y-1">
                        <span className="text-xs text-harvest-400 font-bold uppercase block">Active DPRs</span>
                        <p className="font-display font-bold text-2xl text-sand-50">142 Units</p>
                        <span className="text-[10px] text-emerald-400">100% Bank Approval Rate</span>
                      </div>

                      <div className="p-4 rounded-xl bg-forest-900/60 border border-forest-800 space-y-1">
                        <span className="text-xs text-aqua-400 font-bold uppercase block">Floating Cages</span>
                        <p className="font-display font-bold text-2xl text-sand-50">1,200+ Cages</p>
                        <span className="text-[10px] text-emerald-400">Telemetry Active</span>
                      </div>

                      <div className="p-4 rounded-xl bg-forest-900/60 border border-forest-800 space-y-1">
                        <span className="text-xs text-forest-300 font-bold uppercase block">Polyhouses</span>
                        <p className="font-display font-bold text-2xl text-sand-50">520 Units</p>
                        <span className="text-[10px] text-emerald-400">Precision Fertigation</span>
                      </div>

                      <div className="p-4 rounded-xl bg-forest-900/60 border border-forest-800 space-y-1">
                        <span className="text-xs text-amber-400 font-bold uppercase block">Farmers Impacted</span>
                        <p className="font-display font-bold text-2xl text-sand-50">35,000+</p>
                        <span className="text-[10px] text-emerald-400">Odisha Statewide</span>
                      </div>
                    </div>

                    {/* Bottom Status Table */}
                    <div className="p-4 rounded-2xl bg-forest-900/40 border border-forest-800 space-y-2">
                      <span className="text-xs font-bold text-harvest-400 uppercase tracking-widest font-display block">
                        AQUA BANDHU STATEWIDE TELEMETRY NODES:
                      </span>
                      <div className="grid grid-cols-3 gap-3 text-xs text-sand-100 font-mono">
                        <div className="p-2 rounded-lg bg-forest-950 border border-forest-800 flex justify-between">
                          <span>Hirakud Node</span>
                          <span className="text-emerald-400">24 Cages Online</span>
                        </div>
                        <div className="p-2 rounded-lg bg-forest-950 border border-forest-800 flex justify-between">
                          <span>Koraput Node</span>
                          <span className="text-emerald-400">18 Polyhouses Online</span>
                        </div>
                        <div className="p-2 rounded-lg bg-forest-950 border border-forest-800 flex justify-between">
                          <span>Ganjam Node</span>
                          <span className="text-emerald-400">12 Check Dams Online</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sturdy Desktop Monitor Stand & Base Pedestal */}
                <div className="w-28 h-6 bg-gradient-to-b from-slate-800 to-slate-900 mx-auto shadow-md" />
                <div className="w-48 h-3 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-b-xl mx-auto shadow-2xl border-t border-slate-700" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
