import { useMemo } from "react";

export function GridHover({ cols = 34, rows = 24 }: { cols?: number; rows?: number }) {
  const cells = useMemo(() => Array.from({ length: cols * rows }), [cols, rows]);
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_2%,transparent_85%)]"
    >
      <div
        className="pointer-events-auto grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0,1fr))`,
        }}
      >
        {cells.map((_, i) => (
          <div
            key={i}
            className="grid-cell border border-border/40"
          />
        ))}
      </div>
    </div>
  );
}
