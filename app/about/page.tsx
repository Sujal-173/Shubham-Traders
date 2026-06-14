import Image from "next/image";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { brand, images, metrics, reasons } from "@/lib/content";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <section className="section bg-cloud">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading eyebrow="About Shubham Traders" title="A Madhya Pradesh solar EPC company built for trust, speed and long-term performance." text={`${brand.name} is based in ${brand.location} and delivers end-to-end solar engineering, procurement and construction services for homes, businesses, industries and farms.`} />
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <Card key={metric.label} className="p-5">
                <p className="text-3xl font-black text-primary">{metric.value}</p>
                <p className="font-bold text-slate-600">{metric.label}</p>
              </Card>
            ))}
          </div>
          <LinkButton href="/book-site-survey" className="mt-6">Book Consultation</LinkButton>
        </div>
        <div>
          <div className="relative min-h-[420px] overflow-hidden rounded-xl shadow-premium">
            <Image src={images.engineers} alt="Solar engineers inspecting installation" fill sizes="50vw" className="object-cover" />
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {reasons.slice(0, 4).map((reason) => {
              const Icon = reason.icon;
              return (
                <Card key={reason.title} className="p-4">
                  <Icon className="mb-3 h-6 w-6 text-solar" />
                  <p className="font-black">{reason.title}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
