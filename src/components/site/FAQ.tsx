import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What are typical project timelines?", a: "Most landing sites ship in 1–2 weeks. Marketing sites 2 weeks. Web apps scope by sprint.Also adjustable for you" },
  { q: "How much does a website cost in India?", a: "Website pricing in India depends on the type of website, features, design quality, and development complexity. A basic business website usually starts from ₹25,000–₹40,000, while custom-designed corporate websites, eCommerce platforms, or web applications can range from ₹50,000 to several lakhs." },
  { q: "Do you work with international clients?", a: "Yes, we work with clients globally and provide complete remote collaboration for website design, development, branding, and digital solutions. We use professional communication and project management tools to ensure smooth workflow across different time zones." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We can redesign your existing website to improve its visual appearance, performance, user experience, mobile responsiveness, SEO structure, and conversion rate. Whether your current website looks outdated, loads slowly, or no longer reflects your brand properly, we can modernize it while preserving important content and functionality where needed." },
  { q: "How does pricing work?", a: "Fixed-fee for defined scopes, monthly retainer for ongoing partnerships. We quote up-front, no hidden charges." },
  { q: "Do you offer maintenance & support?", a: "Yes — uptime monitoring, performance tuning, content updates, and feature work on a monthly plan." },
  { q: "Do you handle SEO?", a: "Technical SEO is baked in: semantic HTML, structured data, performance, sitemaps. Content SEO available." },

  
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="FAQ" className="relative px-6 py-32 md:px-12">
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
