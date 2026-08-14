"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURED_PROJECTS } from "@/data/projectsData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Search, MapPin, Calendar, ArrowRight, Filter } from "lucide-react";

const CATEGORIES = ["All", "Aquaculture", "Horticulture", "Water & Soil Conservation", "Animal Husbandry", "Agriculture"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    const matchesCat = selectedCategory === "All" || proj.sector.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>PROJECT PORTFOLIO</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            Institutional & Turnkey Projects
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            Discover real-world interventions executed across reservoir cage culture, protected horticulture, coastal land soil reclamation, and smart micro-irrigation.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-forest-900/40 border-b border-forest-800/40 sticky top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-forest-300 flex-shrink-0" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all flex-shrink-0 ${
                  selectedCategory === cat
                    ? "bg-harvest-500 text-forest-950 shadow-md"
                    : "bg-forest-950/80 text-sand-200/70 border border-forest-800 hover:text-sand-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-forest-400" />
            <input
              type="text"
              placeholder="Search projects or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-forest-950 border border-forest-700/50 rounded-full text-sand-100 placeholder-sand-200/40 focus:outline-none focus:border-harvest-400"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-forest-900/30 border border-forest-800 space-y-3">
              <p className="font-display font-bold text-lg text-sand-50">No projects found matching criteria.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="text-xs text-harvest-400 hover:underline font-semibold"
              >
                Reset filters & search
              </button>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((proj) => (
                  <motion.div
                    key={proj.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group p-6 rounded-3xl bg-forest-900/40 border border-forest-800/60 hover:border-forest-500/60 transition-all space-y-5 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="h-52 rounded-2xl overflow-hidden relative">
                        <img
                          src={proj.images[0]}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md text-[10px] font-bold text-harvest-400 uppercase">
                          {proj.sector}
                        </div>
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-bold text-emerald-400">
                          {proj.status}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-[11px] text-sand-200/60 font-semibold">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-forest-300" />
                          {proj.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-forest-300" />
                          {proj.year}
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-xl text-sand-50 group-hover:text-harvest-400 transition-colors leading-snug">
                        {proj.title}
                      </h3>

                      <p className="text-xs text-sand-200/70 line-clamp-3 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-forest-800/40 flex items-center justify-between">
                      <span className="text-[10px] text-forest-300 font-bold uppercase">
                        CLIENT: {proj.client.split("&")[0]}
                      </span>
                      <Link
                        href={`/projects/${proj.slug}`}
                        className="flex items-center gap-1 text-xs font-bold text-harvest-400 group-hover:translate-x-1 transition-transform"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
