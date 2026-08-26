"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { useTranslation } from "@/lib/i18n";
import { Calendar, Clock, CheckCircle2, CreditCard, Tag, ArrowRight, ShieldCheck, FileText, Wrench, Sprout, Fish, Droplets } from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  name_or: string;
  price: number;
  duration: string;
  desc: string;
}

const CONSULTATION_SERVICES: ServiceOption[] = [
  {
    id: "dpr-prep",
    name: "Detailed Project Report (DPR) Consultancy",
    name_or: "ବିସ୍ତୃତ ପ୍ରକଳ୍ପ ରିପୋର୍ଟ (DPR) ପରାମର୍ଶ",
    price: 2500,
    duration: "45 Mins",
    desc: "Bankable DPR preparation for bank loans, World Bank, PMMSY, AIF, and MIDH schemes."
  },
  {
    id: "feasibility",
    name: "Techno-Economic Feasibility Audit",
    name_or: "ତ୍ରାକ୍ନୋ-ଇକୋନୋମିକ ସମ୍ଭାବ୍ୟତା ସର୍ବେକ୍ଷଣ",
    price: 3000,
    duration: "60 Mins",
    desc: "Land suitability, water quality parameters, financial DSCR modeling, and market assessment."
  },
  {
    id: "layout-3d",
    name: "2D & 3D Architectural Project Layout",
    name_or: "୨D ଓ ୩D ସିଭିଲ୍ ଓ ଇଞ୍ଜିନିୟରିଂ ଲେ-ଆଉଟ୍",
    price: 3500,
    duration: "60 Mins",
    desc: "Civil engineering layouts, machinery arrangements, biofloc tank placement, and PEB structural plans."
  },
  {
    id: "scheme-subsidies",
    name: "Government Scheme & Subsidy Advisory",
    name_or: "ସରକାରୀ ଯୋଜନା ଓ ସବସିଡି ପରାମର୍ଶ",
    price: 2000,
    duration: "45 Mins",
    desc: "Eligibility assessment and application documentation for State & Central subsidy schemes."
  }
];

const TIME_SLOTS = ["10:00 AM", "11:30 AM", "02:30 PM", "04:00 PM", "05:30 PM"];

export default function BookConsultationPage() {
  const { t, language } = useTranslation();
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<ServiceOption>(CONSULTATION_SERVICES[0]);
  const [selectedDate, setSelectedDate] = useState<string>("2026-09-01");
  const [selectedTime, setSelectedTime] = useState<string>(TIME_SLOTS[0]);

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

  const handleApplyCoupon = async () => {
    if (!couponCode) return;
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
        // Execute Payment Verification API
        const payRes = await fetch("/api/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookingId: data.booking.id,
            email,
            name,
            serviceName: selectedService.name,
            date: selectedDate,
            time: selectedTime,
            amount: finalAmount
          })
        });
        const payData = await payRes.json();
        setBookingConfirmed({ ...data.booking, status: "CONFIRMED" });
        setStep(4);
      }
    } catch (err) {
      alert("Error initiating booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor pt-20">
      <CustomCursor />
      <Header />

      <section className="py-16 bg-forest-950 border-b border-forest-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>EXECUTIVE CONSULTATION BOOKING</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 uppercase tracking-tight">
            {language === "or" ? "ବୈଷୟିକ ପରାମର୍ଶ ବୁକ୍ କରନ୍ତୁ" : "Book A Technical Consultation"}
          </h1>

          <p className="text-sand-200/80 text-sm sm:text-base max-w-2xl font-light">
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
                    ? "bg-harvest-500 text-forest-950"
                    : step > s.num
                    ? "bg-forest-800 text-harvest-400"
                    : "bg-forest-900/40 text-sand-200/60"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CONSULTATION_SERVICES.map((srv) => {
                const isSelected = selectedService.id === srv.id;
                return (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedService(srv)}
                    className={`p-6 rounded-3xl border transition-all cursor-pointer space-y-3 ${
                      isSelected
                        ? "bg-forest-900/90 border-harvest-400 shadow-2xl scale-[1.02]"
                        : "bg-forest-900/40 border-forest-800 hover:border-forest-700"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-display font-bold text-lg text-sand-50">
                        {language === "or" ? srv.name_or : srv.name}
                      </h3>
                      <span className="px-2.5 py-1 rounded-full bg-forest-950 border border-forest-700 text-xs font-mono font-bold text-harvest-400">
                        ₹{srv.price}
                      </span>
                    </div>

                    <p className="text-xs text-sand-200/80 leading-relaxed font-light">{srv.desc}</p>

                    <div className="flex justify-between items-center text-[11px] text-sand-200/60 pt-2 border-t border-forest-800/60">
                      <span>Duration: {srv.duration}</span>
                      <span className="text-harvest-400 font-bold">Select Service →</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setStep(2)}
                className="px-8 py-3.5 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-harvest-400"
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
                <label className="text-xs font-bold text-harvest-400 uppercase">Preferred Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full max-w-xs px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-harvest-400 uppercase">Available Time Slots</label>
                <div className="flex flex-wrap gap-3">
                  {TIME_SLOTS.map((tSlot) => (
                    <button
                      key={tSlot}
                      onClick={() => setSelectedTime(tSlot)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedTime === tSlot
                          ? "bg-harvest-500 text-forest-950 border-harvest-400 shadow-lg"
                          : "bg-forest-950 text-sand-200/80 border-forest-800 hover:border-forest-600"
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
                className="px-6 py-3 rounded-full bg-forest-900 border border-forest-700 text-xs font-bold text-sand-200"
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
                    className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
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
                    className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
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
                    className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Organization / FPO</label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="Company or Farmer Cooperative"
                    className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Project Sector</label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
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
                    className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
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
                    className="w-full px-4 py-2 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 text-xs font-mono uppercase focus:outline-none"
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
                className="px-6 py-3 rounded-full bg-forest-900 border border-forest-700 text-xs font-bold text-sand-200"
              >
                ← Back
              </button>
              <button
                disabled={isSubmitting || !name || !email || !mobile}
                onClick={handleCreateBooking}
                className="px-8 py-3.5 rounded-full bg-harvest-500 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-harvest-400 disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : `Pay ₹${couponApplied ? couponApplied.finalAmount : selectedService.price} & Confirm →`}
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

            <div className="max-w-md mx-auto p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-2 text-xs text-sand-200/80 text-left font-mono">
              <p><strong>Client Name:</strong> {bookingConfirmed.name}</p>
              <p><strong>Service:</strong> {bookingConfirmed.serviceName}</p>
              <p><strong>Scheduled Slot:</strong> {bookingConfirmed.date} at {bookingConfirmed.time}</p>
              <p><strong>Amount Paid:</strong> ₹{bookingConfirmed.amount}</p>
            </div>

            <p className="text-xs text-sand-200/70 max-w-md mx-auto">
              A confirmation email has been dispatched to <strong>{bookingConfirmed.email}</strong>. Our technical engineering team will connect with you at your scheduled slot.
            </p>

            <button
              onClick={() => (window.location.href = "/")}
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
