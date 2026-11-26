import { useState } from "react";
import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import type { CaseStudySummary } from "@/features/case-studies/types";
import { BehanceIcon, FigmaIcon, LinkedinIcon } from "@/constants/icons";
import { ThreePhoneShowcase } from "@/features/case-studies/components/ThreePhoneShowcase";
import { DualLaptopShowcase } from "@/features/case-studies/components/DualLaptopShowcase";
import { useLanguage } from "@/store/LanguageContext";
import { caseStudyTranslations } from "@/constants/projectTranslations";
import {
  EASE_OUT_EXPO,
  SPRING_SMOOTH,
  VIEWPORT_ONCE,
} from "@/constants/motion";

export function CaseStudyCard(props: CaseStudySummary) {
  const { isArabic, t } = useLanguage();
  const {
    slug,
    title,
    arabicTitle,
    shortDescription,
    role,
    heroImage,
    mockupImage,
    phoneMockups,
    laptopMockups,
    presentationHeading: customHeading,
    platformType = "app",
    organization,
    figmaLink,
    liveDemo,
    linkedin,
    behanceLink,
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/case-studies/${slug}`);
  };

  const stopPropagation = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  const csTrans = isArabic ? caseStudyTranslations[slug] : null;

  const presentationHeading =
    csTrans?.presentationHeading ||
    customHeading ||
    (platformType === "app"
      ? (isArabic ? "عرض تطبيق الهاتف" : "Mobile Presentation")
      : (isArabic ? "عرض المنصة السحابية والهوية" : "Web & Brand Presentation"));

  const displayTitle = csTrans?.title || title;
  const displaySubtitle = csTrans?.arabicTitle || arabicTitle;
  const displayShortDesc = csTrans?.shortDescription || shortDescription;

  const targetLabel = isArabic
    ? platformType === "app"
      ? "المؤسسة المستهدفة"
      : "القطاع المستهدف"
    : platformType === "app"
      ? "Target Institution"
      : "Target Sector";

  const targetValue =
    csTrans?.targetSector ||
    organization ||
    (platformType === "app"
      ? "Constantine Faculty of Medicine"
      : "Algerian Driving Schools");

  const displayRole = isArabic ? "مصمم واجهات وتجربة المستخدم" : role;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.58, ease: EASE_OUT_EXPO }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col lg:flex-row items-center gap-10 lg:gap-14 w-full text-start"
    >
      {/* ========================================================= */}
      {/* LEFT COLUMN: Text, Narrative, Metadata & Actions         */}
      {/* ========================================================= */}
      <div className="flex flex-col gap-5 w-full lg:w-1/2 z-10 text-start items-start">
        {/* Title & Arabic Subtitle */}
        <div className="flex flex-col gap-1">
          <h3
            onClick={handleCardClick}
            className="font-['Itim'] text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-white tracking-wide leading-tight cursor-pointer hover:text-[#5197ff] transition-colors"
          >
            {presentationHeading}
          </h3>
          {displaySubtitle && (
            <span className="font-['Inter'] text-[17px] sm:text-[19px] text-[#5197ff] font-medium">
              {isArabic ? displaySubtitle : `${displayTitle} · ${displaySubtitle}`}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="font-['Inter'] text-[14px] sm:text-[15.5px] text-[#b4b4b4] leading-relaxed">
          {displayShortDesc}
        </p>

        {/* Metadata Grid (Role, Institution/Sector) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pb-2 border-t border-white/[0.08] w-full">
          <div className="flex flex-col">
            <span className="font-['Itim'] text-[12.5px] text-[#5197ff] uppercase tracking-wider">
              {t.caseStudies.roleMethodology}
            </span>
            <span className="font-['Inter'] text-[13.5px] text-white font-medium mt-1">
              {displayRole} · {t.caseStudies.roleMethodologyValue}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-['Itim'] text-[12.5px] text-[#5197ff] uppercase tracking-wider">
              • {targetLabel}
            </span>
            <span className="font-['Inter'] text-[13.5px] text-[#d1d1d1] mt-1">
              {targetValue}
            </span>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 w-full">
          <Link
            to={`/case-studies/${slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 font-['Inter'] text-[15px] font-semibold text-[#161513] transition-all duration-300 hover:bg-transparent hover:text-white group/btn"
          >
            <span>{t.caseStudies.exploreDesign}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isArabic
                  ? "group-hover/btn:-translate-x-1 rotate-180"
                  : "group-hover/btn:translate-x-1"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <div className="flex items-center gap-4">
            {behanceLink && (
              <a
                href={behanceLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
                className="inline-flex items-center gap-1.5 font-['Inter'] text-[13px] text-[#8491A0] hover:text-[#5197ff] transition-colors"
              >
                <BehanceIcon width={15} height={15} />
                <span>Behance</span>
              </a>
            )}
            {(liveDemo || linkedin) && (
              <a
                href={liveDemo || linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
                className="inline-flex items-center gap-1.5 font-['Inter'] text-[13px] text-[#8491A0] hover:text-[#5197ff] transition-colors"
              >
                <LinkedinIcon width={15} height={15} fill="#ffffff" />
                <span>LinkedIn Post</span>
              </a>
            )}
            {figmaLink && (
              <a
                href={figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
                className="inline-flex items-center gap-1.5 font-['Inter'] text-[13px] text-[#8491A0] hover:text-[#5197ff] transition-colors"
              >
                <FigmaIcon width={15} height={15} />
                <span>Figma</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* RIGHT COLUMN: Visual Showcase (Figma Mockup Presentation) */}
      {/* ========================================================= */}
      <div
        onClick={handleCardClick}
        className="relative w-full lg:w-1/2 shrink-0 flex items-center justify-center cursor-pointer select-none min-h-[340px] sm:min-h-[420px] lg:min-h-[460px]"
      >
        {phoneMockups ? (
          <ThreePhoneShowcase
            phones={phoneMockups}
            title={title}
            isCardHovered={isHovered}
          />
        ) : laptopMockups ? (
          <DualLaptopShowcase
            laptops={laptopMockups}
            title={title}
            isCardHovered={isHovered}
          />
        ) : mockupImage ? (
          <>
            {/* Ambient Spotlight & Ground Shadow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[440px] lg:w-[520px] h-[300px] sm:h-[440px] lg:h-[460px] bg-[radial-gradient(circle,rgba(81,151,255,0.14)_0%,transparent_70%)] rounded-full pointer-events-none" />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[260px] sm:w-[400px] lg:w-[480px] h-[28px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.85)_0%,transparent_72%)] rounded-full pointer-events-none" />

            <motion.div
              className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[560px] flex items-center justify-center p-2"
              whileHover={{ scale: 1.04, y: -6 }}
              transition={SPRING_SMOOTH}
            >
              <img
                src={mockupImage}
                alt={`${title} Mockup Presentation`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.75)]"
              />
            </motion.div>
          </>
        ) : (
          <motion.div
            className="relative w-full max-w-[480px] rounded-2xl overflow-hidden bg-[#121212] border border-white/[0.1] shadow-2xl shadow-black/80"
            whileHover={{ scale: 1.025 }}
            transition={SPRING_SMOOTH}
          >
            <img
              src={heroImage}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover object-top transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2 rounded-full bg-[#161513]/85 backdrop-blur px-3 py-1 border border-white/10 text-white font-['Itim'] text-[12px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5197ff]" />
              <span>Web Platform Suite</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.article>
  );
}
