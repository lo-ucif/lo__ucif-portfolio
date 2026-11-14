import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import type { MouseEvent } from "react";
import type { CaseStudy } from "../types";
import { FigmaIcon, LinkedinIcon } from "../../../constants/Icon";

// Static phone screen imports for the 3D fanned mobile presentation
import dashboardImg from "../../../assets/case-studies/al-tabib/screen-4-dashboard.webp";
import loginImg from "../../../assets/case-studies/al-tabib/screen-3-login.webp";
import onboardingImg from "../../../assets/case-studies/al-tabib/screen-2-onboarding.webp";

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
    platformType = "app",
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

  // =========================================================================
  // APP PRESENTATION (Style 1: Mobile 3D Layered Fanned Phones)
  // =========================================================================
  if (platformType === "app") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="group relative flex flex-col w-full text-left rounded-3xl bg-gradient-to-b from-[#1A1917] via-[#161513] to-[#121212] border border-white/[0.08] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#5197ff]/40"
      >
        {/* Top Header: Starburst Accent + "Mobile Presentation" Title + Subtitle */}
        <div className="flex flex-col items-center text-center gap-3 w-full max-w-2xl mx-auto z-10">
          {/* Glowing Starburst Accent in #5197ff */}
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#5197ff]/15 text-[#5197ff] shadow-lg shadow-[#5197ff]/20 animate-pulse">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          <div className="flex flex-col gap-1">
            <h3
              onClick={handleCardClick}
              className="font-['Itim'] text-[34px] sm:text-[46px] lg:text-[50px] font-bold text-white tracking-wide leading-tight cursor-pointer hover:text-[#5197ff] transition-colors"
            >
              Mobile Presentation
            </h3>
            {arabicTitle && (
              <span className="font-['Inter'] text-[18px] sm:text-[20px] text-[#5197ff] font-medium">
                {title} · {arabicTitle}
              </span>
            )}
          </div>

          <p className="font-['Poppins'] text-[14px] sm:text-[15.5px] text-[#9CA3AF] max-w-lg leading-relaxed">
            {shortDescription}
          </p>
        </div>

        {/* Center: 3D Layered Fanned-Out Mobile Phones Showcase */}
        <div
          onClick={handleCardClick}
          className="relative w-full py-12 sm:py-16 my-4 flex items-center justify-center cursor-pointer select-none perspective-[1200px]"
        >
          {/* Ambient Spotlight & Ground Shadow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[400px] bg-[#5197ff]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[280px] sm:w-[460px] h-[30px] bg-black/90 rounded-full blur-2xl pointer-events-none" />

          {/* Fanned Mobile Phones Stack */}
          <div className="relative w-[300px] sm:w-[460px] lg:w-[520px] h-[380px] sm:h-[480px] flex items-center justify-center">

            {/* Back Phone (Rightmost / Angled Back) */}
            <motion.div
              className="absolute w-[180px] sm:w-[240px] rounded-[30px] sm:rounded-[40px] overflow-hidden bg-[#121212] border-2 border-white/20 shadow-2xl shadow-black/80"
              style={{
                zIndex: 1,
                transform: "translateX(90px) translateY(35px) rotateY(-22deg) rotateZ(14deg) scale(0.86)",
                transformOrigin: "center bottom",
              }}
              whileHover={{
                transform: "translateX(110px) translateY(25px) rotateY(-20deg) rotateZ(16deg) scale(0.89)",
              }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <img
                src={onboardingImg}
                alt="Onboarding Screen"
                className="w-full h-auto object-contain block opacity-85"
                loading="lazy"
              />
            </motion.div>

            {/* Middle Phone (Behind Front, Angled) */}
            <motion.div
              className="absolute w-[190px] sm:w-[250px] rounded-[30px] sm:rounded-[40px] overflow-hidden bg-[#121212] border-2 border-white/30 shadow-2xl shadow-black/90"
              style={{
                zIndex: 2,
                transform: "translateX(45px) translateY(18px) rotateY(-14deg) rotateZ(7deg) scale(0.93)",
                transformOrigin: "center bottom",
              }}
              whileHover={{
                transform: "translateX(55px) translateY(10px) rotateY(-12deg) rotateZ(8deg) scale(0.96)",
              }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <img
                src={loginImg}
                alt="Login Screen"
                className="w-full h-auto object-contain block opacity-95"
                loading="lazy"
              />
            </motion.div>

            {/* Front Phone (Prominent, High-Resolution Dashboard) */}
            <motion.div
              className="absolute w-[200px] sm:w-[265px] rounded-[32px] sm:rounded-[42px] overflow-hidden bg-[#121212] border-2 border-white/50 shadow-2xl shadow-black ring-1 ring-[#5197ff]/40"
              style={{
                zIndex: 3,
                transform: "translateX(-40px) translateY(-5px) rotateY(-6deg) rotateZ(-3deg) scale(1)",
                transformOrigin: "center bottom",
              }}
              whileHover={{
                transform: "translateX(-45px) translateY(-15px) rotateY(-4deg) rotateZ(-2deg) scale(1.03)",
              }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <img
                src={dashboardImg}
                alt="Al-Tabib Al-Hafiz Dashboard"
                className="w-full h-auto object-contain block"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Editorial Information Row */}
        <div className="flex flex-col gap-6 pt-6 border-t border-white/[0.08] w-full z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
                • Role &amp; Methodology
              </span>
              <span className="font-['Poppins'] text-[14px] text-white font-medium mt-1">
                {role} · Auto Layout &amp; Tokens
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
                • Target Institution
              </span>
              <span className="font-['Poppins'] text-[14px] text-[#d1d1d1] mt-1">
                Constantine Faculty of Medicine
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase tracking-wider">
                • Design Focus
              </span>
              <span className="font-['Poppins'] text-[14px] text-[#d1d1d1] mt-1 line-clamp-2">
                {mainDesignFocus}
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
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
      </motion.article>
    );
  }

  // =========================================================================
  // WEB PRESENTATION (Style 2: Editorial Web Layout inspired by Image 2)
  // =========================================================================
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="group relative flex flex-col w-full text-left rounded-3xl bg-gradient-to-b from-[#1A1917] via-[#161513] to-[#121212] border border-white/[0.08] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#5197ff]/40"
    >
      {/* Editorial Header Section (like Image 2): Motive Dot + Headline */}
      <div className="flex flex-col gap-5 w-full border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#5197ff] animate-pulse" />
          <span className="font-['Itim'] text-[13px] sm:text-[14px] text-[#5197ff] uppercase tracking-wider">
            Motive of the design
          </span>
        </div>

        <h3
          onClick={handleCardClick}
          className="font-['Itim'] text-[32px] sm:text-[44px] lg:text-[48px] font-bold text-white tracking-wide leading-tight cursor-pointer hover:text-[#5197ff] transition-colors"
        >
          Bringing smart driving education to life with a modern digital platform.
        </h3>

        {/* 2-Column Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 font-['Poppins'] text-[14px] sm:text-[15px] leading-relaxed text-[#b4b4b4]">
          <p>
            The motivation behind this project was to create a digital platform that replaces obsolete paper ledgers with an integrated ecosystem. With driving schools demanding real-time coordination, <span className="text-[#5197ff] font-medium">the need for compact, efficient, and transparent scheduling</span> has never been more important.
          </p>
          <p>
            Our design aims to reflect the core values of simplicity and speed by delivering a dual-interface system: a high-efficiency web dashboard for administrators, and an intuitive mobile app empowering student learners to book lessons with zero friction.
          </p>
        </div>
      </div>

      {/* Central Visual Showcase: Floating Laptop on Pedestal */}
      <div
        onClick={handleCardClick}
        className="relative w-full py-8 sm:py-12 flex items-center justify-center cursor-pointer select-none"
      >
        <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#121212] border border-white/[0.1] shadow-2xl transition-transform duration-500 group-hover:scale-[1.015]">
          <img
            src={heroImage}
            alt={title}
            loading="lazy"
            className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-[#161513]/85 backdrop-blur px-3.5 py-1.5 border border-white/10 text-white font-['Itim'] text-[13px]">
            <span className="w-2 h-2 rounded-full bg-[#5197ff]" />
            <span>Responsive Web &amp; Admin Suite</span>
          </div>
        </div>
      </div>

      {/* Second Editorial Section: 01 Goal of the design */}
      <div className="flex flex-col gap-4 w-full border-b border-white/[0.08] pb-8 pt-4">
        <div className="flex items-center gap-2">
          <span className="font-['Itim'] text-[13px] sm:text-[14px] text-[#5197ff] font-bold">
            01
          </span>
          <span className="font-['Itim'] text-[13px] sm:text-[14px] text-[#5197ff] uppercase tracking-wider">
            Goal of the design
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <h4 className="font-['Itim'] text-[26px] sm:text-[34px] font-bold text-white leading-tight">
            The goal of this design was to make driving school operations not only digitized but also effortless and highly efficient.
          </h4>
          <p className="font-['Poppins'] text-[14px] sm:text-[15px] leading-relaxed text-[#9CA3AF]">
            We aimed to create an ecosystem that reflects modern administrative speed while eliminating the friction of manual scheduling. By pairing clean Algerian visual branding with instant instructor allocation, school owners can manage 60+ candidates from a single screen.
          </p>
        </div>
      </div>

      {/* Footer / Behind This Project Credits Grid */}
      <div className="flex flex-col gap-6 pt-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-['Poppins'] text-[13px]">
          <div className="flex flex-col">
            <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase">
              • Platform &amp; Scope
            </span>
            <span className="text-white font-medium mt-1">Web Dashboard &amp; Mobile</span>
          </div>

          <div className="flex flex-col">
            <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase">
              • My Role
            </span>
            <span className="text-white font-medium mt-1">UI/UX Designer · Solo Design</span>
          </div>

          <div className="flex flex-col">
            <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase">
              • Design System
            </span>
            <span className="text-white font-medium mt-1">20+ Screens &amp; Auto Layout</span>
          </div>

          <div className="flex flex-col">
            <span className="font-['Itim'] text-[13px] text-[#5197ff] uppercase">
              • Prototyping
            </span>
            <span className="text-white font-medium mt-1">Interactive Figma Prototype</span>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
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
                <span>Figma File</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
