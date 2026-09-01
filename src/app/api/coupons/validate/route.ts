import { NextResponse } from "next/server";
import { readCollection, INITIAL_COUPONS, CouponDB } from "@/lib/serverDb";

export async function POST(req: Request) {
  try {
    const { code, amount } = await req.json();

    if (!code) {
      return NextResponse.json({ error: "Coupon code required" }, { status: 400 });
    }

    const cleanCode = code.trim().toUpperCase();
    const coupons = readCollection<CouponDB[]>("coupons", INITIAL_COUPONS);

    const coupon = coupons.find((c) => c.code.toUpperCase() === cleanCode && c.active);

    if (!coupon) {
      return NextResponse.json({ error: "Invalid or inactive coupon code" }, { status: 404 });
    }

    if (coupon.minAmount && amount < coupon.minAmount) {
      return NextResponse.json({
        error: `Minimum order amount of ₹${coupon.minAmount} required for coupon ${coupon.code}`
      }, { status: 400 });
    }

    let discountAmount = 0;
    if (coupon.type === "fixed") {
      discountAmount = coupon.value;
    } else {
      discountAmount = Math.round((amount * coupon.value) / 100);
    }

    const finalAmount = Math.max(0, amount - discountAmount);

    return NextResponse.json({
      success: true,
      coupon: {
        code: coupon.code,
        type: coupon.type,
        value: coupon.value,
        description: coupon.desc,
        discountAmount,
        finalAmount
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to validate coupon" }, { status: 500 });
  }
}
