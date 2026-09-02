import { Breadcrumbs } from "@/components/chrome";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}, a digital marketing training institute in Kolkata.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <section className="section-space">
      <div className="container-xig max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Privacy Policy", href: "/privacy-policy" },
          ]}
        />
        <div className="mt-6">
          <SectionHeading title="Privacy Policy" description="How XIG Digital handles enquiry and website information. Update this page with legal review before launch." />
        </div>
        <div className="mt-8 grid gap-4 leading-7 text-muted">
          <p>When you submit an enquiry, we collect your name, phone, email, course interest and message to respond to your request.</p>
          <p>We do not sell personal information. Contact data is used for counselling, course information and related communication.</p>
          <p>
            Questions: <a className="text-electric" href={site.contact.emailHref}>{site.contact.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
