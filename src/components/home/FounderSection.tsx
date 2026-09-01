"use client";

import React from "react";
import { Sprout, Quote, ShieldCheck, Award, UserCheck, Compass } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function FounderSection() {
  const { t, language } = useTranslation();
  const isOr = language === "or";

  const leaders = [
    {
      id: "founder",
      name: "Anshuman Mohapatra",
      name_or: "ଅଂଶୁମାନ ମହାପାତ୍ର",
      role: isOr ? "ପ୍ରତିଷ୍ଠାତା ଓ ମୁଖ୍ୟ ପରାମର୍ଶଦାତା" : "Founder & Managing Consultant",
      badge: isOr ? "ପ୍ରତିଷ୍ଠାତା" : "FOUNDER & VISIONARY",
      initials: "AM",
      image: "/anshuman_portrait.png",
      gradient: "from-forest-600 via-forest-800 to-harvest-600",
      quote: isOr
        ? "ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ ଏକ ସରଳ ବିଶ୍ୱାସ ଉପରେ ଗଠିତ - ବିକାଶ ଏପରି ପ୍ରଣାଳୀ ସୃଷ୍ଟି କରିବା ଉଚିତ ଯାହା ପ୍ରକଳ୍ପ ସମାପ୍ତ ହେବା ପରେ ବି ଫଳପ୍ରଦ ରହେ।"
        : "ODCONS PROJECTS was built around a simple belief — development should create systems that remain productive, sustainable and useful long after a project is completed.",
      para: isOr
        ? "କୃଷି, ଜଳଚର ଓ ଜଳଛାୟା କ୍ଷେତ୍ରରେ ଉଚ୍ଚସ୍ତରୀୟ ଯୋଜନା ଓ କ୍ଷେତ୍ରସ୍ତରୀୟ କାର୍ଯ୍ୟାନ୍ୱୟନ ମଧ୍ୟରେ ଥିବା ପାର୍ଥକ୍ୟକୁ ଦୂର କରିବା ପାଇଁ ଅଂଶୁମାନ ମହାପାତ୍ର ଓଡକୋନ୍ସର ନେତୃତ୍ୱ ନେଉଛନ୍ତି।"
        : "Under the leadership of Founder Anshuman Mohapatra, ODCONS PROJECTS bridges high-level policy planning and ground-level execution in agricultural, aquatic and watershed landscapes.",
      tags: ["DPR Engineering", "Techno-Economic Audits", "Financial Modeling", "Agri-Infra Design"]
    },
    {
      id: "md",
      name: "Kavita Mahapatra",
      name_or: "କବିତା ମହାପାତ୍ର",
      role: isOr ? "ମ୍ୟାନେଜିଂ ଡାଇରେକ୍ଟର (MD)" : "Managing Director (MD)",
      badge: isOr ? "ମ୍ୟାନେଜିଂ ଡାଇରେକ୍ଟର" : "MANAGING DIRECTOR",
      initials: "KM",
      image: "/kavita_portrait.png",
      gradient: "from-harvest-500 via-forest-700 to-aqua-600",
      quote: isOr
        ? "କୃଷି ଉଦ୍ୟୋଗୀ ଓ ଚାଷୀମାନଙ୍କୁ ସରକାରୀ ଯୋଜନା, ସବସିଡି ଓ ବ୍ୟାଙ୍କ ଋଣ ସହାୟତାରେ ସକ୍ଷମ କରିବା ଆମର ମୂଳ ଲକ୍ଷ୍ୟ।"
        : "Driving corporate governance, operational excellence, scheme documentation compliance, and client relations to empower entrepreneurs across agribusiness and rural industrialization.",
      para: isOr
        ? "ମ୍ୟାନେଜିଂ ଡାଇରେକ୍ଟର କବିତା ମହାପାତ୍ରଙ୍କ ନେତୃତ୍ୱରେ ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ କାର୍ପୋରେଟ ପରିଚାଳନା, ନଥିପତ୍ର ଅନୁପାଳନ ଓ କ୍ଷେତ୍ରୀୟ ପ୍ରକଳ୍ପ ସଫଳତା ସୁନିଶ୍ଚିତ କରୁଛି।"
        : "As Managing Director, Kavita Mahapatra steers corporate administration, government scheme alignment, project compliance, and organizational scale for ODCONS PROJECTS.",
      tags: ["Corporate Governance", "Government Subsidy Advisory", "Operations Management", "Client Relations"]
    }
  ];

  return (
    <section className="py-24 bg-theme-base text-theme-text relative overflow-hidden border-b border-theme-border transition-colors duration-500">
      {/* Background Subtle Glow Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-harvest-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-forest-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
            <Compass className="w-3.5 h-3.5 text-harvest-400" />
            <span>{isOr ? "ଓଡକୋନ୍ସ ନେତୃତ୍ୱ ଓ ଦୃଷ୍ଟିକୋଣ" : "THE VISION & LEADERSHIP BEHIND ODCONS"}</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 uppercase tracking-tight leading-[1.15]">
            {isOr ? "ଆମର କାର୍ଯ୍ୟନିର୍ବାହୀ ନେତୃତ୍ୱ ଟିମ୍" : "Grounded in the Field, Engineered for the Future"}
          </h2>

          <p className="text-theme-text-muted text-xs sm:text-sm font-light leading-relaxed">
            {isOr
              ? "ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସର ପ୍ରତିଷ୍ଠାତା ଓ ମ୍ୟାନେଜିଂ ଡାଇରେକ୍ଟରଙ୍କ ଦୂରଦୃଷ୍ଟି ସମ୍ପନ୍ନ ନେତୃତ୍ୱରେ କୃଷି ଓ ଗ୍ରାମୀଣ ବିକାଶ କ୍ଷେତ୍ରରେ ନୂତନ ଦିଗନ୍ତ"
              : "Guided by Founder Anshuman Mohapatra & Managing Director Kavita Mahapatra, ODCONS PROJECTS delivers turnkey technical consultancy across agribusiness and rural infrastructure."}
          </p>
        </div>

        {/* 2-Column Large Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="rounded-3xl glass-panel border border-theme-border shadow-2xl overflow-hidden flex flex-col justify-between hover:border-harvest-400/60 transition-all duration-300 group"
            >
              {/* Large Prominent Executive Portrait Header */}
              <div className="relative w-full h-80 sm:h-[380px] bg-forest-950 overflow-hidden border-b border-theme-border/60">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Vignette Overlay for Crisp Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

                {/* Executive Badge Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-forest-950/90 border border-harvest-400/80 text-[11px] font-mono font-extrabold text-harvest-400 uppercase tracking-widest shadow-xl backdrop-blur-md">
                    {leader.badge}
                  </span>
                </div>

                {/* Name Overlay on Image */}
                <div className="absolute bottom-4 left-6 right-6 z-10 space-y-1">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-sand-50 tracking-tight drop-shadow-md">
                    {isOr && leader.name_or ? leader.name_or : leader.name}
                  </h3>
                  <p className="text-xs font-mono font-bold text-theme-gold uppercase tracking-wider drop-shadow-sm">
                    {leader.role}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  {/* Executive Quote Block */}
                  <div className="p-5 rounded-2xl bg-forest-950/80 border border-forest-800/80 relative space-y-2">
                    <Quote className="w-6 h-6 text-harvest-400/30 absolute top-3 right-3" />
                    <p className="text-xs sm:text-sm text-sand-100 italic leading-relaxed font-normal">
                      "{leader.quote}"
                    </p>
                  </div>

                  {/* Bio Paragraph */}
                  <p className="text-xs sm:text-sm text-theme-text-muted leading-relaxed font-light">
                    {leader.para}
                  </p>
                </div>

                {/* Functional Expertise Tags */}
                <div className="pt-4 border-t border-theme-border/60 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-theme-gold uppercase tracking-wider block">
                    KEY RESPONSIBILITIES & EXPERTISE:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {leader.tags.map((tg, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-forest-950 border border-forest-800 text-[11px] font-mono text-sand-200"
                      >
                        ✓ {tg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
