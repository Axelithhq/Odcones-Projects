"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { FEATURED_PROJECTS } from "@/data/projectsData";
import { ARTICLES } from "@/data/insightsData";
import { supabase, EnquiryItem } from "@/lib/supabase";
import { ShieldCheck, Lock, FolderPlus, FileText, Users, Eye, CheckCircle2, Edit, Trash2, LogOut } from "lucide-react";

export default function AdminCMSPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState(false);

  const [activeTab, setActiveTab] = useState<"projects" | "enquiries" | "articles">("enquiries");
  const [enquiriesList, setEnquiriesList] = useState<EnquiryItem[]>([
    {
      id: "enq-1",
      name: "Er. Subhranshu Jena",
      email: "subhranshu@odisha.gov.in",
      phone: "+91 94370 99881",
      organization: "Directorate of Fisheries",
      sector: "Aquaculture",
      problem_statement: "Expansion of reservoir cage culture in Rengali Reservoir (180 HDPE cages).",
      location: "Rengali, Angul",
      timeline: "3 - 6 months",
      budget: "₹50L - ₹2 Crores",
      status: "New",
      created_at: "2026-08-14"
    },
    {
      id: "enq-2",
      name: "Pooja Das",
      email: "pooja@greenearthcsr.org",
      phone: "+91 98610 54321",
      organization: "GreenEarth CSR Foundation",
      sector: "Horticulture",
      problem_statement: "Setting up 45 tribal polyhouses in Rayagada district.",
      location: "Rayagada, Odisha",
      timeline: "Immediate",
      budget: "₹10L - ₹50 Lakhs",
      status: "Contacted",
      created_at: "2026-08-12"
    }
  ]);

  useEffect(() => {
    // Fetch live enquiries from Supabase if configured
    const fetchEnquiries = async () => {
      const { data, error } = await supabase.from("enquiries").select("*").order("created_at", { ascending: false });
      if (data && data.length > 0) {
        setEnquiriesList(data as EnquiryItem[]);
      }
    };
    fetchEnquiries();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "odcones2026" || passwordInput === "admin") {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const updateEnquiryStatus = (id: string, newStatus: any) => {
    setEnquiriesList((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
    );
  };

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      {/* Hero */}
      <section className="py-12 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ADMINISTRATIVE PORTAL</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-sand-50 uppercase">
              ODCONES CMS Management
            </h1>
          </div>

          {isAuthenticated && (
            <button
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-forest-900 border border-forest-700 text-xs font-bold text-sand-200 hover:text-sand-50"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          )}
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isAuthenticated ? (
            /* Login Box */
            <div className="max-w-md mx-auto p-8 rounded-3xl bg-forest-900/50 border border-forest-800 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-forest-800 border border-forest-600 flex items-center justify-center mx-auto text-harvest-400">
                <Lock className="w-6 h-6" />
              </div>

              <div className="text-center space-y-1">
                <h2 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                  CMS Authorization
                </h2>
                <p className="text-xs text-sand-200/70">
                  Enter administrative passkey to access project enquiries & content.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="password"
                  required
                  placeholder="Enter Passkey (Hint: odcones2026)"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full p-4 text-xs bg-forest-950 border border-forest-700 rounded-2xl text-sand-100 focus:outline-none focus:border-harvest-400"
                />
                {authError && (
                  <p className="text-xs text-rose-400 text-center font-bold">Incorrect passkey. Please try again.</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-harvest-500 hover:bg-harvest-400 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider transition-all"
                >
                  Authorize Access
                </button>
              </form>
            </div>
          ) : (
            /* Authenticated Admin Dashboard */
            <div className="space-y-8">
              {/* Analytics Top Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-2">
                  <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-widest font-display">
                    TOTAL ENQUIRIES
                  </span>
                  <p className="font-display font-extrabold text-4xl text-sand-50">{enquiriesList.length}</p>
                </div>

                <div className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-2">
                  <span className="text-[10px] font-bold text-forest-300 uppercase tracking-widest font-display">
                    PUBLISHED CASE STUDIES
                  </span>
                  <p className="font-display font-extrabold text-4xl text-sand-50">{FEATURED_PROJECTS.length}</p>
                </div>

                <div className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-2">
                  <span className="text-[10px] font-bold text-aqua-400 uppercase tracking-widest font-display">
                    KNOWLEDGE HUB ARTICLES
                  </span>
                  <p className="font-display font-extrabold text-4xl text-sand-50">{ARTICLES.length}</p>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-2 border-b border-forest-800 pb-4">
                <button
                  onClick={() => setActiveTab("enquiries")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === "enquiries"
                      ? "bg-harvest-500 text-forest-950 font-extrabold"
                      : "bg-forest-900/40 text-sand-200/70 border border-forest-800 hover:text-sand-50"
                  }`}
                >
                  Manage Project Enquiries ({enquiriesList.length})
                </button>
                <button
                  onClick={() => setActiveTab("projects")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === "projects"
                      ? "bg-harvest-500 text-forest-950 font-extrabold"
                      : "bg-forest-900/40 text-sand-200/70 border border-forest-800 hover:text-sand-50"
                  }`}
                >
                  Manage Projects ({FEATURED_PROJECTS.length})
                </button>
                <button
                  onClick={() => setActiveTab("articles")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === "articles"
                      ? "bg-harvest-500 text-forest-950 font-extrabold"
                      : "bg-forest-900/40 text-sand-200/70 border border-forest-800 hover:text-sand-50"
                  }`}
                >
                  Manage Knowledge Hub ({ARTICLES.length})
                </button>
              </div>

              {/* Enquiries List View */}
              {activeTab === "enquiries" && (
                <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    Inbound Project Enquiries
                  </h3>

                  <div className="space-y-4">
                    {enquiriesList.map((enq) => (
                      <div key={enq.id} className="p-6 rounded-2xl bg-forest-950 border border-forest-800 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-forest-800 pb-3">
                          <div>
                            <h4 className="font-bold text-sm text-sand-50">{enq.name} ({enq.organization})</h4>
                            <p className="text-xs text-sand-200/60">{enq.email} • {enq.phone}</p>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-forest-300 font-bold uppercase">STATUS:</span>
                            <select
                              value={enq.status}
                              onChange={(e) => updateEnquiryStatus(enq.id!, e.target.value)}
                              className="text-xs bg-forest-900 border border-forest-700 rounded-lg p-1.5 text-sand-50"
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-sand-200/80">
                          <p><strong>Sector:</strong> <span className="text-harvest-400">{enq.sector}</span></p>
                          <p><strong>Location:</strong> {enq.location}</p>
                          <p><strong>Outlay:</strong> {enq.budget} ({enq.timeline})</p>
                        </div>

                        <p className="text-xs text-sand-100 bg-forest-900/40 p-3 rounded-xl border border-forest-800">
                          "{enq.problem_statement}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects List View */}
              {activeTab === "projects" && (
                <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                      Published Case Studies
                    </h3>
                    <button onClick={() => alert("Project creation form ready.")} className="flex items-center gap-1 px-4 py-2 rounded-xl bg-forest-800 text-xs font-bold text-harvest-400">
                      <FolderPlus className="w-4 h-4" />
                      <span>Add New Project</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {FEATURED_PROJECTS.map((proj) => (
                      <div key={proj.id} className="p-4 rounded-2xl bg-forest-950 border border-forest-800 flex items-center justify-between text-xs">
                        <div>
                          <h4 className="font-bold text-sand-50">{proj.title}</h4>
                          <span className="text-sand-200/60">{proj.sector} • {proj.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 rounded-lg bg-forest-900 text-sand-200 hover:text-harvest-400"><Edit className="w-4 h-4" /></button>
                          <button className="p-2 rounded-lg bg-forest-900 text-sand-200 hover:text-rose-400"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles View */}
              {activeTab === "articles" && (
                <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase">
                    Knowledge Hub Articles
                  </h3>
                  <div className="space-y-3">
                    {ARTICLES.map((art) => (
                      <div key={art.id} className="p-4 rounded-2xl bg-forest-950 border border-forest-800 flex items-center justify-between text-xs">
                        <div>
                          <h4 className="font-bold text-sand-50">{art.title}</h4>
                          <span className="text-harvest-400">{art.category} • {art.read_time}</span>
                        </div>
                        <button className="p-2 rounded-lg bg-forest-900 text-sand-200 hover:text-harvest-400"><Edit className="w-4 h-4" /></button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
