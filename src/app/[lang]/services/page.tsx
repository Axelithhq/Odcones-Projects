import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/servicesData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { generateLangParams, requireLang, getServerT } from "@/lib/page-utils";
import { getPathWithLocale } from "@/lib/i18n-config";
import { pickOr, pickOrArray } from "@/lib/localize";
import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "What We Do | 12 Comprehensive Services | ODCONS PROJECTS",
  description: "Explore the 12 core services offered by ODCONS PROJECTS across agricultural planning, aquaculture engineering, water management, and rural development.",
};

export function generateStaticParams() {
  return generateLangParams();
}

export default async function ServicesPage(props: { params: Promise<{ lang: string }> }) {
  const lang = requireLang((await props.params).lang);
  const t = getServerT(lang);

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>{t("services.badge")}</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            {t("services.title")}
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="group p-8 rounded-3xl bg-forest-900/40 border border-forest-800/60 hover:border-forest-500/50 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="h-44 rounded-2xl overflow-hidden relative">
                    <img
                      src={srv.image}
                      alt={pickOr(srv.title, srv.title_or, lang)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md text-[10px] font-bold tracking-wider text-harvest-400 uppercase">
                      {pickOr(srv.category, srv.category_or, lang)}
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-sand-50 group-hover:text-harvest-400 transition-colors leading-snug">
                    {pickOr(srv.title, srv.title_or, lang)}
                  </h3>

                  <p className="text-xs text-sand-200/70 leading-relaxed">
                    {pickOr(srv.shortDesc, srv.shortDesc_or, lang)}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-forest-800/40">
                  <span className="text-[10px] font-bold text-forest-300 uppercase tracking-widest">
                    {t("services.keyDeliverables")}
                  </span>
                  <ul className="space-y-1.5 text-xs text-sand-200/80">
                    {pickOrArray(srv.deliverables, srv.deliverables_or, lang).slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-harvest-400 flex-shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={getPathWithLocale(`/services/${srv.slug}`, lang)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-sand-50 group-hover:text-harvest-400 pt-2"
                  >
                    <span>{t("services.viewDetails")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
