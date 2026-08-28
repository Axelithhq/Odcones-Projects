"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
import { pickOr } from "@/lib/localize";
import { GALLERY_IMAGES } from "@/data/galleryData";
import { X, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  const { t, language } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const pick = (en: string, or: string) => pickOr(en, or, language);

  return (
    <main className="min-h-screen bg-theme-base text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-theme-base border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>{t("gallery.badge")}</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            {t("gallery.title")}
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            {t("gallery.subtitle")}
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-20 bg-theme-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img.url)}
              className="group relative h-72 rounded-3xl overflow-hidden border border-forest-800 cursor-pointer shadow-lg"
              data-cursor-text={t("gallery.zoom")}
            >
              <img src={img.url} alt={pick(img.title, img.title_or)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-wider">{pick(img.category, img.category_or)}</span>
                  <h4 className="font-display font-bold text-sm text-sand-50">{pick(img.title, img.title_or)}</h4>
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
          className="fixed inset-0 z-[10000] bg-theme-base/95 backdrop-blur-2xl flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label={t("gallery.close")}
            className="absolute top-6 right-6 p-3 rounded-full bg-forest-900 border border-forest-700 text-sand-100 hover:text-harvest-400"
          >
            <X className="w-6 h-6" />
          </button>
          <img src={selectedImage} alt={t("gallery.title")} className="max-w-full max-h-[85vh] rounded-2xl border border-forest-700 shadow-2xl" />
        </div>
      )}

      <Footer />
    </main>
  );
}
