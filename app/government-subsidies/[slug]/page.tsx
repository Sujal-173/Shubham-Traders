import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { PageHero } from "@/components/sections/page-hero";
import { faqs, findBySlug, staticParamsFromSlugs, subsidyPages } from "@/lib/content";

export function generateStaticParams() {
  return staticParamsFromSlugs(subsidyPages);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findBySlug(subsidyPages, slug);
  return { title: page?.title || "Government Subsidy", description: page?.summary };
}

export default async function SubsidyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findBySlug(subsidyPages, slug);
  if (!page) notFound();

  return (
    <>
      <PageHero image={page.image} imageAlt={page.title} eyebrow="Subsidy Guidance" title={page.title} description={page.summary}>
        <LinkButton href="/book-site-survey" className="mt-8">Check Eligibility</LinkButton>
      </PageHero>
      <section className="section bg-cloud">
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-black text-navy">Eligibility and documentation support</h2>
            <div className="mt-6 grid gap-4">
              {page.eligibility.map((item) => (
                <Card key={item} className="flex gap-3 p-5">
                  <CheckCircle2 className="mt-1 text-energy" />
                  <p className="font-bold leading-7">{item}</p>
                </Card>
              ))}
            </div>
          </div>
          <Card className="p-6">
            <h3 className="text-2xl font-black">Common Questions</h3>
            <div className="mt-5 grid gap-4">
              {faqs.slice(0, 3).map((faq) => (
                <div key={faq.q}>
                  <p className="font-black text-navy">{faq.q}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
