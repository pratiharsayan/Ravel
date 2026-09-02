import { site } from "@/data/site";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function whatsappHref(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Hi XIG Digital, I would like to enquire about digital marketing courses in Kolkata.",
  );
  return `https://wa.me/${site.contact.whatsapp}?text=${text}`;
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

export function absoluteUrl(path = "/") {
  const base = site.urls.website.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
