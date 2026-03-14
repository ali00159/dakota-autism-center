"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useRef } from "react";

interface ParallaxImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  offset?: number;
}

export const ParallaxImage = ({
  src,
  alt,
  className = "",
  imageClassName = "",
  offset = 50,
  ...props
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Very subtle parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : y }}
        className="absolute inset-0 h-[120%] w-full -top-[10%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${imageClassName}`}
          {...props}
        />
      </motion.div>
    </div>
  );
};
