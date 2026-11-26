import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/constants/motion";
import { useLanguage } from "@/store/LanguageContext";

type LoadingScreenProps = {
  onComplete: () => void;
};

const WELCOME_DURATION_MS = 2350;
const FONT_READY_TIMEOUT_MS = 220;

function buildHandwritingTimings(lines: string[]) {
  // Snappy, fluid handwriting cadence across ~2.2s with brief pen-lift pauses
  const charStepSec = 0.062;
  const wordPauseSec = 0.055;
  const linePauseSec = 0.14;
  let elapsed = 0.04;

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

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const { isArabic, t } = useLanguage();
  const line1 = t.loading.line1;
  const line2 = t.loading.line2;

  const lineTimings = useMemo(
    () => (isArabic ? [] : buildHandwritingTimings([line1, line2])),
    [isArabic, line1, line2]
  );

  const onCompleteRef = useRef(onComplete);
  const completedRef = useRef(false);
  const [fontReady, setFontReady] = useState(() => {
    if (typeof document === "undefined" || !document.fonts?.check) return true;
    return document.fonts.check(
      isArabic ? '56px "Playpen Sans Arabic"' : "64px Itim"
    );
  });

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    onCompleteRef.current();
  }, []);

  // Wait briefly for the handwritten font so glyphs don't swap mid-stroke
  useEffect(() => {
    if (fontReady) return;
    let active = true;

    const fallbackTimer = window.setTimeout(() => {
      if (active) setFontReady(true);
    }, FONT_READY_TIMEOUT_MS);

    document.fonts?.ready
      .then(() => {
        if (active) setFontReady(true);
      })
      .catch(() => {
        if (active) setFontReady(true);
      });

    return () => {
      active = false;
      window.clearTimeout(fallbackTimer);
    };
  }, [fontReady]);

  useEffect(() => {
    if (!fontReady) return;
    const timer = window.setTimeout(finish, WELCOME_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [fontReady, finish]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        finish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [finish]);

  return (
    <motion.div
      dir={isArabic ? "rtl" : "ltr"}
      className="loading-screen cursor-pointer"
      aria-live="polite"
      aria-busy="true"
      onClick={finish}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.015 }}
      transition={{ duration: 0.42, ease: EASE_OUT_EXPO }}
    >
      <div className="hello-svg-wrap">
        {fontReady && (
          <svg
            viewBox="0 0 800 220"
            className="block mx-auto w-[min(90vw,720px)] h-auto overflow-visible"
            role="img"
            aria-label={`${line1} ${line2}`}
          >
            <defs>
              {/* Feathered pen-nib edge for natural writing sweep (LTR vs RTL) */}
              <linearGradient
                id="pen-nib-grad-ltr"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="25%"
              >
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="86%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              <linearGradient
                id="pen-nib-grad-rtl"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="25%"
              >
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="86%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              <mask id="write-mask-1">
                <rect
                  x="40"
                  y="0"
                  width="720"
                  height="118"
                  fill={isArabic ? "url(#pen-nib-grad-rtl)" : "url(#pen-nib-grad-ltr)"}
                  className={
                    isArabic
                      ? "hello-sweep-rtl hello-sweep-1"
                      : "hello-sweep hello-sweep-1"
                  }
                />
              </mask>

              <mask id="write-mask-2">
                <rect
                  x="40"
                  y="108"
                  width="720"
                  height="112"
                  fill={isArabic ? "url(#pen-nib-grad-rtl)" : "url(#pen-nib-grad-ltr)"}
                  className={
                    isArabic
                      ? "hello-sweep-rtl hello-sweep-2"
                      : "hello-sweep hello-sweep-2"
                  }
                />
              </mask>
            </defs>

            {isArabic ? (
              <>
                {/* Keep Arabic strings unbroken in single <text> nodes to preserve ligatures */}
                <g mask="url(#write-mask-1)">
                  <text
                    x="400"
                    y="82"
                    textAnchor="middle"
                    direction="rtl"
                    fontSize="56"
                    className="hello-text-ar hello-ar-line-1"
                  >
                    {line1}
                  </text>
                </g>

                <g mask="url(#write-mask-2)">
                  <text
                    x="400"
                    y="160"
                    textAnchor="middle"
                    direction="rtl"
                    fontSize="44"
                    className="hello-text-ar hello-ar-line-2"
                  >
                    {line2}
                  </text>
                </g>
              </>
            ) : (
              <>
                <g mask="url(#write-mask-1)">
                  <text
                    x="400"
                    y="84"
                    textAnchor="middle"
                    fontSize="64"
                    className="hello-text"
                  >
                    {lineTimings[0]?.map((item, idx) => (
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
                    {lineTimings[1]?.map((item, idx) => (
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
              </>
            )}
          </svg>
        )}
      </div>
    </motion.div>
  );
}
