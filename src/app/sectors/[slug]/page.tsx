import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SECTORS } from "@/data/sectorsData";
import { FEATURED_PROJECTS } from "@/data/projectsData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { AquacultureSimulator } from "@/components/sectors/AquacultureSimulator";
import { EcosystemCanvas } from "@/components/3d/EcosystemCanvas";
import { ArrowUpRight, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return SECTORS.map((sector) => ({
    slug: sector.slug,
  }));
}

export default async function SectorDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const sector = SECTORS.find((s) => s.slug === params.slug);

  if (!sector) {
    notFound();
  }

  const relatedProjects = FEATURED_PROJECTS.filter(
    (p) => p.sector.toLowerCase() === sector.name.toLowerCase() || p.sector.toLowerCase() === sector.id.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      {/* Sector Hero */}
      <section className="relative py-20 bg-forest-950 border-b border-forest-800/40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url(${sector.heroImage})` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>SECTOR DOMAIN</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight leading-tight">
            {sector.name}
          </h1>

          <p className="text-sand-200/90 text-lg sm:text-xl max-w-3xl leading-relaxed font-light">
            {sector.tagline}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-4xl">
            {sector.stats.map((st, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-forest-900/60 border border-forest-700/40 backdrop-blur-md">
                <p className="font-display font-extrabold text-3xl text-harvest-300">{st.value}</p>
                <span className="text-xs font-semibold text-sand-200/70">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Deep Dive Content */}
      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display font-extrabold text-3xl text-sand-50 uppercase">
                Sector Vision & Strategic Capability
              </h2>
              <p className="text-sand-200/80 text-base leading-relaxed">
                {sector.longDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {sector.keyPillars.map((pillar, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-forest-900/40 border border-forest-800/60 space-y-2">
                    <h4 className="font-bold text-sm text-harvest-400 font-display">{pillar.title}</h4>
                    <p className="text-xs text-sand-200/70 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 h-[350px]">
              <EcosystemCanvas />
            </div>
          </div>

          {/* Interactive Simulator (If Aquaculture Sector) */}
          {sector.slug === "aquaculture" && (
            <div className="pt-8">
              <AquacultureSimulator />
            </div>
          )}

          {/* Challenges & ODCONES Solution Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800/60 space-y-4">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                Field Challenges Addressed
              </h3>
              <div className="space-y-4">
                {sector.challenges.map((ch, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-sm font-bold text-harvest-400">{ch.title}</h4>
                    <p className="text-xs text-sand-200/70">{ch.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800/60 space-y-4">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                The ODCONES Execution Model
              </h3>
              <ul className="space-y-3 text-xs text-sand-200/90">
                {sector.odconesApproach.map((ap, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-harvest-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{ap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="space-y-8 pt-8 border-t border-forest-800/40">
              <h3 className="font-display font-extrabold text-2xl text-sand-50 uppercase">
                Featured {sector.name} Case Studies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((proj) => (
                  <Link
                    key={proj.id}
                    href={`/projects/${proj.slug}`}
                    className="group p-6 rounded-3xl bg-forest-900/50 border border-forest-700/40 hover:border-forest-500/60 transition-all space-y-4"
                  >
                    <div className="h-48 rounded-2xl overflow-hidden relative">
                      <img
                        src={proj.images[0]}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-display font-bold text-lg text-sand-50 group-hover:text-harvest-400 transition-colors">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-sand-200/70 line-clamp-2">{proj.description}</p>
                    <div className="flex items-center gap-1 text-xs font-bold text-harvest-400">
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Enquiry CTA */}
          <div className="p-10 rounded-3xl bg-gradient-to-r from-forest-900 to-forest-800 border border-forest-600/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-extrabold text-2xl text-sand-50 uppercase">
                Start a {sector.name} Project
              </h3>
              <p className="text-xs text-sand-200/80 pt-1">
                Consult with our agronomy, blue economy, and engineering design teams today.
              </p>
            </div>
            <Link
              href="/start-project"
              className="px-8 py-3.5 rounded-full bg-harvest-500 hover:bg-harvest-400 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 flex-shrink-0"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4 text-forest-950" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
