import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "next-sanity";
import { LinkButton } from "@/components/ui/button";
import { blogPosts } from "@/lib/content";
import { client, previewClient } from "@/sanity/lib/client";
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";

type CmsPost = {
  _id: string;
  title?: string;
  slug?: string;
  category?: string;
  excerpt?: string;
  seoTitle?: string;
  seoDescription?: string;
  body?: unknown[];
};

type Post = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  seoTitle?: string;
  seoDescription?: string;
  body?: PortableTextBlock[];
};

export async function generateStaticParams() {
  try {
    const cmsPosts = await previewClient.fetch<CmsPost[]>(POSTS_QUERY);
    return [...blogPosts.map((post) => ({ slug: post.slug })), ...cmsPosts.map((post) => ({ slug: post.slug || post._id }))];
  } catch {
    return blogPosts.map((post) => ({ slug: post.slug }));
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post?.seoTitle || post?.title || "Blog", description: post?.seoDescription || post?.excerpt };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="section bg-white">
      <div className="container max-w-3xl">
        <p className="mb-3 font-black uppercase tracking-[0.18em] text-solar">{post.category}</p>
        <h1 className="text-4xl font-black text-navy md:text-5xl">{post.title}</h1>
        <p className="mt-5 text-xl leading-8 text-slate-600">{post.excerpt}</p>
        {Array.isArray(post.body) && post.body.length ? (
          <div className="mt-8 grid gap-4 text-lg leading-8 text-slate-700">
            <PortableText value={post.body} />
          </div>
        ) : (
          <div className="mt-8 grid gap-4 text-lg leading-8 text-slate-700">
            <p>This article is CMS-ready. Add rich text in Sanity Studio to replace this placeholder with detailed SEO content, internal links, FAQs and lead CTAs.</p>
            <p>For now, it gives the website a complete blog architecture and search-friendly route structure.</p>
          </div>
        )}
        <LinkButton href="/book-site-survey" className="mt-8">Request Solar Consultation</LinkButton>
      </div>
    </article>
  );
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const post = await client.fetch<CmsPost | null>(POST_QUERY, { slug }, { next: { revalidate: 60 } });
    if (post) {
      return {
        title: post.title || "Solar Guide",
        slug: post.slug || post._id,
        category: post.category || "Solar Guides",
        excerpt: post.excerpt || "Read the latest solar guidance from Shubham Traders.",
        seoTitle: post.seoTitle,
        seoDescription: post.seoDescription,
        body: post.body as PortableTextBlock[] | undefined
      };
    }
  } catch {
    return blogPosts.find((item) => item.slug === slug) || null;
  }
  return blogPosts.find((item) => item.slug === slug) || null;
}

