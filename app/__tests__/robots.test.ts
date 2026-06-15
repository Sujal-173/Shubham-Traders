import { describe, it, expect } from "vitest";
import robots from "@/app/robots";
import { siteUrl } from "@/lib/utils";

describe("robots()", () => {
  const config = robots();

  it("allows all user agents", () => {
    const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
    const allAgentRule = rules.find((r) => r.userAgent === "*");
    expect(allAgentRule).toBeDefined();
    expect(allAgentRule?.allow).toBe("/");
  });

  it("includes sitemap URL", () => {
    expect(config.sitemap).toBe(`${siteUrl}/sitemap.xml`);
  });
});
