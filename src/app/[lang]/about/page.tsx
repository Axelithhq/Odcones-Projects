import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { FounderSection } from "@/components/home/FounderSection";
import { generateLangParams, requireLang, getServerT } from "@/lib/page-utils";
import { Language } from "@/lib/i18n-config";
import { APPROACH_STAGES } from "@/data/aboutData";
import { Eye, Target, Compass, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return generateLangParams();
}

export const metadata = {
  title: "About Us | ODCONS PROJECTS",
  description: "ODCONS PROJECTS: Professional project consultancy and technical service organization focused on developing technically feasible, financially viable and practically implementable projects.",
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  requireLang(lang);
  const validLang = (lang === "or" ? "or" : "en") as Language;
  const t = getServerT(validLang);
  const isOr = validLang === "or";

  const targetAudience = [
    "Individual Entrepreneurs",
    "Farmers and Agri-Entrepreneurs",
    "Farmer Producer Companies (FPCs)",
    "MSMEs and Start-ups",
    "Self-Help Groups and Cooperatives",
    "Producer Organizations",
    "Private Companies",
    "Agribusiness Enterprises",
    "Fisheries, Aquaculture, Dairy and Livestock Entrepreneurs"
  ];

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor pt-20">
      <CustomCursor />
      <Header />

      {/* Hero Header */}
      <section className="py-20 bg-forest-950 border-b border-forest-800/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/90 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
            <Compass className="w-4 h-4" />
            <span>ABOUT ODCONS PROJECTS</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight max-w-4xl">
            {isOr ? "ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ ବିଷୟରେ" : "ABOUT ODCONS PROJECTS"}
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
            ODCONS PROJECTS is a project consultancy and technical service organization focused on developing technically feasible, financially viable, and practically implementable projects.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-forest-800/40">
        <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-700/50 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-forest-950 border border-forest-700 flex items-center justify-center text-harvest-400">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase">Our Vision</h2>
          <p className="text-xs sm:text-sm text-sand-200/80 leading-relaxed font-light">
            "To become a trusted project consultancy organization supporting entrepreneurship, agribusiness development, value addition and sustainable rural industrialization."
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-700/50 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-forest-950 border border-forest-700 flex items-center justify-center text-aqua-400">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase">Our Mission</h2>
          <p className="text-xs sm:text-sm text-sand-200/80 leading-relaxed font-light">
            "To provide clients with professional project planning, realistic cost assessment, technical documentation and financial analysis that facilitate informed investment decisions and successful project implementation."
          </p>
        </div>
      </section>

      {/* Our Approach (Verbatim Source Sequence) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-b border-forest-800/40">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-harvest-400 font-display uppercase tracking-widest">
            PROJECT METHODOLOGY
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-sand-50 uppercase">
            Our Project-Development Approach
          </h2>
          <p className="text-sand-200/80 text-xs sm:text-sm font-light">
            Every project begins with understanding the entrepreneur's concept. We subsequently assess the full project pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPROACH_STAGES.map((stg) => (
            <div key={stg.step} className="p-6 rounded-3xl bg-forest-900/40 border border-forest-700/50 space-y-3 shadow-xl">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-harvest-400">
                <span>STAGE {stg.step}</span>
                <span className="px-2.5 py-1 rounded bg-forest-950 border border-forest-800">{isOr ? stg.stage[1] : stg.stage[0]}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-sand-50">
                {isOr ? stg.title_or : stg.title}
              </h3>
              <p className="text-xs text-sand-200/80 leading-relaxed font-light">
                {isOr ? stg.desc_or : stg.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <h2 className="font-display font-extrabold text-3xl text-sand-50 uppercase">
          Who We Work With
        </h2>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {targetAudience.map((aud, idx) => (
            <div key={idx} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-forest-900/80 border border-forest-700 text-xs font-bold text-sand-100 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-harvest-400" />
              <span>{aud}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      <Footer />
    </main>
  );
}
