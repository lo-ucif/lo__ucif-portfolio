import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { PhoneMockups } from "@/features/case-studies/types";
import { useAppReady } from "@/store/AppReadyContext";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/constants/motion";

interface ThreePhoneShowcaseProps {
  phones: PhoneMockups;
  title: string;
  isCardHovered?: boolean;
  className?: string;
}

export function ThreePhoneShowcase({
  phones,
  title,
  isCardHovered = false,
  className = "",
}: ThreePhoneShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "120px" });
  const isReady = useAppReady();
  // Track direct hover on individual phones
  const [hoveredPhone, setHoveredPhone] = useState<"left" | "center" | "right" | null>(null);

  const isInteractive = isCardHovered || hoveredPhone !== null;
  const shouldFloat = isReady && isInView && !isInteractive;

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-[460px] sm:max-w-[500px] aspect-[1.14/1] flex items-center justify-center select-none ${className}`}
    >
      {/* Dynamic Ambient Glow behind the composition */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[440px] h-[300px] sm:h-[440px] rounded-full bg-[radial-gradient(circle,rgba(81,151,255,0.16)_0%,rgba(81,151,255,0.05)_45%,transparent_72%)] pointer-events-none"
        animate={{
          scale: isCardHovered ? 1.14 : 1,
          opacity: isCardHovered ? 0.92 : 0.65,
        }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      />

      {/* Dynamic Ground Shadow that reacts to elevation */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[280px] sm:w-[400px] h-[34px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.88)_0%,transparent_72%)] pointer-events-none"
        animate={{
          scaleX: isCardHovered ? 0.94 : 1,
          opacity: isCardHovered ? 0.68 : 0.9,
          y: isCardHovered ? 5 : 0,
        }}
        transition={{ duration: 0.42, ease: EASE_OUT_EXPO }}
      />

      {/* ========================================================= */}
      {/* 1. LEFT PHONE (-10° Tilted Device)                        */}
      {/* ========================================================= */}
      <motion.div
        className="absolute left-0 top-[2%] w-[52%] origin-bottom-right"
        style={{ zIndex: hoveredPhone === "left" ? 30 : 10 }}
        initial={{ opacity: 0, x: -32, y: 24, rotate: -3 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.65, delay: 0.06, ease: EASE_OUT_EXPO }}
        onMouseEnter={() => setHoveredPhone("left")}
        onMouseLeave={() => setHoveredPhone(null)}
      >
        {/* Continuous Levitation + Interactive Fan-Out */}
        <motion.div
          className="transform-gpu"
          animate={{
            x: hoveredPhone === "left" ? -24 : isCardHovered ? -16 : 0,
            y: hoveredPhone === "left" ? -14 : isCardHovered ? -8 : shouldFloat ? [-4, 4] : 0,
            rotate: hoveredPhone === "left" ? -3 : isCardHovered ? -2 : shouldFloat ? [-0.8, 0.5] : 0,
            scale: hoveredPhone === "left" ? 1.06 : isCardHovered ? 1.03 : 1,
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
                }
              : { duration: 0.42, ease: EASE_OUT_EXPO }
          }
        >
          <img
            src={phones.left}
            alt={`${title} — Left Interface`}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain drop-shadow-[0_18px_22px_rgba(0,0,0,0.68)]"
          />
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* 2. RIGHT PHONE (+10° Tilted Device)                       */}
      {/* ========================================================= */}
      <motion.div
        className="absolute right-0 top-[1%] w-[52%] origin-bottom-left"
        style={{ zIndex: hoveredPhone === "right" ? 30 : 10 }}
        initial={{ opacity: 0, x: 32, y: 24, rotate: 3 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.65, delay: 0.16, ease: EASE_OUT_EXPO }}
        onMouseEnter={() => setHoveredPhone("right")}
        onMouseLeave={() => setHoveredPhone(null)}
      >
        {/* Continuous Levitation + Interactive Fan-Out */}
        <motion.div
          className="transform-gpu"
          animate={{
            x: hoveredPhone === "right" ? 24 : isCardHovered ? 16 : 0,
            y: hoveredPhone === "right" ? -14 : isCardHovered ? -8 : shouldFloat ? [4, -4] : 0,
            rotate: hoveredPhone === "right" ? 3 : isCardHovered ? 2 : shouldFloat ? [-0.5, 0.8] : 0,
            scale: hoveredPhone === "right" ? 1.06 : isCardHovered ? 1.03 : 1,
          }}
          transition={
            shouldFloat
              ? {
                  y: {
                    duration: 2.6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                  rotate: {
                    duration: 3.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 0.35,
                  },
                  x: { duration: 0.42, ease: EASE_OUT_EXPO },
                  scale: { duration: 0.42, ease: EASE_OUT_EXPO },
                }
              : { duration: 0.42, ease: EASE_OUT_EXPO }
          }
        >
          <img
            src={phones.right}
            alt={`${title} — Right Interface`}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain drop-shadow-[0_18px_22px_rgba(0,0,0,0.68)]"
          />
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* 3. CENTER PHONE (Upright Dominant Hero Device)            */}
      {/* ========================================================= */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[44%] origin-bottom"
        style={{ zIndex: hoveredPhone === "center" || (!hoveredPhone && isCardHovered) ? 30 : 20 }}
        initial={{ opacity: 0, y: 36, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.68, delay: 0.11, ease: EASE_OUT_EXPO }}
        onMouseEnter={() => setHoveredPhone("center")}
        onMouseLeave={() => setHoveredPhone(null)}
      >
        {/* Continuous Levitation + Interactive Lift Forward */}
        <motion.div
          className="transform-gpu"
          animate={{
            y: hoveredPhone === "center" ? -22 : isCardHovered ? -16 : shouldFloat ? [-5.5, 5.5] : 0,
            scale: hoveredPhone === "center" ? 1.08 : isCardHovered ? 1.05 : 1,
          }}
          transition={
            shouldFloat
              ? {
                  y: {
                    duration: 2.4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 0.25,
                  },
                  scale: { duration: 0.42, ease: EASE_OUT_EXPO },
                }
              : { duration: 0.42, ease: EASE_OUT_EXPO }
          }
        >
          <img
            src={phones.center}
            alt={`${title} — Center Hero Interface`}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain drop-shadow-[0_24px_32px_rgba(0,0,0,0.82)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
