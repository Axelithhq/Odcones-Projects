"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users, Filter, Search, CheckCircle, Clock, ArrowRight, ShieldCheck, Mail, Phone } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  sector: string;
  investment: string;
  status: "NEW" | "CONTACTED" | "QUALIFIED" | "IN_PROGRESS" | "CONVERTED" | "CLOSED";
  date: string;
}

const DEMO_LEADS: Lead[] = [
  { id: "LEAD-101", name: "Ramesh Chandra Mohanty", email: "ramesh@agrifarm.in", phone: "+91 94370 12345", sector: "Fisheries & Biofloc", investment: "₹50 Lakhs - ₹2 Crores", status: "NEW", date: "2026-08-25" },
  { id: "LEAD-102", name: "Priyanka Patnaik", email: "priyanka@koraputhorti.org", phone: "+91 98610 67890", sector: "Horticulture Greenhouse", investment: "₹25 Lakhs - ₹50 Lakhs", status: "QUALIFIED", date: "2026-08-24" },
  { id: "LEAD-103", name: "Debashish Behera", email: "debashish@bhadrakfish.com", phone: "+91 99371 45678", sector: "Aquaculture Hatchery", investment: "₹2 Crores+", status: "IN_PROGRESS", date: "2026-08-22" },
];

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(DEMO_LEADS);
  const [filterStatus, setFilterStatus] = useState<string>("ALL");

  const updateLeadStatus = (id: string, newStatus: Lead["status"]) => {
    setLeads(leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
  };

  const filteredLeads = filterStatus === "ALL" ? leads : leads.filter((l) => l.status === filterStatus);

  return (
    <main className="min-h-screen bg-theme-base text-theme-text pt-20">
      <Header />

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-forest-800 pb-6">
          <div>
            <span className="text-xs font-bold text-harvest-400 uppercase tracking-widest font-display">
              ADMIN CRM PORTAL
            </span>
            <h1 className="font-display font-extrabold text-3xl text-sand-50 uppercase">
              Project Lead Pipeline & CRM
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-forest-300">Total Leads: {leads.length}</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-forest-800/60">
          {["ALL", "NEW", "CONTACTED", "QUALIFIED", "IN_PROGRESS", "CONVERTED", "CLOSED"].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                filterStatus === st
                  ? "bg-harvest-500 text-forest-950"
                  : "bg-forest-900/60 text-theme-text-muted hover:text-sand-50"
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Leads Table */}
        <div className="rounded-3xl bg-forest-900/40 border border-forest-700/50 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-theme-base text-harvest-400 font-display uppercase tracking-wider border-b border-forest-800">
                <tr>
                  <th className="p-4">Lead ID</th>
                  <th className="p-4">Client Name</th>
                  <th className="p-4">Contact Info</th>
                  <th className="p-4">Sector & Investment</th>
                  <th className="p-4">CRM Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest-800/60">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-forest-900/60 transition-colors">
                    <td className="p-4 font-mono font-bold text-sand-50">{lead.id}</td>
                    <td className="p-4">
                      <strong className="block text-sand-50 font-display">{lead.name}</strong>
                      <span className="text-[10px] text-theme-text-muted">{lead.date}</span>
                    </td>
                    <td className="p-4 space-y-0.5 text-theme-text-muted">
                      <div>{lead.email}</div>
                      <div className="font-mono text-[11px]">{lead.phone}</div>
                    </td>
                    <td className="p-4">
                      <span className="font-bold text-harvest-400 block">{lead.sector}</span>
                      <span className="text-[10px] text-theme-text-muted">{lead.investment}</span>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-md bg-theme-base border border-forest-700 text-[10px] font-bold text-sand-50 font-mono">
                        {lead.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead["status"])}
                        className="px-2.5 py-1.5 rounded-lg bg-theme-base border border-forest-700 text-[11px] text-sand-50 focus:outline-none"
                      >
                        <option value="NEW">Set NEW</option>
                        <option value="CONTACTED">Set CONTACTED</option>
                        <option value="QUALIFIED">Set QUALIFIED</option>
                        <option value="IN_PROGRESS">Set IN_PROGRESS</option>
                        <option value="CONVERTED">Set CONVERTED</option>
                        <option value="CLOSED">Set CLOSED</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
