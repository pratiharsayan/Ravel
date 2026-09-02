import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { CareerCard, FeatureCard, ToolCard } from "@/components/cards";
import { CourseGrid } from "@/components/course-card";
import { CTASection } from "@/components/cta-section";
import { EnquiryButton } from "@/components/enquiry-button";
import { FAQAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { SectionHeading } from "@/components/section-heading";
import { Stats } from "@/components/stats";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { ClassroomVisual } from "@/components/visuals";
import { blogPosts } from "@/data/blog";
import { careers } from "@/data/careers";
import { getFlagshipCourses, getShortCourses } from "@/data/courses";
import { whyFeatures } from "@/data/features";
import { tools } from "@/data/tools";

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="section-space">
        <div className="container-xig grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About XIG Digital"
              title="Learn Digital Marketing Beyond Theory"
              description="XIG Digital focuses on practical digital marketing education that helps learners understand how marketing actually works in the real world."
            />
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-navy-800">
              {[
                "Live projects",
                "Practical assignments",
                "Campaign planning",
                "SEO implementation",
                "Social media marketing",
                "Google Ads",
                "Meta Ads",
                "Website development",
                "Analytics",
                "Content marketing",
                "AI tools",
              ].map((item) => (
                <li key={item} className="rounded-full bg-mist px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-primary mt-8">
              Know More About XIG Digital
            </Link>
          </div>
          <ClassroomVisual />
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-xig">
          <SectionHeading
            eyebrow="Courses"
            title="Choose Your Digital Marketing Learning Path"
            description="Flagship programmes and focused short-term courses for career growth, freelance work and business marketing."
          />
          <div className="mt-10">
            <CourseGrid courses={getFlagshipCourses()} />
          </div>
          <h3 className="mt-14 text-2xl font-semibold text-navy">Short-Term Courses</h3>
          <p className="mt-2 max-w-2xl text-muted">Build one high-value skill at a time — each with duration, level, modules and practical training.</p>
          <div className="mt-8">
            <CourseGrid courses={getShortCourses()} />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-xig">
          <SectionHeading
            eyebrow="Why XIG Digital"
            title="Why Learn Digital Marketing at XIG Digital?"
            description="A Kolkata institute built around practice, current tools, mentorship and career-ready skills."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-navy text-white">
        <div className="container-xig">
          <SectionHeading
            light
            align="center"
            title="Don't Just Learn Digital Marketing. Practice It."
            description="A simple path from classroom learning to portfolio-ready work."
          />
          <div className="mt-10">
            <ProcessSection />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-xig">
          <SectionHeading
            eyebrow="Tools"
            title="Learn the Tools Used by Digital Marketers"
            description="Practise the platforms used in SEO, ads, analytics, websites and AI-assisted marketing."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-xig">
          <SectionHeading
            eyebrow="Careers"
            title="Build Skills That Open Career Opportunities"
            description="Digital marketing roles across SEO, social, performance, content, analytics and freelance consulting."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {careers.map((career) => (
              <CareerCard key={career.title} career={career} />
            ))}
          </div>
          <div className="mt-8">
            <EnquiryButton>Start Your Digital Marketing Career</EnquiryButton>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-xig">
          <SectionHeading
            eyebrow="Student reviews"
            title="Learners who practised, not just attended"
            description="Reviews are illustrative placeholders you can replace from the central testimonials data file."
          />
          <div className="mt-10">
            <TestimonialSlider />
          </div>
          <Link href="/student-reviews" className="mt-8 inline-block font-semibold text-electric">
            See all student reviews
          </Link>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-xig">
          <SectionHeading
            eyebrow="Insights"
            title="Digital marketing guides for learners"
            description="SEO-friendly articles on skills, careers and channels taught at XIG Digital."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <Link href="/blog" className="btn-outline mt-8">
            Visit the blog
          </Link>
        </div>
      </section>

      <section className="section-space">
        <div className="container-xig grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions learners ask before joining"
            description="Clear answers about beginners, projects, certification, tools and how to enquire."
          />
          <FAQAccordion />
        </div>
      </section>

      <CTASection />
    </>
  );
}
