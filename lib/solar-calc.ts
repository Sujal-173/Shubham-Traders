import { calculatorDefaults } from "@/lib/content";

export interface SolarEstimate {
  kw: number;
  cost: number;
  subsidy: number;
  annualSavings: number;
  monthlySavings: number;
  payback: number;
  co2: number;
}

export function computeSolarEstimate(
  bill: number,
  propertyType: string,
  defaults = calculatorDefaults
): SolarEstimate {
  const monthlyUnits = bill / defaults.tariff;
  const kw = Math.max(1, Math.ceil((monthlyUnits * 12) / defaults.annualGenerationPerKw));
  const cost = kw * defaults.costPerKw;
  const subsidy = propertyType === "Residential" ? Math.min(kw * defaults.subsidyPerKw, 78000) : 0;
  const annualSavings = Math.round(Math.min(bill * 12, kw * defaults.annualGenerationPerKw * defaults.tariff));
  const netCost = cost - subsidy;
  const payback = Math.max(1, Math.round((netCost / annualSavings) * 10) / 10);
  return {
    kw,
    cost,
    subsidy,
    annualSavings,
    monthlySavings: Math.round(annualSavings / 12),
    payback,
    co2: Math.round(kw * 1.2 * 10) / 10,
  };
}
