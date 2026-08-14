import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FEATURED_PROJECTS } from "@/data/projectsData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ArrowLeft, MapPin, Calendar, Building2, CheckCircle2, ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
  return FEATURED_PROJECTS.map((proj) => ({
    slug: proj.slug,
  }));
}

export default async function ProjectDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = FEATURED_PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      {/* Case Study Hero */}
      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold text-forest-300 hover:text-sand-50 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-harvest-500/20 border border-harvest-400/40 text-xs font-bold text-harvest-300 uppercase font-display">
              {project.sector}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-xs font-bold text-emerald-400 uppercase font-display">
              {project.status}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight leading-tight">
            {project.title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-forest-800/40 max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-sand-200/80">
              <MapPin className="w-4 h-4 text-harvest-400" />
              <span><strong>Location:</strong> {project.location}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-sand-200/80">
              <Calendar className="w-4 h-4 text-harvest-400" />
              <span><strong>Timeline:</strong> {project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-sand-200/80">
              <Building2 className="w-4 h-4 text-harvest-400" />
              <span><strong>Client:</strong> {project.client}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            {/* Main Image Banner */}
            <div className="rounded-3xl overflow-hidden border border-forest-800/60 h-96">
              <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
            </div>

            {/* Overview */}
            <div className="space-y-3">
              <h3 className="font-display font-extrabold text-2xl text-sand-50 uppercase">
                Executive Overview
              </h3>
              <p className="text-sand-200/80 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.challenge && (
                <div className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800/60 space-y-3">
                  <h4 className="font-display font-bold text-lg text-sand-50 uppercase">The Challenge</h4>
                  <p className="text-xs text-sand-200/70 leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800/60 space-y-3">
                  <h4 className="font-display font-bold text-lg text-harvest-400 uppercase">The ODCONES Solution</h4>
                  <p className="text-xs text-sand-200/70 leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>

            {/* Secondary Gallery */}
            {project.images.length > 1 && (
              <div className="space-y-4">
                <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">Field Imagery Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.map((img, idx) => (
                    <div key={idx} className="h-60 rounded-2xl overflow-hidden border border-forest-800/60">
                      <img src={img} alt={`${project.title} detail ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Impact Metrics */}
          <div className="lg:col-span-4 space-y-6">
            {project.impact_metrics && (
              <div className="p-8 rounded-3xl bg-forest-900/60 border border-forest-700/50 space-y-6 sticky top-28">
                <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                  Verified Case Study Impact
                </h3>

                <div className="space-y-4">
                  {Object.entries(project.impact_metrics).map(([key, val]) => (
                    <div key={key} className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
                      <span className="text-[10px] font-bold text-forest-300 uppercase tracking-widest">{key}</span>
                      <p className="font-display font-extrabold text-2xl text-harvest-300">{val}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/start-project"
                  className="w-full py-4 rounded-xl bg-harvest-500 hover:bg-harvest-400 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <span>Replicate Similar Intervention</span>
                  <ArrowUpRight className="w-4 h-4 text-forest-950" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
