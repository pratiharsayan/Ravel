import Link from "next/link";
import { EnquiryButton } from "@/components/enquiry-button";
import { IconArrow } from "@/components/icons";
import { MarketingDashboard } from "@/components/visuals";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.28),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(96,165,250,0.18),transparent_24%)]" />
      <div className="container-xig relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-sky">
            Digital Marketing Training Institute · Kolkata
          </p>
          <h1 className="reveal delay-1 mt-4 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-[3.35rem] lg:leading-[1.1]">
            Master Digital Marketing. Build Your Career. Grow Your Business.
          </h1>
          <p className="reveal delay-2 mt-5 max-w-xl text-base leading-7 text-white/72 md:text-lg">
            Learn practical digital marketing skills through industry-focused training, real projects, live campaigns and hands-on learning at XIG Digital.
          </p>
          <div className="reveal delay-3 mt-8 flex flex-wrap gap-3">
            <EnquiryButton>
              Join Our Course
            </EnquiryButton>
            <Link href="/courses" className="btn-secondary">
              View Courses <IconArrow size={16} />
            </Link>
          </div>
          <p className="reveal delay-4 mt-6 text-sm text-white/55">
            Practical skills · Career growth · Real projects
          </p>
        </div>
        <div className="reveal delay-2" aria-hidden="true">
          <MarketingDashboard />
        </div>
      </div>
    </section>
  );
}
