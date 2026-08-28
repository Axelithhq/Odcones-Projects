"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
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

const BENEFICIARIES: { name: [string, string]; members: [string, string]; sector: [string, string]; status: [string, string] }[] = [
  {
    name: ["Hirakud Primary Fishermen Co-op Society", "ହିରାକୁଦ ପ୍ରାଥମିକ ମତ୍ସ୍ୟଜୀବୀ ସମବାୟ ସମିତି"],
    members: ["350 Shareholders", "୩୫୦ ଅଂଶଧାରୀ"],
    sector: ["Aquaculture", "ଜଳଚର ଚାଷ"],
    status: ["Active Payouts", "ସକ୍ରିୟ ଦେୟ"],
  },
  {
    name: ["Koraput Tribal Horticulture FPO", "କୋରାପୁଟ ଆଦିବାସୀ ଉଦ୍ୟାନ କୃଷି ଏଫପିଓ"],
    members: ["480 Farmers", "୪୮୦ କୃଷକ"],
    sector: ["Polyhouse Vegetables", "ପଲିହାଉସ ପନିପରିବା"],
    status: ["Verified Produce Buyback", "ଯାଞ୍ଚିତ ଉତ୍ପାଦ କ୍ରୟ"],
  },
  {
    name: ["Ganjam Coastal Saline Reclamation WUA", "ଗଞ୍ଜାମ ଉପକୂଳ ଲୁଣାକ୍ତ ପୁନରୁଦ୍ଧାର ୱାୟୁଏ"],
    members: ["620 Landholders", "୬୨୦ ଜମିମାଲିକ"],
    sector: ["Soil & Water", "ମାଟି ଓ ଜଳ"],
    status: ["Sub-surface Tile Active", "ଭୂତଳ ନିଷ୍କାସନ ସକ୍ରିୟ"],
  },
];

export default function PlatformDashboardPage() {
  const { t, language } = useTranslation();
  const [activeModule, setActiveModule] = useState<"telemetry" | "aquaculture" | "crops" | "beneficiaries">("telemetry");
  const [aeratorsActive, setAeratorsActive] = useState(true);
  const [dripActive, setDripActive] = useState(false);
  const [alertDismissed, setAlertDismissed] = useState(false);

  const pick = (pair: [string, string]) => (language === "or" ? pair[1] : pair[0]);

  return (
    <main className="min-h-screen bg-theme-base text-theme-text relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      {/* Hero Header */}
      <section className="py-12 bg-theme-base border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aqua-950 border border-aqua-500/30 text-xs font-bold uppercase tracking-widest text-aqua-400 mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>{t("platform.badge")}</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-sand-50 uppercase">
              {t("platform.title")}
            </h1>
            <p className="text-xs sm:text-sm text-theme-text-muted pt-1">
              {t("platform.subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-forest-900 border border-forest-700/50 text-xs text-forest-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>24 {t("platform.gatewaysOnline")}</span>
            </div>
            <button
              onClick={() => alert(t("platform.refresh"))}
              className="p-2 rounded-xl bg-forest-900 border border-forest-700/50 text-sand-100 hover:text-harvest-400"
              title={t("platform.refresh")}
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Interactive Dashboard Area */}
      <section className="py-12 bg-theme-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Demo Banner */}
          <div className="p-4 rounded-2xl bg-aqua-950/40 border border-aqua-500/30 flex items-center gap-3">
            <Bell className="w-5 h-5 text-aqua-400 flex-shrink-0" />
            <p className="text-xs text-theme-text-muted">{t("platform.demoBanner")}</p>
          </div>

          {/* Active Alert Banner */}
          {!alertDismissed && (
            <div className="p-4 rounded-2xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="text-xs">
                  <strong className="text-sand-50 font-bold">{t("platform.alertTitle")}: Hirakud Cage Cluster #4</strong>
                  <p className="text-theme-text-muted">{t("platform.alertDesc")}</p>
                </div>
              </div>
              <button
                onClick={() => setAlertDismissed(true)}
                className="text-xs font-bold text-amber-400 hover:underline flex-shrink-0"
              >
                {t("platform.acknowledge")}
              </button>
            </div>
          )}

          {/* Module Selector Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-forest-800/40">
            {[
              { id: "telemetry", label: t("platform.moduleTelemetry"), icon: <Droplets className="w-4 h-4" /> },
              { id: "aquaculture", label: t("platform.moduleAquaculture"), icon: <Activity className="w-4 h-4" /> },
              { id: "crops", label: t("platform.moduleCrops"), icon: <Sprout className="w-4 h-4" /> },
              { id: "beneficiaries", label: t("platform.moduleBeneficiaries"), icon: <Users className="w-4 h-4" /> },
            ].map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex-shrink-0 border ${
                  activeModule === mod.id
                    ? "bg-forest-800 border-harvest-400 text-sand-50 shadow-lg"
                    : "bg-forest-900/40 border-forest-800 text-theme-text-muted hover:text-sand-50"
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
                    <span>{t("platform.doLabel")}</span>
                    <Droplets className="w-4 h-4" />
                  </div>
                  <p className="font-display font-extrabold text-3xl text-sand-50">6.85 mg/L</p>
                  <span className="text-[10px] text-emerald-400">{t("platform.threshold")}</span>
                </div>

                <div className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-2">
                  <div className="flex justify-between items-center text-xs text-harvest-400">
                    <span>{t("platform.phLabel")}</span>
                    <Activity className="w-4 h-4" />
                  </div>
                  <p className="font-display font-extrabold text-3xl text-sand-50">7.42 pH</p>
                  <span className="text-[10px] text-emerald-400">{t("platform.alkalinity")}</span>
                </div>

                <div className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-2">
                  <div className="flex justify-between items-center text-xs text-forest-300">
                    <span>{t("platform.tempLabel")}</span>
                    <Thermometer className="w-4 h-4" />
                  </div>
                  <p className="font-display font-extrabold text-3xl text-sand-50">28.4 °C</p>
                  <span className="text-[10px] text-theme-text-muted">{t("platform.seasonal")}</span>
                </div>

                <div className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-2">
                  <div className="flex justify-between items-center text-xs text-amber-400">
                    <span>{t("platform.ammoniaLabel")}</span>
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <p className="font-display font-extrabold text-3xl text-sand-50">0.02 ppm</p>
                  <span className="text-[10px] text-emerald-400">{t("platform.bioflocLevel")}</span>
                </div>
              </div>

              {/* Interactive Telemetry Actuator Switches */}
              <div className="p-8 rounded-3xl bg-forest-900/60 border border-forest-700/50 space-y-6">
                <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                  {t("platform.actuatorTitle")}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-theme-base border border-forest-800 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-sand-50">{t("platform.aerators")}</h4>
                      <p className="text-xs text-theme-text-muted">Hirakud Cage Sector #4</p>
                    </div>
                    <button
                      onClick={() => setAeratorsActive(!aeratorsActive)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        aeratorsActive
                          ? "bg-emerald-600 text-sand-50 shadow-md"
                          : "bg-forest-800 text-theme-text-muted"
                      }`}
                    >
                      {aeratorsActive ? t("platform.running") : t("platform.paused")}
                    </button>
                  </div>

                  <div className="p-5 rounded-2xl bg-theme-base border border-forest-800 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-sand-50">{t("platform.drip")}</h4>
                      <p className="text-xs text-theme-text-muted">Koraput Polyhouse #12</p>
                    </div>
                    <button
                      onClick={() => setDripActive(!dripActive)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        dripActive
                          ? "bg-emerald-600 text-sand-50 shadow-md"
                          : "bg-forest-800 text-theme-text-muted"
                      }`}
                    >
                      {dripActive ? t("platform.running") : t("platform.paused")}
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
                {t("platform.aquacultureHeader")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((cage) => (
                  <div key={cage} className="p-4 rounded-2xl bg-theme-base border border-forest-800 space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-harvest-400">
                      <span>{t("platform.cageNode")}{cage}</span>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-xs text-theme-text-muted">{t("platform.species")}</p>
                    <p className="text-xs text-theme-text-muted">{t("platform.biomass")}</p>
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
                {t("platform.cropsHeader")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-theme-base border border-forest-800 space-y-2">
                  <span className="text-xs font-bold text-harvest-400">{t("platform.clusterA")}</span>
                  <p className="text-xs text-theme-text-muted">{t("platform.soilCarbon")}</p>
                  <p className="text-xs text-theme-text-muted">{t("platform.vwc")}</p>
                </div>
                <div className="p-5 rounded-2xl bg-theme-base border border-forest-800 space-y-2">
                  <span className="text-xs font-bold text-harvest-400">{t("platform.clusterB")}</span>
                  <p className="text-xs text-theme-text-muted">{t("platform.ec")}</p>
                  <p className="text-xs text-theme-text-muted">{t("platform.npk")}</p>
                </div>
              </div>
            </div>
          )}

          {/* Module 4: Beneficiaries & FPO Ledger */}
          {activeModule === "beneficiaries" && (
            <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-6">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                {t("platform.ledgerHeader")}
              </h3>
              <div className="space-y-3">
                {BENEFICIARIES.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-theme-base border border-forest-800 flex items-center justify-between text-xs">
                    <div>
                      <h4 className="font-bold text-sand-50">{pick(item.name)}</h4>
                      <span className="text-theme-text-muted">{pick(item.members)} • {pick(item.sector)}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 font-bold">
                      {pick(item.status)}
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
