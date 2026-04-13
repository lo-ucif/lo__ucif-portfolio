import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type LoadingScreenProps = {
  isHiding?: boolean;
};

export function LoadingScreen({ isHiding = false }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const durationMs = 3000;
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
    <motion.div
      className={`loading-screen ${isHiding ? "loading-screen--hide" : ""}`}
      aria-live="polite"
      aria-busy="true"
      initial={{ opacity: 0, scale: 1.02 }}
      animate={
        isHiding
          ? { opacity: 0, y: -10, scale: 0.98 }
          : { opacity: 1, y: 0, scale: 1 }
      }
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="loading-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
          },
        }}
      >
        <motion.div
          className="loading-text"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <h1 className="loading-title">
            Hi, I'm Ahmed <br /> explore my work!
          </h1>
        </motion.div>

        <motion.div
          className="h-8 loader-wrap"
          aria-hidden="true"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <div
            className="loader"
            style={{ ["--progress" as string]: `${progress}%` }}
          />
          <div className="loader-percent">{progress}%</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
