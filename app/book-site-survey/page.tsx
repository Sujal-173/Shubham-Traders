import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata = { title: "Book Site Survey", description: "Book a free site survey with Shubham Traders. Get a practical solar proposal for your property in Madhya Pradesh." };

export default function BookSiteSurveyPage() {
  return (
    <section className="section bg-cloud">
      <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="Free Site Survey" title="Get a practical solar proposal for your property." text="Share your details and Shubham Traders will check your load, site type, subsidy eligibility and project fit." />
        <Card className="p-6 md:p-8">
          <LeadForm source="Book Site Survey Page" />
        </Card>
      </div>
    </section>
  );
}
