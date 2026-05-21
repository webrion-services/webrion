import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PixelHoverGrid } from "./PixelHoverGrid";
import { SplitReveal } from "./SplitReveal";

function scrollTo(id: string, e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  history.pushState(null, "", `#${id}`);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 md:px-12"
    >
      <PixelHoverGrid
        className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]"
      />
      <div className="blob -left-32 top-20 h-[420px] w-[420px] bg-accent/40" />
      <div className="blob right-0 top-40 h-[360px] w-[360px] bg-primary/20" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          {/* FIX: Added "Ahmedabad, India" for local SEO signal in visible text */}
          Web development studio · Ahmedabad, India · Est. 2026
        </motion.div>

        <SplitReveal
          as="h1"
          delay={1.5}
          text="High-Performance Websites & Web Applications Built for Growth"
          className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.7 }}
          className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          {/* FIX: Rewritten — shorter, sharper, includes price anchor and location.
              Original was generic AI-sounding boilerplate. This version is specific,
              human, and contains the keywords users actually search for. */}
          We build custom websites, ecommerce stores, and React web apps for Indian startups and
          global brands — fast, conversion-focused, and starting at ₹14,999. Based in Ahmedabad,
          we ship like it's our own product.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            onClick={(e) => scrollTo("contact", e)}
            className="magnetic group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:bg-accent hover:text-accent-foreground"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollTo("projects", e)}
            className="magnetic group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 text-sm font-medium backdrop-blur transition hover:border-accent"
          >
            View Portfolio
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-[-3rem] right-4 hidden flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex"
        >
          <span>Scroll</span>
          <div className="relative h-12 w-px overflow-hidden bg-border">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 h-1/2 bg-accent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
