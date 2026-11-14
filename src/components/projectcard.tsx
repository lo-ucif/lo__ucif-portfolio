import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { MouseEvent } from "react";
import {
  Github2Icon,
  LinkIcon,
  FigmaIcon,
  LinkedinIcon,
} from "../constants/Icon";
import type { project as ProjectType } from "../constants/data";

export type project = ProjectType;

export default function Projectcard({
  id,
  title,
  category,
  problem,
  solution,
  description,
  shortDescription,
  image,
  tech,
  liveDemo,
  github,
  figma,
  linkedin,
  hackathon,
}: ProjectType) {
  const navigate = useNavigate();
  const easeOut = [0.22, 1, 0.36, 1] as const;

  const handleCardClick = () => {
    navigate(`/projects/${id}`);
  };

  const stopPropagation = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  const badgeText = hackathon
    ? hackathon
    : category === "client"
      ? "Client Project"
      : category === "university"
        ? "University Project"
        : "Featured Work";

  // Build a rich narrative description in the style of Havana Buy
  const narrative = problem && solution
    ? `${problem} ${solution}`
    : description || shortDescription;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="group relative flex flex-col lg:flex-row items-center gap-8 lg:gap-14 w-full text-left"
    >
      {/* Left Column: Project Image Preview */}
      <div
        onClick={handleCardClick}
        className="w-full lg:w-1/2 shrink-0 cursor-pointer"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#121212] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Right Column: Project Story & Details */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 min-w-0">
        {/* Status Badge */}
        <span className="inline-flex items-center rounded-[22px] bg-[#30496b] px-3.5 py-1 font-['Itim'] text-[15px] sm:text-[16px] text-white">
          <span>{badgeText}</span>
        </span>

        {/* Project Title */}
        <h3
          onClick={handleCardClick}
          className="font-['Itim'] text-[28px] sm:text-[36px] lg:text-[38px] font-bold text-white tracking-wide uppercase leading-tight cursor-pointer hover:text-[#5197ff] transition-colors duration-200"
        >
          {title}
        </h3>

        {/* Narrative Description */}
        <p className="font-['Poppins'] text-[14px] sm:text-[15px] leading-[1.75] text-[#b4b4b4]">
          {narrative}
        </p>

        {/* External Actions (Live Demo, GitHub, Figma, LinkedIn) */}
        {(liveDemo || github || figma || linkedin) && (
          <div className="flex flex-wrap items-center gap-5 mt-1">
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
                className="inline-flex items-center gap-1.5 font-['Poppins'] text-[13px] text-[#8491A0] hover:text-white transition-colors"
              >
                <LinkIcon width={14} height={14} />
                <span>Live Demo</span>
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
                className="inline-flex items-center gap-1.5 font-['Poppins'] text-[13px] text-[#8491A0] hover:text-white transition-colors"
              >
                <Github2Icon width={14} height={14} />
                <span>Code</span>
              </a>
            )}
            {figma && (
              <a
                href={figma}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
                className="inline-flex items-center gap-1.5 font-['Poppins'] text-[13px] text-[#8491A0] hover:text-white transition-colors"
              >
                <FigmaIcon width={14} height={14} />
                <span>Figma</span>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
                className="inline-flex items-center gap-1.5 font-['Poppins'] text-[13px] text-[#8491A0] hover:text-white transition-colors"
              >
                <LinkedinIcon width={14} height={14} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        )}

        {/* Tech Stack Row - strictly single line, responsive fit without overflow */}
        <div className="flex flex-nowrap items-center gap-3 sm:gap-4 pt-4 border-t border-white/[0.08] w-full mt-2 font-['Poppins'] text-[13px] text-[#a9a9a9] overflow-hidden min-w-0">
          {tech.slice(0, 5).map((t, idx) => {
            const Icon = t.icon;
            return (
              <div
                key={t.label}
                className={`shrink-0 items-center gap-1.5 text-white/90 whitespace-nowrap ${
                  idx >= 4
                    ? "hidden lg:flex"
                    : idx >= 3
                      ? "hidden sm:flex"
                      : "flex"
                }`}
              >
                <Icon width={16} height={16} />
                <span>{t.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
