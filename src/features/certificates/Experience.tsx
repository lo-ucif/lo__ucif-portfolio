import { easeOut, motion } from "framer-motion";
import {
  AlgorithmsIcon,
  CIcon,
  CommunityIcon,
  CssIcon,
  DesignSystemsIcon,
  DjangoIcon,
  EntrepreneurshipIcon,
  ExpressjsIcon,
  FigmaIcon,
  HackathonIcon,
  HtmlIcon,
  JavaIcon,
  JavascriptIcon,
  LeadershipIcon,
  MongodbIcon,
  MvpIcon,
  MysqlIcon,
  NextjsIcon,
  NodejsIcon,
  OopIcon,
  PostgreIcon,
  ProblemSolvingIcon,
  PrototypingIcon,
  PythonIcon,
  ReactIcon,
  RestApiIcon,
  TeamworkIcon,
  UiDesignIcon,
  UxDesignIcon,
} from "../../constants/Icon";

const experienceMilestones = [
  {
    num: "01",
    year: "2024",
    title: "Programming Fundamentals",
    description:
      "Building a strong foundation in programming through algorithmic thinking, problem-solving, and object-oriented programming concepts.",
    tech: [
      { label: "Algorithms", icon: AlgorithmsIcon },
      { label: "C", icon: CIcon },
      { label: "Java", icon: JavaIcon },
      { label: "OOP", icon: OopIcon },
    ],
  },
  {
    num: "02",
    year: "2025",
    title: "Front-End Developer",
    description:
      "Building responsive and interactive user interfaces.",
    tech: [
      { label: "HTML", icon: HtmlIcon },
      { label: "CSS", icon: CssIcon },
      { label: "JavaScript", icon: JavascriptIcon },
      { label: "React.js", icon: ReactIcon },
    ],
  },
  {
    num: "03",
    year: "2025",
    title: "UI/UX Designer",
    description:
      "Designing intuitive user experiences and modern digital interfaces.",
    tech: [
      { label: "Figma", icon: FigmaIcon },
      { label: "UI Design", icon: UiDesignIcon },
      { label: "UX Design", icon: UxDesignIcon },
      { label: "Prototyping", icon: PrototypingIcon },
      { label: "Design Systems", icon: DesignSystemsIcon },
    ],
  },
  {
    num: "04",
    year: "2025 – 2026",
    title: "Hackathons & MVP Development",
    description:
      "Collaborating with teams to develop innovative ideas and build functional MVPs.",
    tech: [
      { label: "Hackathons", icon: HackathonIcon },
      { label: "Teamwork", icon: TeamworkIcon },
      { label: "Problem Solving", icon: ProblemSolvingIcon },
      { label: "MVP Development", icon: MvpIcon },
    ],
  },
  {
    num: "05",
    year: "2026",
    title: "MERN Stack Developer",
    description:
      "Developing full-stack web applications using the MERN stack.",
    tech: [
      { label: "MongoDB", icon: MongodbIcon },
      { label: "Express.js", icon: ExpressjsIcon },
      { label: "React.js", icon: ReactIcon },
      { label: "Node.js", icon: NodejsIcon },
    ],
  },
  {
    num: "06",
    year: "2026",
    title: "Backend / Web Developer",
    description:
      "Building backend systems, REST APIs, and database-driven web applications.",
    tech: [
      { label: "Python", icon: PythonIcon },
      { label: "Django", icon: DjangoIcon },
      { label: "SQL", icon: MysqlIcon },
      { label: "PostgreSQL", icon: PostgreIcon },
      { label: "REST API", icon: RestApiIcon },
    ],
  },
  {
    num: "07",
    year: "2026 – Present",
    title: "Co-Founder of Hafez",
    description:
      "Co-founding and developing a digital platform for Quran school management and student progress tracking.",
    tech: [
      { label: "Community Building", icon: CommunityIcon },
      { label: "Product Development", icon: NextjsIcon },
      { label: "Entrepreneurship", icon: EntrepreneurshipIcon },
      { label: "Team Leadership", icon: LeadershipIcon },
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
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[240px] pointer-events-none select-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 240 1400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="exp-vertical-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#5197ff" floodOpacity="0.8" />
                </filter>
              </defs>

              {/* Multi-Strand Ribbon Path with Deeper Organic Curvature */}
              {/* Outer Cyan/Blue Glow Strand */}
              <path
                d="M 119,0 C 119,35 31,45 31,100 C 31,230 209,170 209,300 C 209,430 31,370 31,500 C 31,630 209,570 209,700 C 209,830 31,770 31,900 C 31,1030 209,970 209,1100 C 209,1230 31,1170 31,1300 C 31,1355 121,1365 121,1400"
                fill="none"
                stroke="#5197ff"
                strokeWidth="1.4"
                strokeOpacity="0.45"
              />
              {/* Core Electric Blue Strand with Drop Glow */}
              <path
                d="M 120,0 C 120,35 35,45 35,100 C 35,230 205,170 205,300 C 205,430 35,370 35,500 C 35,630 205,570 205,700 C 205,830 35,770 35,900 C 35,1030 205,970 205,1100 C 205,1230 35,1170 35,1300 C 35,1355 120,1365 120,1400"
                fill="none"
                stroke="#5197ff"
                strokeWidth="2.6"
                filter="url(#exp-vertical-glow)"
              />
              {/* Sharp White Luminous Accent Strand */}
              <path
                d="M 121,0 C 121,35 38,45 38,100 C 38,230 202,170 202,300 C 202,430 38,370 38,500 C 38,630 202,570 202,700 C 202,830 38,770 38,900 C 38,1030 202,970 202,1100 C 202,1230 38,1170 38,1300 C 38,1355 119,1365 119,1400"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.4"
                strokeOpacity="0.9"
              />
            </svg>
          </div>

          {/* Timeline Milestones List with Clean 10px Gap */}
          <div className="relative z-10 flex flex-col gap-[10px] py-4">
            {experienceMilestones.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, ease: easeOut, delay: index * 0.05 }}
                  className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"
                    }`}
                >
                  {/* Glowing Node Positioned Directly on the Wave Apex */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center z-20 pointer-events-none"
                    style={{ left: isLeft ? "calc(50% - 85px)" : "calc(50% + 85px)" }}
                  >
                    <div className="relative flex items-center justify-center w-5.5 h-5.5 rounded-full border-2 border-[#5197ff] bg-[#161513] shadow-[0_0_12px_#5197ff]">
                      <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#5197ff]" />
                    </div>
                  </div>

                  {/* Clean Editorial Text Block */}
                  <div
                    className={`w-full md:w-[42%] lg:w-[43%] flex flex-col items-start text-left ${isLeft ? "md:pr-8 lg:pr-10" : "md:pl-8 lg:pl-10"
                      }`}
                  >
                    {/* Year & Milestone Number Badge */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-['Itim'] text-[14px] sm:text-[15px] font-semibold text-[#5197ff] tracking-wider">
                        {item.year}
                      </span>
                      <span className="text-white/30 text-[13px]">·</span>
                      <span className="font-['Itim'] text-[13px] text-[#8491A0]">
                        {item.num}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="font-['Itim'] text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-white tracking-wide uppercase leading-tight hover:text-[#5197ff] transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Narrative Description */}
                    <p className="mt-1.5 font-['Poppins'] text-[13.5px] sm:text-[14px] leading-[1.65] text-[#b4b4b4]">
                      {item.description}
                    </p>

                    {/* Tech Stack Row */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-2.5 border-t border-white/[0.08] w-full mt-2 font-['Poppins'] text-[12.5px] text-[#a9a9a9]">
                      {item.tech.map((t) => {
                        const Icon = t.icon;
                        return (
                          <div
                            key={t.label}
                            className="flex items-center gap-1.5 text-white/90 whitespace-nowrap"
                          >
                            {Icon && <Icon width={15} height={15} />}
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
        <div className="relative flex flex-col gap-18 sm:gap-12 md:hidden text-left pl-6 py-2">

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
                {/* Year & Milestone Number Badge */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-['Itim'] text-[13px] sm:text-[14px] font-semibold text-[#5197ff] tracking-wider">
                    {item.year}
                  </span>
                  <span className="text-white/30 text-[12px]">·</span>
                  <span className="font-['Itim'] text-[12px] text-[#8491A0]">
                    {item.num}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="font-['Itim'] text-[22px] sm:text-[24px] font-bold text-white tracking-wide uppercase leading-tight">
                  {item.title}
                </h3>

                {/* Narrative Description */}
                <p className="mt-1.5 font-['Poppins'] text-[13.5px] leading-[1.7] text-[#b4b4b4]">
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
                        {Icon && <Icon width={15} height={15} />}
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
