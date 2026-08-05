import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/data/blogs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero title={post.title} breadcrumb="Blogs" />
      <article className="container-site py-12 md:py-16 max-w-3xl">
        <time className="text-sm text-muted">{post.date}</time>
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-line my-6">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
        <div className="prose-site">
          <p>{post.excerpt}</p>
          <p>
            At Ravel Institute of Nursing — the best male nursing college in Kolkata,
            West Bengal — we continue to support aspiring nurses with quality
            education, clinical exposure, and placement assistance. Explore our
            B.Sc Nursing and GNM programs to begin your journey in healthcare.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/blogs" className="btn-secondary">
            ← Back to Blogs
          </Link>
          <Link href="/admission" className="btn-primary">
            Apply for Admission
          </Link>
        </div>
      </article>
    </>
  );
}
