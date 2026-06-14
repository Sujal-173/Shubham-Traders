import Link from "next/link";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { blogPosts } from "@/lib/content";

export const metadata = { title: "Blog", description: "Read solar guides, subsidy explainers and financing content from Shubham Traders solar experts in Madhya Pradesh." };

export default async function BlogPage() {
  return (
    <section className="section bg-cloud">
      <div className="container">
        <SectionHeading eyebrow="Solar Knowledge" title="SEO-ready solar guides, subsidy explainers and financing content." />
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className="h-full p-6 transition hover:-translate-y-1">
                <p className="text-sm font-black uppercase tracking-wide text-solar">{post.category}</p>
                <h2 className="mt-3 text-2xl font-black text-navy">{post.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
