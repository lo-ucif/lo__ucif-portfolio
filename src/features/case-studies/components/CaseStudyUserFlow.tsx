import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "../types";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudyUserFlowProps = {
  study: CaseStudy;
  onScreenSelect?: (screenIndex: number) => void;
};

export function CaseStudyUserFlow({ study, onScreenSelect }: CaseStudyUserFlowProps) {
  const { designProcess, research } = study;
  const userFlow = designProcess?.userFlow;
  const steps = userFlow?.steps || [];
  const nodes = userFlow?.nodes || [];
  const journey = research?.journey || [];
  const ia = designProcess?.informationArchitecture;

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Fallback node data if nodes array is not explicitly populated
  const displayNodes =
    nodes.length > 0
      ? nodes
      : steps.map((step, idx) => ({
          step: idx + 1,
          title: step.split("(")[0].trim(),
          touchpoint: step.includes("(") ? step.split("(")[1].replace(")", "").trim() : "Screen Touchpoint",
          userAction: `Engages with ${step.split("(")[0].trim()}`,
          systemResponse: "Provides intuitive feedback and transitions to the next step.",
        }));

  const activeNode = displayNodes[activeStepIndex] || displayNodes[0];

  return (
    <section id="user-flow" className="flex flex-col gap-10 scroll-mt-28 text-left">
      {/* Section Header */}
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
          03 — User Flow
        </span>
        <h2 className="font-['Itim'] text-[32px] sm:text-[40px] text-white">
          Platform Architecture &amp; User Navigation
        </h2>
        <p className="font-['Poppins'] text-[15.5px] sm:text-[16.5px] text-[#b4b4b4] leading-relaxed max-w-3xl">
          {userFlow?.description ||
            "A structured visual mapping of how users enter, authenticate, and achieve their primary daily goals with zero friction."}
        </p>
      </motion.div>

      {/* ======================================================== */}
      {/* VISUAL USER FLOW DIAGRAM                                 */}
      {/* ======================================================== */}
      <motion.div
        className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1c1b18] via-[#1A1917] to-[#161513] border border-white/[0.1] shadow-2xl flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
          <div className="flex flex-col">
            <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
              Interactive Navigation Map
            </span>
            <h3 className="font-['Itim'] text-[24px] sm:text-[26px] text-white">
              End-to-End User Flow Diagram
            </h3>
          </div>
          <span className="font-['Poppins'] text-[12px] text-[#8491A0] rounded-full bg-white/[0.04] px-3 py-1 border border-white/10">
            Click any node below to inspect details
          </span>
        </div>

        {/* Visual Flowchart Nodes with Directional Connectors */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-2 pt-2 pb-2">
          {displayNodes.map((node, idx) => {
            const isSelected = activeStepIndex === idx;
            const isLast = idx === displayNodes.length - 1;

            return (
              <div
                key={node.step}
                className="flex flex-col lg:flex-row items-center w-full lg:w-auto flex-1"
              >
                {/* Node Card */}
                <button
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group relative flex flex-col items-start gap-2 p-4 rounded-2xl w-full text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#242424] border-2 border-[#5197ff] shadow-lg shadow-[#5197ff]/20 scale-[1.02]"
                      : "bg-[#161513] border border-white/[0.08] hover:border-white/30 hover:bg-[#1f1e1c]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-['Itim'] text-[13px] font-bold ${
                        isSelected
                          ? "bg-[#5197ff] text-white"
                          : "bg-white/[0.08] text-[#9CA3AF] group-hover:text-white"
                      }`}
                    >
                      {node.step}
                    </span>
                    <span className="font-['Itim'] text-[11px] text-[#5197ff] uppercase">
                      Step {node.step}
                    </span>
                  </div>

                  <h4 className="font-['Itim'] text-[16px] sm:text-[17px] text-white font-semibold leading-snug">
                    {node.title}
                  </h4>

                  <span className="font-['Poppins'] text-[11px] text-[#8491A0] truncate max-w-[140px]">
                    {node.touchpoint}
                  </span>
                </button>

                {/* Flow Connector Arrow */}
                {!isLast && (
                  <div className="hidden lg:flex items-center justify-center px-1 shrink-0 text-[#5197ff]/70">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}

                {/* Mobile Connector Line */}
                {!isLast && (
                  <div className="lg:hidden flex items-center justify-center py-1 text-[#5197ff]/60">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <polyline points="5 12 12 19 19 12" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Step Inspector Box */}
        {activeNode && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="p-5 sm:p-6 rounded-2xl bg-[#161513] border border-[#5197ff]/30 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="flex flex-col gap-1">
                <span className="font-['Itim'] text-[12px] text-[#5197ff] uppercase">
                  Step {activeNode.step} Focus
                </span>
                <h4 className="font-['Itim'] text-[19px] text-white font-bold">
                  {activeNode.title}
                </h4>
                <span className="font-['Poppins'] text-[12px] text-[#8491A0]">
                  Touchpoint: {activeNode.touchpoint}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-['Itim'] text-[12px] text-[#8491A0] uppercase">
                  User Action
                </span>
                <p className="font-['Poppins'] text-[13px] text-[#d1d1d1] leading-relaxed">
                  {activeNode.userAction}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-['Itim'] text-[12px] text-[#8491A0] uppercase">
                  System Feedback &amp; UX Rationale
                </span>
                <p className="font-['Poppins'] text-[13px] text-[#9CA3AF] leading-relaxed">
                  {activeNode.systemResponse}
                </p>
                {onScreenSelect && activeStepIndex < (study.solution?.screens?.length || 0) && (
                  <button
                    type="button"
                    onClick={() => {
                      onScreenSelect(activeStepIndex);
                      const el = document.getElementById("final-design");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-2 text-left font-['Itim'] text-[12.5px] text-[#5197ff] hover:underline cursor-pointer"
                  >
                    View Screen {activeStepIndex + 1} in Final Design ↓
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>

      {/* ======================================================== */}
      {/* USER JOURNEY STEPS MATRIX                                */}
      {/* ======================================================== */}
      {journey.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
              Experience Journey
            </span>
            <h3 className="font-['Itim'] text-[24px] sm:text-[28px] text-white">
              User Journey Mapping
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {journey.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#1A1917] border border-white/[0.07] flex flex-col gap-2.5 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-['Itim'] text-[13px] text-[#5197ff] font-bold">
                    {step.phase}
                  </span>
                  <span className="rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 text-[10.5px] font-['Itim']">
                    {step.experience}
                  </span>
                </div>

                <span className="font-['Poppins'] text-[13px] font-semibold text-white">
                  {step.goal}
                </span>

                <p className="font-['Poppins'] text-[12px] text-[#9CA3AF] leading-relaxed">
                  {step.action}
                </p>

                <div className="mt-auto pt-2.5 border-t border-white/[0.04] font-['Itim'] text-[11.5px] text-[#8491A0]">
                  📍 {step.touchpoint}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* INFORMATION ARCHITECTURE (IA) HIERARCHY                  */}
      {/* ======================================================== */}
      {ia && (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
              System Architecture
            </span>
            <h3 className="font-['Itim'] text-[24px] text-white">
              Information Architecture (IA) Pillars
            </h3>
            <p className="font-['Poppins'] text-[14px] text-[#9CA3AF]">
              {ia.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
            {ia.hierarchy.map((pillar, i) => (
              <div
                key={i}
                className="flex flex-col gap-2.5 p-4 rounded-xl bg-[#161513] border border-white/[0.06]"
              >
                <span className="font-['Itim'] text-[14.5px] text-[#5197ff] font-semibold border-b border-white/[0.08] pb-1.5">
                  {pillar.title}
                </span>
                <ul className="flex flex-col gap-1.5 font-['Poppins'] text-[12px] text-[#d1d1d1]">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-1.5">
                      <span className="text-[#8491A0]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
