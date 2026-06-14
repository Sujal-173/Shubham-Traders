import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { testimonials } from "@/lib/content";

export const metadata = { title: "Testimonials", description: "Customer testimonials and reviews for Shubham Traders solar EPC services in Madhya Pradesh." };

export default function TestimonialsPage() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="Customer confidence for every solar buyer." text="The structure supports written reviews, Google review embeds and video testimonials." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="p-6">
              <div className="mb-4 flex gap-1 text-solar">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} fill="currentColor" size={18} />)}
              </div>
              <p className="leading-7 text-slate-700">&quot;{item.quote}&quot;</p>
              <p className="mt-5 font-black text-navy">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
