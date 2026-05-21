import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// FIX: FAQ answers now match exactly what is in the schema JSON-LD in __root.tsx.
// Google cross-checks FAQ schema against visible page content — mismatches
// can result in the rich snippet being suppressed.
const faqs = [
  {
    q: "What are typical project timelines?",
    a: "Most landing pages ship in 1–2 weeks. Full marketing sites take 2–3 weeks. Web applications are scoped by sprint. Timelines are adjustable based on your requirements.",
  },
  {
    q: "How much does a website cost in India?",
    a: "Website pricing in India depends on the type of website, features, design quality, and development complexity. At Webrion, our Starter package starts from ₹14,999 for up to 5 pages. The Professional package is ₹24,999 for up to 15 pages with CMS integration and advanced SEO. Enterprise and custom web application pricing is quoted per project.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients globally and provide complete remote collaboration for website design, development, branding, and digital solutions. We use professional communication and project management tools to ensure smooth workflow across different time zones.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We can redesign your existing website to improve its visual appearance, performance, user experience, mobile responsiveness, SEO structure, and conversion rate — while preserving important content and functionality.",
  },
  {
    q: "How does pricing work?",
    a: "Fixed-fee for defined scopes, monthly retainer for ongoing partnerships. We quote up-front with no hidden charges.",
  },
  {
    q: "Do you offer website maintenance and support?",
    a: "Yes — we offer monthly maintenance plans including uptime monitoring, performance tuning, security updates, content updates, and feature development.",
  },
  {
    q: "Do you handle SEO?",
    a: "Technical SEO is built into every project: semantic HTML, structured data markup, Core Web Vitals optimization, and XML sitemaps. Content SEO strategy and keyword targeting are also available as add-ons.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    // FIX: id changed from "FAQ" (uppercase) to "faq" (lowercase) for consistency.
    // Update Footer.tsx href="#FAQ" → href="#faq" to match.
    <section id="faq" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">FAQ</span>
          {/* FIX: H2 now includes target keyword "web development India" */}
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            Frequently Asked Questions — Web Development in India
          </h2>
        </div>

        <ul className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.q}
                className="overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
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

        {/* FIX: internal link to pricing section from FAQ */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Still have questions?{" "}
          <a href="#contact" className="text-accent hover:underline">
            Send us a message →
          </a>{" "}
          or{" "}
          <a href="#pricing" className="text-accent hover:underline">
            view our pricing
          </a>
          .
        </p>
      </div>
    </section>
  );
}
