import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { subsidyPages, faqs } from "@/lib/content";

export function generateStaticParams() {
  return subsidyPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = subsidyPages.find((item) => item.slug === slug);
  return { title: page?.title || "Government Subsidy", description: page?.summary };
}

export default async function SubsidyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = subsidyPages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <Image src={page.image} alt={page.title} fill priority sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-transparent" />
        <div className="container relative max-w-4xl">
          <p className="mb-3 font-black uppercase tracking-[0.18em] text-solar">Subsidy Guidance</p>
          <h1 className="text-4xl font-black md:text-6xl">{page.title}</h1>
          <p className="mt-5 text-xl leading-8 text-white/82">{page.summary}</p>
          <LinkButton href="/book-site-survey" className="mt-8">Check Eligibility</LinkButton>
        </div>
      </section>
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
