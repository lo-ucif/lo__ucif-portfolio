import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";

type LoadingScreenProps = {
  onComplete: () => void;
};

const WELCOME_DURATION_MS = 4000;
const LINE_1 = "hi, i'm ahmed";
const LINE_2 = "explore my work!";

function buildCharTimings(lines: string[]) {
  const charStepSec = 0.145;
  const spaceStepSec = 0.05;
  let elapsed = 0.05;

  return lines.map((line) =>
    Array.from(line).map((char) => {
      const delay = elapsed;
      elapsed += char === " " ? spaceStepSec : charStepSec;
      return { char, delay };
    })
  );
}

const LINE_TIMINGS = buildCharTimings([LINE_1, LINE_2]);

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
        </svg>
      </div>
    </motion.div>
  );
}
