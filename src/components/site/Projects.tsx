import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Scholar Allocation",
    description:
      "A comprehensive scholarship portal designed for HNGU PhD scholars. Features include application management, status tracking, and resource allocation with an intuitive dashboard for seamless navigation.",
    tag: "University Level",
    src: "https://res.cloudinary.com/dzijek1ob/image/upload/w_800,f_webp,q_auto/v1779193916/khscgcyysrnstsv1afyc.png",
    // FIX: descriptive, keyword-rich alt text
    alter: "PhD scholarship management portal with application tracking dashboard for HNGU university",
    link: "https://phd.dvthakkar.in",
    color: "#1e1b4b",
    textColor: "#f5f3ff",
    techStack: ["PHP", "MySQL", "JavaScript", "Admin Panel"],
  },
  {
    id: 2,
    title: "Threads & Things",
    description:
      "An elegant e-commerce platform for handmade crochet goods. Features include AJAX cart functionality, wishlist management, product filtering, smooth checkout with real-time inventory updates.",
    tag: "Crochet Ecommerce",
    src: "https://res.cloudinary.com/dzijek1ob/image/upload/w_800,f_webp,q_auto/v1779192809/utxvb7ygokfftqxawn1g.png",
    // FIX: removed vague "Fully functional e commerce platform"
    alter: "Handmade crochet goods ecommerce store with AJAX cart, wishlist, and Stripe payment integration",
    link: "https://threads-things.onrender.com/",
    color: "#7c2d12",
    textColor: "#fff7ed",
    techStack: ["Flask", "Jinja2", "AJAX", "Stripe Integration"],
  },
  {
    id: 3,
    title: "Brain Builder",
    description:
      "A real-time interactive quiz platform where users test their knowledge and compete with others. Features leaderboards, live scoring, multiple quiz categories, instant feedback with engaging animations.",
    tag: "Game Website",
    src: "https://res.cloudinary.com/dzijek1ob/image/upload/w_800,f_webp,q_auto/v1779192516/i9hzubmzspsfbihuyxis.png",
    link: "https://brain-builder.onrender.com/",
    // FIX: removed typo "websie", replaced with descriptive alt
    alter: "Real-time multiplayer quiz game website with live leaderboard and instant scoring",
    color: "#064e3b",
    textColor: "#ecfdf5",
    techStack: ["Flask", "WebSockets", "Real-time DB", "Leaderboard"],
  },
  {
    id: 4,
    title: "Chat-Box",
    description:
      "A secure real-time messaging application for private conversations. Includes end-to-end encryption, message history, user authentication, and responsive interface for seamless communication.",
    tag: "Real-time Chat App",
    src: "https://res.cloudinary.com/dzijek1ob/image/upload/w_800,f_webp,q_auto/v1779192442/rh8yrwpeyxtngqc89bjh.png",
    // FIX: removed vague "quick message sharing platform"
    alter: "Encrypted real-time chat application with OAuth authentication and PostgreSQL message history",
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
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:border-accent"
          >
            Start a project
            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(i)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                i === activeTab
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted-foreground hover:border-accent"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Active project */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="grid gap-8 overflow-hidden rounded-3xl border border-border lg:grid-cols-2"
            style={{ background: projects[activeTab].color }}
          >
            {/* Text */}
            <div className="flex flex-col justify-center p-8 md:p-12" style={{ color: projects[activeTab].textColor }}>
              <span className="text-xs uppercase tracking-[0.2em] opacity-60">{projects[activeTab].tag}</span>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {projects[activeTab].title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed opacity-80">{projects[activeTab].description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {projects[activeTab].techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs opacity-70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={projects[activeTab].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-white/20"
                style={{ color: projects[activeTab].textColor }}
              >
                View Live Site
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Image */}
            <div className="relative min-h-[280px] overflow-hidden">
              <img
                src={projects[activeTab].src}
                // FIX: use descriptive alt from the project data
                alt={projects[activeTab].alter}
                className="h-full w-full object-cover object-top"
                // FIX: explicit width/height prevents Cumulative Layout Shift (CLS)
                width={800}
                height={500}
                loading="lazy"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
