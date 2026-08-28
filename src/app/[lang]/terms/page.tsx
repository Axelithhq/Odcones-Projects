import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { generateLangParams, requireLang, getServerT } from "@/lib/page-utils";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | ODCONS PROJECTS",
  description: "Terms of service for using the ODCONS PROJECTS website and submitting project enquiries.",
};

export function generateStaticParams() {
  return generateLangParams();
}

export default async function TermsPage(props: { params: Promise<{ lang: string }> }) {
  const lang = requireLang((await props.params).lang);
  const t = getServerT(lang);

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <FileText className="w-3.5 h-3.5" />
            <span>{t("terms.badge")}</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            {t("terms.title")}
          </h1>

          <p className="text-sand-200/80 text-base font-light">
            {t("terms.updated")}: {new Date().toLocaleDateString(lang === "or" ? "or-IN" : "en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-20 bg-forest-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-4">
            <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase">{t("terms.bodyTitle")}</h2>
            <p className="text-xs sm:text-sm text-sand-200/80 leading-relaxed">{t("terms.para1")}</p>
            <p className="text-xs sm:text-sm text-sand-200/80 leading-relaxed">{t("terms.para2")}</p>
            <p className="text-xs sm:text-sm text-sand-200/80 leading-relaxed">{t("terms.para3")}</p>
          </div>
          <p className="text-xs text-sand-200/70">{t("terms.contactUs")}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
