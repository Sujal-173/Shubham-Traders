import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { SectionHeading } from "@/components/sections/section-heading";
import { brand } from "@/lib/content";

export const metadata = { title: "Contact", description: "Contact Shubham Traders for solar consultation. Call, WhatsApp or visit our office in Kasrawad, Khargone, Madhya Pradesh." };

export default function ContactPage() {
  return (
    <section className="section bg-cloud">
      <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Talk to a solar expert." text="Call, WhatsApp or send your requirement. The team will help you with solar sizing, subsidy, net metering and site survey." />
          <div className="grid gap-4">
            <Card className="p-5"><Phone className="mb-3 text-solar" /><p className="font-black">{brand.phones.join(" / ")}</p></Card>
            <Card className="p-5"><Mail className="mb-3 text-solar" /><p className="font-black">{brand.email}</p></Card>
            <Card className="p-5"><MapPin className="mb-3 text-solar" /><p className="font-black">{brand.location}</p></Card>
          </div>
        </div>
        <Card className="p-6 md:p-8">
          <LeadForm source="Contact Page" />
        </Card>
      </div>
    </section>
  );
}
