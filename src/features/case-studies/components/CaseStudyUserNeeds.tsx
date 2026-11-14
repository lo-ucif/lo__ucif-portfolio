import { motion } from "framer-motion";
import type { CaseStudy } from "../types";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudyUserNeedsProps = {
  study: CaseStudy;
};

// Clean SVG UML Stick Figure Actor Symbol
function UmlActorIcon({ className = "w-10 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Head */}
      <circle cx="20" cy="12" r="8" fill="#161513" stroke="#5197ff" />
      {/* Torso */}
      <line x1="20" y1="20" x2="20" y2="40" stroke="#5197ff" />
      {/* Arms */}
      <line x1="6" y1="28" x2="34" y2="28" stroke="#5197ff" />
      {/* Left leg */}
      <line x1="20" y1="40" x2="10" y2="58" stroke="#5197ff" />
      {/* Right leg */}
      <line x1="20" y1="40" x2="30" y2="58" stroke="#5197ff" />
    </svg>
  );
}

export function CaseStudyUserNeeds({ study }: CaseStudyUserNeedsProps) {
  const diagram = study.useCaseDiagram;

  // Fallback if diagram data is not explicitly populated
  const actors =
    diagram?.actors || [
      {
        id: "primary",
        name: "Primary User",
        role: "Main Platform Learner",
        useCases: study.research?.userNeeds || ["Access core features", "Track daily progress"],
      },
      {
        id: "secondary",
        name: "Platform Supervisor",
        role: "Evaluator / Admin",
        useCases: ["Manage sessions", "Review performance"],
      },
    ];

  const systemName = diagram?.systemName || `${study.title} Platform`;
  const actor1 = actors[0];
  const actor2 = actors.length > 1 ? actors[1] : null;

  return (
    <section id="user-needs" className="flex flex-col gap-6 scroll-mt-28 text-left">
      {/* Section Header */}
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
          03. User Needs
        </span>
        <h2 className="font-['Itim'] text-[32px] sm:text-[38px] text-white">
          UML Use Case Diagram
        </h2>
        <p className="font-['Poppins'] text-[14.5px] sm:text-[15.5px] text-[#b4b4b4] leading-relaxed max-w-2xl">
          Mapping primary user types to their core functional needs within the system architecture.
        </p>
      </motion.div>

      {/* ======================================================== */}
      {/* UML USE CASE DIAGRAM CANVAS                              */}
      {/* ======================================================== */}
      <motion.div
        className="relative flex flex-col p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1c1b18] via-[#1A1917] to-[#161513] border border-white/[0.1] shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        {/* UML System Boundary Box Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-['Itim'] text-[12px] text-[#5197ff] uppercase tracking-wider">
              System Boundary:
            </span>
            <span className="font-['Poppins'] text-[14px] sm:text-[15px] font-semibold text-white">
              «system» {systemName}
            </span>
          </div>
          <span className="font-['Itim'] text-[12px] text-[#8491A0] rounded-full bg-white/[0.04] px-3 py-1 border border-white/10 hidden sm:inline">
            UML 2.5 Standard
          </span>
        </div>

        {/* Desktop UML Diagram View (2 Actors + Central Use Case Ellipses) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center py-4">
          {/* LEFT ACTOR */}
          {actor1 && (
            <div className="lg:col-span-3 flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-[#161513] border border-white/[0.08] shadow-lg">
              <UmlActorIcon className="w-12 h-18 text-[#5197ff]" />
              <div className="flex flex-col mt-1">
                <span className="font-['Itim'] text-[18px] text-white font-bold">
                  {actor1.name}
                </span>
                {actor1.arabicName && (
                  <span className="font-['Inter'] text-[13px] text-[#5197ff]">
                    {actor1.arabicName}
                  </span>
                )}
                <span className="font-['Poppins'] text-[11.5px] text-[#8491A0] mt-0.5">
                  «actor» {actor1.role}
                </span>
              </div>
            </div>
          )}

          {/* CENTER USE CASES (ELLIPSES) WITH ASSOCIATION LINES */}
          <div className="lg:col-span-6 flex flex-col gap-3 px-2">
            {/* Actor 1 Use Cases */}
            {actor1?.useCases.map((uc, idx) => (
              <div key={`a1-${idx}`} className="flex items-center gap-2">
                <div className="w-6 h-px bg-[#5197ff]/40 shrink-0" />
                <div className="flex-1 py-2.5 px-4 rounded-full bg-[#161513] border border-[#5197ff]/40 text-center font-['Poppins'] text-[12.5px] text-[#e1e1e1] shadow-md hover:border-[#5197ff] transition-colors">
                  ({uc})
                </div>
                <div className="w-6 h-px bg-white/10 shrink-0" />
              </div>
            ))}

            {/* Separator if second actor exists */}
            {actor2 && actor2.useCases.length > 0 && (
              <div className="my-1 border-t border-dashed border-white/10" />
            )}

            {/* Actor 2 Use Cases */}
            {actor2?.useCases.map((uc, idx) => (
              <div key={`a2-${idx}`} className="flex items-center gap-2">
                <div className="w-6 h-px bg-white/10 shrink-0" />
                <div className="flex-1 py-2.5 px-4 rounded-full bg-[#161513] border border-emerald-500/40 text-center font-['Poppins'] text-[12.5px] text-[#e1e1e1] shadow-md hover:border-emerald-400 transition-colors">
                  ({uc})
                </div>
                <div className="w-6 h-px bg-emerald-500/40 shrink-0" />
              </div>
            ))}
          </div>

          {/* RIGHT ACTOR */}
          {actor2 && (
            <div className="lg:col-span-3 flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-[#161513] border border-white/[0.08] shadow-lg">
              <UmlActorIcon className="w-12 h-18 text-emerald-400" />
              <div className="flex flex-col mt-1">
                <span className="font-['Itim'] text-[18px] text-white font-bold">
                  {actor2.name}
                </span>
                {actor2.arabicName && (
                  <span className="font-['Inter'] text-[13px] text-emerald-400">
                    {actor2.arabicName}
                  </span>
                )}
                <span className="font-['Poppins'] text-[11.5px] text-[#8491A0] mt-0.5">
                  «actor» {actor2.role}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Mobile & Tablet Responsive UML View */}
        <div className="lg:hidden flex flex-col gap-6">
          {actors.map((actor, aIdx) => {
            const isFirst = aIdx === 0;
            const accentColor = isFirst ? "text-[#5197ff] border-[#5197ff]/40" : "text-emerald-400 border-emerald-500/40";

            return (
              <div
                key={actor.id}
                className="flex flex-col gap-4 p-5 rounded-2xl bg-[#161513] border border-white/[0.08]"
              >
                {/* Actor Header */}
                <div className="flex items-center gap-3 border-b border-white/[0.06] pb-3">
                  <UmlActorIcon className={`w-8 h-12 ${isFirst ? "text-[#5197ff]" : "text-emerald-400"}`} />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-['Itim'] text-[17px] text-white font-bold">
                        {actor.name}
                      </span>
                      {actor.arabicName && (
                        <span className={`font-['Inter'] text-[12px] ${isFirst ? "text-[#5197ff]" : "text-emerald-400"}`}>
                          {actor.arabicName}
                        </span>
                      )}
                    </div>
                    <span className="font-['Poppins'] text-[11px] text-[#8491A0]">
                      «actor» {actor.role}
                    </span>
                  </div>
                </div>

                {/* Actor Use Cases */}
                <div className="flex flex-col gap-2">
                  <span className="font-['Itim'] text-[12px] text-[#8491A0] uppercase">
                    Associated Use Cases:
                  </span>
                  <div className="flex flex-col gap-2">
                    {actor.useCases.map((uc, uIdx) => (
                      <div
                        key={uIdx}
                        className={`p-2.5 px-4 rounded-full bg-[#1A1917] border ${accentColor} text-center font-['Poppins'] text-[12.5px] text-[#e1e1e1]`}
                      >
                        ({uc})
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
