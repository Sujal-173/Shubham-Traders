import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/lib/content";

export const metadata = { title: "Services", description: "Solar EPC services for residential, commercial, industrial and agricultural customers across Madhya Pradesh." };

export default function ServicesPage() {
  return (
    <section className="section bg-cloud">
      <div className="container">
        <SectionHeading eyebrow="Services" title="End-to-end solar EPC for every customer segment." text="Choose the solar category that matches your property. Each service flow is designed to convert interest into a practical consultation." />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group overflow-hidden rounded-xl bg-white shadow-premium">
                <div className="relative h-64">
                  <Image src={service.image} alt={service.title} fill sizes="50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-solar" />
                  <h2 className="text-2xl font-black text-navy">{service.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-black text-primary">View service <ArrowRight size={18} /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
