import { useEffect } from "react";

export function LenisProvider() {
  useEffect(() => {
    // Lenis removed — it intercepts scrollIntoView and window.scrollTo,
    // breaking all programmatic scroll. CSS scroll-behavior: smooth handles
    // smooth scrolling natively.
  }, []);
  return null;
}