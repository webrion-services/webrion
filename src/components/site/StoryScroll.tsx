import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = [
  "Webrion partners with ambitious teams to design, engineer, and ship",
  "premium digital products — websites, web apps, and brand experiences",
  "that move people and grow businesses.",
];

export function StoryScroll() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-5xl space-y-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
        {words.map((line, li) => {
          const tokens = line.split(" ");
          return (
            <p key={li} className="flex flex-wrap gap-x-3 gap-y-1">
              {tokens.map((w, i) => {
                const total = words.length * 10;
                const idx = li * 10 + i;
                const start = idx / total;
                const end = (idx + 1.5) / total;
                return <Word key={i} progress={scrollYProgress} range={[start, end]}>{w}</Word>;
              })}
            </p>
          );
        })}
      </div>
    </section>
  );
}

function Word({ children, progress, range }: { children: string; progress: any; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}
