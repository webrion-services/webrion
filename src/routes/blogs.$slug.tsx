import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SchemaJsonLd } from "@/components/site/SchemaJsonLd";
import { getPostBySlug, getRelatedPosts, type BlogPost, type BlogSection } from "@/content/blogs";

const SITE = "https://webrionservices.vercel.app";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post as BlogPost | undefined;
    if (!post) return { meta: [{ title: "Article not found | Webrion" }] };
    const url = `${SITE}/blogs/${post.slug}`;
    return {
      meta: [
        { title: `${post.title} | Webrion` },
        { name: "description", content: post.description },
        { name: "keywords", content: post.keywords.join(", ") },
        { name: "author", content: post.author },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${SITE}/og-image.webp` },
        { property: "article:published_time", content: post.publishedAt },
        { property: "article:modified_time", content: post.updatedAt },
        { property: "article:section", content: post.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = getRelatedPosts(post.slug, 3);
  const url = `${SITE}/blogs/${post.slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      keywords: post.keywords.join(", "),
      author: { "@type": "Organization", name: post.author, url: SITE },
      publisher: { "@id": `${SITE}/#org` },
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: `${SITE}/og-image.webp`,
      articleSection: post.category,
      wordCount: post.sections.reduce((n: number, s: BlogSection) => n + (s.paragraphs?.join(" ").split(/\s+/).length ?? 0), 0),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((f: { q: string; a: string }) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <PageShell
      crumbs={[
        { label: "Blog", href: "/blogs" },
        { label: post.title, href: `/blogs/${post.slug}` },
      ]}
    >
      <SchemaJsonLd schema={schema} />

      <article className="mx-auto max-w-3xl px-6 pt-10 pb-16">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full border border-border px-2.5 py-1">{post.category}</span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
          </time>
          <span>· {post.readingMinutes} min read</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
          {post.title}
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">{post.intro}</p>

        {/* Table of contents */}
        <nav aria-label="Table of contents" className="mt-10 rounded-xl border border-border bg-card/40 p-5">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">In this article</div>
          <ol className="mt-3 space-y-1.5 text-sm">
            {post.sections.map((s: BlogSection, i: number) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-foreground/80 hover:text-foreground hover:underline">
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
            <li><a href="#faq" className="text-foreground/80 hover:text-foreground hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <div className="mt-12 space-y-12">
          {post.sections.map((s: BlogSection) => (
            <section key={s.id} id={s.id} className="scroll-mt-32">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">{s.heading}</h2>
              {s.paragraphs?.map((p: string, i: number) => (
                <p key={i} className="mt-4 text-muted-foreground leading-relaxed">{p}</p>
              ))}
              {s.list && (
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {s.list.map((li: string) => (
                    <li key={li} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" /><span>{li}</span></li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section id="faq" className="mt-16 scroll-mt-32">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-border rounded-xl border border-border">
            {post.faqs.map((f: { q: string; a: string }) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground">
                  {f.q}
                  <span className="ml-4 text-muted-foreground transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-xl border border-border bg-card/40 p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About the author</div>
          <p className="mt-2 text-foreground"><strong>{post.author}</strong></p>
          <p className="mt-2 text-sm text-muted-foreground">
            Webrion is a web development and SEO agency in Ahmedabad, India. We build production-grade websites, ecommerce stores, and SaaS apps for clients across India and worldwide. <Link to="/about" className="underline">More about us</Link>.
          </p>
        </section>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Related articles</h2>
            <ul className="mt-6 space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to="/blogs/$slug" params={{ slug: r.slug }} className="text-foreground underline-offset-4 hover:underline">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-16 rounded-2xl border border-border bg-card/40 p-8">
          <h2 className="text-xl font-semibold tracking-tight">Need help with a project?</h2>
          <p className="mt-2 text-muted-foreground">
            Webrion builds custom websites, ecommerce stores, and web apps. <Link to="/contact" className="underline">Get a fixed-price proposal</Link>.
          </p>
        </section>
      </article>
    </PageShell>
  );
}
