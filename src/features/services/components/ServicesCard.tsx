import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const services = [
  {
    num: "01",
    title: "UI/UX Design",
    description:
      "Creating intuitive, visually engaging interfaces that deliver seamless and meaningful user experiences.",
    icon: (
      <svg
        className="w-5 h-5 text-[#5197ff]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "Building modern, responsive, and high-performance websites and web applications.",
    icon: (
      <svg
        className="w-5 h-5 text-[#5197ff]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Digital Solutions",
    description:
      "Turning business ideas into tailored digital solutions that solve real problems and drive growth.",
    icon: (
      <svg
        className="w-5 h-5 text-[#5197ff]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
];

export function ServicesCard() {
  return (
    <motion.div
      id="services"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="w-full max-w-225 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#1c1b18]/70 p-5 sm:p-7 backdrop-blur-md text-left transition-all duration-300 hover:border-[#5197ff]/30 shadow-lg shadow-black/25"
    >
      {/* Top Header Row inside the card */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#5197ff] shadow-[0_0_8px_#5197ff]" />
          <h3 className="font-['Itim'] text-[20px] sm:text-[22px] font-semibold text-white tracking-wide">
            Services &amp; Expertise
          </h3>
        </div>
        <span className="font-['Poppins'] text-[11px] sm:text-[12px] font-medium uppercase tracking-wider text-[#5197ff] bg-[#5197ff]/10 border border-[#5197ff]/20 px-2.5 py-0.5 rounded-full">
          What I Do
        </span>
      </div>

      {/* 3 Compact Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
        {services.map((service) => (
          <div
            key={service.num}
            className="group/item flex flex-col justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#5197ff]/30 hover:bg-[#5197ff]/[0.03] transition-all duration-200"
          >
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#5197ff]/10 border border-[#5197ff]/20 flex items-center justify-center text-[#5197ff] shrink-0 transition-transform duration-200 group-hover/item:scale-110">
                  {service.icon}
                </div>
                <h4 className="font-['Itim'] text-[17px] sm:text-[18px] font-semibold text-white group-hover/item:text-[#5197ff] transition-colors duration-200">
                  {service.title}
                </h4>
              </div>
              <p className="font-['Poppins'] text-[13px] leading-[1.65] text-[#9CA3AF]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
