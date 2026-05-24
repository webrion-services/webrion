import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SchemaJsonLd } from "@/components/site/SchemaJsonLd";

const studies = [
  {
    slug: "nordlys-skincare",
    title: "Nordlys Skincare: +42% conversion after headless replatform",
    summary: "Migrated a slow Shopify theme to a headless Next.js storefront on Hydrogen. LCP dropped from 4.8s to 1.6s on mobile. Conversion lifted 42% in 8 weeks.",
    tags: ["Ecommerce", "Shopify Headless", "Performance"],
  },
  {
    slug: "lumen-analytics",
    title: "Lumen Analytics: $0 → $18k MRR in 90 days post-MVP",
    summary: "Shipped an 8-week SaaS MVP for a marketing analytics tool. Auth, billing, dashboard, and reporting on React + Supabase. Reached $18k MRR in 90 days.",
    tags: ["SaaS", "MVP", "React"],
  },
  {
    slug: "sahyog-realty",
    title: "Sahyog Realty: Page 1 for 14 keywords in 5 months",
    summary: "Rebuilt a real estate site on Next.js with neighborhood-level landing pages, schema markup, and local SEO. Ranked top 3 for 14 commercial keywords in 5 months.",
    tags: ["Real estate", "Local SEO", "Next.js"],
  },
];

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real Results from Webrion's Web & SEO Work" },
      { name: "description", content: "Detailed case studies on web development, ecommerce, and SEO projects delivered by Webrion. Real metrics, real outcomes." },
      { name: "keywords", content: "Webrion case studies, web development case study, SEO case study" },
      { property: "og:title", content: "Case Studies | Webrion" },
      { property: "og:description", content: "Real outcomes from real client work." },
      { property: "og:url", content: "https://webrionservices.vercel.app/case-studies" },
      { property: "og:image", content: "https://webrionservices.vercel.app/og-image.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://webrionservices.vercel.app/case-studies" }],
  }),
  component: () => (
    <PageShell crumbs={[{ label: "Case Studies", href: "/case-studies" }]}>
      <SchemaJsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Webrion Case Studies",
          url: "https://webrionservices.vercel.app/case-studies",
        }}
      />
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Case Studies</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
          Outcomes, not opinions
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Selected case studies covering ecommerce replatforms, SaaS MVPs, and local SEO wins. Each one ships with real numbers, real timelines, and the technical decisions behind the result.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 space-y-5">
        {studies.map((s) => (
          <article key={s.slug} className="rounded-xl border border-border bg-card/40 p-6">
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground">{t}</span>
              ))}
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{s.title}</h2>
            <p className="mt-3 text-muted-foreground">{s.summary}</p>
            <Link to="/contact" className="mt-4 inline-block text-sm text-foreground underline-offset-4 hover:underline">Request full case study →</Link>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-border bg-card/40 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Could your project be the next case study?</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We work with founders and marketing teams who want measurable outcomes, not vanity deliverables. <Link to="/contact" className="underline">Start a conversation</Link>.
          </p>
        </div>
      </section>
    </PageShell>
  ),
});
