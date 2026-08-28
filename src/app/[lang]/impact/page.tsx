import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ImpactCounters } from "@/components/home/ImpactCounters";
import { generateLangParams, requireLang, getServerT } from "@/lib/page-utils";
import { ShieldCheck, BarChart3, TrendingUp, Users, Droplets } from "lucide-react";

export const metadata = {
  title: "Impact & Metrics | ODCONS PROJECTS",
  description: "Impact metrics and community footprints reported by ODCONS PROJECTS. Figures shown as placeholders until verified by the organization.",
};

export function generateStaticParams() {
  return generateLangParams();
}

const IMPACT_ROWS: { sector: [string, string]; intervention: [string, string] }[] = [
  { sector: ["Aquaculture", "ଜଳଚର ପାଳନ"], intervention: ["Hirakud Reservoir Floating Cages & Biofloc", "ହିରାକୁଦ ଜଳାଶୟ ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍ ଓ ବାୟୋଫ୍ଲୋକ୍"] },
  { sector: ["Horticulture", "ଉଦ୍ୟାନ କୃଷି"], intervention: ["Polyhouses & Micro-drip Fertigation", "ପଲିହାଉସ ଓ ମାଇକ୍ରୋ-ଡ୍ରିପ୍ ଫର୍ଟିଗେସନ୍"] },
  { sector: ["Water & Soil", "ଜଳ ଓ ମାଟି"], intervention: ["Sub-surface Drainage & Check Dams", "ଭୂତଳ ନିଷ୍କାସନ ଓ ଚେକ୍ ଡ୍ୟାମ୍"] },
  { sector: ["Animal Husbandry", "ପଶୁପାଳନ"], intervention: ["Bulk Milk Coolers & Green Fodder Hubs", "ବଲ୍କ ମିଲ୍କ କୁଲର ଓ ହରିତ ପଶୁଖାଦ୍ୟ କେନ୍ଦ୍ର"] },
];

export default async function ImpactPage(props: { params: Promise<{ lang: string }> }) {
  const lang = requireLang((await props.params).lang);
  const t = getServerT(lang);
  const isOr = lang === "or";
  const pick = (pair: [string, string]) => (isOr ? pair[1] : pair[0]);

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>{t("impact.badge")}</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            {t("impact.title")}
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            {t("impact.dataNote")}
          </p>
        </div>
      </section>

      <ImpactCounters />

      {/* Sector Yield Breakdown Table */}
      <section className="py-20 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase text-center">
            {t("impact.tableTitle")}
          </h2>

          <div className="overflow-x-auto rounded-3xl border border-forest-800 bg-forest-900/40 p-6">
            <table className="w-full text-left text-xs text-sand-200">
              <thead className="border-b border-forest-800 text-harvest-400 font-display font-bold uppercase text-[10px]">
                <tr>
                  <th className="pb-3">{t("impact.sector")}</th>
                  <th className="pb-3">{t("impact.intervention")}</th>
                  <th className="pb-3">{t("impact.outputMetric")}</th>
                  <th className="pb-3">{t("impact.income")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest-800/60 font-medium">
                {IMPACT_ROWS.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-4 font-bold text-sand-50">{pick(row.sector)}</td>
                    <td>{pick(row.intervention)}</td>
                    <td className="text-harvest-300/90 font-semibold">{t("impact.comingSoon")}</td>
                    <td className="text-harvest-300/90 font-semibold">{t("impact.comingSoon")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-[10px] text-sand-200/50 font-mono uppercase tracking-widest">
            {t("impact.pendingVerification")}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
