import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Webrion" },
      { name: "description", content: "Terms and conditions governing the use of Webrion's website and services." },
      { property: "og:title", content: "Terms & Conditions | Webrion" },
      { property: "og:url", content: "https://webrionservices.vercel.app/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "https://webrionservices.vercel.app/terms-and-conditions" }],
  }),
  component: () => (
    <PageShell crumbs={[{ label: "Terms & Conditions", href: "/terms-and-conditions" }]}>
      <article className="mx-auto max-w-3xl px-6 pt-10 pb-20 text-muted-foreground">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
          Terms & Conditions
        </h1>
        <p className="mt-3 text-sm">Last updated: May 2026</p>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of terms</h2>
          <p>By accessing webrionservices.vercel.app or engaging Webrion for services, you agree to these terms. If you do not agree, please do not use the site or our services.</p>
        </section>
        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">2. Services</h2>
          <p>Webrion provides web development, SEO, ecommerce development, UI/UX design, web application development, and website maintenance services. Specific scope, timeline, and pricing for each engagement are documented in a separate signed proposal or statement of work.</p>
        </section>
        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">3. Intellectual property</h2>
          <p>Upon full payment, client receives ownership of the final deliverables specific to their project. Webrion retains rights to underlying tools, libraries, design systems, and code components developed independently. Webrion may use anonymized project information in case studies unless an NDA states otherwise.</p>
        </section>
        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">4. Payment</h2>
          <p>Standard projects invoice 50% on signing and 50% on launch unless otherwise agreed. Retainers invoice in advance each month. All invoices are subject to 18% GST. Late payment beyond 15 days may pause work.</p>
        </section>
        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">5. Warranties and liability</h2>
          <p>We warrant work delivered free of major defects for 30 days post-launch. We are not liable for indirect, incidental, or consequential damages. Maximum aggregate liability is limited to fees paid in the preceding three months of the engagement.</p>
        </section>
        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">6. Termination</h2>
          <p>Either party may terminate with 15 days written notice. Client pays for work completed up to termination date.</p>
        </section>
        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">7. Governing law</h2>
          <p>These terms are governed by the laws of India, with exclusive jurisdiction in the courts of Ahmedabad, Gujarat.</p>
        </section>
        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">8. Contact</h2>
          <p>Email webrionservices@gmail.com for any questions regarding these terms.</p>
        </section>
      </article>
    </PageShell>
  ),
});
