"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, Activity, Droplets, Thermometer, ShieldCheck, ArrowRight, BarChart3, Smartphone } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function PlatformTeaser() {
  const [activeTab, setActiveTab] = useState<"water" | "soil" | "weather">("water");
  const { localizeHref } = useTranslation();

  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative overflow-hidden border-b border-forest-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aqua-950 border border-aqua-500/30 text-xs font-bold uppercase tracking-widest text-aqua-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNOLOGY THAT EXTENDS THE FIELD</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight leading-[1.1]">
              ODCONES FieldOS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-forest-300 to-harvest-400">
                Digital Monitoring Hub
              </span>
            </h2>

            <p className="text-sand-200/80 text-sm sm:text-base leading-relaxed">
              ODCONES FieldOS provides real-time telemetry, IoT sensor integration, beneficiary management, and satellite crop health analytics for large-scale agricultural and aquaculture interventions.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-sand-100 font-semibold">
                <div className="w-6 h-6 rounded-full bg-forest-800 flex items-center justify-center text-harvest-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Real-Time Aquaculture Dissolved Oxygen & pH Telemetry</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-sand-100 font-semibold">
                <div className="w-6 h-6 rounded-full bg-forest-800 flex items-center justify-center text-harvest-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>GIS Crop Health Index (NDVI) & Weather Predictive Advisory</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-sand-100 font-semibold">
                <div className="w-6 h-6 rounded-full bg-forest-800 flex items-center justify-center text-harvest-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Digital Beneficiary Tracking & FPO Ledger System</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={localizeHref("/platform")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-aqua-700 to-forest-600 hover:from-aqua-600 hover:to-forest-500 text-sand-50 text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-aqua-500/20 transition-all"
                data-cursor-text="DASHBOARD"
              >
                <span>Launch Interactive FieldOS Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Side Mockup Smartphone & Dashboard Widget */}
          <div className="lg:col-span-7 relative">
            <div className="p-6 rounded-3xl bg-forest-900/60 border border-forest-700/50 backdrop-blur-2xl shadow-2xl space-y-6">
              {/* Top Dashboard Header */}
              <div className="flex items-center justify-between border-b border-forest-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold tracking-widest text-sand-100 uppercase font-display">
                    FieldOS TELEMETRY NODE #482 — HIRAKUD POND #12
                  </span>
                </div>
                <span className="text-[10px] font-mono text-forest-300 bg-forest-950 px-2.5 py-1 rounded-md border border-forest-700/40">
                  LIVE STREAM
                </span>
              </div>

              {/* Tab Selector */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("water")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "water"
                      ? "bg-aqua-600 text-sand-50 font-bold"
                      : "bg-forest-950 text-sand-200/60 hover:text-sand-50"
                  }`}
                >
                  Water Telemetry
                </button>
                <button
                  onClick={() => setActiveTab("soil")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "soil"
                      ? "bg-harvest-600 text-sand-50 font-bold"
                      : "bg-forest-950 text-sand-200/60 hover:text-sand-50"
                  }`}
                >
                  Soil Nitrogen & Moisture
                </button>
                <button
                  onClick={() => setActiveTab("weather")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "weather"
                      ? "bg-forest-700 text-sand-50 font-bold"
                      : "bg-forest-950 text-sand-200/60 hover:text-sand-50"
                  }`}
                >
                  Micro-Climate
                </button>
              </div>

              {/* Metric Card Preview Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeTab === "water" && (
                  <>
                    <div className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800/60 space-y-1">
                      <div className="flex items-center justify-between text-xs text-aqua-400">
                        <span>Dissolved Oxygen</span>
                        <Droplets className="w-4 h-4" />
                      </div>
                      <p className="font-display font-bold text-2xl text-sand-50">6.8 mg/L</p>
                      <span className="text-[10px] text-emerald-400">Optimal Range (5.5 - 7.5)</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800/60 space-y-1">
                      <div className="flex items-center justify-between text-xs text-harvest-400">
                        <span>pH Level</span>
                        <Activity className="w-4 h-4" />
                      </div>
                      <p className="font-display font-bold text-2xl text-sand-50">7.4 pH</p>
                      <span className="text-[10px] text-emerald-400">Balanced Alkaline</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800/60 space-y-1">
                      <div className="flex items-center justify-between text-xs text-forest-300">
                        <span>Water Temp</span>
                        <Thermometer className="w-4 h-4" />
                      </div>
                      <p className="font-display font-bold text-2xl text-sand-50">28.4 °C</p>
                      <span className="text-[10px] text-emerald-400">Stable Aeration</span>
                    </div>
                  </>
                )}

                {activeTab === "soil" && (
                  <>
                    <div className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800/60 space-y-1">
                      <div className="flex items-center justify-between text-xs text-harvest-400">
                        <span>Soil Carbon</span>
                        <Activity className="w-4 h-4" />
                      </div>
                      <p className="font-display font-bold text-2xl text-sand-50">0.82 %</p>
                      <span className="text-[10px] text-emerald-400">+42% Soil Improvement</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800/60 space-y-1">
                      <div className="flex items-center justify-between text-xs text-forest-300">
                        <span>Root Moisture</span>
                        <Droplets className="w-4 h-4" />
                      </div>
                      <p className="font-display font-bold text-2xl text-sand-50">64 %</p>
                      <span className="text-[10px] text-emerald-400">Drip Auto-Triggered</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800/60 space-y-1">
                      <div className="flex items-center justify-between text-xs text-aqua-400">
                        <span>Salinity EC</span>
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <p className="font-display font-bold text-2xl text-sand-50">1.2 dS/m</p>
                      <span className="text-[10px] text-emerald-400">Safe Crop Threshold</span>
                    </div>
                  </>
                )}

                {activeTab === "weather" && (
                  <>
                    <div className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800/60 space-y-1">
                      <div className="flex items-center justify-between text-xs text-amber-400">
                        <span>Ambient Temp</span>
                        <Thermometer className="w-4 h-4" />
                      </div>
                      <p className="font-display font-bold text-2xl text-sand-50">31 °C</p>
                      <span className="text-[10px] text-sand-200/60">Humidity 68%</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800/60 space-y-1">
                      <div className="flex items-center justify-between text-xs text-blue-400">
                        <span>Rain Forecast</span>
                        <Droplets className="w-4 h-4" />
                      </div>
                      <p className="font-display font-bold text-2xl text-sand-50">12 mm</p>
                      <span className="text-[10px] text-sand-200/60">Expected 16:00 IST</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800/60 space-y-1">
                      <div className="flex items-center justify-between text-xs text-emerald-400">
                        <span>Wind Speed</span>
                        <Activity className="w-4 h-4" />
                      </div>
                      <p className="font-display font-bold text-2xl text-sand-50">14 km/h</p>
                      <span className="text-[10px] text-emerald-400">South-West Breeze</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
