"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
import {
  BookOpen,
  Search,
  Lock,
  Eye,
  FileText,
  Sparkles,
  Calendar,
  Layers,
  Filter,
  ShieldCheck,
  Compass
} from "lucide-react";
import { SecurePdfModal } from "@/components/library/SecurePdfModal";
import { LibraryResourceDB } from "@/lib/serverDb";

const CATEGORIES = [
  "All Resources",
  "Tales of Aquaculture",
  "Aquamarvel",
  "Magazines & Publications",
  "Testimonials"
];

export default function LibraryPage() {
  const { language } = useTranslation();
  const isOr = language === "or";

  const [resources, setResources] = useState<LibraryResourceDB[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Resources");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Secure Modal Viewer State
  const [activeModal, setActiveModal] = useState<{
    isOpen: boolean;
    title: string;
    category: string;
    pdfUrl: string;
  }>({
    isOpen: false,
    title: "",
    category: "",
    pdfUrl: ""
  });

  const fetchLibraryResources = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/db?type=library_resources");
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setResources(json.data.filter((item: LibraryResourceDB) => item.active !== false));
      }
    } catch (err) {
      console.error("Failed to load library resources:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLibraryResources();
  }, []);

  // Filtered Resources
  const filteredResources = resources.filter((item) => {
    const matchCategory =
      selectedCategory === "All Resources" || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.title_or && item.title_or.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <main className="min-h-screen bg-theme-base text-theme-text relative has-custom-cursor pt-20">
      <CustomCursor />
      <Header />

      {/* Hero Header */}
      <section className="py-20 bg-theme-base border-b border-forest-800/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/90 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
            <BookOpen className="w-4 h-4" />
            <span>ODCONS DIGITAL LIBRARY & PUBLICATIONS</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight max-w-4xl">
            {isOr ? "ଓଡକୋନ୍ସ ଡିଜିଟାଲ୍ ଗ୍ରନ୍ଥାଗାର" : "ODCONS DIGITAL LIBRARY & PUBLICATIONS"}
          </h1>

          <p className="text-theme-text-muted text-base sm:text-lg max-w-3xl leading-relaxed font-light">
            Explore our curated repository of technical DPR case studies, Tales of Aquaculture, Aquamarvel engineering blueprints, quarterly magazines, and client success stories.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-forest-950/80 border border-harvest-400/40 text-xs font-mono text-harvest-400">
            <Lock className="w-4 h-4 text-harvest-400" />
            <span>Protected Reading Room — Documents are viewable online in secure non-downloadable reader mode.</span>
          </div>
        </div>
      </section>

      {/* Main Library Explorer */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Category Filters & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-theme-border pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-display font-bold uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? "bg-forest-900 border-harvest-400 text-sand-50 shadow-lg scale-105"
                    : "glass-card hover:border-theme-border text-theme-text-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-theme-text-muted absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search library by title or topic..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-forest-950 border border-forest-800 text-sand-50 text-xs focus:outline-none focus:border-harvest-400"
            />
          </div>
        </div>

        {/* Resource Cards Grid */}
        {isLoading ? (
          <div className="py-20 text-center text-xs font-mono text-harvest-400 animate-pulse">
            Loading ODCONS Library Documents...
          </div>
        ) : filteredResources.length === 0 ? (
          <div className="p-16 text-center space-y-3 glass-panel rounded-3xl border border-theme-border">
            <BookOpen className="w-12 h-12 text-theme-text-muted mx-auto" />
            <h3 className="font-display font-bold text-lg text-sand-50 uppercase">No Documents Found</h3>
            <p className="text-xs text-theme-text-muted">Try clearing your search query or selecting another category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl glass-panel border border-theme-border shadow-2xl overflow-hidden flex flex-col justify-between hover:border-harvest-400/80 transition-all duration-300 group"
              >
                {/* Cover Image Container */}
                <div className="relative h-52 bg-forest-950 overflow-hidden border-b border-theme-border/60">
                  <img
                    src={item.coverImage || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800"}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-forest-950/90 border border-harvest-400/70 text-[10px] font-mono font-extrabold text-harvest-400 uppercase tracking-widest backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Non-Downloadable Lock Icon */}
                  <div className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-forest-950/90 border border-rose-500/50 text-rose-400 shadow-md">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-theme-text-muted">
                      <span>{item.publishedDate || "August 2026"}</span>
                      <span className="text-harvest-400 font-bold">{item.pages || "PDF Document"}</span>
                    </div>

                    <h3 className="font-display font-extrabold text-lg text-sand-50 group-hover:text-harvest-400 transition-colors leading-snug">
                      {isOr && item.title_or ? item.title_or : item.title}
                    </h3>

                    <p className="text-xs text-theme-text-muted leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Read Online Button */}
                  <div className="pt-4 border-t border-theme-border/60">
                    <button
                      onClick={() =>
                        setActiveModal({
                          isOpen: true,
                          title: item.title,
                          category: item.category,
                          pdfUrl: item.pdfUrl
                        })
                      }
                      className="w-full py-3 rounded-xl bg-forest-900 border border-forest-700 hover:bg-forest-800 hover:border-harvest-400 text-sand-50 font-display font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                    >
                      <Eye className="w-4 h-4 text-harvest-400" />
                      <span>Read Online (Protected Mode) →</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Secure Viewer Modal */}
      <SecurePdfModal
        isOpen={activeModal.isOpen}
        onClose={() => setActiveModal({ ...activeModal, isOpen: false })}
        title={activeModal.title}
        category={activeModal.category}
        pdfUrl={activeModal.pdfUrl}
      />

      <Footer />
    </main>
  );
}
