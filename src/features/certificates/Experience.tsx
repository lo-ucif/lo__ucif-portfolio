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
    title: "Software Engineering Degree",
    description:
      "Focused on core computer science foundations, algorithm optimization, software architecture, and distributed database systems. Applied theoretical principles to practical engineering through rigorous problem-solving, clean code standards, and full-lifecycle software design.",
    tech: [
      { label: "C / C++", icon: CIcon },
      { label: "Java", icon: JavaIcon },
      { label: "SQL & DB", icon: MysqlIcon },
      { label: "Git", icon: GitIcon },
    ],
  },
  {
    num: "02",
    title: "Web Developer & UI/UX Designer",
    description:
      "Architecting and delivering production-ready web applications from initial wireframes to deployed cloud systems. Partnering with clients to build responsive, accessible frontends and scalable backends using React, TypeScript, Next.js, and cohesive design systems.",
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
    title: "Design Team Member & Lead",
    description:
      "Directed visual direction and UI/UX prototyping for student tech initiatives, hackathons, and community workshops. Created end-to-end design assets, brand guidelines, and interactive prototypes that elevated engagement across university tech events.",
    tech: [
      { label: "Figma", icon: FigmaIcon },
      { label: "Community", icon: HackathonIcon },
    ],
  },
  {
    num: "04",
    title: "Hackathon Finalist",
    description:
      "Engineered an AI-driven talent matching platform in a fast-paced 48-hour sprint. Developed automated resume parsing, semantic compatibility scoring, and an intuitive recruiter portal to eliminate manual screening bottlenecks under strict deadlines.",
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "REST API", icon: RestApiIcon },
    ],
  },
  {
    num: "05",
    title: "Full-Stack Hackathon Innovator",
    description:
      "Built and deployed a functional full-stack web application under tight competitive deadlines. Focused on resilient architecture, real-time API integrations, and intuitive user flows to solve real-world logistical challenges with rapid sprint delivery.",
    tech: [
      { label: "Next.js", icon: NextjsIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Node.js", icon: NodejsIcon },
      { label: "REST API", icon: RestApiIcon },
    ],
  },
  {
    num: "06",
    title: "Scaling to Production & E-Commerce",
    description:
      "Engineered a high-performance multi-vendor marketplace with role-based dashboards, automated inventory workflows, and a 58-wilaya dynamic pricing engine. Architected robust microservices and secure database pipelines for high reliability.",
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
      {/* Section Header matching ProjectsSection style */}
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
              <path
                d="M 70,0 C 70,80 25,120 25,240 C 25,380 115,400 115,540 C 115,680 25,720 25,860 C 25,1000 115,1020 115,1160 C 115,1300 25,1340 25,1480 C 25,1600 70,1660 70,1800"
                fill="none"
                stroke="#5197ff"
                strokeWidth="1.2"
                strokeOpacity="0.4"
              />
              <path
                d="M 70,0 C 70,80 28,120 28,240 C 28,380 112,400 112,540 C 112,680 28,720 28,860 C 28,1000 112,1020 112,1160 C 112,1300 28,1340 28,1480 C 28,1600 70,1660 70,1800"
                fill="none"
                stroke="#5197ff"
                strokeWidth="2.5"
                filter="url(#exp-vertical-glow)"
              />
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
          <div className="relative z-10 flex flex-col gap-24 py-6">
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

                  {/* Clean Editorial Text Block (NO CARD, NO PILL BADGE, NO BLUE ORG) */}
                  <div className={`w-full md:w-[45%] flex flex-col items-start text-left ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}>
                    {/* Milestone Title */}
                    <h3 className="font-['Itim'] text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-white tracking-wide uppercase leading-tight hover:text-[#5197ff] transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Optimized Narrative Description */}
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

              {/* Clean Editorial Text Block */}
              <div className="flex flex-col items-start text-left">
                {/* Milestone Title */}
                <h3 className="font-['Itim'] text-[22px] sm:text-[24px] font-bold text-white tracking-wide uppercase leading-tight">
                  {item.title}
                </h3>

                {/* Optimized Narrative Description */}
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
