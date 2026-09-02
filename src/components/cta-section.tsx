import Link from "next/link";
import { EnquiryButton } from "@/components/enquiry-button";
import { IconPhone, IconWhatsApp } from "@/components/icons";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  text?: string;
  className?: string;
};

export function CTASection({
  title = "Ready to Start Your Digital Marketing Journey?",
  text = "Talk to our counsellor and find the right digital marketing course for your career or business goals.",
  className,
}: Props) {
  return (
    <section className={cn("section-space", className)}>
      <div className="container-xig overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-800 to-electric px-6 py-12 text-white md:px-12 md:py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-white/75">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryButton>Enquire Now</EnquiryButton>
            <a href={site.contact.phoneHref} className="btn-secondary">
              <IconPhone size={18} /> Call Now
            </a>
            <a href={site.contact.whatsappHref} target="_blank" rel="noreferrer" className="btn-secondary">
              <IconWhatsApp size={18} /> WhatsApp Us
            </a>
          </div>
          <p className="mt-4 text-sm text-white/55">
            Prefer email?{" "}
            <Link className="underline decoration-white/30 underline-offset-4" href="/contact">
              Visit the contact page
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
