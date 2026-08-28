"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import { SECTORS } from "@/data/sectorsData";
import { Sprout, ArrowRight, Check, Mail } from "lucide-react";

export function Footer() {
  const { t, language, localizeHref } = useTranslation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
    } catch {
      localStorage.setItem("odcons_subscriber", email);
    }
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-theme-base text-sand-100 border-t border-forest-800/40 relative overflow-hidden pt-16 pb-12">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aqua-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-800/40">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href={localizeHref("/")} className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-600 via-forest-800 to-soil-700 p-0.5">
                <div className="w-full h-full bg-theme-base rounded-[10px] flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-harvest-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-wider text-sand-50 uppercase leading-none">
                  ODCONS
                </span>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-forest-300 uppercase">
                  PROJECTS
                </span>
              </div>
            </Link>

            <p className="text-sand-200/70 text-sm max-w-sm leading-relaxed">
              {t("footer.tagline")}
            </p>

            {/* Newsletter */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold tracking-wider uppercase text-harvest-400 font-display">
                {t("footer.subscribeTitle")}
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-semibold text-forest-300 bg-forest-900/60 p-3 rounded-xl border border-forest-500/40">
                  <Check className="w-4 h-4 text-harvest-400" />
                  <span>{t("footer.subscribed")}</span>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-forest-400" />
                      <input
                        type="email"
                        required
                        placeholder={t("footer.subscribePlaceholder")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 text-xs bg-forest-900/50 border border-forest-700/50 rounded-xl text-sand-100 placeholder-sand-200/40 focus:outline-none focus:border-forest-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-forest-600 hover:bg-forest-500 text-sand-50 text-xs font-bold transition-all flex items-center gap-1.5"
                    >
                      <span>{t("footer.subscribeBtn")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                  <p className="text-[10px] text-sand-200/40">{t("footer.subscribeNote")}</p>
                </>
              )}
            </div>
          </div>

          {/* Col 3: Sectors */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
              {t("footer.sectorsTitle")}
            </h4>
            <ul className="space-y-2.5 text-xs text-sand-200/70">
              {SECTORS.map((sector) => (
                <li key={sector.id}>
                  <Link
                    href={localizeHref(`/sectors/${sector.slug}`)}
                    className="hover:text-sand-50 transition-colors"
                  >
                    {language === "or" && sector.name_or ? sector.name_or : sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
              {t("footer.companyTitle")}
            </h4>
            <ul className="space-y-2.5 text-xs text-sand-200/70">
              <li><Link href={localizeHref("/about")} className="hover:text-sand-50 transition-colors">{t("nav.about")}</Link></li>
              <li><Link href={localizeHref("/services")} className="hover:text-sand-50 transition-colors">{t("nav.whatWeDo")}</Link></li>
              <li><Link href={localizeHref("/projects")} className="hover:text-sand-50 transition-colors">{t("nav.projects")}</Link></li>
              <li><Link href={localizeHref("/platform")} className="hover:text-sand-50 transition-colors">{t("nav.platform")}</Link></li>
              <li><Link href={localizeHref("/impact")} className="hover:text-sand-50 transition-colors">{t("nav.impact")}</Link></li>
              <li><Link href={localizeHref("/gallery")} className="hover:text-sand-50 transition-colors">{t("nav.gallery")}</Link></li>
              <li><Link href={localizeHref("/careers")} className="hover:text-sand-50 transition-colors">{t("nav.careers")}</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact & Office */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
              {t("footer.contactTitle")}
            </h4>
            <div className="text-xs text-sand-200/70 space-y-2 leading-relaxed">
              <p className="font-semibold text-sand-100">ODCONS PROJECTS PVT LTD</p>
              <p>Plot No. 452, Infocity Rural Tech Hub,</p>
              <p>Patia, Bhubaneswar, Odisha — 751024</p>
              <p className="pt-2"><strong className="text-sand-100">{t("contact.emailLabel")}:</strong> info@odconsprojects.org</p>
              <p><strong className="text-sand-100">{t("contact.phoneLabel")}:</strong> +91 674 290 8820</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-200/50 gap-4">
          <p>© {new Date().getFullYear()} ODCONS PROJECTS. {t("footer.rights")}</p>
          <div className="flex items-center gap-6">
            <Link href={localizeHref("/privacy")} className="hover:text-sand-100 transition-colors">{t("footer.privacy")}</Link>
            <Link href={localizeHref("/terms")} className="hover:text-sand-100 transition-colors">{t("footer.terms")}</Link>
            <Link href={localizeHref("/admin")} className="text-forest-400 hover:text-harvest-400 transition-colors">{t("footer.admin")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
