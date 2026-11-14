import { motion } from "framer-motion";
import { skillCategories } from "../../../constants/data";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function TechStackSection() {
  return (
    <section
      id="stack"
      className="flex w-full flex-col items-center gap-10 sm:gap-12 text-center"
    >
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h2 className="font-['Itim'] text-[36px] sm:text-[40px] text-white">
          Skills &amp; Technologies
        </h2>
        <p className="font-['Itim'] text-[16px] sm:text-[17px] text-[#A9A9A9] max-w-2xl">
          A structured breakdown of my technical stack, architecture patterns, and engineering workflow.
        </p>
      </motion.div>

      {/* 4 Architecture Categories without card background or stroke */}
      <div className="grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 sm:gap-y-12 text-left">
        {skillCategories.map((category, groupIndex) => (
          <motion.div
            key={category.title}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              ease: easeOut,
              delay: groupIndex * 0.08,
            }}
          >
            <div>
              {/* Category Title in Itim */}
              <h3 className="font-['Itim'] text-[24px] sm:text-[26px] text-white">
                {category.title}
              </h3>
              {/* Category Subtitle in Itim */}
              <p className="font-['Itim'] text-[15px] sm:text-[16px] leading-relaxed text-[#A9A9A9] mt-1">
                {category.description}
              </p>
            </div>

            {/* Skill Pills matching the last card style */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
              {category.items.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-[22px] bg-[#303030] px-3.5 py-2 text-white font-['Itim'] text-[15px] sm:text-[16px] transition-colors duration-200 hover:bg-[#3d3d3d] cursor-default"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                      <Icon
                        width={20}
                        height={20}
                        className="max-h-5 max-w-5 shrink-0 object-contain"
                      />
                    </div>
                    <span className="whitespace-nowrap">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
