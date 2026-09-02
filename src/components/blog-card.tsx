import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="surface-card flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 bg-gradient-to-br from-navy via-navy-700 to-electric">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #fff 0, transparent 40%), radial-gradient(circle at 80% 80%, #60a5fa 0, transparent 40%)" }} />
        <p className="absolute bottom-4 left-4 text-sm font-medium text-white/80">{post.imageLabel}</p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">{post.category}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-navy">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{post.description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.readTime}</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="mt-4 font-semibold text-electric">
          Read More
        </Link>
      </div>
    </article>
  );
}
