import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants/data";
import Projectcard from "../components/projectcard";
import FloatingBubble, { type BubbleItem } from "../components/FloatingBubble";
import { SiteFooter } from "../components/layout/SiteFooter";

const BUBBLE_NAV: BubbleItem[] = [
  { label: "Home", id: "home" },
  { label: "Top ↑", id: "top" },
];

export default function Projects() {
  const easeOut = [0.22, 1, 0.36, 1] as const;
  const navigate = useNavigate();

  const handleBubbleClick = (item: BubbleItem) => {
    if (item.id === "home") {
      navigate("/");
    } else if (item.id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen bg-[#161513] px-5 pb-0 pt-5 text-white sm:px-10 lg:px-20 min-[601px]:pt-30 max-[600px]:pt-22.5">
      {/* Header */}
      <motion.div
        className="flex flex-col items-center gap-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        <h2 className="font-['Itim'] text-[36px] sm:text-[44px] text-white">
          All Projects
        </h2>
        <p className="font-['Poppins'] text-[15px] sm:text-[16px] text-[#9CA3AF] max-w-xl">
          A unified collection of web applications, full-stack systems, client solutions, and UI/UX design prototypes.
        </p>
      </motion.div>

      {/* Unified Project Showcase Cards (All Projects in One Column) */}
      <div className="flex flex-col items-center gap-16 sm:gap-24 w-full max-w-6xl">
        {projects.map((project) => (
          <Projectcard key={project.id} {...project} />
        ))}
      </div>

      {/* Footer */}
      <div className="w-full mt-16 max-w-6xl">
        <SiteFooter />
      </div>

      {/* Floating Navigation */}
      <FloatingBubble
        items={BUBBLE_NAV}
        onItemClick={handleBubbleClick}
        activeId="all"
      />
    </div>
  );
}
