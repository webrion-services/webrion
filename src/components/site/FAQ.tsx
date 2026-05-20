import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What are typical project timelines?", a: "Most landing sites ship in 1–2 weeks. Marketing sites 2 weeks. Web apps scope by sprint.Also adjustable for you" },
  { q: "How does pricing work?", a: "Fixed-fee for defined scopes, monthly retainer for ongoing partnerships. We quote up-front, no hidden charges." },
  { q: "Do you offer maintenance & support?", a: "Yes — uptime monitoring, performance tuning, content updates, and feature work on a monthly plan." },
  { q: "Which technologies do you use?", a: "React, Next.js / TanStack Start, Tailwind, GSAP, Framer Motion, Supabase, Vercel, Cloudflare." },
  { q: "Do you handle SEO?", a: "Technical SEO is baked in: semantic HTML, structured data, performance, sitemaps. Content SEO available." },
  { q: "What's your revisions policy?", a: "Each plan includes a set number of design rounds. Additional rounds are billed at a transparent hourly rate." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">FAQ</span>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Things people ask us.</h2>
        </div>

        <ul className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium md:text-lg">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
