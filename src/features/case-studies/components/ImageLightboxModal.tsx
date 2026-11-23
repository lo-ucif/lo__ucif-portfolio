import { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { caseStudyCategoryTranslations } from "../../../constants/projectTranslations";

export type LightboxItem = {
  imageUrl: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  arabicTitle?: string;
  category?: string;
  number?: string;
};

export type ImageLightboxModalProps = {
  isOpen: boolean;
  onClose: () => void;
  // Multi-item gallery support
  items?: LightboxItem[];
  initialIndex?: number;
  onIndexChange?: (index: number) => void;
  // Single-item fallback props (backward compatibility)
  imageUrl?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  hidePagination?: boolean;
};

export function ImageLightboxModal({
  isOpen,
  onClose,
  items,
  initialIndex = 0,
  onIndexChange,
  imageUrl,
  imageAlt,
  title,
  subtitle,
  hidePagination = false,
}: ImageLightboxModalProps) {
  const { isArabic } = useLanguage();
  // Consolidate single or multiple items into a unified list
  const allItems: LightboxItem[] = useMemo(() => {
    if (items && items.length > 0) return items;
    if (imageUrl) {
      return [
        {
          imageUrl,
          imageAlt: imageAlt || title,
          title,
          subtitle,
        },
      ];
    }
    return [];
  }, [items, imageUrl, imageAlt, title, subtitle]);

  // Track previous props to sync index safely without triggering cascading renders in effects
  const [prevProps, setPrevProps] = useState({ isOpen, initialIndex });
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);

  if (prevProps.isOpen !== isOpen || prevProps.initialIndex !== initialIndex) {
    setPrevProps({ isOpen, initialIndex });
    if (isOpen) {
      setActiveIndex(initialIndex);
    }
  }

  const hasMultiple = allItems.length > 1;
  const showNavigation = hasMultiple && !hidePagination;
  const currentItem = allItems[activeIndex] || allItems[0];

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (!showNavigation) return;
      setActiveIndex((prev) => {
        const nextIdx = prev > 0 ? prev - 1 : allItems.length - 1;
        onIndexChange?.(nextIdx);
        return nextIdx;
      });
    },
    [showNavigation, allItems.length, onIndexChange]
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (!showNavigation) return;
      setActiveIndex((prev) => {
        const nextIdx = prev < allItems.length - 1 ? prev + 1 : 0;
        onIndexChange?.(nextIdx);
        return nextIdx;
      });
    },
    [showNavigation, allItems.length, onIndexChange]
  );

  // Keyboard navigation: Escape closes, Left/Right arrow changes page
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (showNavigation && e.key === "ArrowLeft") {
        handlePrev();
      } else if (showNavigation && e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, showNavigation, onClose, handlePrev, handleNext]);

  if (!isOpen || allItems.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/92 p-4 sm:p-6 backdrop-blur-md select-none"
          onClick={onClose}
        >
          {/* Header Bar */}
          <div
            className="flex w-full max-w-6xl items-center justify-between pb-3 text-white z-40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title & Info */}
            <div className="flex flex-col text-start gap-1 max-w-xl">
              <div className="flex flex-wrap items-center gap-2">
                {showNavigation && (
                  <span className="font-['Itim'] text-[12px] sm:text-[13px] text-[#5197ff] uppercase tracking-wider font-semibold bg-[#5197ff]/15 border border-[#5197ff]/30 rounded-full px-2.5 py-0.5">
                    {isArabic
                      ? `الشاشة ${currentItem.number || activeIndex + 1} من ${allItems.length}`
                      : `Screen ${currentItem.number || activeIndex + 1} of ${allItems.length}`}
                  </span>
                )}
                {currentItem.category && (
                  <span className="font-['Itim'] text-[11.5px] sm:text-[12.5px] text-[#9CA3AF] bg-white/[0.06] border border-white/10 rounded-full px-2.5 py-0.5">
                    {isArabic
                      ? caseStudyCategoryTranslations[currentItem.category] || currentItem.category
                      : currentItem.category}
                  </span>
                )}
                {currentItem.arabicTitle && (
                  <span className="font-['Inter'] text-[13px] sm:text-[14.5px] text-[#5197ff] font-medium truncate">
                    • {currentItem.arabicTitle}
                  </span>
                )}
              </div>

              {currentItem.title && (
                <h4 className="font-['Itim'] text-[18px] sm:text-[23px] text-white font-bold truncate">
                  {currentItem.title}
                </h4>
              )}

              {currentItem.subtitle && (
                <p className="font-['Inter'] text-[12px] sm:text-[13.5px] text-[#A9A9A9] truncate">
                  {currentItem.subtitle}
                </p>
              )}
            </div>

            {/* Actions: Top Nav Buttons + Close */}
            <div className="flex items-center gap-3">
              {showNavigation && (
                <div className="flex items-center gap-1.5 bg-white/[0.06] border border-white/10 rounded-full p-1">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous screen"
                    className="w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <span className="font-['Inter'] text-[12px] text-[#A9A9A9] px-2 font-medium">
                    <span className="text-[#5197ff] font-semibold">{activeIndex + 1}</span> / {allItems.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next screen"
                    className="w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-['Inter'] text-[13px] text-white transition-colors duration-200 hover:bg-white hover:text-[#161513] cursor-pointer"
              >
                <span>Close (Esc)</span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Center Viewing Stage */}
          <div className="relative flex flex-1 w-full max-w-6xl items-center justify-center py-2 overflow-hidden">
            {/* Floating Previous Arrow Button (Left) */}
            {showNavigation && (
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous screen"
                className="absolute left-2 sm:left-4 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-[#5197ff] text-white hover:text-[#161513] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl active:scale-95 hover:scale-105"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}

            {/* Displayed Image */}
            <div
              className="relative flex items-center justify-center max-h-[78vh] max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentItem.imageUrl + activeIndex}
                  src={currentItem.imageUrl}
                  alt={currentItem.imageAlt || currentItem.title || "Screen Preview"}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="max-h-[76vh] w-auto max-w-[90vw] rounded-2xl object-contain shadow-2xl border border-white/10 bg-[#121212]"
                />
              </AnimatePresence>
            </div>

            {/* Floating Next Arrow Button (Right) */}
            {showNavigation && (
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next screen"
                className="absolute right-2 sm:right-4 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-[#5197ff] text-white hover:text-[#161513] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl active:scale-95 hover:scale-105"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )}
          </div>

          {/* Footer Controls / Keyboard Navigation Tip */}
          <div
            className="flex items-center justify-center w-full pt-2 text-white/50 text-[12px] font-['Inter'] z-40"
            onClick={(e) => e.stopPropagation()}
          >
            {showNavigation ? (
              <span className="flex items-center gap-2">
                <span>Use</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-white font-mono text-[11px]">
                  ←
                </kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-white font-mono text-[11px]">
                  →
                </kbd>
                <span>arrow keys or click sides to change between screens</span>
              </span>
            ) : (
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-white font-mono text-[11px]">Esc</kbd> or click background to close</span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
