import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { faqs } from "@/lib/content";

export const metadata = { title: "FAQs" };

export default function FaqsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  };

  return (
    <section className="section bg-cloud">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container max-w-4xl">
        <SectionHeading eyebrow="FAQs" title="Common solar questions answered clearly." />
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <Card key={faq.q} className="p-6">
              <h2 className="text-xl font-black text-navy">{faq.q}</h2>
              <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
