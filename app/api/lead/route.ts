import { NextResponse } from "next/server";

/* ─── Rate limiting (in-memory; use Redis in production) ─── */

const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_MAX_ENTRIES = 10_000;

function pruneRateLimitMap() {
  if (rateLimit.size <= RATE_LIMIT_MAX_ENTRIES) return;
  const now = Date.now();
  for (const [key, record] of rateLimit) {
    if (now > record.resetTime) rateLimit.delete(key);
  }
}

function checkRateLimit(ip: string): boolean {
  pruneRateLimitMap();
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

/* ─── Input sanitization (HTML-entity encoding) ─── */

function sanitizeInput(input: string): string {
  return input
    .trim()
    .slice(0, 500)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

/* ─── Validators ─── */

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* ─── Origin validation ─── */

const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_SITE_URL,
  "https://shubham-traders.vercel.app",
  "http://localhost:3000",
].filter(Boolean) as string[];

function isOriginAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  // Allow same-origin requests (no Origin header) in non-browser contexts
  if (!origin && !referer) return true;

  if (origin && ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed))) {
    return true;
  }

  if (referer && ALLOWED_ORIGINS.some((allowed) => referer.startsWith(allowed))) {
    return true;
  }

  return false;
}

/* ─── Route handler ─── */

export async function POST(request: Request) {
  try {
    // CSRF protection: verify request origin
    if (!isOriginAllowed(request)) {
      return NextResponse.json(
        { error: "Forbidden: invalid request origin." },
        { status: 403 }
      );
    }

    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const formData = await request.formData();
    const lead = Object.fromEntries(formData.entries());
    const required = ["name", "phone"];

    if (required.some((key) => !String(lead[key] || "").trim())) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    // Sanitize and validate inputs
    const sanitizedPhone = sanitizeInput(String(lead.phone || ""));
    const sanitizedEmail = lead.email
      ? sanitizeInput(String(lead.email))
      : "";

    if (!validatePhone(sanitizedPhone)) {
      return NextResponse.json(
        { error: "Invalid phone number." },
        { status: 400 }
      );
    }

    if (sanitizedEmail && !validateEmail(sanitizedEmail)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Email sending is handled client-side via EmailJS.
    // This route provides server-side validation and rate limiting.

    return NextResponse.json({ ok: true });

  } catch {
    return NextResponse.json(
      { error: "Failed to process lead submission" },
      { status: 500 }
    );

  } catch (error) {
    console.error("Lead submission error:", error);
    const message =
      error instanceof SyntaxError
        ? "Malformed request body"
        : "Failed to process lead submission";
    return NextResponse.json({ error: message }, { status: 500 });
 main
  }
}
