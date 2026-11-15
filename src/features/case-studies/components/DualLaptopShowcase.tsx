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

      {/* Ground Contact Shadow */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[280px] sm:w-[440px] h-[26px] bg-black/90 rounded-full blur-2xl pointer-events-none"
        animate={{
          scaleX: hoveredLaptop ? 1.08 : isCardHovered ? 1.03 : 1,
          opacity: hoveredLaptop ? 0.95 : 0.8,
          y: hoveredLaptop ? 4 : 0,
        }}
        transition={{ duration: 0.45, ease: easeOut }}
      />

      {/* ========================================================= */}
      {/* 1. LEFT LAPTOP (MacBook Pro 15 — Contact & Support)      */}
      {/* ========================================================= */}
      <div
        className="absolute left-0 top-0 w-[74.4%] h-[80.4%]"
        style={{ zIndex: hoveredLaptop === "left" ? 30 : 10 }}
        onMouseEnter={() => setHoveredLaptop("left")}
        onMouseLeave={() => setHoveredLaptop(null)}
        onClick={(e) => {
          if (onLaptopClick) {
            e.stopPropagation();
            onLaptopClick("left");
          }
        }}
      >
        <motion.div
          className="relative w-full h-full cursor-pointer"
          animate={{
            scale:
              hoveredLaptop === "left"
                ? 1.1
                : hoveredLaptop === "right"
                  ? 0.96
                  : isCardHovered
                    ? 1.02
                    : 1,
            y:
              hoveredLaptop === "left"
                ? -12
                : hoveredLaptop === "right"
                  ? 6
                  : isCardHovered
                    ? -4
                    : 0,
            x:
              hoveredLaptop === "left"
                ? -8
                : hoveredLaptop === "right"
                  ? -4
                  : 0,
            opacity: hoveredLaptop === "right" ? 0.82 : 1,
            filter:
              hoveredLaptop === "left"
                ? "drop-shadow(0 30px 45px rgba(0,0,0,0.95)) brightness(1.04)"
                : hoveredLaptop === "right"
                  ? "drop-shadow(0 14px 22px rgba(0,0,0,0.65)) brightness(0.92)"
                  : "drop-shadow(0 20px 32px rgba(0,0,0,0.85)) brightness(1)",
          }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <img
            src={laptops.left}
            alt={`${title} — Contact & Inquiries Laptop Mockup`}
            loading="lazy"
            className="w-full h-full object-contain block"
          />

          {/* Interactive Floating Badge on Hover */}
          <motion.div
            className="absolute -top-3 left-6 z-40 pointer-events-none"
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: hoveredLaptop === "left" ? 1 : 0,
              y: hoveredLaptop === "left" ? 0 : 6,
            }}
            transition={{ duration: 0.25, ease: easeOut }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#161513]/90 backdrop-blur-md px-3 py-1 border border-[#5197ff]/40 text-[#5197ff] font-['Itim'] text-[12px] shadow-lg shadow-black/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5197ff] animate-pulse" />
              <span>تواصل معنا · Support</span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* 2. RIGHT LAPTOP (MacBook Pro 16 — Platform Hero Landing)  */}
      {/* ========================================================= */}
      <div
        className="absolute left-[25.6%] top-[19.6%] w-[74.4%] h-[80.4%]"
        style={{ zIndex: hoveredLaptop === "right" ? 30 : hoveredLaptop === "left" ? 10 : 20 }}
        onMouseEnter={() => setHoveredLaptop("right")}
        onMouseLeave={() => setHoveredLaptop(null)}
        onClick={(e) => {
          if (onLaptopClick) {
            e.stopPropagation();
            onLaptopClick("right");
          }
        }}
      >
        <motion.div
          className="relative w-full h-full cursor-pointer"
          animate={{
            scale:
              hoveredLaptop === "right"
                ? 1.1
                : hoveredLaptop === "left"
                  ? 0.96
                  : isCardHovered
                    ? 1.03
                    : 1,
            y:
              hoveredLaptop === "right"
                ? -12
                : hoveredLaptop === "left"
                  ? 6
                  : isCardHovered
                    ? -5
                    : 0,
            x:
              hoveredLaptop === "right"
                ? 8
                : hoveredLaptop === "left"
                  ? 4
                  : 0,
            opacity: hoveredLaptop === "left" ? 0.82 : 1,
            filter:
              hoveredLaptop === "right"
                ? "drop-shadow(0 32px 50px rgba(0,0,0,0.98)) brightness(1.04)"
                : hoveredLaptop === "left"
                  ? "drop-shadow(0 14px 22px rgba(0,0,0,0.65)) brightness(0.92)"
                  : "drop-shadow(0 24px 38px rgba(0,0,0,0.9)) brightness(1)",
          }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <img
            src={laptops.right}
            alt={`${title} — Platform Hero Landing Laptop Mockup`}
            loading="lazy"
            className="w-full h-full object-contain block"
          />

          {/* Interactive Floating Badge on Hover */}
          <motion.div
            className="absolute -top-3 right-6 z-40 pointer-events-none"
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: hoveredLaptop === "right" ? 1 : 0,
              y: hoveredLaptop === "right" ? 0 : 6,
            }}
            transition={{ duration: 0.25, ease: easeOut }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#161513]/90 backdrop-blur-md px-3 py-1 border border-[#5197ff]/40 text-[#5197ff] font-['Itim'] text-[12px] shadow-lg shadow-black/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5197ff] animate-pulse" />
              <span>منصة حافظ · Flagship Hub</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
