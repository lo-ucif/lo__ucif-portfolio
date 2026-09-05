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
    width="25"
    height="25"
    viewBox="0 0 30 30"
    fill="none"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.75 5.0225C8.075 5.05125 7.59 5.115 7.16125 5.26C6.42798 5.50552 5.76165 5.91777 5.21464 6.46435C4.66763 7.01092 4.25485 7.67693 4.00875 8.41C3.75 9.18625 3.75 10.1438 3.75 12.0613C3.75 12.18 3.75 12.24 3.76625 12.2875C3.7816 12.3335 3.80743 12.3753 3.84171 12.4095C3.87598 12.4438 3.91777 12.4697 3.96375 12.485C4.01125 12.5012 4.07125 12.5013 4.19125 12.5013H25.8087C25.9287 12.5013 25.9888 12.5012 26.0363 12.485C26.0822 12.4697 26.124 12.4438 26.1583 12.4095C26.1926 12.3753 26.2184 12.3335 26.2337 12.2875C26.25 12.2387 26.25 12.1788 26.25 12.0588C26.25 10.1425 26.25 9.18375 25.9912 8.41125C25.7455 7.67771 25.3328 7.01121 24.7858 6.46418C24.2388 5.91715 23.5723 5.50452 22.8387 5.25875C22.41 5.115 21.9237 5.05125 21.25 5.0225V8.125C21.25 8.62228 21.0525 9.09919 20.7008 9.45083C20.3492 9.80246 19.8723 10 19.375 10C18.8777 10 18.4008 9.80246 18.0492 9.45083C17.6975 9.09919 17.5 8.62228 17.5 8.125V5H12.5V8.125C12.5 8.62228 12.3025 9.09919 11.9508 9.45083C11.5992 9.80246 11.1223 10 10.625 10C10.1277 10 9.65081 9.80246 9.29917 9.45083C8.94754 9.09919 8.75 8.62228 8.75 8.125V5.0225Z"
      fill="#4176C3"
    />
    <path
      d="M3.75 14.375C3.75 14.08 3.75 13.9325 3.84125 13.8412C3.9325 13.75 4.08 13.75 4.375 13.75H25.625C25.92 13.75 26.0675 13.75 26.1588 13.8412C26.25 13.9325 26.25 14.08 26.25 14.375V15C26.25 19.7137 26.25 22.0712 24.785 23.535C23.32 24.9987 20.9637 25 16.25 25H13.75C9.03625 25 6.67875 25 5.215 23.535C3.75125 22.07 3.75 19.7137 3.75 15V14.375Z"
      fill="#4176C3"
    />
    <path
      d="M10.625 3.125V8.125M19.375 3.125V8.125"
      stroke="#4176C3"
      stroke-width="1.25"
      stroke-linecap="round"
    />
  </svg>
);



const TagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 30 30"
    fill="none"
    {...props}
  >
    <path
      d="M17.7691 5.13251L12.2291 24.8675M8.12406 9.69626L2.82031 15L8.12406 20.3038M21.8741 9.69626L27.1778 15L21.8741 20.3038"
      stroke="#4176C3"
      stroke-width="3.75"
      stroke-linecap="round"
      stroke-linejoin="round"
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
    { label: "role", value: roleConfig[project.role], Icon: CalendarIcon },
    { label: "Year", value: project.year, Icon: CalendarIcon },
    { label: "Status", value: project.status, Icon: StatusIcon },
    { label: "Team", value: project.team, Icon: TagIcon },
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
                  className="relative min-h-28 overflow-hidden rounded-[20px] border border-white/10 bg-[#1D1D1D] p-6 before:absolute before:-right-3 before:-top-7 before:h-24 before:w-24 before:rounded-full before:bg-white/[0.025]"
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

            <div className="flex flex-col gap-4 rounded-2xl bg-[#1F1F1F] p-5">
              <h2 className="font-['Itim'] text-[20px] text-white">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <span
                      key={tech.label}
                      className="flex items-center gap-1 rounded-[22px] bg-[#303030] px-2.5 py-1 text-white font-['Itim'] text-[15px]"
                    >
                      <Icon width={15} height={15} />
                      {tech.label}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-2xl bg-[#1F1F1F] p-5 ">
              <h2 className="font-['Itim'] text-[20px] text-white">Links</h2>
              <div className="flex flex-row items-center justify-center gap-3 ">
                {project.liveDemo && project.liveDemo !== "" && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-3 rounded-xl bg-[#303030] px-4 py-2.5 transition-colors duration-300 hover:bg-[#3a3a3a] w-full"
                  >
                    <LinkIcon width={18} height={18} />
                    <span className="font-['Poppins'] text-[15px] text-white">
                      Live Demo
                    </span>
                  </a>
                )}
                {project.github && project.github !== "" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center items-center gap-3 rounded-xl bg-[#303030] px-4 py-2.5 transition-colors duration-300 hover:bg-[#3a3a3a]"
                  >
                    <Github2Icon width={18} height={18} />
                    <span className="font-['Poppins'] text-[15px] text-white">
                      GitHub Repo
                    </span>
                  </a>
                )}
                {project.figma && project.figma !== "" && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center items-center gap-3 rounded-xl bg-[#303030] px-4 py-2.5 transition-colors duration-300 hover:bg-[#3a3a3a] "
                  >
                    <FigmaIcon width={18} height={18} />
                    <span className="font-['Poppins'] text-[15px] text-white">
                      Figma Design
                    </span>
                  </a>
                )}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
