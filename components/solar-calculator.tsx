"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input, Label, Select } from "@/components/ui/field";
import { Button, LinkButton } from "@/components/ui/button";
import { calculatorDefaults } from "@/lib/content";

export function SolarCalculator() {
  const [bill, setBill] = useState(5000);
  const [propertyType, setPropertyType] = useState("Residential");
  const [city, setCity] = useState("Kasrawad");

  const result = useMemo(() => {
    const safeBill = Math.max(bill, 0);
    const monthlyUnits = safeBill / calculatorDefaults.tariff;
    const kw = Math.max(1, Math.ceil((monthlyUnits * 12) / calculatorDefaults.annualGenerationPerKw));
    const cost = kw * calculatorDefaults.costPerKw;
    const subsidy = propertyType === "Residential" ? Math.min(kw * calculatorDefaults.subsidyPerKw, 78000) : 0;
    const annualSavings = Math.round(Math.min(safeBill * 12, kw * calculatorDefaults.annualGenerationPerKw * calculatorDefaults.tariff));
    const netCost = cost - subsidy;
    const payback = annualSavings > 0
      ? Math.max(1, Math.round((netCost / annualSavings) * 10) / 10)
      : 0;
    return {
      kw,
      cost,
      subsidy,
      annualSavings,
      monthlySavings: Math.round(annualSavings / 12),
      payback,
      co2: Math.round(kw * 1.2 * 10) / 10
    };
  }, [bill, propertyType]);

  return (
    <Card className="grid gap-6 p-5 md:grid-cols-[0.95fr_1.05fr] md:p-8">
      <div>
        <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.18em] text-solar">Solar Savings Calculator</p>
        <h3 className="text-2xl font-black text-navy md:text-3xl">Estimate your ideal solar system in seconds.</h3>
        <div className="mt-6 grid gap-4">
          <div>
            <Label>Monthly Electricity Bill</Label>
            <Input type="number" value={bill} min={1000} step={500} onChange={(event) => setBill(Number(event.target.value))} />
          </div>
          <div>
            <Label>Property Type</Label>
            <Select value={propertyType} onChange={(event) => setPropertyType(event.target.value)}>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
              <option>Agricultural</option>
            </Select>
          </div>
          <div>
            <Label>City</Label>
            <Input value={city} onChange={(event) => setCity(event.target.value)} placeholder="City" />
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-cloud p-5">
        <div className="grid grid-cols-2 gap-3">
          <Result label="Recommended KW" value={`${result.kw} KW`} />
          <Result label="Estimated Cost" value={`Rs. ${result.cost.toLocaleString("en-IN")}`} />
          <Result label="Government Subsidy" value={`Rs. ${result.subsidy.toLocaleString("en-IN")}`} />
          <Result label="Annual Savings" value={`Rs. ${result.annualSavings.toLocaleString("en-IN")}`} />
          <Result label="Payback Period" value={`${result.payback} years`} />
          <Result label="Monthly Savings" value={`Rs. ${result.monthlySavings.toLocaleString("en-IN")}`} />
          <Result label="CO2 Reduction" value={`${result.co2} tons/year`} />
          <Result label="Location" value={city || "Madhya Pradesh"} />
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <LinkButton href={`/book-site-survey?kw=${result.kw}&bill=${bill}`}>Get Site Survey</LinkButton>
          <Button variant="secondary" onClick={() => window.location.href = `https://wa.me/919074103184?text=I want a ${result.kw} KW solar quote for ${city}`}>
            WhatsApp Result
          </Button>
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">Indicative estimate only. Final design depends on load, roof, tariff, DISCOM rules and scheme eligibility.</p>
      </div>
    </Card>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-black text-navy">{value}</p>
    </div>
  );
}
