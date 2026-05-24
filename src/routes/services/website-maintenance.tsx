import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/website-maintenance")({
  head: () => ({
    meta: [
      { title: "Website Maintenance Services in Ahmedabad | Webrion" },
      {
        name: "description",
        content:
          "Monthly website maintenance, security patching, performance monitoring, and content updates for business websites in Ahmedabad and India.",
      },
      { name: "keywords", content: "website maintenance services, WordPress maintenance, website support Ahmedabad" },
      { property: "og:title", content: "Website Maintenance Services | Webrion" },
      { property: "og:description", content: "Monthly maintenance plans for business websites — security, performance, content." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://webrionservices.vercel.app/services/website-maintenance" },
      { property: "og:image", content: "https://webrionservices.vercel.app/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://webrionservices.vercel.app/services/website-maintenance" }],
  }),
  component: () => (
    <ServicePage
      slug="website-maintenance"
      tagline="Website maintenance & support"
      title="Website Maintenance Services"
      intro="Websites need ongoing care — security patches, plugin updates, content edits, performance monitoring, broken-link fixes, and SEO drift correction. Our monthly maintenance plans handle all of it so your site stays fast, secure, and ranking."
      problemHeading="What happens to neglected websites"
      problem="A website left alone for a year typically picks up: 5-15 broken links, 3-5 outdated plugins (often with known vulnerabilities), a 20-30% page speed regression, and 10-25 image files that have lost their alt text or compression. None of these are catastrophic individually — together they tank rankings and create a security incident waiting to happen."
      whatYouGet={[
        "Monthly security patches (WordPress core, plugins, npm dependencies)",
        "Daily off-site backups with 30-day retention",
        "Uptime monitoring with SMS + email alerts",
        "Monthly performance audit (Core Web Vitals)",
        "Broken link scan and 301 redirect fixes",
        "Content updates: text, images, new pages (up to plan hours)",
        "SEO drift monitoring (rankings, indexation, schema validity)",
        "Quarterly strategy call with recommendations",
      ]}
      process={[
        { title: "Onboarding", body: "We audit your current site, document credentials securely, install monitoring, and set up backups." },
        { title: "Monthly Cadence", body: "Updates happen on a fixed weekly schedule. You get a monthly report listing every change, time used, and recommended actions." },
        { title: "On-demand Requests", body: "Submit content updates or fixes via email or our client portal. Standard response within 24 business hours." },
        { title: "Quarterly Review", body: "Every quarter we run a deep audit and recommend strategic improvements: redesigns, new pages, performance work." },
      ]}
      outcomes={[
        { metric: "99.9%", label: "Avg uptime maintained" },
        { metric: "<24h", label: "Standard support response" },
        { metric: "₹6k+", label: "Monthly plans starting" },
        { metric: "Month-to-month", label: "No long contracts" },
      ]}
      faqs={[
        { q: "Do you maintain websites you didn't build?", a: "Yes. We onboard sites built on WordPress, Shopify, Webflow, custom React, and most modern stacks. A discovery audit identifies any technical debt before we start." },
        { q: "What's not included?", a: "Major redesigns, new feature builds beyond plan hours, third-party software licenses, and hosting fees. We quote those separately." },
        { q: "Will you respond to emergencies outside business hours?", a: "Yes for site-down emergencies on Premium plans. Standard plans cover business hours (Mon-Fri, 9am-6pm IST)." },
        { q: "Can I cancel anytime?", a: "Yes. Month-to-month with no cancellation fee. We hand off all credentials, backups, and documentation if you leave." },
      ]}
      relatedServices={[
        { href: "/services/seo-services", label: "SEO Services" },
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/web-application-development", label: "Web Application Development" },
      ]}
      relatedBlogs={[
        { slug: "technical-seo-checklist", title: "Technical SEO Checklist for Business Websites" },
        { slug: "fast-website-speed-seo", title: "How Fast Website Speed Impacts SEO" },
      ]}
    />
  ),
});
