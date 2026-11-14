import { motion } from "framer-motion";
import type { CaseStudy } from "../types";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudyChallengesLearningsProps = {
  study: CaseStudy;
};

export function CaseStudyChallengesLearnings({ study }: CaseStudyChallengesLearningsProps) {
  const { reflection } = study;
  const challenges = reflection?.challenges || [];
  const approaches = reflection?.approaches || [];
  const learnings = reflection?.learnings || [];
  const improvements = reflection?.improvements || [];
  const futurePossibilities = reflection?.futurePossibilities || [];

  return (
    <section id="challenges-learnings" className="flex flex-col gap-10 scroll-mt-28 text-left">
      {/* Section Header */}
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
          05 — Challenges &amp; Learnings
        </span>
        <h2 className="font-['Itim'] text-[32px] sm:text-[40px] text-white">
          Challenges, Problem-Solving &amp; Future Horizons
        </h2>
        <p className="font-['Poppins'] text-[15.5px] sm:text-[16.5px] text-[#b4b4b4] leading-relaxed max-w-3xl">
          Reflecting on the toughest constraints encountered, the iterative problem-solving strategies applied, and the product roadmap ahead.
        </p>
      </motion.div>

      {/* ======================================================== */}
      {/* CHALLENGES & HOW I APPROACHED THEM (PAIRED BREAKDOWN)     */}
      {/* ======================================================== */}
      {approaches.length > 0 ? (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
              Methodology in Practice
            </span>
            <h3 className="font-['Itim'] text-[24px] sm:text-[28px] text-white font-bold">
              Challenges &amp; How I Approached Them
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {approaches.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col gap-4 p-6 rounded-3xl bg-[#1A1917] border border-white/[0.08] hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: easeOut, delay: idx * 0.1 }}
              >
                {/* Challenge Part */}
                <div className="flex flex-col gap-2 border-b border-white/[0.06] pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="font-['Itim'] text-[12px] text-amber-400 uppercase tracking-wider">
                      The Challenge
                    </span>
                  </div>
                  <h4 className="font-['Itim'] text-[18px] text-white font-semibold leading-snug">
                    {item.challenge}
                  </h4>
                </div>

                {/* Approach Part */}
                <div className="flex flex-col gap-2 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5197ff]" />
                    <span className="font-['Itim'] text-[12px] text-[#5197ff] uppercase tracking-wider">
                      How I Approached It
                    </span>
                  </div>
                  <p className="font-['Poppins'] text-[13px] sm:text-[13.5px] text-[#d1d1d1] leading-relaxed">
                    {item.approach}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        challenges.length > 0 && (
          <div className="p-6 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-4">
            <h3 className="font-['Itim'] text-[20px] text-white">Challenges Faced</h3>
            <ul className="flex flex-col gap-2.5 font-['Poppins'] text-[14px] text-[#d1d1d1]">
              {challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold mt-0.5">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      )}

      {/* ======================================================== */}
      {/* 3-PILLAR MATRIX: LEARNINGS, IMPROVEMENTS, FUTURE ROADMAP  */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
        {/* Key Lessons Learned */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
            <span className="w-3 h-3 rounded-full bg-[#5197ff]" />
            <h3 className="font-['Itim'] text-[20px] text-white font-semibold">
              Lessons Learned
            </h3>
          </div>
          <ul className="flex flex-col gap-3 font-['Poppins'] text-[13.5px] text-[#d1d1d1] leading-relaxed">
            {learnings.map((l, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-[#5197ff] font-bold mt-0.5">•</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas for Improvement */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <h3 className="font-['Itim'] text-[20px] text-white font-semibold">
              Areas for Improvement
            </h3>
          </div>
          <ul className="flex flex-col gap-3 font-['Poppins'] text-[13.5px] text-[#d1d1d1] leading-relaxed">
            {improvements.map((imp, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold mt-0.5">•</span>
                <span>{imp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Future Possibilities / Roadmap */}
        {futurePossibilities.length > 0 && (
          <div className="p-6 sm:p-7 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
              <span className="w-3 h-3 rounded-full bg-purple-400" />
              <h3 className="font-['Itim'] text-[20px] text-white font-semibold">
                Future Possibilities
              </h3>
            </div>
            <ul className="flex flex-col gap-3 font-['Poppins'] text-[13.5px] text-[#d1d1d1] leading-relaxed">
              {futurePossibilities.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-purple-400 font-bold mt-0.5">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
