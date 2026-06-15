import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/sections/page-hero";
import { findBySlug, services, staticParamsFromSlugs } from "@/lib/content";

export function generateStaticParams() {
  return staticParamsFromSlugs(services);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = findBySlug(services, slug);
  return { title: service?.title || "Solar Service", description: service?.summary };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = findBySlug(services, slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <>
      <PageHero image={service.image} imageAlt={service.title} eyebrow="Solar EPC Service" title={service.title} description={service.summary} prefix={<Icon className="mb-5 h-12 w-12 text-solar" />}>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="/book-site-survey">Get Free Consultation</LinkButton>
          <LinkButton href="/solar-calculator" variant="outline">Calculate Savings</LinkButton>
        </div>
      </PageHero>
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
