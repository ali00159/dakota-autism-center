"use client";

import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const CountUp = ({
  to,
  from = 0,
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  const motionValue = useMotionValue(from);
  
  // Use spring for smooth, clean counting
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      motionValue.set(to);
      return;
    }

    if (inView) {
      motionValue.set(to);
    }
  }, [motionValue, inView, to, shouldReduceMotion]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, decimals]);

  return (
    <motion.span ref={ref} className={className}>
      {shouldReduceMotion ? `${prefix}${to.toFixed(decimals)}${suffix}` : `${prefix}${from.toFixed(decimals)}${suffix}`}
    </motion.span>
  );
};
