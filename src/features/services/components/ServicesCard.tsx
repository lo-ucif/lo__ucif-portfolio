import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// High-fidelity mockups for interactive preview
import screenDark1 from "../../../assets/case-studies/al-tabib/iPhone 17 - 1.webp";
import screenLight1 from "../../../assets/case-studies/rokhsa/iPhone 17 - 1.webp";
import screenDark2 from "../../../assets/case-studies/7afez/7afez-web-01.webp";
import screenLight2 from "../../../assets/tabib-hafiz-web.webp";
import screenDark3 from "../../../assets/case-studies/al-tabib/iPhone 17 - 2.webp";
import screenLight3 from "../../../assets/case-studies/rokhsa/iPhone 17 - 3.webp";

const easeOut = [0.22, 1, 0.36, 1] as const;

interface ServiceRow {
  num: string;
  title: string;
  count: string;
  description: string;
  darkImg: string;
  lightImg: string;
}

const servicesData: ServiceRow[] = [
  {
    num: "01",
    title: "UI/UX Design",
    count: "4",
    description:
      "Creating intuitive, visually engaging interfaces that deliver seamless and meaningful user experiences.",
    darkImg: screenDark1,
    lightImg: screenLight1,
  },
  {
    num: "02",
    title: "Web Development",
    count: "8",
    description:
      "Building modern, responsive, and high-performance websites and web applications tailored to your needs.",
    darkImg: screenDark2,
    lightImg: screenLight2,
  },
  {
    num: "03",
    title: "Digital Solutions",
    count: "6",
    description:
      "Turning business ideas into tailored digital solutions that solve real problems and drive growth.",
    darkImg: screenDark3,
    lightImg: screenLight3,
  },
];

export function ServicesCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Default to showing row 01 preview when none is actively hovered (matches reference image)
  const activePreviewIndex = hoveredIndex !== null ? hoveredIndex : 0;

  return (
    <motion.div
      id="services"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="relative w-full max-w-4xl text-left my-2"
    >
      {/* Services Section Title */}
      <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
        <span className="w-2 h-2 rounded-full bg-[#5197ff] shadow-[0_0_8px_#5197ff]" />
        <h3 className="font-['Itim'] text-[24px] sm:text-[28px] font-bold text-white tracking-wide">
          Services
        </h3>
      </div>

      {/* Services Interactive List (Matches Reference Design) */}
      <div className="flex flex-col w-full border-b border-white/[0.08]">
        {servicesData.map((service, index) => {
          const isRowHovered = hoveredIndex === index;
          const showPreview = activePreviewIndex === index;

          return (
            <motion.div
              key={service.num}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: easeOut,
              }}
              className="group/row relative py-7 sm:py-9 border-t border-white/[0.08] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-6 w-full">
                {/* Left Text Column: 01 — Title (Count) + Description */}
                <div className="flex flex-col gap-2 max-w-xl sm:max-w-2xl text-left">
                  {/* Number — Title (Count) */}
                  <div className="flex items-baseline gap-2.5">
                    <h4 className="font-['Itim'] text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-white group-hover/row:text-[#5197ff] transition-colors duration-200">
                      <span>{service.num}</span>
                      <span className="mx-2.5 text-white/30 font-normal">—</span>
                      <span>{service.title}</span>
                    </h4>
                    <span className="font-['Poppins'] text-[13px] sm:text-[14px] text-white/40 group-hover/row:text-[#5197ff] font-normal transition-colors duration-200">
                      ({service.count})
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-['Poppins'] text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#9ca3af] group-hover/row:text-[#e1e1e1] transition-colors duration-200">
                    {service.description}
                  </p>
                </div>

                {/* Right Area: Floating Preview Mockups (Desktop) + Arrow */}
                <div className="relative flex items-center gap-6 sm:gap-8 shrink-0">
                  {/* Overlapping Tilted Screen Mockups */}
                  <div className="hidden lg:block w-[180px] h-[95px] relative">
                    <AnimatePresence>
                      {showPreview && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 6 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.92, y: 4 }}
                          transition={{ duration: 0.28, ease: easeOut }}
                          className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center pointer-events-none select-none"
                        >
                          {/* Dark left card */}
                          <div className="w-[110px] h-[80px] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-[#161513] transform -rotate-6 translate-x-3 z-10">
                            <img
                              src={service.darkImg}
                              alt=""
                              className="w-full h-full object-cover object-top opacity-90"
                              loading="lazy"
                            />
                          </div>

                          {/* Light right card */}
                          <div className="w-[110px] h-[80px] rounded-xl overflow-hidden shadow-2xl border border-white/25 bg-white transform rotate-6 z-20">
                            <img
                              src={service.lightImg}
                              alt=""
                              className="w-full h-full object-cover object-top"
                              loading="lazy"
                            />
                          </div>
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
                      className="w-4 h-4 transition-transform duration-300 group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5"
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
