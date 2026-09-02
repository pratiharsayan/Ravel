import Link from "next/link";
import { IconFacebook, IconInstagram, IconLinkedIn, IconMail, IconPhone, IconPin, IconYouTube } from "@/components/icons";
import { footerCourseLinks, footerLegalLinks, footerQuickLinks } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-xig grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-electric text-sm font-bold">X</span>
            <span className="text-lg font-bold">{site.name}</span>
          </div>
          <p className="mt-3 text-sm text-white/70">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
            Practical digital marketing training in Kolkata for students, professionals, business owners and entrepreneurs.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">Quick Links</h2>
          <ul className="mt-4 grid gap-2 text-sm text-white/75">
            {footerQuickLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">Courses</h2>
          <ul className="mt-4 grid gap-2 text-sm text-white/75">
            {footerCourseLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">Contact</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/75">
            <li className="flex gap-2">
              <IconPhone size={18} />
              <a className="hover:text-white" href={site.contact.phoneHref}>
                {site.contact.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <IconMail size={18} />
              <a className="hover:text-white" href={site.contact.emailHref}>
                {site.contact.email}
              </a>
            </li>
            <li className="flex gap-2">
              <IconPin size={18} />
              <span>{site.location.displayAddress}</span>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            <Social href={site.social.facebook} label="Facebook">
              <IconFacebook size={18} />
            </Social>
            <Social href={site.social.instagram} label="Instagram">
              <IconInstagram size={18} />
            </Social>
            <Social href={site.social.youtube} label="YouTube">
              <IconYouTube size={18} />
            </Social>
            <Social href={site.social.linkedin} label="LinkedIn">
              <IconLinkedIn size={18} />
            </Social>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-xig flex flex-col gap-3 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All Rights Reserved.</p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            {footerLegalLinks.map((item, index) => (
              <span key={item.href} className="flex gap-3">
                {index > 0 ? <span aria-hidden="true">|</span> : null}
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}
