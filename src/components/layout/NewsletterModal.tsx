"use client";

import React, { useState, useEffect } from "react";
import { Mail, X, CheckCircle2, Sprout } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useTranslation();

  useEffect(() => {
    const subscribed = localStorage.getItem("odcons_subscribed");
    const dismissedUntil = localStorage.getItem("odcons_newsletter_dismissed");

    if (subscribed === "true") return;
    if (dismissedUntil && new Date().getTime() < parseInt(dismissedUntil, 10)) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    // Dismiss for 30 days
    const thirtyDays = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
    localStorage.setItem("odcons_newsletter_dismissed", thirtyDays.toString());
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      if (res.ok) {
        setIsSubscribed(true);
        localStorage.setItem("odcons_subscribed", "true");
        setTimeout(() => setIsOpen(false), 3000);
      }
    } catch {
      // Fallback
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-md p-8 rounded-3xl bg-forest-900 border border-forest-700 shadow-2xl space-y-6 text-sand-50">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-full bg-forest-950/60 border border-forest-700 text-sand-200 hover:text-rose-400"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubscribed ? (
          <div className="text-center space-y-3 py-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="font-display font-extrabold text-xl text-sand-50">
              {language === "or" ? "ସବସ୍କ୍ରିପସନ୍ ସଫଳ ହେଲା!" : "Subscribed Successfully!"}
            </h3>
            <p className="text-xs text-sand-200/80">
              {language === "or"
                ? "ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ ସହ ଯୋଡ଼ି ହୋଇଥିବାରୁ ଧନ୍ୟବାଦ।"
                : "Thank you for staying connected with ODCONS PROJECTS technical insights."}
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-2 text-center">
              <div className="w-12 h-12 rounded-2xl bg-forest-800 border border-forest-600 mx-auto flex items-center justify-center text-harvest-400">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold font-mono text-harvest-400 uppercase tracking-widest block">
                STAY CONNECTED WITH ODCONS
              </span>
              <h3 className="font-display font-extrabold text-2xl text-sand-50">
                {language === "or" ? "ଓଡକୋନ୍ସ ନିଉଜଲେଟର ସବସ୍କ୍ରାଇବ୍ କରନ୍ତୁ" : "Get Agribusiness & Project DPR Advisory"}
              </h3>
              <p className="text-xs text-sand-200/80 leading-relaxed font-light">
                {language === "or"
                  ? "କୃଷି, ମତ୍ସ୍ୟଚାଷ, ଜଳଚର ପାଳନ, ସରକାରୀ ଯୋଜନା ଓ ସବସିଡି ସମ୍ବନ୍ଧୀୟ ନିୟମିତ ତଥ୍ୟ ପାଆନ୍ତୁ।"
                  : "Receive monthly DPR guides, subsidy policy updates, and technical feasibility insights."}
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={language === "or" ? "ଆପଣଙ୍କ ନାମ (Optional)" : "Your Name (Optional)"}
                className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-xs focus:outline-none focus:border-harvest-400"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === "or" ? "ଆପଣଙ୍କ ଇମେଲ୍ (Required)" : "Email Address *"}
                className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-xs focus:outline-none focus:border-harvest-400"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-harvest-400 disabled:opacity-50"
              >
                {isLoading ? "Subscribing..." : language === "or" ? "ସବସ୍କ୍ରାଇବ୍ କରନ୍ତୁ" : "Subscribe Now"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
