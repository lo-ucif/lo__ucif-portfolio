import { useState } from "react";
import { motion } from "framer-motion";
import type { LaptopMockups } from "../types";

const easeOut = [0.22, 1, 0.36, 1] as const;

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
  // Track direct hover on individual laptops
  const [hoveredLaptop, setHoveredLaptop] = useState<"left" | "right" | null>(null);

  const isInteractive = isCardHovered || hoveredLaptop !== null;

  return (
    <div
      className={`relative w-full max-w-[560px] aspect-[8787/4909] flex items-center justify-center select-none ${className}`}
    >
      {/* Ambient Spotlight Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[460px] lg:w-[520px] h-[320px] sm:h-[460px] lg:h-[480px] bg-[#5197ff]/14 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: isCardHovered || hoveredLaptop ? 1.18 : 1,
          opacity: isCardHovered || hoveredLaptop ? 0.95 : 0.65,
        }}
        transition={{ duration: 0.55, ease: easeOut }}
      />

      {/* Dynamic Ground Shadow that reacts to elevation */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[280px] sm:w-[440px] h-[26px] bg-black/90 rounded-full blur-2xl pointer-events-none"
        animate={{
          scaleX: hoveredLaptop ? 1.1 : isCardHovered ? 1.04 : 1,
          opacity: hoveredLaptop ? 0.95 : isCardHovered ? 0.85 : 0.75,
          y: hoveredLaptop ? 4 : isCardHovered ? 2 : 0,
        }}
        transition={{ duration: 0.45, ease: easeOut }}
      />

      {/* ========================================================= */}
      {/* 1. LEFT LAPTOP (MacBook Pro 15 — Contact & Support)      */}
      {/* ========================================================= */}
      <motion.div
        className="absolute left-0 top-0 w-[74.4%] h-[80.4%] origin-bottom-right"
        style={{ zIndex: hoveredLaptop === "left" ? 30 : 10 }}
        initial={{ opacity: 0, x: -35, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
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
          className="relative w-full h-full cursor-pointer"
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
                    : [-4, 5, -4],
            rotate:
              hoveredLaptop === "left"
                ? -1
                : hoveredLaptop === "right"
                  ? 0
                  : isCardHovered
                    ? -0.5
                    : [0, -0.8, 0],
            scale:
              hoveredLaptop === "left"
                ? 1.1
                : hoveredLaptop === "right"
                  ? 0.96
                  : isCardHovered
                    ? 1.03
                    : 1,
            opacity: hoveredLaptop === "right" ? 0.82 : 1,
          }}
          transition={
            isInteractive
              ? { duration: 0.45, ease: easeOut }
              : {
                  y: { duration: 5.6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6.2, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 0.45, ease: easeOut },
                  scale: { duration: 0.45, ease: easeOut },
                  opacity: { duration: 0.45, ease: easeOut },
                }
          }
        >
          <img
            src={laptops.left}
            alt={`${title} — Left Laptop Interface`}
            loading="lazy"
            className={`w-full h-full object-contain block transition-all duration-300 ${
              hoveredLaptop === "left"
                ? "filter drop-shadow-[0_32px_50px_rgba(0,0,0,0.98)] brightness-105"
                : hoveredLaptop === "right"
                  ? "filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)] brightness-90"
                  : "filter drop-shadow-[0_20px_32px_rgba(0,0,0,0.85)] brightness-100"
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
        initial={{ opacity: 0, x: 35, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.25, ease: easeOut }}
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
          className="relative w-full h-full cursor-pointer"
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
                    : [4, -5, 4],
            rotate:
              hoveredLaptop === "right"
                ? 1
                : hoveredLaptop === "left"
                  ? 0
                  : isCardHovered
                    ? 0.5
                    : [0, 0.8, 0],
            scale:
              hoveredLaptop === "right"
                ? 1.1
                : hoveredLaptop === "left"
                  ? 0.96
                  : isCardHovered
                    ? 1.03
                    : 1,
            opacity: hoveredLaptop === "left" ? 0.82 : 1,
          }}
          transition={
            isInteractive
              ? { duration: 0.45, ease: easeOut }
              : {
                  y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                  rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                  x: { duration: 0.45, ease: easeOut },
                  scale: { duration: 0.45, ease: easeOut },
                  opacity: { duration: 0.45, ease: easeOut },
                }
          }
        >
          <img
            src={laptops.right}
            alt={`${title} — Right Laptop Interface`}
            loading="lazy"
            className={`w-full h-full object-contain block transition-all duration-300 ${
              hoveredLaptop === "right"
                ? "filter drop-shadow-[0_32px_50px_rgba(0,0,0,0.98)] brightness-105"
                : hoveredLaptop === "left"
                  ? "filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)] brightness-90"
                  : "filter drop-shadow-[0_24px_38px_rgba(0,0,0,0.9)] brightness-100"
            }`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
