import { motion } from "framer-motion";
import { caseStudies } from "../data/caseStudiesData";
import { CaseStudyCard } from "./CaseStudyCard";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="flex w-full flex-col items-center gap-10 text-center"
    >
      {/* Section Header matching existing portfolio style */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h2 className="font-['Itim'] text-[36px] text-white">
          Selected Case Studies
        </h2>
        <p className="font-['Poppins'] text-[15px] sm:text-[16px] text-[#9CA3AF] max-w-2xl">
          Exploring problems, designing meaningful experiences, and transforming ideas into intuitive digital solutions.
        </p>
      </motion.div>

      {/* Case Studies Cards Column */}
      <div className="flex flex-col items-center gap-16 sm:gap-24 w-full max-w-6xl">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} {...study} />
        ))}
      </div>
    </section>
  );
}
