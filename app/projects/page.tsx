import { SectionHeading } from "@/components/sections/section-heading";
import { ImageCard } from "@/components/sections/image-card";
import { projects } from "@/lib/content";

export const metadata = { title: "Projects", description: "View solar EPC projects delivered by Shubham Traders across residential, commercial, industrial and agricultural sectors." };

export default async function ProjectsPage() {
  return (
    <section className="section bg-cloud">
      <div className="container">
        <SectionHeading eyebrow="Projects" title="Solar EPC projects across residential, commercial, industrial and agricultural sectors." text="View our completed solar installations and success stories." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ImageCard key={project.slug} href={`/projects/${project.slug}`} image={project.image} imageAlt={project.title} imageSizes="33vw">
              <p className="text-sm font-black uppercase tracking-wide text-solar">{project.capacity} | {project.type}</p>
              <h2 className="mt-2 text-xl font-black text-navy">{project.title}</h2>
              <p className="mt-2 text-slate-600">{project.location}</p>
            </ImageCard>
          ))}
        </div>
      </div>
    </section>
  );
}
