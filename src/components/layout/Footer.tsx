"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import { Sprout, ArrowRight, Check, Linkedin, Instagram, Youtube, Facebook, Mail } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-forest-950 text-sand-100 border-t border-forest-800/40 relative overflow-hidden pt-16 pb-12">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aqua-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-800/40">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-600 via-forest-800 to-soil-700 p-0.5">
                <div className="w-full h-full bg-forest-950 rounded-[10px] flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-harvest-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-wider text-sand-50 uppercase leading-none">
                  ODCONES
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
                Subscribe to Industry Insights
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-semibold text-forest-300 bg-forest-900/60 p-3 rounded-xl border border-forest-500/40">
                  <Check className="w-4 h-4 text-harvest-400" />
                  <span>Thank you for subscribing to ODCONES Insights!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-forest-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-xs bg-forest-900/50 border border-forest-700/50 rounded-xl text-sand-100 placeholder-sand-200/40 focus:outline-none focus:border-forest-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-forest-600 hover:bg-forest-500 text-sand-50 text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Sectors */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
              Sectors
            </h4>
            <ul className="space-y-2.5 text-xs text-sand-200/70">
              <li><Link href="/sectors/agriculture" className="hover:text-sand-50 transition-colors">Agriculture</Link></li>
              <li><Link href="/sectors/horticulture" className="hover:text-sand-50 transition-colors">Horticulture</Link></li>
              <li><Link href="/sectors/fisheries" className="hover:text-sand-50 transition-colors">Fisheries</Link></li>
              <li><Link href="/sectors/aquaculture" className="hover:text-sand-50 transition-colors">Aquaculture</Link></li>
              <li><Link href="/sectors/animal-husbandry" className="hover:text-sand-50 transition-colors">Animal Husbandry</Link></li>
              <li><Link href="/sectors/water-soil" className="hover:text-sand-50 transition-colors">Water & Soil Conservation</Link></li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
              Company & Services
            </h4>
            <ul className="space-y-2.5 text-xs text-sand-200/70">
              <li><Link href="/about" className="hover:text-sand-50 transition-colors">About ODCONES</Link></li>
              <li><Link href="/services" className="hover:text-sand-50 transition-colors">What We Do (12 Services)</Link></li>
              <li><Link href="/projects" className="hover:text-sand-50 transition-colors">Project Portfolio</Link></li>
              <li><Link href="/platform" className="hover:text-sand-50 transition-colors">ODCONES FieldOS</Link></li>
              <li><Link href="/impact" className="hover:text-sand-50 transition-colors">Impact Metrics</Link></li>
              <li><Link href="/gallery" className="hover:text-sand-50 transition-colors">Visual Gallery</Link></li>
              <li><Link href="/careers" className="hover:text-sand-50 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact & Office */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
              Headquarters
            </h4>
            <div className="text-xs text-sand-200/70 space-y-2 leading-relaxed">
              <p className="font-semibold text-sand-100">ODCONES PROJECTS PVT LTD</p>
              <p>Plot No. 452, Infocity Rural Tech Hub,</p>
              <p>Patia, Bhubaneswar, Odisha — 751024</p>
              <p className="pt-2"><strong className="text-sand-100">Email:</strong> info@odconesprojects.org</p>
              <p><strong className="text-sand-100">Phone:</strong> +91 674 290 8820</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-forest-900 border border-forest-700/50 flex items-center justify-center text-sand-200 hover:text-harvest-400 hover:border-harvest-400 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-forest-900 border border-forest-700/50 flex items-center justify-center text-sand-200 hover:text-harvest-400 hover:border-harvest-400 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-forest-900 border border-forest-700/50 flex items-center justify-center text-sand-200 hover:text-harvest-400 hover:border-harvest-400 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-forest-900 border border-forest-700/50 flex items-center justify-center text-sand-200 hover:text-harvest-400 hover:border-harvest-400 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-200/50 gap-4">
          <p>© {new Date().getFullYear()} {t("footer.rights")}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-sand-100 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-sand-100 transition-colors">Terms of Service</Link>
            <Link href="/admin" className="text-forest-400 hover:text-harvest-400 transition-colors">Admin CMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
