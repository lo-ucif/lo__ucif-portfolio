import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type LoadingScreenProps = {
  onComplete: () => void;
};

const WELCOME_DURATION_MS = 4000;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      onCompleteRef.current();
    }, WELCOME_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="loading-screen"
      aria-live="polite"
      aria-busy="true"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Centered Handwritten Cursive SVG Welcome Text */}
      <div className="hello-svg-wrap">
        <svg
          viewBox="0 0 900 260"
          className="w-[min(92vw,760px)] h-auto overflow-visible"
          role="img"
          aria-label="Hi, I'm Ahmed explore my work!"
        >
          <defs>
            {/* Subtle luminous glow along writing path */}
            <filter id="hello-glow" x="-20%" y="-30%" width="140%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Left-to-right pen sweep masks for progressive writing */}
            <linearGradient id="sweep-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="92%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="hello-mask-1">
              <motion.rect
                x="0"
                y="0"
                height="145"
                fill="url(#sweep-grad-1)"
                initial={{ width: 0 }}
                animate={{ width: 1050 }}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.37, 0, 0.22, 1] }}
              />
            </mask>

            <mask id="hello-mask-2">
              <motion.rect
                x="0"
                y="130"
                height="130"
                fill="url(#sweep-grad-1)"
                initial={{ width: 0 }}
                animate={{ width: 1050 }}
                transition={{ duration: 1.45, delay: 1.55, ease: [0.37, 0, 0.22, 1] }}
              />
            </mask>
          </defs>

          {/* Line 1: Hi, I'm Ahmed */}
          <g mask="url(#hello-mask-1)" filter="url(#hello-glow)">
            <text
              x="450"
              y="108"
              textAnchor="middle"
              fontSize="84"
              className="hello-text hello-fill-line-1"
            >
              Hi, I&apos;m Ahmed
            </text>
            <text
              x="450"
              y="108"
              textAnchor="middle"
              fontSize="84"
              className="hello-text hello-stroke-line-1"
            >
              Hi, I&apos;m Ahmed
            </text>
          </g>

          {/* Line 2: explore my work! */}
          <g mask="url(#hello-mask-2)" filter="url(#hello-glow)">
            <text
              x="450"
              y="196"
              textAnchor="middle"
              fontSize="70"
              className="hello-text hello-fill-line-2"
            >
              explore my work!
            </text>
            <text
              x="450"
              y="196"
              textAnchor="middle"
              fontSize="70"
              className="hello-text hello-stroke-line-2"
            >
              explore my work!
            </text>
          </g>
        </svg>
      </div>
    </motion.div>
  );
}
