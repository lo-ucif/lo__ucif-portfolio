import { motion } from "framer-motion";
import type { CaseStudy } from "../types";
import { FigmaIcon } from "../../../constants/Icon";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudyToolsUsedProps = {
  study: CaseStudy;
};

// Reusable SVG icons for design technologies
function AutoLayoutIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#5197ff" />
      <line x1="9" y1="3" x2="9" y2="21" stroke="#5197ff" />
      <line x1="15" y1="3" x2="15" y2="21" stroke="#5197ff" />
    </svg>
  );
}

function TokensIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" stroke="#5197ff" />
      <circle cx="12" cy="12" r="4" fill="#5197ff" />
    </svg>
  );
}

function PrototypeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="5 3 19 12 5 21 5 3" stroke="#5197ff" fill="#5197ff" fillOpacity="0.2" />
    </svg>
  );
}

function VectorIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#5197ff" />
    </svg>
  );
}

export function CaseStudyToolsUsed({ study }: CaseStudyToolsUsedProps) {
  const tools =
    study.toolsUsed || [
      {
        name: "Figma",
        category: "UI/UX Interface Design",
        description: "Primary interface design tool for components, tokens, and layouts.",
      },
      {
        name: "Auto Layout 5.0",
        category: "Spatial Architecture",
        description: "8-point spatial system for responsive adaptation.",
      },
      {
        name: "Interactive Prototyping",
        category: "Interaction & Flow",
        description: "Screen transitions and micro-interaction linkages.",
      },
    ];

  // Helper to pick appropriate icon
  const getToolIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("figma") && !lower.includes("auto")) {
      return <FigmaIcon width={24} height={24} />;
    }
    if (lower.includes("auto layout") || lower.includes("grid")) {
      return <AutoLayoutIcon className="w-6 h-6 text-[#5197ff]" />;
    }
    if (lower.includes("token") || lower.includes("variable") || lower.includes("variant")) {
      return <TokensIcon className="w-6 h-6 text-[#5197ff]" />;
    }
    if (lower.includes("proto") || lower.includes("motion") || lower.includes("interact")) {
      return <PrototypeIcon className="w-6 h-6 text-[#5197ff]" />;
    }
    return <VectorIcon className="w-6 h-6 text-[#5197ff]" />;
  };

  return (
    <section id="tools-used" className="flex flex-col gap-6 scroll-mt-28 text-left">
      {/* Section Header */}
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
          05. Tools Used
        </span>
        <h2 className="font-['Itim'] text-[32px] sm:text-[38px] text-white">
          Design Tools &amp; Technologies
        </h2>
        <p className="font-['Poppins'] text-[14.5px] sm:text-[15.5px] text-[#b4b4b4] leading-relaxed max-w-2xl">
          The software and methodologies employed across user interface engineering, design systems, and prototyping.
        </p>
      </motion.div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((tool, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col gap-3 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.08] hover:border-[#5197ff]/40 transition-colors duration-200"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: easeOut, delay: idx * 0.08 }}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                {getToolIcon(tool.name)}
              </div>
              <span className="font-['Itim'] text-[11px] text-[#5197ff] uppercase tracking-wider rounded-full bg-[#5197ff]/10 px-2.5 py-0.5 border border-[#5197ff]/20">
                {tool.category}
              </span>
            </div>

            <div className="flex flex-col gap-1 mt-1">
              <h3 className="font-['Itim'] text-[18px] text-white font-semibold">
                {tool.name}
              </h3>
              {tool.description && (
                <p className="font-['Poppins'] text-[12.5px] text-[#9CA3AF] leading-relaxed">
                  {tool.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
