import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import type { MouseEvent } from "react";
import type { CaseStudy } from "../types";
import { FigmaIcon, LinkedinIcon } from "../../../constants/Icon";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function CaseStudyCard({
  slug,
  title,
  arabicTitle,
  shortDescription,
  role,
  mainDesignFocus,
  heroImage,
  projectType,
  year,
  timeline,
  figmaLink,
  liveDemo,
  linkedin,
  tools,
}: CaseStudy & { year?: string }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/case-studies/${slug}`);
  };

  const stopPropagation = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="group relative flex flex-col lg:flex-row items-center gap-8 lg:gap-14 w-full text-left"
    >
      {/* Left Column: Visual Showcase Preview */}
      <div
        onClick={handleCardClick}
        className="w-full lg:w-1/2 shrink-0 cursor-pointer"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#121212] border border-white/[0.08] shadow-2xl transition-all duration-500 group-hover:border-[#5197ff]/40 group-hover:scale-[1.015]">
          <img
            src={heroImage}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Floating Subtle Pill on Image */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-[#161513]/85 backdrop-blur px-3 py-1 border border-white/10 text-white font-['Itim'] text-[13px]">
            <span className="w-2 h-2 rounded-full bg-[#5197ff] animate-pulse" />
            <span>UI/UX Case Study</span>
          </div>
        </div>
      </div>

      {/* Right Column: Editorial Case Study Details */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 min-w-0">
        {/* Category & Status Pill */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-[22px] bg-[#30496b] px-3.5 py-1 font-['Itim'] text-[14px] sm:text-[15px] text-white">
            <span>{projectType}</span>
          </span>
          <span className="inline-flex items-center rounded-[22px] bg-white/[0.06] border border-white/10 px-3 py-1 font-['Itim'] text-[13px] text-[#A9A9A9]">
            <span>{timeline || year || "2026"}</span>
          </span>
        </div>

        {/* Project Title & Arabic Title */}
        <div className="flex flex-col gap-1">
          <h3
            onClick={handleCardClick}
            className="font-['Itim'] text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-white tracking-wide uppercase leading-tight cursor-pointer hover:text-[#5197ff] transition-colors duration-200"
          >
            {title}
          </h3>
          {arabicTitle && (
            <span className="font-['Inter'] text-[17px] text-[#5197ff]/90 font-medium">
              {arabicTitle}
            </span>
          )}
        </div>

        {/* Short Professional Description */}
        <p className="font-['Poppins'] text-[14px] sm:text-[15.5px] leading-[1.75] text-[#b4b4b4]">
          {shortDescription}
        </p>

        {/* Metadata Grid (Role & Main Design Focus) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-3 pb-1 border-y border-white/[0.08]">
          <div className="flex flex-col">
            <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider">
              My Role
            </span>
            <span className="font-['Poppins'] text-[14px] text-white font-medium">
              {role}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider">
              Design Focus
            </span>
            <span className="font-['Poppins'] text-[14px] text-[#e1e1e1] line-clamp-2">
              {mainDesignFocus}
            </span>
          </div>
        </div>

        {/* Primary CTA: Explore Case Study & Socials */}
        <div className="flex flex-wrap items-center justify-between gap-4 w-full pt-2">
          <Link
            to={`/case-studies/${slug}`}
            className="inline-flex items-center gap-2 rounded-[38.182px] border border-white bg-white px-5 py-2.5 font-['Poppins'] text-[15px] font-medium text-[#161513] transition-all duration-300 hover:bg-transparent hover:text-white group/btn"
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

          {/* External Links */}
          <div className="flex items-center gap-4">
            {(liveDemo || linkedin) && (
              <a
                href={liveDemo || linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
                className="inline-flex items-center gap-1.5 font-['Poppins'] text-[13px] text-[#8491A0] hover:text-white transition-colors"
                title="View LinkedIn Post"
              >
                <LinkedinIcon width={15} height={15} />
                <span>Post</span>
              </a>
            )}
            {figmaLink && (
              <a
                href={figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
                className="inline-flex items-center gap-1.5 font-['Poppins'] text-[13px] text-[#8491A0] hover:text-white transition-colors"
                title="View in Figma"
              >
                <FigmaIcon width={15} height={15} />
                <span>Figma</span>
              </a>
            )}
            {tools && tools.length > 0 && (
              <div className="flex items-center gap-1.5 text-white/70 font-['Poppins'] text-[13px]">
                <FigmaIcon width={14} height={14} />
                <span>Figma Tokens</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
