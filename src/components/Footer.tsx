import Link from "next/link";
import { moreLinks, navLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy-pattern text-white mt-16">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-xl mb-3">{siteConfig.name}</h3>
          <p className="text-white/75 text-sm leading-relaxed">
            At Ravel Institute Of Nursing, the best nursing college in Kolkata,
            West Bengal. We are committed to providing a supportive and inclusive
            learning environment where students can thrive and achieve their goals.
            Join us and learn Nursing the Best Way.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gold-bright mb-3 tracking-wide uppercase text-sm">
            Useful Links
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            {navLinks.slice(0, 5).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold-bright transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/gallery" className="hover:text-gold-bright transition-colors">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gold-bright mb-3 tracking-wide uppercase text-sm">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[...moreLinks, { href: siteConfig.prospectus, label: "Prospectus" }].map(
              (link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold-bright transition-colors">
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gold-bright mb-3 tracking-wide uppercase text-sm">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            {siteConfig.phones.map((phone, i) => (
              <li key={phone}>
                <a href={siteConfig.phoneHrefs[i]} className="hover:text-gold-bright">
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-bright">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.address}</li>
            <li>{siteConfig.hours}</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-bright"
            >
              Facebook
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-bright"
            >
              YouTube
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-bright"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-2 py-4 text-xs text-white/65">
          <p>
            Copyrights © {new Date().getFullYear()} Ravel Institute Of Nursing | All
            rights reserved.
          </p>
          <div className="flex gap-3">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
