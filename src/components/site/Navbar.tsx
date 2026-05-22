import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

// FIX: Use local public path for logo to improve LCP + avoid Cloudinary round-trip
// You must copy your logo PNG to public/logo.png
const LOGO_NO_BG = "https://res.cloudinary.com/dzijek1ob/image/upload/v1779195907/isctxp4bol34n6ufyukg.png";

const links = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
  { id: "FAQ", label: "FAQ" },
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
    window.addEventListener("scroll", onScroll, { passive: true });
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
            {/* FIX: explicit width/height prevents layout shift (CLS) */}
            <img
              src={LOGO_NO_BG}
              alt="Webrion logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              loading="eager"
              fetchPriority="high"
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
            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden magnetic inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => handleNav(l.id)}
                    className="w-full rounded-xl px-4 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground cursor-pointer bg-transparent border-none"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
