import { describe, it, expect } from "vitest";
import {
  brand,
  navItems,
  metrics,
  trustBar,
  services,
  projects,
  reasons,
  subsidyPages,
  testimonials,
  faqs,
  blogPosts,
  calculatorDefaults,
  images,
} from "@/lib/content";

describe("brand", () => {
  it("has required fields", () => {
    expect(brand.name).toBeTruthy();
    expect(brand.tagline).toBeTruthy();
    expect(brand.location).toBeTruthy();
    expect(brand.phones.length).toBeGreaterThanOrEqual(1);
    expect(brand.email).toMatch(/@/);
    expect(brand.whatsapp).toBeTruthy();
  });
});

describe("navItems", () => {
  it("contains at least Home and Contact", () => {
    const labels = navItems.map((n) => n.label);
    expect(labels).toContain("Home");
    expect(labels).toContain("Contact");
  });

  it("every item has label and href", () => {
    navItems.forEach((item) => {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^\//);
    });
  });
});

describe("services", () => {
  it("has at least one service", () => {
    expect(services.length).toBeGreaterThanOrEqual(1);
  });

  it("each service has required fields", () => {
    services.forEach((s) => {
      expect(s.title).toBeTruthy();
      expect(s.slug).toBeTruthy();
      expect(s.summary).toBeTruthy();
      expect(s.points.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("slugs are unique", () => {
    const slugs = services.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("projects", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThanOrEqual(1);
  });

  it("each project has required fields", () => {
    projects.forEach((p) => {
      expect(p.title).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.capacity).toBeTruthy();
      expect(p.type).toBeTruthy();
    });
  });

  it("slugs are unique", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("subsidyPages", () => {
  it("has at least one page", () => {
    expect(subsidyPages.length).toBeGreaterThanOrEqual(1);
  });

  it("each page has slug and eligibility", () => {
    subsidyPages.forEach((p) => {
      expect(p.slug).toBeTruthy();
      expect(p.eligibility.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("slugs are unique", () => {
    const slugs = subsidyPages.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("blogPosts", () => {
  it("each post has slug, title, and category", () => {
    blogPosts.forEach((p) => {
      expect(p.slug).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.category).toBeTruthy();
    });
  });

  it("slugs are unique", () => {
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("calculatorDefaults", () => {
  it("has positive numeric values", () => {
    expect(calculatorDefaults.tariff).toBeGreaterThan(0);
    expect(calculatorDefaults.costPerKw).toBeGreaterThan(0);
    expect(calculatorDefaults.subsidyPerKw).toBeGreaterThan(0);
    expect(calculatorDefaults.annualGenerationPerKw).toBeGreaterThan(0);
  });
});

describe("metrics", () => {
  it("has at least one metric", () => {
    expect(metrics.length).toBeGreaterThanOrEqual(1);
  });
});

describe("trustBar", () => {
  it("has at least one entry", () => {
    expect(trustBar.length).toBeGreaterThanOrEqual(1);
  });
});

describe("reasons", () => {
  it("each reason has title and icon", () => {
    reasons.forEach((r) => {
      expect(r.title).toBeTruthy();
      expect(r.icon).toBeDefined();
    });
  });
});

describe("testimonials", () => {
  it("each testimonial has name and quote", () => {
    testimonials.forEach((t) => {
      expect(t.name).toBeTruthy();
      expect(t.quote).toBeTruthy();
    });
  });
});

describe("faqs", () => {
  it("each FAQ has question and answer", () => {
    faqs.forEach((f) => {
      expect(f.q).toBeTruthy();
      expect(f.a).toBeTruthy();
    });
  });
});

describe("images", () => {
  it("all image URLs are valid https URLs", () => {
    Object.values(images).forEach((url) => {
      expect(url).toMatch(/^https:\/\//);
    });
  });
});
