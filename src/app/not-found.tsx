"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sprout, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-forest-950 text-sand-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-6 max-w-md">
        {/* Animated Seed Growing Visual */}
        <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-forest-600 via-forest-800 to-harvest-600 p-0.5 shadow-2xl flex items-center justify-center"
          >
            <div className="w-full h-full bg-forest-950 rounded-[14px] flex items-center justify-center">
              <Sprout className="w-10 h-10 text-harvest-400" />
            </div>
          </motion.div>
        </div>

        <h1 className="font-display font-extrabold text-7xl text-sand-50 tracking-tighter">
          4<span className="text-harvest-400">0</span>4
        </h1>

        <h2 className="font-display font-extrabold text-xl text-sand-100 uppercase tracking-wide">
          Looks like this path hasn't been cultivated yet.
        </h2>

        <p className="text-xs text-sand-200/70 leading-relaxed">
          The page or resource you are looking for might have been moved or does not exist in the ODCONES platform directory.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-harvest-500 to-forest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-forest-950" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
