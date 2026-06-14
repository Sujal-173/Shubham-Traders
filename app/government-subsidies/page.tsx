import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";
import { subsidyPages } from "@/lib/content";

export const metadata = { title: "Government Subsidies" };

export default function GovernmentSubsidiesPage() {
  return (
    <section className="section bg-cloud">
      <div className="container">
        <SectionHeading eyebrow="Government Subsidy Hub" title="Solar subsidy, net metering, financing and documentation guidance." text="Dedicated education pages help visitors understand schemes and convert into consultation-ready leads." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {subsidyPages.map((page) => (
            <Link href={`/government-subsidies/${page.slug}`} key={page.slug} className="group overflow-hidden rounded-xl bg-white shadow-premium">
              <div className="relative h-48">
                <Image src={page.image} alt={page.title} fill sizes="33vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-black text-navy">{page.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{page.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
