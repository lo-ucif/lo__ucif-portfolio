import { easeOut, motion } from "framer-motion";
import { experienceItems } from "../../constants/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex w-full flex-col items-center gap-7.5 text-center"
    >
      <motion.h2
        className="font-['Itim'] text-[36px] text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Experience
      </motion.h2>

      <ol className="relative flex flex-col w-full gap-6 pl-6 text-left border-l max-w-225 border-white/20 sm:pl-8">
        {experienceItems.map((experience, index) => (
          <motion.li
            key={experience.title}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              ease: easeOut,
              delay: index * 0.1,
            }}
          >
            <span
              className="absolute -left-8.25 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#161513] bg-[#5197ff] sm:-left-[41px]"
              aria-hidden="true"
            />
            <article className="rounded-2xl bg-[#1F1F1F] px-5 py-5 sm:px-6">
              <p className="font-['Itim'] text-[16px] text-[#5197ff]">
                {experience.year}
              </p>
              <h3 className="mt-1 font-['Poppins'] text-[20px] font-semibold text-white">
                {experience.title}
              </h3>
              <p className="mt-1 font-['Poppins'] text-sm text-[#a9a9a9]">
                {experience.organization}
              </p>
              <p className="mt-3 font-['Poppins'] text-sm leading-6 text-[#e1e1e1]">
                {experience.description}
              </p>
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
