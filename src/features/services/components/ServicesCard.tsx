import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

interface ServiceItem {
  watermark: string;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    watermark: "01",
    title: "UI/UX Design",
    description:
      "Creating intuitive, visually engaging interfaces that deliver seamless and meaningful user experiences.",
  },
  {
    watermark: "02",
    title: "Web Development",
    description:
      "Building modern, responsive, and high-performance websites and web applications tailored to your needs.",
  },
  {
    watermark: "03",
    title: "Digital Solutions",
    description:
      "Turning business ideas into tailored digital solutions that solve real problems and drive growth.",
  },
];

export function ServicesCard() {
  return (
    <motion.div
      id="services"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="relative w-full max-w-225 text-left my-2"
    >
      {/* Simple Clean Title: Services */}
      <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
        <span className="w-2 h-2 rounded-full bg-[#5197ff] shadow-[0_0_8px_#5197ff]" />
        <h3 className="font-['Itim'] text-[22px] sm:text-[26px] font-bold text-white tracking-wide">
          Services
        </h3>
      </div>

      {/* 3 Columns: No Frame, No Card Background, No Stroke */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.watermark}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: easeOut,
            }}
            className="group relative flex flex-col items-start text-left"
          >
            {/* Giant Ghost Watermark in Background */}
            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-8 -left-3 font-serif text-[115px] sm:text-[135px] font-bold leading-none text-white/[0.04] group-hover:text-[#5197ff]/[0.10] transition-colors duration-500 z-0"
            >
              {service.watermark}
            </span>

            {/* Content: Serif Title + Description */}
            <div className="relative z-10 flex flex-col items-start">
              <h4 className="font-serif text-[28px] sm:text-[32px] font-normal text-white tracking-tight mb-3 group-hover:text-[#5197ff] transition-colors duration-200">
                {service.title}
              </h4>

              <p className="font-['Poppins'] text-[13.5px] sm:text-[14px] leading-[1.7] text-[#9ca3af] group-hover:text-[#d1d5db] transition-colors duration-200">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
