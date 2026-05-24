import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/seo-services")({
  head: () => ({
    meta: [
      { title: "SEO Services India | Technical, Local & On-Page SEO Agency — Webrion" },
      {
        name: "description",
        content:
          "SEO agency in Ahmedabad delivering technical SEO, local SEO, and content optimisation that ranks. Transparent monthly reporting, no lock-in contracts. Starting ₹25,000/mo.",
      },
      {
        name: "keywords",
        content:
          "SEO agency India, SEO services Ahmedabad, local SEO India, technical SEO optimisation, on-page SEO, content SEO, Google ranking India",
      },
      { property: "og:title", content: "SEO Services India | Webrion — Ahmedabad SEO Agency" },
      {
        property: "og:description",
        content:
          "Technical, local, and on-page SEO services from an Ahmedabad-based agency. No lock-in. Transparent reporting.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://webrionservices.vercel.app/services/seo-services",
      },
      { property: "og:image", content: "https://webrionservices.vercel.app/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://webrionservices.vercel.app/services/seo-services",
      },
    ],
  }),
  component: () => (
    <ServicePage
      slug="seo-services"
      tagline="SEO agency in India"
      title="SEO Services That Move Rankings"
      intro="Webrion runs technical SEO, local SEO, and content optimisation for businesses across India and internationally. We diagnose what's actually blocking your rankings — typically crawl issues, weak internal linking, slow page experience, and content misaligned with commercial intent — then ship fixes that compound month over month. No vanity reports. No lock-in."
      problemHeading="Why your site isn't ranking — the honest answer"
      problem="Most underperforming sites we audit share the same 4–5 issues: bloated themes destroying Core Web Vitals scores, duplicate title tags across hundreds of URLs, broken internal linking structures, and content targeting keywords with no commercial intent. None of these get fixed by 'monthly SEO retainers' that only deliver blog posts. We do the technical work first, then layer content on a solid foundation. Businesses that invest in SEO see an average organic traffic lift of over 150% within 12 months — but only if the foundation is right."
      whatYouGet={[
        "Full technical SEO audit (crawl, render, indexation, schema markup)",
        "Core Web Vitals optimisation — LCP, INP, CLS",
        "Keyword strategy with commercial intent prioritisation",
        "On-page SEO: optimised titles, meta descriptions, headings, internal links",
        "FAQPage, Article & LocalBusiness structured data (schema markup)",
        "Local SEO: Google Business Profile, citations, local landing pages",
        "Internal linking restructure for topical authority",
        "Featured snippet & People Also Ask optimisation",
        "Monthly content briefs and editing for in-house writers",
        "Search Console + GA4 + Looker Studio reporting dashboard",
        "Passage indexing: self-contained, query-focused page sections",
        "E-E-A-T signals: credentials, case studies, social proof integration",
      ]}
      process={[
        {
          title: "Audit",
          body: "Two-week deep audit covering crawlability, on-page factors, technical health, content gaps, backlink profile, and competitive gap analysis. You receive a prioritised fix list with estimated traffic impact per item.",
        },
        {
          title: "Fix",
          body: "We ship the top 20% of fixes that deliver 80% of impact first — technical and on-page work in months 1–2. This includes title tags, canonical setup, schema markup, internal linking, and Core Web Vitals tuning.",
        },
        {
          title: "Build",
          body: "Monthly content briefs, internal linking expansion, and local SEO assets executed with measurable targets. Each piece is optimised for featured snippets and AI-driven search answer boxes.",
        },
        {
          title: "Report",
          body: "Monthly Looker Studio dashboard with keyword rankings, organic traffic, conversions, and everything we shipped. We include direct answers under clear headings — making content snippet-ready for Google's AI Overviews.",
        },
      ]}
      outcomes={[
        { metric: "3–6 mo", label: "Typical time to first ranking gains" },
        { metric: "+150%", label: "Avg organic traffic lift in 12 months" },
        { metric: "₹25k+", label: "Monthly retainer starting price" },
        { metric: "0", label: "Lock-in months — cancel anytime" },
      ]}
      faqs={[
        {
          q: "How quickly will I see results from SEO?",
          a: "Technical fixes can move rankings in 2–6 weeks. Content and authority work compounds over 3–6 months. We're transparent about which work delivers what timeline and show you the data every month.",
        },
        {
          q: "Do you guarantee #1 rankings on Google?",
          a: "No, and you should be cautious of any agency that does. Google doesn't allow that promise and no one controls the algorithm. We guarantee transparent reporting, a documented fix list, and measurable traffic growth.",
        },
        {
          q: "How do you measure SEO success?",
          a: "We track organic traffic, keyword rankings, click-through rate from Search Console, and — most importantly — conversions and revenue attributed to organic search. We don't report vanity metrics like domain authority in isolation.",
        },
        {
          q: "Can you help my Ahmedabad business rank for 'near me' searches?",
          a: "Yes. Local SEO is a major part of what we do — Google Business Profile optimisation, local schema markup, citation cleanup, review acquisition strategy, and hyper-local landing pages.",
        },
        {
          q: "What is technical SEO and why does it matter?",
          a: "Technical SEO ensures Google can efficiently crawl, render, and index your pages. It covers site speed (Core Web Vitals), crawl budget, canonical tags, structured data, and rendering. Without this foundation, even excellent content underperforms.",
        },
        {
          q: "Do you optimise content for AI search and featured snippets?",
          a: "Yes. We format key answers directly under clear headings (within 50–60 words) to be snippet-eligible, structure content for passage indexing, and add FAQPage schema so answers can appear in Google's AI Overviews and rich results.",
        },
        {
          q: "What if my site is built on WordPress or Shopify?",
          a: "We work across WordPress, Shopify, custom React, and any modern stack. Most technical SEO fixes are platform-agnostic, and we handle the implementation directly.",
        },
        {
          q: "Do you do link building?",
          a: "We focus on earned links through digital PR and quality content. We don't sell PBN or directory spam links — those create long-term risk and Google penalties.",
        },
      ]}
      relatedServices={[
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/ecommerce-development", label: "Ecommerce Development" },
        { href: "/services/website-maintenance", label: "Website Maintenance" },
        { href: "/services/ui-ux-design", label: "UI/UX Design" },
      ]}
      relatedBlogs={[
        {
          slug: "seo-friendly-websites-rank-better",
          title: "Why SEO-Friendly Websites Rank Better on Google",
        },
        {
          slug: "technical-seo-checklist",
          title: "Technical SEO Checklist for Business Websites",
        },
        {
          slug: "local-seo-ahmedabad",
          title: "Why Local SEO Matters for Ahmedabad Businesses",
        },
        {
          slug: "digital-marketing-trends-2026",
          title: "Top 10 Digital Marketing Trends in 2026",
        },
      ]}
    />
  ),
});