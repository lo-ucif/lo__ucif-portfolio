import { useState } from "react";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

interface ServiceItem {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradient: string;
  glowColor: string;
  icon: (isHovered: boolean) => React.ReactNode;
}

const servicesData: ServiceItem[] = [
  {
    num: "01",
    title: "UI/UX Design",
    subtitle: "Design Systems & Prototypes",
    description:
      "Creating intuitive, visually engaging interfaces that deliver seamless and meaningful user experiences.",
    tags: ["Figma", "Design Systems", "Prototyping", "UX Research"],
    gradient: "from-[#5197ff]/25 via-[#5197ff]/5 to-transparent",
    glowColor: "rgba(81, 151, 255, 0.18)",
    icon: () => (
      <svg
        className="w-6 h-6 transition-transform duration-300 group-hover/card:scale-110"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Modern Vector Pen / Designer Compass icon */}
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Web Development",
    subtitle: "Modern Full-Stack Engineering",
    description:
      "Building modern, responsive, and high-performance websites and scalable web applications.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    gradient: "from-[#38bdf8]/25 via-[#38bdf8]/5 to-transparent",
    glowColor: "rgba(56, 189, 248, 0.18)",
    icon: () => (
      <svg
        className="w-6 h-6 transition-transform duration-300 group-hover/card:scale-110"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Modern code terminal / brackets icon */}
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Digital Solutions",
    subtitle: "Tailored Architecture & APIs",
    description:
      "Turning business ideas into tailored digital solutions that solve real problems and drive growth.",
    tags: ["REST APIs", "System Design", "Databases", "Cloud"],
    gradient: "from-[#818cf8]/25 via-[#818cf8]/5 to-transparent",
    glowColor: "rgba(129, 140, 248, 0.18)",
    icon: () => (
      <svg
        className="w-6 h-6 transition-transform duration-300 group-hover/card:scale-110"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Dynamic lightning / spark solution icon */}
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export function ServicesCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      id="services"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOut }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsContainerHovered(true)}
      onMouseLeave={() => {
        setIsContainerHovered(false);
        setHoveredIndex(null);
      }}
      className="group/container relative w-full max-w-225 rounded-[26px] sm:rounded-[32px] border border-white/[0.12] bg-[#191816]/90 p-5 sm:p-7 md:p-8 backdrop-blur-2xl text-left shadow-[0_24px_64px_-16px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-500 hover:border-[#5197ff]/40"
    >
      {/* 1. Dynamic Cursor Spotlight Layer across the container */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[32px] transition-opacity duration-500"
        style={{
          opacity: isContainerHovered ? 1 : 0,
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(81, 151, 255, 0.12), transparent 75%)`,
        }}
      />

      {/* 2. Top Subtle Ambient Horizon Light */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-[#5197ff]/40 to-transparent" />

      {/* 3. Header Bar with Pulse Beacon & Sleek Pill */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-white/[0.08]">
        {/* Left: Active Beacon + Title + Subtitle */}
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

      {/* 4. Three Cards Interactive Bento Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {servicesData.map((service, index) => {
          const isHovered = hoveredIndex === index;
          const isSiblingHovered = hoveredIndex !== null && !isHovered;

          return (
            <motion.div
              key={service.num}
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
                y: -6,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className={`group/card relative flex flex-col justify-between rounded-2xl sm:rounded-[22px] border p-5 sm:p-6 backdrop-blur-md transition-all duration-300 overflow-hidden cursor-default ${
                isHovered
                  ? "border-[#5197ff]/60 bg-[#1f1e1b] shadow-[0_16px_36px_-10px_rgba(81,151,255,0.25)]"
                  : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"
              } ${isSiblingHovered ? "opacity-60 scale-[0.985]" : "opacity-100 scale-100"}`}
            >
              {/* Card Ambient Glow on Hover */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl transition-opacity duration-500 opacity-0 group-hover/card:opacity-100"
                style={{
                  background: `radial-gradient(circle, ${service.glowColor}, transparent 70%)`,
                }}
              />

              {/* Card Content Top */}
              <div>
                {/* Header Row inside each card: Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  {/* Chic Numeric Badge */}
                  <span className="font-['Itim'] text-[24px] sm:text-[26px] font-bold text-[#5197ff]/50 group-hover/card:text-[#5197ff] transition-colors duration-300">
                    {service.num}.
                  </span>

                  {/* Icon Box with Gradient Border & Glow */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#5197ff]/20 via-[#5197ff]/10 to-transparent border border-[#5197ff]/30 flex items-center justify-center text-[#5197ff] shadow-[0_0_15px_rgba(81,151,255,0.15)] group-hover/card:border-[#5197ff]/60 group-hover/card:shadow-[0_0_22px_rgba(81,151,255,0.35)] group-hover/card:bg-[#5197ff]/20 transition-all duration-300">
                    {service.icon(isHovered)}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-2">
                  <h4 className="font-['Itim'] text-[19px] sm:text-[21px] font-bold text-white group-hover/card:text-[#5197ff] transition-colors duration-200">
                    {service.title}
                  </h4>
                  <span className="font-['Poppins'] text-[11.5px] font-medium text-[#5197ff]/90 tracking-wide block mt-0.5">
                    {service.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="font-['Poppins'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#9ca3af] group-hover/card:text-[#d1d5db] transition-colors duration-200">
                  {service.description}
                </p>
              </div>

              {/* Card Bottom: Skill Tags + Animated Neon Bar */}
              <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex flex-col gap-3">
                {/* Micro Skill Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-['Poppins'] text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[#a1a1aa] group-hover/card:border-[#5197ff]/30 group-hover/card:text-white transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Animated Glowing Accent Beam */}
                <div className="w-full h-[2px] bg-white/[0.05] rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-gradient-to-r from-[#5197ff] to-[#38bdf8] transition-all duration-500 origin-left"
                    style={{
                      width: isHovered ? "100%" : "20%",
                      opacity: isHovered ? 1 : 0.4,
                      boxShadow: isHovered ? "0 0 10px #5197ff" : "none",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
