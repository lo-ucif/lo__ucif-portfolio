import { useState } from "react";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

interface LaptopMobileShowcaseProps {
  laptop: string;
  mobile: string;
  title: string;
  isCardHovered?: boolean;
  className?: string;
  onDeviceClick?: (device: "laptop" | "mobile") => void;
}

export function LaptopMobileShowcase({
  laptop,
  mobile,
  title,
  isCardHovered = false,
  className = "",
  onDeviceClick,
}: LaptopMobileShowcaseProps) {
  const [hoveredDevice, setHoveredDevice] = useState<"laptop" | "mobile" | null>(null);

  const isInteractive = isCardHovered || hoveredDevice !== null;

  return (
    <div
      className={`relative w-full aspect-[6534/3947] flex items-center justify-center select-none overflow-visible ${className}`}
    >
      {/* Soft Ambient Spotlight Glow */}
      <motion.div
        className="absolute top-[48%] left-[53%] -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[440px] lg:w-[500px] h-[280px] sm:h-[380px] lg:h-[440px] bg-[#5197ff]/12 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: isInteractive ? 1.15 : 1,
          opacity: isInteractive ? 0.95 : 0.45,
        }}
        transition={{ duration: 0.5, ease: easeOut }}
      />

      {/* Dynamic Ground Shadow underneath the laptop base (aligned to scaled base) */}
      <motion.div
        className="absolute bottom-[8.5%] left-[53.16%] -translate-x-1/2 w-[74%] h-[18px] bg-black/85 rounded-full blur-xl pointer-events-none"
        animate={{
          scaleX: isInteractive ? 1.04 : 1,
          opacity: isInteractive ? 0.95 : 0.7,
          y: isInteractive ? 4 : 0,
        }}
        transition={{ duration: 0.45, ease: easeOut }}
      />

      {/* ========================================================= */}
      {/* 1. LAPTOP (MacBook Pro 15)                                */}
      {/* Cloned exact layout from Figma node 632:453:             */}
      {/* x: 674, y: 222, w: 5599.06, h: 3382 / frame 6534x3946.73  */}
      {/* ========================================================= */}
      <motion.div
        className="absolute origin-bottom"
        style={{
          left: "10.315%",
          top: "5.625%",
          width: "85.691%",
          height: "85.691%",
          zIndex: hoveredDevice === "laptop" ? 25 : 10,
        }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: easeOut }}
        onMouseEnter={() => setHoveredDevice("laptop")}
        onMouseLeave={() => setHoveredDevice(null)}
        onClick={(e) => {
          if (onDeviceClick) {
            e.stopPropagation();
            onDeviceClick("laptop");
          }
        }}
      >
        <motion.div
          className="w-full h-full cursor-pointer"
          animate={{
            y:
              hoveredDevice === "laptop"
                ? -8
                : isCardHovered
                  ? -4
                  : [-2, 3, -2],
            scale: hoveredDevice === "laptop" ? 1.03 : isCardHovered ? 1.015 : 1,
          }}
          transition={
            isCardHovered || hoveredDevice === "laptop"
              ? { duration: 0.45, ease: easeOut }
              : {
                  y: { duration: 5.4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.45, ease: easeOut },
                }
          }
        >
          <img
            src={laptop}
            alt={`${title} — Desktop Preview`}
            loading="lazy"
            className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.65)]"
          />
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* 2. MOBILE (iPhone 17 Pro with Dynamic Island)             */}
      {/* Matches exact Figma position: left: 80.41%, top: 13.15%, width: 19.59% */}
      {/* ========================================================= */}
      <motion.div
        className="absolute origin-bottom-right"
        style={{
          left: "80.41%",
          top: "13.15%",
          width: "19.59%",
          height: "66.94%",
          zIndex: hoveredDevice === "laptop" ? 15 : 30,
        }}
        initial={{ opacity: 0, y: 35, rotate: 2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
        onMouseEnter={() => setHoveredDevice("mobile")}
        onMouseLeave={() => setHoveredDevice(null)}
        onClick={(e) => {
          if (onDeviceClick) {
            e.stopPropagation();
            onDeviceClick("mobile");
          }
        }}
      >
        <motion.div
          className="w-full h-full cursor-pointer"
          animate={{
            x:
              hoveredDevice === "mobile"
                ? -4
                : isCardHovered
                  ? -2
                  : 0,
            y:
              hoveredDevice === "mobile"
                ? -16
                : isCardHovered
                  ? -10
                  : [-4, 4, -4],
            scale:
              hoveredDevice === "mobile"
                ? 1.10
                : isCardHovered
                  ? 1.06
                  : 1,
            rotate:
              hoveredDevice === "mobile"
                ? -2
                : isCardHovered
                  ? -1.2
                  : [0, 0.8, 0],
          }}
          transition={
            isCardHovered || hoveredDevice === "mobile"
              ? { duration: 0.4, ease: easeOut }
              : {
                  y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                  rotate: { duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                  scale: { duration: 0.4, ease: easeOut },
                  x: { duration: 0.4, ease: easeOut },
                }
          }
        >
          <img
            src={mobile}
            alt={`${title} — Mobile Preview`}
            loading="lazy"
            className="w-full h-full object-contain filter drop-shadow-[0_22px_35px_rgba(0,0,0,0.95)] drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
