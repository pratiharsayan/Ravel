import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { NotificationBar } from "@/components/NotificationBar";
import { FeatureGrid, CourseCards } from "@/components/FeatureGrid";
import { FAQAccordion } from "@/components/FAQAccordion";
import { siteConfig } from "@/data/site";
import { blogPosts } from "@/data/blogs";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <NotificationBar />

      <section className="container-site py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="animate-fade-up">
            <p className="section-kicker">Why Choose Us</p>
            <h2 className="section-title">
              Why Choose #FirstMaleNursing College in Kolkata?
            </h2>
            <div className="prose-site">
              <p>
                At Ravel Institute of Nursing (best male nursing college in Kolkata,
                West Bengal), we are dedicated to shaping the future of healthcare by
                nurturing the next generation of compassionate and competent nursing
                professionals. Nestled in the heart of Kolkata, our institute stands
                as a beacon of quality education and unwavering commitment to the
                field of nursing.
              </p>
              <p>
                We invite you to explore our programs, connect with our faculty, and
                embark on a fulfilling journey towards a rewarding career in nursing.
                Your aspiration to make a difference in healthcare starts here. Join
                Ravel Institute of Nursing and be part of a legacy of excellence. Your
                future in nursing begins now!
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/about" className="btn-secondary">
                About the Institute
              </Link>
              <a
                href={siteConfig.prospectus}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download Prospectus
              </a>
            </div>
          </div>
          <div className="relative min-h-[320px] rounded-xl overflow-hidden border border-line shadow-lg">
            <Image
              src="/images/Rav-abt.png"
              alt="Ravel Institute of Nursing"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy-pattern text-white py-12">
        <div className="container-site grid gap-8 md:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <p className="text-gold-bright font-bold tracking-wide uppercase text-sm mb-2">
              BEST NURSING COLLEGE
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Admissions Open {siteConfig.admissionYear}
            </h2>
            <p className="text-white/80 mb-2">
              West Bengal Student Credit Card Scheme Available
            </p>
            <p className="text-lg">
              Call :{" "}
              <a href="tel:+919434155753" className="text-gold-bright font-semibold">
                +91 9434155753
              </a>{" "}
              /{" "}
              <a href="tel:+919641692326" className="text-gold-bright font-semibold">
                +91 9641692326
              </a>
            </p>
          </div>
          <div className="md:text-right">
            <Link href="/admission" className="btn-primary text-base">
              Click here to ENROL TODAY
            </Link>
          </div>
        </div>
      </section>

      <section className="container-site py-14 md:py-20">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Our Strengths</p>
          <h2 className="section-title">
            Why Ravel Institute is the #BestNursingCollege in Kolkata?
          </h2>
        </div>
        <FeatureGrid />
      </section>

      <section className="bg-sky/60 py-14 md:py-20">
        <div className="container-site">
          <div className="mb-8 max-w-3xl">
            <p className="section-kicker">Programs</p>
            <h2 className="section-title">Courses For Your #Career Success</h2>
          </div>
          <CourseCards />
        </div>
      </section>

      <section className="container-site py-14 md:py-20">
        <div className="mb-10 text-center">
          <p className="section-kicker">Impact</p>
          <h2 className="section-title">Our #Accomplishments</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { value: "1st", label: "Male Nursing College in Kolkata" },
            { value: "100%", label: "Placement Assistance" },
            { value: "2", label: "Flagship Programs — GNM & B.Sc" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white border border-line px-6 py-8 text-center"
            >
              <div className="font-display text-4xl text-navy font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-muted text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-line py-14 md:py-20">
        <div className="container-site grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="section-kicker">Campus Life</p>
            <h2 className="section-title">
              Student&apos;s Love For The Best #Nursing College In Kolkata!
            </h2>
            <p className="section-lead mb-6">
              Ravel Institute of Nursing | The Best Male Nursing College in Kolkata —
              trusted by students and families across West Bengal.
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Mayukh Parial",
                  text: "Best male nursing college in West Bengal ❤️❤️",
                },
                {
                  name: "Suvadip Majhi",
                  text: "Best male nursing college in West Bengal (Kolkata)",
                },
                {
                  name: "Arkapratim Sarkar",
                  text: "Teachers and management are so much cooperating..",
                },
                {
                  name: "Pradipta Nayek",
                  text: "Best college in Kolkata",
                },
              ].map((review) => (
                <blockquote
                  key={review.name}
                  className="border-l-4 border-gold pl-4 py-1"
                >
                  <p className="text-ink text-sm mb-1">&ldquo;{review.text}&rdquo;</p>
                  <cite className="text-xs text-muted not-italic font-semibold">
                    — {review.name}
                  </cite>
                </blockquote>
              ))}
            </div>
            <a
              href="https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJzTkhsJOh-DkRQ2bvwdBnx00"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-6 inline-flex"
            >
              Write a Google Review
            </a>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-line shadow-lg">
            <iframe
              src={`${siteConfig.youtubeEmbed}?rel=0`}
              title="Ravel Institute of Nursing video"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="container-site py-14 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="section-kicker">Insights</p>
            <h2 className="section-title">Latest from our Blogs</h2>
          </div>
          <Link href="/blogs" className="text-navy font-semibold hover:text-blue">
            View all blogs →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="site-card !p-0 overflow-hidden block">
              <div className="relative h-44">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <time className="text-xs text-muted">{post.date}</time>
                <h3 className="font-display text-lg text-navy-deep mt-1 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-sky/50 py-14 md:py-20">
        <div className="container-site max-w-4xl">
          <div className="mb-8 text-center">
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
