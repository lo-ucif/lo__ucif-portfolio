import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import type { SVGProps } from "react";
import { projects, roleConfig, categoryConfig } from "../constants/data";
import {
  Github2Icon,
  LinkIcon,
  FigmaIcon,
  HackathonIcon,
} from "../constants/Icon";

const ReturnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.33333 10.8333L3.56742 11.5993L2.8015 10.8333L3.56742 10.0674L4.33333 10.8333ZM22.75 19.5C22.75 19.7873 22.6359 20.0629 22.4327 20.266C22.2295 20.4692 21.954 20.5833 21.6667 20.5833C21.3793 20.5833 21.1038 20.4692 20.9006 20.266C20.6975 20.0629 20.5833 19.7873 20.5833 19.5H22.75ZM8.98408 17.0159L3.56742 11.5993L5.09925 10.0674L10.5159 15.4841L8.98408 17.0159ZM3.56742 10.0674L8.98408 4.65076L10.5159 6.18259L5.09925 11.5993L3.56742 10.0674ZM4.33333 9.75001H15.1667V11.9167H4.33333V9.75001ZM22.75 17.3333V19.5H20.5833V17.3333H22.75ZM15.1667 9.75001C17.1779 9.75001 19.1067 10.549 20.5289 11.9711C21.951 13.3933 22.75 15.3221 22.75 17.3333H20.5833C20.5833 15.8968 20.0127 14.519 18.9968 13.5032C17.981 12.4874 16.6033 11.9167 15.1667 11.9167V9.75001Z"
      fill="white"
    />
  </svg>
);

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    {...props}
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="17"
      rx="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 2v4M8 2v4M3 10h18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const RoleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    {...props}
  >
    <rect
      x="3"
      y="6"
      width="18"
      height="14"
      rx="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 11h18M10 11v2h4v-2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const TeamIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    {...props}
  >
    <circle cx="9" cy="8" r="3" />
    <path
      d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 5.2a3 3 0 0 1 0 5.6M18 14.2a6 6 0 0 1 3 5.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StatusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    {...props}
  >
    <path
      d="M3 12h4l2.2-7 4 14 2.1-7H21"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const easeOut = [0.22, 1, 0.36, 1] as const;

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

  const summaryDetails = [
    { label: "role", value: roleConfig[project.role], Icon: RoleIcon },
    { label: "Year", value: project.year, Icon: CalendarIcon },
    { label: "Status", value: project.status, Icon: StatusIcon },
    { label: "Team", value: project.team, Icon: TeamIcon },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#161513] px-5 pb-20 pt-20 text-white sm:px-10 lg:px-20">
      <div className="flex flex-col w-full gap-6 max-w-260">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="w-full"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-['Poppins'] text-[15px] text-[#9CA3AF] transition-colors duration-300 hover:text-white"
          >
            <ReturnIcon width={18} height={18} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.05 }}
        >
          <h1 className="font-['Itim'] text-[32px] text-white sm:text-[40px]">
            {project.title}
          </h1>
          <p className="font-['Poppins'] text-[15px] text-[#9CA3AF] leading-relaxed">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#161513]/80 border border-white/20 px-3 py-1 font-['Itim'] text-[14px] text-white">
              {project.projectType}
            </span>
            <span className="rounded-full bg-[#161513]/80 border border-white/20 px-3 py-1 font-['Itim'] text-[14px] text-white">
              {roleConfig[project.role]}
            </span>
            <span className="rounded-full bg-[#1F1F1F] border border-white/20 px-3 py-1 font-['Itim'] text-[14px] text-[#9CA3AF]">
              {categoryConfig[project.category]}
            </span>
            <span className="rounded-full bg-[#161513]/80   px-3 py-1 font-['Itim'] text-[14px] text-white/50">
              {project.year}
            </span>
            {project.hackathon && project.hackathon !== "" && (
              <span className="flex items-center gap-1 rounded-[22px] bg-[#30496b] px-3 py-1 text-white font-['Itim'] text-[14px]">
                <HackathonIcon width={14} height={14} />
                {project.hackathon}
              </span>
            )}
          </div>
        </motion.div>

        <motion.div
          className="self-center overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full"
          />
        </motion.div>

        <div className="flex flex-col w-full gap-8 lg:flex-col">
          <motion.div
            className="flex flex-col flex-1 w-full gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
          >
            <div className="flex flex-col gap-2">
              <h2 className="font-['Itim'] text-[22px] text-white">About</h2>
              <p className="font-['Poppins'] text-[15px] text-[#9CA3AF] leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.problem && (
              <div className="flex flex-col gap-2">
                <h2 className="font-['Itim'] text-[22px] text-white">
                  Problem
                </h2>
                <p className="font-['Poppins'] text-[15px] text-[#9CA3AF] leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <h2 className="font-['Itim'] text-[22px] text-white">Solution</h2>
              <p className="font-['Poppins'] text-[15px] text-[#9CA3AF] leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>

          <motion.aside
            className="flex flex-col w-full gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
          >
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {summaryDetails.map(({ label, value, Icon }) => (
                <div
                  key={label}
                  className="relative min-h-28 overflow-hidden rounded-[20px] border border-white/10 bg-[#1D1D1D] p-6 before:absolute before:-right-3 before:-top-7 before:h-24 before:w-24 before:rounded-full before:bg-white/2.5"
                >
                  <div className="relative z-10 flex flex-col gap-4">
                    <dt className="flex items-center gap-2 font-['Poppins'] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8F8F8F]">
                      <Icon width={20} height={20} aria-hidden="true" />
                      {label}
                    </dt>
                    <dd className="m-0 font-['Itim'] text-[20px] text-white">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <section
              aria-labelledby="technologies-heading"
              className="relative min-h-44 overflow-hidden rounded-[20px] border border-white/10 bg-[#1D1D1D] p-6"
            >
              <div className="pointer-events-none absolute -right-3 -top-7 h-24 w-24 rounded-full bg-white/2.5" />
              <div className="relative z-10 flex flex-col h-full gap-5">
                <h2 className="font-['Itim'] text-[20px] text-white">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <span
                        key={tech.label}
                        className="flex items-center gap-1.5 rounded-full bg-[#303030] px-2.5 py-1.5 font-['Itim'] text-[15px] text-white"
                      >
                        <Icon width={16} height={16} aria-hidden="true" />
                        {tech.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </section>

            <section
              aria-labelledby="links-heading"
              className="relative min-h-44 overflow-hidden rounded-[20px] border border-white/10 bg-[#1D1D1D] p-6"
            >
              <div className="pointer-events-none absolute -right-3 -top-7 h-24 w-24 rounded-full bg-white/2.5" />
              <div className="relative z-10 flex flex-col h-full gap-5">
                <h2 className="font-['Itim'] text-[20px] text-white">Links</h2>
                <div className="flex flex-wrap gap-2">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#303030] px-4 py-2 font-['Poppins'] text-[14px] text-white transition-colors hover:bg-[#3a3a3a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5197ff]"
                    >
                      <LinkIcon width={18} height={18} aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#303030] px-4 py-2 font-['Poppins'] text-[14px] text-white transition-colors hover:bg-[#3a3a3a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5197ff]"
                    >
                      <Github2Icon width={18} height={18} aria-hidden="true" />
                      GitHub Repo
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#303030] px-4 py-2 font-['Poppins'] text-[14px] text-white transition-colors hover:bg-[#3a3a3a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5197ff]"
                    >
                      <FigmaIcon width={18} height={18} aria-hidden="true" />
                      Figma Design
                    </a>
                  )}
                </div>
              </div>
            </section>
          </motion.aside>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="w-full"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-['Poppins'] text-[15px] text-[#9CA3AF] transition-colors duration-300 hover:text-white"
          >
            <ReturnIcon width={18} height={18} />
            Back to Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
