import { motion } from "framer-motion";
import type { CaseStudy } from "../types";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudyOverviewProps = {
  study: CaseStudy;
  onOpenLightbox?: (imgUrl: string, title: string, subtitle?: string) => void;
};

export function CaseStudyOverview({ study, onOpenLightbox }: CaseStudyOverviewProps) {
  const mainVisual = study.mockupImage || study.heroImage;

  return (
    <section id="overview" className="flex flex-col gap-8 scroll-mt-28 text-left">
      {/* Title & Metadata Header */}
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center rounded-full bg-[#30496b] px-3.5 py-1 font-['Itim'] text-[13px] sm:text-[14px] text-white">
            01. Project Overview
          </span>
          <span className="inline-flex items-center rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 font-['Itim'] text-[13px] text-[#A9A9A9]">
            {study.projectType}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#5197ff]/10 border border-[#5197ff]/30 px-3 py-1 font-['Itim'] text-[13px] text-[#5197ff]">
            {study.platform}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="font-['Itim'] text-[36px] sm:text-[48px] lg:text-[54px] font-bold text-white uppercase tracking-tight leading-tight">
            {study.title}
          </h1>
          {study.arabicTitle && (
            <span className="font-['Inter'] text-[20px] sm:text-[26px] text-[#5197ff] font-medium">
              {study.arabicTitle}
            </span>
          )}
        </div>

        {/* Short description of project & purpose */}
        <p className="font-['Poppins'] text-[16px] sm:text-[18px] text-[#d1d1d1] leading-relaxed max-w-3xl">
          {study.overview?.summary || study.shortDescription}
        </p>

        {/* Role & Context Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <div className="flex items-center gap-2 rounded-xl bg-[#1A1917] border border-white/[0.08] px-4 py-2">
            <span className="font-['Itim'] text-[12.5px] text-[#8491A0] uppercase tracking-wider">
              My Role:
            </span>
            <span className="font-['Poppins'] text-[14px] text-white font-medium">
              {study.role}
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-[#1A1917] border border-white/[0.08] px-4 py-2">
            <span className="font-['Itim'] text-[12.5px] text-[#8491A0] uppercase tracking-wider">
              Context:
            </span>
            <span className="font-['Poppins'] text-[14px] text-[#d1d1d1]">
              {study.organization || study.projectType}
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-[#1A1917] border border-white/[0.08] px-4 py-2">
            <span className="font-['Itim'] text-[12.5px] text-[#8491A0] uppercase tracking-wider">
              Timeline:
            </span>
            <span className="font-['Poppins'] text-[14px] text-[#d1d1d1]">
              {study.timeline}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Project Visual */}
      <motion.div
        className="group relative w-full overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#1c1b18] via-[#161513] to-[#121212] p-4 sm:p-10 shadow-2xl"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#5197ff]/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative flex flex-col items-center justify-center">
          <img
            src={mainVisual}
            alt={`${study.title} Main Visual`}
            className="w-full max-w-4xl h-auto object-contain cursor-pointer transition-transform duration-500 group-hover:scale-[1.01]"
            onClick={() => onOpenLightbox?.(mainVisual, `${study.title} — Main Visual`, study.subtitle)}
            loading="eager"
          />

          <div className="mt-4 flex flex-wrap items-center justify-between w-full max-w-4xl gap-3 border-t border-white/[0.08] pt-4">
            <span className="font-['Itim'] text-[13px] text-[#8491A0]">
              {study.presentationHeading || "UI/UX Design Presentation"}
            </span>

            <button
              type="button"
              onClick={() => onOpenLightbox?.(mainVisual, `${study.title} — Main Visual`, study.subtitle)}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/15 px-3.5 py-1 font-['Poppins'] text-[12px] text-white transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <span>Inspect Screenshot</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
