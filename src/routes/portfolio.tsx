import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SchemaJsonLd } from "@/components/site/SchemaJsonLd";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Scholar Allocation", category: "University Platform",stack: "PHP · MYSQL · Javascript · HTML/CSS · BootStrap",outcome: " reduced our page load time from 5.2s to 1.4 seconds", link: "https://phd.dvthakkar.in", },
  { title: "Threads & Things", category: "Luxury Ecommerce", stack: "PYTHON · Flask · Stripe · AJAX · TailWind · HTML5/CSS3 ", outcome: "Help their Brand in onling presence", link: "https://threads-things.onrender.com/",},
  { title: "Brain Builder", category: "Interactive Quiz Platform", stack: "WebSocket Flask · PYTHON · JavaSCript · TailWind ", outcome: "Made Fun Loving and Intracable",link: "https://brain-builder.onrender.com/",},
  { title: "Chat Box", category: "Realtime Messaging", stack: "Socket.io · Oauth · PYTHON · TailWind", outcome: "Make real time communication fast with vanish mode",link: "https://chat-box-rhfp.onrender.com/", },
];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Web Development & Design Projects | Webrion" },
      { name: "description", content: "Selected work from Webrion — custom websites, ecommerce stores, and SaaS apps for clients across India and worldwide." },
      { name: "keywords", content: "Webrion portfolio, web development portfolio, agency case studies" },
      { property: "og:title", content: "Portfolio | Webrion" },
      { property: "og:description", content: "Selected web development and design work from Webrion." },
      { property: "og:url", content: "https://webrionservices.vercel.app/portfolio" },
      { property: "og:image", content: "https://webrionservices.vercel.app/og-image.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://webrionservices.vercel.app/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Webrion Portfolio",
    url: "https://webrionservices.vercel.app/portfolio",
  };
  return (
    <PageShell crumbs={[{ label: "Portfolio", href: "/portfolio" }]}>
      <SchemaJsonLd schema={schema} />
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
          Selected work
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          A snapshot of recent client projects across ecommerce, SaaS, B2B, and local services. Full case studies available on request under NDA.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="rounded-xl border border-border bg-card/40 p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.category}</div>
            <h2 className="mt-2 text-xl font-semibold text-foreground">{p.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{p.stack}</p>
            <p className="mt-3 text-sm text-foreground">{p.outcome}</p>
            <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity duration-300 hover:opacity-90"
                  >
                    Explore Project
                    <ArrowUpRight className="h-4 w-4 opacity-80"/>
                  </a>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-border bg-card/40 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Want the full case studies?</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Deep-dive case studies including before/after metrics, technical decisions, and live URLs are available under NDA. <Link to="/contact" className="underline">Request access</Link> or read our <Link to="/case-studies" className="underline">published case studies</Link>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
