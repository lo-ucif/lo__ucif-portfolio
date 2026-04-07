import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../../constants/data";
import Projectcard from "../../../components/projectcard";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex w-full flex-col items-center gap-7.5 text-center"
    >
      <motion.h2
        className="font-['Itim'] text-[36px] text-white "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center w-full gap-8 max-w-260 h-fit">
        {projects.slice(0, 3).map((project) => (
          <Projectcard
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            liveDemo={project.liveDemo}
            github={project.github}
            figma={project.figma}
          />
        ))}
      </div>

      <motion.button
        className="rounded-[38.182px] border border-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-white transition-colors duration-300 hover:bg-white hover:text-[#161513]"
        type="button"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <Link
          to="/projects"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          View All
        </Link>
      </motion.button>
    </section>
  );
}
