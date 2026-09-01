"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
import { Calendar, Clock, CheckCircle2, Tag, ArrowRight, ShieldCheck, Sparkles, Loader2 } from "lucide-react";
import { getPathWithLocale } from "@/lib/i18n-config";
import type { Language } from "@/lib/i18n-config";

interface ServiceOption {
  id: string;
  name: string;
  name_or: string;
  price: number;
  duration: string;
  desc: string;
  desc_or?: string;
  timeSlots?: string[];
}

const DEFAULT_TIME_SLOTS = ["10:00 AM", "11:30 AM", "02:30 PM", "04:00 PM", "05:30 PM"];

export function BookConsultationClient({ lang }: { lang: Language }) {
  const { t, language } = useTranslation();
  const [step, setStep] = useState<number>(1);

  // Dynamic Consultation Services & Time Slots Loaded from Database API
  const [services, setServices] = useState<ServiceOption[]>([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("2026-09-02");
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [org, setOrg] = useState("");
  const [sector, setSector] = useState("Agriculture");
  const [location, setLocation] = useState("");
  const [investment, setInvestment] = useState("₹25 Lakhs - ₹50 Lakhs");

  // Coupon & Payment
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState<{ code: string; discountAmount: number; finalAmount: number } | null>(null);
  const [couponError, setCouponError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<any>(null);

  // Fetch Live Consultation Services from DB API
  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch("/api/admin/db?type=consultation_services");
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setServices(json.data);
          setSelectedService(json.data[0]);
          const slots = json.data[0].timeSlots || DEFAULT_TIME_SLOTS;
          setSelectedTime(slots[0] || DEFAULT_TIME_SLOTS[0]);
        }
      } catch (err) {
        console.error("Failed to load consultation services:", err);
      } finally {
        setIsLoadingServices(false);
      }
    }
    fetchServices();
  }, []);

  const handleSelectService = (srv: ServiceOption) => {
    setSelectedService(srv);
    const slots = srv.timeSlots || DEFAULT_TIME_SLOTS;
    setSelectedTime(slots[0] || DEFAULT_TIME_SLOTS[0]);
  };

  const availableSlots = selectedService?.timeSlots && selectedService.timeSlots.length > 0
    ? selectedService.timeSlots
    : DEFAULT_TIME_SLOTS;

  const handleApplyCoupon = async () => {
    if (!couponCode || !selectedService) return;
    setCouponError("");
    try {
      const res = await fetch("/api/coupons/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: couponCode, amount: selectedService.price })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setCouponApplied(data.coupon);
      } else {
        setCouponError(data.error || "Invalid coupon code");
      }
    } catch {
      setCouponError("Failed to apply coupon");
    }
  };

  const handleCreateBooking = async () => {
    if (!selectedService) return;
    setIsSubmitting(true);
    const finalAmount = couponApplied ? couponApplied.finalAmount : selectedService.price;

    try {
      const res = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: selectedService.id,
          serviceName: selectedService.name,
          date: selectedDate,
          time: selectedTime,
          name,
          email,
          mobile,
          org,
          sector,
          location,
          investment,
          amount: finalAmount,
          couponCode: couponApplied?.code
        })
      });

      const data = await res.json();
      if (data.success) {
        setBookingConfirmed(data.booking);
        setStep(4);
      }
    } catch (err) {
      alert("Error initiating booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-theme-base text-theme-text relative has-custom-cursor pt-20">
      <CustomCursor />
      <Header />

      <section className="py-16 bg-theme-base border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400 font-display">
            <Calendar className="w-3.5 h-3.5" />
            <span>EXECUTIVE CONSULTATION BOOKING</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 uppercase tracking-tight">
            {language === "or" ? "ବୈଷୟିକ ପରାମର୍ଶ ବୁକ୍ କରନ୍ତୁ" : "Book A Technical Consultation"}
          </h1>

          <p className="text-theme-text-muted text-sm sm:text-base max-w-2xl font-light">
            Schedule a 1-on-1 project planning session with Founder Anshuman Mohapatra & ODCONS engineering team.
          </p>

          {/* Stepper Indicator */}
          <div className="flex items-center gap-3 pt-4">
            {[
              { num: 1, label: "1. Select Service" },
              { num: 2, label: "2. Date & Time" },
              { num: 3, label: "3. Project Details" },
              { num: 4, label: "4. Confirmation" }
            ].map((s) => (
              <div
                key={s.num}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${
                  step === s.num
                    ? "bg-harvest-500 text-forest-950 shadow-lg"
                    : step > s.num
                    ? "bg-forest-800 text-harvest-400"
                    : "bg-forest-900/40 text-theme-text-muted"
                }`}
              >
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase">Step 1: Choose Consultation Service</h2>

            {isLoadingServices ? (
              <div className="py-12 text-center space-y-3">
                <Loader2 className="w-8 h-8 text-harvest-400 animate-spin mx-auto" />
                <p className="text-xs font-mono text-theme-text-muted">Loading live consultation services from database...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((srv) => {
                  const isSelected = selectedService?.id === srv.id;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => handleSelectService(srv)}
                      className={`p-6 rounded-3xl border transition-all cursor-pointer space-y-3 ${
                        isSelected
                          ? "bg-forest-900/90 border-harvest-400 shadow-2xl scale-[1.02]"
                          : "bg-forest-900/40 border-forest-800 hover:border-forest-700"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-display font-bold text-lg text-sand-50">
                          {language === "or" && srv.name_or ? srv.name_or : srv.name}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-theme-base border border-forest-700 text-xs font-mono font-extrabold text-harvest-400 shadow-inner">
                          ₹{srv.price}
                        </span>
                      </div>

                      <p className="text-xs text-theme-text-muted leading-relaxed font-light">
                        {language === "or" && srv.desc_or ? srv.desc_or : srv.desc}
                      </p>

                      <div className="flex justify-between items-center text-[11px] text-theme-text-muted pt-2 border-t border-forest-800/60">
                        <span>Duration: {srv.duration}</span>
                        {isSelected && (
                          <span className="text-harvest-400 font-bold font-mono flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-harvest-400" />
                            <span>SELECTED</span>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="flex justify-end pt-4">
              <button
                disabled={!selectedService}
                onClick={() => setStep(2)}
                className="px-8 py-3.5 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-harvest-400 disabled:opacity-50"
              >
                Proceed to Schedule →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase">Step 2: Select Date & Time Slot</h2>

            <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-harvest-400 uppercase">Preferred Consultation Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full max-w-xs px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-harvest-400 uppercase">Available Time Slots for {selectedService?.name}</label>
                <div className="flex flex-wrap gap-3">
                  {availableSlots.map((tSlot) => (
                    <button
                      key={tSlot}
                      onClick={() => setSelectedTime(tSlot)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedTime === tSlot
                          ? "bg-harvest-500 text-forest-950 border-harvest-400 shadow-lg"
                          : "bg-theme-base text-theme-text-muted border-forest-800 hover:border-forest-600"
                      }`}
                    >
                      {tSlot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 rounded-full bg-forest-900 border border-forest-700 text-xs font-bold text-theme-text-muted"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-8 py-3.5 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-harvest-400"
              >
                Enter Project Details →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase">Step 3: Project Requirements & Coupon</h2>

            <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Anshuman Mohapatra"
                    className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Mobile Number *</label>
                  <input
                    required
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Organization / FPO</label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="Company or Farmer Cooperative"
                    className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Project Sector</label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                  >
                    <option value="Agriculture">Agriculture & Processing</option>
                    <option value="Fisheries">Fisheries & Aquaculture</option>
                    <option value="Horticulture">Horticulture & Greenhouse</option>
                    <option value="Livestock">Dairy & Animal Husbandry</option>
                    <option value="Water">Water & Soil Conservation</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Estimated Investment</label>
                  <select
                    value={investment}
                    onChange={(e) => setInvestment(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                  >
                    <option value="₹10 Lakhs - ₹25 Lakhs">₹10 Lakhs - ₹25 Lakhs</option>
                    <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                    <option value="₹50 Lakhs - ₹2 Crores">₹50 Lakhs - ₹2 Crores</option>
                    <option value="₹2 Crores+">₹2 Crores+</option>
                  </select>
                </div>
              </div>

              {/* Coupon Engine */}
              <div className="pt-4 border-t border-forest-800 space-y-2">
                <label className="text-xs font-bold text-harvest-400 uppercase">Have a Coupon Code?</label>
                <div className="flex gap-2 max-w-sm">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter e.g. ODCONS1000"
                    className="w-full px-4 py-2 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs font-mono uppercase focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 rounded-xl bg-forest-800 border border-forest-600 text-xs font-bold text-harvest-400 hover:bg-forest-700"
                  >
                    Apply
                  </button>
                </div>
                {couponApplied && (
                  <p className="text-xs font-bold text-emerald-400">
                    Coupon "{couponApplied.code}" Applied! Discount: ₹{couponApplied.discountAmount}
                  </p>
                )}
                {couponError && <p className="text-xs text-rose-400 font-bold">{couponError}</p>}
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-full bg-forest-900 border border-forest-700 text-xs font-bold text-theme-text-muted"
              >
                ← Back
              </button>
              <button
                disabled={isSubmitting || !name || !email || !mobile}
                onClick={handleCreateBooking}
                className="px-8 py-3.5 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-harvest-400 disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : `Pay ₹${couponApplied ? couponApplied.finalAmount : selectedService?.price} & Confirm →`}
              </button>
            </div>
          </div>
        )}

        {step === 4 && bookingConfirmed && (
          <div className="p-8 rounded-3xl bg-forest-900/60 border border-emerald-500/50 text-center space-y-6 shadow-2xl">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
            <div className="space-y-2">
              <span className="text-xs font-bold font-mono text-harvest-400 uppercase tracking-widest">
                BOOKING CONFIRMED • ID: {bookingConfirmed.id}
              </span>
              <h2 className="font-display font-extrabold text-3xl text-sand-50 uppercase">
                Consultation Successfully Scheduled!
              </h2>
            </div>

            <div className="max-w-md mx-auto p-4 rounded-2xl bg-theme-base border border-forest-800 space-y-2 text-xs text-theme-text-muted text-left font-mono">
              <p><strong>Client Name:</strong> {bookingConfirmed.name}</p>
              <p><strong>Service:</strong> {bookingConfirmed.serviceName}</p>
              <p><strong>Scheduled Slot:</strong> {bookingConfirmed.date} at {bookingConfirmed.time}</p>
              <p><strong>Amount Paid:</strong> ₹{bookingConfirmed.amount}</p>
            </div>

            <p className="text-xs text-theme-text-muted max-w-md mx-auto">
              A confirmation email has been dispatched to <strong>{bookingConfirmed.email}</strong>. Our technical engineering team will connect with you at your scheduled slot.
            </p>

            <button
              onClick={() => (window.location.href = getPathWithLocale("/", lang))}
              className="px-8 py-3.5 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl"
            >
              Return to Homepage
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
