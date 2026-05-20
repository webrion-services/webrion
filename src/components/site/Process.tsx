import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Compass, Lightbulb, PenTool, Code, Rocket, LifeBuoy } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Compass,
    title: "Discovery",
    desc: "We deep-dive into your goals, audience, and competitive landscape to define what success looks like.",
    tags: ["Goals", "Audience", "Scope"],
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    desc: "Information architecture, content strategy, KPIs and a phased roadmap that aligns with business outcomes.",
    tags: ["IA", "Roadmap", "KPIs"],
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Brand-led visual systems, high-fidelity UI and interaction prototypes designed for delight and conversion.",
    tags: ["Brand", "UX", "UI"],
  },
  {
    icon: Code,
    title: "Development",
    desc: "Production-grade engineering with React, TypeScript and a modern edge stack — fast, accessible, scalable.",
    tags: ["Build", "Test", "Iterate"],
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "We ship with confidence — preview environments, performance audits and a smooth go-live playbook.",
    tags: ["Ship", "Monitor", "Learn"],
  },
  {
    icon: LifeBuoy,
    title: "Support",
    desc: "Ongoing improvements, analytics-driven iterations and a partnership built to evolve with your product.",
    tags: ["Maintain", "Evolve"],
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Process
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Six steps from idea to launch.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A transparent, collaborative process designed to de-risk every phase and ship work
            you're proud of.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* timeline track */}
          <div
            className="absolute left-[27px] top-0 h-full w-0.75 bg-border md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[27px] top-0 w-0.75 bg-accent md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="relative space-y-16 md:space-y-20">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={s.title}
                  className="relative grid grid-cols-[56px_1fr] gap-6 md:grid-cols-2 md:gap-12"
                >
                  {/* node */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                    className="relative z-10 row-span-2 grid h-14 w-14 place-items-center rounded-full border border-border bg-background shadow-[0_0_0_6px_var(--background)] md:absolute md:left-1/2 md:top-2 md:-translate-x-1/2"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  {/* content */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.05 }}
                    className={
                      isLeft ? "md:col-start-1 md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                    }
                  >
                    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {s.desc}
                    </p>
                    <div className={`mt-4 flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground backdrop-blur"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
