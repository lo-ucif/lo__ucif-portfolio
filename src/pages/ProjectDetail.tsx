import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
import { projects, roleConfig, categoryConfig } from "../constants/data";
import { SiteFooter } from "../components/layout/SiteFooter";
import FloatingBubble, { type BubbleItem } from "../components/FloatingBubble";
import {
  Github2Icon,
  LinkIcon,
  FigmaIcon,
  LinkedinIcon,
} from "../constants/Icon";

const easeOut = [0.22, 1, 0.36, 1] as const;

const PROJECT_BUBBLE_NAV: BubbleItem[] = [
  { label: "Projects", id: "projects" },
  { label: "Overview", id: "overview" },
  { label: "Tech", id: "technologies" },
  { label: "Top ↑", id: "top" },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  // Bubble active tracking
  const [activeBubbleId, setActiveBubbleId] = useState<string>("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 200) {
        setActiveBubbleId("overview");
        return;
      }
      const sectionIds = ["technologies", "overview"];
      for (const secId of sectionIds) {
        const el = document.getElementById(secId);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollY >= top - 260) {
            setActiveBubbleId(secId);
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
    } else if (item.id === "projects") {
      navigate("/projects");
    } else {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-[#161513] px-5 text-white">
        <p className="font-['Itim'] text-[28px]">Project not found</p>
        <Link
          to="/projects"
          className="rounded-[38.182px] border border-white px-6 py-2.5 font-['Poppins'] text-[16px] text-white transition-colors duration-300 hover:bg-white hover:text-[#161513]"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  const caseStudyUrl =
    project.id === 12
      ? "/case-studies/al-tabib-al-hafiz"
      : project.id === 2
        ? "/case-studies/rokhsa"
        : null;

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#161513] px-5 pb-0 pt-20 text-white sm:px-10 lg:px-20 min-[601px]:pt-28 max-[600px]:pt-22">
      <div className="flex flex-col w-full gap-10 max-w-5xl">

        {/* Top Navigation Bar (Image 1 style) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: easeOut }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5 w-full"
        >
          <div className="flex items-center gap-4">
            <Link
              to="/projects"
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
              <span>Back to Projects</span>
            </Link>

            <span className="text-white/20">|</span>

            <Link
              to="/#projects"
              className="font-['Poppins'] text-[13px] text-[#8491A0] transition-colors hover:text-white"
            >
              Portfolio
            </Link>
          </div>

          {/* Quick Action Pills (Image 1 style) */}
          <div className="flex flex-wrap items-center gap-2.5">
            {caseStudyUrl && (
              <Link
                to={caseStudyUrl}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#5197ff] px-3.5 py-1.5 text-[#161513] font-['Poppins'] text-[13px] font-semibold hover:bg-white transition-colors"
              >
                <span>Explore Case Study →</span>
              </Link>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/10 px-3.5 py-1.5 font-['Poppins'] text-[13px] text-[#d1d1d1] hover:text-[#5197ff] hover:border-[#5197ff]/40 transition-colors"
              >
                <LinkIcon width={14} height={14} />
                <span>{project.id === 12 ? "Live Website" : "Live Demo"}</span>
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/10 px-3.5 py-1.5 font-['Poppins'] text-[13px] text-[#d1d1d1] hover:text-[#5197ff] hover:border-[#5197ff]/40 transition-colors"
              >
                <FigmaIcon width={14} height={14} />
                <span>Figma Prototype</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/10 px-3.5 py-1.5 font-['Poppins'] text-[13px] text-[#d1d1d1] hover:text-[#5197ff] hover:border-[#5197ff]/40 transition-colors"
              >
                <Github2Icon width={14} height={14} />
                <span>GitHub</span>
              </a>
            )}
            {project.linkedin && (
              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/10 px-3.5 py-1.5 font-['Poppins'] text-[13px] text-[#d1d1d1] hover:text-[#5197ff] hover:border-[#5197ff]/40 transition-colors"
              >
                <LinkedinIcon width={14} height={14} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Header Info */}
        <motion.div
          className="flex flex-col gap-4 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.05 }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#30496b] px-3.5 py-1 font-['Itim'] text-[13px] sm:text-[14px] text-white">
              {project.hackathon ? project.hackathon : project.projectType}
            </span>
            <span className="rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 font-['Itim'] text-[13px] text-[#A9A9A9]">
              {categoryConfig[project.category]}
            </span>
          </div>

          <h1 className="font-['Itim'] text-[34px] sm:text-[46px] lg:text-[50px] font-bold text-white uppercase tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="font-['Poppins'] text-[16px] sm:text-[17.5px] text-[#d1d1d1] leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Metadata Pills Row (Image 3 style) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-2 rounded-xl bg-[#1A1917] border border-white/[0.08] px-4 py-2">
              <span className="font-['Itim'] text-[12.5px] text-[#8491A0] uppercase tracking-wider">
                My Role:
              </span>
              <span className="font-['Poppins'] text-[14px] text-white font-medium">
                {roleConfig[project.role]}
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-[#1A1917] border border-white/[0.08] px-4 py-2">
              <span className="font-['Itim'] text-[12.5px] text-[#8491A0] uppercase tracking-wider">
                Context:
              </span>
              <span className="font-['Poppins'] text-[14px] text-[#d1d1d1]">
                {categoryConfig[project.category]}
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-[#1A1917] border border-white/[0.08] px-4 py-2">
              <span className="font-['Itim'] text-[12.5px] text-[#8491A0] uppercase tracking-wider">
                Timeline:
              </span>
              <span className="font-['Poppins'] text-[14px] text-[#d1d1d1]">
                {project.year}
              </span>
            </div>

            {project.team && (
              <div className="flex items-center gap-2 rounded-xl bg-[#1A1917] border border-white/[0.08] px-4 py-2">
                <span className="font-['Itim'] text-[12.5px] text-[#8491A0] uppercase tracking-wider">
                  Team:
                </span>
                <span className="font-['Poppins'] text-[14px] text-[#d1d1d1]">
                  {project.team}
                </span>
              </div>
            )}

            {project.status && (
              <div className="flex items-center gap-2 rounded-xl bg-[#1A1917] border border-white/[0.08] px-4 py-2">
                <span className="font-['Itim'] text-[12.5px] text-[#8491A0] uppercase tracking-wider">
                  Status:
                </span>
                <span className="font-['Poppins'] text-[14px] text-[#5197ff]">
                  {project.status}
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Featured Project Visual */}
        <motion.div
          className="w-full overflow-hidden rounded-3xl border border-white/[0.1] bg-[#121212] shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover block"
          />
        </motion.div>

        {/* Case Study Callout Banner (if available) */}
        {caseStudyUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#1A1917] via-[#1f1e1b] to-[#1A1917] border border-[#5197ff]/40 shadow-xl text-left"
          >
            <div className="flex flex-col gap-1">
              <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
                Comprehensive Case Study
              </span>
              <h3 className="font-['Itim'] text-[20px] sm:text-[22px] text-white font-bold">
                In-Depth UI/UX Case Study Available
              </h3>
              <p className="font-['Poppins'] text-[13.5px] text-[#A9A9A9]">
                Explore the complete problem research, UML user needs diagrams, and high-fidelity interface presentations.
              </p>
            </div>
            <Link
              to={caseStudyUrl}
              className="shrink-0 rounded-full bg-white text-[#161513] px-5 py-2.5 font-['Poppins'] text-[14px] font-semibold hover:bg-[#5197ff] hover:text-white transition-colors"
            >
              Explore Case Study →
            </Link>
          </motion.div>
        )}

        {/* Narrative & Details Content */}
        <div id="overview" className="flex flex-col gap-8 text-left scroll-mt-28">
          {/* Overview */}
          <div className="flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-[#1A1917] border border-white/[0.08]">
            <h2 className="font-['Itim'] text-[24px] sm:text-[26px] text-white font-bold">
              Project Overview
            </h2>
            <p className="font-['Poppins'] text-[15px] sm:text-[16px] text-[#d1d1d1] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* The Challenge & Solution Grid */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.problem && (
                <div className="flex flex-col gap-3 p-6 sm:p-7 rounded-2xl bg-[#1A1917] border border-white/[0.08]">
                  <span className="font-['Itim'] text-[12px] text-[#f87171] uppercase tracking-wider">
                    The Problem
                  </span>
                  <h3 className="font-['Itim'] text-[22px] text-white font-semibold">
                    The Challenge
                  </h3>
                  <p className="font-['Poppins'] text-[14.5px] text-[#b4b4b4] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="flex flex-col gap-3 p-6 sm:p-7 rounded-2xl bg-[#1A1917] border border-white/[0.08]">
                  <span className="font-['Itim'] text-[12px] text-[#5197ff] uppercase tracking-wider">
                    The Approach
                  </span>
                  <h3 className="font-['Itim'] text-[22px] text-white font-semibold">
                    The Solution
                  </h3>
                  <p className="font-['Poppins'] text-[14.5px] text-[#b4b4b4] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-[#1A1917] border border-white/[0.08]">
              <h2 className="font-['Itim'] text-[24px] text-white font-bold">
                Key Features &amp; Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] font-['Poppins'] text-[14px] text-[#d1d1d1]"
                  >
                    <span className="text-[#5197ff] font-bold mt-0.5">✔</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcome */}
          {project.outcome && (
            <div className="flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-[#1A1917] border border-white/[0.08]">
              <span className="font-['Itim'] text-[12px] text-[#4ade80] uppercase tracking-wider">
                Results
              </span>
              <h2 className="font-['Itim'] text-[22px] text-white font-bold">
                The Outcome
              </h2>
              <p className="font-['Poppins'] text-[15px] text-[#d1d1d1] leading-relaxed">
                {project.outcome}
              </p>
            </div>
          )}

          {/* Technologies Used */}
          <div id="technologies" className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-[#1A1917] border border-white/[0.08] scroll-mt-28">
            <h2 className="font-['Itim'] text-[24px] text-white font-bold">
              Technologies &amp; Architecture
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((t) => {
                const Icon = t.icon;
                return (
                  <span
                    key={t.label}
                    className="flex items-center gap-2 rounded-xl bg-white/[0.05] border border-white/10 px-3.5 py-2 font-['Itim'] text-[14.5px] text-white"
                  >
                    <Icon width={17} height={17} aria-hidden="true" />
                    <span>{t.label}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Collaboration & Design Inquiries CTA (Image 2 style) */}
        <div className="flex flex-col items-center gap-4 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1A1917] to-[#161513] border border-white/[0.1] text-center shadow-xl w-full">
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
              to="/projects"
              className="rounded-[38.182px] border border-white/20 px-6 py-2.5 font-['Poppins'] text-[14.5px] text-white transition-colors duration-300 hover:border-white"
            >
              Back to Projects
            </Link>
          </div>
        </div>

        {/* Site Footer */}
        <div className="w-full">
          <SiteFooter />
        </div>
      </div>

      {/* Floating Navigation Bubble (Image 5 style) */}
      <FloatingBubble
        items={PROJECT_BUBBLE_NAV}
        onItemClick={handleBubbleClick}
        activeId={activeBubbleId}
      />
    </div>
  );
}
