import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" />
      <section className="container-site py-12 md:py-16 max-w-3xl prose-site">
        <p>
          By accessing the website of Ravel Institute of Nursing, you agree to the
          following terms and conditions. Please read them carefully.
        </p>
        <h3>Website Content</h3>
        <p>
          Course details, fees, affiliations, and admission information are provided
          for general guidance. Official documents and notices published by the
          institute prevail in case of any discrepancy.
        </p>
        <h3>Admissions</h3>
        <p>
          Submission of an online application does not guarantee admission. Admission
          is subject to eligibility criteria, entrance requirements, seat availability,
          and institute policies for the relevant academic session.
        </p>
        <h3>Intellectual Property</h3>
        <p>
          All logos, images, documents, and content on this website remain the
          property of Ravel Institute of Nursing unless otherwise stated.
        </p>
        <h3>Contact</h3>
        <p>
          For clarifications, contact info@ravelinstitute.com or visit our campus at
          Kamarbari, Rajarhat Main Rd, Kolkata, West Bengal 700135.
        </p>
      </section>
    </>
  );
}
