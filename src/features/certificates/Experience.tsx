import { easeOut, motion } from "framer-motion";

export const experienceMilestones = [
  {
    num: "01",
    title: "Software Engineering Degree",
    period: "2023 - Present",
    organization: "University of Constantine 2 (NTIC)",
    description:
      "Mastering algorithms, data structures, software architecture, object-oriented design, and database systems with high engineering discipline.",
    tags: ["Algorithms", "Data Structures", "OOP", "Database Design"],
    side: "left",
  },
  {
    num: "02",
    title: "Web Developer & UI/UX Designer",
    period: "2025 - Present",
    organization: "Independent & Client Projects",
    description:
      "Architecting responsive full-stack applications with React, TypeScript, Next.js, and modern Figma design systems.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma"],
    side: "right",
  },
  {
    num: "03",
    title: "Design Lead & Contributor",
    period: "2025 - 2026",
    organization: "School of AI Bejaia",
    description:
      "Directing visual identity, UI prototyping, event branding, and technical workshops across tech student communities.",
    tags: ["Brand Identity", "UI Prototyping", "Design Systems"],
    side: "left",
  },
  {
    num: "04",
    title: "Hackathon Finalist",
    period: "2026",
    organization: "Automate & Innovate Hackathon",
    description:
      "Engineered an AI-driven talent matching platform MVP under an intensive 48-hour competitive sprint with real-time API integrations.",
    tags: ["AI Matching", "Full-Stack MVP", "REST APIs"],
    side: "right",
  },
  {
    num: "05",
    title: "Full-Stack Hackathon Innovator",
    period: "2026",
    organization: "W-Hackathon Finalist",
    description:
      "Delivered smart, functional web solutions with rapid real-world deployment under competitive hackathon pressure.",
    tags: ["Sprint Delivery", "Web Architecture", "Competitive Teamwork"],
    side: "left",
  },
  {
    num: "06",
    title: "Scaling to Production & E-Commerce",
    period: "Present & Future",
    organization: "Havana Buy & Modern Platforms",
    description:
      "Building scalable multi-vendor marketplaces with NestJS, Prisma, Docker, and multi-wilaya logistics verification across 58 wilayas.",
    tags: ["NestJS", "Prisma", "Docker", "PostgreSQL"],
    side: "right",
  },
];

// 3D Isometric Wireframe Tesseract Cube
function IsoCube({ size = 70 }: { size?: number }) {
  const R = size;
  const cos30 = Math.cos(Math.PI / 6);
  const sin30 = Math.sin(Math.PI / 6);
  const cx = R * 1.2;
  const cy = R * 1.2;

  const top = { x: cx, y: cy - R };
  const tr = { x: cx + R * cos30, y: cy - R * sin30 };
  const br = { x: cx + R * cos30, y: cy + R * sin30 };
  const bot = { x: cx, y: cy + R };
  const bl = { x: cx - R * cos30, y: cy + R * sin30 };
  const tl = { x: cx - R * cos30, y: cy - R * sin30 };
  const center = { x: cx, y: cy };

  const r2 = R * 0.44;
  const top2 = { x: cx, y: cy - r2 };
  const tr2 = { x: cx + r2 * cos30, y: cy - r2 * sin30 };
  const br2 = { x: cx + r2 * cos30, y: cy + r2 * sin30 };
  const bot2 = { x: cx, y: cy + r2 };
  const bl2 = { x: cx - r2 * cos30, y: cy + r2 * sin30 };
  const tl2 = { x: cx - r2 * cos30, y: cy - r2 * sin30 };

  return (
    <svg
      width={cx * 2}
      height={cy * 2}
      viewBox={`0 0 ${cx * 2} ${cy * 2}`}
      className="overflow-visible select-none drop-shadow-[0_0_20px_rgba(81,151,255,0.7)]"
    >
      <defs>
        <filter id="cube-glow-def" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#5197ff" floodOpacity="0.75" />
        </filter>
      </defs>

      <g filter="url(#cube-glow-def)">
        {/* Outer Hexagon */}
        <polygon
          points={`${top.x},${top.y} ${tr.x},${tr.y} ${br.x},${br.y} ${bot.x},${bot.y} ${bl.x},${bl.y} ${tl.x},${tl.y}`}
          fill="rgba(81, 151, 255, 0.08)"
          stroke="#5197ff"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Central spokes */}
        <line x1={center.x} y1={center.y} x2={top.x} y2={top.y} stroke="#5197ff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1={center.x} y1={center.y} x2={br.x} y2={br.y} stroke="#5197ff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1={center.x} y1={center.y} x2={bl.x} y2={bl.y} stroke="#5197ff" strokeWidth="2.5" strokeLinecap="round" />

        {/* Inner Hexagon */}
        <polygon
          points={`${top2.x},${top2.y} ${tr2.x},${tr2.y} ${br2.x},${br2.y} ${bot2.x},${bot2.y} ${bl2.x},${bl2.y} ${tl2.x},${tl2.y}`}
          fill="rgba(81, 151, 255, 0.16)"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Connecting struts */}
        <line x1={top.x} y1={top.y} x2={top2.x} y2={top2.y} stroke="#5197ff" strokeWidth="1.6" opacity="0.9" />
        <line x1={tr.x} y1={tr.y} x2={tr2.x} y2={tr2.y} stroke="#5197ff" strokeWidth="1.6" opacity="0.9" />
        <line x1={br.x} y1={br.y} x2={br2.x} y2={br2.y} stroke="#5197ff" strokeWidth="1.6" opacity="0.9" />
        <line x1={bot.x} y1={bot.y} x2={bot2.x} y2={bot2.y} stroke="#5197ff" strokeWidth="1.6" opacity="0.9" />
        <line x1={bl.x} y1={bl.y} x2={bl2.x} y2={bl2.y} stroke="#5197ff" strokeWidth="1.6" opacity="0.9" />
        <line x1={tl.x} y1={tl.y} x2={tl2.x} y2={tl2.y} stroke="#5197ff" strokeWidth="1.6" opacity="0.9" />

        {/* Glowing vertex dots */}
        <circle cx={top.x} cy={top.y} r="3" fill="#ffffff" />
        <circle cx={tr.x} cy={tr.y} r="3" fill="#ffffff" />
        <circle cx={br.x} cy={br.y} r="3" fill="#ffffff" />
        <circle cx={bot.x} cy={bot.y} r="3" fill="#ffffff" />
        <circle cx={bl.x} cy={bl.y} r="3" fill="#ffffff" />
        <circle cx={tl.x} cy={tl.y} r="3" fill="#ffffff" />
        <circle cx={center.x} cy={center.y} r="4" fill="#5197ff" />
      </g>
    </svg>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative flex w-full flex-col items-center gap-10 text-center py-6">
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <span className="font-['Itim'] text-xl sm:text-2xl text-white/80 tracking-wide">
          The Journey of a
        </span>
        <h2 className="font-['Itim'] text-4xl sm:text-6xl text-[#5197ff] mt-1 drop-shadow-[0_0_35px_rgba(81,151,255,0.4)]">
          Developer &amp; Designer
        </h2>
        <p className="mt-2 font-['Poppins'] text-sm sm:text-base text-[#a9a9a9] max-w-xl">
          A continuous path of engineering scalable software, crafting user-centered interfaces, and building hackathon MVPs.
        </p>
      </motion.div>

      {/* Main Vertical Journey Container */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* ======================================================== */}
        {/* DESKTOP ALTERNATING VERTICAL TIMELINE WITH WINDING PATH  */}
        {/* ======================================================== */}
        <div className="relative hidden md:block">
          
          {/* Central Vertical Multi-Strand Curving Path */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[160px] pointer-events-none select-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 160 1700"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="path-blue-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#5197ff" floodOpacity="0.8" />
                </filter>
              </defs>

              {/* Multi-Strand Curved Ribbon flowing downwards */}
              {/* Outer Glow Line */}
              <path
                d="M 80,0 C 80,80 30,120 30,220 C 30,340 130,360 130,480 C 130,600 80,640 80,760 C 80,880 30,920 30,1040 C 30,1160 130,1200 130,1320 C 130,1440 80,1480 80,1650"
                fill="none"
                stroke="#5197ff"
                strokeWidth="1.2"
                strokeOpacity="0.45"
              />

              {/* Main Core Blue Line */}
              <path
                d="M 80,0 C 80,80 34,120 34,220 C 34,340 126,360 126,480 C 126,600 80,640 80,760 C 80,880 34,920 34,1040 C 34,1160 126,1200 126,1320 C 126,1440 80,1480 80,1650"
                fill="none"
                stroke="#5197ff"
                strokeWidth="2.5"
                filter="url(#path-blue-glow)"
              />

              {/* Bright White Accent Line */}
              <path
                d="M 80,0 C 80,80 38,120 38,220 C 38,340 122,360 122,480 C 122,600 80,640 80,760 C 80,880 38,920 38,1040 C 38,1160 122,1200 122,1320 C 122,1440 80,1480 80,1650"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeOpacity="0.85"
              />
            </svg>
          </div>

          {/* Timeline Milestones List */}
          <div className="relative z-10 flex flex-col gap-12 sm:gap-16">
            {experienceMilestones.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={item.num} className="relative">
                  {/* Floating 3D Cube checkpoint placed right between milestones 03 and 04 */}
                  {index === 3 && (
                    <div className="flex flex-col items-center justify-center my-6 z-20">
                      <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="cursor-pointer"
                      >
                        <IsoCube size={55} />
                      </motion.div>
                      <span className="mt-2 font-['Itim'] text-xs text-[#5197ff] tracking-wider uppercase drop-shadow-[0_0_8px_rgba(81,151,255,0.6)]">
                        HACKATHON &amp; INNOVATION HORIZON
                      </span>
                    </div>
                  )}

                  {/* Milestone Row */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: easeOut, delay: index * 0.08 }}
                    className={`relative flex items-center ${
                      isLeft ? "justify-start pr-12 md:pr-0" : "justify-end pl-12 md:pl-0"
                    }`}
                  >
                    {/* Node on central axis */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                      <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-[#5197ff] bg-[#161513] shadow-[0_0_12px_#5197ff] group cursor-pointer">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffffff] shadow-[0_0_6px_#5197ff]" />
                      </div>
                    </div>

                    {/* Milestone Card */}
                    <div className={`w-full md:w-[45%] ${isLeft ? "text-right md:pr-10" : "text-left md:pl-10"}`}>
                      <div className="group relative rounded-2xl border border-white/10 bg-[#19191e]/90 p-5 sm:p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#5197ff]/60 hover:shadow-[0_0_25px_rgba(81,151,255,0.2)] hover:-translate-y-1">
                        {/* Number & Period */}
                        <div className={`flex items-center gap-2 ${isLeft ? "justify-end" : "justify-start"}`}>
                          <span className="font-['Itim'] text-sm font-bold text-[#5197ff]">
                            {item.num}.
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-['Itim'] text-xs text-white/80">
                            {item.period}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-2 font-['Poppins'] text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors">
                          {item.title}
                        </h3>

                        {/* Organization */}
                        <p className="mt-0.5 font-['Itim'] text-sm text-[#5197ff]">
                          {item.organization}
                        </p>

                        {/* Description */}
                        <p className="mt-2 font-['Poppins'] text-xs sm:text-sm leading-relaxed text-[#a9a9a9]">
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div className={`mt-3 flex flex-wrap gap-1.5 ${isLeft ? "justify-end" : "justify-start"}`}>
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
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE VERTICAL TIMELINE WITH WINDING LEFT PATH (< md)  */}
        {/* ======================================================== */}
        <div className="relative flex flex-col gap-6 md:hidden text-left">
          
          {/* Vertical Multi-Strand Guide Line on Left */}
          <div className="absolute top-2 bottom-4 left-4 w-[2px] bg-gradient-to-b from-[#5197ff] via-[#ffffff] to-[#5197ff] shadow-[0_0_10px_#5197ff]" />

          {/* 3D Cube Highlight on Mobile */}
          <div className="flex items-center gap-3 pl-8 py-2">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <IsoCube size={30} />
            </motion.div>
            <span className="font-['Itim'] text-xs text-[#5197ff] tracking-wider uppercase">
              EXPERIENCE JOURNEY
            </span>
          </div>

          {experienceMilestones.map((item, index) => (
            <motion.div
              key={`mob-${item.num}`}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: easeOut, delay: index * 0.07 }}
              className="relative pl-10"
            >
              {/* Glowing Node on Left Axis */}
              <div className="absolute left-[9px] top-4 flex items-center justify-center w-4 h-4 rounded-full border-2 border-[#5197ff] bg-[#161513] shadow-[0_0_8px_#5197ff]">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-[#19191e]/90 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="font-['Itim'] text-xs font-bold text-[#5197ff]">
                    {item.num}.
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-['Itim'] text-[11px] text-white/80">
                    {item.period}
                  </span>
                </div>

                <h3 className="mt-1.5 font-['Poppins'] text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="font-['Itim'] text-xs text-[#5197ff]">
                  {item.organization}
                </p>
                <p className="mt-1.5 font-['Poppins'] text-xs leading-relaxed text-[#a9a9a9]">
                  {item.description}
                </p>

                <div className="mt-2.5 flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-['Itim'] text-[10px] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
