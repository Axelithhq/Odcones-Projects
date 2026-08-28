"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, Send, CheckCircle2, AlertCircle, FileText } from "lucide-react";

export default function AdminCampaignsPage() {
  const [subject, setSubject] = useState("");
  const [bodyHtml, setBodyHtml] = useState("");
  const [recipientsInput, setRecipientsInput] = useState("ramesh@agrifarm.in, priyanka@koraputhorti.org");
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleSendCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMsg("");

    const recipientEmails = recipientsInput
      .split(",")
      .map((e) => e.trim())
      .filter((e) => e.includes("@"));

    try {
      const res = await fetch("/api/campaigns/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, bodyHtml, recipientEmails }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMsg(`Campaign Dispatched Successfully! Sent to ${data.sentCount} recipients.`);
        setSubject("");
        setBodyHtml("");
      } else {
        setStatusMsg(`Failed to send campaign: ${data.error || "Unknown error"}`);
      }
    } catch {
      setStatusMsg("Campaign dispatch error occurred.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-theme-base text-sand-100 pt-20">
      <Header />

      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-forest-800 pb-6">
          <span className="text-xs font-bold text-harvest-400 uppercase tracking-widest font-display">
            RESEND EMAIL INFRASTRUCTURE
          </span>
          <h1 className="font-display font-extrabold text-3xl text-sand-50 uppercase">
            Resend Email Campaign Composer
          </h1>
        </div>

        <form onSubmit={handleSendCampaign} className="p-8 rounded-3xl bg-forest-900/40 border border-forest-700/50 space-y-6 shadow-2xl">
          <div className="space-y-1">
            <label className="text-xs font-bold text-harvest-400 uppercase">Recipients (Comma Separated)</label>
            <input
              type="text"
              value={recipientsInput}
              onChange={(e) => setRecipientsInput(e.target.value)}
              placeholder="e.g. client1@domain.com, client2@domain.com"
              className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-harvest-400 uppercase">Campaign Subject Line *</label>
            <input
              required
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. New Agriculture DPR & Government Scheme Policy Update"
              className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-harvest-400 uppercase">Campaign HTML Content *</label>
            <textarea
              required
              rows={8}
              value={bodyHtml}
              onChange={(e) => setBodyHtml(e.target.value)}
              placeholder="<p>Dear Valued Partner,</p><p>We are pleased to share our latest techno-economic feasibility insights...</p>"
              className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs font-mono focus:outline-none focus:border-harvest-400"
            />
          </div>

          {statusMsg && (
            <p className="text-xs font-bold text-emerald-400 p-3 rounded-xl bg-theme-base border border-forest-800">
              {statusMsg}
            </p>
          )}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSending}
              className="px-8 py-3.5 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-harvest-400 disabled:opacity-50 flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSending ? "Dispatching..." : "Dispatch Campaign Via Resend →"}</span>
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}
