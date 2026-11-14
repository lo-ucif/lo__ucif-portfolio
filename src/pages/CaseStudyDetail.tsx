import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { caseStudies } from "../features/case-studies/data/caseStudiesData";
import { SiteFooter } from "../components/layout/SiteFooter";
import { FigmaIcon, LinkedinIcon } from "../constants/Icon";

import { CaseStudyOverview } from "../features/case-studies/components/CaseStudyOverview";
import { CaseStudyProblemNeeds } from "../features/case-studies/components/CaseStudyProblemNeeds";
import { CaseStudyUserFlow } from "../features/case-studies/components/CaseStudyUserFlow";
import { CaseStudyFinalDesign } from "../features/case-studies/components/CaseStudyFinalDesign";
import { CaseStudyChallengesLearnings } from "../features/case-studies/components/CaseStudyChallengesLearnings";
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

  // Active screen index for Section 04
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

  // Previous and next case studies
  const prevStudy =
    currentIndex > 0 ? caseStudies[currentIndex - 1] : caseStudies[caseStudies.length - 1];
  const nextStudy =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : caseStudies[0];

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#161513] px-5 pb-0 pt-20 text-white sm:px-10 lg:px-20 min-[601px]:pt-28 max-[600px]:pt-22">
      <div className="flex flex-col w-full max-w-5xl gap-20 sm:gap-28">

        {/* ======================================================== */}
        {/* BACK NAVIGATION & ACTIONS BAR                             */}
        {/* ======================================================== */}
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
              All Projects
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
            {study.liveDemo && (
              <a
                href={study.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/10 px-3.5 py-1.5 font-['Poppins'] text-[13px] text-[#d1d1d1] hover:text-[#5197ff] hover:border-[#5197ff]/40 transition-colors"
              >
                <LinkedinIcon width={14} height={14} />
                <span>LinkedIn Article</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* SECTION 01: OVERVIEW                                     */}
        {/* ======================================================== */}
        <CaseStudyOverview
          study={study}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* ======================================================== */}
        {/* SECTION 02: PROBLEM & USER NEEDS                         */}
        {/* ======================================================== */}
        <CaseStudyProblemNeeds study={study} />

        {/* ======================================================== */}
        {/* SECTION 03: USER FLOW                                    */}
        {/* ======================================================== */}
        <CaseStudyUserFlow
          study={study}
          onScreenSelect={(index) => setActiveScreenIndex(index)}
        />

        {/* ======================================================== */}
        {/* SECTION 04: FINAL DESIGN (MOST PROMINENT)                */}
        {/* ======================================================== */}
        <CaseStudyFinalDesign
          study={study}
          activeScreenIndex={activeScreenIndex}
          onScreenChange={(index) => setActiveScreenIndex(index)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* ======================================================== */}
        {/* SECTION 05: CHALLENGES & LEARNINGS                       */}
        {/* ======================================================== */}
        <CaseStudyChallengesLearnings study={study} />

        {/* ======================================================== */}
        {/* PREVIOUS / NEXT CASE STUDY SWITCHER                      */}
        {/* ======================================================== */}
        {caseStudies.length > 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/[0.08] pt-10 w-full text-left">
            {prevStudy && (
              <Link
                to={`/case-studies/${prevStudy.slug}`}
                className="group flex flex-col gap-1 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.08] hover:border-[#5197ff]/40 transition-all duration-300"
              >
                <span className="font-['Itim'] text-[12px] text-[#8491A0] uppercase tracking-wider">
                  ← Previous Case Study
                </span>
                <span className="font-['Itim'] text-[20px] text-white font-semibold group-hover:text-[#5197ff] transition-colors">
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
                <span className="font-['Itim'] text-[20px] text-white font-semibold group-hover:text-[#5197ff] transition-colors">
                  {nextStudy.title}
                </span>
                <span className="font-['Poppins'] text-[12px] text-[#A9A9A9] truncate">
                  {nextStudy.subtitle}
                </span>
              </Link>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* BOTTOM CALL-TO-ACTION CARD                               */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center gap-5 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1A1917] to-[#161513] border border-white/[0.1] text-center shadow-2xl">
          <span className="font-['Itim'] text-[15px] text-[#5197ff] uppercase tracking-wider">
            Collaboration &amp; Design Inquiries
          </span>
          <h3 className="font-['Itim'] text-[30px] sm:text-[38px] text-white font-bold">
            Have a UI/UX project or concept to bring to life?
          </h3>
          <p className="font-['Poppins'] text-[15px] sm:text-[16px] text-[#9CA3AF] max-w-xl leading-relaxed">
            Let's collaborate to transform complex requirements into elegant, human-centered digital experiences.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:louciftamer3@gmail.com"
              className="rounded-[38.182px] border border-white bg-white px-7 py-3 font-['Poppins'] text-[15px] font-medium text-[#161513] transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              Let's Talk
            </a>
            <Link
              to="/#case-studies"
              className="rounded-[38.182px] border border-white/20 px-6 py-3 font-['Poppins'] text-[15px] text-white transition-colors duration-300 hover:border-white"
            >
              Back to Case Studies
            </Link>
          </div>
        </div>

        {/* Site Footer */}
        <div className="w-full">
          <SiteFooter />
        </div>

      </div>

      {/* Floating 5-Section Navigation Pill */}
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
