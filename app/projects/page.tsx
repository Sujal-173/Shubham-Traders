import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";
import { projects } from "@/lib/content";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const metadata = { title: "Projects" };

type CmsProject = {
  _id: string;
  title?: string;
  slug?: string;
  location?: string;
  capacity?: string;
  projectType?: string;
  featuredImage?: unknown;
};

async function getProjects() {
  try {
    const cmsProjects = await client.fetch<CmsProject[]>(PROJECTS_QUERY, {}, { next: { revalidate: 60 } });
    if (cmsProjects.length) {
      return cmsProjects.map((project) => ({
        title: project.title || "Solar Project",
        slug: project.slug || project._id,
        location: project.location || "Madhya Pradesh",
        capacity: project.capacity || "Solar EPC",
        type: project.projectType || "Solar",
        image: project.featuredImage ? urlFor(project.featuredImage).width(1200).height(800).url() : projects[0].image
      }));
    }
  } catch {
    return projects;
  }
  return projects;
}

export default async function ProjectsPage() {
  const items = await getProjects();

  return (
    <section className="section bg-cloud">
      <div className="container">
        <SectionHeading eyebrow="Projects" title="Solar EPC projects across residential, commercial, industrial and agricultural sectors." text="This project system is ready for Sanity CMS fields including gallery, savings, ROI, testimonial and completion date." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group overflow-hidden rounded-xl bg-white shadow-premium">
              <div className="relative h-56">
                <Image src={project.image} alt={project.title} fill sizes="33vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-sm font-black uppercase tracking-wide text-solar">{project.capacity} | {project.type}</p>
                <h2 className="mt-2 text-xl font-black text-navy">{project.title}</h2>
                <p className="mt-2 text-slate-600">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
