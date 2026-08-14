"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Linkedin, Instagram, Youtube, Facebook } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    sector: "Agriculture",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await supabase.from("enquiries").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          sector: formData.sector,
          problem_statement: formData.message,
          location: "Contact Page Submission",
          timeline: "General Enquiry",
          budget: "N/A",
          status: "New",
        },
      ]);
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

      {/* Hero */}
      <section className="py-20 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-sand-50 uppercase tracking-tight">
            Contact ODCONES PROJECTS
          </h1>

          <p className="text-sand-200/80 text-base sm:text-lg max-w-2xl font-light">
            Connect with our headquarters in Bhubaneswar or send a direct inquiry to discuss agricultural, fisheries, and sustainable development partnerships.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="py-20 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800/60 space-y-6">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                Headquarters Address
              </h3>

              <div className="space-y-4 text-xs text-sand-200/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-harvest-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sand-50 block font-semibold text-sm">ODCONES PROJECTS PVT LTD</strong>
                    <span>Plot No. 452, Infocity Rural Tech Hub, Patia, Bhubaneswar, Odisha — 751024, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-harvest-400 flex-shrink-0" />
                  <span><strong>Email:</strong> info@odconesprojects.org</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-harvest-400 flex-shrink-0" />
                  <span><strong>Phone:</strong> +91 674 290 8820 / +91 94370 12345</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-harvest-400 flex-shrink-0" />
                  <span><strong>Office Hours:</strong> Mon - Sat: 09:00 AM - 06:30 PM IST</span>
                </div>
              </div>
            </div>

            {/* Map Preview Embed */}
            <div className="h-64 rounded-3xl overflow-hidden border border-forest-800/60 relative bg-forest-900/60 flex items-center justify-center">
              <iframe
                title="ODCONES Location Map"
                src="https://maps.google.com/maps?q=Bhubaneswar%20Infocity&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 opacity-80 filter grayscale invert contrast-125"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side Direct Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-10 rounded-3xl bg-forest-900/60 border border-forest-700/50 text-center space-y-6">
                <CheckCircle2 className="w-12 h-12 text-harvest-400 mx-auto" />
                <h3 className="font-display font-extrabold text-2xl text-sand-50 uppercase">
                  Message Sent Successfully
                </h3>
                <p className="text-xs text-sand-200/80 max-w-sm mx-auto">
                  Thank you for writing to us. A team member will respond to your query promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-6">
                <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                  Send a Direct Enquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="p-4 text-xs bg-forest-950 border border-forest-700/50 rounded-2xl text-sand-100 focus:outline-none focus:border-harvest-400"
                  />
                  <input
                    type="text"
                    placeholder="Organization Name"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="p-4 text-xs bg-forest-950 border border-forest-700/50 rounded-2xl text-sand-100 focus:outline-none focus:border-harvest-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="p-4 text-xs bg-forest-950 border border-forest-700/50 rounded-2xl text-sand-100 focus:outline-none focus:border-harvest-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="p-4 text-xs bg-forest-950 border border-forest-700/50 rounded-2xl text-sand-100 focus:outline-none focus:border-harvest-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-forest-300 uppercase">Sector of Interest</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full p-4 text-xs bg-forest-950 border border-forest-700/50 rounded-2xl text-sand-100 focus:outline-none focus:border-harvest-400"
                  >
                    <option value="Agriculture">Agriculture</option>
                    <option value="Horticulture">Horticulture</option>
                    <option value="Fisheries">Fisheries</option>
                    <option value="Aquaculture">Aquaculture</option>
                    <option value="Animal Husbandry">Animal Husbandry</option>
                    <option value="Water & Soil Conservation">Water & Soil Conservation</option>
                  </select>
                </div>

                <textarea
                  rows={4}
                  required
                  placeholder="Your Message / Project Details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 text-xs bg-forest-950 border border-forest-700/50 rounded-2xl text-sand-100 placeholder-sand-200/40 focus:outline-none focus:border-harvest-400"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-forest-600 to-harvest-600 text-sand-50 font-display font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? "Sending Message..." : "Start a Conversation"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
