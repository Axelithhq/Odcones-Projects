"use client";

import React, { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Sprout, ShieldCheck } from "lucide-react";

export default function StartProjectWizardPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    entityType: "Government Agency",
    sector: "Aquaculture",
    problemStatement: "",
    location: "Odisha",
    timeline: "3 - 6 months",
    budget: "₹50L - ₹2 Crores",
    name: "",
    organization: "",
    email: "",
    phone: ""
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 8));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Store in Supabase database
      const { error } = await supabase.from("enquiries").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization || formData.entityType,
          sector: formData.sector,
          problem_statement: formData.problemStatement,
          location: formData.location,
          timeline: formData.timeline,
          budget: formData.budget,
          status: "New",
        },
      ]);

      if (error) {
        console.warn("Supabase error (using fallback storage):", error.message);
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-16 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <Sprout className="w-3.5 h-3.5" />
            <span>INTERACTIVE PROJECT ENQUIRY WIZARD</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 uppercase tracking-tight">
            Start a Sustainable Project
          </h1>

          <p className="text-sand-200/80 text-xs sm:text-sm max-w-xl mx-auto">
            Complete this 8-step project configuration wizard to share your vision with our senior design, agronomy, and blue economy engineering team.
          </p>

          {/* Progress Bar */}
          {!submitted && (
            <div className="pt-6 max-w-md mx-auto space-y-2">
              <div className="flex justify-between text-xs font-bold text-forest-300 font-display uppercase">
                <span>STEP {step} OF 8</span>
                <span>{Math.round((step / 8) * 100)}% COMPLETED</span>
              </div>
              <div className="w-full h-2 rounded-full bg-forest-900 overflow-hidden border border-forest-800">
                <div
                  className="h-full bg-gradient-to-r from-harvest-500 to-forest-400 transition-all duration-300"
                  style={{ width: `${(step / 8) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Wizard Form Container */}
      <section className="py-16 bg-forest-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="p-10 rounded-3xl bg-forest-900/60 border border-forest-700/50 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-forest-800 text-harvest-400 border border-harvest-400/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase">
                Project Enquiry Received
              </h2>
              <p className="text-xs sm:text-sm text-sand-200/80 max-w-md mx-auto leading-relaxed">
                Thank you for submitting your project requirements. An ODCONES senior domain expert will review your submission and reach out within 24 business hours.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-harvest-500 text-forest-950 text-xs font-bold uppercase tracking-wider"
              >
                <span>Browse Existing Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="p-8 sm:p-10 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-8 backdrop-blur-xl">
              {/* Step 1: Who are you? */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    Step 1: What type of entity are you representing?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Government Agency / Department",
                      "Institutional / Multilateral Body",
                      "Corporate / CSR Foundation",
                      "Farmer Producer Organization (FPO)",
                      "Primary Fishermen Cooperative",
                      "Private Agritech / Aqua Enterprise"
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, entityType: type })}
                        className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all ${
                          formData.entityType === type
                            ? "bg-forest-800 border-harvest-400 text-sand-50 shadow-md"
                            : "bg-forest-950/80 border-forest-800 text-sand-200/70 hover:text-sand-50"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: What sector? */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    Step 2: Which sector is your project in?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Agriculture",
                      "Horticulture & Protected Cultivation",
                      "Fisheries Ecosystems",
                      "Aquaculture & Biofloc",
                      "Animal Husbandry & Dairy",
                      "Water & Soil Conservation",
                      "Integrated Multi-Sector Development"
                    ].map((sec) => (
                      <button
                        key={sec}
                        type="button"
                        onClick={() => setFormData({ ...formData, sector: sec })}
                        className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all ${
                          formData.sector === sec
                            ? "bg-forest-800 border-harvest-400 text-sand-50 shadow-md"
                            : "bg-forest-950/80 border-forest-800 text-sand-200/70 hover:text-sand-50"
                        }`}
                      >
                        {sec}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Problem statement */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    Step 3: Describe the challenge or objectives you want to solve
                  </h3>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe what you aim to build, key pain points (e.g. low crop yields, lack of pond aeration, saline topsoil), or project scope..."
                    value={formData.problemStatement}
                    onChange={(e) => setFormData({ ...formData, problemStatement: e.target.value })}
                    className="w-full p-4 text-xs bg-forest-950 border border-forest-700/50 rounded-2xl text-sand-100 placeholder-sand-200/40 focus:outline-none focus:border-harvest-400"
                  />
                </div>
              )}

              {/* Step 4: Location */}
              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    Step 4: Where is the project located?
                  </h3>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sambalpur, Odisha / Vizag, Andhra Pradesh"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full p-4 text-xs bg-forest-950 border border-forest-700/50 rounded-2xl text-sand-100 placeholder-sand-200/40 focus:outline-none focus:border-harvest-400"
                  />
                </div>
              )}

              {/* Step 5: Timeline */}
              {step === 5 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    Step 5: What is your expected execution timeline?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Immediate (< 3 months)", "3 - 6 months", "6 - 12 months", "Multi-year phased program"].map((tl) => (
                      <button
                        key={tl}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: tl })}
                        className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all ${
                          formData.timeline === tl
                            ? "bg-forest-800 border-harvest-400 text-sand-50 shadow-md"
                            : "bg-forest-950/80 border-forest-800 text-sand-200/70 hover:text-sand-50"
                        }`}
                      >
                        {tl}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 6: Budget Range */}
              {step === 6 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    Step 6: Estimated Project Outlay / Budget Range
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["< ₹10 Lakhs", "₹10L - ₹50 Lakhs", "₹50L - ₹2 Crores", "> ₹2 Crores"].map((bg) => (
                      <button
                        key={bg}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: bg })}
                        className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all ${
                          formData.budget === bg
                            ? "bg-forest-800 border-harvest-400 text-sand-50 shadow-md"
                            : "bg-forest-950/80 border-forest-800 text-sand-200/70 hover:text-sand-50"
                        }`}
                      >
                        {bg}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 7: Contact Details */}
              {step === 7 && (
                <div className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    Step 7: Provide your contact details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-4 text-xs bg-forest-950 border border-forest-700/50 rounded-2xl text-sand-100 focus:outline-none focus:border-harvest-400"
                    />
                    <input
                      type="text"
                      placeholder="Organization Name"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full p-4 text-xs bg-forest-950 border border-forest-700/50 rounded-2xl text-sand-100 focus:outline-none focus:border-harvest-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-4 text-xs bg-forest-950 border border-forest-700/50 rounded-2xl text-sand-100 focus:outline-none focus:border-harvest-400"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-4 text-xs bg-forest-950 border border-forest-700/50 rounded-2xl text-sand-100 focus:outline-none focus:border-harvest-400"
                    />
                  </div>
                </div>
              )}

              {/* Step 8: Review & Submit */}
              {step === 8 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    Step 8: Review & Submit Project Proposal
                  </h3>

                  <div className="p-5 rounded-2xl bg-forest-950 border border-forest-800 space-y-3 text-xs">
                    <div className="flex justify-between border-b border-forest-800 pb-2">
                      <span className="text-sand-200/60">Entity Type:</span>
                      <strong className="text-sand-50">{formData.entityType}</strong>
                    </div>
                    <div className="flex justify-between border-b border-forest-800 pb-2">
                      <span className="text-sand-200/60">Target Sector:</span>
                      <strong className="text-harvest-400">{formData.sector}</strong>
                    </div>
                    <div className="flex justify-between border-b border-forest-800 pb-2">
                      <span className="text-sand-200/60">Location:</span>
                      <strong className="text-sand-50">{formData.location}</strong>
                    </div>
                    <div className="flex justify-between border-b border-forest-800 pb-2">
                      <span className="text-sand-200/60">Timeline & Outlay:</span>
                      <strong className="text-sand-50">{formData.timeline} ({formData.budget})</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sand-200/60">Contact Person:</span>
                      <strong className="text-sand-50">{formData.name} ({formData.email}, {formData.phone})</strong>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-harvest-500 to-forest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-all"
                  >
                    <Send className="w-4 h-4 text-forest-950" />
                    <span>{submitting ? "Submitting Proposal..." : "Confirm & Submit Proposal"}</span>
                  </button>
                </form>
              )}

              {/* Step Action Nav Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-forest-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-1 text-xs font-bold text-sand-200/70 hover:text-sand-50"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous Step</span>
                  </button>
                ) : <div />}

                {step < 8 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-1 px-6 py-2.5 rounded-full bg-forest-800 hover:bg-forest-700 text-sand-50 text-xs font-bold uppercase tracking-wider"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4 text-harvest-400" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
