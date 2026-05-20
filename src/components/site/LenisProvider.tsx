import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6, // ← Faster, snappier feel
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ← Exponential easing
      lerp: 0.08, // ← Slightly higher for more responsive feel
      wheelMultiplier: 1.1,
      touchMultiplier: 1.0,
      gestureOrientation: "vertical",
      normalizeWheel: true,
      smoothWheel: true,
      syncTouch: false,
    });

    let raf: number;

    // High-precision RAF loop
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}