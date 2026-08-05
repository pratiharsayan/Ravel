import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { affiliationDocs } from "@/data/site";

export const metadata: Metadata = {
  title: "Affiliation",
  description:
    "Affiliation documents, Essentiality Certificate, WBNC and WBUHS renewal validity letters for Ravel Institute of Nursing.",
};

export default function AffiliationPage() {
  return (
    <>
      <PageHero
        title="Affiliation"
        subtitle="Official approvals, permissions, and validity documents"
      />
      <section className="container-site py-12 md:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {affiliationDocs.map((doc) => (
            <a
              key={doc.file}
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="site-card group"
            >
              <div className="text-3xl mb-3" aria-hidden>
                📄
              </div>
              <h2 className="font-display text-lg text-navy-deep mb-2 group-hover:text-navy">
                {doc.title}
              </h2>
              <span className="text-sm font-semibold text-blue">
                View / Download PDF →
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
