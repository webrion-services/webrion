import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageShell } from "./PageShell";
import { SchemaJsonLd } from "./SchemaJsonLd";

export type ServiceFAQ = { q: string; a: string };

export type ServicePageProps = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  problemHeading: string;
  problem: string;
  whatYouGet: string[];
  process: { title: string; body: string }[];
  techStack?: string[];
  outcomes: { metric: string; label: string }[];
  faqs: ServiceFAQ[];
  relatedBlogs?: { slug: string; title: string }[];
  relatedServices?: { href: string; label: string }[];
};

const SITE = "https://webrionservices.vercel.app";

export function ServicePage(p: ServicePageProps) {
  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: p.title,
      serviceType: p.title,
      provider: { "@id": `${SITE}/#business` },
      areaServed: [
        { "@type": "City", name: "Ahmedabad" },
        { "@type": "AdministrativeArea", name: "Gujarat" },
        { "@type": "Country", name: "India" },
      ],
      url: `${SITE}/services/${p.slug}`,
      description: p.intro,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <PageShell
      crumbs={[
        { label: "Services", href: "/#services" },
        { label: p.title, href: `/services/${p.slug}` },
      ]}
    >
      <SchemaJsonLd schema={schemas} />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {p.tagline}
        </p>
        <h1
          className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {p.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{p.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Request a proposal <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent/10"
          >
            See recent work
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {p.problemHeading}
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">{p.problem}</p>
      </section>

      {/* What you get */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          What's included
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {p.whatYouGet.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card/40 p-4">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <span className="text-sm text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Engagement process
        </h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {p.process.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-border bg-card/40 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Step {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 text-lg font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {p.techStack && (
        <section className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Tech stack we use
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.techStack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card/40 px-3 py-1.5 text-xs text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Outcomes */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Outcomes clients see
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.outcomes.map((o) => (
            <div key={o.label} className="rounded-xl border border-border bg-card/40 p-5">
              <div
                className="text-3xl font-semibold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {o.metric}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{o.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-6 divide-y divide-border rounded-xl border border-border">
          {p.faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground">
                {f.q}
                <span className="ml-4 text-muted-foreground transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related */}
      {(p.relatedBlogs?.length || p.relatedServices?.length) ? (
        <section className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Keep reading</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {p.relatedServices && (
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Related services
                </h3>
                <ul className="mt-4 space-y-2">
                  {p.relatedServices.map((s) => (
                    <li key={s.href}>
                      <Link to={s.href} className="text-foreground underline-offset-4 hover:underline">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {p.relatedBlogs && (
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  From the blog
                </h3>
                <ul className="mt-4 space-y-2">
                  {p.relatedBlogs.map((b) => (
                    <li key={b.slug}>
                      <Link
                        to="/blogs/$slug"
                        params={{ slug: b.slug }}
                        className="text-foreground underline-offset-4 hover:underline"
                      >
                        {b.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-border bg-card/40 p-8 md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ready to start your project?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Share your brief and timeline. We'll respond with scope, fixed pricing, and a
            delivery plan within one business day.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Talk to Webrion <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
