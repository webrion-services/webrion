import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Scholar Allocation",
    category: "University Platform",
    description:
      "A complete scholarship management system built for HNGU PhD scholars with dashboards, approvals, tracking, and administration workflows.",
    image:
      "https://res.cloudinary.com/dzijek1ob/image/upload/w_1600,f_webp,q_auto/v1779379434/wzpnlqajajahyjwj459w.png",
    link: "https://phd.dvthakkar.in",
    tech: ["PHP", "MySQL", "Dashboard", "Admin"],
    accent: "from-indigo-500/20 to-violet-500/5",
  },
  {
    id: "02",
    title: "Threads & Things",
    category: "Luxury Ecommerce",
    description:
      "Handcrafted crochet ecommerce experience with premium UI interactions, AJAX cart system, wishlist, and optimized shopping flow.",
    image:
      "https://res.cloudinary.com/dzijek1ob/image/upload/w_1600,f_webp,q_auto/v1779192809/utxvb7ygokfftqxawn1g.png",
    link: "https://threads-things.onrender.com/",
    tech: ["Flask", "Stripe", "AJAX", "Ecommerce"],
    accent: "from-orange-500/20 to-amber-500/5",
  },
  {
    id: "03",
    title: "Brain Builder",
    category: "Interactive Quiz Platform",
    description:
      "Real-time multiplayer quiz application with animated scoreboards, category battles, and competitive ranking systems.",
    image:
      "https://res.cloudinary.com/dzijek1ob/image/upload/w_1600,f_webp,q_auto/v1779379237/dbdhtbcfpyx4rjwyk92n.png",
    link: "https://brain-builder.onrender.com/",
    tech: ["Realtime", "Leaderboard", "Sockets", "Gaming"],
    accent: "from-emerald-500/20 to-green-500/5",
  },
  {
    id: "04",
    title: "Chat Box",
    category: "Realtime Messaging",
    description:
      "Encrypted realtime chat platform with secure authentication, socket communication, persistent storage, and smooth messaging experience.",
    image:
      "https://res.cloudinary.com/dzijek1ob/image/upload/w_1600,f_webp,q_auto/v1779192442/rh8yrwpeyxtngqc89bjh.png",
    link: "https://chat-box-rhfp.onrender.com/",
    tech: ["Socket.io", "OAuth", "Realtime", "PostgreSQL"],
    accent: "from-cyan-500/20 to-sky-500/5",
  },
];

export function Projects() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background px-4 py-20 text-foreground sm:px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-20%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-4 inline-block text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Featured Projects
            </span>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
              Crafting Digital
              <br />
              <span className="text-muted-foreground">
                Experiences
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Modern projects designed with smooth interactions,
            performance-focused layouts, and clean user experiences.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative overflow-hidden rounded-[28px] border border-border bg-card/70 md:backdrop-blur-md">
          {/* Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br opacity-70 transition-all duration-500 ${projects[active].accent}`}
          />

          <div className="relative grid items-center gap-8 p-4 md:p-6 lg:grid-cols-[1fr_0.95fr] lg:p-8">
            {/* Image */}
            <div className="relative flex items-center justify-center overflow-hidden rounded-[22px] border border-border bg-background/40 min-h-[220px] sm:min-h-[300px] lg:min-h-[420px]">
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={projects[active].image}
                  src={projects[active].image}
                  alt={projects[active].title}
                  loading="lazy"
                  decoding="async"
                  initial={{
                    opacity: 0,
                    scale: 1.01,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="h-full w-full object-contain p-2 sm:p-4"
                />
              </AnimatePresence>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={projects[active].id}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <span className="mb-3 inline-block text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    {projects[active].category}
                  </span>

                  <h3 className="text-3xl font-black leading-tight sm:text-5xl">
                    {projects[active].title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {projects[active].description}
                  </p>

                  {/* Tech */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {projects[active].tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs text-muted-foreground sm:text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={projects[active].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity duration-300 hover:opacity-90"
                  >
                    Explore Project

                    <ArrowUpRight className="h-4 w-4 opacity-80" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActive(index)}
              className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                active === index
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card/50 text-muted-foreground hover:border-primary/30"
              }`}
            >
              {project.id}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}