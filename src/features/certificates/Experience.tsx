import { easeOut, motion } from "framer-motion";
import { useState } from "react";

export const experienceMilestones = [
  {
    id: "engineering",
    badge: "2023",
    year: "2023 - Present",
    title: "Software Engineering",
    organization: "University of Constantine 2 (NTIC)",
    description:
      "Algorithms, data structures, software architecture, and core computer science fundamentals.",
    side: "right",
  },
  {
    id: "webdev",
    badge: "2025",
    year: "2025 - Present",
    title: "Web Developer & UI/UX Designer",
    organization: "Independent & Client Projects",
    description:
      "Designing and developing modern full-stack web applications with React, TypeScript, Next.js, and Figma.",
    side: "right",
  },
  {
    id: "soai",
    badge: "25-26",
    year: "2025 - 2026",
    title: "Design Team Member",
    organization: "School of AI Bejaia",
    description:
      "Crafting visual identity, UI prototyping, event branding, and active community tech events.",
    side: "right",
  },
  {
    id: "automate",
    badge: "2026",
    year: "2026",
    title: "Hackathon Finalist",
    organization: "Automate & Innovate Hackathon",
    description:
      "Engineered an AI-driven talent matching platform MVP under an intensive 48-hour sprint.",
    side: "right",
  },
  {
    id: "whackathon",
    badge: "NOW",
    year: "2026",
    title: "Hackathon Innovator",
    organization: "W-Hackathon Finalist",
    description:
      "Rapidly developed functional web MVPs and digital solutions under tight deadlines.",
    side: "left",
  },
];

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, startAngle);
  const end = polarToCartesian(x, y, radius, endAngle);
  let diff = endAngle - startAngle;
  if (diff < 0) diff += 360;
  const largeArcFlag = diff <= 180 ? "0" : "1";
  return ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 1, end.x, end.y].join(" ");
}

export default function Experience() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Concentric arc centers & radii (viewBox 980 x 720)
  const cx = 410;
  const cy = 370;

  // Arc paths
  const arc1 = describeArc(cx, cy, 285, 180, 290);
  const p1 = polarToCartesian(cx, cy, 285, 290);

  const arc2 = describeArc(cx, cy, 235, 180, 340);
  const p2 = polarToCartesian(cx, cy, 235, 340);

  const arc3 = describeArc(cx, cy, 180, 180, 385);
  const p3 = polarToCartesian(cx, cy, 180, 385);

  const arc4 = describeArc(cx, cy, 125, 180, 445);
  const p4 = polarToCartesian(cx, cy, 125, 445);

  const arc5 = describeArc(cx, cy, 75, 180, 505);
  const p5 = polarToCartesian(cx, cy, 75, 505);

  return (
    <section id="experience" className="flex w-full flex-col items-center gap-6 text-center">
      {/* Title & Subtitle */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h2 className="font-['Itim'] text-[36px] md:text-[44px] text-white">Experience</h2>
        <p className="max-w-xl font-['Poppins'] text-sm md:text-base text-[#a9a9a9]">
          A continuous journey of engineering scalable web applications, UI/UX systems, and hackathon-tested MVPs.
        </p>
      </motion.div>

      {/* Desktop Concentric Arc Infographic (Visible on md and up) */}
      <div className="relative hidden w-full max-w-[980px] md:block overflow-visible mx-auto">
        <svg
          viewBox="0 0 980 720"
          className="w-full h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="exp-blue-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#5197ff" floodOpacity="0.75" />
            </filter>
            <filter id="exp-blue-glow-hover" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#5197ff" floodOpacity="0.95" />
            </filter>
            <linearGradient id="expArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#161513" stopOpacity="0.1" />
              <stop offset="35%" stopColor="#242429" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#303036" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="expFadeLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#161513" stopOpacity="1" />
              <stop offset="100%" stopColor="#161513" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Arcs Group */}
          <g className="transition-opacity duration-300">
            {/* Arc 1: Dotted Outline Top */}
            <path
              d={arc1}
              fill="none"
              stroke={hoveredId === "engineering" ? "#5197ff" : "rgba(81, 151, 255, 0.65)"}
              strokeWidth={hoveredId === "engineering" ? "3.5" : "2.5"}
              strokeDasharray="5 7"
              strokeLinecap="round"
              className="transition-all duration-300"
            />

            {/* Arc 2: Solid Upper Right */}
            <path
              d={arc2}
              fill="none"
              stroke={hoveredId === "webdev" ? "#5197ff" : "url(#expArcGrad)"}
              strokeWidth="38"
              strokeLinecap="round"
              className="transition-all duration-300"
            />

            {/* Arc 3: Solid Lower Right */}
            <path
              d={arc3}
              fill="none"
              stroke={hoveredId === "soai" ? "#5197ff" : "url(#expArcGrad)"}
              strokeWidth="38"
              strokeLinecap="round"
              className="transition-all duration-300"
            />

            {/* Arc 4: Solid Bottom */}
            <path
              d={arc4}
              fill="none"
              stroke={hoveredId === "automate" ? "#5197ff" : "url(#expArcGrad)"}
              strokeWidth="38"
              strokeLinecap="round"
              className="transition-all duration-300"
            />

            {/* Arc 5: Solid Innermost Left */}
            <path
              d={arc5}
              fill="none"
              stroke={hoveredId === "whackathon" ? "#5197ff" : "url(#expArcGrad)"}
              strokeWidth="38"
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          </g>

          {/* Left subtle shadow overlay */}
          <rect x="0" y="150" width="310" height="440" fill="url(#expFadeLeft)" opacity="0.6" pointerEvents="none" />

          {/* Node 1: 2023 - Software Engineering */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredId("engineering")}
            onMouseLeave={() => setHoveredId(null)}
          >
            <circle
              cx={p1.x}
              cy={p1.y}
              r={hoveredId === "engineering" ? 28 : 25}
              fill="#161513"
              stroke="#5197ff"
              strokeWidth="2.5"
              filter={hoveredId === "engineering" ? "url(#exp-blue-glow-hover)" : "url(#exp-blue-glow)"}
              className="transition-all duration-300"
            />
            <text
              x={p1.x}
              y={p1.y + 5}
              fill="#ffffff"
              fontFamily="'Itim', sans-serif"
              fontSize="15"
              textAnchor="middle"
            >
              2023
            </text>
            <text
              x={p1.x + 38}
              y={p1.y - 4}
              fill="#ffffff"
              fontFamily="'Poppins', sans-serif"
              fontSize="15"
              fontWeight="600"
            >
              Software Engineering
            </text>
            <text
              x={p1.x + 38}
              y={p1.y + 14}
              fill="#5197ff"
              fontFamily="'Itim', cursive, sans-serif"
              fontSize="13"
            >
              University of Constantine 2 (NTIC)
            </text>
          </g>

          {/* Node 2: 2025 - Web Developer & UI/UX */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredId("webdev")}
            onMouseLeave={() => setHoveredId(null)}
          >
            <circle
              cx={p2.x}
              cy={p2.y}
              r={hoveredId === "webdev" ? 28 : 25}
              fill="#161513"
              stroke="#5197ff"
              strokeWidth="2.5"
              filter={hoveredId === "webdev" ? "url(#exp-blue-glow-hover)" : "url(#exp-blue-glow)"}
              className="transition-all duration-300"
            />
            <text
              x={p2.x}
              y={p2.y + 5}
              fill="#ffffff"
              fontFamily="'Itim', sans-serif"
              fontSize="15"
              textAnchor="middle"
            >
              2025
            </text>
            <text
              x={p2.x + 38}
              y={p2.y - 4}
              fill="#ffffff"
              fontFamily="'Poppins', sans-serif"
              fontSize="15"
              fontWeight="600"
            >
              Web Developer &amp; UI/UX
            </text>
            <text
              x={p2.x + 38}
              y={p2.y + 14}
              fill="#5197ff"
              fontFamily="'Itim', cursive, sans-serif"
              fontSize="13"
            >
              Independent &amp; Client Projects
            </text>
          </g>

          {/* Node 3: 25-26 - School of AI Bejaia */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredId("soai")}
            onMouseLeave={() => setHoveredId(null)}
          >
            <circle
              cx={p3.x}
              cy={p3.y}
              r={hoveredId === "soai" ? 28 : 25}
              fill="#161513"
              stroke="#5197ff"
              strokeWidth="2.5"
              filter={hoveredId === "soai" ? "url(#exp-blue-glow-hover)" : "url(#exp-blue-glow)"}
              className="transition-all duration-300"
            />
            <text
              x={p3.x}
              y={p3.y + 5}
              fill="#ffffff"
              fontFamily="'Itim', sans-serif"
              fontSize="14"
              textAnchor="middle"
            >
              25-26
            </text>
            <text
              x={p3.x + 38}
              y={p3.y - 4}
              fill="#ffffff"
              fontFamily="'Poppins', sans-serif"
              fontSize="15"
              fontWeight="600"
            >
              Design Team Member
            </text>
            <text
              x={p3.x + 38}
              y={p3.y + 14}
              fill="#5197ff"
              fontFamily="'Itim', cursive, sans-serif"
              fontSize="13"
            >
              School of AI Bejaia
            </text>
          </g>

          {/* Node 4: 2026 - Automate & Innovate Hackathon */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredId("automate")}
            onMouseLeave={() => setHoveredId(null)}
          >
            <circle
              cx={p4.x}
              cy={p4.y + 20}
              r={hoveredId === "automate" ? 28 : 25}
              fill="#161513"
              stroke="#5197ff"
              strokeWidth="2.5"
              filter={hoveredId === "automate" ? "url(#exp-blue-glow-hover)" : "url(#exp-blue-glow)"}
              className="transition-all duration-300"
            />
            <text
              x={p4.x}
              y={p4.y + 25}
              fill="#ffffff"
              fontFamily="'Itim', sans-serif"
              fontSize="15"
              textAnchor="middle"
            >
              2026
            </text>
            <text
              x={p4.x + 38}
              y={p4.y + 16}
              fill="#ffffff"
              fontFamily="'Poppins', sans-serif"
              fontSize="15"
              fontWeight="600"
            >
              Hackathon Finalist
            </text>
            <text
              x={p4.x + 38}
              y={p4.y + 34}
              fill="#5197ff"
              fontFamily="'Itim', cursive, sans-serif"
              fontSize="13"
            >
              Automate &amp; Innovate Hackathon
            </text>
          </g>

          {/* Node 5: NOW - W-Hackathon */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredId("whackathon")}
            onMouseLeave={() => setHoveredId(null)}
          >
            <circle
              cx={p5.x}
              cy={p5.y + 10}
              r={hoveredId === "whackathon" ? 28 : 25}
              fill="#161513"
              stroke="#5197ff"
              strokeWidth="2.5"
              filter={hoveredId === "whackathon" ? "url(#exp-blue-glow-hover)" : "url(#exp-blue-glow)"}
              className="transition-all duration-300"
            />
            <text
              x={p5.x}
              y={p5.y + 15}
              fill="#ffffff"
              fontFamily="'Itim', sans-serif"
              fontSize="15"
              textAnchor="middle"
            >
              NOW
            </text>
            <text
              x={p5.x - 38}
              y={p5.y + 6}
              fill="#ffffff"
              fontFamily="'Poppins', sans-serif"
              fontSize="15"
              fontWeight="600"
              textAnchor="end"
            >
              Hackathon Innovator
            </text>
            <text
              x={p5.x - 38}
              y={p5.y + 24}
              fill="#5197ff"
              fontFamily="'Itim', cursive, sans-serif"
              fontSize="13"
              textAnchor="end"
            >
              W-Hackathon Finalist
            </text>
          </g>
        </svg>

        {/* Hover Information Banner at the bottom for Desktop */}
        {hoveredId && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-center text-sm font-['Poppins'] text-[#d1d1d1] max-w-xl mx-auto"
          >
            {experienceMilestones.find((m) => m.id === hoveredId)?.description}
          </motion.div>
        )}
      </div>

      {/* Mobile Journey Timeline (Visible below md) */}
      <div className="flex flex-col w-full gap-4 md:hidden text-left px-2">
        {experienceMilestones.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: easeOut, delay: index * 0.08 }}
            className="flex items-start gap-3.5 rounded-2xl bg-[#1b1b1e] border border-white/5 p-4 shadow-lg"
          >
            {/* Glowing Circular Badge */}
            <div className="relative shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#5197ff] bg-[#161513] shadow-[0_0_10px_rgba(81,151,255,0.45)]">
              <span className="font-['Itim'] text-white text-[13px] font-bold">
                {item.badge}
              </span>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <span className="font-['Itim'] text-xs text-[#5197ff]">
                {item.year}
              </span>
              <h3 className="font-['Poppins'] text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="font-['Itim'] text-xs text-white/80">
                {item.organization}
              </p>
              <p className="mt-1 font-['Poppins'] text-xs leading-5 text-[#a9a9a9]">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
