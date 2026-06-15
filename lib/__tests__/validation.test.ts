import { describe, it, expect, vi, beforeEach } from "vitest";
import { sanitizeInput, validatePhone, validateEmail, checkRateLimit } from "@/lib/validation";

describe("sanitizeInput", () => {
  it("trims whitespace", () => {
    expect(sanitizeInput("  hello  ")).toBe("hello");
  });

  it("strips script tags", () => {
    expect(sanitizeInput('<script>alert("xss")</script>hello')).toBe("hello");
  });

  it("strips script tags case-insensitively", () => {
    expect(sanitizeInput('<SCRIPT>bad</SCRIPT>ok')).toBe("ok");
  });

  it("truncates to 500 characters", () => {
    const long = "a".repeat(600);
    expect(sanitizeInput(long)).toHaveLength(500);
  });

  it("handles empty string", () => {
    expect(sanitizeInput("")).toBe("");
  });
});

describe("validatePhone", () => {
  it("accepts valid Indian mobile number", () => {
    expect(validatePhone("+919074103184")).toBe(true);
  });

  it("accepts number with spaces", () => {
    expect(validatePhone("+91 90741 03184")).toBe(true);
  });

  it("accepts plain digits", () => {
    expect(validatePhone("9074103184")).toBe(true);
  });

  it("accepts number with parentheses and dashes", () => {
    expect(validatePhone("(91)-9074103184")).toBe(true);
  });

  it("rejects empty string", () => {
    expect(validatePhone("")).toBe(false);
  });

  it("rejects letters", () => {
    expect(validatePhone("abcdefghij")).toBe(false);
  });

  it("rejects too-short input", () => {
    expect(validatePhone("12")).toBe(false);
  });
});

describe("validateEmail", () => {
  it("accepts valid email", () => {
    expect(validateEmail("user@example.com")).toBe(true);
  });

  it("accepts email with subdomain", () => {
    expect(validateEmail("test@mail.example.co.in")).toBe(true);
  });

  it("rejects missing @", () => {
    expect(validateEmail("userexample.com")).toBe(false);
  });

  it("rejects missing domain", () => {
    expect(validateEmail("user@")).toBe(false);
  });

  it("rejects missing TLD", () => {
    expect(validateEmail("user@example")).toBe(false);
  });

  it("rejects empty string", () => {
    expect(validateEmail("")).toBe(false);
  });

  it("rejects spaces", () => {
    expect(validateEmail("user @example.com")).toBe(false);
  });
});

describe("checkRateLimit", () => {
  let store: Map<string, { count: number; resetTime: number }>;

  beforeEach(() => {
    store = new Map();
  });

  it("allows first request", () => {
    expect(checkRateLimit(store, "1.2.3.4", 60_000, 5)).toBe(true);
    expect(store.get("1.2.3.4")?.count).toBe(1);
  });

  it("allows requests up to the limit", () => {
    for (let i = 0; i < 5; i++) {
      expect(checkRateLimit(store, "1.2.3.4", 60_000, 5)).toBe(true);
    }
  });

  it("blocks requests beyond the limit", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit(store, "1.2.3.4", 60_000, 5);
    }
    expect(checkRateLimit(store, "1.2.3.4", 60_000, 5)).toBe(false);
  });

  it("tracks different IPs independently", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit(store, "1.2.3.4", 60_000, 5);
    }
    expect(checkRateLimit(store, "1.2.3.4", 60_000, 5)).toBe(false);
    expect(checkRateLimit(store, "5.6.7.8", 60_000, 5)).toBe(true);
  });

  it("resets after window expires", () => {
    vi.useFakeTimers();
    for (let i = 0; i < 5; i++) {
      checkRateLimit(store, "1.2.3.4", 60_000, 5);
    }
    expect(checkRateLimit(store, "1.2.3.4", 60_000, 5)).toBe(false);

    vi.advanceTimersByTime(61_000);
    expect(checkRateLimit(store, "1.2.3.4", 60_000, 5)).toBe(true);
    vi.useRealTimers();
  });
});
