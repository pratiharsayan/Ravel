import Link from "next/link";
import { features } from "@/data/site";

const icons: Record<string, string> = {
  campus: "🏫",
  library: "📚",
  faculty: "👩‍🏫",
  hospital: "🏥",
  tech: "💻",
  fees: "💰",
  research: "🔬",
  placement: "🎯",
};

export function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <article key={feature.title} className="site-card">
          <div className="text-2xl mb-3" aria-hidden>
            {icons[feature.icon] || "✦"}
          </div>
          <h3 className="font-display text-lg text-navy-deep mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-muted">{feature.description}</p>
        </article>
      ))}
    </div>
  );
}

export function CourseCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {[
        {
          badge: "GNM Nursing!",
          title: "General Nursing and Midwifery",
          duration: "3 YEARS",
          points: [
            "10+2 examination passed",
            "English along with four subjects, obtain at least 40% marks",
          ],
          note: "* Desirable Performance in Joint Entrance Examination Board (WBJEE | ANM – GNM)",
          fee: "/docs/GNM-FEES_2026-27-1.pdf",
        },
        {
          badge: "BSC Nursing!",
          title: "Bachelor of Science in Nursing (B.Sc Nursing)",
          duration: "4 YEARS",
          points: [
            "10+2 examination passed with",
            "Physics, Chemistry, Biology",
            "Obtain at least 45% marks",
          ],
          note: "* Desirable Performance in Joint Entrance Examination (WBJEE Board | JENPAS-UG)",
          fee: "/docs/BSC-NURSING-FEES_2025-26.pdf",
        },
      ].map((course) => (
        <article
          key={course.title}
          className="overflow-hidden rounded-xl border border-line bg-white shadow-sm"
        >
          <div className="bg-navy px-5 py-4 text-white">
            <p className="text-gold-bright text-sm font-bold tracking-wide">
              {course.badge}
            </p>
            <h3 className="font-display text-xl mt-1">{course.title}</h3>
          </div>
          <div className="p-5">
            <ul className="space-y-2 text-sm text-muted mb-4">
              {course.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-navy">⦿</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted mb-4">{course.note}</p>
            <p className="inline-block bg-sky text-navy font-bold text-sm px-3 py-1.5 rounded mb-5">
              DURATION: {course.duration}
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/admission" className="btn-primary text-sm">
                Apply Now
              </Link>
              <a
                href={course.fee}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                Fee Structure
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
