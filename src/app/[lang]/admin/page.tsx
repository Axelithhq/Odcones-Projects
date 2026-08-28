"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "@/lib/i18n";
import { Lock, KeyRound, Globe, FileText, Plus, Save, Trash2, CheckCircle2 } from "lucide-react";

export default function AdminPage() {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [activeTab, setActiveTab] = useState<"projects" | "services" | "articles">("projects");
  const [activeLangTab, setActiveLangTab] = useState<"en" | "or">("en");
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form State
  const [titleEn, setTitleEn] = useState("Hirakud Reservoir Floating Cage Aquaculture Project");
  const [titleOr, setTitleOr] = useState("ହୀରାକୁଦ ଜଳାଶୟ ଫ୍ଲୋଟିଙ୍ଗ୍ କେଜ୍ ମତ୍ସ୍ୟଚାଷ ପ୍ରକଳ୍ପ");
  const [descEn, setDescEn] = useState("Deployment of 1,200 HDPE floating cages in Hirakud reservoir empowering 14,000 fisherfolk.");
  const [descOr, setDescOr] = useState("ହୀରାକୁଦ ଜଳାଶୟରେ ୧,୨୦୦ ଏଚଡିପିଇ ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍ ସ୍ଥାପନ ଏବଂ ୧୪,୦୦୦ ମତ୍ସ୍ୟଜୀବୀ ସଶକ୍ତିକରଣ।");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === "odcons2026" || passkey === "admin") {
      setIsAuthenticated(true);
      setErrorMsg("");
    } else {
      setErrorMsg(t("admin.invalid"));
    }
  };

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const TAB_LABELS: Record<string, string> = {
    projects: t("admin.tabProjects"),
    services: t("admin.tabServices"),
    articles: t("admin.tabArticles"),
  };

  return (
    <main className="min-h-screen bg-theme-base text-sand-100 pt-20">
      <Header />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto p-8 rounded-3xl bg-forest-900/60 border border-forest-700/60 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-forest-800 border border-forest-600 mx-auto flex items-center justify-center text-harvest-400">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="font-display font-extrabold text-2xl text-sand-50">{t("admin.loginTitle")}</h1>
              <p className="text-xs text-sand-200/70">{t("admin.loginDesc")}</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-sand-200 uppercase">{t("admin.passkey")}</label>
                <input
                  type="password"
                  value={passkey}
                  onChange={(e) => setPasskey(e.target.value)}
                  placeholder={t("admin.passkeyPlaceholder")}
                  className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                />
              </div>

              {errorMsg && <p className="text-xs text-rose-400 font-bold">{errorMsg}</p>}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-harvest-400 transition-colors"
              >
                {t("admin.authenticate")}
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-forest-800/80 pb-6">
              <div>
                <span className="text-xs font-bold text-harvest-400 uppercase tracking-widest font-display">
                  {t("admin.portalTitle")}
                </span>
                <h1 className="font-display font-extrabold text-3xl text-sand-50">
                  {t("admin.cmsTitle")}
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="px-4 py-2 rounded-xl bg-forest-900 border border-forest-700 text-xs font-bold text-sand-200 hover:text-rose-400"
                >
                  {t("admin.lock")}
                </button>
              </div>
            </div>

            {/* Entity Tabs */}
            <div className="flex items-center gap-2 border-b border-forest-800 pb-2">
              {(["projects", "services", "articles"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                    activeTab === tab
                      ? "bg-harvest-500 text-forest-950 border-harvest-400 shadow-lg"
                      : "bg-forest-900/40 text-sand-200/70 border-forest-800 hover:text-sand-50"
                  }`}
                >
                  {TAB_LABELS[tab]}
                </button>
              ))}
            </div>

            {/* Bilingual Content Editor Card */}
            <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-700/50 space-y-6">
              <div className="flex items-center justify-between border-b border-forest-800 pb-4">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-harvest-400" />
                  <h3 className="font-display font-extrabold text-lg text-sand-50 uppercase">
                    {t("admin.editingEntity")} ({TAB_LABELS[activeTab]})
                  </h3>
                </div>

                {/* Language Tab Switcher */}
                <div className="flex items-center gap-1 p-1 rounded-full bg-theme-base border border-forest-800">
                  <button
                    onClick={() => setActiveLangTab("en")}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                      activeLangTab === "en" ? "bg-harvest-500 text-forest-950" : "text-sand-200/70"
                    }`}
                  >
                    {t("admin.english")}
                  </button>
                  <button
                    onClick={() => setActiveLangTab("or")}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                      activeLangTab === "or" ? "bg-harvest-500 text-forest-950" : "text-sand-200/70"
                    }`}
                  >
                    {t("admin.odia")}
                  </button>
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="space-y-4">
                {activeLangTab === "en" ? (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-harvest-400 uppercase">{t("admin.titleEnLabel")}</label>
                      <input
                        type="text"
                        value={titleEn}
                        onChange={(e) => setTitleEn(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-harvest-400 uppercase">{t("admin.descEnLabel")}</label>
                      <textarea
                        rows={4}
                        value={descEn}
                        onChange={(e) => setDescEn(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-harvest-400 uppercase">{t("admin.titleOrLabel")}</label>
                      <input
                        type="text"
                        value={titleOr}
                        onChange={(e) => setTitleOr(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400 font-sans"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-harvest-400 uppercase">{t("admin.descOrLabel")}</label>
                      <textarea
                        rows={4}
                        value={descOr}
                        onChange={(e) => setDescOr(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400 font-sans"
                      />
                    </div>
                  </div>
                )}
              </div>

              <p className="text-[10px] text-sand-200/60 font-mono">{t("admin.demoNote")}</p>
              <p className="text-[10px] text-sand-200/60 font-mono">{t("admin.editHint")}</p>

              <div className="pt-4 border-t border-forest-800 flex items-center justify-between">
                {saveSuccess ? (
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t("admin.saved")}</span>
                  </span>
                ) : (
                  <span className="text-xs text-sand-200/60 font-mono">{t("admin.demoNote")}</span>
                )}

                <button
                  onClick={handleSave}
                  className="px-6 py-2.5 rounded-xl bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg hover:bg-harvest-400 transition-colors flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{t("admin.save")}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
