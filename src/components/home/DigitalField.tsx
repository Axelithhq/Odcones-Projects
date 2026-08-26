"use client";

import React, { useState } from "react";
import { Cpu, Smartphone, Monitor, CheckCircle, Activity, Droplets, Thermometer, ArrowRight, ShieldCheck } from "lucide-react";

export function DigitalField() {
  const [activeScreen, setActiveScreen] = useState<"phone" | "tablet" | "desktop">("phone");

  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative border-b border-forest-800/40 overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0D879F_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aqua-950 border border-aqua-500/30 text-xs font-bold uppercase tracking-widest text-aqua-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>3D SPATIAL DEVICE SHOWCASE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight">
            ODCONES FieldOS™ Spatial Platform
          </h2>

          <p className="text-sand-200/80 text-sm sm:text-base leading-relaxed font-light">
            Designed for mobile field officers, district project managers, and executive stakeholders. Experience the real HTML/React interface of FieldOS below.
          </p>

          <div className="flex justify-center gap-2 pt-2">
            <button
              onClick={() => setActiveScreen("phone")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                activeScreen === "phone"
                  ? "bg-aqua-600 border-aqua-400 text-sand-50 shadow-lg"
                  : "bg-forest-900/60 border-forest-800 text-sand-200/70 hover:text-sand-50"
              }`}
            >
              Field Mobile App
            </button>
            <button
              onClick={() => setActiveScreen("tablet")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                activeScreen === "tablet"
                  ? "bg-aqua-600 border-aqua-400 text-sand-50 shadow-lg"
                  : "bg-forest-900/60 border-forest-800 text-sand-200/70 hover:text-sand-50"
              }`}
            >
              Tablet Manager Portal
            </button>
            <button
              onClick={() => setActiveScreen("desktop")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                activeScreen === "desktop"
                  ? "bg-aqua-600 border-aqua-400 text-sand-50 shadow-lg"
                  : "bg-forest-900/60 border-forest-800 text-sand-200/70 hover:text-sand-50"
              }`}
            >
              Executive Desktop Command
            </button>
          </div>
        </div>

        {/* 3D Spatial Frame Display Container */}
        <div className={`mx-auto p-8 rounded-3xl bg-forest-900/50 border border-forest-700/50 shadow-2xl backdrop-blur-xl relative ${
          activeScreen === "phone" ? "max-w-sm" : activeScreen === "tablet" ? "max-w-2xl" : "max-w-5xl"
        } transition-all duration-500`}>
          <div className="flex items-center justify-between border-b border-forest-800 pb-4 mb-6">
            <div className="flex items-center gap-2 text-xs font-bold text-harvest-400 uppercase font-display">
              <ShieldCheck className="w-4 h-4" />
              <span>LIVE FIELDOS DEMO — {activeScreen.toUpperCase()} VIEW</span>
            </div>
            <span className="text-[10px] font-mono text-forest-300 bg-forest-950 px-2.5 py-1 rounded-md border border-forest-800">
              OPERATIONAL
            </span>
          </div>

          {/* Interactive Screen Interface */}
          <div className="p-6 rounded-2xl bg-forest-950 border border-forest-800 space-y-6">
            {/* Top Greeting Bar */}
            <div className="flex justify-between items-center border-b border-forest-800/80 pb-4">
              <div>
                <span className="text-[10px] font-bold text-forest-400 uppercase">GOOD MORNING, FIELD OFFICER</span>
                <h3 className="font-display font-extrabold text-lg text-sand-50">ODCONES FieldOS Hub</h3>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs text-harvest-400 font-bold">28.4°C | Clear Sky</span>
                {activeScreen !== "phone" && (
                  <p className="text-[10px] text-sand-200/60">Bhubaneswar Regional Node</p>
                )}
              </div>
            </div>

            {/* Live Status Cards */}
            <div className={`grid gap-4 ${
              activeScreen === "phone" ? "grid-cols-1" : activeScreen === "tablet" ? "grid-cols-2" : "grid-cols-3"
            }`}>
              <div className="p-4 rounded-xl bg-forest-900/60 border border-forest-800 space-y-1">
                <div className="flex items-center justify-between text-xs text-harvest-400">
                  <span>Soil Moisture</span>
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <p className="font-display font-bold text-xl text-sand-50">68 %</p>
                <span className="text-[10px] text-emerald-400">Optimal Root Moisture</span>
              </div>

              <div className="p-4 rounded-xl bg-forest-900/60 border border-forest-800 space-y-1">
                <div className="flex items-center justify-between text-xs text-aqua-400">
                  <span>Water DO Level</span>
                  <Droplets className="w-3.5 h-3.5" />
                </div>
                <p className="font-display font-bold text-xl text-sand-50">6.85 mg/L</p>
                <span className="text-[10px] text-emerald-400">Pond Aerators Active</span>
              </div>

              {(activeScreen === "tablet" || activeScreen === "desktop") && (
                <div className="p-4 rounded-xl bg-forest-900/60 border border-forest-800 space-y-1">
                  <div className="flex items-center justify-between text-xs text-forest-300">
                    <span>Polyhouse Temp</span>
                    <Thermometer className="w-3.5 h-3.5" />
                  </div>
                  <p className="font-display font-bold text-xl text-sand-50">26.5 °C</p>
                  <span className="text-[10px] text-emerald-400">Ventilation Normal</span>
                </div>
              )}
            </div>

            {/* Desktop-only: Additional detail panels */}
            {activeScreen === "desktop" && (
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-forest-900/40 border border-forest-800/60 space-y-2">
                  <span className="text-[10px] font-bold text-harvest-400 uppercase">Cage Cluster Status</span>
                  <div className="space-y-1 text-xs text-sand-200/80">
                    <div className="flex justify-between"><span>Hirakud Cluster #1</span><span className="text-emerald-400">24/24 Active</span></div>
                    <div className="flex justify-between"><span>Hirakud Cluster #2</span><span className="text-emerald-400">18/18 Active</span></div>
                    <div className="flex justify-between"><span>Mahanadi Pilot</span><span className="text-harvest-400">6/12 Deploying</span></div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-forest-900/40 border border-forest-800/60 space-y-2">
                  <span className="text-[10px] font-bold text-harvest-400 uppercase">Beneficiary Ledger</span>
                  <div className="space-y-1 text-xs text-sand-200/80">
                    <div className="flex justify-between"><span>Hirakud FPS</span><span className="text-emerald-400">350 Members</span></div>
                    <div className="flex justify-between"><span>Koraput FPO</span><span className="text-emerald-400">120 Members</span></div>
                    <div className="flex justify-between"><span>Ganjam SHG</span><span className="text-harvest-400">85 Members</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* Today's Action Checklist */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-widest font-display">
                TODAY&apos;S FIELD TASKS AUDIT:
              </span>
              <div className={`space-y-2 text-xs ${activeScreen === "phone" ? "" : "grid grid-cols-1 sm:grid-cols-2 gap-2 space-y-0"}`}>
                {[
                  "Inspect Hirakud Cage Cluster #4 aeration triggers",
                  "Verify Koraput polyhouse micro-drip fertigation dosing",
                  ...(activeScreen !== "phone" ? ["Synchronize daily fish landing auction ledger to cloud"] : []),
                  ...(activeScreen === "desktop" ? [
                    "Review Bhadrak biofloc water quality telemetry alerts",
                    "Approve Ganjam watershed check dam maintenance schedule"
                  ] : []),
                ].map((task, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-forest-900/40 border border-forest-800/60 flex items-center justify-between">
                    <span className="text-sand-100 font-semibold">{task}</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
