"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
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
  ArrowUpRight,
  Compass,
  ChevronRight,
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { language } = useTranslation();
  const { resolvedTheme, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: language === "or" ? "ମୁଖ୍ୟ ପୃଷ୍ଠା" : "Home", href: "/" },
    { label: language === "or" ? "ଆମ ବିଷୟରେ" : "About", href: "/about" },
    { label: language === "or" ? "ସେବା ସମୂହ" : "Services", href: "/services" },
    { label: language === "or" ? "କ୍ଷେତ୍ରଗୁଡ଼ିକ" : "Sectors", href: "/sectors" },
    { label: language === "or" ? "ପ୍ରକଳ୍ପ ସମୂହ" : "Projects", href: "/projects" },
    { label: language === "or" ? "DPR ପରାମର୍ଶ" : "DPR", href: "/dpr-consultancy" },
    { label: language === "or" ? "ସରକାରୀ ଯୋଜନା" : "Schemes", href: "/government-schemes" },
    { label: language === "or" ? "ଜ୍ଞାନ କେନ୍ଦ୍ର" : "Insights", href: "/insights" },
    { label: language === "or" ? "ଯୋଗାଯୋଗ" : "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isLight = resolvedTheme === "light";

  return (
    <>
      {/* Top scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-forest-500 via-harvest-400 to-harvest-500"
        aria-hidden="true"
      />

      <AnimatePresence mode="wait">
        {mounted && (
          <motion.header
            key="header"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              isScrolled
                ? isLight
                  ? "py-2 bg-white/85 backdrop-blur-2xl border-b border-[#D4DDD5]/70 shadow-xl shadow-forest-900/5"
                  : "py-2 bg-[#06130B]/85 backdrop-blur-2xl border-b border-forest-500/20 shadow-xl shadow-forest-950/50"
                : isLight
                ? "py-4 bg-gradient-to-b from-[#F8F9F5]/95 via-[#F8F9F5]/70 to-transparent"
                : "py-4 bg-gradient-to-b from-[#06130B]/95 via-[#06130B]/60 to-transparent"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="group relative flex items-center gap-3 z-10" data-cursor-text="HOME">
                {/* Ambient glow ring behind logo */}
                <span className="absolute -inset-2 rounded-full bg-harvest-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={`relative w-11 h-11 rounded-2xl overflow-hidden p-1.5 flex items-center justify-center border transition-all duration-300 shadow-lg ${
                    isLight
                      ? "bg-white border-forest-600/30 shadow-forest-900/10"
                      : "bg-forest-900/90 border-forest-600/60 shadow-forest-900/40"
                  }`}
                >
                  <img
                    src="/logo.png"
                    alt="ODCONS PROJECTS Logo"
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </motion.div>
                <div className="flex flex-col justify-center leading-none">
                  <div className="flex items-center gap-1.5">
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className={`font-display font-extrabold text-xl tracking-wide uppercase transition-colors duration-300 ${
                        isLight ? "text-[#1A251E]" : "text-sand-50"
                      } group-hover:text-harvest-400`}
                    >
                      ODCONS
                    </motion.span>
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-harvest-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-harvest-400" />
                    </span>
                  </div>
                  <span
                    className={`text-[9px] font-mono font-bold tracking-[0.3em] uppercase pt-1 transition-colors duration-300 ${
                      isLight ? "text-forest-600" : "text-forest-300"
                    }`}
                  >
                    PROJECTS
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Pill */}
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className={`hidden xl:flex items-center gap-0.5 px-2.5 py-1.5 rounded-full border backdrop-blur-2xl shadow-lg ${
                  isLight
                    ? "bg-white/70 border-[#D4DDD5] shadow-forest-900/5"
                    : "bg-[#0A1C12]/70 border-forest-500/20 shadow-forest-950/40"
                }`}
              >
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div key={item.href} whileHover={{ y: -1 }} whileTap={{ scale: 0.96 }}>
                      <Link
                        href={item.href}
                        className={`group/nav relative inline-flex items-center px-3 py-2 text-xs font-semibold tracking-wide rounded-full transition-colors duration-200 ${
                          active
                            ? isLight
                              ? "text-forest-900"
                              : "text-forest-950"
                            : isLight
                            ? "text-[#4A5D50] hover:text-[#1A251E]"
                            : "text-sand-100/80 hover:text-sand-50"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="activeNavPill"
                            className={`absolute inset-0 rounded-full border shadow-sm ${
                              isLight
                                ? "bg-harvest-400/20 border-harvest-500/40"
                                : "bg-harvest-400/15 border-harvest-400/40"
                            }`}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center gap-1">
                          {item.label}
                          <ChevronRight className="w-3 h-3 opacity-0 -ml-1 group-hover/nav:opacity-100 group-hover/nav:ml-0 transition-all duration-200" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Right Controls (desktop) */}
              <div className="hidden lg:flex items-center gap-2.5">
                <ReadAloudControls />
                <LanguageToggle />

                <motion.button
                  whileHover={{ rotate: 15, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={toggleTheme}
                  className={`p-2.5 rounded-full border transition-all duration-300 shadow-md ${
                    isLight
                      ? "bg-white border-[#D4DDD5] text-forest-700 hover:text-harvest-500 hover:border-harvest-500/50"
                      : "bg-forest-900/60 border-forest-700/60 text-sand-200 hover:text-harvest-400 hover:border-harvest-400/60"
                  }`}
                  title="Toggle Light / Dark Theme"
                  aria-label="Toggle Theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={resolvedTheme}
                      initial={{ rotate: -60, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 60, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                      className="flex"
                    >
                      {resolvedTheme === "light" ? (
                        <Moon className="w-4 h-4" />
                      ) : (
                        <Sun className="w-4 h-4 text-harvest-400" />
                      )}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>

                {/* CTA button with shine sweep */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative"
                >
                  <Link
                    href="/book-consultation"
                    className="relative inline-flex items-center gap-2 overflow-hidden px-5 py-2.5 rounded-full text-xs font-display font-extrabold tracking-wider uppercase text-white shadow-xl shadow-forest-900/30 border border-harvest-400/30 bg-gradient-to-r from-forest-600 via-forest-500 to-harvest-600 hover:border-harvest-400 transition-all duration-300"
                  >
                    {/* Shine sweep */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <Calendar className="w-3.5 h-3.5 text-harvest-300 transition-transform duration-300 group-hover:rotate-12" />
                    <span>{language === "or" ? "ବୁକିଂ କରନ୍ତୁ" : "Book Consultation"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Right Controls */}
              <div className="flex items-center gap-2 lg:hidden">
                <ReadAloudControls />
                <LanguageToggle />
                <AnimatePresence mode="wait" initial={false}>
                  <motion.button
                    key={mobileMenuOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`p-2.5 rounded-xl border shadow-lg transition-colors ${
                      isLight
                        ? "bg-white border-[#D4DDD5] text-[#1A251E]"
                        : "bg-forest-900/80 border-forest-500/40 text-sand-100"
                    }`}
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                  >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </motion.button>
                </AnimatePresence>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 lg:hidden flex flex-col overflow-hidden ${
              isLight ? "bg-[#F8F9F5]/98" : "bg-[#06130B]/98"
            } backdrop-blur-2xl`}
          >
            <div className="flex-1 overflow-y-auto pt-24 pb-8 px-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block font-mono ${
                  isLight ? "text-forest-600" : "text-harvest-400"
                }`}
              >
                <Compass className="w-3.5 h-3.5 inline mr-2 -mt-1" />
                ODCONS NAVIGATION MENU
              </motion.span>

              <div className="flex flex-col">
                {navItems.map((item, idx) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        className={`group flex items-center justify-between py-3.5 border-b text-lg font-display font-semibold transition-colors duration-200 ${
                          active
                            ? isLight
                              ? "text-harvest-600"
                              : "text-harvest-400"
                            : isLight
                            ? "text-[#1A251E] hover:text-harvest-600"
                            : "text-sand-100 hover:text-harvest-400"
                        } ${isLight ? "border-[#D4DDD5]/70" : "border-forest-800/40"}`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`text-[10px] font-mono font-bold ${
                              isLight ? "text-forest-500" : "text-forest-400"
                            }`}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          {item.label}
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`pt-4 pb-6 px-6 border-t flex flex-col gap-3 ${
                isLight ? "border-[#D4DDD5]" : "border-forest-800/60"
              }`}
            >
              <Link
                href="/book-consultation"
                className="relative group w-full py-4 rounded-xl overflow-hidden bg-gradient-to-r from-forest-600 to-harvest-600 text-center font-display font-extrabold text-xs tracking-wider uppercase text-white shadow-xl border border-harvest-400/30"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <Calendar className="w-4 h-4 inline mr-2 -mt-0.5" />
                {language === "or" ? "ବୁକିଂ କରନ୍ତୁ" : "Book Consultation"}
              </Link>
              <div
                className={`flex justify-between items-center text-[11px] font-mono ${
                  isLight ? "text-forest-600/70" : "text-sand-200/60"
                }`}
              >
                <span>© ODCONS PROJECTS</span>
                <span>Anshuman Mohapatra — Founder</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
