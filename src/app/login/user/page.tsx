import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "User Login",
  description: "User login portal for Ravel Institute of Nursing.",
};

export default function UserLoginPage() {
  return (
    <>
      <PageHero title="User Login" subtitle="Staff and registered user portal" />
      <section className="container-site py-12 md:py-16">
        <LoginForm
          role="user"
          title="User Sign In"
          subtitle="Access your institute account and services."
        />
      </section>
    </>
  );
}
