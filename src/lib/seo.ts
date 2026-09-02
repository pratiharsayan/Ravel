import type { Metadata } from "next";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

type BuildMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
}: BuildMetaInput): Metadata {
  const url = absoluteUrl(path);
  const isHome = path === "/";
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return {
    title: isHome ? { absolute: fullTitle } : title.replace(` | ${site.name}`, ""),
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type,
      images: ["/og.svg"],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og.svg"],
    },
  };
}
