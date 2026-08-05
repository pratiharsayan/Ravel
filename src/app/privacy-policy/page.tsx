import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="container-site py-12 md:py-16 max-w-3xl prose-site">
        <p>
          This Privacy Policy describes how Ravel Institute of Nursing (“we”, “our”,
          or “us”) collects, uses, and protects information when you visit
          ravelinstitute.com or interact with our admissions and contact forms.
        </p>
        <h3>Information We Collect</h3>
        <p>
          We may collect personal details you voluntarily provide such as name, phone
          number, email address, date of birth, academic details, and application
          information when you enquire or apply for admission.
        </p>
        <h3>How We Use Information</h3>
        <p>
          Information is used to process admissions, respond to enquiries, provide
          academic services, improve our website, and communicate important updates
          related to courses, scholarships, and campus activities.
        </p>
        <h3>Data Protection</h3>
        <p>
          We take reasonable administrative and technical measures to safeguard
          personal data against unauthorized access, disclosure, or misuse.
        </p>
        <h3>Contact</h3>
        <p>
          For privacy-related questions, email info@ravelinstitute.com or call
          +91 9434155753 / +91 9641692326 / +91 7676826666.
        </p>
      </section>
    </>
  );
}
