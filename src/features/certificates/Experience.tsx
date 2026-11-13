import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const experienceMilestones = [
  {
    id: "engineering",
    quote: "\"FOUNDATION OF EVERYTHING\"",
    badge: "2023",
    period: "2023 - Present",
    title: "Software Engineering Degree",
    organization: "University of Constantine 2 (NTIC)",
    description:
      "Mastering algorithms, data structures, software architecture, object-oriented design, and database systems with high engineering discipline.",
    tags: ["Algorithms", "Data Structures", "OOP", "Database Design"],
    stemHeight: 90,
  },
  {
    id: "webdev",
    quote: "\"TURNING IDEAS INTO CODE\"",
    badge: "2025",
    period: "2025 - Present",
    title: "Web Developer & UI/UX Designer",
    organization: "Independent & Client Projects",
    description:
      "Designing and architecting modern full-stack web applications with React, TypeScript, Next.js, and Figma design systems.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma"],
    stemHeight: 140,
  },
  {
    id: "soai",
    quote: "\"COMMUNITY & VISUAL IMPACT\"",
    badge: "25-26",
    period: "2025 - 2026",
    title: "Design Team Member & Lead",
    organization: "School of AI Bejaia",
    description:
      "Directing visual identity, UI prototyping, event branding, and technical workshops across active student tech communities.",
    tags: ["Brand Identity", "UI Prototyping", "Design Systems", "Community"],
    stemHeight: 95,
  },
  {
    id: "automate",
    quote: "\"48 HOURS UNDER PRESSURE\"",
    badge: "2026",
    period: "2026",
    title: "Hackathon Finalist",
    organization: "Automate & Innovate Hackathon",
    description:
      "Engineered an AI-driven talent matching platform MVP under an intensive 48-hour sprint with real-time API integrations.",
    tags: ["AI Matching", "Full-Stack MVP", "REST APIs", "Rapid Delivery"],
    stemHeight: 145,
  },
  {
    id: "whackathon",
    quote: "\"REAL-WORLD SPEED & INNOVATION\"",
    badge: "2026",
    period: "2026",
    title: "Full-Stack Hackathon Finalist",
    organization: "W-Hackathon",
    description:
      "Delivered smart, functional web MVPs with rapid real-world deployment under competitive hackathon conditions.",
    tags: ["Sprint Delivery", "Web Architecture", "Competitive Teamwork"],
    stemHeight: 90,
  },
  {
    id: "havana",
    quote: "\"SCALING TO PRODUCTION\"",
    badge: "NOW",
    period: "Present & Future",
    title: "Full-Stack Architecture & E-Commerce",
    organization: "Havana Buy & Modern Platforms",
    description:
      "Architecting scalable multi-vendor marketplaces with NestJS, Prisma, Docker, and multi-wilaya logistics verification across 58 wilayas.",
    tags: ["NestJS", "Prisma", "Docker", "PostgreSQL", "Scalable Systems"],
    stemHeight: 130,
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track vertical scroll progress across the container height (300vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Translate horizontally from left to right as the user scrolls vertically
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full h-[320vh] sm:h-[350vh]"
    >
      {/* Sticky Viewport Container: Pinned during scroll, then releases */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-10 sm:py-14 select-none">
        
        {/* Top Header matching reference image: Life of a / Experience */}
        <div className="flex flex-col items-center text-center px-4 z-20 shrink-0">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Itim'] text-xl sm:text-2xl text-white/80 tracking-wide"
          >
            The Journey of a
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-['Itim'] text-4xl sm:text-6xl md:text-7xl text-[#5197ff] mt-1 drop-shadow-[0_0_35px_rgba(81,151,255,0.45)]"
          >
            Developer &amp; Designer
          </motion.h2>
          <div className="mt-2.5 flex items-center gap-2 font-['Poppins'] text-xs sm:text-sm text-[#a9a9a9]">
            <span>Scroll down to advance the timeline</span>
            <span className="text-[#5197ff] font-bold animate-pulse">→</span>
          </div>
        </div>

        {/* Central / Lower Horizontal Timeline Axis */}
        <div className="relative w-full my-auto z-10 py-8">
          {/* Continuous Baseline Axis running across */}
          <div className="absolute left-0 right-0 bottom-[15px] h-[1.5px] bg-white/20 -z-0" />
          
          {/* Active Glowing Line behind nodes */}
          <div className="absolute left-0 right-0 bottom-[15px] h-[1.5px] bg-gradient-to-r from-[#5197ff]/60 via-[#5197ff] to-[#5197ff]/60 shadow-[0_0_12px_#5197ff] -z-0" />

          {/* Horizontally Moving Milestones Container */}
          <motion.div
            style={{ x }}
            className="flex items-end gap-16 sm:gap-28 pl-8 sm:pl-24 pr-40 sm:pr-60 relative z-10"
          >
            {experienceMilestones.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center shrink-0 w-[290px] sm:w-[350px] group"
              >
                {/* Content Block Above Stem */}
                <div className="flex flex-col items-center text-center px-3 mb-2 transition-transform duration-300 group-hover:-translate-y-1.5">
                  {/* Quote / Highlight Tag */}
                  <span className="font-['Itim'] text-xs sm:text-sm text-[#5197ff] tracking-wider uppercase drop-shadow-[0_0_10px_rgba(81,151,255,0.5)]">
                    {item.quote}
                  </span>

                  {/* Title */}
                  <h3 className="mt-1 font-['Poppins'] text-lg sm:text-2xl font-bold text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  {/* Organization & Year */}
                  <p className="mt-0.5 font-['Itim'] text-xs sm:text-sm text-white/80">
                    {item.organization} <span className="text-[#5197ff]">({item.period})</span>
                  </p>

                  {/* Description */}
                  <p className="mt-2 font-['Poppins'] text-xs leading-relaxed text-[#a9a9a9] line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-2.5 flex flex-wrap justify-center gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-['Itim'] text-[11px] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Vertical Stem Line Connecting Content to Horizontal Axis */}
                <div
                  style={{ height: `${item.stemHeight}px` }}
                  className="w-[1.5px] bg-gradient-to-t from-[#5197ff] via-[#5197ff]/60 to-transparent transition-all duration-300 group-hover:from-white group-hover:via-[#5197ff] group-hover:w-[2px]"
                />

                {/* Circular Node Resting on the Horizontal Line */}
                <div className="relative flex items-center justify-center w-7 h-7 -mb-[14px] rounded-full border-2 border-[#5197ff] bg-[#161513] shadow-[0_0_12px_#5197ff] transition-all duration-300 group-hover:scale-125 group-hover:border-white group-hover:shadow-[0_0_18px_#5197ff] cursor-pointer">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5197ff] group-hover:bg-white transition-colors" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Interactive Navigation / Progress Indicator */}
        <div className="flex flex-col items-center gap-2 z-20 shrink-0 px-4">
          <div className="w-56 sm:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              className="h-full bg-[#5197ff] rounded-full shadow-[0_0_12px_#5197ff]"
            />
          </div>
          <span className="font-['Itim'] text-xs text-white/60">
            Keep scrolling down to complete experience &amp; continue
          </span>
        </div>
      </div>
    </section>
  );
}
