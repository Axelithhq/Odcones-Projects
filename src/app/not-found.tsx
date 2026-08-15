"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
import { ArrowLeft, Sprout } from "lucide-react";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor flex flex-col justify-between pt-24">
      <CustomCursor />
      <Header />

      <div className="max-w-2xl mx-auto px-4 text-center my-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-forest-900 border border-forest-700 mx-auto flex items-center justify-center text-harvest-400 shadow-2xl">
          <Sprout className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold font-mono text-harvest-400 uppercase tracking-widest block">
          ERROR 404 • UNSETTLED FIELD
        </span>

        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 uppercase tracking-tight">
          {t("not_found.title")}
        </h1>

        <p className="text-sm text-sand-200/80 leading-relaxed font-light">
          The page or resource you are looking for might have been moved or does not exist in the ODCONES platform directory.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-harvest-500 to-forest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-forest-950" />
            <span>{t("not_found.btn")}</span>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
