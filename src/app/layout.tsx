import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/chrome";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/data/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.urls.website),
  title: {
    default: "Digital Marketing Course in Kolkata | XIG Digital",
    template: "%s | XIG Digital",
  },
  description: site.description,
  keywords: [
    "Digital Marketing Course in Kolkata",
    "Digital Marketing Training Institute in Kolkata",
    "Digital Marketing Course Kolkata",
    "SEO Course Kolkata",
    "Digital Marketing Training",
    "Digital Marketing Institute Kolkata",
    "Google Ads Course Kolkata",
    "Social Media Marketing Course Kolkata",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Digital Marketing Course in Kolkata | XIG Digital",
    description: site.shortDescription,
    url: site.urls.website,
    images: ["/og.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Course in Kolkata | XIG Digital",
    description: site.shortDescription,
    images: ["/og.svg"],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.urls.website,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white font-sans text-ink">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
