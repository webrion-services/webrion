import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, ShoppingBag, Palette, Search, AppWindow, Wrench, Image as ImageIcon } from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Website Development", desc: "Hand-crafted, blazing-fast sites built for scale." },
  { icon: ShoppingBag, title: "Ecommerce Solutions", desc: "Conversion-driven storefronts with elegant UX." },
  { icon: Palette, title: "UI / UX Design", desc: "Design systems and interfaces with real craft." },
  { icon: Search, title: "SEO Optimization", desc: "Technical SEO that actually moves rankings." },
  { icon: AppWindow, title: "Web Applications", desc: "Production-grade React apps built to last." },
  { icon: Wrench, title: "Website Maintenance", desc: "Continuous care, performance and security." },
  { icon: ImageIcon, title: "Graphics Design", desc: "Visual systems, brand assets, and identities." },
];

export function Services() {
  const [active, setActive] = useState(0);
  const radius = 220;
  const angle = (i: number) => (i / services.length) * Math.PI * 2 - Math.PI / 2;

  return (
    <section id="services" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Services</span>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              An orbit of capabilities, one studio.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Hover or tap each node to explore what we do. Every service is delivered by a small, senior team.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Orbital */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-full border border-border/70" />
            <div className="absolute inset-8 rounded-full border border-dashed border-border" />
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* BUG FIX #1: Changed invalid h-65 w-65 to valid h-48 w-48 */}
              {/* BUG FIX #1: Changed invalid shadow-accent/50 to valid shadow-lg */}
              <div className="h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg" >
              <a href="#home"><img src="https://res.cloudinary.com/dzijek1ob/image/upload/v1779195907/isctxp4bol34n6ufyukg.png" alt="Webrion logo" className="h-full w-full object-contain" /></a></div>
            </div>

            {services.map((s, i) => {
              const Icon = s.icon;
              const cx = 50 + (Math.cos(angle(i)) * radius) / 5.2;
              const cy = 50 + (Math.sin(angle(i)) * radius) / 5.2;
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "scale-110 border-accent bg-accent text-accent-foreground"
                      : "border-border bg-card text-foreground hover:border-accent"
                  }`}
                  style={{ left: `${cx}%`, top: `${cy}%` }}
                  aria-label={s.title}
                >
                  <Icon className="mx-auto h-5 w-5" />
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <div className="space-y-6">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{services[active].title}</h3>
              <p className="mt-4 text-muted-foreground">{services[active].desc}</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {services.map((s, i) => (
                <button
                  key={s.title}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`glow-border rounded-xl border p-3 text-left text-xs transition ${
                    i === active ? "border-accent" : "border-border"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}