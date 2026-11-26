import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useAppReady } from "@/store/AppReadyContext";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/constants/motion";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "120px" });
  const isReady = useAppReady();
  const [hoveredDevice, setHoveredDevice] = useState<"laptop" | "mobile" | null>(null);

  const isInteractive = isCardHovered || hoveredDevice !== null;
  const shouldFloat = isReady && isInView && !isInteractive;

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[5947/3592] flex items-center justify-center select-none overflow-visible ${className}`}
    >
      {/* Soft Ambient Spotlight Glow (radial gradient avoids heavy blur-3xl compositing) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[500px] lg:w-[580px] h-[320px] sm:h-[440px] lg:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(81,151,255,0.16)_0%,rgba(81,151,255,0.05)_45%,transparent_72%)] pointer-events-none"
        animate={{
          scale: isInteractive ? 1.12 : 1,
          opacity: isInteractive ? 0.95 : 0.55,
        }}
        transition={{ duration: 0.48, ease: EASE_OUT_EXPO }}
      />

      {/* Dynamic Ground Shadow underneath the laptop base */}
      <motion.div
        className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[90%] h-[30px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.85)_0%,transparent_72%)] pointer-events-none"
        animate={{
          scaleX: isInteractive ? 1.04 : 1,
          opacity: isInteractive ? 0.95 : 0.72,
          y: isInteractive ? 4 : 0,
        }}
        transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
      />

      {/* ========================================================= */}
      {/* 1. LAPTOP (MacBook Pro 16)                                */}
      {/* Cloned exact layout from Figma node 654:611:             */}
      {/* x: 126, y: 76, w: 5693.43, h: 3439 / frame 5946.73x3592   */}
      {/* ========================================================= */}
      <motion.div
        className="absolute origin-bottom"
        style={{
          left: "2.12%",
          top: "2.12%",
          width: "95.74%",
          height: "95.74%",
          zIndex: hoveredDevice === "laptop" ? 25 : 10,
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
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
          className="w-full h-full cursor-pointer transform-gpu"
          animate={{
            y:
              hoveredDevice === "laptop"
                ? -8
                : isCardHovered
                  ? -4
                  : shouldFloat
                    ? [-2.5, 2.5]
                    : 0,
            scale: hoveredDevice === "laptop" ? 1.03 : isCardHovered ? 1.015 : 1,
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
                  scale: { duration: 0.42, ease: EASE_OUT_EXPO },
                }
              : { duration: 0.42, ease: EASE_OUT_EXPO }
          }
        >
          <img
            src={laptop}
            alt={`${title} — Desktop Preview`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.58)]"
          />
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* 2. MOBILE (iPhone 17 Pro with Dynamic Island)             */}
      {/* Matches exact Figma node 654:611 position:                */}
      {/* x: 4698, y: 354, w: 1280, h: 2642 / frame 5946.73x3592    */}
      {/* ========================================================= */}
      <motion.div
        className="absolute origin-bottom-right"
        style={{
          left: "79.00%",
          top: "9.86%",
          width: "21.52%",
          height: "73.55%",
          zIndex: hoveredDevice === "laptop" ? 15 : 30,
        }}
        initial={{ opacity: 0, y: 26, rotate: 2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.62, delay: 0.1, ease: EASE_OUT_EXPO }}
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
          className="w-full h-full cursor-pointer transform-gpu"
          animate={{
            x:
              hoveredDevice === "mobile"
                ? -4
                : isCardHovered
                  ? -2
                  : 0,
            y:
              hoveredDevice === "mobile"
                ? -14
                : isCardHovered
                  ? -8
                  : shouldFloat
                    ? [-3.5, 3.5]
                    : 0,
            scale:
              hoveredDevice === "mobile"
                ? 1.09
                : isCardHovered
                  ? 1.05
                  : 1,
            rotate:
              hoveredDevice === "mobile"
                ? -2
                : isCardHovered
                  ? -1.1
                  : shouldFloat
                    ? [-0.5, 0.7]
                    : 0,
          }}
          transition={
            shouldFloat
              ? {
                  y: {
                    duration: 2.4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 0.35,
                  },
                  rotate: {
                    duration: 2.8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 0.35,
                  },
                  scale: { duration: 0.38, ease: EASE_OUT_EXPO },
                  x: { duration: 0.38, ease: EASE_OUT_EXPO },
                }
              : { duration: 0.38, ease: EASE_OUT_EXPO }
          }
        >
          <img
            src={mobile}
            alt={`${title} — Mobile Preview`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.8)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
