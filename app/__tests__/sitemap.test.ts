import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import { services, projects, subsidyPages, blogPosts } from "@/lib/content";
import { siteUrl } from "@/lib/utils";

describe("sitemap()", () => {
  const entries = sitemap();

  it("returns an array of entries", () => {
    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBeGreaterThan(0);
  });

  it("all URLs start with the site URL", () => {
    entries.forEach((entry) => {
      expect(entry.url).toMatch(new RegExp(`^${siteUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
    });
  });

  it("includes the homepage", () => {
    expect(entries.some((e) => e.url === siteUrl)).toBe(true);
  });

  it("homepage has priority 1", () => {
    const home = entries.find((e) => e.url === siteUrl);
    expect(home?.priority).toBe(1);
  });

  it("homepage changeFrequency is weekly", () => {
    const home = entries.find((e) => e.url === siteUrl);
    expect(home?.changeFrequency).toBe("weekly");
  });

  it("includes all service pages", () => {
    services.forEach((s) => {
      expect(entries.some((e) => e.url.includes(`/services/${s.slug}`))).toBe(true);
    });
  });

  it("includes all project pages", () => {
    projects.forEach((p) => {
      expect(entries.some((e) => e.url.includes(`/projects/${p.slug}`))).toBe(true);
    });
  });

  it("includes all subsidy pages", () => {
    subsidyPages.forEach((p) => {
      expect(entries.some((e) => e.url.includes(`/government-subsidies/${p.slug}`))).toBe(true);
    });
  });

  it("includes all blog posts", () => {
    blogPosts.forEach((p) => {
      expect(entries.some((e) => e.url.includes(`/blog/${p.slug}`))).toBe(true);
    });
  });

  it("every entry has lastModified date", () => {
    entries.forEach((e) => {
      expect(e.lastModified).toBeInstanceOf(Date);
    });
  });
});
