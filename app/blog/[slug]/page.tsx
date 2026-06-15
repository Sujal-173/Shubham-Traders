import { notFound } from "next/navigation";
import { LinkButton } from "@/components/ui/button";
import { blogPosts, findBySlug, staticParamsFromSlugs } from "@/lib/content";

export async function generateStaticParams() {
  return staticParamsFromSlugs(blogPosts);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findBySlug(blogPosts, slug);
  return { title: post?.title || "Blog", description: post?.excerpt };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findBySlug(blogPosts, slug);
  if (!post) notFound();

  return (
    <article className="section bg-white">
      <div className="container max-w-3xl">
        <p className="mb-3 font-black uppercase tracking-[0.18em] text-solar">{post.category}</p>
        <h1 className="text-4xl font-black text-navy md:text-5xl">{post.title}</h1>
        <p className="mt-5 text-xl leading-8 text-slate-600">{post.excerpt}</p>
        <div className="mt-8 grid gap-4 text-lg leading-8 text-slate-700">
          <p>This article is ready for content. Add detailed solar guidance, subsidy information, and financing content here.</p>
        </div>
        <LinkButton href="/book-site-survey" className="mt-8">Request Solar Consultation</LinkButton>
      </div>
    </article>
  );
}

