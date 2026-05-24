// Lightweight, JS-free animated grid background.
// Replaces the previous framer-motion + 400-cell mouse-tracked grid that was
// the biggest JS perf hit on the home page. This version is a single div
// rendered with two layered CSS gradients (the grid lines) plus a slow CSS
// keyframe shimmer — zero runtime JS, zero re-renders, zero observers.
//
// API is kept the same (className prop) so existing call sites still work.

type Props = {
  className?: string;
  // kept for API compatibility — ignored
  gridSize?: number;
  colors?: string[];
  animationDuration?: number;
  maxOpacity?: number;
  borderColor?: string;
};

export function PixelHoverGrid({ className = "" }: Props) {
  return (
    <div
      aria-hidden
      className={`pixel-grid-bg ${className}`}
    />
  );
}
