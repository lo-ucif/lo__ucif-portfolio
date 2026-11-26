import { motion } from "framer-motion";
import { caseStudySummaries } from "@/features/case-studies/data/caseStudiesSummary";
import { CaseStudyCard } from "@/features/case-studies/components/CaseStudyCard";
import { useLanguage } from "@/store/LanguageContext";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/constants/motion";

export function CaseStudiesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="case-studies"
      className="flex w-full flex-col items-center gap-10 text-center scroll-mt-24"
    >
      {/* Section Header matching existing portfolio style */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
      >
        <h2 className="font-['Itim'] text-[36px] text-white">
          {t.caseStudies.title}
        </h2>
        <p className="font-['Inter'] text-[15px] sm:text-[16px] text-[#9CA3AF] max-w-2xl leading-relaxed">
          {t.caseStudies.overview}
        </p>
      </motion.div>

      {/* Case Studies Cards Column */}
      <div className="flex flex-col items-center gap-16 sm:gap-24 w-full max-w-6xl">
        {caseStudySummaries.map((study) => (
          <CaseStudyCard key={study.id} {...study} />
        ))}
      </div>
    </section>
  );
}
