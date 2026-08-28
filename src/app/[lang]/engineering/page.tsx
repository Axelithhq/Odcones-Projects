"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
import { Wrench, Compass, Box, Layers, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const ENGINEERING_SERVICES = [
  {
    title: "Engineering Estimates & Civil BOQ",
    title_or: "ଇଞ୍ଜିନିୟରିଂ ଆକଳନ ଓ ସିଭିଲ୍ BOQ",
    desc: "Preparation of detailed and abstract estimates for sheds, processing buildings, tanks, godowns, offices, stores, and allied project structures.",
    deliverables: ["Abstract & Detailed Itemized Estimates", "PEB Structural Steel Quantities", "Foundation & Earthwork Volumes"]
  },
  {
    title: "2D AutoCAD Architectural Layouts",
    title_or: "୨D ଅଟୋକ୍ୟାଡ୍ ଆର୍କିଟେକ୍ଚରାଲ୍ ଲେ-ଆଉଟ୍",
    desc: "Functional site plans, floor layouts, machinery arrangements, process flow geometry, utility piping diagrams, and internal movement zones.",
    deliverables: ["AutoCAD 2D Master Site Plan", "Plant & Machinery Arrangement", "Utility Line & Electrical Mapping"]
  },
  {
    title: "3D Conceptual Project Visualization",
    title_or: "୩D କନ୍ସେପ୍ଚୁଆଲ୍ ପ୍ରକଳ୍ପ ଭିଜୁଆଲାଇଜେସନ୍",
    desc: "Development of functional 3D spatial models showing buildings, processing plants, farms, hatcheries, feed mills, and storage facilities.",
    deliverables: ["3D Spatial Architectural Rendering", "Plant Infrastructure Walkthrough", "Equipment Spatial Clearance Verification"]
  }
];

export default function EngineeringPage() {
  const { language } = useTranslation();

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor pt-20">
      <CustomCursor />
      <Header />

      {/* Hero Header */}
      <section className="py-20 bg-forest-950 border-b border-forest-800/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/90 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
            <Compass className="w-4 h-4" />
            <span>CIVIL & STRUCTURAL ENGINEERING CONSULTANCY</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight max-w-4xl">
            {language === "or" ? "ଇଞ୍ଜିନିୟରିଂ ଆକଳନ, ୨D ଓ ୩D ଲେ-ଆଉଟ୍" : "ENGINEERING ESTIMATES & 2D/3D LAYOUTS"}
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
            ODCONS PROJECTS provides precision civil construction estimates, structural engineering layouts, plant machinery arrangements, and 3D architectural visualization for commercial agricultural, aquatic, and industrial projects.
          </p>
        </div>
      </section>

      {/* Core Engineering Capabilities */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-b border-forest-800/40">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-harvest-400 font-display uppercase tracking-widest">
            ENGINEERING DELIVERABLES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-sand-50 uppercase">
            Our Engineering Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ENGINEERING_SERVICES.map((srv, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-forest-900/40 border border-forest-700/50 space-y-6 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-harvest-400 p-2 rounded-lg bg-forest-950 border border-forest-800 inline-block">
                  0{idx + 1}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-sand-50">
                  {language === "or" ? srv.title_or : srv.title}
                </h3>
                <p className="text-xs text-sand-200/80 leading-relaxed font-light">{srv.desc}</p>
              </div>

              <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-2">
                <span className="text-[10px] font-bold text-forest-300 uppercase tracking-widest font-display">
                  DELIVERABLE SPECIFICATIONS:
                </span>
                <div className="space-y-1 text-xs text-sand-100 font-mono">
                  {srv.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-harvest-400" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display font-extrabold text-3xl text-sand-50 uppercase">
          Need Engineering Drawings for Your Project?
        </h2>
        <p className="text-sand-200/80 text-sm max-w-xl mx-auto font-light">
          Connect with Founder Anshuman Mohapatra & ODCONS engineering team to structure your civil BOQ, machinery layouts, and 3D architectural plans.
        </p>

        <div>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-harvest-400 transition-all"
          >
            <span>Book Engineering Consultation →</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
