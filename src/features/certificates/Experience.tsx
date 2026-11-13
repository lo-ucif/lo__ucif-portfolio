import { easeOut, motion } from "framer-motion";
import {
  CIcon,
  FigmaIcon,
  GitIcon,
  HackathonIcon,
  JavaIcon,
  LinuxIcon,
  MysqlIcon,
  NextjsIcon,
  NodejsIcon,
  PostgreIcon,
  ReactIcon,
  RestApiIcon,
  TaillwindIcon,
  TypescriptIcon,
} from "../../constants/Icon";

export const experienceMilestones = [
  {
    num: "01",
    badge: "University Degree",
    period: "2023 - Present",
    title: "Software Engineering Degree",
    organization: "University of Constantine 2 (NTIC)",
    description:
      "Mastering core computer science algorithms, complex data structures, software architecture, object-oriented design, and database systems with high academic and practical discipline.",
    tech: [
      { label: "C / C++", icon: CIcon },
      { label: "Java", icon: JavaIcon },
      { label: "SQL & DB", icon: MysqlIcon },
      { label: "Git", icon: GitIcon },
    ],
  },
  {
    num: "02",
    badge: "Client & Freelance",
    period: "2025 - Present",
    title: "Web Developer & UI/UX Designer",
    organization: "Independent & Client Projects",
    description:
      "Designing and architecting modern full-stack web applications. Collaborating directly with clients to build digital solutions with React, TypeScript, Next.js, and Figma — from wireframes and design systems to deployed production products.",
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "Next.js", icon: NextjsIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "Figma", icon: FigmaIcon },
    ],
  },
  {
    num: "03",
    badge: "Tech Community",
    period: "2025 - 2026",
    title: "Design Team Member & Lead",
    organization: "School of AI Bejaia",
    description:
      "Directing visual identity, UI prototyping, event branding, and technical workshops across tech student communities, supporting club activities and community tech growth.",
    tech: [
      { label: "Figma", icon: FigmaIcon },
      { label: "Community", icon: HackathonIcon },
    ],
  },
  {
    num: "04",
    badge: "Hackathon Finalist",
    period: "2026",
    title: "Hackathon Finalist",
    organization: "Automate & Innovate Hackathon",
    description:
      "Engineered an automated AI-powered talent matching platform MVP within a 48-hour intensive sprint. Built automated screening workflows, match compatibility scoring, and intuitive recruiter dashboards under strict competition deadlines.",
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "REST API", icon: RestApiIcon },
    ],
  },
  {
    num: "05",
    badge: "Hackathon Finalist",
    period: "2026",
    title: "Full-Stack Hackathon Innovator",
    organization: "W-Hackathon",
    description:
      "Delivered smart, functional web MVPs and digital solutions with rapid real-world deployment under competitive hackathon pressure and real-time team collaboration.",
    tech: [
      { label: "Next.js", icon: NextjsIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Node.js", icon: NodejsIcon },
      { label: "REST API", icon: RestApiIcon },
    ],
  },
  {
    num: "06",
    badge: "Production Architecture",
    period: "Present & Future",
    title: "Scaling to Production & E-Commerce",
    organization: "Havana Buy & Modern Platforms",
    description:
      "Architecting scalable multi-vendor marketplaces with NestJS, Prisma, Docker, and PostgreSQL. Integrating physical warehouse verification steps and multi-wilaya dynamic pricing across all 58 wilayas.",
    tech: [
      { label: "Next.js", icon: NextjsIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "PostgreSQL", icon: PostgreIcon },
      { label: "Cloud & Linux", icon: LinuxIcon },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex w-full flex-col items-center gap-12 text-center"
    >
      {/* Section Header with exact styling matching ProjectsSection */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h2 className="font-['Itim'] text-[36px] text-white">
          Developer &amp; Designer
        </h2>
        <p className="font-['Poppins'] text-[15px] sm:text-[16px] text-[#9CA3AF]">
          A continuous path of engineering scalable software, crafting user-centered interfaces, and building hackathon MVPs.
        </p>
      </motion.div>

      {/* Main Vertical Timeline Container */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* ======================================================== */}
        {/* DESKTOP ALTERNATING TIMELINE WITH WINDING PATH (>= md)   */}
        {/* ======================================================== */}
        <div className="relative hidden md:block">
          
          {/* Central Vertical Multi-Strand Curved Ribbon Path */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[140px] pointer-events-none select-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 140 1800"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="exp-vertical-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#5197ff" floodOpacity="0.75" />
                </filter>
              </defs>

              {/* Multi-Strand Ribbon Path */}
              {/* Outer Glow Line */}
              <path
                d="M 70,0 C 70,80 25,120 25,240 C 25,380 115,400 115,540 C 115,680 25,720 25,860 C 25,1000 115,1020 115,1160 C 115,1300 25,1340 25,1480 C 25,1600 70,1660 70,1800"
                fill="none"
                stroke="#5197ff"
                strokeWidth="1.2"
                strokeOpacity="0.4"
              />

              {/* Core Electric Blue Line */}
              <path
                d="M 70,0 C 70,80 28,120 28,240 C 28,380 112,400 112,540 C 112,680 28,720 28,860 C 28,1000 112,1020 112,1160 C 112,1300 28,1340 28,1480 C 28,1600 70,1660 70,1800"
                fill="none"
                stroke="#5197ff"
                strokeWidth="2.5"
                filter="url(#exp-vertical-glow)"
              />

              {/* Bright White Accent Strand */}
              <path
                d="M 70,0 C 70,80 32,120 32,240 C 32,380 108,400 108,540 C 108,680 32,720 32,860 C 32,1000 108,1020 108,1160 C 108,1300 32,1340 32,1480 C 32,1600 70,1660 70,1800"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeOpacity="0.85"
              />
            </svg>
          </div>

          {/* Timeline Milestones List */}
          <div className="relative z-10 flex flex-col gap-20 py-8">
            {experienceMilestones.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, ease: easeOut, delay: index * 0.08 }}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Glowing Node on Central Axis */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="relative flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#5197ff] bg-[#161513] shadow-[0_0_12px_#5197ff] transition-transform duration-300 hover:scale-125">
                      <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#5197ff]" />
                    </div>
                  </div>

                  {/* Clean Editorial Text Block (NO CARD CONTAINER, NO BORDER) */}
                  <div className={`w-full md:w-[45%] flex flex-col items-start text-left ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}>
                    {/* Status Badge */}
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center rounded-[22px] bg-[#30496b] px-3.5 py-1 font-['Itim'] text-[14px] sm:text-[15px] text-white">
                        <span>{item.badge}</span>
                      </span>
                      <span className="font-['Itim'] text-[13px] text-white/60">
                        {item.period}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="mt-3 font-['Itim'] text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-white tracking-wide uppercase leading-tight hover:text-[#5197ff] transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Organization Subtitle */}
                    <p className="mt-1 font-['Itim'] text-[15px] sm:text-[16px] text-[#5197ff] font-medium">
                      {item.organization}
                    </p>

                    {/* Narrative Description */}
                    <p className="mt-2.5 font-['Poppins'] text-[14px] sm:text-[15px] leading-[1.75] text-[#b4b4b4]">
                      {item.description}
                    </p>

                    {/* Tech Stack Row */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3.5 border-t border-white/[0.08] w-full mt-2 font-['Poppins'] text-[13px] text-[#a9a9a9]">
                      {item.tech.map((t) => {
                        const Icon = t.icon;
                        return (
                          <div
                            key={t.label}
                            className="flex items-center gap-1.5 text-white/90 whitespace-nowrap"
                          >
                            <Icon width={16} height={16} />
                            <span>{t.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE TIMELINE WITH LEFT WINDING PATH (< md)            */}
        {/* ======================================================== */}
        <div className="relative flex flex-col gap-12 md:hidden text-left pl-6">
          
          {/* Vertical Multi-Strand Guide Line on Left */}
          <div className="absolute top-2 bottom-4 left-2 w-[2px] bg-gradient-to-b from-[#5197ff] via-[#ffffff] to-[#5197ff] shadow-[0_0_10px_#5197ff]" />

          {experienceMilestones.map((item, index) => (
            <motion.div
              key={`mob-${item.num}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: easeOut, delay: index * 0.06 }}
              className="relative pl-6"
            >
              {/* Glowing Node on Left Axis */}
              <div className="absolute -left-[23px] top-1.5 flex items-center justify-center w-4.5 h-4.5 rounded-full border-2 border-[#5197ff] bg-[#161513] shadow-[0_0_8px_#5197ff]">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Clean Editorial Text Block (NO CARD CONTAINER, NO BORDER) */}
              <div className="flex flex-col items-start text-left">
                {/* Status Badge */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-[22px] bg-[#30496b] px-3 py-0.5 font-['Itim'] text-[13px] text-white">
                    <span>{item.badge}</span>
                  </span>
                  <span className="font-['Itim'] text-xs text-white/60">
                    {item.period}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="mt-2 font-['Itim'] text-[22px] sm:text-[24px] font-bold text-white tracking-wide uppercase leading-tight">
                  {item.title}
                </h3>

                {/* Organization Subtitle */}
                <p className="mt-0.5 font-['Itim'] text-[14px] text-[#5197ff]">
                  {item.organization}
                </p>

                {/* Narrative Description */}
                <p className="mt-2 font-['Poppins'] text-[13.5px] leading-[1.7] text-[#b4b4b4]">
                  {item.description}
                </p>

                {/* Tech Stack Row */}
                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/[0.08] w-full mt-2 font-['Poppins'] text-[12px] text-[#a9a9a9]">
                  {item.tech.map((t) => {
                    const Icon = t.icon;
                    return (
                      <div
                        key={t.label}
                        className="flex items-center gap-1.5 text-white/90 whitespace-nowrap"
                      >
                        <Icon width={15} height={15} />
                        <span>{t.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
