import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [
      { title: "Web Development Company in Ahmedabad | Webrion" },
      {
        name: "description",
        content:
          "Webrion is a web development company in Ahmedabad building fast, SEO-friendly custom websites for startups and businesses across India. Fixed pricing from ₹12,999.",
      },
      { name: "keywords", content: "web development company in Ahmedabad, custom website development, responsive website design, React developer India" },
      { property: "og:title", content: "Web Development Company in Ahmedabad | Webrion" },
      { property: "og:description", content: "Custom website development by an Ahmedabad-based agency. Fast, SEO-friendly, conversion-focused." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://webrionservices.vercel.app/services/web-development" },
      { property: "og:image", content: "https://webrionservices.vercel.app/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://webrionservices.vercel.app/services/web-development" }],
  }),
  component: () => (
    <ServicePage
      slug="web-development"
      tagline="Web development company in Ahmedabad"
      title="Custom Website Development"
      intro="We build production-grade business websites and marketing sites for companies across Ahmedabad and India. Every site we ship is mobile-first, SEO-optimized, hits Core Web Vitals out of the box, and is built on a stack you actually control — not a templated CMS prison."
      problemHeading="Why most business websites underperform"
      problem="The typical Indian business website is built on a bloated theme, hosted on shared infrastructure, and ships 1.5MB of JavaScript before content appears. The result: 4-6 second load times, poor Google rankings, and conversion rates well below industry benchmark. Webrion ships sites that load in under 1.5s, rank, and convert — without paying enterprise-agency prices."
      whatYouGet={[
        "Custom design system tailored to your brand (no template look)",
        "Mobile-first responsive layouts tested across 10+ device sizes",
        "Core Web Vitals 'Good' on day one (LCP < 2.5s, INP < 200ms, CLS < 0.1)",
        "Semantic HTML5, schema markup, sitemap, robots.txt",
        "Headless CMS so non-technical staff can edit content",
        "Analytics, conversion tracking, and Search Console setup",
        "Deployment on Vercel or Netlify with global CDN",
        "30 days of post-launch bug fixes included",
      ]}
      process={[
        { title: "Discovery", body: "We map your audience, conversion goals, and content scope. You receive a fixed-price proposal within 2 business days." },
        { title: "Design", body: "High-fidelity Figma designs across mobile, tablet, and desktop. Two revision rounds included." },
        { title: "Build", body: "Frontend in React/TanStack Start, headless CMS for content, deployed continuously to a staging URL." },
        { title: "Launch", body: "Performance audit, SEO checklist, DNS migration, and a soft launch window with monitoring." },
      ]}
      techStack={["React", "TanStack Start", "Next.js", "TypeScript", "Tailwind CSS", "Sanity / Payload CMS", "Vercel", "Cloudflare"]}
      outcomes={[
        { metric: "1.4s", label: "Average LCP we ship at" },
        { metric: "98", label: "Average Lighthouse SEO score" },
        { metric: "2-4 wk", label: "Typical delivery for brochure sites" },
        { metric: "₹12,999", label: "Starting price" },
      ]}
      faqs={[
        { q: "How is Webrion different from other Ahmedabad web development companies?", a: "We don't use page-builder themes. Every site is custom-coded on a modern React stack, ships with Core Web Vitals in the green, and includes technical SEO work most agencies treat as upsells." },
        { q: "Do you work with clients outside Ahmedabad?", a: "Yes. About 40% of our work is for clients in Mumbai, Bangalore, Delhi NCR, the UAE, and the UK. We run fully remote sprints with weekly demo calls." },
        { q: "Can I edit the website myself after launch?", a: "Yes. We integrate a headless CMS (typically Sanity or Payload) so your team can edit text, images, and add new pages without touching code." },
        { q: "What if I already have a website?", a: "We do redesigns and rebuilds frequently. We'll audit the current site, preserve SEO equity through proper 301 redirects, and migrate content with zero ranking loss." },
        { q: "Do you provide hosting?", a: "We deploy to Vercel or Netlify on your account so you own the infrastructure. Hosting costs typically run $0-20/month for most business sites." },
      ]}
      relatedServices={[
        { href: "/services/seo-services", label: "SEO Services" },
        { href: "/services/ecommerce-development", label: "Ecommerce Development" },
        { href: "/services/ui-ux-design", label: "UI/UX Design" },
      ]}
      relatedBlogs={[
        { slug: "website-development-cost-ahmedabad", title: "How Much Does Website Development Cost in Ahmedabad?" },
        { slug: "custom-website-vs-wordpress-templates", title: "Custom Website vs WordPress Templates" },
        { slug: "fast-website-speed-seo", title: "How Fast Website Speed Impacts SEO" },
      ]}
    />
  ),
});
