import { motion } from "framer-motion";
import type { CaseStudy } from "../types";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudyProblemsProps = {
  study: CaseStudy;
};

export function CaseStudyProblems({ study }: CaseStudyProblemsProps) {
  // Use problemsList if available, or map problem.challenges into short bullet points
  const problems =
    study.problemsList ||
    study.problem?.challenges?.map((c) => ({
      title: c.title,
      description: c.description,
    })) ||
    [];

  return (
    <section id="problems" className="flex flex-col gap-6 scroll-mt-28 text-left">
      {/* Section Header */}
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
          02. Problems
        </span>
        <h2 className="font-['Itim'] text-[32px] sm:text-[38px] text-white">
          Key Problems to Solve
        </h2>
      </motion.div>

      {/* Short, Clear Bullet Points (No long paragraphs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {problems.map((prob, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.08] hover:border-[#5197ff]/40 transition-colors duration-200"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: easeOut, delay: idx * 0.08 }}
          >
            <div className="w-8 h-8 rounded-full bg-[#5197ff]/15 border border-[#5197ff]/30 text-[#5197ff] flex items-center justify-center shrink-0 font-['Itim'] text-[14px] font-bold mt-0.5">
              0{idx + 1}
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-['Itim'] text-[18px] sm:text-[19px] text-white font-semibold">
                {prob.title}
              </h3>
              <p className="font-['Poppins'] text-[13.5px] sm:text-[14px] text-[#b4b4b4] leading-relaxed">
                {prob.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
