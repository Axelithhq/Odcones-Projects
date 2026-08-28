"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Sprout, ShieldCheck } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

type Choice = { value: string; label: [string, string] };

const ENTITY_TYPES: Choice[] = [
  { value: "Government Agency / Department", label: ["Government Agency / Department", "ସରକାରୀ ସଂସ୍ଥା / ବିଭାଗ"] },
  { value: "Institutional / Multilateral Body", label: ["Institutional / Multilateral Body", "ଅନୁଷ୍ଠାନ / ବହୁପକ୍ଷୀୟ ସଂସ୍ଥା"] },
  { value: "Corporate / CSR Foundation", label: ["Corporate / CSR Foundation", "କର୍ପୋରେଟ / ସିଏସଆର ଫାଉଣ୍ଡେସନ"] },
  { value: "Farmer Producer Organization (FPO)", label: ["Farmer Producer Organization (FPO)", "କୃଷକ ଉତ୍ପାଦକ ସଂଗଠନ (ଏଫପିଓ)"] },
  { value: "Primary Fishermen Cooperative", label: ["Primary Fishermen Cooperative", "ପ୍ରାଥମିକ ମତ୍ସ୍ୟଜୀବୀ ସମବାୟ"] },
  { value: "Private Agritech / Aqua Enterprise", label: ["Private Agritech / Aqua Enterprise", "ଘରୋଇ ଆଗ୍ରିଟେକ / ଜଳଚର ଉଦ୍ୟୋଗ"] },
];

const SECTOR_CHOICES: Choice[] = [
  { value: "Agriculture", label: ["Agriculture", "କୃଷି"] },
  { value: "Horticulture & Protected Cultivation", label: ["Horticulture & Protected Cultivation", "ଉଦ୍ୟାନ କୃଷି ଓ ସଂରକ୍ଷିତ ଚାଷ"] },
  { value: "Fisheries Ecosystems", label: ["Fisheries Ecosystems", "ମତ୍ସ୍ୟ ପରିବେଶ"] },
  { value: "Aquaculture & Biofloc", label: ["Aquaculture & Biofloc", "ଜଳଚର ଚାଷ ଓ ବାୟୋଫ୍ଲୋକ୍"] },
  { value: "Animal Husbandry & Dairy", label: ["Animal Husbandry & Dairy", "ପଶୁପାଳନ ଓ ଦୁଗ୍ଧ"] },
  { value: "Water & Soil Conservation", label: ["Water & Soil Conservation", "ଜଳ ଓ ମାଟି ସଂରକ୍ଷଣ"] },
  { value: "Integrated Multi-Sector Development", label: ["Integrated Multi-Sector Development", "ସମନ୍ୱିତ ବହୁ-କ୍ଷେତ୍ର ବିକାଶ"] },
];

const TIMELINES: Choice[] = [
  { value: "Immediate (< 3 months)", label: ["Immediate (< 3 months)", "ତୁରନ୍ତ (< ୩ ମାସ)"] },
  { value: "3 - 6 months", label: ["3 - 6 months", "୩ - ୬ ମାସ"] },
  { value: "6 - 12 months", label: ["6 - 12 months", "୬ - ୧୨ ମାସ"] },
  { value: "Multi-year phased program", label: ["Multi-year phased program", "ବହୁ-ବର୍ଷ ପର୍ଯ୍ୟାୟ କାର୍ଯ୍ୟକ୍ରମ"] },
];

const BUDGETS: Choice[] = [
  { value: "< ₹10 Lakhs", label: ["< ₹10 Lakhs", "< ₹୧୦ ଲକ୍ଷ"] },
  { value: "₹10L - ₹50 Lakhs", label: ["₹10L - ₹50 Lakhs", "₹୧୦ଲ - ₹୫୦ ଲକ୍ଷ"] },
  { value: "₹50L - ₹2 Crores", label: ["₹50L - ₹2 Crores", "₹୫୦ଲ - ₹୨ କୋଟି"] },
  { value: "> ₹2 Crores", label: ["> ₹2 Crores", "> ₹୨ କୋଟି"] },
];

export default function StartProjectWizardPage() {
  const { t, language, localizeHref } = useTranslation();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [demo, setDemo] = useState(false);

  const pick = (choice: Choice) => (language === "or" ? choice.label[1] : choice.label[0]);

  const [formData, setFormData] = useState({
    entityType: ENTITY_TYPES[0].value,
    sector: SECTOR_CHOICES[0].value,
    problemStatement: "",
    location: "Odisha",
    timeline: TIMELINES[1].value,
    budget: BUDGETS[2].value,
    name: "",
    organization: "",
    email: "",
    phone: ""
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 8));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization || formData.entityType,
          sector: formData.sector,
          problemStatement: formData.problemStatement,
          location: formData.location,
          timeline: formData.timeline,
          budget: formData.budget,
          lang: language,
        }),
      });
      const data = await res.json().catch(() => ({ demo: true }));
      setDemo(Boolean(data.demo));
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
    } catch {
      localStorage.setItem("odcons_enquiry", JSON.stringify({ ...formData, at: new Date().toISOString() }));
      setDemo(true);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-theme-base text-theme-text relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-16 bg-theme-base border-b border-forest-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <Sprout className="w-3.5 h-3.5" />
            <span>{t("wizard.badge")}</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 uppercase tracking-tight">
            {t("wizard.title")}
          </h1>

          <p className="text-theme-text-muted text-xs sm:text-sm max-w-xl mx-auto">
            {t("wizard.subtitle")}
          </p>

          {/* Progress Bar */}
          {!submitted && (
            <div className="pt-6 max-w-md mx-auto space-y-2">
              <div className="flex justify-between text-xs font-bold text-forest-300 font-display uppercase">
                <span>{t("wizard.step")} {step} {t("wizard.of")}</span>
                <span>{Math.round((step / 8) * 100)}% {t("wizard.completed")}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-forest-900 overflow-hidden border border-forest-800">
                <div
                  className="h-full bg-gradient-to-r from-harvest-500 to-forest-400 transition-all duration-300"
                  style={{ width: `${(step / 8) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Wizard Form Container */}
      <section className="py-16 bg-theme-base">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="p-10 rounded-3xl bg-forest-900/60 border border-forest-700/50 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-forest-800 text-harvest-400 border border-harvest-400/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase">
                {t("wizard.successTitle")}
              </h2>
              <p className="text-xs sm:text-sm text-theme-text-muted max-w-md mx-auto leading-relaxed">
                {t("wizard.successDesc")}
              </p>
              {demo && (
                <p className="text-[10px] text-theme-text-muted font-mono uppercase tracking-widest">
                  {t("wizard.successLocal")}
                </p>
              )}
              <Link
                href={localizeHref("/projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-harvest-500 text-forest-950 text-xs font-bold uppercase tracking-wider"
              >
                <span>{t("wizard.browseProjects")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="p-8 sm:p-10 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-8 backdrop-blur-xl">
              {/* Step 1: Who are you? */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    {t("wizard.step")} 1: {t("wizard.step1Title")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ENTITY_TYPES.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, entityType: type.value })}
                        className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all ${
                          formData.entityType === type.value
                            ? "bg-forest-800 border-harvest-400 text-sand-50 shadow-md"
                            : "bg-theme-base/80 border-forest-800 text-theme-text-muted hover:text-sand-50"
                        }`}
                      >
                        {pick(type)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: What sector? */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    {t("wizard.step")} 2: {t("wizard.step2Title")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SECTOR_CHOICES.map((sec) => (
                      <button
                        key={sec.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, sector: sec.value })}
                        className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all ${
                          formData.sector === sec.value
                            ? "bg-forest-800 border-harvest-400 text-sand-50 shadow-md"
                            : "bg-theme-base/80 border-forest-800 text-theme-text-muted hover:text-sand-50"
                        }`}
                      >
                        {pick(sec)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Problem statement */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    {t("wizard.step")} 3: {t("wizard.step3Title")}
                  </h3>
                  <textarea
                    rows={4}
                    required
                    placeholder={t("wizard.step3Placeholder")}
                    value={formData.problemStatement}
                    onChange={(e) => setFormData({ ...formData, problemStatement: e.target.value })}
                    className="w-full p-4 text-xs bg-theme-base border border-forest-700/50 rounded-2xl text-theme-text placeholder-sand-200/40 focus:outline-none focus:border-harvest-400"
                  />
                </div>
              )}

              {/* Step 4: Location */}
              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    {t("wizard.step")} 4: {t("wizard.step4Title")}
                  </h3>
                  <input
                    type="text"
                    required
                    placeholder={t("wizard.step4Placeholder")}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full p-4 text-xs bg-theme-base border border-forest-700/50 rounded-2xl text-theme-text placeholder-sand-200/40 focus:outline-none focus:border-harvest-400"
                  />
                </div>
              )}

              {/* Step 5: Timeline */}
              {step === 5 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    {t("wizard.step")} 5: {t("wizard.step5Title")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {TIMELINES.map((tl) => (
                      <button
                        key={tl.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: tl.value })}
                        className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all ${
                          formData.timeline === tl.value
                            ? "bg-forest-800 border-harvest-400 text-sand-50 shadow-md"
                            : "bg-theme-base/80 border-forest-800 text-theme-text-muted hover:text-sand-50"
                        }`}
                      >
                        {pick(tl)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 6: Budget Range */}
              {step === 6 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    {t("wizard.step")} 6: {t("wizard.step6Title")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {BUDGETS.map((bg) => (
                      <button
                        key={bg.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: bg.value })}
                        className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all ${
                          formData.budget === bg.value
                            ? "bg-forest-800 border-harvest-400 text-sand-50 shadow-md"
                            : "bg-theme-base/80 border-forest-800 text-theme-text-muted hover:text-sand-50"
                        }`}
                      >
                        {pick(bg)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 7: Contact Details */}
              {step === 7 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    {t("wizard.step")} 7: {t("wizard.step7Title")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder={t("wizard.namePlaceholder")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-4 text-xs bg-theme-base border border-forest-700/50 rounded-2xl text-theme-text focus:outline-none focus:border-harvest-400"
                    />
                    <input
                      type="text"
                      placeholder={t("wizard.orgPlaceholder")}
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full p-4 text-xs bg-theme-base border border-forest-700/50 rounded-2xl text-theme-text focus:outline-none focus:border-harvest-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder={t("wizard.emailPlaceholder")}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-4 text-xs bg-theme-base border border-forest-700/50 rounded-2xl text-theme-text focus:outline-none focus:border-harvest-400"
                    />
                    <input
                      type="tel"
                      required
                      placeholder={t("wizard.phonePlaceholder")}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-4 text-xs bg-theme-base border border-forest-700/50 rounded-2xl text-theme-text focus:outline-none focus:border-harvest-400"
                    />
                  </div>
                </div>
              )}

              {/* Step 8: Review & Submit */}
              {step === 8 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    {t("wizard.step")} 8: {t("wizard.step8Title")}
                  </h3>

                  <div className="p-5 rounded-2xl bg-theme-base border border-forest-800 space-y-3 text-xs">
                    <div className="flex justify-between border-b border-forest-800 pb-2">
                      <span className="text-theme-text-muted">{t("wizard.entityType")}:</span>
                      <strong className="text-sand-50">{formData.entityType}</strong>
                    </div>
                    <div className="flex justify-between border-b border-forest-800 pb-2">
                      <span className="text-theme-text-muted">{t("wizard.targetSector")}:</span>
                      <strong className="text-harvest-400">{formData.sector}</strong>
                    </div>
                    <div className="flex justify-between border-b border-forest-800 pb-2">
                      <span className="text-theme-text-muted">{t("wizard.location")}:</span>
                      <strong className="text-sand-50">{formData.location}</strong>
                    </div>
                    <div className="flex justify-between border-b border-forest-800 pb-2">
                      <span className="text-theme-text-muted">{t("wizard.timelineOutlay")}:</span>
                      <strong className="text-sand-50">{formData.timeline} ({formData.budget})</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-theme-text-muted">{t("wizard.contactPerson")}:</span>
                      <strong className="text-sand-50">{formData.name} ({formData.email}, {formData.phone})</strong>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-harvest-500 to-forest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-all"
                  >
                    <Send className="w-4 h-4 text-forest-950" />
                    <span>{submitting ? t("wizard.submitting") : t("wizard.submit")}</span>
                  </button>
                </form>
              )}

              {/* Step Action Nav Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-forest-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-1 text-xs font-bold text-theme-text-muted hover:text-sand-50"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{t("wizard.back")}</span>
                  </button>
                ) : <div />}

                {step < 8 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-1 px-6 py-2.5 rounded-full bg-forest-800 hover:bg-forest-700 text-sand-50 text-xs font-bold uppercase tracking-wider"
                  >
                    <span>{t("wizard.next")}</span>
                    <ArrowRight className="w-4 h-4 text-harvest-400" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
