import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ravel Institute of Nursing — Kamarbari, Rajarhat Main Rd, Kolkata, West Bengal 700135.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Our Support Team Members — we're here to help"
      />
      <section className="container-site py-12 md:py-16 space-y-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl text-navy-deep mb-3">
            For More Details Contact Us!
          </h2>
          <p className="text-muted">
            Whether you have a question, comment, or concern, we&apos;re here to help.
            Our team is always ready to assist you in any way we can. Don&apos;t hesitate
            to get in touch with us using the contact form or contact information
            provided below. We look forward to hearing from you!
          </p>
          <p className="text-muted mt-3">
            Meet Our Dedicated and Experienced Support Team Members at Best Male
            Nursing College in Kolkata, Ravel Institute Of Nursing.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
