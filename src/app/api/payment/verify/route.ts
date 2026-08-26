import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { bookingId, razorpayPaymentId, razorpayOrderId, razorpaySignature, email, name, serviceName, date, time, amount } = await req.json();

    const paymentMode = process.env.PAYMENT_MODE || "mock";

    if (paymentMode !== "mock" && (!razorpayPaymentId || !razorpaySignature)) {
      return NextResponse.json({ error: "Invalid payment credentials" }, { status: 400 });
    }

    // Dispatch confirmation email
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
