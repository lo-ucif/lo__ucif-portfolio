import { motion } from "framer-motion";
import type { CaseStudy } from "../types";
import { FigmaIcon } from "../../../constants/Icon";

const easeOut = [0.22, 1, 0.36, 1] as const;

type CaseStudyOverviewProps = {
  study: CaseStudy;
  onOpenLightbox?: (imgUrl: string, title: string, subtitle?: string) => void;
};

export function CaseStudyOverview({ study, onOpenLightbox }: CaseStudyOverviewProps) {
  const mainVisual = study.mockupImage || study.heroImage;

  return (
    <section id="overview" className="flex flex-col gap-10 scroll-mt-28">
      {/* Title & Introduction */}
      <motion.div
        className="flex flex-col gap-4 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center rounded-full bg-[#30496b] px-3.5 py-1 font-['Itim'] text-[13px] sm:text-[14px] text-white">
            01 — Overview
          </span>
          <span className="inline-flex items-center rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 font-['Itim'] text-[13px] text-[#A9A9A9]">
            {study.projectType}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#5197ff]/10 border border-[#5197ff]/30 px-3 py-1 font-['Itim'] text-[13px] text-[#5197ff]">
            {study.platform}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="font-['Itim'] text-[36px] sm:text-[50px] lg:text-[56px] font-bold text-white uppercase tracking-tight leading-tight">
            {study.title}
          </h1>
          {study.arabicTitle && (
            <span className="font-['Inter'] text-[22px] sm:text-[28px] text-[#5197ff] font-medium">
              {study.arabicTitle}
            </span>
          )}
        </div>

        <p className="font-['Poppins'] text-[17px] sm:text-[20px] text-[#b4b4b4] leading-relaxed max-w-3xl">
          {study.shortDescription}
        </p>
      </motion.div>

      {/* Metadata Cards: Role, Scope, Tools, Timeline */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
      >
        <div className="flex flex-col gap-1.5 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.07] text-left">
          <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider">
            My Role
          </span>
          <span className="font-['Poppins'] text-[15px] font-medium text-white">
            {study.role}
          </span>
        </div>

        <div className="flex flex-col gap-1.5 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.07] text-left">
          <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider">
            Target Sector / Context
          </span>
          <span className="font-['Poppins'] text-[14.5px] font-medium text-white">
            {study.organization || study.projectType}
          </span>
        </div>

        <div className="flex flex-col gap-1.5 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.07] text-left">
          <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider">
            Tools &amp; Tech
          </span>
          <div className="flex items-center gap-2 font-['Poppins'] text-[14.5px] font-medium text-white">
            <FigmaIcon width={16} height={16} />
            <span>Figma (Tokens &amp; Variants)</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.07] text-left">
          <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider">
            Timeline &amp; Platform
          </span>
          <span className="font-['Poppins'] text-[14.5px] font-medium text-white">
            {study.timeline} · {study.platform}
          </span>
        </div>
      </motion.div>

      {/* Design Responsibilities Pills */}
      {study.designResponsibilities && study.designResponsibilities.length > 0 && (
        <motion.div
          className="flex flex-wrap items-center gap-2 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.15 }}
        >
          <span className="font-['Itim'] text-[13px] text-[#8491A0] mr-2">
            Design Responsibilities:
          </span>
          {study.designResponsibilities.map((resp) => (
            <span
              key={resp}
              className="inline-flex items-center rounded-full bg-[#1F1F1F] px-3 py-1 font-['Poppins'] text-[12.5px] text-[#e1e1e1] border border-white/10"
            >
              {resp}
            </span>
          ))}
        </motion.div>
      )}

      {/* Main Project Visual Showcase */}
      <motion.div
        className="group relative w-full overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#1c1b18] via-[#161513] to-[#121212] p-4 sm:p-10 shadow-2xl"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
      >
        {/* Soft background ambient glow */}
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
              {study.presentationHeading || "High-Fidelity UI/UX Presentation"}
            </span>

            <button
              type="button"
              onClick={() => onOpenLightbox?.(mainVisual, `${study.title} — Main Visual`, study.subtitle)}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/15 px-3 py-1 font-['Poppins'] text-[12px] text-white transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <span>Inspect High-Res Mockup</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Project Introduction & Objectives */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2 text-left">
        <div className="lg:col-span-2 flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-[#1A1917] border border-white/[0.08]">
          <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
            Project Introduction
          </span>
          <h2 className="font-['Itim'] text-[24px] sm:text-[28px] text-white">
            The Vision Behind {study.title}
          </h2>
          <p className="font-['Poppins'] text-[15px] sm:text-[16px] text-[#b4b4b4] leading-relaxed">
            {study.overview.summary}
          </p>
        </div>

        <div className="flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-[#1A1917] border border-white/[0.08]">
          <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
            Strategic Goals
          </span>
          <h2 className="font-['Itim'] text-[22px] text-white">
            Core Objectives
          </h2>
          <ul className="flex flex-col gap-2.5 font-['Poppins'] text-[13.5px] text-[#A9A9A9] leading-relaxed">
            {study.overview.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-[#5197ff] font-bold mt-0.5">•</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
