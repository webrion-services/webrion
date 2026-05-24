import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

const LOGO = "/logo.webp";

type NavItem = {
  label: string;
  to?: string;
  hash?: string; // home section anchor
  children?: { label: string; to: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/services/web-development",
    children: [
      { label: "Web Development", to: "/services/web-development" },
      { label: "SEO Services", to: "/services/seo-services" },
      { label: "E-commerce Development", to: "/services/ecommerce-development" },
      { label: "UI/UX Design", to: "/services/ui-ux-design" },
      { label: "Web App Development", to: "/services/web-application-development" },
      { label: "Website Maintenance", to: "/services/website-maintenance" },
    ],
  },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blogs", to: "/blogs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function goHomeHash(hash: string) {
  if (typeof window === "undefined") return;
  if (window.location.pathname !== "/") {
    window.location.assign(`/#${hash}`);
    return;
  }
  const el = document.getElementById(hash);
  if (!el) return;
  history.pushState(null, "", `#${hash}`);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-0 ${
          scrolled ? "w-[94%] md:w-[88%] lg:w-[82%]" : "w-[96%] md:w-[92%] lg:w-[88%]"
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-full border border-border px-4 py-3.5 backdrop-blur-xl transition-all ${
            scrolled
              ? "bg-background/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]"
              : "bg-background/40"
          }`}
        >
          <Link
            to="/"
            className="group flex items-center gap-1.5 font-bold cursor-pointer"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <img
              src={LOGO}
              alt="Webrion logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain site-logo"
              loading="eager"
              fetchPriority="high"
            />
            <span>Webrion</span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) => {
              const isActive =
                item.to &&
                (item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to ||
                    (item.children && pathname.startsWith(item.to.split("/").slice(0, 3).join("/"))));

              if (item.children) {
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenSub(item.label)}
                    onMouseLeave={() => setOpenSub(null)}
                  >
                    <Link
                      to={item.to!}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors hover:text-foreground ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3 w-3" />
                    </Link>
                    <AnimatePresence>
                      {openSub === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                        >
                          <div className="min-w-[240px] rounded-2xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl">
                            {item.children.map((c) => (
                              <Link
                                key={c.to}
                                to={c.to}
                                className="block rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                              >
                                {c.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    to={item.to!}
                    className={`rounded-full px-3 py-1.5 text-sm transition-colors hover:text-foreground ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Let's Build
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden magnetic inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur"
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
            className="fixed inset-x-4 top-20 z-40 max-h-[80vh] overflow-y-auto rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenSub(openSub === item.label ? null : item.label)
                        }
                        className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-3 w-3 transition-transform ${
                            openSub === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openSub === item.label && (
                        <div className="ml-3 mt-1 border-l border-border pl-3">
                          {item.children.map((c) => (
                            <Link
                              key={c.to}
                              to={c.to}
                              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.to!}
                      className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to="/contact"
                  className="block rounded-xl bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
