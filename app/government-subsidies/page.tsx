import { SectionHeading } from "@/components/sections/section-heading";
import { ImageCard } from "@/components/sections/image-card";
import { subsidyPages } from "@/lib/content";

export const metadata = { title: "Government Subsidies", description: "Learn about solar subsidies, net metering, PM Surya Ghar Yojana, PM Kusum Yojana and financing options in Madhya Pradesh." };

export default function GovernmentSubsidiesPage() {
  return (
    <section className="section bg-cloud">
      <div className="container">
        <SectionHeading eyebrow="Government Subsidy Hub" title="Solar subsidy, net metering, financing and documentation guidance." text="Dedicated education pages help visitors understand schemes and convert into consultation-ready leads." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {subsidyPages.map((page) => (
            <ImageCard key={page.slug} href={`/government-subsidies/${page.slug}`} image={page.image} imageAlt={page.title} imageSizes="33vw" imageHeight="h-48">
              <h2 className="text-xl font-black text-navy">{page.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{page.summary}</p>
            </ImageCard>
          ))}
        </div>
      </div>
    </section>
  );
}
