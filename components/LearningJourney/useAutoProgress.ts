"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";

const ANIMATION_DURATION = 12000; // 12 seconds total journey

export function useAutoProgress(triggerRef: React.RefObject<HTMLElement | null>): MotionValue<number> {
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });
  const hasStarted = useRef(false);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    const startAnimation = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;

      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
        rawProgress.set(progress);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };
      rafRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) startAnimation(); },
      { threshold: 0.2 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [triggerRef, rawProgress]);

  return smoothProgress;
}
