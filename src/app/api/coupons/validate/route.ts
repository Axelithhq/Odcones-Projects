import { NextResponse } from "next/server";

const VALID_COUPONS: Record<string, { code: string; type: "fixed" | "percentage"; value: number; desc: string }> = {
  "ODCONS1000": { code: "ODCONS1000", type: "fixed", value: 1000, desc: "₹1,000 Flat Discount" },
  "FARMER20": { code: "FARMER20", type: "percentage", value: 20, desc: "20% Off for Farmers & FPOs" },
  "LAUNCH500": { code: "LAUNCH500", type: "fixed", value: 500, desc: "₹500 Launch Offer" },
};

export async function POST(req: Request) {
  try {
    const { code, amount } = await req.json();

    if (!code) {
      return NextResponse.json({ error: "Coupon code required" }, { status: 400 });
    }

    const cleanCode = code.trim().toUpperCase();
    const coupon = VALID_COUPONS[cleanCode];

    if (!coupon) {
      return NextResponse.json({ error: "Invalid coupon code" }, { status: 404 });
    }

    let discount = 0;
    if (coupon.type === "fixed") {
      discount = coupon.value;
    } else {
      discount = Math.round((amount * coupon.value) / 100);
    }

    const finalAmount = Math.max(0, amount - discount);

    return NextResponse.json({
      success: true,
      coupon: {
        code: coupon.code,
        type: coupon.type,
        value: coupon.value,
        description: coupon.desc,
        discountAmount: discount,
        finalAmount: finalAmount,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to validate coupon" }, { status: 500 });
  }
}
