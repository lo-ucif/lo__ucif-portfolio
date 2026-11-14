import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { caseStudies } from "../features/case-studies/data/caseStudiesData";
import { SiteFooter } from "../components/layout/SiteFooter";
import { FigmaIcon } from "../constants/Icon";

import { CaseStudyOverview } from "../features/case-studies/components/CaseStudyOverview";
import { CaseStudyProblems } from "../features/case-studies/components/CaseStudyProblems";
import { CaseStudyUserNeeds } from "../features/case-studies/components/CaseStudyUserNeeds";
import { CaseStudyFinalDesign } from "../features/case-studies/components/CaseStudyFinalDesign";
import { CaseStudyToolsUsed } from "../features/case-studies/components/CaseStudyToolsUsed";
import { CaseStudyStickyNav } from "../features/case-studies/components/CaseStudyStickyNav";
import { ImageLightboxModal } from "../features/case-studies/components/ImageLightboxModal";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Find case study by slug or id
  const currentIndex = caseStudies.findIndex(
    (c) => c.slug === slug || c.id === slug
  );
  const study = currentIndex !== -1 ? caseStudies[currentIndex] : null;

  // Active screen index for Section 04 (Final Design)
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Lightbox modal state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    subtitle?: string;
  }>({
    isOpen: false,
    imageUrl: "",
    title: "",
    subtitle: "",
  });

  const handleOpenLightbox = (imageUrl: string, title: string, subtitle?: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      title,
      subtitle,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  if (!study) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-[#161513] px-5 text-white">
        <h1 className="font-['Itim'] text-[32px]">Case Study Not Found</h1>
        <p className="font-['Poppins'] text-[#9CA3AF]">
          The case study you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="rounded-[38.182px] border border-white px-6 py-2.5 font-['Poppins'] text-[15px] text-white transition-colors duration-300 hover:bg-white hover:text-[#161513]"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  // Previous and next case studies for easy browsing
  const prevStudy =
    currentIndex > 0 ? caseStudies[currentIndex - 1] : caseStudies[caseStudies.length - 1];
  const nextStudy =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : caseStudies[0];

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#161513] px-5 pb-0 pt-20 text-white sm:px-10 lg:px-20 min-[601px]:pt-28 max-[600px]:pt-22">
      <div className="flex flex-col w-full max-w-5xl gap-16 sm:gap-24">

        {/* Back Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: easeOut }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5"
        >
          <div className="flex items-center gap-4">
            <Link
              to="/#case-studies"
              className="inline-flex items-center gap-2 font-['Poppins'] text-[14px] sm:text-[15px] text-[#9CA3AF] transition-colors duration-200 hover:text-white"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>Back to Case Studies</span>
            </Link>

            <span className="text-white/20">|</span>

            <Link
              to="/projects"
              className="font-['Poppins'] text-[13px] text-[#8491A0] transition-colors hover:text-white"
            >
              Projects
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {study.figmaLink && (
              <a
                href={study.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/10 px-3.5 py-1.5 font-['Poppins'] text-[13px] text-[#d1d1d1] hover:text-[#5197ff] hover:border-[#5197ff]/40 transition-colors"
              >
                <FigmaIcon width={14} height={14} />
                <span>Figma Prototype</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 01. PROJECT OVERVIEW                                     */}
        {/* ======================================================== */}
        <CaseStudyOverview
          study={study}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* ======================================================== */}
        {/* 02. PROBLEMS                                             */}
        {/* ======================================================== */}
        <CaseStudyProblems study={study} />

        {/* ======================================================== */}
        {/* 03. USER NEEDS (UML USE CASE DIAGRAM)                    */}
        {/* ======================================================== */}
        <CaseStudyUserNeeds study={study} />

        {/* ======================================================== */}
        {/* 04. FINAL DESIGN                                         */}
        {/* ======================================================== */}
        <CaseStudyFinalDesign
          study={study}
          activeScreenIndex={activeScreenIndex}
          onScreenChange={(index) => setActiveScreenIndex(index)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* ======================================================== */}
        {/* 05. TOOLS USED                                           */}
        {/* ======================================================== */}
        <CaseStudyToolsUsed study={study} />

        {/* ======================================================== */}
        {/* PREV / NEXT CASE STUDY SWITCHER                          */}
        {/* ======================================================== */}
        {caseStudies.length > 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/[0.08] pt-8 w-full text-left">
            {prevStudy && (
              <Link
                to={`/case-studies/${prevStudy.slug}`}
                className="group flex flex-col gap-1 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.08] hover:border-[#5197ff]/40 transition-all duration-300"
              >
                <span className="font-['Itim'] text-[12px] text-[#8491A0] uppercase tracking-wider">
                  ← Previous Case Study
                </span>
                <span className="font-['Itim'] text-[19px] text-white font-semibold group-hover:text-[#5197ff] transition-colors">
                  {prevStudy.title}
                </span>
                <span className="font-['Poppins'] text-[12px] text-[#A9A9A9] truncate">
                  {prevStudy.subtitle}
                </span>
              </Link>
            )}

            {nextStudy && (
              <Link
                to={`/case-studies/${nextStudy.slug}`}
                className="group flex flex-col gap-1 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.08] hover:border-[#5197ff]/40 transition-all duration-300 sm:text-right"
              >
                <span className="font-['Itim'] text-[12px] text-[#8491A0] uppercase tracking-wider">
                  Next Case Study →
                </span>
                <span className="font-['Itim'] text-[19px] text-white font-semibold group-hover:text-[#5197ff] transition-colors">
                  {nextStudy.title}
                </span>
                <span className="font-['Poppins'] text-[12px] text-[#A9A9A9] truncate">
                  {nextStudy.subtitle}
                </span>
              </Link>
            )}
          </div>
        )}

        {/* Collaboration CTA */}
        <div className="flex flex-col items-center gap-4 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1A1917] to-[#161513] border border-white/[0.1] text-center shadow-xl">
          <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
            Collaboration &amp; Design Inquiries
          </span>
          <h3 className="font-['Itim'] text-[28px] sm:text-[34px] text-white font-bold">
            Have a project or concept to design?
          </h3>
          <p className="font-['Poppins'] text-[14.5px] text-[#9CA3AF] max-w-lg leading-relaxed">
            Let's build clean, human-centered digital experiences together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="mailto:louciftamer3@gmail.com"
              className="rounded-[38.182px] border border-white bg-white px-6 py-2.5 font-['Poppins'] text-[14.5px] font-medium text-[#161513] transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              Let's Talk
            </a>
            <Link
              to="/#case-studies"
              className="rounded-[38.182px] border border-white/20 px-6 py-2.5 font-['Poppins'] text-[14.5px] text-white transition-colors duration-300 hover:border-white"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Site Footer */}
        <div className="w-full">
          <SiteFooter />
        </div>

      </div>

      {/* Floating 5-Section Navigation */}
      <CaseStudyStickyNav />

      {/* Fullscreen Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imageUrl={lightboxState.imageUrl}
        imageAlt={lightboxState.title}
        title={lightboxState.title}
        subtitle={lightboxState.subtitle}
      />
    </div>
  );
}
