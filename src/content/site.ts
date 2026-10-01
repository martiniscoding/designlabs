/**
 * All copy and data for the site.
 *
 * ⚠ DEMO CONTENT — DesignLabs is a fictional studio built as a portfolio
 * piece. Projects, outcomes, testimonials and numbers are invented. See README.
 */
export const DEMO_CONTENT = true;

export const site = {
  name: "DesignLabs",
  tagline: "Design for products that are better than they look",
  email: "theo@plumbline.studio",
  booking: "https://cal.com/plumbline/intro",
};

export const nav: {
  id: string;
  label: string;
  href: string;
  /** True when the item is a section of the home page, not its own route. */
  section?: boolean;
}[] = [
  { id: "home", label: "Home", href: "/#home", section: true },
  { id: "work", label: "Work", href: "/work" },
  { id: "pricing", label: "Pricing", href: "/pricing" },
];

export const hero = {
  /* One entry per line. The full stop after the last line is set in the
     accent by the component. */
  headline: ["Design for products", "better than they look"],
  sub:
    "Product UI, brand systems and launch sites for dev tools and B2B " +
    "software. One designer, who wrote production code for six years.",
  primary: { label: "Book a call", href: "https://cal.com/plumbline/intro" },
  secondary: { label: "See the work", href: "#work" },
};

/**
 * The client strip under the hero. Slugs point into works.ts, so the names
 * can never drift from the portfolio, and each one needs a matching mark at
 * /public/logos/<slug>.png.
 */
export const trustedBy = {
  label: "Trusted by",
  clients: ["goroam", "fincrux", "ryne-ai", "volnex", "replizz-ai", "chatdoc"],
};

export const problem = {
  eyebrow: "Where it goes wrong",
  lead: "You shipped something genuinely hard. Then you sent the link to an investor, they looked at it for about nine seconds, and priced it like a side project.",
  prefix: "There's a word for it —",
  word: "UNDERSOLD",
  bullets: ["Not the engineering", "Not the pricing", "The nine seconds"],
  close: {
    before: "A product that works this well should not have to argue for itself. It should ",
    marked: "read as serious",
    after: " on sight.",
  },
};

export const services = [
  { title: "Product UI", body: "Dashboards, settings, onboarding — the screens that decide whether people stay." },
  { title: "Design systems", body: "Tokens, components and docs your engineers pull straight into the codebase." },
  { title: "Brand systems", body: "A mark, a palette and typography that survive contact with a real product." },
  { title: "Launch sites", body: "One page that explains what you built and asks for the meeting." },
  { title: "Icon sets", body: "Drawn to your grid and stroke, exported as an npm package." },
  { title: "Pricing pages", body: "The page founders postpone for a year. It usually pays for the project." },
];

/** DEMO_CONTENT: invented projects, original SVG covers, no stock. */
export const work = [
  { id: "ravel", client: "Ravel", what: "CI observability for monorepos", did: "Product UI, design system", outcome: "Set-up drop-off fell from 41% to 27%", year: "2025" },
  { id: "ledgerpost", client: "Ledgerpost", what: "Reconciliation for B2B payments", did: "Brand system, launch site", outcome: "Closed a seed round eight weeks after launch", year: "2025" },
  { id: "bracket", client: "Bracket", what: "Feature flags for small teams", did: "Icon set, product UI", outcome: "Support tickets about the flag editor halved", year: "2024" },
  { id: "northbound", client: "Northbound", what: "Warehouse ops for data teams", did: "Launch site, pricing page", outcome: "Demo requests up 2.4× in the first quarter", year: "2024" },
];

export const pricing = {
  tabs: [
    {
      id: "site",
      label: "Launch site",
      name: "Launch site",
      price: 6400,
      timeline: "15–20 days",
      addons: [
        { id: "build", label: "Add development", note: "Next.js, deployed", price: 4200 },
        { id: "extra", label: "Extra pages", price: 800, unit: "/page" },
        { id: "motion", label: "Motion pass", price: 1400 },
      ],
      features: [
        "Messaging and copy drafted with you",
        "Desktop, tablet, mobile responsive",
        "Figma file, yours to keep",
        "No limit on revisions",
        "Updates every 48 hours",
      ],
    },
    {
      id: "brand",
      label: "Branding",
      name: "Brand system",
      price: 11500,
      timeline: "20–25 days",
      addons: [
        { id: "site", label: "Add launch site", price: 5400 },
        { id: "deck", label: "Pitch deck", price: 3000, unit: "/15 slides" },
      ],
      features: [
        "Positioning session and naming review",
        "Primary mark plus two lockups",
        "Palette, type scale and usage rules",
        "Social, deck and doc templates",
        "One-page guidelines, not a 60-page PDF",
      ],
    },
    {
      id: "ui",
      label: "Product UI",
      name: "Interface project",
      price: 14000,
      timeline: "30–40 days",
      addons: [
        { id: "system", label: "Design system in code", price: 4500 },
        { id: "icons", label: "Icon set", price: 2200, unit: "/40 icons" },
      ],
      features: [
        "Audit of the current product, written up",
        "Up to 20 screens, desktop and mobile",
        "Interactive prototype for the core flow",
        "Component library in Figma",
        "Two rounds of revision, then handoff",
      ],
    },
  ],
  retainer: {
    name: "DesignLabs retainer",
    price: 8900,
    unit: "per month",
    features: [
      "Desktop, tablet, mobile responsive",
      "Figma file, yours to keep",
      "Weekly call, daily replies in your Slack",
      "Pause once for up to a month, no charge",
    ],
    taskLabel: "Active tasks",
    perTask: 2600,
    includes: [
      "Product UI",
      "Design systems",
      "Brand systems",
      "Launch sites",
      "Icon sets",
      "Pricing pages",
      "Docs design",
    ],
  },
};

/**
 * Real client reviews, verbatim from Build Labs (buildlabs.agency), the
 * owner's development company. Quotes are unedited — keep them that way.
 * `highlight` must be an exact substring of `quote`.
 */
export const testimonials = [
  { quote: "Buildlabs helped Skanaus deliver a smooth and intuitive mobile experience. The UI is sleek, onboarding is seamless, and the app performs flawlessly on all devices.", highlight: "The UI is sleek, onboarding is seamless", name: "Corey Payne", role: "Founder, Skanaus App", photo: "/testimonial/corey.jpeg" },
  { quote: "Unicapp App's mobile experience improved dramatically. Buildlabs delivered intuitive navigation, smooth onboarding flows, and a polished interface our users love.", highlight: "a polished interface our users love", name: "Prahlad", role: "Founder, Unicapp App", photo: "/testimonial/prahlad.jpeg" },
  { quote: "Ryne AI's website now engages users like never before. Buildlabs crafted a polished, interactive interface that feels intuitive and visually stunning across devices.", highlight: "visually stunning across devices", name: "Arefin", role: "COO, Ryne AI", photo: "/testimonial/Arefin.webp" },
  { quote: "Our mobile apps now feel premium and engaging thanks to Buildlabs. The attention to detail in design and performance is exceptional.", highlight: "The attention to detail in design and performance is exceptional", name: "Olivia Martinez", role: "Marketing Manager", photo: "/testimonial/olivia.jpeg" },
];

export const testimonialsIntro = {
  /* Two non-adjacent accent words; `underline` draws the hand-drawn swoosh. */
  title: [
    { text: "What", accent: true },
    { text: " our " },
    { text: "customers", accent: true, underline: true },
    { text: " say" },
  ],
  note: "unedited, promise",
  video: "/apps/testimonialsVideo.mp4",
};

export const workflow = {
  eyebrow: "Process",
  /* Two non-adjacent accent words, one per line. */
  title: [
    [{ text: "From idea to " }, { text: "launch,", accent: true }],
    [{ text: "in six clear " }, { text: "steps", accent: true }],
  ],
  steps: [
    {
      id: "discovery",
      tab: "Discovery",
      title: "Discovery & research",
      body: "We start by understanding the business properly: how your buyers think, and what is stopping them from choosing you today.",
      outputs: ["Discovery questionnaire", "Competitive audit"],
    },
    {
      id: "strategy",
      tab: "Strategy",
      title: "Positioning & structure",
      body: "One clear sentence about what you do, then every page and section ordered around the question a buyer is asking at that moment.",
      outputs: ["Messaging doc", "Sitemap"],
    },
    {
      id: "wireframes",
      tab: "Wireframes",
      title: "Wireframes",
      body: "Grey boxes and real words. We agree on hierarchy and flow before a single colour is chosen, so styling never hides a structural problem.",
      outputs: ["Clickable wireframes", "Copy in context"],
    },
    {
      id: "design",
      tab: "Visual design",
      title: "Visual design",
      body: "Type, colour and components, hung straight. Every screen is designed at desktop, tablet and mobile, in a Figma file you keep.",
      outputs: ["Figma file", "Component library"],
    },
    {
      id: "build",
      tab: "Development",
      title: "Development",
      body: "Built in Next.js by the same person who designed it, so nothing is lost in handoff. Updates land on a preview link every 48 hours.",
      outputs: ["Preview deploys", "Your repo, your code"],
    },
    {
      id: "launch",
      tab: "QA & launch",
      title: "QA & launch",
      body: "Tested on real devices, tuned until it scores in the green, then shipped. Two weeks of fixes after launch are included.",
      outputs: ["Device QA", "Launch checklist"],
    },
  ],
} as const;

export const founder = {
  name: "Theo Ansell",
  role: "Designer, and the whole studio",
};

export const pricingTeaser = {
  eyebrow: "Pricing",
  title: "Fixed price, written down before we start.",
  body:
    "Three project shapes and one retainer, with the numbers on the page. " +
    "No discovery call needed to find out what it costs.",
  cta: { label: "See pricing", href: "/pricing" },
};

export const finalNote = {
  eyebrow: "Final note",
  paragraphs: [
    { text: "Thanks for reading this far. Last thing I want to add is this." },
    {
      text: "DesignLabs is for founders who care how their product is read in the first nine seconds, and about what ",
      marked: "good design",
      after: " does to conversion and trust.",
    },
    { text: "If that's you, you will not have to think about how the product looks again. That is the promise." },
    { text: "You will not be handed to anyone. The person on the call is the person doing the work." },
  ],
  cta: { label: "Book a call", href: "https://cal.com/plumbline/intro" },
};

/**
 * FAQ section on the home page.
 *
 * ⚠ PLACEHOLDER RATINGS — the platforms, scores and review counts below are
 * stand-ins. Replace them with the studio's real profiles (and add `href`s)
 * before this ships, or delete the entries to hide the cards.
 */
export const faq = {
  title: ["Frequently Asked", "Questions"],
  ratings: [
    { id: "upwork", score: "5.0", reviews: 16, href: "" },
    { id: "dribbble", score: "5.0", reviews: 10, href: "" },
    { id: "contra", score: "5.0", reviews: 4, href: "" },
  ],
  primary: { label: "Start a Project", href: site.booking },
  secondary: { label: "Work Portfolios", href: "/work" },
  items: [
    {
      q: `What is ${site.name}?`,
      a: `${site.name} is a design studio for products that are better than they look. We design and build the interface, the brand and the launch site, so the first impression matches the engineering behind it.`,
    },
    {
      q: "What services do you offer?",
      a: "Product UI for web and mobile apps, design systems, brand systems, launch sites and pricing pages. Take one as a fixed-price project, or mix them on a monthly retainer.",
    },
    {
      q: "How do we get started?",
      a: "Book a call or send a message. We talk through what you are building and what is in the way, then you get a fixed scope, price and timeline before any work starts.",
    },
    {
      q: "How will we collaborate?",
      a: "You get an update every 48 hours and the Figma file is yours from day one. Retainer clients also get a weekly call and daily replies in their own Slack.",
    },
    {
      q: "How long does a project typically take?",
      a: "A launch site takes 15–20 days, a brand system 20–25 days, and a product UI project 30–40 days. You get the exact timeline with the scope.",
    },
    {
      q: "How much does it cost?",
      a: "Prices are fixed and public: launch sites, brand systems and product UI each have a set price, plus a monthly retainer.",
      link: { label: "See pricing", href: "/pricing" },
    },
  ],
};

/**
 * The "how we work" bento on the home page. Each card's illustration is drawn
 * in Impact.tsx and keyed to the `id` below.
 *
 * ⚠ `projects` is the count shown in the Proven Experience card — keep it in
 * step with /src/content/works.ts (or with the real number, if the portfolio
 * shows only a selection).
 */
export const impact = {
  /* Two non-adjacent accent words. */
  heading: [
    { text: "Design", accent: true },
    { text: " Decisions Grounded In " },
    { text: "Business", accent: true },
    { text: " Impact" },
  ],
  intro:
    "A transparent process, developer-ready systems, and direct collaboration — so ideas move smoothly from concept to shipped product.",
  projects: "18+",
  cards: [
    {
      id: "collab",
      title: "Design Directly with Designers",
      body: "You work directly with designers, no handoffs, no middle layers, no delays.",
    },
    {
      id: "updates",
      title: "Real-Time Project Updates",
      body: "You get clear, real-time progress with regular updates and shared visibility.",
    },
    {
      id: "handoff",
      title: "Built for Seamless Execution",
      body: "Every design is structured, documented, and ready for smooth development handoff.",
      featured: true,
    },
    {
      id: "tools",
      title: "Industry-Leading Design Tools",
      body: "We design with modern, industry-leading tools trusted by high-performing teams.",
    },
    {
      id: "support",
      title: "Ongoing & Dependable Support",
      body: "We stay involved after delivery to support iterations, fixes, and future needs.",
    },
    {
      id: "proven",
      title: "Proven Experience",
      body: "We've delivered 18+ projects for startups and growing products across industries.",
    },
    {
      id: "nocode",
      title: "No-Code Development",
      body: "We use no-code and low-code tools to ship faster without sacrificing scalability.",
    },
  ],
} as const;

/**
 * The services grid. Cards are title-only — the illustration carries the
 * meaning — and each `id` maps to a drawing in Services.tsx.
 */
export const serviceGrid = {
  eyebrow: "Services",
  /* `accent` marks the words that take the brand colour. */
  heading: [
    { text: "From a rough idea to a shipped product — designed to " },
    { text: "engage", accent: true },
    { text: " and built to " },
    { text: "convert", accent: true },
    { text: "." },
  ],
  intro:
    "From early-stage startups to scaling teams, we design and build the product, the site, and the system that holds them together.",
  cards: [
    { id: "saas", title: "SaaS Product Design" },
    { id: "website", title: "Website Design" },
    { id: "apps", title: "Web & Mobile Apps" },
    { id: "system", title: "Design Systems" },
  ],
};

export const projects = {
  eyebrow: "Projects",
  /* Accent-highlighted words are rendered in the studio orange. */
  title: [
    [
      { text: "Turning " },
      { text: "Strategy", accent: true },
      { text: " Into" },
    ],
    [
      { text: "Real-World " },
      { text: "Results", accent: true },
    ],
  ],
  lead:
    "A selection of projects where clear thinking, strong design, and " +
    "business goals come together to deliver measurable impact.",
  cta: { label: "See All Projects", href: "/work" },
  /* Six works, each tagged with the kind of project it was. */
  items: [
    { slug: "fincrux", tag: "Dashboard Design" },
    { slug: "pillo", tag: "Health Tracker App" },
    { slug: "unicapp", tag: "Delivery App" },
    { slug: "tessact-ai", tag: "Agency Landingpage" },
    { slug: "fabhotels", tag: "Booking Landingpage" },
    { slug: "chatdoc", tag: "Dashboard Design" },
  ],
};

/**
 * The footer, which carries the last call to action. `clients` are slugs into
 * works.ts whose marks sit inline in the heading — each needs a logo at
 * /public/logos/<slug>.png.
 */
export const footer = {
  heading: ["Turning rough ideas into", "products"],
  blurb: "We design and build the product, the site, and the system that holds them together.",
  cta: { label: "Schedule a Call", href: site.booking },
  clients: ["fincrux", "ryne-ai", "chatdoc", "volnex"],
};
