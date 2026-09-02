import Link from "next/link";
import { EnquiryButton } from "@/components/enquiry-button";
import { IconPhone, IconWhatsApp } from "@/components/icons";
import { site } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={site.contact.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Us"
      className="fixed bottom-20 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-700/30 transition hover:scale-105 md:bottom-6 md:right-6"
    >
      <IconWhatsApp size={28} />
    </a>
  );
}

export function MobileBottomCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a href={site.contact.phoneHref} className="btn-outline h-11 px-2 text-sm">
          <IconPhone size={16} /> Call
        </a>
        <a href={site.contact.whatsappHref} target="_blank" rel="noreferrer" className="btn-outline h-11 px-2 text-sm">
          <IconWhatsApp size={16} /> WhatsApp
        </a>
        <EnquiryButton className="h-11 px-2 text-sm">Enquire</EnquiryButton>
      </div>
    </div>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload.length === 1 ? payload[0] : payload) }}
    />
  );
}

export function Breadcrumbs({
  items,
  light = false,
}: {
  items: { name: string; href: string }[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className={light ? "text-sm text-white/65" : "text-sm text-muted"}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === items.length - 1 ? (
              <span className={light ? "font-medium text-white" : "font-medium text-navy"}>{item.name}</span>
            ) : (
              <Link className={light ? "hover:text-white" : "hover:text-navy"} href={item.href}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
