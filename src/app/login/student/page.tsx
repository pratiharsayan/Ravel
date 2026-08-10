import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Student Login",
  description: "Student login portal for Ravel Institute of Nursing.",
};

export default function StudentLoginPage() {
  return (
    <>
      <PageHero title="Student Login" subtitle="Student academic portal" />
      <section className="container-site py-12 md:py-16">
        <LoginForm
          role="student"
          title="Student Sign In"
          subtitle="View notices, fees, and academic updates."
        />
      </section>
    </>
  );
}
