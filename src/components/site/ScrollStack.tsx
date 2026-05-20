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
  const naturalOffsetsRef = useRef<number[]>([]);
  const pinEndRef = useRef<number>(0);
  const rafScheduledRef = useRef(false);
  const containerHeightRef = useRef<number>(0);
  const isScrollingRef = useRef(false);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lockContainerHeight = useCallback(() => {
    if (!useWindowScroll) {
      containerHeightRef.current = scrollerRef.current?.clientHeight ?? 0;
      return;
    }
    if (typeof window !== "undefined" && window.visualViewport) {
      containerHeightRef.current = window.visualViewport.height;
    } else {
      containerHeightRef.current = document.documentElement.clientHeight;
    }
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

  // Use getBoundingClientRect + scrollY for accurate absolute positions
  // This is more reliable than offsetTop traversal when there are transforms active
  const getAbsoluteTop = useCallback((el: HTMLElement): number => {
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY;
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

    // Strip all transforms before measuring
    const savedTransforms = cards.map((c) => c.style.transform);
    const savedOpacities = cards.map((c) => c.style.opacity);
    cards.forEach((c) => {
      c.style.transform = "none";
      c.style.opacity = "1";
    });
    // Force reflow
    void scroller.offsetHeight;

    naturalOffsetsRef.current = cards.map((card) => getAbsoluteTop(card));

    const offsets = naturalOffsetsRef.current;
    const lastCardHeight = cards[totalCards - 1].getBoundingClientRect().height;

    const lastPinStart = offsets[totalCards - 1] - stackPositionPx - itemStackDistance * (totalCards - 1);
    const dwellScroll = containerHeight * 0.6;
    const requiredPinEnd = lastPinStart + dwellScroll;

    const baseEndSpacerTop = offsets[totalCards - 1] + lastCardHeight;
    const spacerHeight = Math.max(
      containerHeight,
      requiredPinEnd + stackPositionPx - baseEndSpacerTop + containerHeight * 0.2
    );

    if (endSpacer) {
      endSpacer.style.height = `${spacerHeight}px`;
    }

    void endSpacer?.offsetHeight;

    const endSpacerAbsTop = endSpacer ? getAbsoluteTop(endSpacer) : 0;
    pinEndRef.current = endSpacerAbsTop - stackPositionPx;

    // Restore
    cards.forEach((c, i) => {
      c.style.transform = savedTransforms[i];
      c.style.opacity = savedOpacities[i];
    });
  }, [useWindowScroll, stackPosition, itemStackDistance, parsePercentage, getAbsoluteTop, lockContainerHeight]);

  const updateCardTransforms = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const scrollTop = Math.round(
      useWindowScroll ? window.scrollY : (scrollerRef.current?.scrollTop ?? 0)
    );

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
        if (i < topCardIndex) {
          blur = Math.max(0, (topCardIndex - i) * blurAmount);
        }
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
        const nextPinStart = offsets[i + 1] - stackPositionPx - itemStackDistance * (i + 1);
        const hideProgress = calculateProgress(scrollTop, nextPinStart + 50, nextPinStart + 250);
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
    const lastPinStart = lastCardTop - stackPositionPx - itemStackDistance * (totalCards - 1);
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

  const scheduleUpdate = useCallback(() => {
    if (rafScheduledRef.current) return;
    rafScheduledRef.current = true;
    animationFrameRef.current = requestAnimationFrame(() => {
      rafScheduledRef.current = false;
      updateCardTransforms();
    });
  }, [updateCardTransforms]);

  const handleScroll = useCallback(() => {
    isScrollingRef.current = true;
    if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    scrollEndTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 150);
    scheduleUpdate();
  }, [scheduleUpdate]);

  const handleResize = useCallback(() => {
    if (isScrollingRef.current) return;
    // Small delay to let layout settle after resize
    setTimeout(() => {
      computeNaturalOffsets();
      scheduleUpdate();
    }, 100);
  }, [computeNaturalOffsets, scheduleUpdate]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll<HTMLElement>(".scroll-stack-card"));
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

    // Delay initial measure to let fonts/images load and layout settle
    const initTimer = setTimeout(() => {
      computeNaturalOffsets();
      updateCardTransforms();
    }, 120);

    const resizeObserver = new ResizeObserver(() => {
      if (isScrollingRef.current) return;
      computeNaturalOffsets();
      scheduleUpdate();
    });
    resizeObserver.observe(scroller);
    cards.forEach((card) => resizeObserver.observe(card));

    window.addEventListener("resize", handleResize, { passive: true });

    if (useWindowScroll) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      scroller.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("resize", handleResize);
      if (useWindowScroll) {
        window.removeEventListener("scroll", handleScroll);
      } else {
        scroller.removeEventListener("scroll", handleScroll);
      }
      resizeObserver.disconnect();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
      rafScheduledRef.current = false;
      isScrollingRef.current = false;
      stackCompletedRef.current = false;
      cardsRef.current = [];
      naturalOffsetsRef.current = [];
      pinEndRef.current = 0;
      containerHeightRef.current = 0;
    };
  }, [itemDistance, useWindowScroll, handleScroll, handleResize, scheduleUpdate, updateCardTransforms, computeNaturalOffsets]);

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
