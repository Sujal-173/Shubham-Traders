import Link from "next/link";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { blogPosts } from "@/lib/content";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export const metadata = { title: "Blog" };

type CmsPost = {
  _id: string;
  title?: string;
  slug?: string;
  category?: string;
  excerpt?: string;
};

async function getPosts() {
  try {
    const cmsPosts = await client.fetch<CmsPost[]>(POSTS_QUERY, {}, { next: { revalidate: 60 } });
    if (cmsPosts.length) {
      return cmsPosts.map((post) => ({
        title: post.title || "Solar Guide",
        slug: post.slug || post._id,
        category: post.category || "Solar Guides",
        excerpt: post.excerpt || "Read the latest solar guidance from Shubham Traders."
      }));
    }
  } catch {
    return blogPosts;
  }
  return blogPosts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="section bg-cloud">
      <div className="container">
        <SectionHeading eyebrow="Solar Knowledge" title="SEO-ready solar guides, subsidy explainers and financing content." />
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
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
