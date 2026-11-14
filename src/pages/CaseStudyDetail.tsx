import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "../features/case-studies/data/caseStudiesData";
import { SiteFooter } from "../components/layout/SiteFooter";
import FloatingBubble, { type BubbleItem } from "../components/FloatingBubble";
import { FigmaIcon, LinkedinIcon } from "../constants/Icon";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Find case study by slug or id
  const study = caseStudies.find(
    (c) => c.slug === slug || c.id === slug
  );

  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

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
          Return to Home
        </Link>
      </div>
    );
  }

  const BUBBLE_NAV: BubbleItem[] = [
    { label: "Overview", id: "overview" },
    { label: "Problem", id: "problem" },
    { label: "Research", id: "research" },
    { label: "Process", id: "process" },
    { label: "Solution", id: "solution" },
    { label: "Learnings", id: "reflection" },
    { label: "Top ↑", id: "top" },
  ];

  const handleBubbleClick = (item: BubbleItem) => {
    if (item.id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(item.id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentScreen = study.solution.screens[activeScreenIndex] || study.solution.screens[0];

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#161513] px-5 pb-0 pt-20 text-white sm:px-10 lg:px-20 min-[601px]:pt-28 max-[600px]:pt-22">
      <div className="flex flex-col w-full max-w-5xl gap-20 sm:gap-28">

        {/* Back Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: easeOut }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5"
        >
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

          <div className="flex items-center gap-3">
            {study.liveDemo && (
              <a
                href={study.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-['Poppins'] text-[13px] text-[#8491A0] hover:text-[#5197ff] transition-colors"
              >
                <LinkedinIcon width={14} height={14} />
                <span>LinkedIn Post</span>
              </a>
            )}
            {study.figmaLink && (
              <a
                href={study.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-['Poppins'] text-[13px] text-[#8491A0] hover:text-[#5197ff] transition-colors"
              >
                <FigmaIcon width={14} height={14} />
                <span>Figma</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* SECTION 01 — PROJECT OVERVIEW                            */}
        {/* ======================================================== */}
        <section id="overview" className="flex flex-col gap-8 scroll-mt-28">
          <motion.div
            className="flex flex-col gap-4 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center rounded-full bg-[#30496b] px-3.5 py-1 font-['Itim'] text-[13px] sm:text-[14px] text-white">
                01 — Project Overview
              </span>
              <span className="inline-flex items-center rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 font-['Itim'] text-[13px] text-[#A9A9A9]">
                {study.projectType}
              </span>
              <span className="inline-flex items-center rounded-full bg-[#5197ff]/10 border border-[#5197ff]/30 px-3 py-1 font-['Itim'] text-[13px] text-[#5197ff]">
                {study.platform}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="font-['Itim'] text-[36px] sm:text-[50px] lg:text-[54px] font-bold text-white uppercase tracking-tight leading-tight">
                {study.title}
              </h1>
              {study.arabicTitle && (
                <span className="font-['Inter'] text-[22px] sm:text-[26px] text-[#5197ff] font-medium">
                  {study.arabicTitle}
                </span>
              )}
            </div>

            <p className="font-['Poppins'] text-[17px] sm:text-[20px] text-[#b4b4b4] leading-relaxed max-w-3xl">
              {study.shortDescription}
            </p>
          </motion.div>

          {/* Quick Summary Grid: Role, Type, Tools, Design Focus */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          >
            <div className="flex flex-col gap-1.5 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.07]">
              <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider">
                My Role
              </span>
              <span className="font-['Poppins'] text-[15px] font-medium text-white">
                {study.role}
              </span>
            </div>

            <div className="flex flex-col gap-1.5 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.07]">
              <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider">
                Project Type
              </span>
              <span className="font-['Poppins'] text-[15px] font-medium text-white">
                {study.projectType}
              </span>
            </div>

            <div className="flex flex-col gap-1.5 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.07]">
              <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider">
                Tools & Technologies
              </span>
              <div className="flex items-center gap-1.5 font-['Poppins'] text-[15px] font-medium text-white">
                <FigmaIcon width={16} height={16} />
                <span>Figma (Tokens & Variants)</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.07]">
              <span className="font-['Itim'] text-[13px] text-[#8491A0] uppercase tracking-wider">
                Timeline & Scope
              </span>
              <span className="font-['Poppins'] text-[15px] font-medium text-white">
                {study.timeline} · Constantine
              </span>
            </div>
          </motion.div>

          {/* Design Responsibilities Pills */}
          <motion.div
            className="flex flex-wrap items-center gap-2 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
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

          {/* Hero Visual Showcase */}
          <motion.div
            className="relative w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-[#121212] shadow-2xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          >
            <img
              src={study.heroImage}
              alt={study.title}
              className="w-full h-auto object-cover object-top"
              loading="eager"
            />
            <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full bg-[#161513]/90 backdrop-blur px-3.5 py-1.5 border border-white/15 text-white font-['Itim'] text-[13px]">
              <span>Al-Tabib Al-Hafiz Mobile Interface Suite</span>
            </div>
          </motion.div>

          {/* Executive Overview Summary & Objectives */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h2 className="font-['Itim'] text-[24px] text-white">Executive Summary</h2>
              <p className="font-['Poppins'] text-[15px] sm:text-[16px] text-[#b4b4b4] leading-relaxed">
                {study.overview.summary}
              </p>
            </div>
            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-[#1A1917] border border-white/[0.08]">
              <h2 className="font-['Itim'] text-[20px] text-white">Core Objectives</h2>
              <ul className="flex flex-col gap-2 font-['Poppins'] text-[13.5px] text-[#A9A9A9] leading-relaxed">
                {study.overview.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#5197ff] mt-0.5">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 02 — THE PROBLEM                                 */}
        {/* ======================================================== */}
        <section id="problem" className="flex flex-col gap-8 scroll-mt-28">
          <motion.div
            className="flex flex-col gap-2 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
              02 — The Problem
            </span>
            <h2 className="font-['Itim'] text-[32px] sm:text-[38px] text-white">
              Understanding the Academic &amp; Spiritual Struggle
            </h2>
            <p className="font-['Poppins'] text-[15.5px] text-[#b4b4b4] leading-relaxed max-w-3xl">
              {study.problem.statement}
            </p>
          </motion.div>

          {/* Context & Target Audience Highlight */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-3">
              <span className="font-['Itim'] text-[15px] text-[#5197ff] uppercase tracking-wider">
                Real-World Context
              </span>
              <p className="font-['Poppins'] text-[15px] text-[#d1d1d1] leading-relaxed">
                {study.problem.context}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-3">
              <span className="font-['Itim'] text-[15px] text-[#5197ff] uppercase tracking-wider">
                Target Audience
              </span>
              <p className="font-['Poppins'] text-[14px] text-[#b4b4b4] leading-relaxed">
                {study.problem.targetAudience}
              </p>
            </div>
          </div>

          {/* Key Challenges / User Pain Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {study.problem.challenges.map((challenge) => (
              <motion.div
                key={challenge.number}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-[#161513] border border-white/[0.08] hover:border-[#5197ff]/40 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-['Itim'] text-[24px] font-bold text-[#5197ff]">
                    {challenge.number}
                  </span>
                  <span className="rounded-full bg-white/[0.05] px-2.5 py-0.5 font-['Itim'] text-[12px] text-[#8491A0]">
                    Pain Point
                  </span>
                </div>
                <h3 className="font-['Itim'] text-[20px] text-white">
                  {challenge.title}
                </h3>
                <p className="font-['Poppins'] text-[14px] text-[#9CA3AF] leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 03 — RESEARCH & DISCOVERY                         */}
        {/* ======================================================== */}
        <section id="research" className="flex flex-col gap-8 scroll-mt-28">
          <motion.div
            className="flex flex-col gap-2 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
              03 — Research &amp; Discovery
            </span>
            <h2 className="font-['Itim'] text-[32px] sm:text-[38px] text-white">
              Empathy Grounded in Student Life
            </h2>
            <p className="font-['Poppins'] text-[15.5px] text-[#b4b4b4] leading-relaxed max-w-3xl">
              {study.research.overview}
            </p>
          </motion.div>

          {/* User Needs Checklist */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-4">
            <h3 className="font-['Itim'] text-[22px] text-white">
              Identified User Needs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {study.research.userNeeds.map((need, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5197ff]/20 text-[#5197ff] flex items-center justify-center shrink-0 mt-0.5 text-[12px] font-bold">
                    ✓
                  </div>
                  <span className="font-['Poppins'] text-[14px] text-[#d1d1d1] leading-relaxed">
                    {need}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* User Persona Card */}
          <div className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-[#161513] border border-white/[0.1]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-['Itim'] text-[24px] text-white">
                    {study.research.persona.name}
                  </h3>
                  <span className="rounded-full bg-[#30496b] px-2.5 py-0.5 font-['Itim'] text-[12px] text-white">
                    Primary Persona
                  </span>
                </div>
                <span className="font-['Poppins'] text-[13.5px] text-[#5197ff]">
                  {study.research.persona.tagline}
                </span>
              </div>

              {/* Editable Placeholder Indicator */}
              <div className="rounded-full bg-white/[0.05] border border-dashed border-white/20 px-3 py-1 font-['Poppins'] text-[12px] text-[#8491A0]">
                <span>[Editable Placeholder: Persona data customizable in case study data file]</span>
              </div>
            </div>

            {/* Persona Quote */}
            <div className="p-4 rounded-xl bg-white/[0.02] border-l-2 border-[#5197ff] italic font-['Poppins'] text-[14.5px] text-[#e1e1e1]">
              "{study.research.persona.quote}"
            </div>

            {/* Demographics, Goals & Pain Points */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              <div className="flex flex-col gap-2">
                <span className="font-['Itim'] text-[14px] text-[#8491A0] uppercase tracking-wider">
                  Demographics
                </span>
                <div className="flex flex-col gap-1.5 font-['Poppins'] text-[13px]">
                  {study.research.persona.demographics.map((d, i) => (
                    <div key={i} className="flex justify-between border-b border-white/[0.04] pb-1">
                      <span className="text-[#8491A0]">{d.label}:</span>
                      <span className="text-white font-medium">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-['Itim'] text-[14px] text-[#8491A0] uppercase tracking-wider">
                  Goals &amp; Motivations
                </span>
                <ul className="flex flex-col gap-1.5 font-['Poppins'] text-[13px] text-[#d1d1d1]">
                  {study.research.persona.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#5197ff]">•</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-['Itim'] text-[14px] text-[#8491A0] uppercase tracking-wider">
                  Frustrations
                </span>
                <ul className="flex flex-col gap-1.5 font-['Poppins'] text-[13px] text-[#d1d1d1]">
                  {study.research.persona.painPoints.map((p, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-red-400">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* User Journey Flow */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Itim'] text-[22px] text-white">
              Student User Journey Flow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {study.research.journey.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#1A1917] border border-white/[0.07] flex flex-col gap-2 text-left"
                >
                  <span className="font-['Itim'] text-[13px] text-[#5197ff] font-bold">
                    {step.phase}
                  </span>
                  <span className="font-['Poppins'] text-[12.5px] font-semibold text-white">
                    {step.goal}
                  </span>
                  <p className="font-['Poppins'] text-[12px] text-[#9CA3AF] leading-relaxed">
                    {step.action}
                  </p>
                  <span className="mt-auto pt-2 border-t border-white/[0.04] font-['Itim'] text-[11px] text-[#8491A0]">
                    {step.touchpoint}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {study.research.keyInsights.map((insight) => (
              <div
                key={insight.number}
                className="p-5 rounded-2xl bg-[#161513] border border-white/[0.08] flex flex-col gap-2"
              >
                <span className="font-['Itim'] text-[20px] text-[#5197ff] font-bold">
                  Insight {insight.number}
                </span>
                <h4 className="font-['Itim'] text-[17px] text-white">
                  {insight.title}
                </h4>
                <p className="font-['Poppins'] text-[13px] text-[#9CA3AF] leading-relaxed">
                  {insight.takeaway}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 04 — DESIGN PROCESS                              */}
        {/* ======================================================== */}
        <section id="process" className="flex flex-col gap-8 scroll-mt-28">
          <motion.div
            className="flex flex-col gap-2 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
              04 — Design Process
            </span>
            <h2 className="font-['Itim'] text-[32px] sm:text-[38px] text-white">
              From Architecture to Design System
            </h2>
            <p className="font-['Poppins'] text-[15.5px] text-[#b4b4b4] leading-relaxed max-w-3xl">
              {study.designProcess.overview}
            </p>
          </motion.div>

          {/* Information Architecture Diagram */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h3 className="font-['Itim'] text-[22px] text-white">
                Information Architecture (IA)
              </h3>
              <p className="font-['Poppins'] text-[14px] text-[#9CA3AF]">
                {study.designProcess.informationArchitecture.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
              {study.designProcess.informationArchitecture.hierarchy.map((pillar, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 p-4 rounded-xl bg-[#161513] border border-white/[0.06]"
                >
                  <span className="font-['Itim'] text-[14px] text-[#5197ff] font-semibold border-b border-white/[0.08] pb-1.5">
                    {pillar.title}
                  </span>
                  <ul className="flex flex-col gap-1.5 font-['Poppins'] text-[12.5px] text-[#d1d1d1]">
                    {pillar.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-1.5">
                        <span className="text-[#8491A0]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* User Flow & Wireframe Strategy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-4">
              <h3 className="font-['Itim'] text-[22px] text-white">
                User Flow Steps
              </h3>
              <p className="font-['Poppins'] text-[13.5px] text-[#9CA3AF]">
                {study.designProcess.userFlow.description}
              </p>
              <div className="flex flex-col gap-2.5">
                {study.designProcess.userFlow.steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#161513] border border-white/[0.04]">
                    <span className="w-6 h-6 rounded-full bg-[#5197ff]/20 text-[#5197ff] flex items-center justify-center font-['Itim'] text-[13px] font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-['Poppins'] text-[13.5px] text-[#e1e1e1]">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-4">
              <h3 className="font-['Itim'] text-[22px] text-white">
                Wireframing &amp; Spatial Ergonomics
              </h3>
              <p className="font-['Poppins'] text-[13.5px] text-[#9CA3AF]">
                {study.designProcess.wireframes.description}
              </p>
              <div className="flex flex-col gap-2.5">
                {study.designProcess.wireframes.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#161513] border border-white/[0.04]">
                    <span className="text-[#5197ff] mt-0.5">•</span>
                    <span className="font-['Poppins'] text-[13px] text-[#d1d1d1]">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Design System Foundations: Color Tokens & Typography */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161513] border border-white/[0.1] flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="font-['Itim'] text-[24px] text-white">
                  Figma Design System Tokens &amp; Variants
                </h3>
                <span className="rounded-full bg-[#5197ff]/20 px-2.5 py-0.5 font-['Itim'] text-[12px] text-[#5197ff]">
                  Auto Layout
                </span>
              </div>
              <p className="font-['Poppins'] text-[14px] text-[#9CA3AF]">
                Built using Figma variables, nested component variants, and an 8-point spatial system.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {study.designProcess.designSystem.map((cat, i) => (
                <div key={i} className="flex flex-col gap-3 p-5 rounded-xl bg-[#1A1917] border border-white/[0.06]">
                  <span className="font-['Itim'] text-[18px] text-white font-semibold">
                    {cat.category}
                  </span>
                  <p className="font-['Poppins'] text-[12.5px] text-[#8491A0]">
                    {cat.description}
                  </p>
                  <ul className="flex flex-col gap-1.5 font-['Poppins'] text-[12px] text-[#d1d1d1] pt-2 border-t border-white/[0.04]">
                    {cat.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-1.5">
                        <span className="text-[#5197ff]">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Components & Variants List */}
            <div className="flex flex-col gap-3 pt-3 border-t border-white/[0.08]">
              <span className="font-['Itim'] text-[16px] text-white">
                Component Variants Engineered
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {study.designProcess.componentsAndVariants.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] font-['Poppins'] text-[12.5px] text-[#d1d1d1]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5197ff]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 05 — FINAL SOLUTION (MOST PROMINENT)             */}
        {/* ======================================================== */}
        <section id="solution" className="flex flex-col gap-10 scroll-mt-28">
          <motion.div
            className="flex flex-col gap-2 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
              05 — Final Solution
            </span>
            <h2 className="font-['Itim'] text-[34px] sm:text-[44px] text-white">
              {study.solution.headline}
            </h2>
            <p className="font-['Poppins'] text-[16px] text-[#b4b4b4] leading-relaxed max-w-3xl">
              {study.solution.description}
            </p>
          </motion.div>

          {/* Interactive Screen Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-4">
            {study.solution.screens.map((screen, idx) => (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveScreenIndex(idx)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 font-['Itim'] text-[14px] sm:text-[15px] transition-all duration-200 cursor-pointer ${
                  activeScreenIndex === idx
                    ? "bg-white text-[#161513] shadow-lg font-bold"
                    : "bg-[#1A1917] text-[#9CA3AF] hover:text-white border border-white/[0.08]"
                }`}
              >
                <span>{screen.number}</span>
                <span>{screen.title}</span>
              </button>
            ))}
          </div>

          {/* Active Screen Editorial Spotlight */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: easeOut }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-[#1A1917] border border-white/[0.1] shadow-2xl"
            >
              {/* Screen Mockup Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[320px] rounded-[36px] overflow-hidden bg-[#121212] border-2 border-white/20 shadow-2xl shadow-black/80">
                  <img
                    src={currentScreen.image}
                    alt={currentScreen.title}
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>

              {/* Screen Commentary & UX Decisions */}
              <div className="lg:col-span-7 flex flex-col gap-5 text-left">
                <div className="flex flex-col gap-1">
                  <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
                    Screen {currentScreen.number} Analysis
                  </span>
                  <h3 className="font-['Itim'] text-[30px] sm:text-[36px] text-white font-bold">
                    {currentScreen.title}
                  </h3>
                  <p className="font-['Poppins'] text-[14px] sm:text-[15px] text-[#5197ff] font-medium">
                    {currentScreen.subtitle}
                  </p>
                </div>

                <p className="font-['Poppins'] text-[15px] text-[#d1d1d1] leading-relaxed">
                  {currentScreen.description}
                </p>

                <div className="flex flex-col gap-2.5 pt-3 border-t border-white/[0.08]">
                  <span className="font-['Itim'] text-[14px] text-[#8491A0] uppercase tracking-wider">
                    Key UX &amp; UI Highlights:
                  </span>
                  <div className="flex flex-col gap-2">
                    {currentScreen.uxHighlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2.5 font-['Poppins'] text-[13.5px] text-[#e1e1e1]">
                        <span className="text-[#5197ff] font-bold mt-0.5">→</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Core Feature Deep-Dive Grid */}
          <div className="flex flex-col gap-5 pt-4">
            <h3 className="font-['Itim'] text-[24px] text-white text-left">
              Key Architectural Features in Action
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {study.solution.coreFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#161513] border border-white/[0.08] flex flex-col gap-3 text-left"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-['Itim'] text-[20px] text-white font-bold">
                      {feat.title}
                    </h4>
                    {feat.arabicTitle && (
                      <span className="font-['Inter'] text-[14px] text-[#5197ff] font-medium">
                        {feat.arabicTitle}
                      </span>
                    )}
                  </div>
                  <p className="font-['Poppins'] text-[14px] text-[#b4b4b4] leading-relaxed">
                    {feat.description}
                  </p>
                  <div className="mt-auto pt-3 border-t border-white/[0.05] flex items-center gap-2">
                    <span className="font-['Itim'] text-[12px] text-[#8491A0] uppercase">
                      Design Impact:
                    </span>
                    <span className="font-['Poppins'] text-[12.5px] text-[#5197ff] font-medium">
                      {feat.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Screen Gallery Overview */}
          <div className="flex flex-col gap-5 pt-4">
            <div className="flex flex-col gap-1 text-left">
              <h3 className="font-['Itim'] text-[24px] text-white">
                Comprehensive Screen Gallery
              </h3>
              <p className="font-['Poppins'] text-[14px] text-[#9CA3AF]">
                Complete progression from brand entry to live dashboard interaction.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {study.solution.screens.map((screen, idx) => (
                <div
                  key={screen.id}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`group relative flex flex-col items-center p-3 rounded-2xl bg-[#1A1917] border cursor-pointer transition-all duration-300 ${
                    activeScreenIndex === idx
                      ? "border-[#5197ff] shadow-lg shadow-[#5197ff]/10"
                      : "border-white/[0.08] hover:border-white/30"
                  }`}
                >
                  <div className="w-full aspect-[9/18] rounded-xl overflow-hidden bg-[#121212] mb-2.5">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="font-['Itim'] text-[14px] text-white text-center">
                    {screen.title}
                  </span>
                  <span className="font-['Poppins'] text-[11px] text-[#8491A0]">
                    Screen {screen.number}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 06 — REFLECTION & LEARNINGS                      */}
        {/* ======================================================== */}
        <section id="reflection" className="flex flex-col gap-8 scroll-mt-28">
          <motion.div
            className="flex flex-col gap-2 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span className="font-['Itim'] text-[14px] text-[#5197ff] uppercase tracking-wider">
              06 — Reflection &amp; Learnings
            </span>
            <h2 className="font-['Itim'] text-[32px] sm:text-[38px] text-white">
              Challenges, Insights &amp; Future Horizons
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Challenges Faced */}
            <div className="p-6 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-4 text-left">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <h3 className="font-['Itim'] text-[20px] text-white">
                  Challenges Faced
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5 font-['Poppins'] text-[13.5px] text-[#d1d1d1] leading-relaxed">
                {study.reflection.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lessons Learned */}
            <div className="p-6 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-4 text-left">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#5197ff]" />
                <h3 className="font-['Itim'] text-[20px] text-white">
                  Lessons Learned
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5 font-['Poppins'] text-[13.5px] text-[#d1d1d1] leading-relaxed">
                {study.reflection.learnings.map((l, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#5197ff] font-bold mt-0.5">•</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Could Be Improved */}
            <div className="p-6 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-4 text-left">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <h3 className="font-['Itim'] text-[20px] text-white">
                  Areas for Improvement
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5 font-['Poppins'] text-[13.5px] text-[#d1d1d1] leading-relaxed">
                {study.reflection.improvements.map((imp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold mt-0.5">•</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Possibilities */}
            <div className="p-6 rounded-2xl bg-[#1A1917] border border-white/[0.08] flex flex-col gap-4 text-left">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-400" />
                <h3 className="font-['Itim'] text-[20px] text-white">
                  Future Possibilities
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5 font-['Poppins'] text-[13.5px] text-[#d1d1d1] leading-relaxed">
                {study.reflection.futurePossibilities.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold mt-0.5">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Contact / Interaction Callout */}
        <div className="flex flex-col items-center gap-5 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1A1917] to-[#161513] border border-white/[0.1] text-center">
          <span className="font-['Itim'] text-[15px] text-[#5197ff] uppercase tracking-wider">
            Collaboration &amp; Design Inquiries
          </span>
          <h3 className="font-['Itim'] text-[30px] sm:text-[38px] text-white">
            Have a UI/UX project or concept to bring to life?
          </h3>
          <p className="font-['Poppins'] text-[15px] sm:text-[16px] text-[#9CA3AF] max-w-xl">
            Let's partner to transform complex workflows into elegant, human-centered digital experiences.
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
              Back to All Case Studies
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full">
          <SiteFooter />
        </div>

      </div>

      {/* Floating Section Navigation Bubble */}
      <FloatingBubble
        items={BUBBLE_NAV}
        onItemClick={handleBubbleClick}
        activeId="case-study"
      />
    </div>
  );
}
