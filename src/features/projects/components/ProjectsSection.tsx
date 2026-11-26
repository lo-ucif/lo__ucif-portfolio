import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "@/features/projects/data/projectsData";
import ProjectCard from "@/features/projects/components/ProjectCard";
import { useLanguage } from "@/store/LanguageContext";
import {
  EASE_OUT_EXPO,
  SPRING_INTERACTIVE,
  VIEWPORT_ONCE,
} from "@/constants/motion";

// Featured projects spanning web development, full-stack systems, and UI/UX design
// IDs: 13 (Hafez Platform), 12 (Al-Tabib Al-Hafiz), 3 (AI Matching Platform)
const FEATURED_PROJECT_IDS = [13, 12, 3];
const featuredProjects = FEATURED_PROJECT_IDS.map((id) =>
  projects.find((p) => p.id === id)
).filter((p): p is (typeof projects)[0] => Boolean(p));

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="flex w-full flex-col items-center gap-10 text-center scroll-mt-24"
    >
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
      >
        <h2 className="font-['Itim'] text-[36px] text-white">
          {t.projects.title}
        </h2>
        <p className="font-['Inter'] text-[15px] sm:text-[16px] text-[#9CA3AF]">
          {t.projects.badge}
        </p>
      </motion.div>

      {/* Unified Project Showcase Cards */}
      <div className="flex flex-col items-center gap-16 sm:gap-24 w-full max-w-6xl">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* CTA to View All Projects */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
        className="mt-4"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          transition={SPRING_INTERACTIVE}
        >
          <Link
            className="inline-block rounded-[38.182px] border border-white px-[24px] py-[13px] font-['Inter'] text-[15px] sm:text-[16px] text-white transition-colors duration-300 hover:bg-white hover:text-[#161513]"
            to="/projects"
          >
            {t.projects.viewAllProjects} ({projects.length})
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
