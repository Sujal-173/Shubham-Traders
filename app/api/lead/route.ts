import { NextResponse } from "next/server";

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/<script[^>]*>.*?<\/script>/gi, '').slice(0, 500);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const formData = await request.formData();
    const lead = Object.fromEntries(formData.entries());
    const required = ["name", "phone"];

    if (required.some((key) => !String(lead[key] || "").trim())) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    // Sanitize and validate inputs
    const sanitizedPhone = sanitizeInput(String(lead.phone || ""));
    const sanitizedEmail = lead.email ? sanitizeInput(String(lead.email)) : "";

    if (!validatePhone(sanitizedPhone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }

    if (sanitizedEmail && !validateEmail(sanitizedEmail)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // Email sending is now handled client-side via EmailJS
    // This API route can be used for additional validation or logging if needed
    
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    const message =
      error instanceof SyntaxError
        ? "Malformed request body"
        : "Failed to process lead submission";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
