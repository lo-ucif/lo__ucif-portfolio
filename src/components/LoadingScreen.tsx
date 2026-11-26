import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";

type LoadingScreenProps = {
  onComplete: () => void;
};

const WELCOME_DURATION_MS = 4000;
const LINE_1 = "hi, i'm ahmed";
const LINE_2 = "explore my work!";

function buildHandwritingTimings(lines: string[]) {
  // Natural human handwriting cadence across 4s with brief pen-lift pauses between words/lines
  const charStepSec = 0.125;
  const wordPauseSec = 0.11;
  const linePauseSec = 0.22;
  let elapsed = 0.06;

  return lines.map((line, lineIdx) => {
    if (lineIdx > 0) {
      elapsed += linePauseSec;
    }
    return Array.from(line).map((char) => {
      const delay = elapsed;
      elapsed += char === " " ? wordPauseSec : charStepSec;
      return { char, delay };
    });
  });
}

const LINE_TIMINGS = buildHandwritingTimings([LINE_1, LINE_2]);

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
      dir="ltr"
      className="loading-screen"
      aria-live="polite"
      aria-busy="true"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="hello-svg-wrap">
        <svg
          viewBox="0 0 800 210"
          className="block mx-auto w-[min(90vw,720px)] h-auto overflow-visible"
          role="img"
          aria-label="hi, i'm ahmed explore my work!"
        >
          <defs>
            {/* Diagonal pen-nib feathered edge for natural left-to-right writing sweep */}
            <linearGradient id="pen-nib-grad" x1="0%" y1="0%" x2="100%" y2="25%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="86%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="write-mask-1">
              <motion.rect
                x="150"
                y="0"
                height="120"
                fill="url(#pen-nib-grad)"
                initial={{ width: 0 }}
                animate={{ width: 520 }}
                transition={{ duration: 1.75, delay: 0.05, ease: [0.33, 0.1, 0.25, 1] }}
              />
            </mask>

            <mask id="write-mask-2">
              <motion.rect
                x="150"
                y="105"
                height="105"
                fill="url(#pen-nib-grad)"
                initial={{ width: 0 }}
                animate={{ width: 520 }}
                transition={{ duration: 2.05, delay: 1.82, ease: [0.33, 0.1, 0.25, 1] }}
              />
            </mask>
          </defs>

          <g mask="url(#write-mask-1)">
            <text
              x="400"
              y="84"
              textAnchor="middle"
              fontSize="64"
              className="hello-text"
            >
              {LINE_TIMINGS[0].map((item, idx) => (
                <tspan
                  key={`l1-${idx}`}
                  className="hello-char"
                  style={{ ["--char-delay"]: `${item.delay.toFixed(3)}s` } as CSSProperties}
                >
                  {item.char}
                </tspan>
              ))}
            </text>
          </g>

          <g mask="url(#write-mask-2)">
            <text
              x="400"
              y="156"
              textAnchor="middle"
              fontSize="50"
              className="hello-text"
            >
              {LINE_TIMINGS[1].map((item, idx) => (
                <tspan
                  key={`l2-${idx}`}
                  className="hello-char"
                  style={{ ["--char-delay"]: `${item.delay.toFixed(3)}s` } as CSSProperties}
                >
                  {item.char}
                </tspan>
              ))}
            </text>
          </g>
        </svg>
      </div>
    </motion.div>
  );
}
