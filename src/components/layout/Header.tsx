"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "@/lib/i18n";
import { Menu, X, ArrowUpRight, Sprout, Layers, ArrowRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.what_we_do"), href: "/services" },
    { label: t("nav.projects"), href: "/projects" },
    { label: t("nav.platform"), href: "/platform" },
    { label: t("nav.impact"), href: "/impact" },
    { label: t("nav.insights"), href: "/insights" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-forest-950/85 backdrop-blur-xl border-b border-forest-800/40 shadow-xl shadow-forest-950/50"
            : "py-6 bg-gradient-to-b from-forest-950/90 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 z-10" data-cursor-text="ODCONES">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-600 via-forest-800 to-soil-700 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-forest-950 rounded-[10px] flex items-center justify-center">
                <Sprout className="w-5 h-5 text-harvest-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-sand-50 uppercase leading-none group-hover:text-harvest-400 transition-colors">
                ODCONES
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-forest-300 uppercase leading-tight">
                PROJECTS
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-forest-900/40 border border-forest-500/20 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors rounded-full ${
                    isActive
                      ? "text-harvest-300 font-bold"
                      : "text-sand-100/80 hover:text-sand-50 hover:bg-forest-800/40"
                  }`}
                  data-cursor-text="GOTO"
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

          {/* Right Action CTA & Lang */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <Link
              href="/start-project"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-forest-600 via-forest-500 to-harvest-600 text-sand-50 text-xs font-bold tracking-wider uppercase shadow-lg hover:shadow-forest-500/25 transition-all duration-300 hover:scale-[1.03]"
              data-cursor-text="ENQUIRE"
            >
              <span>{t("nav.start_project")}</span>
              <ArrowUpRight className="w-4 h-4 text-sand-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-2 lg:hidden">
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

      {/* Mobile Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-forest-950/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-3 overflow-y-auto">
              <span className="text-[10px] font-bold tracking-[0.3em] text-forest-400 uppercase mb-2">
                NAVIGATION MENU
              </span>
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-xl font-display font-semibold text-sand-100 hover:text-harvest-400 py-2.5 border-b border-forest-800/40"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-5 h-5 text-forest-500" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-forest-800/60 flex flex-col gap-4">
              <Link
                href="/start-project"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-forest-600 to-harvest-600 text-center font-display font-bold text-sm tracking-wider uppercase text-sand-50 shadow-xl"
              >
                {t("nav.start_project")}
              </Link>
              <div className="flex justify-between items-center text-xs text-sand-200/60">
                <span>© ODCONES PROJECTS</span>
                <span>Agriculture • Water • Blue Economy</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
