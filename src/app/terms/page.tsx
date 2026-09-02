import { Breadcrumbs } from "@/components/chrome";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${site.name} website and enquiring about digital marketing courses in Kolkata.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section-space">
      <div className="container-xig max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Terms & Conditions", href: "/terms" },
          ]}
        />
        <div className="mt-6">
          <SectionHeading title="Terms & Conditions" description="Website terms for XIG Digital. Have these reviewed before public launch." />
        </div>
        <div className="mt-8 grid gap-4 leading-7 text-muted">
          <p>Course details, durations and batch timings may change. Counsellors confirm the latest information during enquiry.</p>
          <p>XIG Digital does not guarantee jobs, rankings, leads or income. Career outcomes depend on individual effort and market conditions.</p>
          <p>Placeholder statistics, testimonials and contact details should be replaced with verified information before advertising.</p>
        </div>
      </div>
    </section>
  );
}
