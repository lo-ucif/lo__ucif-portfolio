import { useEffect, useState } from "react";

type LoadingScreenProps = {
  isHiding?: boolean;
};

export function LoadingScreen({ isHiding = false }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const durationMs = 5000;
    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(next);
      if (elapsed < durationMs) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      className={`loading-screen ${isHiding ? "loading-screen--hide" : ""}`}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="loading-content">
        <div className="loading-text">
          <h1 className="loading-title">Hi, I’m Ahmed <br /> explore my work!</h1>
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
