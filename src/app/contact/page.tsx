import { Breadcrumbs, JsonLd } from "@/components/chrome";
import { ContactForm } from "@/components/contact-form";
import { IconMail, IconPhone, IconPin, IconWhatsApp, IconFacebook, IconInstagram, IconYouTube, IconLinkedIn } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact XIG Digital",
  description:
    "Enquire about a digital marketing course in Kolkata. Contact XIG Digital by form, phone, email or WhatsApp.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="bg-mist py-10">
        <div className="container-xig">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Contact", href: "/contact" },
            ]}
          />
          <SectionHeading
            eyebrow="Contact"
            title="Enquire about a digital marketing course in Kolkata"
            description="Share your goal and a counsellor will help you choose the right programme for a job, freelance work or business growth."
          />
        </div>
      </section>
      <section className="section-space" id="enquiry">
        <div className="container-xig grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-navy">Send an enquiry</h2>
            <p className="mt-2 text-sm text-muted">We typically respond during institute hours: {site.hours}.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <aside className="grid gap-5">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-navy">Institute details</h2>
              <ul className="mt-4 grid gap-4 text-sm text-muted">
                <li className="flex gap-3">
                  <IconPin className="text-electric" />
                  <span>{site.location.displayAddress}</span>
                </li>
                <li className="flex gap-3">
                  <IconPhone className="text-electric" />
                  <a className="text-navy hover:underline" href={site.contact.phoneHref}>
                    {site.contact.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <IconMail className="text-electric" />
                  <a className="text-navy hover:underline" href={site.contact.emailHref}>
                    {site.contact.email}
                  </a>
                </li>
              </ul>
              <a href={site.contact.whatsappHref} target="_blank" rel="noreferrer" className="btn-primary mt-6 w-full">
                <IconWhatsApp size={18} /> WhatsApp Us
              </a>
              <div className="mt-5 flex gap-2">
                <a aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-line" href={site.social.facebook} target="_blank" rel="noreferrer">
                  <IconFacebook size={18} />
                </a>
                <a aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-line" href={site.social.instagram} target="_blank" rel="noreferrer">
                  <IconInstagram size={18} />
                </a>
                <a aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full border border-line" href={site.social.youtube} target="_blank" rel="noreferrer">
                  <IconYouTube size={18} />
                </a>
                <a aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-line" href={site.social.linkedin} target="_blank" rel="noreferrer">
                  <IconLinkedIn size={18} />
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-line">
              <iframe
                title="XIG Digital location on Google Maps"
                src={site.location.mapEmbedUrl}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
