import { describe, it, expect } from "vitest";
import { cn, absoluteUrl, siteUrl } from "@/lib/utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("handles conditional classes via clsx syntax", () => {
    expect(cn("base", false && "hidden", "extra")).toBe("base extra");
  });

  it("deduplicates conflicting Tailwind classes", () => {
    expect(cn("px-4", "px-6")).toBe("px-6");
  });

  it("returns empty string for no inputs", () => {
    expect(cn()).toBe("");
  });

  it("handles undefined and null gracefully", () => {
    expect(cn("a", undefined, null, "b")).toBe("a b");
  });
});

describe("absoluteUrl", () => {
  it("returns site URL with given path", () => {
    expect(absoluteUrl("/about")).toBe(`${siteUrl}/about`);
  });

  it("returns site URL alone when called with no argument", () => {
    expect(absoluteUrl()).toBe(siteUrl);
  });

  it("returns site URL alone when called with empty string", () => {
    expect(absoluteUrl("")).toBe(siteUrl);
  });
});

describe("siteUrl", () => {
  it("is a valid URL string", () => {
    expect(() => new URL(siteUrl)).not.toThrow();
  });
});
