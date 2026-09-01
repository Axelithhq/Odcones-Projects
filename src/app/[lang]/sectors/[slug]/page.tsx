import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SECTORS } from "@/data/sectorsData";
import { FEATURED_PROJECTS } from "@/data/projectsData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { EcosystemCanvas } from "@/components/3d/EcosystemCanvas";
import { SectorInteractiveEngine } from "@/components/sectors/SectorInteractiveEngine";
import { requireLang, getServerT } from "@/lib/page-utils";
import { getPathWithLocale } from "@/lib/i18n-config";
import { pickOr, pickOrArray } from "@/lib/localize";
import { ArrowUpRight, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Cpu, Layers } from "lucide-react";

export async function generateStaticParams() {
  const langParams = [
    { lang: "en" as const },
    { lang: "or" as const },
  ];
  return SECTORS.flatMap((sector) =>
    langParams.map((lang) => ({ ...lang, slug: sector.slug }))
  );
}

export default async function SectorDetailPage(props: { params: Promise<{ lang: string; slug: string }> }) {
  const params = await props.params;
  const lang = requireLang(params.lang);
  const t = getServerT(lang);
  const sector = SECTORS.find((s) => s.slug === params.slug);

  if (!sector) {
    notFound();
  }

  const name = pickOr(sector.name, sector.name_or, lang);
  const tagline = pickOr(sector.tagline, sector.tagline_or, lang);
  const longDesc = pickOr(sector.longDesc, sector.longDesc_or, lang);
  const keyPillars = pickOrArray(sector.keyPillars, sector.keyPillars_or, lang);
  const stats = pickOrArray(sector.stats, sector.stats_or, lang);
  const technologies = pickOrArray(sector.technologies, sector.technologies_or, lang);
  const challenges = pickOrArray(sector.challenges, sector.challenges_or, lang);
  const odconsApproach = pickOrArray(sector.odconsApproach, sector.odconsApproach_or, lang);

  const relatedProjects = FEATURED_PROJECTS.filter(
    (p) => p.sector.toLowerCase() === sector.name.toLowerCase() || p.sector.toLowerCase() === sector.id.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-theme-base text-theme-text relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      {/* Domain-Specific Photorealistic Hero */}
      <section className="relative py-24 bg-theme-base border-b border-theme-border overflow-hidden">
        {/* Background Image with Ambient Domain Glow */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url(${sector.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950/40" />
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 60% 40%, ${sector.accentColor} 0%, transparent 70%)`
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md border text-xs font-bold uppercase tracking-widest text-sand-50 font-display shadow-lg"
            style={{ backgroundColor: sector.badgeBg, borderColor: sector.accentColor }}
          >
            <Sparkles className="w-3.5 h-3.5 text-harvest-400 animate-pulse" />
            <span>ODCONS SECTOR SPECIFICATION — {sector.id.toUpperCase()}</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-sand-50 uppercase tracking-tight leading-[1.05]">
              {name}
            </h1>

            <p className="text-sand-200/90 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl">
              {tagline}
            </p>
          </div>

          {/* Audited Domain Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-4xl">
            {stats.map((st, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-forest-950/80 border backdrop-blur-md space-y-1 shadow-xl"
                style={{ borderColor: `${sector.accentColor}40` }}
              >
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-harvest-400">{st.value}</p>
                <span className="text-xs font-semibold text-sand-200/80 block uppercase tracking-wider">{st.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href={getPathWithLocale("/start-project", lang)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 text-sand-50 font-display font-extrabold text-xs uppercase tracking-wider shadow-2xl border hover:scale-105 transition-all"
              style={{ borderColor: sector.accentColor }}
            >
              <span>{lang === "or" ? "ବ୍ୟାଙ୍କ DPR ପାଇଁ ପରାମର୍ଶ ନିଅନ୍ତୁ" : `BOOK ${name} DPR CONSULTATION`}</span>
              <ArrowUpRight className="w-4 h-4 text-harvest-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Domain Interactive Engine & Specifications Deep Dive */}
      <section className="py-20 bg-theme-base border-b border-theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Custom Interactive Tool for this specific domain */}
          <SectorInteractiveEngine slug={sector.slug} accentColor={sector.accentColor} />

          {/* Domain Vision & Engineering Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-950 border border-forest-800 text-xs font-mono text-theme-gold">
                <Cpu className="w-3.5 h-3.5 text-harvest-400" />
                <span>DOMAIN BLUEPRINT SPECIFICATION</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-sand-50 uppercase leading-tight">
                {t("sectors.visionTitle")}
              </h2>
              <p className="text-theme-text-muted text-base leading-relaxed font-normal">
                {longDesc}
              </p>

              {/* Key Technical Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {keyPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl glass-panel border space-y-2 shadow-lg"
                    style={{ borderColor: `${sector.accentColor}50` }}
                  >
                    <h4 className="font-extrabold text-sm text-harvest-400 font-display uppercase tracking-wider">{pillar.title}</h4>
                    <p className="text-xs text-theme-text-muted leading-relaxed font-normal">{pillar.desc}</p>
                  </div>
                ))}
              </div>

              {/* Deployment Technologies */}
              {technologies.length > 0 && (
                <div className="pt-4 space-y-2">
                  <span className="text-xs font-mono font-bold text-theme-gold uppercase tracking-widest block">
                    DEPLOYED TECHNICAL STACK:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-xl bg-forest-950 text-xs font-mono border text-sand-200"
                        style={{ borderColor: `${sector.accentColor}60` }}
                      >
                        ✓ {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 h-[380px] rounded-3xl glass-panel border border-theme-border overflow-hidden relative shadow-2xl p-4">
              <EcosystemCanvas />
            </div>
          </div>

          {/* Challenges & ODCONS Solution Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl glass-panel border border-theme-border space-y-4 shadow-xl">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>{t("sectors.challengesTitle")}</span>
              </h3>
              <div className="space-y-4">
                {challenges.map((ch, idx) => (
                  <div key={idx} className="space-y-1 p-4 rounded-2xl bg-forest-950/80 border border-forest-800">
                    <h4 className="text-sm font-bold text-harvest-400">{ch.title}</h4>
                    <p className="text-xs text-theme-text-muted leading-relaxed">{ch.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-theme-border space-y-4 shadow-xl">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{t("sectors.approachTitle")}</span>
              </h3>
              <ul className="space-y-3 text-xs text-theme-text-muted">
                {odconsApproach.map((ap, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-forest-950/80 border border-forest-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-normal">{ap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Domain Case Studies */}
          {relatedProjects.length > 0 && (
            <div className="space-y-8 pt-8 border-t border-theme-border">
              <h3 className="font-display font-extrabold text-2xl text-sand-50 uppercase">
                {t("sectors.relatedProjects")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((proj) => (
                  <Link
                    key={proj.id}
                    href={getPathWithLocale(`/projects/${proj.slug}`, lang)}
                    className="group p-6 rounded-3xl glass-panel border border-theme-border hover:border-harvest-400 transition-all space-y-4 shadow-xl hover:-translate-y-1"
                  >
                    <div className="h-48 rounded-2xl overflow-hidden relative">
                      <img
                        src={proj.images[0]}
                        alt={pickOr(proj.title, proj.title_or, lang)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-display font-bold text-lg text-sand-50 group-hover:text-harvest-400 transition-colors">
                      {pickOr(proj.title, proj.title_or, lang)}
                    </h4>
                    <p className="text-xs text-theme-text-muted line-clamp-2">{pickOr(proj.description, proj.description_or, lang)}</p>
                    <div className="flex items-center gap-1 text-xs font-bold text-harvest-400">
                      <span>{t("sectors.viewCaseStudy")}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Direct Domain Consultancy Call Out */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 border border-forest-700/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-2xl text-sand-50 uppercase">
                {t("sectors.startSector", { sector: name })}
              </h3>
              <p className="text-xs text-theme-text-muted max-w-2xl">
                {t("sectors.startSectorDesc")}
              </p>
            </div>
            <Link
              href={getPathWithLocale("/start-project", lang)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-forest-500 via-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 transition-all shrink-0 flex items-center gap-2"
            >
              <span>{t("sectors.enquireNow")}</span>
              <ArrowUpRight className="w-4 h-4 text-forest-950" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
