import { useState } from "react";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

interface ServiceItem {
  watermark: string;
  badge: string;
  category: string;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    watermark: "01",
    badge: "UI / UX",
    category: "DESIGN",
    title: "UI/UX Design",
    description:
      "Creating intuitive, visually engaging interfaces that deliver seamless and meaningful user experiences.",
  },
  {
    watermark: "02",
    badge: "WEB DEV",
    category: "ENGINEERING",
    title: "Web Development",
    description:
      "Building modern, responsive, and high-performance websites and web applications tailored to your needs.",
  },
  {
    watermark: "03",
    badge: "SOLUTIONS",
    category: "DIGITAL",
    title: "Digital Solutions",
    description:
      "Turning business ideas into tailored digital solutions that solve real problems and drive growth.",
  },
];

export function ServicesCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      id="services"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="relative w-full max-w-225 text-left"
    >
      {/* 1. Header Bar with Pulse Beacon & Sleek Pill */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 sm:mb-8 border-b border-white/[0.08]">
        {/* Left: Active Beacon + Title */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5197ff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5197ff] shadow-[0_0_10px_#5197ff]" />
          </div>
          <div className="flex items-baseline gap-2.5">
            <h3 className="font-['Itim'] text-[21px] sm:text-[24px] font-bold text-white tracking-wide">
              Services &amp; Expertise
            </h3>
            <span className="hidden sm:inline-block font-['Poppins'] text-[12px] text-[#8e95a0] tracking-normal">
              • 3 Core Disciplines
            </span>
          </div>
        </div>

        {/* Right: Modern WHAT I DO Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#5197ff]/10 border border-[#5197ff]/30 shadow-[0_0_15px_rgba(81,151,255,0.12)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5197ff] animate-pulse" />
          <span className="font-['Poppins'] text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-wider text-[#5197ff]">
            What I Do
          </span>
        </div>
      </div>

      {/* 2. Three Editorial Service Columns (No Card Background, No Stroke) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {servicesData.map((service, index) => {
          const isHovered = hoveredIndex === index;
          const isSiblingHovered = hoveredIndex !== null && !isHovered;

          return (
            <motion.div
              key={service.badge}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: easeOut,
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className={`group/card relative flex flex-col justify-between py-2 px-1 sm:px-2 transition-all duration-300 cursor-default min-h-[220px] sm:min-h-[250px] ${
                isSiblingHovered ? "opacity-50 scale-[0.99]" : "opacity-100 scale-100"
              }`}
            >
              {/* Giant Ghost Watermark in Background (styled like the 06 in reference image) */}
              <span
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-5 -left-2 font-serif text-[115px] sm:text-[135px] font-bold leading-none text-white/[0.04] group-hover/card:text-[#5197ff]/[0.10] transition-colors duration-500 z-0"
              >
                {service.watermark}
              </span>

              {/* Content Body */}
              <div className="relative z-10 flex flex-col items-start text-left">
                {/* Top Pill Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] text-[11px] font-mono tracking-widest text-white/90 group-hover/card:border-[#5197ff]/50 group-hover/card:text-[#5197ff] transition-colors duration-300">
                    {service.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-mono tracking-widest uppercase text-[#9ca3af] group-hover/card:border-white/20 transition-colors duration-300">
                    {service.category}
                  </span>
                </div>

                {/* Editorial Serif Title */}
                <h4 className="font-serif text-[28px] sm:text-[32px] font-normal text-white tracking-tight mb-3 group-hover/card:text-[#5197ff] transition-colors duration-200">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="font-['Poppins'] text-[13.5px] sm:text-[14px] leading-[1.7] text-[#9ca3af] group-hover/card:text-[#d1d5db] transition-colors duration-200">
                  {service.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Line (matching reference image) */}
              <div className="relative z-10 mt-6 pt-2">
                <div className="w-10 h-[1.5px] bg-white/20 rounded-full group-hover/card:w-16 group-hover/card:bg-[#5197ff] transition-all duration-300" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
