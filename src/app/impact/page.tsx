import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ImpactCounters } from "@/components/home/ImpactCounters";
import { ShieldCheck, BarChart3, TrendingUp, Users, Droplets } from "lucide-react";

export const metadata = {
  title: "Measurable Impact & Metrics | ODCONES PROJECTS",
  description: "Explore empirical metrics, farm yield enhancements, and community footprints achieved across 25+ districts.",
};

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>FIELD IMPACT AUDIT</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            Empirical Results Across Sectors
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            Every metric reported by ODCONES PROJECTS is audited through field enumeration, third-party evaluations, and satellite remote sensing.
          </p>
        </div>
      </section>

      <ImpactCounters />

      {/* Sector Yield Breakdown Table */}
      <section className="py-20 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase text-center">
            Sector-Wise Impact Summary
          </h2>

          <div className="overflow-x-auto rounded-3xl border border-forest-800 bg-forest-900/40 p-6">
            <table className="w-full text-left text-xs text-sand-200">
              <thead className="border-b border-forest-800 text-harvest-400 font-display font-bold uppercase text-[10px]">
                <tr>
                  <th className="pb-3">Sector</th>
                  <th className="pb-3">Primary Intervention</th>
                  <th className="pb-3">Key Output Metric</th>
                  <th className="pb-3">Net Income Rise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest-800/60 font-medium">
                <tr>
                  <td className="py-4 font-bold text-sand-50">Aquaculture</td>
                  <td>Hirakud Reservoir Floating Cages & Biofloc</td>
                  <td>18,000 MT Biomass Harvested</td>
                  <td className="text-emerald-400 font-bold">+280% Average Income</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-sand-50">Horticulture</td>
                  <td>Polyhouses & Micro-drip Fertigation</td>
                  <td>12,000 MT High-Value Produce</td>
                  <td className="text-emerald-400 font-bold">3.2x Revenue per Acre</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-sand-50">Water & Soil</td>
                  <td>Sub-surface Drainage & Check Dams</td>
                  <td>15,000 Ha Land Restored</td>
                  <td className="text-emerald-400 font-bold">+65% Crop Intensity</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-sand-50">Animal Husbandry</td>
                  <td>Bulk Milk Coolers & Green Fodder Hubs</td>
                  <td>65,000 L Daily Milk Aggregation</td>
                  <td className="text-emerald-400 font-bold">+45% Dairy Profitability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
