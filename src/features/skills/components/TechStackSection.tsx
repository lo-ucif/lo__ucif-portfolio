import { motion } from "framer-motion";
import { techGroups } from "../../../constants/data";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function TechStackSection() {
  const mainGroups = techGroups.filter((group) => group.title !== "Other");
  const otherGroup = techGroups.find((group) => group.title === "Other");

  return (
    <section
      id="stack"
      className="flex w-full flex-col items-center gap-7.5 text-center"
    >
      <motion.h2
        className="font-['Itim'] text-[36px] text-[#5197ff]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid w-full grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-5">
        {mainGroups.map((group, groupIndex) => (
          <motion.div
            className="flex flex-col items-center gap-7.5 font-['Itim'] text-[20px]"
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: easeOut,
              delay: groupIndex * 0.08,
            }}
          >
            <h3 className="font-['Poppins'] text-[20px] tracking-[2.4px] text-[#8491a0]">
              {group.title}
            </h3>

            <div className="flex flex-col items-center gap-3.75">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="flex items-center gap-1.5 rounded-[22px] bg-[#303030] px-3 py-2.5 text-white"
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {otherGroup && (
        <motion.div
          className="flex w-[110%] flex-col items-center gap-5 font-['Itim']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <h3 className="font-['Poppins'] text-[20px] tracking-[2.4px] text-[#8491a0]">
            Other
          </h3>

          <div className="w-full overflow-hidden">
            <motion.div
              className="flex w-max items-center gap-3.75"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...otherGroup.items, ...otherGroup.items].map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    className="flex items-center gap-1.5 rounded-[22px] bg-[#303030] px-3 py-2.5 text-white"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
