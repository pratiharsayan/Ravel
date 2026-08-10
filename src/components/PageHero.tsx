import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
};

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-navy-pattern text-white">
      <div className="container-site py-12 md:py-16">
        <nav className="text-sm text-white/70 mb-3">
          <Link href="/" className="hover:text-gold-bright">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>{breadcrumb || title}</span>
        </nav>
        <h1 className="font-display text-3xl md:text-4xl font-bold animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-white/80 animate-fade-up">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
