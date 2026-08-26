import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { serviceId, serviceName, date, time, name, mobile, email, org, sector, location, investment, amount, couponCode } = body;

    if (!name || !email || !mobile || !date || !time) {
      return NextResponse.json({ error: "Required booking fields missing" }, { status: 400 });
    }

    const bookingId = `ODC-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`;
    const paymentMode = process.env.PAYMENT_MODE || "mock";
    const orderId = `order_${Date.now()}`;

    // Return booking payload with mock or Razorpay order credentials
    return NextResponse.json({
      success: true,
      booking: {
        id: bookingId,
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
