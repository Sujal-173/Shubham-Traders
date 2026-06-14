import { SolarCalculator } from "@/components/solar-calculator";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata = { title: "Solar Calculator" };

export default function SolarCalculatorPage() {
  return (
    <section className="section bg-cloud">
      <div className="container">
        <SectionHeading eyebrow="Solar Calculator" title="Calculate solar size, subsidy, savings and payback." text="Use this estimator to begin your solar planning. The final proposal is prepared after site survey and load analysis." />
        <SolarCalculator />
      </div>
    </section>
  );
}
