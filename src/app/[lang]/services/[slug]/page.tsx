import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/data/servicesData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { requireLang, getServerT } from "@/lib/page-utils";
import { getPathWithLocale } from "@/lib/i18n-config";
import { pickOr, pickOrArray } from "@/lib/localize";
import { ArrowUpRight, CheckCircle2, ShieldCheck, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const langParams = [
    { lang: "en" as const },
    { lang: "or" as const },
  ];
  return SERVICES.flatMap((service) =>
    langParams.map((lang) => ({ ...lang, slug: service.slug }))
  );
}

export default async function ServiceDetailPage(props: { params: Promise<{ lang: string; slug: string }> }) {
  const params = await props.params;
  const lang = requireLang(params.lang);
  const t = getServerT(lang);
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const title = pickOr(service.title, service.title_or, lang);
  const category = pickOr(service.category, service.category_or, lang);
  const shortDesc = pickOr(service.shortDesc, service.shortDesc_or, lang);
  const fullDesc = pickOr(service.fullDesc, service.fullDesc_or, lang);
  const deliverables = pickOrArray(service.deliverables, service.deliverables_or, lang);

  return (
    <main className="min-h-screen bg-theme-base text-theme-text relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-theme-base border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link href={getPathWithLocale("/services", lang)} className="inline-flex items-center gap-2 text-xs font-bold text-forest-300 hover:text-sand-50 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>{t("services.backToAll")}</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>{category}</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-theme-text-muted text-base sm:text-lg max-w-3xl font-light">
            {shortDesc}
          </p>
        </div>
      </section>

      <section className="py-20 bg-theme-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="rounded-3xl overflow-hidden border border-forest-800/60 h-80 sm:h-96">
              <img src={service.image} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase">
                {t("services.scopeTitle")}
              </h2>
              <p className="text-theme-text-muted text-sm leading-relaxed whitespace-pre-line">
                {fullDesc}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-forest-800/40">
              <h3 className="font-display font-bold text-lg text-sand-50 uppercase">
                {t("services.coreDeliverables")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-forest-900/40 border border-forest-800/60 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-harvest-400 flex-shrink-0" />
                    <span className="text-xs font-semibold text-theme-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-forest-900/60 border border-forest-700/50 space-y-6 sticky top-28">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                {t("services.contractService")}
              </h3>
              <p className="text-xs text-theme-text-muted leading-relaxed">
                {t("services.contractDesc")}
              </p>

              <Link
                href={getPathWithLocale("/start-project", lang)}
                className="w-full py-4 rounded-xl bg-harvest-500 hover:bg-harvest-400 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>{t("services.initiateProposal")}</span>
                <ArrowUpRight className="w-4 h-4 text-forest-950" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
