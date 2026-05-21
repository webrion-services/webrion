import { useLayoutEffect, useRef, useCallback, type ReactNode } from "react";
import "./ScrollStack.css";

export const ScrollStackItem = ({
  children,
  itemClassName = "",
}: {
  children: ReactNode;
  itemClassName?: string;
}) => <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>;

type Props = {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
};

// Detect a real touch device — DevTools emulation has no ontouchstart.
// We use this to switch to a continuous RAF loop on mobile, which reads
// scrollY every frame and is always in sync with the current paint.
// On desktop, scroll-event-driven RAF is fine and wastes less CPU.
const isTouchDevice =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete,
}: Props) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const endSpacerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  // Offsets stored as absolute document positions via offsetTop traversal.
  // offsetTop is scroll-position-independent — unlike getBoundingClientRect+scrollY
  // which drifts during momentum scroll on real mobile devices.
  const naturalOffsetsRef = useRef<number[]>([]);
  const pinEndRef = useRef<number>(0);

  const containerHeightRef = useRef<number>(0);
  const isScrollingRef = useRef(false);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resizeRecomputePendingRef = useRef(false);

  // For the continuous RAF loop on mobile: track last scrollY so we only
  // run updateCardTransforms when the scroll position actually changed.
  const lastScrollYRef = useRef<number>(-1);
  const rafLoopActiveRef = useRef(false);

  const lockContainerHeight = useCallback(() => {
    if (!useWindowScroll) {
      containerHeightRef.current = scrollerRef.current?.clientHeight ?? 0;
      return;
    }
    // clientHeight is stable during scroll — does not react to browser chrome collapsing
    containerHeightRef.current = document.documentElement.clientHeight;
  }, [useWindowScroll]);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(String(value));
  }, []);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (end <= start) return scrollTop >= start ? 1 : 0;
    if (scrollTop <= start) return 0;
    if (scrollTop >= end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  // offsetTop traversal: scroll-position-independent, never drifts during momentum scroll
  const getOffsetTopFromDocument = useCallback((el: HTMLElement): number => {
    let top = 0;
    let current: HTMLElement | null = el;
    while (current) {
      top += current.offsetTop;
      current = current.offsetParent as HTMLElement | null;
    }
    return top;
  }, []);

  const computeNaturalOffsets = useCallback(() => {
    const cards = cardsRef.current;
    const endSpacer = endSpacerRef.current;
    const scroller = scrollerRef.current;
    if (!cards.length || !scroller) return;

    lockContainerHeight();
    const containerHeight = containerHeightRef.current;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const totalCards = cards.length;

    // Reset transforms before measuring so offsetTop reflects natural layout
    cards.forEach((c) => {
      c.style.transform = "none";
      c.style.opacity = "1";
    });
    void scroller.offsetHeight; // force single reflow

    naturalOffsetsRef.current = cards.map((card) => getOffsetTopFromDocument(card));

    const offsets = naturalOffsetsRef.current;
    const lastCardHeight = cards[totalCards - 1].offsetHeight;

    const lastPinStart =
      offsets[totalCards - 1] - stackPositionPx - itemStackDistance * (totalCards - 1);
    const dwellScroll = containerHeight * 0.6;
    const requiredPinEnd = lastPinStart + dwellScroll;

    const baseEndSpacerTop = offsets[totalCards - 1] + lastCardHeight;
    const spacerHeight = Math.max(
      containerHeight,
      requiredPinEnd + stackPositionPx - baseEndSpacerTop + containerHeight * 0.2
    );

    if (endSpacer) endSpacer.style.height = `${spacerHeight}px`;
    void endSpacer?.offsetHeight;

    const endSpacerAbsTop = endSpacer ? getOffsetTopFromDocument(endSpacer) : 0;
    pinEndRef.current = endSpacerAbsTop - stackPositionPx;

    // Do NOT restore old transforms — updateCardTransforms() recomputes them correctly
  }, [
    useWindowScroll,
    stackPosition,
    itemStackDistance,
    parsePercentage,
    getOffsetTopFromDocument,
    lockContainerHeight,
  ]);

  const updateCardTransforms = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const scrollTop = useWindowScroll
      ? window.scrollY
      : (scrollerRef.current?.scrollTop ?? 0);

    const containerHeight = containerHeightRef.current;
    if (!containerHeight) return;

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const totalCards = cards.length;
    const offsets = naturalOffsetsRef.current;
    const pinEnd = pinEndRef.current;

    if (!offsets.length || pinEnd === 0) return;

    cards.forEach((card, i) => {
      if (!card) return;

      const cardTop = offsets[i];
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = triggerStart;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < totalCards; j++) {
          const jTriggerStart = offsets[j] - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) topCardIndex = j;
        }
        if (i < topCardIndex) blur = Math.max(0, (topCardIndex - i) * blurAmount);
      }

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const zIndex = i + 1;

      let opacity = 1;
      if (i < totalCards - 1) {
        const nextPinStart =
          offsets[i + 1] - stackPositionPx - itemStackDistance * (i + 1);
        const hideProgress = calculateProgress(
          scrollTop,
          nextPinStart + 150,
          nextPinStart + 450
        );
        opacity = 1 - hideProgress;
      }

      card.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(2)}deg)`;
      card.style.zIndex = String(zIndex);
      card.style.opacity = opacity.toFixed(3);
      if (blurAmount) {
        card.style.filter = blur > 0 ? `blur(${blur.toFixed(2)}px)` : "";
      }
    });

    const lastCardTop = offsets[totalCards - 1];
    const lastPinStart =
      lastCardTop - stackPositionPx - itemStackDistance * (totalCards - 1);
    const isInView = scrollTop >= lastPinStart && scrollTop <= pinEnd;
    if (isInView && !stackCompletedRef.current) {
      stackCompletedRef.current = true;
      onStackComplete?.();
    } else if (!isInView && stackCompletedRef.current) {
      stackCompletedRef.current = false;
    }
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    useWindowScroll,
  ]);

  // ─── MOBILE: continuous RAF loop ────────────────────────────────────────────
  // On real mobile devices, scroll events fire asynchronously and can arrive
  // between paint frames during momentum/fling scrolling. Reading scrollY inside
  // a scroll event callback gives you a value that's already one frame behind
  // where the browser painted — the card transform lags one frame behind the
  // scroll position and that lag is visible as jitter.
  //
  // A continuous RAF loop reads scrollY at the exact moment the browser is about
  // to paint, so the transform is always computed from the same scrollY value
  // that the browser uses for that frame — zero lag, zero jitter.
  //
  // We only run the transform update when scrollY has actually changed so this
  // loop has negligible CPU cost when the page is static.
  const startRafLoop = useCallback(() => {
    if (rafLoopActiveRef.current) return;
    rafLoopActiveRef.current = true;

    const loop = () => {
      if (!rafLoopActiveRef.current) return;
      const currentScrollY = window.scrollY;
      if (currentScrollY !== lastScrollYRef.current) {
        lastScrollYRef.current = currentScrollY;
        updateCardTransforms();
      }
      animationFrameRef.current = requestAnimationFrame(loop);
    };
    animationFrameRef.current = requestAnimationFrame(loop);
  }, [updateCardTransforms]);

  const stopRafLoop = useCallback(() => {
    rafLoopActiveRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  // ─── DESKTOP: scroll-event-driven single RAF ────────────────────────────────
  const scheduleUpdate = useCallback(() => {
    if (animationFrameRef.current) return;
    animationFrameRef.current = requestAnimationFrame(() => {
      animationFrameRef.current = null;
      updateCardTransforms();
    });
  }, [updateCardTransforms]);

  const handleScroll = useCallback(() => {
    isScrollingRef.current = true;
    if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    scrollEndTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 200);
    scheduleUpdate();
  }, [scheduleUpdate]);

  const handleResize = useCallback(() => {
    if (isScrollingRef.current) return;
    setTimeout(() => {
      if (isScrollingRef.current) return;
      computeNaturalOffsets();
      updateCardTransforms();
    }, 200);
  }, [computeNaturalOffsets, updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      scroller.querySelectorAll<HTMLElement>(".scroll-stack-card")
    );
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      card.style.marginBottom = i < cards.length - 1 ? `${itemDistance}px` : "";
      card.style.willChange = "transform, opacity";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      (card.style as any).WebkitBackfaceVisibility = "hidden";
      card.style.position = "relative";
      card.style.zIndex = String(i + 1);
      card.style.transition = "none";
    });

    const initTimer = setTimeout(() => {
      computeNaturalOffsets();
      updateCardTransforms();
      // Start the continuous loop immediately after first render on mobile
      if (isTouchDevice && useWindowScroll) {
        startRafLoop();
      }
    }, 150);

    // ResizeObserver watches the scroller only (not individual cards).
    // Cards are excluded because any transform change would fire the observer
    // during scroll, causing layout thrash on mobile.
    const resizeObserver = new ResizeObserver(() => {
      if (isScrollingRef.current) return;
      if (resizeRecomputePendingRef.current) return;
      resizeRecomputePendingRef.current = true;
      setTimeout(() => {
        resizeRecomputePendingRef.current = false;
        if (isScrollingRef.current) return;
        computeNaturalOffsets();
        updateCardTransforms();
      }, 250);
    });
    resizeObserver.observe(scroller);

    window.addEventListener("resize", handleResize, { passive: true });

    const handleOrientationChange = () => {
      setTimeout(() => {
        computeNaturalOffsets();
        updateCardTransforms();
      }, 350);
    };
    window.addEventListener("orientationchange", handleOrientationChange);

    // On desktop use scroll events. On mobile the RAF loop handles updates
    // so we skip the scroll listener entirely to avoid double-updates.
    if (!isTouchDevice || !useWindowScroll) {
      if (useWindowScroll) {
        window.addEventListener("scroll", handleScroll, { passive: true });
      } else {
        scroller.addEventListener("scroll", handleScroll, { passive: true });
      }
    }

    return () => {
      clearTimeout(initTimer);
      stopRafLoop();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
      if (!isTouchDevice || !useWindowScroll) {
        if (useWindowScroll) {
          window.removeEventListener("scroll", handleScroll);
        } else {
          scroller.removeEventListener("scroll", handleScroll);
        }
      }
      resizeObserver.disconnect();
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
      isScrollingRef.current = false;
      resizeRecomputePendingRef.current = false;
      stackCompletedRef.current = false;
      cardsRef.current = [];
      naturalOffsetsRef.current = [];
      pinEndRef.current = 0;
      containerHeightRef.current = 0;
      lastScrollYRef.current = -1;
    };
  }, [
    itemDistance,
    useWindowScroll,
    handleScroll,
    handleResize,
    updateCardTransforms,
    computeNaturalOffsets,
    startRafLoop,
    stopRafLoop,
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" ref={endSpacerRef} />
      </div>
    </div>
  );
};

export default ScrollStack;