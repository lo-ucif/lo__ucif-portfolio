import { motion } from "framer-motion";
import type { CaseStudy } from "@/features/case-studies/types";
import { DualLaptopShowcase } from "@/features/case-studies/components/DualLaptopShowcase";
import { useLanguage } from "@/store/LanguageContext";
import { useAppReady } from "@/store/AppReadyContext";
import { caseStudyTranslations } from "@/constants/projectTranslations";
import { EASE_OUT_EXPO } from "@/constants/motion";

const projectTypeMapAr: Record<string, string> = {
  "Mobile Application Concept": "نموذج تطبيق للهاتف",
  "Responsive Web Platform": "منصة ويب متجاوبة",
  "Mobile Application": "تطبيق الهاتف",
};

const platformMapAr: Record<string, string> = {
  "Mobile App (iOS & Android)": "تطبيق هاتف (iOS و Android)",
  "Responsive Web (Desktop & Tablet)": "منصة ويب متجاوبة (كمبيوتر ولوحي)",
  "Mobile Application (iOS & Android)": "تطبيق هاتف (iOS و Android)",
};

type CaseStudyOverviewProps = {
  study: CaseStudy;
  onOpenLightbox?: (imgUrl: string, title: string, subtitle?: string) => void;
};

export function CaseStudyOverview({ study, onOpenLightbox }: CaseStudyOverviewProps) {
  const { isArabic } = useLanguage();
  const isReady = useAppReady();
  const mainVisual = study.mockupImage || study.heroImage;
  const csTrans = isArabic ? caseStudyTranslations[study.slug] : null;

  const displayTitle = csTrans?.title || study.title;
  const displayArabicTitle = csTrans?.arabicTitle || study.arabicTitle;
  const displaySummary = csTrans?.overviewSummary || study.overview?.summary || study.shortDescription;
  const displayRole = isArabic ? "مصمم واجهات وتجربة المستخدم" : study.role;
  const displayContext = csTrans?.targetSector || study.organization || study.projectType;
  const displayTimeline = csTrans?.timeline || study.timeline;

  return (
    <section id="overview" className="flex flex-col gap-8 scroll-mt-28 text-start">
      {/* Title & Metadata Header */}
      <motion.div
        className="flex flex-col gap-4 text-start"
        initial={{ opacity: 0, y: 18 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center rounded-full bg-[#30496b] px-3.5 py-1 font-['Itim'] text-[13px] sm:text-[14px] text-white">
            {isArabic ? "01. نظرة عامة على المشروع" : "01. Project Overview"}
          </span>
          <span className="inline-flex items-center rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 font-['Itim'] text-[13px] text-[#A9A9A9]">
            {isArabic ? projectTypeMapAr[study.projectType] || study.projectType : study.projectType}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#5197ff]/10 border border-[#5197ff]/30 px-3 py-1 font-['Itim'] text-[13px] text-[#5197ff]">
            {isArabic ? platformMapAr[study.platform] || study.platform : study.platform}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="font-['Itim'] text-[36px] sm:text-[48px] lg:text-[54px] font-bold text-white uppercase tracking-tight leading-tight">
            {displayTitle}
          </h1>
          {displayArabicTitle && (
            <span className="font-['Inter'] text-[20px] sm:text-[26px] text-[#5197ff] font-medium">
              {displayArabicTitle}
            </span>
          )}
        </div>

        {/* Short description of project & purpose */}
        <p className="font-['Inter'] text-[16px] sm:text-[18px] text-[#d1d1d1] leading-relaxed max-w-3xl">
          {displaySummary}
        </p>

        {/* Role & Context Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <div className="flex items-center gap-2 rounded-xl bg-[#1A1917] border border-white/[0.08] px-4 py-2">
            <span className="font-['Itim'] text-[12.5px] text-[#8491A0] uppercase tracking-wider">
              {isArabic ? "الدور:" : "My Role:"}
            </span>
            <span className="font-['Inter'] text-[14px] text-white font-medium">
              {displayRole}
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-[#1A1917] border border-white/[0.08] px-4 py-2">
            <span className="font-['Itim'] text-[12.5px] text-[#8491A0] uppercase tracking-wider">
              {isArabic ? "السياق:" : "Context:"}
            </span>
            <span className="font-['Inter'] text-[14px] text-[#d1d1d1]">
              {displayContext}
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-[#1A1917] border border-white/[0.08] px-4 py-2">
            <span className="font-['Itim'] text-[12.5px] text-[#8491A0] uppercase tracking-wider">
              {isArabic ? "الفترة الزمنية:" : "Timeline:"}
            </span>
            <span className="font-['Inter'] text-[14px] text-[#d1d1d1]">
              {displayTimeline}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Project Visual */}
      <motion.div
        className="group relative w-full overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#1c1b18] via-[#161513] to-[#121212] p-4 sm:p-10 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.1 }}
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(81,151,255,0.12)_0%,transparent_70%)] pointer-events-none rounded-full" />

        <div className="relative flex flex-col items-center justify-center">
          {study.laptopMockups ? (
            <div className="w-full max-w-4xl flex items-center justify-center py-4 sm:py-6">
              <DualLaptopShowcase
                laptops={study.laptopMockups}
                title={study.title}
                className="max-w-[760px]"
                onLaptopClick={(laptop) => {
                  const targetImg =
                    laptop === "left"
                      ? study.laptopMockups!.left
                      : study.laptopMockups!.right;
                  const targetTitle =
                    laptop === "left"
                      ? `${study.title} — Contact & Support Portal`
                      : `${study.title} — Platform Hero Landing`;
                  onOpenLightbox?.(targetImg, targetTitle, study.subtitle);
                }}
              />
            </div>
          ) : (
            <img
              src={mainVisual}
              alt={`${study.title} Main Visual`}
              className="w-full max-w-4xl h-auto object-contain cursor-pointer transition-transform duration-500 group-hover:scale-[1.01]"
              onClick={() => onOpenLightbox?.(mainVisual, `${study.title} — Main Visual`, study.subtitle)}
              loading="eager"
              decoding="async"
            />
          )}

          <div className="mt-4 flex flex-wrap items-center justify-between w-full max-w-4xl gap-3 border-t border-white/[0.08] pt-4">
            <span className="font-['Itim'] text-[13px] text-[#8491A0]">
              {csTrans?.presentationHeading || study.presentationHeading || (isArabic ? "عرض تصميم واجهات وتجربة المستخدم" : "UI/UX Design Presentation")}
            </span>

            <button
              type="button"
              onClick={() => onOpenLightbox?.(mainVisual, `${study.title} — Main Visual`, study.subtitle)}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/15 px-3.5 py-1 font-['Inter'] text-[12px] text-white transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <span>{isArabic ? "معاينة لقطة الشاشة" : "Inspect Screenshot"}</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
