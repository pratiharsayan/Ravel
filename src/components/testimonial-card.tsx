import { IconStar } from "@/components/icons";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="surface-card flex h-full min-w-[min(100%,320px)] flex-col p-6">
      <div className="flex items-center gap-1 text-amber-400" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <IconStar key={i} size={16} />
        ))}
      </div>
      <p className="mt-4 flex-1 text-[15px] leading-7 text-navy-800">“{item.quote}”</p>
      <div className="mt-6 flex items-center gap-3">
        <div
          className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-navy to-electric text-sm font-bold text-white"
          aria-hidden="true"
        >
          {item.initials}
        </div>
        <div>
          <p className="font-semibold text-navy">{item.name}</p>
          <p className="text-sm text-muted">
            {item.course} · {item.role}
          </p>
        </div>
      </div>
    </article>
  );
}
