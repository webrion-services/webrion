import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 5, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "+", label: "Technologies Mastered" },
];

export function Stats() {
  return (
    <section className="relative px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="glow-border group rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition hover:-translate-y-1"
          >
            <div className="text-4xl font-semibold tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
