import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";
import { projects } from "@/lib/content";

export const metadata = { title: "Projects", description: "View solar EPC projects delivered by Shubham Traders across residential, commercial, industrial and agricultural sectors." };

export default async function ProjectsPage() {
  return (
    <section className="section bg-cloud">
      <div className="container">
        <SectionHeading eyebrow="Projects" title="Solar EPC projects across residential, commercial, industrial and agricultural sectors." text="View our completed solar installations and success stories." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
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
