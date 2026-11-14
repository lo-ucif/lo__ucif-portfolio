import { motion } from "framer-motion";
import type { CaseStudy } from "../types";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudyProblemNeedsProps = {
  study: CaseStudy;
};

export function CaseStudyProblemNeeds({ study }: CaseStudyProblemNeedsProps) {
  const { problem, research } = study;
  const persona = research?.persona;
  const userNeeds = research?.userNeeds || [];

  return (
    <section id="problem-needs" className="flex flex-col gap-10 scroll-mt-28 text-left">
      {/* Section Header */}
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
          02 — Problem &amp; User Needs
        </span>
        <h2 className="font-['Itim'] text-[32px] sm:text-[40px] text-white">
          The Problem Space &amp; Human Friction
        </h2>
        <p className="font-['Poppins'] text-[15.5px] sm:text-[16.5px] text-[#b4b4b4] leading-relaxed max-w-3xl">
          {problem.statement}
        </p>
      </motion.div>

      {/* Real-World Context & Target Audience Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-3">
          <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
            Real-World Context
          </span>
          <p className="font-['Poppins'] text-[15px] text-[#d1d1d1] leading-relaxed">
            {problem.context}
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-3">
          <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
            Target Audience
          </span>
          <p className="font-['Poppins'] text-[14.5px] text-[#b4b4b4] leading-relaxed">
            {problem.targetAudience}
          </p>
        </div>
      </div>

      {/* User Needs Checklist */}
      {userNeeds.length > 0 && (
        <motion.div
          className="p-6 sm:p-8 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <div className="flex flex-col gap-1">
            <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
              Empirical Requirements
            </span>
            <h3 className="font-['Itim'] text-[24px] text-white">
              Identified User Needs
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {userNeeds.map((need, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#161513] border border-white/[0.04]"
              >
                <div className="w-5 h-5 rounded-full bg-[#5197ff]/20 text-[#5197ff] flex items-center justify-center shrink-0 mt-0.5 text-[12px] font-bold">
                  ✓
                </div>
                <span className="font-['Poppins'] text-[13.5px] text-[#d1d1d1] leading-relaxed">
                  {need}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Target User Persona Card */}
      {persona ? (
        <div className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl bg-[#161513] border border-white/[0.1]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5">
                <h3 className="font-['Itim'] text-[24px] sm:text-[26px] text-white">
                  {persona.name}
                </h3>
                <span className="rounded-full bg-[#30496b] px-3 py-0.5 font-['Itim'] text-[12px] text-white">
                  Primary Archetype
                </span>
              </div>
              <span className="font-['Poppins'] text-[13.5px] text-[#5197ff]">
                {persona.tagline}
              </span>
            </div>

            <div className="rounded-full bg-white/[0.04] border border-dashed border-white/20 px-3 py-1 font-['Poppins'] text-[11.5px] text-[#8491A0]">
              <span>[Editable Placeholder: Persona data customizable in case study data file]</span>
            </div>
          </div>

          {/* Persona Quote */}
          {persona.quote && (
            <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border-l-2 border-[#5197ff] italic font-['Poppins'] text-[14.5px] text-[#e1e1e1]">
              "{persona.quote}"
            </div>
          )}

          {/* Demographics, Goals & Pain Points Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            {persona.demographics && persona.demographics.length > 0 && (
              <div className="flex flex-col gap-2.5 p-4 rounded-xl bg-[#1A1917] border border-white/[0.04]">
                <span className="font-['Itim'] text-[14px] text-[#8491A0] uppercase tracking-wider">
                  Demographics &amp; Context
                </span>
                <div className="flex flex-col gap-2 font-['Poppins'] text-[13px]">
                  {persona.demographics.map((d, i) => (
                    <div key={i} className="flex justify-between border-b border-white/[0.04] pb-1.5">
                      <span className="text-[#8491A0]">{d.label}:</span>
                      <span className="text-white font-medium text-right">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {persona.goals && persona.goals.length > 0 && (
              <div className="flex flex-col gap-2.5 p-4 rounded-xl bg-[#1A1917] border border-white/[0.04]">
                <span className="font-['Itim'] text-[14px] text-[#8491A0] uppercase tracking-wider">
                  Key Goals
                </span>
                <ul className="flex flex-col gap-2 font-['Poppins'] text-[13px] text-[#d1d1d1]">
                  {persona.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#5197ff] font-bold">•</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {persona.painPoints && persona.painPoints.length > 0 && (
              <div className="flex flex-col gap-2.5 p-4 rounded-xl bg-[#1A1917] border border-white/[0.04]">
                <span className="font-['Itim'] text-[14px] text-[#8491A0] uppercase tracking-wider">
                  Frustrations &amp; Friction
                </span>
                <ul className="flex flex-col gap-2 font-['Poppins'] text-[13px] text-[#d1d1d1]">
                  {persona.painPoints.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-[#161513] border border-dashed border-white/15 text-center text-[#8491A0] font-['Poppins'] text-[13px]">
          [Editable Placeholder: Persona research and demographics customizable for new projects]
        </div>
      )}

      {/* Key Challenges / User Pain Points Grid */}
      <div className="flex flex-col gap-4 pt-2">
        <div className="flex flex-col gap-1">
          <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
            Critical Hurdles
          </span>
          <h3 className="font-['Itim'] text-[24px] sm:text-[28px] text-white">
            Core Pain Points Addressed
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problem.challenges.map((challenge) => (
            <motion.div
              key={challenge.number}
              className="flex flex-col gap-3 p-6 rounded-2xl bg-[#1A1917] border border-white/[0.08] hover:border-[#5197ff]/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <div className="flex items-center justify-between">
                <span className="font-['Itim'] text-[24px] font-bold text-[#5197ff]">
                  {challenge.number}
                </span>
                <span className="rounded-full bg-white/[0.05] px-2.5 py-0.5 font-['Itim'] text-[12px] text-[#8491A0]">
                  Pain Point
                </span>
              </div>
              <h4 className="font-['Itim'] text-[20px] text-white font-semibold">
                {challenge.title}
              </h4>
              <p className="font-['Poppins'] text-[14px] text-[#9CA3AF] leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
