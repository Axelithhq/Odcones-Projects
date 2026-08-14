"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import {
  Activity,
  Droplets,
  Thermometer,
  Cpu,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  BarChart3,
  Layers,
  Sprout,
  Users,
  Search,
  CheckCircle,
  Bell
} from "lucide-react";

export default function PlatformDashboardPage() {
  const [activeModule, setActiveModule] = useState<"telemetry" | "aquaculture" | "crops" | "beneficiaries">("telemetry");
  const [aeratorsActive, setAeratorsActive] = useState(true);
  const [dripActive, setDripActive] = useState(false);
  const [alertDismissed, setAlertDismissed] = useState(false);

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      {/* Hero Header */}
      <section className="py-12 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aqua-950 border border-aqua-500/30 text-xs font-bold uppercase tracking-widest text-aqua-400 mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>LIVE SYSTEM DEMO PLATFORM</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-sand-50 uppercase">
              ODCONES FieldOS™ Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-sand-200/70 pt-1">
              Integrated Field Telemetry, IoT Aeration Control, & Beneficiary Tracking Portal
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-forest-900 border border-forest-700/50 text-xs text-forest-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>24 IoT Gateways Online</span>
            </div>
            <button
              onClick={() => alert("Telemetry refreshed successfully.")}
              className="p-2 rounded-xl bg-forest-900 border border-forest-700/50 text-sand-100 hover:text-harvest-400"
              title="Refresh Telemetry"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Interactive Dashboard Area */}
      <section className="py-12 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Active Alert Banner */}
          {!alertDismissed && (
            <div className="p-4 rounded-2xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="text-xs">
                  <strong className="text-sand-50 font-bold">AUTOMATED ALERT: Hirakud Cage Cluster #4</strong>
                  <p className="text-sand-200/80">Nocturnal DO levels dropped to 5.2 mg/L. Automated emergency aeration triggered.</p>
                </div>
              </div>
              <button
                onClick={() => setAlertDismissed(true)}
                className="text-xs font-bold text-amber-400 hover:underline flex-shrink-0"
              >
                Acknowledge Alert
              </button>
            </div>
          )}

          {/* Module Selector Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-forest-800/40">
            {[
              { id: "telemetry", label: "Water Telemetry & Aeration", icon: <Droplets className="w-4 h-4" /> },
              { id: "aquaculture", label: "Hirakud Reservoir Cage Telemetries", icon: <Activity className="w-4 h-4" /> },
              { id: "crops", label: "Koraput Polyhouse Soil Sensors", icon: <Sprout className="w-4 h-4" /> },
              { id: "beneficiaries", label: "Beneficiary & FPO Ledger", icon: <Users className="w-4 h-4" /> },
            ].map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex-shrink-0 border ${
                  activeModule === mod.id
                    ? "bg-forest-800 border-harvest-400 text-sand-50 shadow-lg"
                    : "bg-forest-900/40 border-forest-800 text-sand-200/70 hover:text-sand-50"
                }`}
              >
                {mod.icon}
                <span>{mod.label}</span>
              </button>
            ))}
          </div>

          {/* Module 1: Telemetry & IoT Controls */}
          {activeModule === "telemetry" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-2">
                  <div className="flex justify-between items-center text-xs text-aqua-400">
                    <span>Dissolved Oxygen (DO)</span>
                    <Droplets className="w-4 h-4" />
                  </div>
                  <p className="font-display font-extrabold text-3xl text-sand-50">6.85 mg/L</p>
                  <span className="text-[10px] text-emerald-400">Optimal threshold maintained</span>
                </div>

                <div className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-2">
                  <div className="flex justify-between items-center text-xs text-harvest-400">
                    <span>Pond pH Level</span>
                    <Activity className="w-4 h-4" />
                  </div>
                  <p className="font-display font-extrabold text-3xl text-sand-50">7.42 pH</p>
                  <span className="text-[10px] text-emerald-400">Alkalinity balance clean</span>
                </div>

                <div className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-2">
                  <div className="flex justify-between items-center text-xs text-forest-300">
                    <span>Water Temperature</span>
                    <Thermometer className="w-4 h-4" />
                  </div>
                  <p className="font-display font-extrabold text-3xl text-sand-50">28.4 °C</p>
                  <span className="text-[10px] text-sand-200/60">Seasonal average</span>
                </div>

                <div className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-2">
                  <div className="flex justify-between items-center text-xs text-amber-400">
                    <span>Ammonia (NH₃)</span>
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <p className="font-display font-extrabold text-3xl text-sand-50">0.02 ppm</p>
                  <span className="text-[10px] text-emerald-400">Safe Biofloc level</span>
                </div>
              </div>

              {/* Interactive Telemetry Actuator Switches */}
              <div className="p-8 rounded-3xl bg-forest-900/60 border border-forest-700/50 space-y-6">
                <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                  Remote IoT Actuator Control Panel
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-forest-950 border border-forest-800 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-sand-50">Venturi Microbubble Aerators</h4>
                      <p className="text-xs text-sand-200/60">Hirakud Cage Sector #4</p>
                    </div>
                    <button
                      onClick={() => setAeratorsActive(!aeratorsActive)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        aeratorsActive
                          ? "bg-emerald-600 text-sand-50 shadow-md"
                          : "bg-forest-800 text-sand-200/60"
                      }`}
                    >
                      {aeratorsActive ? "RUNNING (ON)" : "PAUSED (OFF)"}
                    </button>
                  </div>

                  <div className="p-5 rounded-2xl bg-forest-950 border border-forest-800 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-sand-50">Automated Sub-surface Drip</h4>
                      <p className="text-xs text-sand-200/60">Koraput Polyhouse #12</p>
                    </div>
                    <button
                      onClick={() => setDripActive(!dripActive)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        dripActive
                          ? "bg-emerald-600 text-sand-50 shadow-md"
                          : "bg-forest-800 text-sand-200/60"
                      }`}
                    >
                      {dripActive ? "IRRIGATING (ON)" : "STANDBY (OFF)"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Module 2: Hirakud Reservoir Cage Telemetries */}
          {activeModule === "aquaculture" && (
            <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-6">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                Hirakud Floating Cage Telemetry Nodes (240 Cages)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((cage) => (
                  <div key={cage} className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-harvest-400">
                      <span>CAGE NODE #{cage}</span>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-xs text-sand-200/70">Species: Pangasius Hypophthalmus</p>
                    <p className="text-xs text-sand-200/70">Biomass: 4.8 Metric Tonnes</p>
                    <p className="text-xs text-aqua-400 font-mono">DO: 6.7 mg/L | Temp: 28.1°C</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Module 3: Koraput Polyhouse Soil Sensors */}
          {activeModule === "crops" && (
            <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-6">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                Koraput High-Altitude Polyhouse Soil Sensors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-forest-950 border border-forest-800 space-y-2">
                  <span className="text-xs font-bold text-harvest-400">POLYHOUSE CLUSTER A (STRAWBERRIES)</span>
                  <p className="text-xs text-sand-200/80">Soil Carbon: 0.85% (Optimal organic level)</p>
                  <p className="text-xs text-sand-200/80">Volumetric Water Content: 32% (Ideal field capacity)</p>
                </div>
                <div className="p-5 rounded-2xl bg-forest-950 border border-forest-800 space-y-2">
                  <span className="text-xs font-bold text-harvest-400">POLYHOUSE CLUSTER B (YELLOW CAPSICUM)</span>
                  <p className="text-xs text-sand-200/80">Electrical Conductivity (EC): 1.4 dS/m</p>
                  <p className="text-xs text-sand-200/80">Nitrogen / Phosphorus / Potassium: 140 - 45 - 180 ppm</p>
                </div>
              </div>
            </div>
          )}

          {/* Module 4: Beneficiaries & FPO Ledger */}
          {activeModule === "beneficiaries" && (
            <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-6">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                Digital Beneficiary Ledger & FPO Registry
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Hirakud Primary Fishermen Co-op Society", members: "350 Shareholders", sector: "Aquaculture", status: "Active Payouts" },
                  { name: "Koraput Tribal Horticulture FPO", members: "480 Farmers", sector: "Polyhouse Vegetables", status: "Verified Produce Buyback" },
                  { name: "Ganjam Coastal Saline Reclamation WUA", members: "620 Landholders", sector: "Soil & Water", status: "Sub-surface Tile Active" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-forest-950 border border-forest-800 flex items-center justify-between text-xs">
                    <div>
                      <h4 className="font-bold text-sand-50">{item.name}</h4>
                      <span className="text-sand-200/60">{item.members} • {item.sector}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 font-bold">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
