"use client";

import React, { useEffect, useState, useRef } from "react";
import { IMPACT_METRICS } from "@/data/impactData";
import { formatNumber } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";
import { pickOr } from "@/lib/localize";

function CounterItem({ value, suffix, label, category }: { value: number; suffix: string; label: string; category: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const steps = 60;
          const stepTime = duration / steps;
          const increment = value / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="p-8 rounded-3xl bg-forest-900/40 border border-forest-700/40 hover:border-forest-500/50 transition-all space-y-3 group">
      <span className="text-[10px] font-bold uppercase tracking-widest text-harvest-400 font-display">
        {category}
      </span>
      <div className="font-display font-extrabold text-4xl sm:text-5xl text-sand-50 tracking-tight group-hover:text-harvest-300 transition-colors">
        {formatNumber(count)}
        <span>{suffix}</span>
      </div>
      <p className="text-xs sm:text-sm text-sand-200/80 leading-relaxed font-semibold">
        {label}
      </p>
    </div>
  );
}

export function ImpactCounters() {
  const { t, language } = useTranslation();

  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative border-b border-forest-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>{t("impact.badge")}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight">
            {t("impact.title")}
          </h2>
          <p className="text-sand-200/70 text-sm leading-relaxed">
            {t("impact.dataNote")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_METRICS.map((metric) => (
            <CounterItem
              key={metric.id}
              value={metric.value}
              suffix={metric.suffix}
              label={pickOr(metric.label, metric.label_or, language)}
              category={pickOr(metric.category, metric.category_or, language)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
