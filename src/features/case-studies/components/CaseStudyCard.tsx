import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import type { MouseEvent } from "react";
import type { CaseStudy } from "../types";
import { FigmaIcon, LinkedinIcon } from "../../../constants/Icon";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function CaseStudyCard(props: CaseStudy) {
  const {
    slug,
    title,
    arabicTitle,
    shortDescription,
    role,
    mainDesignFocus,
    heroImage,
    mockupImage,
    presentationHeading: customHeading,
    platformType = "app",
    organization,
    figmaLink,
    liveDemo,
    linkedin,
  } = props;

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/case-studies/${slug}`);
  };

  const stopPropagation = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  const presentationHeading =
    customHeading ||
    (platformType === "app" ? "Mobile Presentation" : "Web Presentation");

  const targetLabel =
    platformType === "app" ? "Target Institution" : "Target Sector";

  const targetValue =
    organization ||
    (platformType === "app"
      ? "Constantine Faculty of Medicine"
      : "Algerian Driving Schools");

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="group relative flex flex-col lg:flex-row items-center gap-10 lg:gap-14 w-full text-left"
    >
      {/* ========================================================= */}
      {/* LEFT COLUMN: Text, Narrative, Metadata & Actions         */}
      {/* ========================================================= */}
      <div className="flex flex-col items-start gap-5 w-full lg:w-1/2 z-10">
        {/* Title & Arabic Subtitle */}
        <div className="flex flex-col gap-1">
          <h3
            onClick={handleCardClick}
            className="font-['Itim'] text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-white tracking-wide leading-tight cursor-pointer hover:text-[#5197ff] transition-colors"
          >
            {presentationHeading}
          </h3>
          {arabicTitle && (
            <span className="font-['Inter'] text-[17px] sm:text-[19px] text-[#5197ff] font-medium">
              {title} · {arabicTitle}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="font-['Poppins'] text-[14px] sm:text-[15.5px] text-[#b4b4b4] leading-relaxed">
          {shortDescription}
        </p>

        {/* Metadata Grid (Role, Institution/Sector, Design Focus) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 pb-2 border-t border-white/[0.08] w-full">
          <div className="flex flex-col">
            <span className="font-['Itim'] text-[12.5px] text-[#5197ff] uppercase tracking-wider">
              • Role &amp; Methodology
            </span>
            <span className="font-['Poppins'] text-[13.5px] text-white font-medium mt-1">
              {role} · Auto Layout &amp; Tokens
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-['Itim'] text-[12.5px] text-[#5197ff] uppercase tracking-wider">
              • {targetLabel}
            </span>
            <span className="font-['Poppins'] text-[13.5px] text-[#d1d1d1] mt-1">
              {targetValue}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-['Itim'] text-[12.5px] text-[#5197ff] uppercase tracking-wider">
              • Design Focus
            </span>
            <span className="font-['Poppins'] text-[13.5px] text-[#d1d1d1] mt-1 line-clamp-2">
              {mainDesignFocus}
            </span>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 w-full">
          <Link
            to={`/case-studies/${slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 font-['Poppins'] text-[15px] font-semibold text-[#161513] transition-all duration-300 hover:bg-transparent hover:text-white group/btn"
          >
            <span>Explore Case Study</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
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
            {(liveDemo || linkedin) && (
              <a
                href={liveDemo || linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
                className="inline-flex items-center gap-1.5 font-['Poppins'] text-[13px] text-[#8491A0] hover:text-[#5197ff] transition-colors"
              >
                <LinkedinIcon width={15} height={15} />
                <span>LinkedIn Post</span>
              </a>
            )}
            {figmaLink && (
              <a
                href={figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
                className="inline-flex items-center gap-1.5 font-['Poppins'] text-[13px] text-[#8491A0] hover:text-[#5197ff] transition-colors"
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
        {/* Ambient Spotlight & Ground Shadow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-[#5197ff]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[240px] sm:w-[380px] h-[24px] bg-black/90 rounded-full blur-2xl pointer-events-none" />

        {mockupImage ? (
          <motion.div
            className="relative w-full max-w-[440px] sm:max-w-[490px] flex items-center justify-center p-2"
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            <img
              src={mockupImage}
              alt={`${title} Mockup Presentation`}
              loading="lazy"
              className="w-full h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
            />
          </motion.div>
        ) : (
          <motion.div
            className="relative w-full max-w-[480px] rounded-2xl overflow-hidden bg-[#121212] border border-white/[0.1] shadow-2xl shadow-black/80"
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            <img
              src={heroImage}
              alt={title}
              loading="lazy"
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
