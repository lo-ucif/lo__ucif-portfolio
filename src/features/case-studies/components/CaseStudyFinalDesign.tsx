import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "../types";
import type { LightboxItem } from "./ImageLightboxModal";

const easeOut = [0.22, 1, 0.36, 1] as const;

// Authentic iPhone 17 Pro Vector Mockup (from Figma Node 594:324 / 600:150)
function IPhoneMockup({
  screen,
  isCenter = false,
  onClick,
}: {
  screen: { image: string; title: string; subtitle?: string };
  isCenter?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{ width: "240px", height: "494px" }}
      className={`relative w-[240px] h-[494px] shrink-0 rounded-[38px] bg-black overflow-hidden select-none transition-shadow duration-300 ${
        isCenter
          ? "cursor-pointer shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
          : "cursor-pointer"
      }`}
    >
      {/* Screen Content Layer */}
      <div className="absolute inset-[6px_5.5px] rounded-[32px] overflow-hidden bg-black flex items-center justify-center z-10">
        <img
          src={screen.image}
          alt={screen.title}
          className="w-full h-full object-cover block"
          loading="eager"
        />

        {/* Hover Inspect Overlay for Center Phone */}
        {isCenter && (
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-200 z-30 pointer-events-none">
            <span className="rounded-full bg-white text-[#161513] font-['Poppins'] text-[12px] font-semibold px-4 py-2 shadow-lg">
              Inspect Fullscreen 🔍
            </span>
          </div>
        )}
      </div>

      {/* Titanium Outer Frame & Metallic Bezel Reflections (Figma 594:325 / 600:151) */}
      <div className="absolute inset-0 rounded-[38px] border-[1.5px] border-[#303640] pointer-events-none z-20" />
      <div className="absolute inset-[1.5px] rounded-[36.5px] border-[2px] border-[#515868] pointer-events-none z-20" />
      <div className="absolute inset-[2.5px] rounded-[35.5px] border border-[#717989]/70 pointer-events-none z-20" />
      <div className="absolute inset-[4.5px] rounded-[33.5px] border border-[#646464]/50 pointer-events-none z-20" />

      {/* Dynamic Island Pill with Dual Lenses (Figma 594:331 / 600:157) */}
      <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[70px] h-[20px] rounded-full bg-black z-30 flex items-center justify-between px-2.5 shadow-md shadow-black pointer-events-none">
        <div className="w-2.5 h-2.5 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-[#1e293b]" />
        </div>
        <div className="w-2 h-2 rounded-full bg-[#121212] border border-white/10" />
      </div>

      {/* Antenna Notches (Figma 594:332 / 600:158) */}
      <div className="absolute top-[48px] left-0 w-[3px] h-[3px] bg-[#7c7c7c]/40 z-20 pointer-events-none" />
      <div className="absolute top-[48px] right-0 w-[3px] h-[3px] bg-[#7c7c7c]/40 z-20 pointer-events-none" />
      <div className="absolute bottom-[48px] left-0 w-[3px] h-[3px] bg-[#7c7c7c]/40 z-20 pointer-events-none" />
      <div className="absolute bottom-[48px] right-0 w-[3px] h-[3px] bg-[#7c7c7c]/40 z-20 pointer-events-none" />
    </div>
  );
}

// 3D Physical Phone Card Animation Variants (Whole Card Glides between Positions)
const phoneCardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 280 : -280,
    y: 17,
    scale: 0.92,
    opacity: 0,
    zIndex: 5,
  }),
  center: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    zIndex: 20,
    transition: { duration: 0.45, ease: easeOut },
  },
  left: {
    x: -148,
    y: 17,
    scale: 0.96,
    opacity: 0.2,
    zIndex: 10,
    transition: { duration: 0.45, ease: easeOut },
  },
  right: {
    x: 148,
    y: 17,
    scale: 0.96,
    opacity: 0.2,
    zIndex: 10,
    transition: { duration: 0.45, ease: easeOut },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -280 : 280,
    y: 17,
    scale: 0.92,
    opacity: 0,
    zIndex: 5,
    transition: { duration: 0.35, ease: easeOut },
  }),
};

type CaseStudyFinalDesignProps = {
  study: CaseStudy;
  onOpenLightbox: (
    imgUrl: string,
    title: string,
    subtitle?: string,
    initialIndex?: number,
    items?: LightboxItem[]
  ) => void;
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

  // Lightbox items mapped from filtered screens to allow changing between pages in fullscreen modal
  const lightboxItems = useMemo<LightboxItem[]>(() => {
    return filteredScreens.map((s) => ({
      imageUrl: s.image,
      imageAlt: s.title,
      title: s.title,
      subtitle: s.subtitle,
      arabicTitle: s.arabicTitle,
      category: s.category,
      number: s.number,
    }));
  }, [filteredScreens]);

  // Track active screen by ID (fallback to first filtered screen)
  const [selectedScreenId, setSelectedScreenId] = useState<string>("");

  // Track animation direction (-1 for previous, +1 for next)
  const [direction, setDirection] = useState<number>(0);

  const currentScreen = useMemo(() => {
    const match = filteredScreens.find((s) => s.id === selectedScreenId);
    return match || filteredScreens[0] || screens[0];
  }, [filteredScreens, selectedScreenId, screens]);

  // Determine if current screen should render in Web Browser or Mobile Device frame
  const isScreenWeb =
    currentScreen.aspectRatio === "web" ||
    (study.platformType === "web" &&
      (!currentScreen.aspectRatio || currentScreen.aspectRatio === "web" || currentScreen.number === "01"));

  const currentIndexInFiltered = filteredScreens.findIndex((s) => s.id === currentScreen.id);

  // Derive previous and next screens for the 3-phone presentation (Figma node 600:220)
  const prevScreen = useMemo(() => {
    if (filteredScreens.length <= 1) return null;
    const prevIdx =
      currentIndexInFiltered > 0
        ? currentIndexInFiltered - 1
        : filteredScreens.length - 1;
    return filteredScreens[prevIdx];
  }, [filteredScreens, currentIndexInFiltered]);

  const nextScreen = useMemo(() => {
    if (filteredScreens.length <= 1) return null;
    const nextIdx =
      currentIndexInFiltered < filteredScreens.length - 1
        ? currentIndexInFiltered + 1
        : 0;
    return filteredScreens[nextIdx];
  }, [filteredScreens, currentIndexInFiltered]);

  // Derived 3D cards to render for smooth coverflow animation
  const cardsToRender = useMemo(() => {
    if (filteredScreens.length === 0) return [];
    if (filteredScreens.length === 1) {
      return [{ screen: currentScreen, pos: "center" as const }];
    }
    if (filteredScreens.length === 2) {
      return [
        { screen: prevScreen!, pos: "left" as const },
        { screen: currentScreen, pos: "center" as const },
      ];
    }
    return [
      { screen: prevScreen!, pos: "left" as const },
      { screen: currentScreen, pos: "center" as const },
      { screen: nextScreen!, pos: "right" as const },
    ];
  }, [filteredScreens.length, currentScreen, prevScreen, nextScreen]);

  const handlePrev = () => {
    setDirection(-1);
    const prevIdx =
      currentIndexInFiltered > 0
        ? currentIndexInFiltered - 1
        : filteredScreens.length - 1;
    setSelectedScreenId(filteredScreens[prevIdx].id);
  };

  const handleNext = () => {
    setDirection(1);
    const nextIdx =
      currentIndexInFiltered < filteredScreens.length - 1
        ? currentIndexInFiltered + 1
        : 0;
    setSelectedScreenId(filteredScreens[nextIdx].id);
  };

  // Keyboard navigation with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndexInFiltered, filteredScreens]);

  if (screens.length === 0 || !currentScreen) return null;

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
                  if (firstInCat) {
                    setDirection(1);
                    setSelectedScreenId(firstInCat.id);
                  }
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

      {/* Main Interactive Showcase Container (Clean: Background and stroke deleted as requested) */}
      <div className="relative flex flex-col w-full py-4 overflow-hidden sm:overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* LEFT COLUMN: Title, Subtitle, Description, UX Architecture */}
          <div className={`${isScreenWeb ? "lg:col-span-5" : "lg:col-span-6"} flex flex-col items-start text-left w-full order-2 lg:order-1 min-h-[440px] sm:min-h-[480px]`}>
            <div className="flex flex-col items-start gap-3.5 w-full">
              {/* Screen Tag & Arabic Title (Fixed in place, no reload) */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-['Itim'] text-[12px] sm:text-[13px] text-[#5197ff] uppercase tracking-wider font-semibold bg-[#5197ff]/15 border border-[#5197ff]/30 rounded-full px-3 py-1">
                  Screen {currentScreen.number} of {screens.length}
                </span>
                {currentScreen.category && (
                  <span className="font-['Itim'] text-[12px] sm:text-[13px] text-[#9CA3AF] bg-white/[0.05] border border-white/10 rounded-full px-3 py-1">
                    {currentScreen.category}
                  </span>
                )}
                {currentScreen.arabicTitle && (
                  <span className="font-['Inter'] text-[14px] sm:text-[16px] text-[#5197ff] font-medium">
                    • {currentScreen.arabicTitle}
                  </span>
                )}
              </div>

              {/* Title, Subtitle & Description Animated In-Place (No Blank Reload) */}
              <div className="relative w-full min-h-[160px]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={currentScreen.id}
                    initial={{ opacity: 0, x: direction > 0 ? 25 : direction < 0 ? -25 : 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -25 : direction < 0 ? 25 : 0 }}
                    transition={{ duration: 0.28, ease: easeOut }}
                    className="flex flex-col items-start gap-2 w-full"
                  >
                    {/* Main Title */}
                    <h3 className="font-['Itim'] text-[26px] sm:text-[34px] lg:text-[38px] text-white font-bold leading-tight">
                      {currentScreen.title}
                    </h3>

                    {/* Subtitle */}
                    {currentScreen.subtitle && (
                      <p className="font-['Poppins'] text-[14.5px] sm:text-[16px] text-[#5197ff] font-medium">
                        {currentScreen.subtitle}
                      </p>
                    )}

                    {/* Description */}
                    {currentScreen.description && (
                      <p className="font-['Poppins'] text-[14px] sm:text-[15px] text-[#b4b4b4] leading-relaxed text-left">
                        {currentScreen.description}
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* UX Highlights & Key Design Decisions (Permanent Section Header, Animated Pills) */}
              {currentScreen.uxHighlights && currentScreen.uxHighlights.length > 0 && (
                <div className="flex flex-col items-start w-full pt-4 mt-1 border-t border-white/[0.08] text-left">
                  <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider mb-2.5">
                    • UX/UI Architecture &amp; Key Design Decisions:
                  </span>
                  <div className="relative w-full">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={currentScreen.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: easeOut }}
                        className="flex flex-col gap-2.5 w-full"
                      >
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
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: 3-Phone Presentation Stage (Figma Node 600:220) + Navigation Below */}
          <div className={`${isScreenWeb ? "lg:col-span-7" : "lg:col-span-6"} flex flex-col items-center justify-center w-full order-1 lg:order-2 overflow-visible`}>
            {isScreenWeb ? (
              // Desktop Web Frame (Directly shown with macOS header)
              <div
                className="group relative w-full rounded-2xl overflow-hidden bg-[#121212] border border-white/20 shadow-2xl cursor-pointer"
                onClick={() =>
                  onOpenLightbox(
                    currentScreen.image,
                    currentScreen.title,
                    currentScreen.subtitle,
                    currentIndexInFiltered,
                    lightboxItems
                  )
                }
              >
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#222] border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <div className="ml-2 flex-1 rounded bg-black/40 px-2.5 py-0.5 text-[11px] font-mono text-[#8491A0] truncate">
                    {study.slug.includes("7afez")
                      ? "https://7afez.platform/web"
                      : study.liveDemo || "https://rokhsa.app/dashboard"}
                  </div>
                </div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#121212]">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                      key={currentScreen.image}
                      src={currentScreen.image}
                      alt={currentScreen.title}
                      custom={direction}
                      initial={{
                        opacity: 0,
                        x: direction > 0 ? 60 : direction < 0 ? -60 : 0,
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{
                        opacity: 0,
                        x: direction > 0 ? -60 : direction < 0 ? 60 : 0,
                      }}
                      transition={{ duration: 0.32, ease: easeOut }}
                      className="absolute inset-0 w-full h-full object-cover block"
                    />
                  </AnimatePresence>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 pointer-events-none">
                  <span className="rounded-full bg-white text-[#161513] font-['Poppins'] text-[12px] font-semibold px-4 py-2 shadow-lg">
                    Inspect Fullscreen 🔍
                  </span>
                </div>
              </div>
            ) : (
              // 3-Phone Presentation Stage (Whole Phone Cards Glide between Positions)
              <div className="relative flex items-center justify-center w-full min-h-[510px] py-2 overflow-hidden sm:overflow-visible select-none">
                <AnimatePresence initial={false} custom={direction}>
                  {cardsToRender.map(({ screen, pos }) => {
                    const isCenter = pos === "center";
                    const isLeft = pos === "left";
                    const isRight = pos === "right";

                    const handleClick = () => {
                      if (isCenter) {
                        onOpenLightbox(
                          screen.image,
                          screen.title,
                          screen.subtitle,
                          currentIndexInFiltered,
                          lightboxItems
                        );
                      } else if (isLeft) {
                        handlePrev();
                      } else if (isRight) {
                        handleNext();
                      }
                    };

                    return (
                      <motion.div
                        key={screen.id}
                        custom={direction}
                        variants={phoneCardVariants}
                        initial="enter"
                        animate={pos}
                        exit="exit"
                        whileHover={!isCenter ? { opacity: 0.48 } : undefined}
                        className="absolute flex items-center justify-center cursor-pointer"
                        style={{ willChange: "transform, opacity" }}
                        title={
                          isLeft
                            ? `Previous: ${screen.title}`
                            : isRight
                            ? `Next: ${screen.title}`
                            : screen.title
                        }
                      >
                        <IPhoneMockup
                          screen={screen}
                          isCenter={isCenter}
                          onClick={handleClick}
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}

            {/* Navigation Buttons Right Below the Image */}
            {filteredScreens.length > 1 && (
              <div className="flex items-center justify-center gap-4 pt-5 w-full">
                <span className="font-['Poppins'] text-[13.5px] font-medium text-[#8491A0]">
                  <span className="text-[#5197ff] font-semibold">{currentIndexInFiltered + 1}</span> / {filteredScreens.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous screen"
                    className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/20 active:scale-95 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next screen"
                    className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/20 active:scale-95 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>


    </section>
  );
}
