import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { Breadcrumbs, JsonLd } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { blogPosts, getPost } from "@/data/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            datePublished: post.date,
            description: post.description,
            articleSection: post.category,
          },
        ]}
      />
      <article>
        <header className="bg-navy py-14 text-white">
          <div className="container-xig max-w-3xl">
            <Breadcrumbs
              light
              items={[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: post.category, href: `/blog/${post.slug}` },
              ]}
            />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-sky">{post.category}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-white/70">{post.description}</p>
            <p className="mt-4 text-sm text-white/50">
              <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
            </p>
          </div>
        </header>
        <div className="container-xig max-w-3xl py-12">
          <div className="mb-10 h-48 overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-700 to-electric">
            <div className="flex h-full items-end p-6 text-white/80">{post.imageLabel}</div>
          </div>
          <div className="grid gap-8">
            {post.content.map((block) => (
              <section key={block.heading}>
                <h2 className="text-2xl font-semibold text-navy">{block.heading}</h2>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-7 text-muted">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>
      {related.length ? (
        <section className="section-space bg-mist">
          <div className="container-xig">
            <h2 className="text-2xl font-semibold text-navy">Related reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <CTASection />
    </>
  );
}
