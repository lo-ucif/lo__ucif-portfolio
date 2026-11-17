import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const services = [
  {
    num: "01",
    title: "UI/UX Design",
    description:
      "Creating intuitive, visually engaging interfaces that deliver seamless and meaningful user experiences.",
    gradient: "from-[#5197ff]/25 to-transparent",
    icon: (
      <svg
        className="w-6 h-6 text-[#5197ff]"
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
      "Building modern, responsive, and high-performance websites tailored to your needs.",
    gradient: "from-[#5197ff]/25 to-transparent",
    icon: (
      <svg
        className="w-6 h-6 text-[#5197ff]"
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
      "Turning your business ideas into tailored digital solutions that solve problems and drive growth.",
    gradient: "from-[#5197ff]/25 to-transparent",
    icon: (
      <svg
        className="w-6 h-6 text-[#5197ff]"
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

export function ServicesSection() {
  return (
    <section id="services" className="flex flex-col items-center gap-10 w-full max-w-6xl">
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center gap-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <span className="font-['Itim'] text-[15px] sm:text-[16px] text-[#5197FF] tracking-wider uppercase">
          What I Do
        </span>
        <h2 className="font-['Itim'] text-[36px] sm:text-[44px] text-white">
          Services &amp; Expertise
        </h2>
        <p className="font-['Poppins'] text-[15px] sm:text-[16px] text-[#9CA3AF] max-w-xl">
          Crafting end-to-end digital experiences from initial concepts to scalable, high-performance web products.
        </p>
      </motion.div>

      {/* 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: easeOut }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#1c1b18]/60 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-[#5197ff]/40 hover:bg-[#1f1e1a]/80 hover:shadow-[0_16px_36px_rgba(81,151,255,0.1)]"
          >
            {/* Top ambient glow on hover */}
            <div
              className={`absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            <div>
              {/* Header row: Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-['Itim'] text-[32px] sm:text-[36px] font-bold text-[#5197ff] tracking-tight">
                  {service.num}.
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#5197ff]/10 border border-[#5197ff]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="font-['Itim'] text-[24px] sm:text-[26px] font-bold text-white mb-3 group-hover:text-[#5197ff] transition-colors duration-200">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-['Poppins'] text-[14px] sm:text-[15px] leading-[1.75] text-[#9CA3AF]">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
