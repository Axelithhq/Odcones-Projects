import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured } from "@/lib/email";

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { serviceId, serviceName, date, time, name, mobile, email, org, sector, location, investment, amount, couponCode } = body;

    if (!name || !email || !mobile || !date || !time) {
      return NextResponse.json({ error: "Required booking fields missing" }, { status: 400 });
    }

    const bookingId = `ODC-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`;
    const paymentMode = process.env.PAYMENT_MODE || "mock";
    const orderId = paymentMode === "mock" ? null : `order_${Date.now()}`;

    const bookingPayload = {
      booking_id: bookingId,
      service_id: serviceId,
      service_name: serviceName,
      date,
      time,
      name,
      email,
      mobile,
      org: org || null,
      sector: sector || null,
      location: location || null,
      investment: investment || null,
      amount,
      coupon_code: couponCode || null,
      status: paymentMode === "mock" ? "CONFIRMED" : "PAYMENT_PENDING",
      payment_mode: paymentMode,
      razorpay_order_id: orderId,
    };

    let dbId: number | null = null;
    const supabase = isSupabaseConfigured() ? getSupabaseAdmin() : null;

    if (supabase) {
      const { data: bookingData, error: bookingError } = await supabase
        .from("bookings")
        .insert(bookingPayload)
        .select("id")
        .single();

      if (bookingError) {
        console.error("[BOOKING CREATE] Supabase insert error:", bookingError.message);
      } else {
        dbId = bookingData?.id ?? null;
      }

      const { error: leadError } = await supabase.from("leads").insert({
        name,
        email,
        mobile,
        source: "booking",
        service: serviceName,
      });

      if (leadError) {
        console.error("[BOOKING CREATE] Lead insert error:", leadError.message);
      }
    }

    return NextResponse.json({
      success: true,
      booking: {
        id: dbId ?? bookingId,
        bookingId,
        serviceId,
        serviceName,
        date,
        time,
        name,
        email,
        mobile,
        org,
        sector,
        location,
        investment,
        amount,
        couponCode: couponCode || null,
        status: paymentMode === "mock" ? "CONFIRMED" : "PAYMENT_PENDING",
        paymentMode,
        razorpayOrderId: orderId,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}
