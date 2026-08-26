"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { ReadAloudControls } from "./ReadAloudControls";
import { useTranslation } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Menu, X, Sun, Moon, Calendar } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: language === "or" ? "ମୁଖ୍ୟ ପୃଷ୍ଠା" : "Home", href: "/" },
    { label: language === "or" ? "ଆମ ବିଷୟରେ" : "About Us", href: "/about" },
    { label: language === "or" ? "ସେବା ସମୂହ" : "Services", href: "/services" },
    { label: language === "or" ? "କ୍ଷେତ୍ରଗୁଡ଼ିକ" : "Sectors", href: "/sectors" },
    { label: language === "or" ? "ପ୍ରକଳ୍ପ ସମୂହ" : "Projects", href: "/projects" },
    { label: language === "or" ? "DPR ପରାମର୍ଶ" : "DPR Consultancy", href: "/dpr-consultancy" },
    { label: language === "or" ? "ସରକାରୀ ଯୋଜନା" : "Government Schemes", href: "/government-schemes" },
    { label: language === "or" ? "ଜ୍ଞାନ କେନ୍ଦ୍ର" : "Insights", href: "/insights" },
    { label: language === "or" ? "ଯୋଗାଯୋଗ" : "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-forest-950/90 backdrop-blur-xl border-b border-forest-800/40 shadow-xl"
            : "py-5 bg-gradient-to-b from-forest-950/95 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with official Logo.png & ODCONS spelling */}
          <Link href="/" className="group flex items-center gap-3 z-10" data-cursor-text="ODCONS">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-forest-900 border border-forest-700 p-1 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src="/logo.png" alt="ODCONS PROJECTS" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-sand-50 uppercase leading-none group-hover:text-harvest-400 transition-colors">
                ODCONS
              </span>
              <span className="text-[9px] font-semibold tracking-[0.25em] text-forest-300 uppercase leading-tight">
                PROJECTS
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 px-4 py-1.5 rounded-full bg-forest-900/40 border border-forest-500/20 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors rounded-full ${
                    isActive
                      ? "text-harvest-300 font-bold"
                      : "text-sand-100/80 hover:text-sand-50 hover:bg-forest-800/40"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-forest-800/80 rounded-full -z-10 border border-forest-500/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Controls */}
          <div className="hidden lg:flex items-center gap-3">
            <ReadAloudControls />
            <LanguageToggle />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-forest-900/50 border border-forest-700/50 text-sand-200 hover:text-harvest-400 transition-colors"
              title="Toggle Light / Dark Theme"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5 text-harvest-400" />}
            </button>

            <Link
              href="/book-consultation"
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-forest-600 via-forest-500 to-harvest-600 text-sand-50 text-xs font-bold tracking-wider uppercase shadow-lg hover:shadow-forest-500/25 transition-all duration-300 hover:scale-[1.03]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{language === "or" ? "ବୁକିଂ କରନ୍ତୁ" : "Book Consultation"}</span>
            </Link>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-2 lg:hidden">
            <ReadAloudControls />
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-forest-900/60 border border-forest-500/30 text-sand-100 hover:text-harvest-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-forest-950/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2 overflow-y-auto">
              <span className="text-[10px] font-bold tracking-[0.3em] text-forest-400 uppercase mb-2 font-display">
                ODCONS NAVIGATION
              </span>
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.03 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-lg font-display font-semibold text-sand-100 hover:text-harvest-400 py-2 border-b border-forest-800/40"
                  >
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 border-t border-forest-800/60 flex flex-col gap-3">
              <Link
                href="/book-consultation"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-forest-600 to-harvest-600 text-center font-display font-bold text-xs tracking-wider uppercase text-sand-50 shadow-xl"
              >
                {language === "or" ? "ବୁକିଂ କରନ୍ତୁ" : "Book Consultation"}
              </Link>
              <div className="flex justify-between items-center text-[11px] text-sand-200/60 font-mono">
                <span>© ODCONS PROJECTS</span>
                <span>Anshuman Mohapatra — Founder</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
