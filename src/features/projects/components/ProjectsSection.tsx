import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../../constants/data";
import Projectcard from "../../../components/projectcard";

const easeOut = [0.22, 1, 0.36, 1] as const;

// Featured projects spanning full-stack development and UI/UX design (unified showcase)
// IDs: 3 (AI Matching Platform), 2 (Rokhsa Platform), 4 (Works Exhibition), 1 (Al-Tabib Al-Hafed), 9 (Rihla Web)
const FEATURED_PROJECT_IDS = [3, 2, 4, 1, 9];
const featuredProjects = FEATURED_PROJECT_IDS.map((id) =>
  projects.find((p) => p.id === id)
).filter((p): p is (typeof projects)[0] => Boolean(p));

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex w-full flex-col items-center gap-10 text-center"
    >
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h2 className="font-['Itim'] text-[36px] text-white">
          A Selection of My Recent Work
        </h2>
        <p className="font-['Poppins'] text-[15px] sm:text-[16px] text-[#9CA3AF]">
          Turning Concepts Into Real-World Solutions.
        </p>
      </motion.div>

      {/* Unified Project Showcase Cards */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 w-full max-w-6xl">
        {featuredProjects.map((project) => (
          <Projectcard key={project.id} {...project} />
        ))}
      </div>

      {/* CTA to View All Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="mt-4"
      >
        <Link
          className="inline-block rounded-[38.182px] border border-white px-[24px] py-[13px] font-['Poppins'] text-[15px] sm:text-[16px] text-white transition-colors duration-300 hover:bg-white hover:text-[#161513]"
          to="/projects"
        >
          View All Projects ({projects.length})
        </Link>
      </motion.div>
    </section>
  );
}
