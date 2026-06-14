import Link from "next/link";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { projects } from "@/lib/content";

export const metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
    <section className="section bg-cloud">
      <div className="container">
        <SectionHeading eyebrow="Case Studies" title="Project stories focused on savings, ROI and execution." text="Each case study can be extended in Sanity with before/after data, monitoring screenshots, gallery and customer video." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug}>
              <Card className="p-6 transition hover:-translate-y-1">
                <p className="font-black uppercase tracking-wide text-solar">{project.capacity} {project.type}</p>
                <h2 className="mt-2 text-2xl font-black text-navy">{project.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">Savings: {project.savings}. ROI: {project.roi}.</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
