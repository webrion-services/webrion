/**
 * Scrolls to a section by its element ID.
 * Uses Lenis if available (required when Lenis smooth scroll is active),
 * otherwise falls back to native scrollIntoView.
 */
declare global {
  interface Window {
    __lenis?: { scrollTo: (target: Element, opts?: { offset?: number }) => void };
  }
}

export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(target, { offset: -80 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
