import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Career",
  description: "Upload your resume or apply now at hr@ravelinstitute.com",
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        title="Career"
        subtitle="Join the Ravel Institute of Nursing team"
      />
      <section className="container-site py-12 md:py-16">
        <div className="site-card max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl text-navy-deep mb-3">
            Upload Your Resume / Apply Now
          </h2>
          <p className="text-muted mb-6">
            Interested in building a career with Ravel Institute of Nursing? Share
            your resume with our HR team.
          </p>
          <a href="mailto:hr@ravelinstitute.com" className="btn-primary">
            Apply at hr@ravelinstitute.com
          </a>
          <form className="mt-8 text-left space-y-4 border-t border-line pt-6">
            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="name">
                Full Name
              </label>
              <input id="name" name="name" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="email">
                Email
              </label>
              <input id="email" name="email" type="email" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="resume">
                Upload Resume
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="input-field"
              />
            </div>
            <button type="button" className="btn-secondary">
              Submit Application
            </button>
            <p className="text-xs text-muted">
              File upload backend will be connected via the admin panel later.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
