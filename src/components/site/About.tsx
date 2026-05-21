import { motion } from "framer-motion";
import { SplitReveal } from "./SplitReveal";

const milestones = [
  { year: "Jan 2026", label: "Webrion founded" },
  { year: "Feb 2026", label: "First client project launched" },
  { year: "Mar 2026", label: "Design system practice established" },
  { year: "Apr 2026", label: "Global services opened" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 pb-20 md:px-12">
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About Webrion</span>
          <SplitReveal
            as="h2"
            text="A small studio. Senior craft. Outsized results."
            className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          />
          <p className="mt-6 max-w-lg text-muted-foreground">
            Webrion helps businesses establish a powerful digital presence through modern
            design, scalable development, and performance-focused solutions. We embed with
            your team and ship like it&apos;s our own product.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Mission</span>
            <p className="mt-2 text-lg">
              Make premium web craft accessible to ambitious teams of any size.
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

          <ol className="relative space-y-6 rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
            <div className="absolute left-[3.2rem] top-10 bottom-10 w-0.5 bg-border" />
            {milestones.map((m, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex items-center gap-5"
              >
                <span className="z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="text-sm text-muted-foreground">{m.year}</div>
                  <div className="text-lg font-medium">{m.label}</div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
