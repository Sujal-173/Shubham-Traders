import { BadgeIndianRupee, FileCheck2, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata = { title: "EMI and Financing", description: "Solar EMI and financing options for residential, commercial and industrial solar projects in Madhya Pradesh." };

export default function EmiFinancingPage() {
  const items = [
    { title: "EMI Planning", text: "Convert solar investment into structured monthly payments.", icon: BadgeIndianRupee },
    { title: "Documentation Support", text: "KYC, quotation, site report and project documents prepared cleanly.", icon: FileCheck2 },
    { title: "Subsidy Alignment", text: "Residential subsidy and finance planning can be evaluated together.", icon: ShieldCheck }
  ];

  return (
    <section className="section bg-cloud">
      <div className="container">
        <SectionHeading eyebrow="EMI and Financing" title="Make solar adoption easier with guided finance support." text="Shubham Traders prepares the project details lenders and customers need to evaluate solar EMI options." />
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="p-6">
                <Icon className="mb-4 h-8 w-8 text-solar" />
                <h2 className="text-xl font-black text-navy">{item.title}</h2>
                <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
              </Card>
            );
          })}
        </div>
        <LinkButton href="/book-site-survey" className="mt-8">Discuss Financing</LinkButton>
      </div>
    </section>
  );
}
