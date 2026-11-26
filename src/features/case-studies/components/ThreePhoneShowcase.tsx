import { useState } from "react";
import { motion } from "framer-motion";
import type { PhoneMockups } from "@/features/case-studies/types";

const easeOut = [0.22, 1, 0.36, 1] as const;

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
  // Track direct hover on individual phones
  const [hoveredPhone, setHoveredPhone] = useState<"left" | "center" | "right" | null>(null);

  return (
    <div
      className={`relative w-full max-w-[460px] sm:max-w-[500px] aspect-[1.14/1] flex items-center justify-center select-none ${className}`}
    >
      {/* Dynamic Ambient Glow behind the composition */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-[#5197ff]/12 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: isCardHovered ? 1.15 : 1,
          opacity: isCardHovered ? 0.9 : 0.6,
        }}
        transition={{ duration: 0.6, ease: easeOut }}
      />

      {/* Dynamic Ground Shadow that reacts to elevation */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[260px] sm:w-[380px] h-[26px] bg-black/90 rounded-full blur-2xl pointer-events-none"
        animate={{
          scaleX: isCardHovered ? 0.92 : 1,
          opacity: isCardHovered ? 0.65 : 0.9,
          y: isCardHovered ? 6 : 0,
        }}
        transition={{ duration: 0.45, ease: easeOut }}
      />

      {/* ========================================================= */}
      {/* 1. LEFT PHONE (-10° Tilted Device)                        */}
      {/* ========================================================= */}
      <motion.div
        className="absolute left-0 top-[2%] w-[52%] origin-bottom-right"
        style={{ zIndex: hoveredPhone === "left" ? 30 : 10 }}
        initial={{ opacity: 0, x: -45, y: 35, rotate: -4 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
        onMouseEnter={() => setHoveredPhone("left")}
        onMouseLeave={() => setHoveredPhone(null)}
      >
        {/* Continuous Levitation + Interactive Fan-Out */}
        <motion.div
          animate={{
            x: hoveredPhone === "left" ? -26 : isCardHovered ? -18 : 0,
            y: hoveredPhone === "left" ? -14 : isCardHovered ? -8 : [-4, 5, -4],
            rotate: hoveredPhone === "left" ? -3 : isCardHovered ? -2 : [0, -1, 0],
            scale: hoveredPhone === "left" ? 1.06 : isCardHovered ? 1.03 : 1,
          }}
          transition={
            isCardHovered || hoveredPhone === "left"
              ? { duration: 0.45, ease: easeOut }
              : {
                  y: { duration: 5.6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6.2, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 0.45, ease: easeOut },
                  scale: { duration: 0.45, ease: easeOut },
                }
          }
        >
          <img
            src={phones.left}
            alt={`${title} — Left Interface`}
            loading="lazy"
            className="w-full h-auto object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.75)] transition-all duration-300"
          />
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* 2. RIGHT PHONE (+10° Tilted Device)                       */}
      {/* ========================================================= */}
      <motion.div
        className="absolute right-0 top-[1%] w-[52%] origin-bottom-left"
        style={{ zIndex: hoveredPhone === "right" ? 30 : 10 }}
        initial={{ opacity: 0, x: 45, y: 35, rotate: 4 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.35, ease: easeOut }}
        onMouseEnter={() => setHoveredPhone("right")}
        onMouseLeave={() => setHoveredPhone(null)}
      >
        {/* Continuous Levitation + Interactive Fan-Out */}
        <motion.div
          animate={{
            x: hoveredPhone === "right" ? 26 : isCardHovered ? 18 : 0,
            y: hoveredPhone === "right" ? -14 : isCardHovered ? -8 : [4, -5, 4],
            rotate: hoveredPhone === "right" ? 3 : isCardHovered ? 2 : [0, 1, 0],
            scale: hoveredPhone === "right" ? 1.06 : isCardHovered ? 1.03 : 1,
          }}
          transition={
            isCardHovered || hoveredPhone === "right"
              ? { duration: 0.45, ease: easeOut }
              : {
                  y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
                  rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                  x: { duration: 0.45, ease: easeOut },
                  scale: { duration: 0.45, ease: easeOut },
                }
          }
        >
          <img
            src={phones.right}
            alt={`${title} — Right Interface`}
            loading="lazy"
            className="w-full h-auto object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.75)] transition-all duration-300"
          />
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* 3. CENTER PHONE (Upright Dominant Hero Device)            */}
      {/* ========================================================= */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[44%] origin-bottom"
        style={{ zIndex: hoveredPhone === "center" || (!hoveredPhone && isCardHovered) ? 30 : 20 }}
        initial={{ opacity: 0, y: 55, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, delay: 0.22, ease: easeOut }}
        onMouseEnter={() => setHoveredPhone("center")}
        onMouseLeave={() => setHoveredPhone(null)}
      >
        {/* Continuous Levitation + Interactive Lift Forward */}
        <motion.div
          animate={{
            y: hoveredPhone === "center" ? -24 : isCardHovered ? -18 : [-7, 6, -7],
            scale: hoveredPhone === "center" ? 1.09 : isCardHovered ? 1.06 : 1,
          }}
          transition={
            isCardHovered || hoveredPhone === "center"
              ? { duration: 0.45, ease: easeOut }
              : {
                  y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.35 },
                  scale: { duration: 0.45, ease: easeOut },
                }
          }
        >
          <img
            src={phones.center}
            alt={`${title} — Center Hero Interface`}
            loading="lazy"
            className="w-full h-auto object-contain filter drop-shadow-[0_28px_40px_rgba(0,0,0,0.92)] transition-all duration-300"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
