import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { generateLangParams, requireLang, getServerT } from "@/lib/page-utils";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | ODCONS PROJECTS",
  description: "Privacy policy for ODCONS PROJECTS website and project enquiry forms.",
};

export function generateStaticParams() {
  return generateLangParams();
}

export default async function PrivacyPage(props: { params: Promise<{ lang: string }> }) {
  const lang = requireLang((await props.params).lang);
  const t = getServerT(lang);

  return (
    <main className="min-h-screen bg-theme-base text-theme-text relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-theme-base border-b border-forest-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t("privacy.badge")}</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            {t("privacy.title")}
          </h1>

          <p className="text-theme-text-muted text-base font-light">
            {t("privacy.updated")}: {new Date().toLocaleDateString(lang === "or" ? "or-IN" : "en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-20 bg-theme-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-4">
            <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase">{t("privacy.bodyTitle")}</h2>
            <p className="text-xs sm:text-sm text-theme-text-muted leading-relaxed">{t("privacy.para1")}</p>
            <p className="text-xs sm:text-sm text-theme-text-muted leading-relaxed">{t("privacy.para2")}</p>
            <p className="text-xs sm:text-sm text-theme-text-muted leading-relaxed">{t("privacy.para3")}</p>
          </div>
          <p className="text-xs text-theme-text-muted">{t("privacy.contactUs")}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
