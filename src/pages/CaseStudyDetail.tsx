import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { caseStudies } from "../features/case-studies/data/caseStudiesData";
import { SiteFooter } from "../components/layout/SiteFooter";
import { FigmaIcon } from "../constants/Icon";

import { CaseStudyOverview } from "../features/case-studies/components/CaseStudyOverview";
import { CaseStudyProblems } from "../features/case-studies/components/CaseStudyProblems";
import { CaseStudyUserNeeds } from "../features/case-studies/components/CaseStudyUserNeeds";
import { CaseStudyFinalDesign } from "../features/case-studies/components/CaseStudyFinalDesign";
import FloatingBubble, { type BubbleItem } from "../components/FloatingBubble";
import { ImageLightboxModal, type LightboxItem } from "../features/case-studies/components/ImageLightboxModal";

const easeOut = [0.22, 1, 0.36, 1] as const;

const CASE_STUDY_BUBBLE_NAV: BubbleItem[] = [
  { label: "Overview", id: "overview" },
  { label: "Problems", id: "problems" },
  { label: "User Needs", id: "user-needs" },
  { label: "Final Design", id: "final-design" },
  { label: "Top ↑", id: "top" },
];

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Find case study by slug or id
  const currentIndex = caseStudies.findIndex(
    (c) => c.slug === slug || c.id === slug
  );
  const study = currentIndex !== -1 ? caseStudies[currentIndex] : null;

  // Lightbox modal state (supports single image or multi-page screen gallery)
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    items: LightboxItem[];
    currentIndex: number;
  }>({
    isOpen: false,
    items: [],
    currentIndex: 0,
  });

  const handleOpenLightbox = (
    imageUrl: string,
    title: string,
    subtitle?: string,
    initialIndex?: number,
    items?: LightboxItem[]
  ) => {
    if (items && items.length > 0) {
      setLightboxState({
        isOpen: true,
        items,
        currentIndex: initialIndex ?? 0,
      });
    } else {
      setLightboxState({
        isOpen: true,
        items: [{ imageUrl, title, subtitle, imageAlt: title }],
        currentIndex: 0,
      });
    }
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  // Track active section for floating bubble
  const [activeBubbleId, setActiveBubbleId] = useState<string>("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 250) {
        setActiveBubbleId("overview");
        return;
      }
      const sectionIds = ["final-design", "user-needs", "problems", "overview"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollY >= top - 260) {
            setActiveBubbleId(id);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBubbleClick = (item: BubbleItem) => {
    if (item.id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
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
        {/* 04. FINAL DESIGN / PRESENTATION RESULT                   */}
        {/* ======================================================== */}
        <CaseStudyFinalDesign
          study={study}
          onOpenLightbox={handleOpenLightbox}
        />

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

      {/* Floating Navigation Bubble */}
      <FloatingBubble
        items={CASE_STUDY_BUBBLE_NAV}
        onItemClick={handleBubbleClick}
        activeId={activeBubbleId}
      />

      {/* Fullscreen Lightbox Modal (with multi-page navigation) */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        items={lightboxState.items}
        initialIndex={lightboxState.currentIndex}
        onIndexChange={(newIndex) => {
          setLightboxState((prev) => ({ ...prev, currentIndex: newIndex }));
        }}
      />
    </div>
  );
}
