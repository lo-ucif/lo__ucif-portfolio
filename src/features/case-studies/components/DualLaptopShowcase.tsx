import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { LaptopMockups } from "@/features/case-studies/types";
import { useAppReady } from "@/store/AppReadyContext";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/constants/motion";

interface DualLaptopShowcaseProps {
  laptops: LaptopMockups;
  title: string;
  isCardHovered?: boolean;
  className?: string;
  onLaptopClick?: (laptop: "left" | "right") => void;
}

export function DualLaptopShowcase({
  laptops,
  title,
  isCardHovered = false,
  className = "",
  onLaptopClick,
}: DualLaptopShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "120px" });
  const isReady = useAppReady();
  // Track direct hover on individual laptops
  const [hoveredLaptop, setHoveredLaptop] = useState<"left" | "right" | null>(null);

  const isInteractive = isCardHovered || hoveredLaptop !== null;
  const shouldFloat = isReady && isInView && !isInteractive;

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-[560px] aspect-[8787/4909] flex items-center justify-center select-none ${className}`}
    >
      {/* Ambient Spotlight Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] lg:w-[540px] h-[340px] sm:h-[480px] lg:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(81,151,255,0.16)_0%,rgba(81,151,255,0.05)_45%,transparent_72%)] pointer-events-none"
        animate={{
          scale: isInteractive ? 1.15 : 1,
          opacity: isInteractive ? 0.95 : 0.65,
        }}
        transition={{ duration: 0.48, ease: EASE_OUT_EXPO }}
      />

      {/* Dynamic Ground Shadow that reacts to elevation */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[300px] sm:w-[460px] h-[34px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.88)_0%,transparent_72%)] pointer-events-none"
        animate={{
          scaleX: hoveredLaptop ? 1.08 : isCardHovered ? 1.04 : 1,
          opacity: hoveredLaptop ? 0.95 : isCardHovered ? 0.85 : 0.75,
          y: hoveredLaptop ? 4 : isCardHovered ? 2 : 0,
        }}
        transition={{ duration: 0.42, ease: EASE_OUT_EXPO }}
      />

      {/* ========================================================= */}
      {/* 1. LEFT LAPTOP (MacBook Pro 15 — Contact & Support)      */}
      {/* ========================================================= */}
      <motion.div
        className="absolute left-0 top-0 w-[74.4%] h-[80.4%] origin-bottom-right"
        style={{ zIndex: hoveredLaptop === "left" ? 30 : 10 }}
        initial={{ opacity: 0, x: -28, y: 22 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.65, delay: 0.06, ease: EASE_OUT_EXPO }}
        onMouseEnter={() => setHoveredLaptop("left")}
        onMouseLeave={() => setHoveredLaptop(null)}
        onClick={(e) => {
          if (onLaptopClick) {
            e.stopPropagation();
            onLaptopClick("left");
          }
        }}
      >
        {/* Continuous Levitation + Interactive Fan-Out & +10% Hover */}
        <motion.div
          className="relative w-full h-full cursor-pointer transform-gpu"
          animate={{
            x:
              hoveredLaptop === "left"
                ? -10
                : hoveredLaptop === "right"
                  ? -6
                  : isCardHovered
                    ? -8
                    : 0,
            y:
              hoveredLaptop === "left"
                ? -14
                : hoveredLaptop === "right"
                  ? 8
                  : isCardHovered
                    ? -6
                    : shouldFloat
                      ? [-4, 4]
                      : 0,
            rotate:
              hoveredLaptop === "left"
                ? -1
                : hoveredLaptop === "right"
                  ? 0
                  : isCardHovered
                    ? -0.5
                    : shouldFloat
                      ? [-0.6, 0.4]
                      : 0,
            scale:
              hoveredLaptop === "left"
                ? 1.08
                : hoveredLaptop === "right"
                  ? 0.96
                  : isCardHovered
                    ? 1.03
                    : 1,
            opacity: hoveredLaptop === "right" ? 0.82 : 1,
          }}
          transition={
            shouldFloat
              ? {
                  y: {
                    duration: 2.7,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 3.1,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                  x: { duration: 0.42, ease: EASE_OUT_EXPO },
                  scale: { duration: 0.42, ease: EASE_OUT_EXPO },
                  opacity: { duration: 0.35, ease: EASE_OUT_EXPO },
                }
              : { duration: 0.42, ease: EASE_OUT_EXPO }
          }
        >
          <img
            src={laptops.left}
            alt={`${title} — Left Laptop Interface`}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-contain block transition-[filter] duration-300 ${
              hoveredLaptop === "left"
                ? "drop-shadow-[0_24px_36px_rgba(0,0,0,0.9)] brightness-105"
                : hoveredLaptop === "right"
                  ? "drop-shadow-[0_12px_18px_rgba(0,0,0,0.55)] brightness-90"
                  : "drop-shadow-[0_18px_26px_rgba(0,0,0,0.75)] brightness-100"
            }`}
          />
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* 2. RIGHT LAPTOP (MacBook Pro 16 — Platform Hero Landing)  */}
      {/* ========================================================= */}
      <motion.div
        className="absolute left-[25.6%] top-[19.6%] w-[74.4%] h-[80.4%] origin-bottom-left"
        style={{ zIndex: hoveredLaptop === "right" ? 30 : hoveredLaptop === "left" ? 10 : 20 }}
        initial={{ opacity: 0, x: 28, y: 22 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.65, delay: 0.14, ease: EASE_OUT_EXPO }}
        onMouseEnter={() => setHoveredLaptop("right")}
        onMouseLeave={() => setHoveredLaptop(null)}
        onClick={(e) => {
          if (onLaptopClick) {
            e.stopPropagation();
            onLaptopClick("right");
          }
        }}
      >
        {/* Continuous Levitation + Interactive Fan-Out & +10% Hover */}
        <motion.div
          className="relative w-full h-full cursor-pointer transform-gpu"
          animate={{
            x:
              hoveredLaptop === "right"
                ? 10
                : hoveredLaptop === "left"
                  ? 6
                  : isCardHovered
                    ? 8
                    : 0,
            y:
              hoveredLaptop === "right"
                ? -14
                : hoveredLaptop === "left"
                  ? 8
                  : isCardHovered
                    ? -6
                    : shouldFloat
                      ? [4, -4]
                      : 0,
            rotate:
              hoveredLaptop === "right"
                ? 1
                : hoveredLaptop === "left"
                  ? 0
                  : isCardHovered
                    ? 0.5
                    : shouldFloat
                      ? [-0.4, 0.6]
                      : 0,
            scale:
              hoveredLaptop === "right"
                ? 1.08
                : hoveredLaptop === "left"
                  ? 0.96
                  : isCardHovered
                    ? 1.03
                    : 1,
            opacity: hoveredLaptop === "left" ? 0.82 : 1,
          }}
          transition={
            shouldFloat
              ? {
                  y: {
                    duration: 2.6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 0.4,
                  },
                  rotate: {
                    duration: 3.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 0.25,
                  },
                  x: { duration: 0.42, ease: EASE_OUT_EXPO },
                  scale: { duration: 0.42, ease: EASE_OUT_EXPO },
                  opacity: { duration: 0.35, ease: EASE_OUT_EXPO },
                }
              : { duration: 0.42, ease: EASE_OUT_EXPO }
          }
        >
          <img
            src={laptops.right}
            alt={`${title} — Right Laptop Interface`}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-contain block transition-[filter] duration-300 ${
              hoveredLaptop === "right"
                ? "drop-shadow-[0_24px_36px_rgba(0,0,0,0.9)] brightness-105"
                : hoveredLaptop === "left"
                  ? "drop-shadow-[0_12px_18px_rgba(0,0,0,0.55)] brightness-90"
                  : "drop-shadow-[0_20px_28px_rgba(0,0,0,0.8)] brightness-100"
            }`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
