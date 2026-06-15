import Image from "next/image";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { findBySlug, projects, staticParamsFromSlugs } from "@/lib/content";

export async function generateStaticParams() {
  return staticParamsFromSlugs(projects);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findBySlug(projects, slug);
  return { title: project?.title || "Project", description: `${project?.capacity} ${project?.type} solar project` };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findBySlug(projects, slug);
  if (!project) notFound();

  return (
    <section className="section bg-cloud">
      <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-xl shadow-premium">
          <Image src={project.image} alt={project.title} fill priority sizes="60vw" className="object-cover" />
        </div>
        <div>
          <p className="mb-3 font-black uppercase tracking-[0.18em] text-solar">{project.type} Project</p>
          <h1 className="text-4xl font-black text-navy md:text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{project.location}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card className="p-5"><p className="text-sm font-bold text-slate-500">Client</p><p className="text-xl font-black">{project.client}</p></Card>
            <Card className="p-5"><p className="text-sm font-bold text-slate-500">Capacity</p><p className="text-xl font-black">{project.capacity}</p></Card>
            <Card className="p-5"><p className="text-sm font-bold text-slate-500">Savings</p><p className="font-black">{project.savings}</p></Card>
            <Card className="p-5"><p className="text-sm font-bold text-slate-500">ROI</p><p className="font-black">{project.roi}</p></Card>
          </div>
          <LinkButton href="/book-site-survey" className="mt-6">Plan Similar Project</LinkButton>
        </div>
      </div>
    </section>
  );
}
