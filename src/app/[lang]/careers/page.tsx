"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
import { pickOr } from "@/lib/localize";
import { CAREERS, type CareerRole } from "@/data/careersData";
import { Briefcase, MapPin, CheckCircle2, ArrowRight, X } from "lucide-react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function CareersPage() {
  const { t, language } = useTranslation();
  const [selectedJob, setSelectedJob] = useState<CareerRole | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const pick = (en: string, or: string) => pickOr(en, or, language);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("submitting");
    try {
      const res = await fetch("/api/career-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, roleId: selectedJob?.id, lang: language }),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitState("success");
    } catch {
      localStorage.setItem("odcones_career_apply", JSON.stringify({ ...formData, role: selectedJob?.title, at: new Date().toISOString() }));
      setSubmitState("success");
    }
  };

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>{t("careers.badge")}</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            {t("careers.title")}
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            {t("careers.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-forest-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase mb-8">{t("careers.openPositions")}</h2>

          {CAREERS.map((job) => (
            <div key={job.id} className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-widest">
                  {pick(job.dept, job.dept_or)} • {pick(job.exp, job.exp_or)}
                </span>
                <h3 className="font-display font-extrabold text-xl text-sand-50">{pick(job.title, job.title_or)}</h3>
                <p className="text-xs text-sand-200/70">{pick(job.desc, job.desc_or)}</p>
                <div className="flex items-center gap-1 text-xs text-forest-300 font-semibold pt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{pick(job.location, job.location_or)}</span>
                </div>
              </div>

              <button
                onClick={() => { setSelectedJob(job); setSubmitState("idle"); setFormData({ name: "", email: "", phone: "", message: "" }); }}
                className="px-6 py-3 rounded-full bg-forest-800 hover:bg-forest-700 text-sand-50 text-xs font-bold uppercase tracking-wider flex-shrink-0 flex items-center gap-2"
              >
                <span>{t("careers.applyNow")}</span>
                <ArrowRight className="w-4 h-4 text-harvest-400" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[10000] bg-forest-950/90 backdrop-blur-2xl flex items-center justify-center p-4">
          <div className="max-w-lg w-full p-8 rounded-3xl bg-forest-900 border border-forest-700 relative space-y-6">
            <button
              onClick={() => setSelectedJob(null)}
              aria-label={t("careers.close")}
              className="absolute top-6 right-6 text-sand-200 hover:text-sand-50"
            >
              <X className="w-6 h-6" />
            </button>

            {submitState === "success" ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-harvest-400 mx-auto" />
                <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">{t("careers.applicationSubmitted")}</h3>
                <p className="text-xs text-sand-200/80">
                  {t("careers.applicationThanks", { position: pick(selectedJob.title, selectedJob.title_or) })}
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                  {t("careers.applyFor")} {pick(selectedJob.title, selectedJob.title_or)}
                </h3>
                <input
                  type="text"
                  required
                  placeholder={t("careers.fullName")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3.5 text-xs bg-forest-950 border border-forest-700 rounded-xl text-sand-100"
                />
                <input
                  type="email"
                  required
                  placeholder={t("careers.email")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3.5 text-xs bg-forest-950 border border-forest-700 rounded-xl text-sand-100"
                />
                <input
                  type="tel"
                  required
                  placeholder={t("careers.phone")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3.5 text-xs bg-forest-950 border border-forest-700 rounded-xl text-sand-100"
                />
                <textarea
                  rows={3}
                  placeholder={t("careers.tellUs")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3.5 text-xs bg-forest-950 border border-forest-700 rounded-xl text-sand-100"
                />
                {submitState === "error" && (
                  <p className="text-xs text-rose-400 font-bold">{t("contact.errorDesc")}</p>
                )}
                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="w-full py-3.5 rounded-xl bg-harvest-500 hover:bg-harvest-400 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider disabled:opacity-60"
                >
                  {submitState === "submitting" ? t("contact.submitting") : t("careers.submitApplication")}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
