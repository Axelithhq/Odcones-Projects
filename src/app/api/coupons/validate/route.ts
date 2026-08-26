import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured } from "@/lib/email";

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

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

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      if (supabase) {
        const { data: coupon, error } = await supabase
          .from("coupons")
          .select("*")
          .eq("code", cleanCode)
          .eq("active", true)
          .single();

        if (error || !coupon) {
          return NextResponse.json({ error: "Invalid coupon code" }, { status: 404 });
        }

        if (coupon.expires_at && new Date(coupon.expires_at) < new Date()) {
          return NextResponse.json({ error: "Coupon has expired" }, { status: 404 });
        }

        if (coupon.max_uses != null && coupon.used_count >= coupon.max_uses) {
          return NextResponse.json({ error: "Coupon usage limit reached" }, { status: 404 });
        }

        if (coupon.min_amount != null && amount < coupon.min_amount) {
          return NextResponse.json({
            error: `Minimum amount of ₹${coupon.min_amount} required to use this coupon`,
          }, { status: 400 });
        }

        let discount = 0;
        if (coupon.type === "fixed") {
          discount = coupon.value;
        } else {
          discount = Math.round((amount * coupon.value) / 100);
        }

        if (coupon.max_discount != null && discount > coupon.max_discount) {
          discount = coupon.max_discount;
        }

        const finalAmount = Math.max(0, amount - discount);

        return NextResponse.json({
          success: true,
          coupon: {
            code: coupon.code,
            type: coupon.type,
            value: coupon.value,
            description: coupon.description || coupon.desc || "",
            discountAmount: discount,
            finalAmount,
          },
        });
      }
    }

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
