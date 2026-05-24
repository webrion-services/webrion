import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// FIX: FAQ answers now match exactly what is in the schema JSON-LD in __root.tsx.
// Google cross-checks FAQ schema against visible page content — mismatches
// can result in the rich snippet being suppressed.
const faqs = [
  {
    q: "How much does a website cost in India?",
    a: "Website pricing in India depends on the type of website, features, design quality, and development complexity. At Webrion, our Starter package starts from ₹12,999 for up to 5 pages. The Professional package is ₹24,999 for up to 15 pages with CMS integration and advanced SEO. Enterprise and custom web application pricing is quoted per project.",
  },
  {
    q: "What does a digital marketing agency do?",
    a: "A digital marketing agency handles the online growth of your business. Core services include SEO (search engine optimisation), PPC advertising (Google Ads, Meta Ads), social media marketing, content creation, web development, and conversion rate optimisation. Agencies combine these to drive traffic, generate leads, and grow revenue.",
  },
  {
    q: "How much do SEO services cost in India?",
    a: "SEO pricing in India typically follows two models. Monthly retainers range from ₹15,000 – ₹80,000 depending on scope, competition, and number of target keywords. Project-based SEO audits and one-time on-page work range from ₹10,000 – ₹60,000. At Webrion, our SEO retainer starts at ₹25,000/month with no lock-in contract.",
  },
  {
    q: "How long until I see results from SEO?",
    a: "Technical fixes — like crawl errors, slow page speed, and broken internal links — can show ranking improvements within 2–6 weeks. Content and authority building compounds over 3–6 months. Most clients see meaningful organic traffic growth by month 4–5. We're transparent about which work delivers what timeline.",
  },
  {
    q: "Can I do SEO myself?",
    a: "You can handle some SEO tasks yourself — publishing helpful content, setting up Google Search Console, and improving page titles. However, technical SEO (Core Web Vitals, schema markup, crawl budget, rendering) and competitive link strategy typically require specialist skills. DIY for content; hire an expert for technical and strategy.",
  },
  {
    q: "Which social media platform is best for my business?",
    a: "It depends on your audience. B2B companies typically get the best ROI from LinkedIn and Google Search. B2C brands with visual products do well on Instagram and Pinterest. Service businesses targeting local customers benefit from Facebook and Google Business Profile. We recommend auditing where your actual customers spend time before committing budget.",
  },
  {
    q: "How do I measure SEO success?",
    a: "The right metrics are: organic traffic (Google Analytics 4), keyword rankings (Search Console or a rank tracker), click-through rate from search, and — most importantly — conversions and revenue attributed to organic. Vanity metrics like domain authority are supplementary. We deliver a monthly Looker Studio dashboard covering all of these.",
  },
  {
    q: "What is chatbot marketing and does it work?",
    a: "Chatbot marketing uses automated conversational tools on your website or messaging platforms to qualify leads, answer FAQs, and book appointments — 24/7, without human input. When set up well, chatbots can cut response time from hours to seconds and increase qualified lead volume by 20–40%. They work best as a complement to, not replacement for, human follow-up.",
  },
  {
    q: "Why is website speed important for my business?",
    a: "Page speed affects both user experience and Google rankings. Google's Core Web Vitals (LCP, INP, CLS) are direct ranking factors. A 1-second delay in load time reduces conversions by roughly 7%. On mobile, users abandon pages that take more than 3 seconds to load. Every performance improvement has a measurable business impact.",
  },
  {
    q: "What is Google Analytics and do I need it?",
    a: "Google Analytics 4 (GA4) is a free tool that shows you who visits your website, where they come from, which pages they view, and whether they convert. Without it, you're making marketing decisions blindly. Yes, you need it — along with Google Search Console. Both are free and we set them up on every project we deliver.",
  },
  {
    q: "What are typical project timelines?",
    a: "Most landing pages ship in 1–2 weeks. Full marketing sites take 2–3 weeks. Web applications are scoped by sprint. SEO audits take 2 weeks; ongoing SEO is monthly. Timelines are always confirmed in writing before we start.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — we work with clients globally and handle full remote collaboration for web design, development, SEO, and digital solutions. We use professional project management tools to ensure smooth workflow across time zones.",
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
