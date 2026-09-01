"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { ReadAloudControls } from "./ReadAloudControls";
import { useTranslation } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import {
  Menu,
  X,
  Sun,
  Moon,
  Calendar,
  ChevronDown,
  ArrowRight,
  Compass,
  FileText,
  Landmark,
  Layers,
  Wrench,
  CheckCircle2,
  Sparkles,
  Rocket,
  BookOpen
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const { language, t } = useTranslation();
  const { resolvedTheme, toggleTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  const handleMouseEnter = (menuName: string) => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setActiveMegaMenu(menuName);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 220);
  };

  const isOr = language === "or";

  const primaryNav = [
    { label: isOr ? "ଆମ ବିଷୟରେ" : "About", href: "/about" },
    { label: isOr ? "ସେବା ସମୂହ" : "Services", href: "/services", hasMega: "services" },
    { label: isOr ? "ପ୍ରକଳ୍ପ ସମୂହ" : "Projects", href: "/projects", hasMega: "projects" },
    { label: isOr ? "DPR ପରାମର୍ଶ" : "DPR", href: "/dpr-consultancy" },
    { label: isOr ? "ସରକାରୀ ଯୋଜନା" : "Schemes", href: "/government-schemes" },
    { label: isOr ? "ଗ୍ରନ୍ଥାଗାର" : "Library", href: "/library" },
    { label: isOr ? "ଜ୍ଞାନ କେନ୍ଦ୍ର" : "Insights", href: "/insights" },
    { label: isOr ? "ଯୋଗାଯୋଗ" : "Contact", href: "/contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isLight
              ? "h-[72px] bg-white/95 backdrop-blur-2xl border-b border-[#B8C2B3] shadow-xl shadow-forest-900/5 text-[#0B130E]"
              : "h-[72px] bg-theme-base/95 backdrop-blur-2xl border-b border-forest-500/25 shadow-2xl shadow-forest-950/70 text-sand-50"
            : "h-[84px] bg-gradient-to-b from-forest-950/90 via-forest-950/50 to-transparent border-b border-sand-100/10 text-sand-50"
        }`}
      >
        <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 relative">
          
          {/* Left: Brand Logo & CAD Survey Badge */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/"
              className="group flex items-center gap-3 z-10"
              data-cursor-text="ODCONS"
            >
              <div className="relative flex items-center justify-center py-1 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/logo.png"
                  alt="ODCONS PROJECTS Logo"
                  className="h-10 sm:h-11 w-auto max-w-[150px] object-contain drop-shadow-md"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5">
                  <span className={`font-display font-extrabold text-xl tracking-wider uppercase leading-none transition-colors ${
                    isLight && isScrolled ? "text-[#0B130E] group-hover:text-harvest-700" : "text-sand-50 group-hover:text-harvest-400"
                  }`}>
                    ODCONS
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-harvest-400 animate-pulse shadow-sm shadow-harvest-400" />
                </div>
                <span className={`text-[9px] font-mono font-bold tracking-[0.28em] uppercase leading-tight pt-0.5 ${
                  isLight && isScrolled ? "text-forest-700" : "text-forest-300"
                }`}>
                  PROJECTS
                </span>
              </div>
            </Link>

            {/* CAD Survey Coordinate Accent (Shown on 2XL screens) */}
            <div className="hidden 2xl:flex items-center gap-2 pl-3 border-l border-forest-700/40">
              <span className="px-2 py-0.5 rounded bg-forest-900/40 border border-forest-700/30 text-[9px] font-mono tracking-widest text-forest-300/80 uppercase">
                FIELD · WATER · PROJECT
              </span>
            </div>
          </div>

          {/* Center: Desktop Navigation Bar (Starts seamlessly at lg: 1024px) */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 h-full">
            {primaryNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const isHovered = activeMegaMenu === item.hasMega;

              return (
                <div
                  key={item.href}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.hasMega && handleMouseEnter(item.hasMega)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`group relative px-2.5 xl:px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1 ${
                      isActive
                        ? isLight && isScrolled
                          ? "bg-harvest-400/20 text-harvest-800 border-harvest-500/40 font-bold"
                          : "bg-forest-800/80 text-harvest-300 border-forest-500/50 font-bold shadow-md"
                        : isLight && isScrolled
                        ? "border-transparent text-[#29382E] hover:text-[#0B130E] hover:bg-[#F2F3EF] hover:border-[#B8C2B3]"
                        : "border-transparent text-sand-200/80 hover:text-sand-50 hover:bg-forest-800/40 hover:border-forest-700/40"
                    }`}
                  >
                    <span className="group-hover:-translate-y-[0.5px] transition-transform duration-200 whitespace-nowrap">
                      {item.label}
                    </span>

                    {item.hasMega && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 opacity-60 ${
                        isHovered ? "rotate-180 text-harvest-400" : ""
                      }`} />
                    )}

                    {/* Active State Dot */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavDot"
                        className="w-1.5 h-1.5 rounded-full bg-harvest-400 shadow-sm"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right: Desktop Utility Controls & Consultation CTA Button */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            {/* Utility Controls Group */}
            <div className={`flex items-center gap-1.5 p-1 rounded-full border shadow-inner ${
              isLight && isScrolled
                ? "bg-white border-[#B8C2B3]"
                : "bg-forest-900/60 border-forest-500/30 backdrop-blur-md"
            }`}>
              <ReadAloudControls />
              <LanguageToggle />

              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                className={`p-1.5 rounded-full transition-colors ${
                  isLight
                    ? "text-[#29382E] hover:text-harvest-600"
                    : "text-sand-200/80 hover:text-harvest-400"
                }`}
                title="Toggle Theme"
                aria-label="Toggle Theme"
              >
                {resolvedTheme === "light" ? (
                  <Moon className="w-3.5 h-3.5" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-harvest-400" />
                )}
              </button>
            </div>

            {/* High-Attraction Perfectly Aligned Consultation CTA Button */}
            <Link
              href="/book-consultation"
              className="group relative inline-flex items-center justify-center gap-2 h-10 px-4.5 xl:px-5 rounded-full bg-gradient-to-r from-harvest-500 via-harvest-400 to-harvest-600 text-forest-950 font-display font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-harvest-500/20 border border-harvest-300 hover:scale-[1.04] hover:shadow-harvest-400/40 hover:border-white transition-all duration-300 flex-shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-forest-950 group-hover:rotate-12 transition-transform" />
              <span className="whitespace-nowrap">{isOr ? "ବୁକିଂ କରନ୍ତୁ" : "Book Consultation"}</span>
              <ArrowRight className="w-3.5 h-3.5 text-forest-950 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button (Only visible below lg: 1024px) */}
          <div className="flex items-center gap-2 lg:hidden">
            <ReadAloudControls />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl border transition-all ${
                isLight && isScrolled
                  ? "bg-white border-[#B8C2B3] text-[#0B130E]"
                  : "bg-forest-900/90 border-forest-500/40 text-sand-100 shadow-lg"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Architectural Mega-Menus Directory */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className={`absolute top-full left-0 right-0 border-b shadow-2xl z-40 overflow-hidden ${
                isLight
                  ? "bg-white border-[#B8C2B3] text-[#0B130E] shadow-forest-950/20"
                  : "bg-[#06130B] backdrop-blur-2xl border-forest-700/60 text-sand-50"
              }`}
              onMouseEnter={() => handleMouseEnter(activeMegaMenu)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Services Directory Mega Menu */}
                {activeMegaMenu === "services" && (
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="space-y-2 border-r border-[#B8C2B3]/60 pr-6">
                      <span className="text-[10px] font-mono font-bold text-harvest-500 uppercase tracking-widest block">
                        TECHNICAL CONSULTANCY
                      </span>
                      <h4 className="font-display font-extrabold text-base">Engineering & DPR Services</h4>
                      <p className="text-xs text-theme-text-muted font-normal leading-relaxed">
                        Structured Detailed Project Reports, civil construction estimates, financial DSCR analysis, and scheme advisory.
                      </p>
                    </div>

                    <Link href="/dpr-consultancy" className="p-4 rounded-2xl glass-card space-y-2 group shadow-sm hover:shadow-md">
                      <FileText className="w-5 h-5 text-harvest-500 group-hover:scale-110 transition-transform" />
                      <h5 className="font-display font-bold text-sm">Detailed Project Reports (DPR)</h5>
                      <p className="text-xs text-theme-text-muted">Customized DPRs for bank credit appraisal and subsidy applications.</p>
                    </Link>

                    <Link href="/engineering" className="p-4 rounded-2xl glass-card space-y-2 group shadow-sm hover:shadow-md">
                      <Wrench className="w-5 h-5 text-harvest-500 group-hover:scale-110 transition-transform" />
                      <h5 className="font-display font-bold text-sm">Engineering Estimates & 2D/3D</h5>
                      <p className="text-xs text-theme-text-muted">Civil estimates, plant machinery layouts, and 3D spatial models.</p>
                    </Link>

                    <Link href="/financial-consultancy" className="p-4 rounded-2xl glass-card space-y-2 group shadow-sm hover:shadow-md">
                      <Landmark className="w-5 h-5 text-harvest-500 group-hover:scale-110 transition-transform" />
                      <h5 className="font-display font-bold text-sm">Financial Modeling & DSCR</h5>
                      <p className="text-xs text-theme-text-muted">Projected P&L, 10-year cash flow, and loan repayment analysis.</p>
                    </Link>
                  </div>
                )}

                {/* Projects Directory Mega Menu */}
                {activeMegaMenu === "projects" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-7 grid grid-cols-2 gap-3">
                      {[
                        { title: "Biofloc Fish Farming", slug: "biofloc-fish-farming-units" },
                        { title: "Groundnut Processing", slug: "groundnut-agro-processing-units" },
                        { title: "Commercial Dairy Farms", slug: "commercial-dairy-farms-cattle-sheds" },
                        { title: "Hi-Tech Polyhouses", slug: "hitech-polyhouses-mushroom-units" }
                      ].map((p) => (
                        <Link
                          key={p.slug}
                          href={`/projects/${p.slug}`}
                          className="p-3.5 rounded-xl glass-card flex items-center justify-between group hover:border-harvest-400/60 transition-all"
                        >
                          <span className="text-xs font-display font-bold group-hover:text-harvest-400">{p.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-harvest-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                      <Link
                        href="/projects"
                        className="col-span-2 p-2.5 rounded-xl bg-forest-900/60 border border-forest-800 text-center text-xs font-bold text-harvest-400 hover:text-sand-50 transition-colors"
                      >
                        Explore All Featured Case Studies →
                      </Link>
                    </div>

                    {/* High Attraction Featured "START YOUR PROJECT" Card */}
                    <div className="md:col-span-5 p-5 rounded-2xl bg-gradient-to-br from-forest-900 via-forest-950 to-aqua-950 border border-harvest-400/70 shadow-2xl space-y-3 relative overflow-hidden group">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-harvest-400 text-forest-950 text-[10px] font-mono font-extrabold uppercase tracking-widest flex items-center gap-1 shadow-md">
                          <Sparkles className="w-3 h-3 text-forest-950 animate-spin" />
                          <span>READY TO LAUNCH?</span>
                        </span>
                        <Rocket className="w-5 h-5 text-harvest-400 group-hover:scale-125 transition-transform" />
                      </div>

                      <div>
                        <h4 className="font-display font-extrabold text-base text-sand-50 group-hover:text-harvest-400 transition-colors">
                          {isOr ? "ନୂତନ ପ୍ରକଳ୍ପ ଆରମ୍ଭ କରନ୍ତୁ" : "Start Your Project Now"}
                        </h4>
                        <p className="text-xs text-sand-200/80 leading-relaxed font-normal pt-1">
                          {isOr
                            ? "ଆପଣଙ୍କ ପ୍ରକଳ୍ପ ପାଇଁ ବ୍ୟାଙ୍କ DPR, ୨D/୩D ନକ୍ସା ଓ ସରକାରୀ ସବସିଡି ପରାମର୍ଶ ନିଅନ୍ତୁ।"
                            : "Turn your land, water & agribusiness vision into a bankable DPR with full scheme subsidy support."}
                        </p>
                      </div>

                      <Link
                        href="/start-project"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                      >
                        <span>{isOr ? "ପ୍ରକଳ୍ପ ଆରମ୍ଭ କରନ୍ତୁ" : "START A PROJECT TODAY"}</span>
                        <ArrowRight className="w-4 h-4 text-forest-950" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-0 z-40 flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden ${
              isLight ? "bg-white text-[#0B130E]" : "bg-forest-950/98 backdrop-blur-2xl text-sand-50"
            }`}
          >
            <div className="flex flex-col gap-2 overflow-y-auto">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-harvest-500 uppercase mb-2">
                ODCONS NAVIGATION DIRECTORY
              </span>
              {primaryNav.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + idx * 0.03 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-lg font-display font-bold py-2.5 border-b border-[#B8C2B3]/50 hover:text-harvest-500"
                  >
                    <span>0{idx + 1} &nbsp; {item.label}</span>
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/start-project"
                className="mt-4 p-4 rounded-xl bg-gradient-to-r from-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs tracking-wider uppercase shadow-lg flex items-center justify-between"
              >
                <span>{isOr ? "ନୂତନ ପ୍ରକଳ୍ପ ଆରମ୍ଭ କରନ୍ତୁ" : "Start Your Project"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-4 border-t border-[#B8C2B3]/60 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <LanguageToggle />
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full border border-forest-700 text-xs flex items-center gap-1.5"
                >
                  {resolvedTheme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-harvest-400" />}
                  <span>{resolvedTheme === "light" ? "Dark" : "Light"}</span>
                </button>
              </div>

              <Link
                href="/book-consultation"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-harvest-500 via-harvest-400 to-harvest-600 text-center font-display font-extrabold text-xs tracking-wider uppercase text-forest-950 shadow-xl"
              >
                {isOr ? "ବୁକିଂ କରନ୍ତୁ" : "Book Consultation"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
