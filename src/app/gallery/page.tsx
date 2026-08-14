"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { X, ZoomIn } from "lucide-react";

const GALLERY_IMAGES = [
  { id: 1, title: "Hirakud Floating Cage Installation", category: "Aquaculture", url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200" },
  { id: 2, title: "Koraput Polyhouse Strawberry Farms", category: "Horticulture", url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200" },
  { id: 3, title: "Ganjam Check Dam Construction", category: "Water & Soil", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200" },
  { id: 4, title: "High-Yield Paddy Mechanization", category: "Agriculture", url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200" },
  { id: 5, title: "Biofloc High-Density Fish Tanks", category: "Aquaculture", url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200" },
  { id: 6, title: "Bulk Milk Cooling Aggregation Hub", category: "Animal Husbandry", url: "https://images.unsplash.com/photo-1570042707220-410a563f8d9b?auto=format&fit=crop&q=80&w=1200" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>VISUAL GALLERY</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            Field Interventions Gallery
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            High-resolution photography capturing our projects, community members, aquaculture installations, and watershed structures across India.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-20 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img.url)}
              className="group relative h-72 rounded-3xl overflow-hidden border border-forest-800 cursor-pointer shadow-lg"
              data-cursor-text="ZOOM"
            >
              <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-wider">{img.category}</span>
                  <h4 className="font-display font-bold text-sm text-sand-50">{img.title}</h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-forest-900/80 border border-forest-700 flex items-center justify-center text-sand-50">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[10000] bg-forest-950/95 backdrop-blur-2xl flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-forest-900 border border-forest-700 text-sand-100 hover:text-harvest-400"
          >
            <X className="w-6 h-6" />
          </button>
          <img src={selectedImage} alt="Expanded visual" className="max-w-full max-h-[85vh] rounded-2xl border border-forest-700 shadow-2xl" />
        </div>
      )}

      <Footer />
    </main>
  );
}
