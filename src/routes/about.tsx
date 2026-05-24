import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SchemaJsonLd } from "@/components/site/SchemaJsonLd";

const SITE = "https://webrionservices.vercel.app";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Webrion — Web Development Agency in Ahmedabad, India" },
      {
        name: "description",
        content:
          "Webrion is a web development and SEO agency in Ahmedabad, India. We build custom websites, ecommerce platforms, and SaaS apps for businesses across India and worldwide.",
      },
      { name: "keywords", content: "about Webrion, web development agency Ahmedabad, Webrion services, Webrion agency" },
      { property: "og:title", content: "About Webrion" },
      { property: "og:description", content: "Web development and SEO agency in Ahmedabad — meet Webrion." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://webrionservices.vercel.app/about" },
      { property: "og:image", content: "https://webrionservices.vercel.app/og-image.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://webrionservices.vercel.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE}/about`,
    name: "About Webrion",
    description: "Web development and SEO agency in Ahmedabad, India.",
    mainEntity: { "@id": `${SITE}/#org` },
  };

  return (
    <PageShell crumbs={[{ label: "About", href: "/about" }]}>
      <SchemaJsonLd schema={schema} />

      <section className="mx-auto max-w-4xl px-6 pt-10 pb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About Webrion</p>
        <h1
          className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          A web development studio that ships
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Webrion is an independent web development and SEO agency based in Ahmedabad, Gujarat.
          We build custom websites, ecommerce platforms, and web applications for startups
          and growing businesses across India and 20+ countries.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What we believe</h2>
        <div className="mt-6 space-y-5 text-muted-foreground">
          <p>
            Most agencies sell hours. We sell outcomes — sites that load fast, rank on Google,
            and convert. Every project gets the same baseline: Core Web Vitals in the green,
            semantic SEO from day one, and a stack you actually own.
          </p>
          <p>
            We work in two-week sprints with weekly demos. You see real software, not slides,
            and you can change direction any time without negotiating change orders.
          </p>
          <p>
            We're not the cheapest agency in Ahmedabad and we don't try to be. We're the
            agency that ships work you don't have to redo in 18 months.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">By the numbers</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { metric: "60+", label: "Sites shipped" },
            { metric: "20+", label: "Countries served" },
            { metric: "98", label: "Avg Lighthouse SEO" },
            { metric: "1.4s", label: "Avg LCP we ship at" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl border border-border bg-card/40 p-5">
              <div
                className="text-3xl font-semibold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.metric}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Industries we work with</h2>
        <div className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3 text-sm text-muted-foreground">
          {[
            "SaaS & B2B platforms",
            "Direct-to-consumer ecommerce",
            "Real estate & property tech",
            "Healthcare & clinics",
            "Education & edtech",
            "Manufacturing & B2B exports",
            "Professional services",
            "Hospitality & restaurants",
            "Non-profit & NGO",
          ].map((i) => (
            <div key={i} className="rounded-lg border border-border bg-card/40 px-4 py-3">
              {i}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Explore Webrion</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            { href: "/services/web-development", label: "Web development services" },
            { href: "/services/seo-services", label: "SEO services" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/case-studies", label: "Case studies" },
            { href: "/blogs", label: "Blog & insights" },
            { href: "/contact", label: "Start a project" },
          ].map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="rounded-xl border border-border bg-card/40 px-5 py-4 text-sm text-foreground hover:bg-accent/10"
            >
              {l.label} →
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
