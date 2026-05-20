import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { name: "Prof. Dr. Kishorkumar", role: "Head, HNGU", quote: "Working with Webrion is a new experience — a perfect combination of knowledge, coordination, and hard work." },
  { name: "Priyanshi Shah", role: "CEO, Threads&things", quote: "They treated our brand like their own. The store finally feels editorial, not template." },
  { name: "Yug Patel", role: "Founder, Brain-Builder", quote: "Reservations, menus, — all of it landed beautifully. Users actually Enjoy the website." },
  { name: "Vishwa", role: "Co-founder, Chat-box", quote: "Map-first Startup is hard. Webrion made it feel obvious." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % data.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Testimonials</span>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Words from the teams we ship with.</h2>

        <div className="relative mt-16 h-[260px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 mx-auto max-w-3xl rounded-3xl border border-border bg-card/70 p-10 backdrop-blur"
            >
              <blockquote className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                “{data[i].quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <span>
                  <strong className="text-foreground">{data[i].name}</strong> · {data[i].role}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-accent" : "w-3 bg-border"
              }`}
              aria-label={`Show testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
