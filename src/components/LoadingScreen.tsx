import { useEffect, useRef, useState } from "react";

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

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / LOADING_DURATION_MS) * 100));
      setProgress(next);

      if (elapsed < LOADING_DURATION_MS) {
        rafId = requestAnimationFrame(tick);
      } else {
        onCompleteRef.current();
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      className="loading-screen"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="loading-content">
        <div className="loading-text">
          <h1 className="loading-title">
            Hi, I&apos;m Ahmed <br /> explore my work!
          </h1>
        </div>

        <div className="h-8 loader-wrap" aria-hidden="true">
          <div
            className="loader"
            style={{ ["--progress" as string]: `${progress}%` }}
          />
          <div className="loader-percent">{progress}%</div>
        </div>
      </div>
    </div>
  );
}
