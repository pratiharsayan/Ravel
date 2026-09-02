import { faqs } from "@/data/faqs";
import { IconChevron } from "@/components/icons";

export function FAQAccordion({ items = faqs }: { items?: { question: string; answer: string }[] }) {
  return (
    <div className="grid gap-3">
      {items.map((faq) => (
        <details key={faq.question} className="group surface-card overflow-hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy">
            {faq.question}
            <IconChevron className="shrink-0 text-electric transition group-open:rotate-180" />
          </summary>
          <p className="border-t border-line px-5 py-4 text-sm leading-7 text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function CurriculumAccordion({
  modules,
}: {
  modules: { title: string; topics: string[] }[];
}) {
  return (
    <div className="grid gap-3">
      {modules.map((module, index) => (
        <details key={module.title} className="group surface-card overflow-hidden" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy">
            <span>
              <span className="mr-3 text-sm font-bold text-electric">{String(index + 1).padStart(2, "0")}</span>
              {module.title}
            </span>
            <IconChevron className="shrink-0 text-electric transition group-open:rotate-180" />
          </summary>
          <ul className="grid gap-2 border-t border-line px-5 py-4 text-sm text-muted">
            {module.topics.map((topic) => (
              <li key={topic}>• {topic}</li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
