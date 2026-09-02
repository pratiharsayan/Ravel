import { HomePage } from "@/components/home-page";
import { JsonLd } from "@/components/chrome";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Marketing Course in Kolkata | XIG Digital",
  description:
    "XIG Digital is a digital marketing training institute in Kolkata offering practical courses in SEO, Google Ads, Meta Ads, social media, WordPress and AI tools with live-style projects.",
  path: "/",
  keywords: [
    "Digital Marketing Course in Kolkata",
    "Digital Marketing Training Institute in Kolkata",
    "Digital Marketing Institute Kolkata",
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <HomePage />
    </>
  );
}
