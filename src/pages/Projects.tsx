import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects, ProjectCard } from "@/features/projects";
import FloatingBubble, { type BubbleItem } from "@/components/FloatingBubble";
import { SiteFooter } from "@/layouts/SiteFooter";
import { useLanguage } from "@/store/LanguageContext";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/constants/motion";

export default function Projects() {
  const navigate = useNavigate();
  const { isArabic } = useLanguage();

  const bubbleNav: BubbleItem[] = [
    { label: isArabic ? "الرئيسية" : "Home", id: "home" },
    { label: isArabic ? "للأعلى ↑" : "Top ↑", id: "top" },
  ];

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
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      >
        <h2 className="font-['Itim'] text-[36px] sm:text-[44px] text-white">
          {isArabic ? "جميع المشاريع" : "All Projects"}
        </h2>
        <p className="font-['Inter'] text-[15px] sm:text-[16px] text-[#9CA3AF] max-w-xl">
          {isArabic
            ? "مجموعة متكاملة من تطبيقات الويب، الحلول الرقمية، وتصاميم واجهات المستخدم."
            : "A unified collection of web applications, full-stack systems, client solutions, and UI/UX design prototypes."}
        </p>
      </motion.div>

      {/* Unified Project Showcase Cards (All Projects in One Column) */}
      <div className="flex flex-col items-center gap-16 sm:gap-24 w-full max-w-6xl">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* Footer */}
      <div className="w-full mt-16 max-w-6xl">
        <SiteFooter />
      </div>

      {/* Floating Navigation */}
      <FloatingBubble
        items={bubbleNav}
        onItemClick={handleBubbleClick}
        activeId="all"
      />
    </div>
  );
}
