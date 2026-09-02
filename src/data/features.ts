export type FeatureItem = {
  title: string;
  description: string;
  icon: "practice" | "projects" | "curriculum" | "mentor" | "ai" | "career" | "certificate" | "flexible";
};

export const whyFeatures: FeatureItem[] = [
  {
    title: "Practical Training",
    description: "Learn by working on real marketing activities rather than memorising theory.",
    icon: "practice",
  },
  {
    title: "Live Projects",
    description: "Work on practical projects to understand how marketing operates in the real world.",
    icon: "projects",
  },
  {
    title: "Industry-Focused Curriculum",
    description: "Learn skills currently used by digital marketing professionals in agencies and businesses.",
    icon: "curriculum",
  },
  {
    title: "Expert Mentorship",
    description: "Get guidance throughout your learning journey with feedback on assignments and campaigns.",
    icon: "mentor",
  },
  {
    title: "AI-Powered Learning",
    description: "Learn modern AI tools used for content, research, SEO and marketing execution.",
    icon: "ai",
  },
  {
    title: "Career Guidance",
    description: "Prepare for digital marketing jobs, freelancing and business growth with structured support.",
    icon: "career",
  },
  {
    title: "Certification",
    description: "Receive course certification after successful completion of training and assessments.",
    icon: "certificate",
  },
  {
    title: "Flexible Learning",
    description: "Suitable options for students, freshers, working professionals and business owners.",
    icon: "flexible",
  },
];

export const learningProcess = [
  { step: "01", title: "Learn", text: "Build a strong foundation across digital marketing channels." },
  { step: "02", title: "Practice", text: "Apply concepts through assignments and campaign tasks." },
  { step: "03", title: "Work on Projects", text: "Execute live-style projects across SEO, ads and social." },
  { step: "04", title: "Build Portfolio", text: "Document work that demonstrates real marketing ability." },
  { step: "05", title: "Become Job Ready", text: "Prepare for interviews, freelancing and career growth." },
];

export const placementSupport = [
  {
    title: "Resume building",
    description: "Present your skills, tools and project work clearly for digital marketing roles.",
  },
  {
    title: "Interview preparation",
    description: "Practise common digital marketing questions, case discussions and campaign thinking.",
  },
  {
    title: "Portfolio development",
    description: "Organise project work, audits, ads examples and content into a professional portfolio.",
  },
  {
    title: "Practical project experience",
    description: "Gain hands-on exposure so conversations with employers go beyond theory.",
  },
  {
    title: "Job preparation",
    description: "Understand role expectations across SEO, social, performance and content profiles.",
  },
  {
    title: "Freelancing guidance",
    description: "Learn how to approach clients, scope work and manage digital marketing projects.",
  },
  {
    title: "Career mentoring",
    description: "Get direction on whether jobs, freelance work or business growth is the right next step.",
  },
];
