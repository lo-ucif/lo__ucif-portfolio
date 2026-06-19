import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useMemo, useState } from "react";
import { projects, type ProjectType } from "../constants/data";
import Projectcard from "../components/projectcard";
import FloatingBubble, { type BubbleItem } from "../components/FloatingBubble";

type FilterId = "all" | ProjectType;

const FILTER_ITEMS: BubbleItem[] = [
  { label: "All", id: "all" },
  { label: "Development", id: "development" },
  { label: "UI UX Design", id: "uiux" },
];

export default function Projects() {
  const easeOut = [0.22, 1, 0.36, 1] as const;
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  const handleBubbleClick = (item: BubbleItem) => {
    setFilter(item.id as FilterId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center min-h-screen  bg-[#161513] px-5 pb-20 pt-5 text-white sm:px-10 lg:px-20 min-[601px]:pt-30 max-[600px]:pt-22.5">
      <motion.h2
        className="font-['Itim'] text-[36px] text-white "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Projects
      </motion.h2>

      {/* <motion.p
        className="font-['Poppins'] text-[14px] text-[#a9a9a9]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: easeOut, delay: 0.1 }}
      >
        Showing{" "}
        <span className="font-semibold text-white">{filtered.length}</span>{" "}
        {filter === "all"
          ? "projects"
          : filter === "development"
            ? "development projects"
            : "UI/UX design projects"}
      </motion.p> */}

      <LayoutGroup>
        <motion.div
          layout
          className="flex flex-wrap justify-center w-full gap-8 max-w-260 h-fit"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -16 }}
                transition={{ duration: 0.35, ease: easeOut }}
              >
                <Projectcard
                  key={project.id}
                  id={project.id}
                  type={project.type}
                  title={project.title}
                  problem={project.problem}
                  description={project.description}
                  image={project.image}
                  tech={project.tech}
                  liveDemo={project.liveDemo}
                  github={project.github}
                  figma={project.figma}
                  hackathon={project.hackathon}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <motion.p
          className="font-['Poppins'] text-[16px] text-[#9CA3AF] mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          No projects found
        </motion.p>
      )}

      <FloatingBubble
        items={FILTER_ITEMS}
        onItemClick={handleBubbleClick}
        activeId={filter}
      />
    </div>
  );
}
