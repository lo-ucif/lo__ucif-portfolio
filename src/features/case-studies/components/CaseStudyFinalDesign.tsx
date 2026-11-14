import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "../types";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudyFinalDesignProps = {
  study: CaseStudy;
  onOpenLightbox: (imgUrl: string, title: string, subtitle?: string) => void;
};

export function CaseStudyFinalDesign({
  study,
  onOpenLightbox,
}: CaseStudyFinalDesignProps) {
  const { solution, platformType = "app" } = study;
  const screens = solution?.screens || [];
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Reset screen index if study changes
  useEffect(() => {
    setActiveScreenIndex(0);
  }, [study.id]);

  if (screens.length === 0) return null;

  const currentScreen = screens[activeScreenIndex] || screens[0];
  const isWeb = platformType === "web";

  const handlePrev = () => {
    setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1));
  };

  const handleNext = () => {
    setActiveScreenIndex((prev) => (prev < screens.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="final-design" className="flex flex-col gap-10 scroll-mt-28 text-left">
      {/* Section Header */}
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[#5197ff]/20 border border-[#5197ff]/40 px-3.5 py-1 font-['Itim'] text-[13px] sm:text-[14px] text-[#5197ff]">
            04. Final Design
          </span>
          <span className="rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 font-['Itim'] text-[13px] text-[#A9A9A9]">
            Final Interface Presentation
          </span>
        </div>

        <h2 className="font-['Itim'] text-[32px] sm:text-[44px] text-white font-bold leading-tight">
          {solution?.headline || "Final Design Presentation"}
        </h2>
        {solution?.description && (
          <p className="font-['Poppins'] text-[15px] sm:text-[16.5px] text-[#b4b4b4] leading-relaxed max-w-3xl">
            {solution.description}
          </p>
        )}
      </motion.div>

      {/* Main Presentation Result Frame */}
      <div className="relative flex flex-col items-center p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1E1D1A] via-[#1A1917] to-[#141312] border border-white/[0.1] shadow-2xl">
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between w-full border-b border-white/[0.08] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-['Itim'] text-[12px] sm:text-[13px] text-[#5197ff] uppercase tracking-wider">
              Screen {currentScreen.number} of {screens.length}
            </span>
            <span className="text-white/30">•</span>
            <span className="font-['Itim'] text-[14px] sm:text-[16px] text-white font-semibold truncate max-w-[200px] sm:max-w-md">
              {currentScreen.title}
            </span>
          </div>

          {/* Navigation Arrows */}
          {screens.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous screen"
                className="w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next screen"
                className="w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Display Frame: Phone Mockup or Web Browser Window */}
        <div className="w-full flex justify-center items-center py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen.id}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.35, ease: easeOut }}
              className="flex justify-center w-full"
            >
              {isWeb ? (
                // Desktop Web Frame
                <div
                  className="group relative w-full max-w-3xl rounded-2xl overflow-hidden bg-[#121212] border-2 border-white/20 shadow-2xl cursor-pointer"
                  onClick={() =>
                    onOpenLightbox(currentScreen.image, currentScreen.title, currentScreen.subtitle)
                  }
                >
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[#222] border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <div className="ml-2 flex-1 rounded bg-black/40 px-2 py-0.5 text-[11px] font-mono text-[#8491A0] truncate">
                      https://rokhsa.app
                    </div>
                  </div>
                  <img
                    src={currentScreen.image}
                    alt={currentScreen.title}
                    className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 pointer-events-none">
                    <span className="rounded-full bg-white text-[#161513] font-['Poppins'] text-[12.5px] font-semibold px-4 py-2 shadow-lg">
                      Inspect Fullscreen 🔍
                    </span>
                  </div>
                </div>
              ) : (
                // Smartphone Device Frame
                <div
                  className="group relative w-full max-w-[300px] sm:max-w-[325px] rounded-[42px] overflow-hidden bg-[#121212] border-[3px] border-white/25 shadow-2xl shadow-black/80 cursor-pointer"
                  onClick={() =>
                    onOpenLightbox(currentScreen.image, currentScreen.title, currentScreen.subtitle)
                  }
                >
                  {/* Smartphone Notch / Island */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
                    <div className="w-16 h-3.5 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#161513] border border-white/20" />
                    </div>
                  </div>

                  <img
                    src={currentScreen.image}
                    alt={currentScreen.title}
                    className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.01]"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 pointer-events-none">
                    <span className="rounded-full bg-white text-[#161513] font-['Poppins'] text-[12.5px] font-semibold px-4 py-2 shadow-lg">
                      Inspect Fullscreen 🔍
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Screen Title & Subtitle */}
        <div className="flex flex-col items-center text-center gap-1.5 max-w-xl pt-4">
          <span className="font-['Itim'] text-[12px] sm:text-[13px] text-[#5197ff] uppercase tracking-wider">
            Screen {currentScreen.number} Showcase
          </span>
          <h3 className="font-['Itim'] text-[22px] sm:text-[28px] text-white font-bold">
            {currentScreen.title}
          </h3>
          {currentScreen.subtitle && (
            <p className="font-['Poppins'] text-[13.5px] text-[#5197ff] font-medium">
              {currentScreen.subtitle}
            </p>
          )}
          {currentScreen.description && (
            <p className="font-['Poppins'] text-[14px] text-[#A9A9A9] leading-relaxed mt-1">
              {currentScreen.description}
            </p>
          )}
        </div>
      </div>

      {/* Interactive Thumbnail Selector Cards ("liek this" - matches user screenshot) */}
      <div className="flex flex-col gap-3 pt-2">
        <div className="flex items-center justify-between">
          <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider">
            All Interface Screens ({screens.length})
          </span>
          <span className="font-['Poppins'] text-[12px] text-[#5197ff]">
            Click any screen to view
          </span>
        </div>

        <div
          className={`grid gap-4 ${
            isWeb ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-4"
          }`}
        >
          {screens.map((screen, idx) => {
            const isActive = activeScreenIndex === idx;
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveScreenIndex(idx)}
                className={`group relative flex flex-col p-3 rounded-2xl bg-[#1A1917] border text-left cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "border-[#5197ff] ring-2 ring-[#5197ff]/40 shadow-lg shadow-[#5197ff]/20 scale-[1.02]"
                    : "border-white/[0.08] hover:border-white/30 hover:scale-[1.01]"
                }`}
              >
                {/* Screen Preview Thumbnail */}
                <div
                  className={`w-full overflow-hidden rounded-xl bg-[#121212] mb-2.5 flex items-center justify-center p-1.5 ${
                    isWeb ? "aspect-[16/10]" : "aspect-[9/16]"
                  }`}
                >
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Screen Labels matching user image */}
                <div className="flex flex-col gap-0.5">
                  <span className="font-['Itim'] text-[11px] sm:text-[12px] text-[#5197ff] uppercase tracking-wider font-medium">
                    SCREEN {screen.number}
                  </span>
                  <h4 className="font-['Itim'] text-[14px] sm:text-[15.5px] text-white font-semibold truncate">
                    {screen.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
