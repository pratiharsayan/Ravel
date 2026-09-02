import { featureIcons } from "@/components/icons";
import type { FeatureItem } from "@/data/features";
import type { CareerItem } from "@/data/careers";
import type { ToolItem } from "@/data/tools";

export function FeatureCard({ feature }: { feature: FeatureItem }) {
  const Icon = featureIcons[feature.icon];
  return (
    <article className="surface-card h-full p-6 transition duration-300 hover:-translate-y-1">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-electric">
        <Icon />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy">{feature.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{feature.description}</p>
    </article>
  );
}

export function ToolCard({ tool }: { tool: ToolItem }) {
  return (
    <article className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-[11px] font-bold tracking-wide text-white">
        {tool.initials}
      </div>
      <div>
        <h3 className="font-semibold text-navy">{tool.name}</h3>
        <p className="text-xs uppercase tracking-wider text-muted">{tool.category}</p>
      </div>
    </article>
  );
}

export function CareerCard({ career }: { career: CareerItem }) {
  return (
    <article className="rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <h3 className="font-semibold text-navy">{career.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{career.description}</p>
    </article>
  );
}
