import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SchemaJsonLd } from "@/components/site/SchemaJsonLd";
import { blogPosts } from "@/content/blogs";

const SITE = "https://webrionservices.vercel.app";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Webrion Blog — Web Development, SEO & Design Insights" },
      { name: "description", content: "Practical articles on web development, SEO, ecommerce, and UI/UX design from the team at Webrion." },
      { name: "keywords", content: "web development blog, SEO blog India, Webrion blog" },
      { property: "og:title", content: "Webrion Blog" },
      { property: "og:description", content: "Practical web development, SEO, and design insights." },
      { property: "og:url", content: `${SITE}/blogs` },
      { property: "og:image", content: `${SITE}/og-image.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/blogs` }],
  }),
  component: () => (
    <PageShell crumbs={[{ label: "Blog", href: "/blogs" }]}>
      <SchemaJsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Webrion Blog",
          url: `${SITE}/blogs`,
          publisher: { "@id": `${SITE}/#org` },
          blogPost: blogPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE}/blogs/${p.slug}`,
            datePublished: p.publishedAt,
            dateModified: p.updatedAt,
            author: { "@type": "Organization", name: p.author },
          })),
        }}
      />

      <section className="mx-auto max-w-6xl px-6 pt-10 pb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Blog</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
          Insights, not fluff
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Working notes on web development, SEO, ecommerce, and design — written for founders and marketing teams who want straight answers.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-8 md:grid-cols-2">
        {blogPosts.map((p) => (
          <article key={p.slug} className="flex flex-col rounded-xl border border-border bg-card/40 p-6">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-border px-2.5 py-1">{p.category}</span>
              <time dateTime={p.publishedAt}>{new Date(p.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</time>
              <span>· {p.readingMinutes} min read</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
              <Link to="/blogs/$slug" params={{ slug: p.slug }} className="hover:underline">{p.title}</Link>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
            <Link to="/blogs/$slug" params={{ slug: p.slug }} className="mt-4 inline-block text-sm text-foreground underline-offset-4 hover:underline">
              Read article →
            </Link>
          </article>
        ))}
      </section>
    </PageShell>
  ),
});
