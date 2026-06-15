import { NextResponse } from "next/server";
import { checkRateLimit, sanitizeInput, validatePhone, validateEmail } from "@/lib/validation";

const rateStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (!checkRateLimit(rateStore, ip, RATE_LIMIT_WINDOW, RATE_LIMIT_MAX_REQUESTS)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const formData = await request.formData();
    const lead = Object.fromEntries(formData.entries());
    const required = ["name", "phone"];

    if (required.some((key) => !String(lead[key] || "").trim())) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    const sanitizedPhone = sanitizeInput(String(lead.phone || ""));
    const sanitizedEmail = lead.email ? sanitizeInput(String(lead.email)) : "";

    if (!validatePhone(sanitizedPhone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }

    if (sanitizedEmail && !validateEmail(sanitizedEmail)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to process lead submission" }, { status: 500 });
  }
}
