import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const LOGO_NO_BG = "https://res.cloudinary.com/dzijek1ob/image/upload/v1779195907/isctxp4bol34n6ufyukg.png";
const LOGO_WITH_BG = "https://res.cloudinary.com/dzijek1ob/image/upload/v1779195783/daj2ioszyjfp9zxdumx4.jpg";

const links = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  history.pushState(null, "", `#${id}`);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    const wasOpen = open;
    setOpen(false);
    setTimeout(() => scrollTo(id), wasOpen ? 300 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${
          scrolled ? "w-[92%] md:w-[78%]" : "w-[96%] md:w-[88%]"
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-full border border-border px-5 py-2 backdrop-blur-xl transition-all ${
            scrolled
              ? "bg-background/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]"
              : "bg-background/40"
          }`}
        >
          <button
            onClick={() => handleNav("home")}
            className="group flex items-center gap-1 font-bold cursor-pointer bg-transparent border-none p-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <img
              src={LOGO_NO_BG}
              alt="Webrion logo"
              className="h-8 w-auto object-contain"
              style={{ maxWidth: "120px" }}
            />
            Webrion
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => handleNav(l.id)}
                  className="relative rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer bg-transparent border-none"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => handleNav("contact")}
              className="magnetic hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-accent hover:text-accent-foreground md:inline-flex cursor-pointer border-none"
            >
              Start a Project
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-[75] flex flex-col bg-foreground text-background"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <img
                src={LOGO_WITH_BG}
                alt="Webrion logo"
                className="h-8 w-auto object-contain rounded-xl"
                style={{ maxWidth: "120px" }}
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/30"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-6 text-4xl font-semibold tracking-tight">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <button
                    onClick={() => handleNav(l.id)}
                    style={{ fontFamily: "var(--font-display)" }}
                    className="transition-colors hover:text-accent cursor-pointer bg-transparent border-none"
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}