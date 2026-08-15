import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { FounderSection } from "@/components/home/FounderSection";
import { generateLangParams, requireLang, getServerT } from "@/lib/page-utils";
import { TIMELINE } from "@/data/aboutData";
import { Eye, Target } from "lucide-react";

export const metadata = {
  title: "About ODCONES PROJECTS | Founder Anshuman Mohapatra & Ecosystem Vision",
  description: "Learn about ODCONES PROJECTS mission, vision, Founder Anshuman Mohapatra and evolutionary roadmap across rural development.",
};

export function generateStaticParams() {
  return generateLangParams();
}

export default async function AboutPage(props: { params: Promise<{ lang: string }> }) {
  const lang = requireLang((await props.params).lang);
  const t = getServerT(lang);
  const isOr = lang === "or";

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>{t("about.badge")}</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            {t("about.title")}
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            {t("about.subtitle", { founder: "Anshuman Mohapatra" }).split("Anshuman Mohapatra").map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <strong className="text-sand-50">Anshuman Mohapatra</strong>}
              </React.Fragment>
            ))}
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Vision & Mission */}
      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 border border-forest-600 flex items-center justify-center text-harvest-400">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-sand-50 uppercase">{t("about.visionTitle")}</h3>
            <p className="text-xs sm:text-sm text-sand-200/80 leading-relaxed">
              {t("about.vision")}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 border border-forest-600 flex items-center justify-center text-harvest-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-sand-50 uppercase">{t("about.missionTitle")}</h3>
            <p className="text-xs sm:text-sm text-sand-200/80 leading-relaxed">
              {t("about.mission")}
            </p>
          </div>
        </div>
      </section>

      {/* Evolutionary Timeline */}
      <section className="py-20 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-harvest-400 uppercase tracking-widest font-display">
              {t("about.milestonesBadge")}
            </span>
            <h2 className="font-display font-extrabold text-3xl text-sand-50 uppercase">
              {t("about.milestonesTitle")}
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 md:w-1/3">
                  <span className="text-xs font-bold text-harvest-400">
                    {String(idx + 1).padStart(2, "0")}. {(isOr ? item.stage[1] : item.stage[0])} • {item.year}
                  </span>
                  <h4 className="font-display font-extrabold text-lg text-sand-50">
                    {isOr ? item.title_or : item.title}
                  </h4>
                </div>
                <p className="text-xs text-sand-200/80 md:w-2/3 leading-relaxed">
                  {isOr ? item.desc_or : item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
