import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/store/LanguageContext";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/constants/motion";

// High-fidelity presentation mockups
import hafezMockup from "@/assets/case-studies/mockups/7afez-transparent.webp";
import hafezWeb from "@/assets/hafez-web.webp";
import tabibMockup from "@/assets/case-studies/mockups/al-tabib-transparent.webp";

interface ServiceRow {
  num: string;
  title: string;
  description: string;
  previewImg: string;
  targetId: string;
}

export function ServicesCard() {
  const { t, isArabic } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const servicesData: ServiceRow[] = [
    {
      num: t.services.s1Num,
      title: t.services.s1Title,
      description: t.services.s1Desc,
      previewImg: hafezMockup,
      targetId: "case-studies",
    },
    {
      num: t.services.s2Num,
      title: t.services.s2Title,
      description: t.services.s2Desc,
      previewImg: hafezWeb,
      targetId: "projects",
    },
    {
      num: t.services.s3Num,
      title: t.services.s3Title,
      description: t.services.s3Desc,
      previewImg: tabibMockup,
      targetId: "case-studies",
    },
  ];

  const handleRowClick = (targetId: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate(`/#${targetId}`);
  };

  return (
    <motion.div
      id="services"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.58, ease: EASE_OUT_EXPO }}
      className="relative w-full max-w-4xl my-2 text-start"
    >
      {/* Services Section Title */}
      <div className="flex items-center gap-2.5 mb-6 sm:mb-8 text-start">
        <span className="w-2 h-2 rounded-full bg-[#5197ff] shadow-[0_0_8px_#5197ff]" />
        <h3 className="font-['Itim'] text-[24px] sm:text-[28px] font-bold text-white tracking-wide">
          {t.services.title}
        </h3>
      </div>

      {/* Services Interactive List */}
      <div className="flex flex-col w-full border-b border-white/[0.08]">
        {servicesData.map((service, index) => {
          const isRowHovered = hoveredIndex === index;
          const showPreview = isRowHovered;

          return (
            <motion.div
              key={service.num}
              onClick={() => handleRowClick(service.targetId)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: EASE_OUT_EXPO,
                  },
                },
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleRowClick(service.targetId);
                }
              }}
              className="group/row relative py-7 sm:py-9 border-t border-white/[0.08] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#5197ff]"
            >
              <div className="flex items-center justify-between gap-6 w-full">
                {/* Text Column: 01 — Title + Description */}
                <div className="flex flex-col gap-2 max-w-xl sm:max-w-2xl text-start items-start">
                  {/* Number — Title */}
                  <div className="flex items-baseline gap-2.5">
                    <h4 className="font-['Itim'] text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-white group-hover/row:text-[#5197ff] transition-colors duration-200">
                      <span>{service.num}</span>
                      <span className="mx-2.5 text-white/30 font-normal">—</span>
                      <span>{service.title}</span>
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="font-['Inter'] text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#9ca3af] group-hover/row:text-[#e1e1e1] transition-colors duration-200">
                    {service.description}
                  </p>
                </div>

                {/* Right Area: Floating Preview Mockup (Desktop) + Arrow */}
                <div className="relative flex items-center gap-6 sm:gap-8 shrink-0">
                  {/* High-res Laptop Mockup Preview */}
                  <div className="hidden lg:block w-[190px] h-[105px] relative">
                    <AnimatePresence>
                      {showPreview && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.94, y: 6 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 4 }}
                          transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                          className={`absolute ${isArabic ? "left-0 justify-start" : "right-0 justify-end"} top-1/2 -translate-y-1/2 flex items-center pointer-events-none select-none w-full h-full`}
                        >
                          <img
                            src={service.previewImg}
                            alt={service.title}
                            className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
                            decoding="async"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Diagonal Arrow Indicator */}
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isRowHovered
                        ? "border-[#5197ff] text-[#5197ff] bg-[#5197ff]/10 shadow-[0_0_15px_rgba(81,151,255,0.2)]"
                        : "border-white/10 text-white/50 group-hover/row:border-[#5197ff] group-hover/row:text-[#5197ff]"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isArabic
                          ? "-scale-x-100 group-hover/row:-translate-x-0.5 group-hover/row:-translate-y-0.5"
                          : "group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
