import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { LeadForm } from "@/components/lead-form";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.title || "Solar Service", description: service?.summary };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <Image src={service.image} alt={service.title} fill priority sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        <div className="container relative max-w-4xl">
          <Icon className="mb-5 h-12 w-12 text-solar" />
          <p className="mb-3 font-black uppercase tracking-[0.18em] text-solar">Solar EPC Service</p>
          <h1 className="text-4xl font-black md:text-6xl">{service.title}</h1>
          <p className="mt-5 text-xl leading-8 text-white/82">{service.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/book-site-survey">Get Free Consultation</LinkButton>
            <LinkButton href="/solar-calculator" variant="outline">Calculate Savings</LinkButton>
          </div>
        </div>
      </section>
      <section className="section bg-cloud">
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-black text-navy">Built for {service.audience.toLowerCase()}.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.points.map((point) => (
                <Card key={point} className="flex gap-3 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-energy" />
                  <p className="font-bold leading-7 text-slate-700">{point}</p>
                </Card>
              ))}
            </div>
          </div>
          <Card className="p-6">
            <h3 className="mb-5 text-2xl font-black text-navy">Request {service.title} Quote</h3>
            <LeadForm source={`${service.title} Page`} />
          </Card>
        </div>
      </section>
    </>
  );
}
