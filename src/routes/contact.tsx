import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SchemaJsonLd } from "@/components/site/SchemaJsonLd";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Webrion — Web Development & SEO Agency in Ahmedabad" },
      { name: "description", content: "Contact Webrion for custom website development, SEO services, and ecommerce builds. Based in Ahmedabad, serving clients across India and worldwide." },
      { name: "keywords", content: "contact Webrion, web development agency contact, SEO services Ahmedabad" },
      { property: "og:title", content: "Contact Webrion" },
      { property: "og:description", content: "Get a fixed-price proposal within 1 business day." },
      { property: "og:url", content: "https://webrionservices.vercel.app/contact" },
      { property: "og:image", content: "https://webrionservices.vercel.app/og-image.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://webrionservices.vercel.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: "https://webrionservices.vercel.app/contact",
    mainEntity: { "@id": "https://webrionservices.vercel.app/#business" },
  };
  return (
    <PageShell crumbs={[{ label: "Contact", href: "/contact" }]}>
      <SchemaJsonLd schema={schema} />
      <section className="mx-auto max-w-4xl px-6 pt-10 pb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
          Tell us about your project
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Share your brief and timeline. We respond with scope, fixed pricing, and a delivery plan within one business day.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-8 md:grid-cols-2">
        <div className="space-y-4">
          {[
            { Icon: Mail, label: "Email", value: "webrionservices@gmail.com", href: "mailto:webrionservices@gmail.com" },
            { Icon: Phone, label: "Phone", value: "+91 96645 52301", href: "tel:+919664552301" },
            { Icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/919664552301" },
            { Icon: MapPin, label: "Office", value: "GF-32 Fortune Industrial Park Kathwada-Singarva Rd, Odhav Industrial Estate kathwada, Ahmedabad, Gujarat 382430", href: "https://maps.google.com/?q=Ahmedabad,Gujarat,India" },
          ].map(({ Icon, label, value, href }) => (
            <a key={label} href={href} className="flex items-start gap-4 rounded-xl border border-border bg-card/40 p-5 hover:bg-accent/10" target="_blank">
              <Icon className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                <div className="mt-1 text-sm text-foreground">{value}</div>
              </div>
            </a>
          ))}
        </div>

        <form className="space-y-4 rounded-xl border border-border bg-card/40 p-6" onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:webrionservices@gmail.com?subject=Project enquiry"; }}>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="cname">Name</label>
            <input id="cname" required className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="cemail">Email</label>
            <input id="cemail" type="email" required className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="cmsg">What can we help with?</label>
            <textarea id="cmsg" rows={5} required className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
          </div>
          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90">
            Send my project brief
          </button>
          <p className="text-xs text-muted-foreground">We respond within 1 business day. NDAs available on request.</p>
        </form>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-xl font-semibold tracking-tight">Looking for something specific?</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { href: "/services/web-development", label: "Web development" },
            { href: "/services/seo-services", label: "SEO services" },
            { href: "/services/ecommerce-development", label: "Ecommerce" },
            { href: "/services/ui-ux-design", label: "UI/UX design" },
            { href: "/services/web-application-development", label: "Web apps" },
            { href: "/services/website-maintenance", label: "Maintenance" },
          ].map((l) => (
            <Link key={l.href} to={l.href} className="rounded-full border border-border bg-card/40 px-3 py-1.5 text-xs hover:bg-accent/10">{l.label}</Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
