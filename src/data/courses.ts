export type CourseLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export type CourseModule = {
  title: string;
  topics: string[];
};

export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "flagship" | "advanced" | "short";
  duration: string;
  mode: string;
  level: CourseLevel;
  certification: string;
  practicalTraining: string;
  projects: string;
  overview: string;
  summary: string;
  modules: string[];
  highlights: string[];
  careerOpportunities: string[];
  curriculum: CourseModule[];
  ctaLabel: string;
  featured?: boolean;
};

const digitalMarketingCurriculum: CourseModule[] = [
  { title: "Digital Marketing Fundamentals", topics: ["Marketing vs digital marketing", "Customer journey", "Channels overview", "Campaign thinking"] },
  { title: "Website & Landing Pages", topics: ["Website structure", "Landing page elements", "Conversion-focused layouts", "Page experience basics"] },
  { title: "HTML & CSS Basics", topics: ["Page structure", "Headings and content hierarchy", "Basic styling", "What marketers should know"] },
  { title: "WordPress", topics: ["CMS setup", "Themes and plugins", "Pages and blogs", "Forms and landing pages"] },
  { title: "SEO", topics: ["Keyword research", "On-page SEO", "Content optimisation", "Off-page fundamentals"] },
  { title: "Local SEO", topics: ["Google Business Profile", "Local citations", "Maps visibility", "Review management"] },
  { title: "Technical SEO", topics: ["Crawl and index", "Site speed basics", "Search Console issues", "Structured data overview"] },
  { title: "Content Marketing", topics: ["Content planning", "Blog strategy", "Copywriting for web", "Content calendars"] },
  { title: "Social Media Marketing", topics: ["Platform strategy", "Organic growth", "Community management", "Reporting"] },
  { title: "Facebook Marketing", topics: ["Page setup", "Organic content", "Audience insights", "Creative formats"] },
  { title: "Instagram Marketing", topics: ["Profile optimisation", "Reels and posts", "Hashtags and reach", "Brand storytelling"] },
  { title: "Meta Ads", topics: ["Ads Manager", "Campaign structure", "Targeting", "Creative testing"] },
  { title: "Google Ads", topics: ["Search campaigns", "Keywords and match types", "Ads and extensions", "Budget and bidding"] },
  { title: "Google Analytics", topics: ["GA4 setup overview", "Events and conversions", "Reports", "Audience insights"] },
  { title: "Google Search Console", topics: ["Performance reports", "Indexing", "Coverage issues", "Query analysis"] },
  { title: "Email Marketing", topics: ["List building", "Campaign types", "Copy and CTAs", "Basic automation"] },
  { title: "Lead Generation", topics: ["Offer design", "Landing pages", "Forms", "Lead nurturing"] },
  { title: "Conversion Optimization", topics: ["Funnel bottlenecks", "A/B thinking", "UX for marketers", "CRO checklist"] },
  { title: "Canva & Creative Design", topics: ["Brand kits", "Ad creatives", "Social posts", "Landing page visuals"] },
  { title: "AI Tools for Marketing", topics: ["Content assistance", "Research", "SEO support", "Workflow speed"] },
  { title: "Freelancing", topics: ["Service packaging", "Finding clients", "Proposals", "Delivery process"] },
  { title: "Client Management", topics: ["Briefs", "Reporting", "Expectations", "Communication"] },
  { title: "Digital Marketing Strategy", topics: ["Channel mix", "Budget thinking", "KPI setting", "Campaign planning"] },
  { title: "Live Projects", topics: ["SEO tasks", "Ads planning", "Social campaigns", "Portfolio presentation"] },
];

export const courses: Course[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing Course",
    shortTitle: "Digital Marketing",
    category: "flagship",
    duration: "3–6 months",
    mode: "Classroom / guided practical batches in Kolkata",
    level: "All Levels",
    certification: "Course certificate on successful completion",
    practicalTraining: "Assignments, campaign planning and hands-on tool practice",
    projects: "Live-style projects across SEO, ads, social and websites",
    overview:
      "A complete digital marketing course designed for learners who want practical skills rather than theory-only classes. You will learn how websites, search, social media, paid ads, content, analytics and AI tools work together to generate visibility, leads and growth.",
    summary:
      "Industry-focused training covering SEO, social media, Google Ads, Meta Ads, content, analytics, WordPress and AI tools.",
    modules: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads",
      "Content Marketing",
      "Email Marketing",
      "Google Analytics",
      "WordPress",
      "Website Development",
      "AI Tools",
      "Online Reputation Management",
    ],
    highlights: [
      "Built for students, freshers, professionals and business owners",
      "Hands-on modules used in real marketing work",
      "Portfolio-ready project practice",
      "Career and freelancing guidance",
    ],
    careerOpportunities: [
      "Digital Marketing Executive",
      "SEO Executive",
      "Social Media Executive",
      "Performance Marketing Executive",
      "Freelance Digital Marketer",
    ],
    curriculum: digitalMarketingCurriculum,
    ctaLabel: "View Course Details",
    featured: true,
  },
  {
    slug: "advanced-digital-marketing",
    title: "Advanced Digital Marketing",
    shortTitle: "Advanced Digital Marketing",
    category: "advanced",
    duration: "2–4 months",
    mode: "Intensive practical batches",
    level: "Advanced",
    certification: "Advanced course certificate on successful completion",
    practicalTraining: "Performance-focused assignments, audits and campaign optimisation",
    projects: "Advanced projects in SEO, paid media, funnels and analytics",
    overview:
      "An advanced programme for learners who already understand the basics and want deeper skills in performance marketing, conversion, analytics and AI-powered execution. The focus is on strategy, measurement and optimisation.",
    summary:
      "Go deeper into performance marketing, funnels, analytics, advanced SEO and AI-powered campaign work.",
    modules: [
      "Advanced SEO",
      "Performance Marketing",
      "Conversion Optimization",
      "Marketing Analytics",
      "Lead Generation",
      "Funnel Marketing",
      "Advanced Google Ads",
      "Advanced Meta Ads",
      "AI-powered marketing",
    ],
    highlights: [
      "Designed for working professionals and serious career switchers",
      "Emphasis on ROI, measurement and optimisation",
      "Campaign thinking used in agencies and growth teams",
    ],
    careerOpportunities: [
      "Performance Marketing Executive",
      "SEO Specialist",
      "Google Ads Specialist",
      "Meta Ads Specialist",
      "Digital Marketing Analyst",
    ],
    curriculum: [
      { title: "Advanced SEO", topics: ["Keyword clustering", "Technical audits", "Content systems", "Competitive analysis"] },
      { title: "Performance Marketing", topics: ["Media mix", "Attribution basics", "ROAS thinking", "Budget allocation"] },
      { title: "Conversion Optimization", topics: ["Landing page tests", "Funnel leaks", "Offer positioning", "UX signals"] },
      { title: "Marketing Analytics", topics: ["GA4 deep-dive", "Dashboards", "Event design", "Decision reports"] },
      { title: "Lead Generation & Funnels", topics: ["Lead magnets", "Nurture sequences", "Retargeting", "Sales-ready leads"] },
      { title: "Advanced Google Ads", topics: ["Search structure", "PMax thinking", "Quality Score", "Query mapping"] },
      { title: "Advanced Meta Ads", topics: ["Advantage+ vs manual", "Creative testing", "Audience strategy", "Scaling"] },
      { title: "AI-powered marketing", topics: ["Research workflows", "Creative iteration", "SEO assistance", "Reporting speed"] },
    ],
    ctaLabel: "Explore Advanced Course",
    featured: true,
  },
  {
    slug: "seo",
    title: "SEO Course",
    shortTitle: "SEO",
    category: "short",
    duration: "4–6 weeks",
    mode: "Short-term practical training",
    level: "Beginner",
    certification: "SEO course certificate on successful completion",
    practicalTraining: "Keyword research, on-page tasks and Search Console practice",
    projects: "Website SEO audit and optimisation plan",
    overview:
      "Learn search engine optimisation from the ground up — keyword research, on-page SEO, local SEO, technical basics and reporting. Built as a focused SEO course in Kolkata for learners who want search visibility skills.",
    summary: "Keyword research, on-page SEO, local SEO, technical basics and ranking-focused practice.",
    modules: ["Keyword research", "On-page SEO", "Local SEO", "Technical SEO basics", "Search Console", "Content SEO"],
    highlights: ["Practical audits", "Local SEO for Kolkata businesses", "Content and ranking workflow"],
    careerOpportunities: ["SEO Executive", "SEO Specialist", "Freelance SEO Consultant"],
    curriculum: [
      { title: "SEO Foundations", topics: ["How search works", "SERP features", "Ranking factors"] },
      { title: "Keyword Research", topics: ["Intent", "Tools", "Topic mapping"] },
      { title: "On-page & Content", topics: ["Titles", "Headings", "Internal links"] },
      { title: "Local & Technical SEO", topics: ["GBP", "Crawl issues", "Page experience"] },
    ],
    ctaLabel: "View Course Details",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing Course",
    shortTitle: "Social Media Marketing",
    category: "short",
    duration: "4–6 weeks",
    mode: "Short-term practical training",
    level: "Beginner",
    certification: "SMM course certificate on successful completion",
    practicalTraining: "Content calendars, page setup and campaign planning",
    projects: "Brand social strategy and content plan",
    overview:
      "Build practical social media marketing skills for Facebook, Instagram and related platforms. Learn profile optimisation, content planning, community, organic growth and how paid social connects to business goals.",
    summary: "Organic social strategy, content systems and platform-specific execution.",
    modules: ["Facebook", "Instagram", "Content calendars", "Community", "Reporting", "Creative planning"],
    highlights: ["Platform-specific practice", "Content systems", "Brand-building workflows"],
    careerOpportunities: ["Social Media Executive", "Content Marketing Executive"],
    curriculum: [
      { title: "Social Strategy", topics: ["Audience", "Positioning", "Platform choice"] },
      { title: "Content & Community", topics: ["Calendars", "Creatives", "Engagement"] },
      { title: "Growth & Reporting", topics: ["Insights", "KPIs", "Iteration"] },
    ],
    ctaLabel: "View Course Details",
  },
  {
    slug: "google-ads",
    title: "Google Ads Course",
    shortTitle: "Google Ads",
    category: "short",
    duration: "4–6 weeks",
    mode: "Short-term practical training",
    level: "Intermediate",
    certification: "Google Ads course certificate on successful completion",
    practicalTraining: "Campaign structure, keyword mapping and ads writing practice",
    projects: "Search campaign plan with keywords, ads and tracking checklist",
    overview:
      "A focused Google Ads course covering Search campaigns, keywords, ad copy, bidding, tracking and optimisation. Designed for learners who want performance marketing skills used by agencies and in-house teams.",
    summary: "Search campaigns, keywords, ads, bidding and conversion-focused optimisation.",
    modules: ["Search campaigns", "Keywords", "Ad copy", "Bidding", "Extensions", "Reporting"],
    highlights: ["Campaign structure practice", "Intent-based keywords", "Measurement mindset"],
    careerOpportunities: ["Google Ads Specialist", "Performance Marketing Executive"],
    curriculum: [
      { title: "Google Ads Foundations", topics: ["Account structure", "Campaign types", "Quality Score"] },
      { title: "Search Campaigns", topics: ["Keywords", "Match types", "Ads and assets"] },
      { title: "Optimisation", topics: ["Search terms", "Bids", "Landing pages"] },
    ],
    ctaLabel: "View Course Details",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads Course",
    shortTitle: "Meta Ads",
    category: "short",
    duration: "4–6 weeks",
    mode: "Short-term practical training",
    level: "Intermediate",
    certification: "Meta Ads course certificate on successful completion",
    practicalTraining: "Ads Manager walkthroughs, audience setup and creative testing plans",
    projects: "Facebook and Instagram ads campaign plan",
    overview:
      "Learn Meta Ads Manager for Facebook and Instagram advertising. Cover campaign objectives, audiences, creatives, placements, tracking and optimisation for leads and sales.",
    summary: "Facebook and Instagram advertising with audiences, creatives and optimisation.",
    modules: ["Ads Manager", "Campaign objectives", "Audiences", "Creatives", "Pixel basics", "Optimisation"],
    highlights: ["Creative testing", "Audience strategy", "Lead and traffic campaigns"],
    careerOpportunities: ["Meta Ads Specialist", "Performance Marketing Executive"],
    curriculum: [
      { title: "Meta Ads Foundations", topics: ["Business settings", "Objectives", "Structure"] },
      { title: "Audiences & Creatives", topics: ["Targeting", "Ad formats", "Testing"] },
      { title: "Performance", topics: ["Delivery", "Retargeting", "Reporting"] },
    ],
    ctaLabel: "View Course Details",
  },
  {
    slug: "wordpress",
    title: "WordPress Course",
    shortTitle: "WordPress",
    category: "short",
    duration: "3–5 weeks",
    mode: "Short-term practical training",
    level: "Beginner",
    certification: "WordPress course certificate on successful completion",
    practicalTraining: "Hands-on website and landing page builds",
    projects: "Marketing website or landing page on WordPress",
    overview:
      "Learn WordPress as a marketer: pages, blogs, themes, plugins, forms and landing pages. Useful for digital marketers who need to launch and maintain websites without waiting on a developer for every change.",
    summary: "Build marketing websites, blogs and landing pages with WordPress.",
    modules: ["Setup", "Themes", "Plugins", "Pages", "Forms", "SEO basics"],
    highlights: ["Marketer-friendly CMS skills", "Landing pages", "Blog publishing"],
    careerOpportunities: ["WordPress Developer", "Digital Marketing Executive"],
    curriculum: [
      { title: "WordPress Setup", topics: ["Admin", "Themes", "Plugins"] },
      { title: "Pages & Content", topics: ["Pages", "Posts", "Menus"] },
      { title: "Marketing Sites", topics: ["Forms", "Landing pages", "Speed basics"] },
    ],
    ctaLabel: "View Course Details",
  },
  {
    slug: "content-marketing",
    title: "Content Marketing Course",
    shortTitle: "Content Marketing",
    category: "short",
    duration: "3–5 weeks",
    mode: "Short-term practical training",
    level: "Beginner",
    certification: "Content marketing certificate on successful completion",
    practicalTraining: "Brief writing, blog outlines and campaign content plans",
    projects: "Content strategy and sample assets",
    overview:
      "Learn how to plan and create content that supports SEO, social media and lead generation. Covers research, structure, copy, calendars and how content supports the customer journey.",
    summary: "Plan and create content for SEO, social and conversion.",
    modules: ["Research", "Blog writing", "Copywriting", "Calendars", "Distribution", "Measurement"],
    highlights: ["SEO-aware writing", "Campaign content", "Distribution planning"],
    careerOpportunities: ["Content Marketing Executive", "Freelance Content Marketer"],
    curriculum: [
      { title: "Content Strategy", topics: ["Audience", "Topics", "Funnel content"] },
      { title: "Creation", topics: ["Blogs", "Ads copy", "Social posts"] },
      { title: "Distribution", topics: ["SEO", "Social", "Email"] },
    ],
    ctaLabel: "View Course Details",
  },
  {
    slug: "ai-for-digital-marketing",
    title: "AI for Digital Marketing",
    shortTitle: "AI for Digital Marketing",
    category: "short",
    duration: "2–4 weeks",
    mode: "Short-term practical training",
    level: "All Levels",
    certification: "AI marketing certificate on successful completion",
    practicalTraining: "Prompt workflows for research, content, SEO and ads",
    projects: "AI-assisted campaign and content workflow",
    overview:
      "Learn how marketers use AI tools such as ChatGPT for research, content drafts, SEO support, creative variation and faster reporting — with human review and strategy still in control.",
    summary: "Use AI tools for research, content, SEO support and marketing workflows.",
    modules: ["Prompting", "Content assistance", "SEO support", "Creative variation", "Research", "Workflow design"],
    highlights: ["Practical AI workflows", "Quality control", "Speed without losing strategy"],
    careerOpportunities: ["Digital Marketing Executive", "Content Marketing Executive", "Marketing Consultant"],
    curriculum: [
      { title: "AI for Marketers", topics: ["Use cases", "Limits", "Review process"] },
      { title: "Workflows", topics: ["Research", "Content", "SEO and ads support"] },
    ],
    ctaLabel: "View Course Details",
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getFlagshipCourses() {
  return courses.filter((course) => course.category !== "short");
}

export function getShortCourses() {
  return courses.filter((course) => course.category === "short");
}
