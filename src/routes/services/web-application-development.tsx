import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/web-application-development")({
  head: () => ({
    meta: [
      { title: "Web Application Development Company in India | Webrion" },
      {
        name: "description",
        content:
          "Web application development for SaaS, internal tools, and customer portals. React, Node, TypeScript — built for production from day one.",
      },
      { name: "keywords", content: "web application development company, SaaS development India, custom web app, React app development" },
      { property: "og:title", content: "Web Application Development | Webrion" },
      { property: "og:description", content: "React + Node web apps and SaaS MVPs built for production." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://webrionservices.vercel.app/services/web-application-development" },
      { property: "og:image", content: "https://webrionservices.vercel.app/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://webrionservices.vercel.app/services/web-application-development" }],
  }),
  component: () => (
    <ServicePage
      slug="web-application-development"
      tagline="Web app & SaaS development"
      title="Web Application Development"
      intro="Webrion builds production-grade web applications: SaaS MVPs, internal business tools, customer portals, dashboards, and B2B platforms. We use a battle-tested React + TypeScript + Postgres stack so your app is fast, reliable, and easy to hire engineers for."
      problemHeading="Why most MVPs become unmaintainable in 6 months"
      problem="The MVP that ships fast usually rots fast. No types, no tests, business logic spread across the frontend and backend, a database schema that needs a migration to fix. Six months in, every new feature breaks two existing ones. We build MVPs that scale — TypeScript end-to-end, sensible architecture from day one, and infrastructure that doesn't need a rewrite at 1,000 users."
      whatYouGet={[
        "Product discovery and feature scoping with timeline & cost",
        "TypeScript end-to-end (React + Node/Bun)",
        "Postgres database with migrations, not free-text JSON",
        "Authentication, roles, and authorization done right (no client-side admin checks)",
        "API documentation (OpenAPI or tRPC types)",
        "CI/CD pipeline, staging environment, error tracking",
        "Test coverage on critical business logic",
        "Deployed to Vercel + managed Postgres (Supabase, Neon, or AWS RDS)",
      ]}
      process={[
        { title: "Discovery", body: "1-2 week paid discovery with feature mapping, technical architecture doc, and fixed-price proposal." },
        { title: "MVP Sprint", body: "2-week sprints with demos every Friday. You see working software, not slides." },
        { title: "Iterate", body: "Based on user feedback, we ship continuously to staging. Promote to production when you're ready." },
        { title: "Scale", body: "Performance optimization, observability, and team handoff if you want to bring engineering in-house." },
      ]}
      techStack={["React", "TanStack Start", "Next.js", "TypeScript", "Node.js / Bun", "PostgreSQL", "Supabase", "tRPC", "Prisma", "Tailwind CSS", "Vercel", "Sentry"]}
      outcomes={[
        { metric: "12 wk", label: "Typical MVP timeline" },
        { metric: "₹2.5L+", label: "Starting price" },
        { metric: "85%+", label: "Test coverage on business logic" },
        { metric: "0", label: "Lock-in to a proprietary platform" },
      ]}
      faqs={[
        { q: "Can you build my SaaS MVP in a month?", a: "For tightly-scoped MVPs (auth + 3-5 core features) — yes. We've shipped 4-week MVPs. Six-week timelines are more common and produce better quality." },
        { q: "Do you use AI or vibe-coding to build apps?", a: "We use AI tools to accelerate routine work. We don't ship 'AI-generated' apps without review — production code goes through human architecture decisions, code review, and testing." },
        { q: "Will I own the source code?", a: "Yes. Code is yours, hosted in your GitHub from day one. No vendor lock-in." },
        { q: "What about Stripe / Razorpay payments and subscriptions?", a: "Standard part of every SaaS build — checkout, webhooks, subscription management, dunning, GST invoicing for Indian customers." },
        { q: "Do you offer post-launch engineering retainers?", a: "Yes. Most clients move to a 20-40 hour/month retainer for new features and ongoing improvements after MVP launch." },
      ]}
      relatedServices={[
        { href: "/services/ui-ux-design", label: "UI/UX Design" },
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/website-maintenance", label: "Website Maintenance" },
      ]}
      relatedBlogs={[
        { slug: "custom-website-vs-wordpress-templates", title: "Custom Website vs WordPress Templates" },
        { slug: "fast-website-speed-seo", title: "How Fast Website Speed Impacts SEO" },
      ]}
    />
  ),
});
