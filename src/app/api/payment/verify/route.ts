import { NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
import { sendEmail, isSupabaseConfigured } from "@/lib/email";

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

export async function POST(req: Request) {
  try {
    const { bookingId, razorpayPaymentId, razorpayOrderId, razorpaySignature, email, name, serviceName, date, time, amount } = await req.json();

    const paymentMode = process.env.PAYMENT_MODE || "mock";

    if (paymentMode !== "mock") {
      if (!razorpayPaymentId || !razorpayOrderId || !razorpaySignature) {
        return NextResponse.json({ error: "Invalid payment credentials" }, { status: 400 });
      }

      const secret = process.env.RAZORPAY_KEY_SECRET;
      if (!secret) {
        console.error("[PAYMENT VERIFY] RAZORPAY_KEY_SECRET not set");
        return NextResponse.json({ error: "Payment verification configuration error" }, { status: 500 });
      }

      const expectedSignature = crypto
        .createHmac("sha256", secret)
        .update(`${razorpayOrderId}|${razorpayPaymentId}`)
        .digest("hex");

      if (expectedSignature !== razorpaySignature) {
        return NextResponse.json({ error: "Payment signature verification failed" }, { status: 400 });
      }
    }

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      if (supabase) {
        const { error: updateError } = await supabase
          .from("bookings")
          .update({ status: "CONFIRMED" })
          .eq("booking_id", bookingId);

        if (updateError) {
          console.error("[PAYMENT VERIFY] Booking update error:", updateError.message);
        }

        const { error: paymentError } = await supabase.from("payments").insert({
          booking_id: bookingId,
          razorpay_order_id: razorpayOrderId || null,
          razorpay_payment_id: razorpayPaymentId || null,
          razorpay_signature: razorpaySignature || null,
          amount,
          status: "CAPTURED",
          payment_mode: paymentMode,
        });

        if (paymentError) {
          console.error("[PAYMENT VERIFY] Payment insert error:", paymentError.message);
        }
      }
    }

    await sendEmail({
      to: email,
      subject: `Consultation Confirmed: ${bookingId} - ODCONS PROJECTS`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1A251E;">
          <h2 style="color: #40916C;">ODCONS PROJECTS — Consultation Confirmed</h2>
          <p>Dear <strong>${name}</strong>,</p>
          <p>Your technical consultation has been successfully booked and confirmed.</p>
          <hr/>
          <p><strong>Booking ID:</strong> ${bookingId}</p>
          <p><strong>Service:</strong> ${serviceName}</p>
          <p><strong>Date & Time:</strong> ${date} at ${time}</p>
          <p><strong>Amount Paid:</strong> ₹${amount}</p>
          <hr/>
          <p>Our senior project consultancy team will connect with you at your scheduled slot.</p>
          <p>Warm regards,<br/><strong>Anshuman Mohapatra — Founder</strong><br/>ODCONS PROJECTS</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      status: "CONFIRMED",
      bookingId,
      message: "Payment verified & confirmation email sent successfully.",
    });
  } catch (error) {
    return NextResponse.json({ error: "Payment verification failed" }, { status: 500 });
  }
}
