"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const { t, language } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", org: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: formData.org,
          problemStatement: formData.message,
          lang: language,
        }),
      });
      if (!res.ok) throw new Error("failed");
    } catch {
      localStorage.setItem("odcons_enquiry", JSON.stringify({ ...formData, at: new Date().toISOString() }));
      setError(true);
    } finally {
      setSubmitting(false);
    }
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-theme-base text-theme-text relative has-custom-cursor pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-theme-base border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>{t("nav.contact")}</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            {t("contact.title")}
          </h1>

          <p className="text-theme-text-muted text-base sm:text-lg max-w-2xl font-light">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-theme-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-6">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                {t("contact.hqTitle")}
              </h3>

              <div className="space-y-4 text-xs text-theme-text-muted">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-harvest-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sand-50 font-display">{t("contact.hqName")}</strong>
                    <span>{t("contact.hqAddress")}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-harvest-400 flex-shrink-0" />
                  <span>{t("contact.emailLabel")}: info@odconsprojects.org</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-harvest-400 flex-shrink-0" />
                  <span>{t("contact.phoneLabel")}: +91 674 290 8820</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-forest-900/50 border border-forest-700/50 space-y-6 shadow-2xl">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-theme-base border border-emerald-500/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="font-display font-extrabold text-2xl text-sand-50">
                  {t("contact.successTitle")}
                </h3>
                <p className="text-xs text-theme-text-muted">
                  {t("contact.successLocal")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">
                      {t("contact.formName")}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t("contact.formNamePlaceholder")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">
                      {t("contact.formEmail")}
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">
                      {t("contact.formPhone")}
                    </label>
                    <input
                      type="tel"
                      placeholder={t("contact.formPhonePlaceholder")}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">
                      {t("contact.formOrg")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("contact.formOrgPlaceholder")}
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">
                    {t("contact.formMessage")}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={t("contact.formMessagePlaceholder")}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-harvest-500 to-forest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-forest-950" />
                  <span>{t("contact.submit")}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
