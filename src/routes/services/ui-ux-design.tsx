import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/ui-ux-design")({
  head: () => ({
    meta: [
      { title: "UI UX Design Agency in Ahmedabad | Webrion" },
      {
        name: "description",
        content:
          "UI UX design agency building research-led interfaces for web, mobile, and SaaS. Wireframes, design systems, and prototypes that ship.",
      },
      { name: "keywords", content: "UI UX design agency, UI UX design Ahmedabad, product design India, web design company" },
      { property: "og:title", content: "UI UX Design Agency | Webrion" },
      { property: "og:description", content: "Research-led UI/UX design for web, mobile, and SaaS products." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://webrionservices.vercel.app/services/ui-ux-design" },
      { property: "og:image", content: "https://webrionservices.vercel.app/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://webrionservices.vercel.app/services/ui-ux-design" }],
  }),
  component: () => (
    <ServicePage
      slug="ui-ux-design"
      tagline="UI/UX design agency"
      title="UI/UX Design for Web, Mobile & SaaS"
      intro="Webrion's design team works with founders and product managers to design interfaces that are clean, accessible, and grounded in real user research. We don't ship Dribbble-pretty mockups that fail in production — every screen we deliver has been validated against your actual users and edge cases."
      problemHeading="Why beautiful designs often fail to convert"
      problem="Most agency design work optimizes for the pitch deck, not the user. Designers compete on visual flair, then engineering rebuilds half the screens because flows weren't thought through. The result: missed launches, expensive rework, and interfaces that look great in screenshots but frustrate real users. Our design process is built around shipping — research first, design system second, screens last."
      whatYouGet={[
        "User research and journey mapping",
        "Information architecture and wireframes",
        "Hi-fi designs across mobile, tablet, desktop",
        "Component-based design system in Figma",
        "Interactive prototypes for user testing",
        "Accessibility audit (WCAG 2.2 AA)",
        "Engineering handoff with specs and tokens",
        "Two structured revision rounds per phase",
      ]}
      process={[
        { title: "Research", body: "Stakeholder interviews, competitor teardowns, and (if traffic exists) heatmap and session recording analysis." },
        { title: "Wireframe", body: "Low-fi structures for every key screen, validated with you before pixels." },
        { title: "Design System", body: "Tokens, components, and patterns — designed once, used everywhere." },
        { title: "Hi-Fi & Prototype", body: "Polished screens and clickable prototypes. We test these with 5-7 users before engineering starts." },
      ]}
      techStack={["Figma", "FigJam", "Maze", "Hotjar", "Storybook handoff", "Tailwind tokens", "Lucide icons"]}
      outcomes={[
        { metric: "WCAG 2.2", label: "Accessibility we design to" },
        { metric: "+22%", label: "Avg conversion lift on redesigns" },
        { metric: "4-8 wk", label: "Typical design phase" },
        { metric: "₹60k+", label: "Starting price" },
      ]}
      faqs={[
        { q: "Do you only design, or can you build too?", a: "Both. Most clients hire us for design + development as a single engagement, which removes the messy handoff problem. We also work design-only for clients with in-house engineering." },
        { q: "Will I own the Figma files?", a: "Yes. You own the design system, components, and all source files." },
        { q: "How do you handle dark mode and theming?", a: "Every design system we build includes light + dark mode from day one using semantic color tokens, not hard-coded hex values." },
        { q: "Do you do mobile app design?", a: "Yes — iOS and Android, native or React Native. We design to platform conventions rather than forcing one set of patterns across both." },
        { q: "Can you redesign just one section of my product?", a: "Yes. Focused redesigns of high-impact flows (onboarding, checkout, dashboard) are some of our highest-ROI engagements." },
      ]}
      relatedServices={[
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/web-application-development", label: "Web Application Development" },
        { href: "/services/ecommerce-development", label: "Ecommerce Development" },
      ]}
      relatedBlogs={[
        { slug: "ui-ux-design-trends-2026", title: "Modern UI UX Design Trends in 2026" },
        { slug: "increase-website-leads-design", title: "How to Increase Website Leads Through Better Design" },
      ]}
    />
  ),
});
