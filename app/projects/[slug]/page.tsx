import Image from "next/image";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { projects } from "@/lib/content";
import { client, previewClient } from "@/sanity/lib/client";
import { PROJECT_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type CmsProject = {
  _id: string;
  title?: string;
  slug?: string;
  location?: string;
  clientName?: string;
  capacity?: string;
  projectType?: string;
  description?: string;
  savings?: string;
  roi?: string;
  featuredImage?: unknown;
};

export async function generateStaticParams() {
  try {
    const cmsProjects = await previewClient.fetch<CmsProject[]>(PROJECTS_QUERY);
    return [...projects.map((project) => ({ slug: project.slug })), ...cmsProjects.map((project) => ({ slug: project.slug || project._id }))];
  } catch {
    return projects.map((project) => ({ slug: project.slug }));
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  return { title: project?.title || "Project", description: `${project?.capacity} ${project?.type} solar project` };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
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

async function getProject(slug: string) {
  try {
    const project = await client.fetch<CmsProject | null>(PROJECT_QUERY, { slug }, { next: { revalidate: 60 } });
    if (project) {
      return {
        title: project.title || "Solar Project",
        slug: project.slug || project._id,
        location: project.location || "Madhya Pradesh",
        client: project.clientName || "Shubham Traders Client",
        capacity: project.capacity || "Solar EPC",
        type: project.projectType || "Solar",
        savings: project.savings || project.description || "Optimized electricity cost through solar generation",
        roi: project.roi || "Project-specific ROI after site survey",
        image: project.featuredImage ? urlFor(project.featuredImage).width(1400).height(1000).url() : projects[0].image
      };
    }
  } catch {
    return projects.find((item) => item.slug === slug);
  }
  return projects.find((item) => item.slug === slug);
}
