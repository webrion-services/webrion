import { ArrowUpRight } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const projects = [
  {
    title: "Scholar allocation for PHD",
    category: "University Level",
    desc: "It is for HNGU who persuing PHD",
    image:
      "https://res.cloudinary.com/dzijek1ob/image/upload/v1779193916/khscgcyysrnstsv1afyc.png",
    accent: "from-indigo-500 to-fuchsia-500",
    source: "#",
  },
  {
    title: "Threads&things",
    category: "Crochet Ecommerce",
    desc: "Crafted preciously, thread by thread. Made for keeping.",
    image:
      "https://res.cloudinary.com/dzijek1ob/image/upload/v1779192809/utxvb7ygokfftqxawn1g.png",
    accent: "from-rose-500 to-orange-400",
    source: "https://threads-things.onrender.com/",
  },
  {
    title: "Brain Builder",
    category: "Game Website",
    desc: "Test your knowledge among all others and play.",
    image:
      "https://res.cloudinary.com/dzijek1ob/image/upload/v1779192516/i9hzubmzspsfbihuyxis.png",
    accent: "from-emerald-500 to-amber-400",
    source: "https://brain-builder.onrender.com/",
  },
  {
    title: "Chat-box",
    category: "Real time chat app",
    desc: "Share your private idea secretly",
    image:
      "https://res.cloudinary.com/dzijek1ob/image/upload/v1779192442/rh8yrwpeyxtngqc89bjh.png",
    accent: "from-sky-500 to-cyan-400",
    source: "https://chat-box-rhfp.onrender.com/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden pt-32">
      <div className="mx-auto mb-12 max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Featured Work
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Selected projects, real outcomes.
            </h2>
          </div>
          <a
            href="#contact"
            className="magnetic group inline-flex items-center gap-2 text-sm font-medium"
          >
            Have one in mind?{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/*
        ScrollStack props tuned for stability:
        - itemDistance=100   : vertical gap between cards before stacking
        - itemScale=0.03     : each stacked card shrinks by 3% per level
        - baseScale=0.9      : minimum scale of the bottom-most card
        - itemStackDistance=28: pixel offset between stacked cards so you see the stack
        - stackPosition="18%": card pins when its top is 18% from viewport top
        - useWindowScroll    : uses window scroll (works with Lenis)
      */}
      <ScrollStack
        useWindowScroll
        itemDistance={100}
        itemScale={0.03}
        baseScale={0.9}
        itemStackDistance={28}
        stackPosition="18%"
        scaleEndPosition="10%"
      >
        {projects.map((p) => (
          <ScrollStackItem key={p.title}>
            <div className="relative grid h-full w-full grid-cols-1 overflow-hidden rounded-[28px] border border-border bg-card text-card-foreground shadow-2xl md:grid-cols-2">
              {/* Text section */}
              <div className="relative flex flex-col justify-between gap-4 p-5 md:gap-8 md:p-12">
                <div className="flex items-start justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {p.category}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-muted-foreground md:mt-4 md:text-base">
                    {p.desc}
                  </p>
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition hover:opacity-90 md:mt-8 md:px-5 md:py-2.5"
                  >
                    View Project
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:h-3.5 md:w-3.5" />
                  </a>
                </div>
              </div>
              {/* Image section */}
              <div className="relative h-44 overflow-hidden sm:h-52 md:h-auto md:min-h-[280px]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-30 mix-blend-overlay z-10 pointer-events-none`}
                />
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
