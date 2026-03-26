import { motion } from "framer-motion";
import { techGroups } from "../../../constants/data";

export function TechStackSection() {
  const mainGroups = techGroups.filter((group) => group.title !== "Other");
  const otherGroup = techGroups.find((group) => group.title === "Other");

  return (
    <section
      id="stack"
      className="flex w-full flex-col items-center gap-[30px] text-center"
    >
      <h2 className="font-['Itim'] text-[36px] text-[#5197ff]">Tech Stack</h2>

      <div className="grid w-full grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-5">
        {mainGroups.map((group) => (
          <div
            className="flex font-['Itim'] text-[20px] flex-col items-center gap-7.5"
            key={group.title}
          >
            <h3 className="font-['Poppins'] text-[20px] tracking-[2.4px] text-[#8491a0]">
              {group.title}
            </h3>

            <div className="flex flex-col items-center gap-3.75">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="flex items-center gap-2 rounded-[22px] bg-[#303030] px-3 py-2.5 text-white hover:scale-105 transition"
                    key={item.label}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {otherGroup && (
        <div className="flex flex-col items-center w-full gap-5">
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
                  <div
                    key={i}
                    className="flex items-center gap-[8px] rounded-[22px] bg-[#303030] px-[12px] py-[10px] text-white"
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
