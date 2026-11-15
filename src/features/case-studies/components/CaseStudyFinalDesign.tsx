import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "../types";
import iphoneFrameImg from "../../../assets/case-studies/mockups/iphone-17-pro-frame.webp";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudyFinalDesignProps = {
  study: CaseStudy;
  onOpenLightbox: (imgUrl: string, title: string, subtitle?: string) => void;
};

export function CaseStudyFinalDesign({
  study,
  onOpenLightbox,
}: CaseStudyFinalDesignProps) {
  const { solution } = study;
  const screens = solution?.screens || [];

  // Active Category Filter State
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Derive categories dynamically from screens
  const categories = useMemo(() => {
    const set = new Set<string>();
    screens.forEach((s) => {
      if (s.category) set.add(s.category);
    });
    return ["All", ...Array.from(set)];
  }, [screens]);

  // Filtered screens based on selected category
  const filteredScreens = useMemo(() => {
    if (activeCategory === "All") return screens;
    return screens.filter((s) => s.category === activeCategory);
  }, [screens, activeCategory]);

  // Track active screen by ID (fallback to first filtered screen)
  const [selectedScreenId, setSelectedScreenId] = useState<string>("");

  const currentScreen = useMemo(() => {
    const match = filteredScreens.find((s) => s.id === selectedScreenId);
    return match || filteredScreens[0] || screens[0];
  }, [filteredScreens, selectedScreenId, screens]);

  if (screens.length === 0) return null;

  // Determine if current screen should render in Web Browser or Mobile Device frame
  const isScreenWeb =
    currentScreen.aspectRatio === "web" ||
    (!currentScreen.aspectRatio && study.platformType === "web" && currentScreen.number === "01");

  const currentIndexInFiltered = filteredScreens.findIndex((s) => s.id === currentScreen.id);

  const handlePrev = () => {
    const prevIdx =
      currentIndexInFiltered > 0
        ? currentIndexInFiltered - 1
        : filteredScreens.length - 1;
    setSelectedScreenId(filteredScreens[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx =
      currentIndexInFiltered < filteredScreens.length - 1
        ? currentIndexInFiltered + 1
        : 0;
    setSelectedScreenId(filteredScreens[nextIdx].id);
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
            {screens.length} Production Screens
          </span>
          <span className="rounded-full bg-[#5197ff]/10 border border-[#5197ff]/25 px-3 py-1 font-['Itim'] text-[13px] text-[#5197ff]">
            Figma Design System &amp; Tokens
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

      {/* Category Filter Pills (if multiple categories exist) */}
      {categories.length > 2 && (
        <div className="flex flex-wrap items-center gap-2 pb-1">
          <span className="font-['Itim'] text-[13px] text-[#8491A0] mr-1 uppercase tracking-wider">
            Filter Workflow:
          </span>
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const count =
              cat === "All"
                ? screens.length
                : screens.filter((s) => s.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  // Auto-select first screen in this category
                  const firstInCat =
                    cat === "All" ? screens[0] : screens.find((s) => s.category === cat);
                  if (firstInCat) setSelectedScreenId(firstInCat.id);
                }}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-['Itim'] text-[13px] sm:text-[14px] transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#5197ff] text-[#161513] font-semibold shadow-md shadow-[#5197ff]/25"
                    : "bg-[#1A1917] hover:bg-white/10 border border-white/10 text-[#d1d1d1]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-[#161513]/25 text-[#161513]" : "bg-white/10 text-[#8491A0]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Interactive Showcase Container */}
      <div className="relative flex flex-col items-center p-5 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1E1D1A] via-[#1A1917] to-[#141312] border border-white/[0.1] shadow-2xl">
        {/* Top Controls Bar */}
        <div className="flex flex-wrap items-center justify-between w-full border-b border-white/[0.08] pb-4 mb-6 gap-3">
          <div className="flex items-center gap-2.5">
            <span className="font-['Itim'] text-[12px] sm:text-[13.5px] text-[#5197ff] uppercase tracking-wider font-semibold">
              Screen {currentScreen.number} of {screens.length}
            </span>
            {currentScreen.category && (
              <>
                <span className="text-white/30">•</span>
                <span className="font-['Itim'] text-[12px] sm:text-[13px] text-[#9CA3AF] bg-white/[0.05] border border-white/10 rounded-full px-2.5 py-0.5">
                  {currentScreen.category}
                </span>
              </>
            )}
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="font-['Itim'] text-[14px] sm:text-[16.5px] text-white font-semibold truncate max-w-[220px] sm:max-w-md hidden sm:inline">
              {currentScreen.title}
            </span>
          </div>

          {/* Navigation Arrows */}
          {filteredScreens.length > 1 && (
            <div className="flex items-center gap-2">
              <span className="font-['Poppins'] text-[12px] text-[#8491A0] mr-1 hidden md:inline">
                {currentIndexInFiltered + 1} / {filteredScreens.length}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous screen"
                className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next screen"
                className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Display Frame: Phone Mockup or Web Browser Window */}
        <div className="w-full flex justify-center items-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen.id}
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -12 }}
              transition={{ duration: 0.35, ease: easeOut }}
              className="flex justify-center w-full"
            >
              {isScreenWeb ? (
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
                    <div className="ml-2 flex-1 rounded bg-black/40 px-2.5 py-0.5 text-[11px] font-mono text-[#8491A0] truncate">
                      https://rokhsa.app/dashboard
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
                // Authentic iPhone 17 Pro Mockup Frame (from Figma Node 594:324)
                <div
                  className="group relative w-full max-w-[280px] sm:max-w-[315px] aspect-[727/1500] cursor-pointer select-none filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.92)] transition-transform duration-500 hover:scale-[1.015]"
                  onClick={() =>
                    onOpenLightbox(currentScreen.image, currentScreen.title, currentScreen.subtitle)
                  }
                >
                  {/* Screen Content Layer (Positioned within internal device bezel bounds) */}
                  <div className="absolute inset-0 px-[2.89%] pt-[1.67%] pb-[1.73%] flex items-center justify-center">
                    <div className="relative w-full h-full rounded-[13.5%] overflow-hidden bg-black flex items-center justify-center">
                      <img
                        src={currentScreen.image}
                        alt={currentScreen.title}
                        className="w-full h-full object-cover block"
                      />

                      {/* Fullscreen Inspect Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 pointer-events-none z-20">
                        <span className="rounded-full bg-white text-[#161513] font-['Poppins'] text-[12px] font-semibold px-4 py-2 shadow-lg">
                          Inspect Fullscreen 🔍
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Photorealistic iPhone 17 Pro Chassis, Metallic Edge, Antenna & Dynamic Island */}
                  <img
                    src={iphoneFrameImg}
                    alt="iPhone 17 Pro Frame"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
                    loading="eager"
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Detailed Design Info Panel */}
        <div className="flex flex-col items-center text-center gap-3 w-full max-w-2xl pt-6 border-t border-white/[0.08] mt-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="font-['Itim'] text-[12px] sm:text-[13px] text-[#5197ff] uppercase tracking-wider font-semibold">
              Screen {currentScreen.number} Showcase
            </span>
            {currentScreen.arabicTitle && (
              <>
                <span className="text-white/30">•</span>
                <span className="font-['Inter'] text-[15px] sm:text-[17px] text-[#5197ff] font-medium">
                  {currentScreen.arabicTitle}
                </span>
              </>
            )}
          </div>

          <h3 className="font-['Itim'] text-[24px] sm:text-[32px] text-white font-bold leading-snug">
            {currentScreen.title}
          </h3>

          {currentScreen.subtitle && (
            <p className="font-['Poppins'] text-[14px] sm:text-[15.5px] text-[#5197ff] font-medium">
              {currentScreen.subtitle}
            </p>
          )}

          {currentScreen.description && (
            <p className="font-['Poppins'] text-[14px] sm:text-[15px] text-[#b4b4b4] leading-relaxed text-center max-w-xl">
              {currentScreen.description}
            </p>
          )}

          {/* UX Highlights & Design Decisions */}
          {currentScreen.uxHighlights && currentScreen.uxHighlights.length > 0 && (
            <div className="flex flex-col items-start w-full pt-4 mt-2 border-t border-white/[0.06] text-left">
              <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider mb-2.5">
                • UX/UI Architecture &amp; Key Design Decisions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                {currentScreen.uxHighlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="flex items-start gap-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] p-2.5 text-left"
                  >
                    <svg
                      className="w-4 h-4 text-[#5197ff] shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="font-['Poppins'] text-[13px] text-[#d1d1d1] leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Thumbnail Selector Cards */}
      <div className="flex flex-col gap-3 pt-2">
        <div className="flex items-center justify-between">
          <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider">
            {activeCategory === "All"
              ? `All Interface Screens (${screens.length})`
              : `${activeCategory} Screens (${filteredScreens.length})`}
          </span>
          <span className="font-['Poppins'] text-[12px] text-[#5197ff]">
            Click any thumbnail to inspect
          </span>
        </div>

        <div
          className={`grid gap-3.5 ${
            isScreenWeb && filteredScreens.length <= 4
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          }`}
        >
          {filteredScreens.map((screen) => {
            const isActive = currentScreen.id === screen.id;
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setSelectedScreenId(screen.id)}
                className={`group relative flex flex-col p-2.5 rounded-2xl bg-[#1A1917] border text-left cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "border-[#5197ff] ring-2 ring-[#5197ff]/40 shadow-lg shadow-[#5197ff]/20 scale-[1.02] bg-[#1e232b]"
                    : "border-white/[0.08] hover:border-white/30 hover:scale-[1.01]"
                }`}
              >
                {/* Screen Preview Thumbnail */}
                <div
                  className={`w-full overflow-hidden rounded-xl bg-[#121212] mb-2 flex items-center justify-center p-1.5 ${
                    screen.aspectRatio === "web" ? "aspect-[16/10]" : "aspect-[9/16]"
                  }`}
                >
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Screen Labels */}
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <span className="font-['Itim'] text-[11px] text-[#5197ff] uppercase tracking-wider font-semibold">
                      SCREEN {screen.number}
                    </span>
                    {screen.category && (
                      <span className="text-[9.5px] font-['Itim'] text-[#8491A0] truncate max-w-[70px]">
                        {screen.category}
                      </span>
                    )}
                  </div>
                  <h4 className="font-['Itim'] text-[13px] sm:text-[14px] text-white font-semibold truncate">
                    {screen.title}
                  </h4>
                  {screen.arabicTitle && (
                    <span className="font-['Inter'] text-[11px] text-[#8491A0] truncate">
                      {screen.arabicTitle}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
