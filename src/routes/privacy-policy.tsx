import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Webrion" },
      { name: "description", content: "How Webrion collects, uses, and protects your personal information." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Privacy Policy | Webrion" },
      { property: "og:url", content: "https://webrionservices.vercel.app/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "https://webrionservices.vercel.app/privacy-policy" }],
  }),
  component: () => (
    <PageShell crumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}>
      <article className="mx-auto max-w-3xl px-6 pt-10 pb-20 text-muted-foreground">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm">Last updated: May 2026</p>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">1. Who we are</h2>
          <p>Webrion ("we", "us", "our") is a web development and SEO agency based in Ahmedabad, Gujarat, India. This policy explains how we handle personal information you share with us through our website webrionservices.vercel.app and our client engagements.</p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">2. Information we collect</h2>
          <p>We collect information you submit via contact forms (name, email, phone, project details), basic analytics data (anonymized page views, referrers, device type), and information you share over email or call during a project engagement.</p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">3. How we use your information</h2>
          <p>We use your information to respond to enquiries, deliver agreed services, send relevant project updates, improve our website, and comply with legal obligations. We do not sell your information to third parties.</p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">4. Cookies and analytics</h2>
          <p>We use privacy-respecting analytics to understand how visitors use our site. We do not use advertising trackers. You can disable cookies through your browser settings without losing site functionality.</p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">5. Data retention and security</h2>
          <p>We retain enquiry data for up to 24 months. Active client data is retained for the duration of the engagement plus 7 years for tax and legal reasons. All data is stored on encrypted infrastructure with access limited to authorized team members.</p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">6. Your rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data at any time. Email webrionservices@gmail.com and we will respond within 30 days.</p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">7. Contact</h2>
          <p>For privacy questions, email webrionservices@gmail.com or write to Webrion, Ahmedabad, Gujarat 380001, India.</p>
        </section>
      </article>
    </PageShell>
  ),
});
