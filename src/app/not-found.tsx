import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-xig max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-navy">Page not found</h1>
        <p className="mt-4 text-muted">The page you are looking for does not exist. Explore courses or send an enquiry instead.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back home
          </Link>
          <Link href="/courses" className="btn-outline">
            View courses
          </Link>
        </div>
      </div>
    </section>
  );
}
