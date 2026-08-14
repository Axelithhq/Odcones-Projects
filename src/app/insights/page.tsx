import React from "react";
import Link from "next/link";
import { ARTICLES } from "@/data/insightsData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export const metadata = {
  title: "Insights & Research Hub | ODCONES PROJECTS",
  description: "Read whitepapers, operational studies, and technical research articles on agriculture, aquaculture, and blue economy.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>KNOWLEDGE HUB</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            Research & Industry Insights
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            Field reports, technological whitepapers, and operational lessons from our mega interventions across Eastern India.
          </p>
        </div>
      </section>

      <section className="py-20 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((art) => (
            <div key={art.id} className="group p-6 rounded-3xl bg-forest-900/40 border border-forest-800/60 hover:border-forest-500/50 transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl overflow-hidden relative">
                  <img src={art.image_url} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md text-[10px] font-bold text-harvest-400 uppercase">
                    {art.category}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-sand-200/60 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-forest-300" />
                  <span>{art.read_time} • {art.published_at}</span>
                </div>

                <h3 className="font-display font-bold text-lg text-sand-50 group-hover:text-harvest-400 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-sand-200/70 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-forest-800/40 flex items-center justify-between">
                <span className="text-[10px] text-forest-300 font-bold uppercase">{art.author.split(",")[0]}</span>
                <Link href={`/insights/${art.slug}`} className="flex items-center gap-1 text-xs font-bold text-harvest-400 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
