"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Briefcase, MapPin, CheckCircle2, ArrowRight, X } from "lucide-react";

const CAREERS = [
  { id: "c-1", title: "Senior Aquaculture Engineering Specialist", location: "Bhubaneswar / Field", dept: "Blue Economy", exp: "5+ Years", desc: "Lead design and commissioning of HDPE floating cages, Biofloc systems, and RAS recirculating units." },
  { id: "c-2", title: "Agronomy Lead — Protected Horticulture", location: "Koraput / Rayagada", dept: "Horticulture", exp: "4+ Years", desc: "Oversee polyhouse micro-drip fertigation protocols and high-density fruit orchard establishment." },
  { id: "c-3", title: "GIS & IoT FieldOS Data Analyst", location: "Bhubaneswar HQ", dept: "Agritech Platform", exp: "2+ Years", desc: "Analyze telemetry metrics, drone spatial data, and satellite NDVI crop indices for client reporting." }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [applied, setApplied] = useState(false);

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>JOIN OUR TEAM</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            Careers & Field Roles
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            Build a career at the forefront of agricultural technology, blue economy engineering, and rural community transformation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-forest-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase mb-8">Open Positions</h2>

          {CAREERS.map((job) => (
            <div key={job.id} className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-widest">{job.dept} • {job.exp}</span>
                <h3 className="font-display font-extrabold text-xl text-sand-50">{job.title}</h3>
                <p className="text-xs text-sand-200/70">{job.desc}</p>
                <div className="flex items-center gap-1 text-xs text-forest-300 font-semibold pt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{job.location}</span>
                </div>
              </div>

              <button
                onClick={() => { setSelectedJob(job); setApplied(false); }}
                className="px-6 py-3 rounded-full bg-forest-800 hover:bg-forest-700 text-sand-50 text-xs font-bold uppercase tracking-wider flex-shrink-0 flex items-center gap-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 text-harvest-400" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[10000] bg-forest-950/90 backdrop-blur-2xl flex items-center justify-center p-4">
          <div className="max-w-lg w-full p-8 rounded-3xl bg-forest-900 border border-forest-700 relative space-y-6">
            <button onClick={() => setSelectedJob(null)} className="absolute top-6 right-6 text-sand-200 hover:text-sand-50">
              <X className="w-6 h-6" />
            </button>

            {applied ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-harvest-400 mx-auto" />
                <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">Application Submitted</h3>
                <p className="text-xs text-sand-200/80">Thank you for applying for {selectedJob.title}. We will contact shortlisted candidates.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="space-y-4">
                <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">Apply for {selectedJob.title}</h3>
                <input type="text" required placeholder="Full Name *" className="w-full p-3.5 text-xs bg-forest-950 border border-forest-700 rounded-xl text-sand-100" />
                <input type="email" required placeholder="Email Address *" className="w-full p-3.5 text-xs bg-forest-950 border border-forest-700 rounded-xl text-sand-100" />
                <input type="tel" required placeholder="Phone Number *" className="w-full p-3.5 text-xs bg-forest-950 border border-forest-700 rounded-xl text-sand-100" />
                <textarea rows={3} placeholder="Tell us about your domain experience..." className="w-full p-3.5 text-xs bg-forest-950 border border-forest-700 rounded-xl text-sand-100" />
                <button type="submit" className="w-full py-3.5 rounded-xl bg-harvest-500 hover:bg-harvest-400 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
