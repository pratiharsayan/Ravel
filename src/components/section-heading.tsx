import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  id?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  id,
  as: Tag = "h2",
}: Props) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      {eyebrow ? (
        <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", light ? "text-sky" : "text-electric")}>
          {eyebrow}
        </p>
      ) : null}
      <Tag id={id} className={cn("mt-3 text-3xl font-semibold tracking-tight md:text-4xl", light ? "text-white" : "text-navy")}>
        {title}
      </Tag>
      {description ? (
        <p className={cn("mt-4 text-base leading-7 md:text-lg", light ? "text-white/70" : "text-muted")}>{description}</p>
      ) : null}
    </div>
  );
}
