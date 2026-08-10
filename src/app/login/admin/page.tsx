import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Administrator login portal for Ravel Institute of Nursing.",
};

export default function AdminLoginPage() {
  return (
    <>
      <PageHero title="Admin Login" subtitle="Institute administration portal" />
      <section className="container-site py-12 md:py-16">
        <LoginForm
          role="admin"
          title="Admin Sign In"
          subtitle="Manage content, admissions, and site settings."
        />
      </section>
    </>
  );
}
