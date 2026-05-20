import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  gridSize?: number;
  colors?: string[];
  animationDuration?: number;
  maxOpacity?: number;
  borderColor?: string;
  className?: string;
};

export function PixelHoverGrid({
  gridSize = 28,
  colors = ["#FF5588", "#0099FF", "#22CC66", "#FFBB00"],
  animationDuration = 0.8,
  maxOpacity = 0.55,
  borderColor = "color-mix(in oklab, var(--foreground) 10%, transparent)",
  className = "",
}: Props) {
  const [animating, setAnimating] = useState<Set<string>>(new Set());
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const update = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setDims({ w: r.width, h: r.height });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  // Use a smaller effective gridSize on mobile so cells are thinner/more numerous
  const effectiveGridSize = dims.w < 768 ? Math.max(12, gridSize * 0.45) : gridSize;
  const cols = Math.max(6, Math.floor(dims.w / Math.max(8, dims.w / effectiveGridSize)));
  const rows = Math.max(6, Math.floor(dims.h / Math.max(8, dims.w / effectiveGridSize)));

  const pixels = useMemo(() => {
    const arr: { id: string }[] = [];
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++) arr.push({ id: `${r}-${c}` });
    return arr;
  }, [rows, cols]);

  const onEnter = useCallback((id: string) => {
    setAnimating((p) => {
      if (p.has(id)) return p;
      const n = new Set(p);
      n.add(id);
      return n;
    });
  }, []);

  const onDone = useCallback((id: string) => {
    setAnimating((p) => {
      const n = new Set(p);
      n.delete(id);
      return n;
    });
  }, []);

  const colorFor = (id: string) => {
    const h = id.split("-").reduce((a, v) => a + parseInt(v), 0);
    return colors[h % colors.length];
  };

  return (
    <div
      ref={ref}
      aria-hidden
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {pixels.map((p) => {
        const isAnim = animating.has(p.id);
        return (
          <div
            key={p.id}
            onMouseEnter={() => onEnter(p.id)}
            style={{ position: "relative", border: `1px solid ${borderColor}` }}
          >
            <AnimatePresence>
              {isAnim && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0, maxOpacity, maxOpacity * 0.7, 0],
                    scale: [0.8, 1, 1.1, 1.2],
                  }}
                  exit={{ opacity: 0, scale: 1.3 }}
                  transition={{
                    duration: animationDuration,
                    ease: "easeOut",
                    times: [0, 0.3, 0.7, 1],
                  }}
                  onAnimationComplete={() => onDone(p.id)}
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: colorFor(p.id),
                    borderRadius: 2,
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}