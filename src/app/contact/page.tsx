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
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", org: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>{t("nav.contact")}</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            {language === "or" ? "ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ" : "Get In Touch With ODCONES"}
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            {language === "or"
              ? "କୃଷି, ମତ୍ସ୍ୟଚାଷ, ଜଳଚର ପାଳନ କିମ୍ବା ଗ୍ରାମୀଣ ବିକାଶ ପ୍ରକଳ୍ପ ପାଇଁ ଆମ ବିଶେଷଜ୍ଞ ଟିମ୍ ସହ କଥା ହୁଅନ୍ତୁ।"
              : "Reach out to our project team for agricultural, fisheries, aquaculture or infrastructure proposals."}
          </p>
        </div>
      </section>

      <section className="py-20 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-6">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                {language === "or" ? "ମୁଖ୍ୟ କାର୍ଯ୍ୟାଳୟ" : "Headquarters"}
              </h3>

              <div className="space-y-4 text-xs text-sand-200/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-harvest-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sand-50 font-display">Bhubaneswar Regional Hub</strong>
                    <span>ODCONES PROJECTS, IRC Village, Nayapalli, Bhubaneswar, Odisha 751015</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-harvest-400 flex-shrink-0" />
                  <span>contact@odcones.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-harvest-400 flex-shrink-0" />
                  <span>+91 674 290 1845</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-forest-900/50 border border-forest-700/50 space-y-6 shadow-2xl">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-forest-950 border border-emerald-500/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="font-display font-extrabold text-2xl text-sand-50">
                  {language === "or" ? "ଆପଣଙ୍କର ଅନୁସନ୍ଧାନ ଦାଖଲ ହୋଇଛି।" : "Your Enquiry Has Been Submitted."}
                </h3>
                <p className="text-xs text-sand-200/80">
                  {language === "or"
                    ? "ଆମର ପ୍ରକଳ୍ପ ଅଫିସର ଖୁବ୍ ଶୀଘ୍ର ଆପଣଙ୍କ ସହ ଯୋଗାଯୋଗ କରିବେ।"
                    : "Our field development team will respond to your query within 24 hours."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">
                      {language === "or" ? "ନାମ (Full Name)" : "Full Name *"}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={language === "or" ? "ଆପଣଙ୍କ ନାମ" : "Anshuman Mohapatra"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">
                      {language === "or" ? "ଇମେଲ୍ (Email)" : "Email Address *"}
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">
                      {language === "or" ? "ଫୋନ୍ ନମ୍ବର (Phone)" : "Phone Number"}
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">
                      {language === "or" ? "ସଂସ୍ଥା (Organization)" : "Organization / FPO"}
                    </label>
                    <input
                      type="text"
                      placeholder={language === "or" ? "ସଂସ୍ଥାର ନାମ" : "ODCONES Agri Pvt Ltd"}
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">
                    {language === "or" ? "ବାର୍ତ୍ତା (Message)" : "Project Message *"}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={language === "or" ? "ଆପଣଙ୍କ ପ୍ରକଳ୍ପ ବିଷୟରେ ଲେଖନ୍ତୁ..." : "Describe your project requirements..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-harvest-500 to-forest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-forest-950" />
                  <span>{t("action.submit")}</span>
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
