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
  CheckCircle2
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
    }, 200);
  };

  const isOr = language === "or";

  const primaryNav = [
    { label: isOr ? "ଆମ ବିଷୟରେ" : "About", href: "/about" },
    { label: isOr ? "ସେବା ସମୂହ" : "Services", href: "/services", hasMega: "services" },
    { label: isOr ? "କ୍ଷେତ୍ରଗୁଡ଼ିକ" : "Sectors", href: "/sectors", hasMega: "sectors" },
    { label: isOr ? "ପ୍ରକଳ୍ପ ସମୂହ" : "Projects", href: "/projects", hasMega: "projects" },
    { label: isOr ? "DPR ପରାମର୍ଶ" : "DPR", href: "/dpr-consultancy" },
    { label: isOr ? "ସରକାରୀ ଯୋଜନା" : "Schemes", href: "/government-schemes" },
    { label: isOr ? "ଜ୍ଞାନ କେନ୍ଦ୍ର" : "Insights", href: "/insights" },
    { label: isOr ? "ଯୋଗାଯୋଗ" : "Contact", href: "/contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isLight
              ? "h-[68px] bg-sand-50/92 backdrop-blur-2xl border-b border-[#D4DDD5] shadow-xl shadow-forest-900/5"
              : "h-[68px] bg-forest-950/90 backdrop-blur-2xl border-b border-forest-500/20 shadow-2xl shadow-forest-950/60"
            : "h-[80px] bg-gradient-to-b from-forest-950/80 via-forest-950/40 to-transparent border-b border-sand-100/10"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Logo & Technical Coordinate Accent */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-3.5 z-10"
              data-cursor-text="ODCONS"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-forest-900/90 border border-forest-600/50 p-1 flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-300 shadow-md">
                <img
                  src="/logo.png"
                  alt="ODCONS PROJECTS Logo"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5">
                  <span className={`font-display font-extrabold text-lg tracking-wider uppercase leading-none transition-colors ${
                    isLight && isScrolled ? "text-[#1A251E] group-hover:text-harvest-700" : "text-sand-50 group-hover:text-harvest-400"
                  }`}>
                    ODCONS
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-harvest-400 animate-pulse" />
                </div>
                <span className={`text-[9px] font-mono font-bold tracking-[0.28em] uppercase leading-tight pt-0.5 ${
                  isLight && isScrolled ? "text-forest-700" : "text-forest-300"
                }`}>
                  PROJECTS
                </span>
              </div>
            </Link>

            {/* Subtle CAD Survey Coordinate Accent (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-forest-700/40 text-[9.5px] font-mono tracking-widest text-forest-300/70 uppercase">
              <span>FIELD</span>
              <span className="text-harvest-400/60">·</span>
              <span>WATER</span>
              <span className="text-harvest-400/60">·</span>
              <span>PROJECT</span>
            </div>
          </div>

          {/* Minimalist Editorial Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 h-full">
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
                    className={`group relative py-2 text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1 ${
                      isActive
                        ? isLight && isScrolled
                          ? "text-harvest-700 font-bold"
                          : "text-harvest-300 font-bold"
                        : isLight && isScrolled
                        ? "text-[#4A5D50] hover:text-[#1A251E]"
                        : "text-sand-200/80 hover:text-sand-50"
                    }`}
                  >
                    <span className="group-hover:-translate-y-[1px] transition-transform duration-200">
                      {item.label}
                    </span>

                    {item.hasMega && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 opacity-60 ${
                        isHovered ? "rotate-180" : ""
                      }`} />
                    )}

                    {/* Active State Green Dot */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavDot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-harvest-400"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}

                    {/* Tactile CAD Underline on Hover (──────) */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-harvest-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Compact Utility Controls & Refined CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Compact Utility Group */}
            <div className={`flex items-center gap-1.5 p-1 rounded-full border ${
              isLight && isScrolled
                ? "bg-white/80 border-[#D4DDD5]"
                : "bg-forest-900/50 border-forest-500/20 backdrop-blur-md"
            }`}>
              <ReadAloudControls />
              <LanguageToggle />

              {/* Refined Theme Switcher */}
              <button
                onClick={toggleTheme}
                className={`p-1.5 rounded-full transition-colors ${
                  isLight
                    ? "text-[#4A5D50] hover:text-harvest-600"
                    : "text-sand-200/70 hover:text-sand-50"
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

            {/* Refined Engineering CTA Button */}
            <Link
              href="/book-consultation"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 border border-forest-600/70 text-sand-50 text-xs font-display font-bold tracking-wider uppercase shadow-lg hover:bg-forest-800 hover:border-harvest-400 transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5 text-harvest-400" />
              <span>{isOr ? "ବୁକିଂ କରନ୍ତୁ" : "Book Consultation"}</span>
              <ArrowRight className="w-3.5 h-3.5 text-harvest-400 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Right Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ReadAloudControls />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                isLight && isScrolled
                  ? "bg-white border-[#D4DDD5] text-[#1A251E]"
                  : "bg-forest-900/80 border-forest-500/30 text-sand-100"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Architectural Mega-Menus Overlay */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`absolute top-full left-0 right-0 border-b shadow-2xl z-40 overflow-hidden ${
                isLight
                  ? "bg-white/98 border-[#D4DDD5] text-[#1A251E]"
                  : "bg-[#06130B]/98 backdrop-blur-2xl border-forest-700/60 text-sand-50"
              }`}
              onMouseEnter={() => handleMouseEnter(activeMegaMenu)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Services Directory Mega Menu */}
                {activeMegaMenu === "services" && (
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="space-y-2 border-r border-forest-800/40 pr-6">
                      <span className="text-[10px] font-mono font-bold text-harvest-400 uppercase tracking-widest block">
                        PROJECT CONSULTANCY
                      </span>
                      <h4 className="font-display font-bold text-base">Engineering & DPR Services</h4>
                      <p className="text-xs text-sand-200/70 font-light">
                        End-to-end technical project documentation, feasibility, and structural estimates.
                      </p>
                    </div>

                    <Link href="/dpr-consultancy" className="p-4 rounded-2xl bg-forest-900/30 border border-forest-800/50 hover:border-harvest-400/60 transition-all space-y-2 group">
                      <FileText className="w-5 h-5 text-harvest-400 group-hover:scale-110 transition-transform" />
                      <h5 className="font-display font-bold text-sm">Detailed Project Reports (DPR)</h5>
                      <p className="text-xs text-sand-200/70">Customized DPRs for bank loans and government subsidies.</p>
                    </Link>

                    <Link href="/engineering" className="p-4 rounded-2xl bg-forest-900/30 border border-forest-800/50 hover:border-harvest-400/60 transition-all space-y-2 group">
                      <Wrench className="w-5 h-5 text-harvest-400 group-hover:scale-110 transition-transform" />
                      <h5 className="font-display font-bold text-sm">Engineering Estimates & 2D/3D</h5>
                      <p className="text-xs text-sand-200/70">Civil estimates, plant layouts, and 3D architectural models.</p>
                    </Link>

                    <Link href="/financial-consultancy" className="p-4 rounded-2xl bg-forest-900/30 border border-forest-800/50 hover:border-harvest-400/60 transition-all space-y-2 group">
                      <Landmark className="w-5 h-5 text-harvest-400 group-hover:scale-110 transition-transform" />
                      <h5 className="font-display font-bold text-sm">Financial Modeling & DSCR</h5>
                      <p className="text-xs text-sand-200/70">P&L, cash flow statements, and loan repayment analysis.</p>
                    </Link>
                  </div>
                )}

                {/* Sectors Directory Mega Menu */}
                {activeMegaMenu === "sectors" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-forest-800/40 pb-3">
                      <span className="text-[10px] font-mono font-bold text-harvest-400 uppercase tracking-widest">
                        7 INTEGRATED SECTOR DOMAINS
                      </span>
                      <Link href="/sectors" className="text-xs font-bold text-harvest-400 hover:underline">
                        View All Sectors →
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                      {[
                        { title: "Agriculture", slug: "agriculture", desc: "Grain & Seeds" },
                        { title: "Fisheries", slug: "fisheries", desc: "Fish Farms & Hatcheries" },
                        { title: "Aquaculture", slug: "aquaculture", desc: "Biofloc & Cages" },
                        { title: "Dairy", slug: "dairy", desc: "Cattle & Milk BMC" },
                        { title: "Poultry", slug: "poultry", desc: "Broiler & Layer Infra" },
                        { title: "Horticulture", slug: "horticulture", desc: "Polyhouse & Mushroom" },
                        { title: "Cold Chain", slug: "cold-chain", desc: "Cold Rooms & PUF" }
                      ].map((sec) => (
                        <Link
                          key={sec.slug}
                          href={`/sectors/${sec.slug}`}
                          className="p-3 rounded-xl bg-forest-900/40 border border-forest-800/50 hover:border-harvest-400/60 transition-all space-y-1 group"
                        >
                          <span className="text-xs font-display font-bold block group-hover:text-harvest-400">{sec.title}</span>
                          <span className="text-[10px] text-sand-200/60 font-mono block">{sec.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects Directory Mega Menu */}
                {activeMegaMenu === "projects" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2 border-r border-forest-800/40 pr-6">
                      <span className="text-[10px] font-mono font-bold text-harvest-400 uppercase tracking-widest block">
                        PROJECT EXPERTISE
                      </span>
                      <h4 className="font-display font-bold text-base">Project Capability Categories</h4>
                      <p className="text-xs text-sand-200/70 font-light">
                        Technical DPRs and layouts structured by ODCONS PROJECTS across agricultural and fisheries domains.
                      </p>
                    </div>

                    <div className="md:col-span-2 grid grid-cols-2 gap-3">
                      {[
                        { title: "Biofloc Fish Farming", slug: "biofloc-fish-farming-units" },
                        { title: "Groundnut Processing", slug: "groundnut-agro-processing-units" },
                        { title: "Commercial Dairy Farms", slug: "commercial-dairy-farms-cattle-sheds" },
                        { title: "Hi-Tech Polyhouses", slug: "hitech-polyhouses-mushroom-units" }
                      ].map((p) => (
                        <Link
                          key={p.slug}
                          href={`/projects/${p.slug}`}
                          className="p-3 rounded-xl bg-forest-900/40 border border-forest-800/50 hover:border-harvest-400/60 transition-all flex items-center justify-between group"
                        >
                          <span className="text-xs font-display font-bold group-hover:text-harvest-400">{p.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-harvest-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
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
              isLight ? "bg-white/98 text-[#1A251E]" : "bg-forest-950/98 backdrop-blur-2xl text-sand-50"
            }`}
          >
            <div className="flex flex-col gap-2 overflow-y-auto">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-harvest-400 uppercase mb-2">
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
                    className="flex items-center justify-between text-lg font-display font-bold py-2.5 border-b border-forest-800/40 hover:text-harvest-400"
                  >
                    <span>0{idx + 1} &nbsp; {item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 border-t border-forest-800/60 flex flex-col gap-3">
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
                className="w-full py-3.5 rounded-xl bg-forest-900 border border-harvest-400 text-center font-display font-extrabold text-xs tracking-wider uppercase text-sand-50 shadow-xl"
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
