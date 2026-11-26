import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type LoadingScreenProps = {
  onComplete: () => void;
};

const LOADING_DURATION_MS = 1200;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const start = performance.now();
    let rafId = 0;
    let doneTimer = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / LOADING_DURATION_MS) * 100));
      setProgress(next);

      if (elapsed < LOADING_DURATION_MS) {
        rafId = requestAnimationFrame(tick);
      } else {
        doneTimer = window.setTimeout(() => {
          onCompleteRef.current();
        }, 120);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(doneTimer);
    };
  }, []);

  return (
    <motion.div
      className="loading-screen"
      aria-live="polite"
      aria-busy="true"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="loading-content">
        <div className="loading-text">
          <h1 className="loading-title">
            Hi, I&apos;m Ahmed <br /> explore my work!
          </h1>
        </div>

        <div className="loader-wrap" aria-hidden="true">
          <div className="loader">
            <div
              className="loader-fill"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
          <div className="loader-percent">{progress}%</div>
        </div>
      </div>
    </motion.div>
  );
}
