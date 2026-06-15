import { describe, it, expect } from "vitest";
import { computeSolarEstimate } from "@/lib/solar-calc";
import { calculatorDefaults } from "@/lib/content";

const defaults = calculatorDefaults;

describe("computeSolarEstimate", () => {
  it("returns expected fields", () => {
    const result = computeSolarEstimate(5000, "Residential");
    expect(result).toHaveProperty("kw");
    expect(result).toHaveProperty("cost");
    expect(result).toHaveProperty("subsidy");
    expect(result).toHaveProperty("annualSavings");
    expect(result).toHaveProperty("monthlySavings");
    expect(result).toHaveProperty("payback");
    expect(result).toHaveProperty("co2");
  });

  it("computes kw correctly for Rs 5000 bill", () => {
    const monthlyUnits = 5000 / defaults.tariff; // 625
    const expectedKw = Math.max(1, Math.ceil((monthlyUnits * 12) / defaults.annualGenerationPerKw));
    const result = computeSolarEstimate(5000, "Residential");
    expect(result.kw).toBe(expectedKw);
  });

  it("residential gets subsidy, commercial does not", () => {
    const residential = computeSolarEstimate(5000, "Residential");
    const commercial = computeSolarEstimate(5000, "Commercial");
    expect(residential.subsidy).toBeGreaterThan(0);
    expect(commercial.subsidy).toBe(0);
  });

  it("residential subsidy is capped at Rs 78000", () => {
    const result = computeSolarEstimate(50000, "Residential");
    expect(result.subsidy).toBeLessThanOrEqual(78000);
  });

  it("kw is at least 1", () => {
    const result = computeSolarEstimate(1, "Residential");
    expect(result.kw).toBeGreaterThanOrEqual(1);
  });

  it("payback is at least 1 year", () => {
    const result = computeSolarEstimate(5000, "Residential");
    expect(result.payback).toBeGreaterThanOrEqual(1);
  });

  it("monthlySavings equals annualSavings / 12 (rounded)", () => {
    const result = computeSolarEstimate(5000, "Residential");
    expect(result.monthlySavings).toBe(Math.round(result.annualSavings / 12));
  });

  it("cost scales with kw", () => {
    const low = computeSolarEstimate(2000, "Commercial");
    const high = computeSolarEstimate(20000, "Commercial");
    expect(high.cost).toBeGreaterThan(low.cost);
  });

  it("co2 scales with kw", () => {
    const low = computeSolarEstimate(2000, "Residential");
    const high = computeSolarEstimate(20000, "Residential");
    expect(high.co2).toBeGreaterThanOrEqual(low.co2);
  });

  it("accepts custom defaults", () => {
    const custom = { tariff: 10, costPerKw: 50000, subsidyPerKw: 15000, annualGenerationPerKw: 1500 };
    const result = computeSolarEstimate(5000, "Residential", custom);
    const monthlyUnits = 5000 / 10; // 500
    const expectedKw = Math.max(1, Math.ceil((monthlyUnits * 12) / 1500)); // ceil(4) = 4
    expect(result.kw).toBe(expectedKw);
    expect(result.cost).toBe(expectedKw * 50000);
  });

  it("industrial property gets zero subsidy", () => {
    expect(computeSolarEstimate(5000, "Industrial").subsidy).toBe(0);
  });

  it("agricultural property gets zero subsidy", () => {
    expect(computeSolarEstimate(5000, "Agricultural").subsidy).toBe(0);
  });
});
