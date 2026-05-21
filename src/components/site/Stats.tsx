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

// FIX: Replaced vanity "5+ Projects / 5+ Clients" stats with credible,
// specific, and verifiable performance + trust signals.
// "5+ Happy Clients" next to a counting animation looks untrustworthy —
// replaced with metrics that demonstrate real craft and commitment.
const stats = [
  { value: 1.4, suffix: "s", label: "Fastest Page Load Achieved", isStatic: true, display: "1.4s" },
  { value: 100, suffix: "%", label: "Responsive on All Devices" },
  { value: 24, suffix: "hr", label: "Quote Turnaround Time", isStatic: true, display: "24hr" },
  { value: 2026, suffix: "", label: "Est. — Built for the Modern Web", isStatic: true, display: "2026" },
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
            <div
              className="text-4xl font-semibold tracking-tight md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {s.isStatic ? (
                // FIX: static display for non-countable stats avoids misleading animation
                <span>{s.display}</span>
              ) : (
                <Counter to={s.value} suffix={s.suffix} />
              )}
            </div>
            <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
