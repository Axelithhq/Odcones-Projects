"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout } from "lucide-react";

export function IntroAnimation() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[10000] bg-forest-950 flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="relative flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-forest-500 via-forest-700 to-harvest-600 p-0.5 shadow-2xl flex items-center justify-center"
            >
              <div className="w-full h-full bg-forest-950 rounded-[14px] flex items-center justify-center">
                <Sprout className="w-8 h-8 text-harvest-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-center"
            >
              <span className="font-display font-extrabold text-2xl tracking-[0.2em] text-sand-50 uppercase">
                ODCONS
              </span>
            </motion.div>

            {/* Expanding Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
              className="h-[2px] bg-gradient-to-r from-transparent via-harvest-400 to-transparent"
            />

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="text-xs font-bold tracking-[0.4em] text-forest-300 uppercase"
            >
              PROJECTS
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
