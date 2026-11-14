import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "../types";
import { FigmaIcon } from "../../../constants/Icon";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudyFinalDesignProps = {
  study: CaseStudy;
  activeScreenIndex: number;
  onScreenChange: (index: number) => void;
  onOpenLightbox: (imgUrl: string, title: string, subtitle?: string) => void;
};

export function CaseStudyFinalDesign({
  study,
  activeScreenIndex,
  onScreenChange,
  onOpenLightbox,
}: CaseStudyFinalDesignProps) {
  const { solution, platformType = "app" } = study;
  const screens = solution?.screens || [];
  const galleryMockups = study.galleryMockups || [];

  const currentScreen = screens[activeScreenIndex] || screens[0];
  const isWeb = platformType === "web";

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
            Actual UI Screens &amp; Mockups
          </span>
        </div>

        <h2 className="font-['Itim'] text-[32px] sm:text-[44px] text-white font-bold leading-tight">
          {solution.headline}
        </h2>
        <p className="font-['Poppins'] text-[15px] sm:text-[16.5px] text-[#b4b4b4] leading-relaxed max-w-3xl">
          {solution.description}
        </p>
      </motion.div>

      {/* Screen Tabs Selector */}
      {screens.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-4">
          {screens.map((screen, idx) => {
            const isActive = activeScreenIndex === idx;
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => onScreenChange(idx)}
                className={`flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 font-['Itim'] text-[14px] sm:text-[15px] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white text-[#161513] font-bold shadow-md scale-[1.02]"
                    : "bg-[#1A1917] text-[#9CA3AF] hover:text-white border border-white/[0.08]"
                }`}
              >
                <span>{screen.number}</span>
                <span>{screen.title}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Large Featured Screen Display */}
      {currentScreen && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: easeOut }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1E1D1A] via-[#1A1917] to-[#141312] border border-white/[0.1] shadow-2xl"
          >
            {/* Screen Bezel Frame (Mobile / Web) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              {isWeb ? (
                // Desktop Browser Frame
                <div
                  className="relative w-full max-w-xl rounded-2xl overflow-hidden bg-[#121212] border-2 border-white/20 shadow-2xl cursor-pointer"
                  onClick={() =>
                    onOpenLightbox(currentScreen.image, currentScreen.title, currentScreen.subtitle)
                  }
                >
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[#222] border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <div className="ml-2 flex-1 rounded bg-black/40 px-2 py-0.5 text-[10px] font-mono text-[#8491A0] truncate">
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
                // Smartphone Bezel Frame
                <div
                  className="relative w-full max-w-[310px] sm:max-w-[330px] rounded-[40px] overflow-hidden bg-[#121212] border-[3px] border-white/25 shadow-2xl shadow-black/80 cursor-pointer"
                  onClick={() =>
                    onOpenLightbox(currentScreen.image, currentScreen.title, currentScreen.subtitle)
                  }
                >
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
            </div>

            {/* Screen Commentary */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
                  Screen {currentScreen.number} Showcase
                </span>
                <h3 className="font-['Itim'] text-[30px] sm:text-[36px] text-white font-bold">
                  {currentScreen.title}
                </h3>
                <p className="font-['Poppins'] text-[14.5px] text-[#5197ff] font-medium">
                  {currentScreen.subtitle}
                </p>
              </div>

              <p className="font-['Poppins'] text-[15px] text-[#d1d1d1] leading-relaxed">
                {currentScreen.description}
              </p>

              {currentScreen.uxHighlights && currentScreen.uxHighlights.length > 0 && (
                <div className="flex flex-col gap-2.5 pt-3 border-t border-white/[0.08]">
                  <span className="font-['Itim'] text-[13.5px] text-[#8491A0] uppercase tracking-wider">
                    Design Highlights:
                  </span>
                  <div className="flex flex-col gap-2">
                    {currentScreen.uxHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 font-['Poppins'] text-[13.5px] text-[#e1e1e1]">
                        <span className="text-[#5197ff] font-bold mt-px">→</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox(currentScreen.image, currentScreen.title, currentScreen.subtitle)
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] hover:bg-white/15 border border-white/20 px-4 py-2 font-['Poppins'] text-[13px] text-white transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span>Open Fullscreen</span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Organized Visual Screen Gallery */}
      {screens.length > 0 && (
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex flex-col gap-1">
            <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
              Screen Gallery
            </span>
            <h3 className="font-['Itim'] text-[24px] sm:text-[28px] text-white font-bold">
              All Interface Screens
            </h3>
          </div>

          <div
            className={`grid gap-4 ${
              isWeb ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-4"
            }`}
          >
            {screens.map((screen, idx) => {
              const isCurrent = activeScreenIndex === idx;
              return (
                <div
                  key={screen.id}
                  onClick={() => onScreenChange(idx)}
                  className={`group relative flex flex-col p-3 rounded-2xl bg-[#1A1917] border cursor-pointer transition-all duration-200 ${
                    isCurrent
                      ? "border-[#5197ff] shadow-lg shadow-[#5197ff]/15 scale-[1.01]"
                      : "border-white/[0.08] hover:border-white/30"
                  }`}
                >
                  <div
                    className={`w-full overflow-hidden rounded-xl bg-[#121212] mb-2.5 ${
                      isWeb ? "aspect-[16/10]" : "aspect-[9/18]"
                    }`}
                  >
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <span className="font-['Itim'] text-[11px] text-[#5197ff] uppercase">
                    Screen {screen.number}
                  </span>
                  <h4 className="font-['Itim'] text-[15px] text-white font-semibold truncate">
                    {screen.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Realistic Mockups Showcase */}
      {galleryMockups.length > 0 && (
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex flex-col gap-1">
            <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
              Realistic Mockups
            </span>
            <h3 className="font-['Itim'] text-[24px] sm:text-[28px] text-white font-bold">
              Hardware Perspective Showcase
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {galleryMockups.map((mock, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col p-5 rounded-2xl bg-[#1A1917] border border-white/[0.08] hover:border-white/20 transition-all duration-200"
              >
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#121212] flex items-center justify-center p-3">
                  <img
                    src={mock.image}
                    alt={mock.title}
                    className="max-h-full max-w-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    onClick={() => onOpenLightbox(mock.image, mock.title, mock.caption)}
                  />
                </div>
                <div className="flex flex-col gap-0.5 pt-3">
                  <h4 className="font-['Itim'] text-[17px] text-white font-semibold">
                    {mock.title}
                  </h4>
                  {mock.caption && (
                    <p className="font-['Poppins'] text-[12px] text-[#8491A0]">
                      {mock.caption}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Figma File Action */}
      {study.figmaLink && (
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.08]">
          <div className="flex flex-col">
            <span className="font-['Itim'] text-[17px] text-white font-semibold">
              Inspect Design System &amp; Prototype
            </span>
            <span className="font-['Poppins'] text-[13px] text-[#8491A0]">
              Review the live Auto Layout frames, variables, and component variants in Figma.
            </span>
          </div>

          <a
            href={study.figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-['Poppins'] text-[13.5px] font-semibold text-[#161513] transition-colors duration-200 hover:bg-[#5197ff] hover:text-white"
          >
            <FigmaIcon width={16} height={16} />
            <span>Open in Figma</span>
          </a>
        </div>
      )}
    </section>
  );
}
