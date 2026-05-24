import { motion } from "framer-motion";
import { SplitReveal } from "./SplitReveal";

// FIX: Replaced milestone timeline (thin, dated content from Jan–Apr 2026)
// with "Why Choose Us" differentiators — these are evergreen, add keyword
// value, and give Google meaningful signals about the studio's expertise.
const differentiators = [
  {
    num: "01",
    title: "Source Code Delivered",
    desc: "You own everything — no vendor lock-in, no recurring platform fees.",
  },
  {
    num: "02",
    title: "No Templates. Ever.",
    desc: "Every site is built from scratch, engineered to your brand and goals.",
  },
  {
    num: "03",
    title: "Sub-2s Load Times",
    desc: "We obsess over Core Web Vitals so Google — and your users — reward you.",
  },
  {
    num: "04",
    title: "SEO Built In",
    desc: "Semantic HTML, structured data, and performance optimized from day one.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 pb-20 md:px-12">
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About Webrion</span>
          {/* FIX: H2 now includes location keyword "Ahmedabad" */}
          <SplitReveal
            as="h2"
            text="Web Development Studio in Ahmedabad — Senior Craft, Outsized Results."
            className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          />
          <p className="mt-6 max-w-lg text-muted-foreground">
            Webrion is a web development agency based in Ahmedabad, India. We help startups and
            businesses establish a powerful digital presence through modern design, scalable
            development, and performance-focused solutions. We embed with your team and ship like
            it&apos;s our own product.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Mission</span>
            {/* FIX: Mission statement now includes target audience and value prop keywords */}
            <p className="mt-2 text-lg">
              Bring enterprise-grade web development to Indian startups and growing businesses —
              at prices that actually make sense. Starting at ₹12,999.
            </p>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ rotate: -8, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute -right-4 -top-6 h-32 w-32 rounded-3xl border border-border bg-card/70 backdrop-blur"
          />
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-accent/70"
          />

          {/* FIX: Replaced dated Jan–Apr 2026 milestones with evergreen differentiators */}
          <ol className="relative space-y-6 rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
            <div className="absolute left-[3.2rem] top-10 bottom-10 w-0.5 bg-border" />
            {differentiators.map((d, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex items-start gap-5"
              >
                <span className="z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold">
                  {d.num}
                </span>
                <div>
                  <div className="text-lg font-medium">{d.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{d.desc}</div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
