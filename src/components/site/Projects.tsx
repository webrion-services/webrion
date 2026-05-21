import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Scholar Allocation",
    description: "A comprehensive scholarship portal designed for HNGU PhD scholars. Features include application management, status tracking, and resource allocation with an intuitive dashboard for seamless navigation.",
    tag: "University Level",
    src: "https://res.cloudinary.com/dzijek1ob/image/upload/v1779193916/khscgcyysrnstsv1afyc.png",
    link: "https://phd.dvthakkar.in",
    color: "#1e1b4b",
    textColor: "#f5f3ff",
    techStack: ["PHP", "MySQL", "JavaScript", "Admin Panel"],
  },
  {
    id: 2,
    title: "Threads & Things",
    description: "An elegant e-commerce platform for handmade crochet goods. Features include AJAX cart functionality, wishlist management, product filtering, smooth checkout with real-time inventory updates.",
    tag: "Crochet Ecommerce",
    src: "https://res.cloudinary.com/dzijek1ob/image/upload/v1779192809/utxvb7ygokfftqxawn1g.png",
    link: "https://threads-things.onrender.com/",
    color: "#7c2d12",
    textColor: "#fff7ed",
    techStack: ["Flask", "Jinja2", "AJAX", "Stripe Integration"],
  },
  {
    id: 3,
    title: "Brain Builder",
    description: "A real-time interactive quiz platform where users test their knowledge and compete with others. Features leaderboards, live scoring, multiple quiz categories, instant feedback with engaging animations.",
    tag: "Game Website",
    src: "https://res.cloudinary.com/dzijek1ob/image/upload/v1779192516/i9hzubmzspsfbihuyxis.png",
    link: "https://brain-builder.onrender.com/",
    color: "#064e3b",
    textColor: "#ecfdf5",
    techStack: ["Flask", "WebSockets", "Real-time DB", "Leaderboard"],
  },
  {
    id: 4,
    title: "Chat-Box",
    description: "A secure real-time messaging application for private conversations. Includes end-to-end encryption, message history, user authentication, and responsive interface for seamless communication.",
    tag: "Real-time Chat App",
    src: "https://res.cloudinary.com/dzijek1ob/image/upload/v1779192442/rh8yrwpeyxtngqc89bjh.png",
    link: "https://chat-box-rhfp.onrender.com/",
    color: "#0c4a6e",
    textColor: "#f0f9ff",
    techStack: ["Flask", "Socket.io", "OAuth", "PostgreSQL"],
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="projects" className="relative overflow-hidden px-4 py-24 sm:px-6 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Featured Work
            </span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-6xl">
              Selected projects, real outcomes.
            </h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#contact");
              if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="magnetic group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            Have one in mind? →
          </a>
        </div>

        {/* Animated Tabs Container */}
        <div className="rounded-3xl border border-border/50 bg-card/30 p-4 backdrop-blur sm:p-6 md:p-8">
          {/* Tab Buttons */}
          <div className="mb-8 flex flex-wrap gap-2 sm:mb-12 sm:gap-3">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setActiveTab(index)}
                className={`relative px-3 py-2 text-xs font-medium transition-colors sm:px-4 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base ${
                  activeTab === index
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-accent/20 border border-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                  />
                )}
                <span className="relative z-10">{project.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-12"
            >
              {/* Image Section */}
              <div className="relative flex items-center justify-center overflow-hidden rounded-2xl md:rounded-3xl">
                <motion.div
                  key={`img-${activeTab}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full"
                  style={{
                    backgroundColor: projects[activeTab].color,
                  }}
                >
                  <div className="aspect-square sm:aspect-video">
                    <img
                      src={projects[activeTab].src}
                      alt={projects[activeTab].title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <motion.div
                key={`content-${activeTab}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-between space-y-4 sm:space-y-6"
              >
                {/* Tag */}
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1 w-8 rounded-full bg-accent" />
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {projects[activeTab].tag}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                    {projects[activeTab].title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                  {projects[activeTab].description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeTab].techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/50 bg-card/50 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur transition-colors hover:border-accent hover:bg-accent/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-3 pt-4">
                  {projects[activeTab].link !== "#" && (
                    <>
                      <a
                        href={projects[activeTab].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-medium text-accent-foreground transition-all hover:scale-105 hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm md:text-base"
                      >
                        View Project <ExternalLink className="h-4 w-4" />
                      </a>
                      <span className="hidden text-xs text-muted-foreground sm:inline">Opens in new tab</span>
                    </>
                  )}
                  {projects[activeTab].link === "#" && (
                    <span className="text-xs font-medium text-muted-foreground">
                      Coming Soon
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators - Mobile Only */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:hidden">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`h-2 rounded-full transition-all ${
                activeTab === index
                  ? "w-8 bg-accent"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}