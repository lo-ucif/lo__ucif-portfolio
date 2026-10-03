import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../../constants/data";
import Projectcard from "../../../components/projectcard";

const easeOut = [0.22, 1, 0.36, 1] as const;
const featuredDesignProjects = projects
  .filter((project) => project.type === "uiux")
  .slice(0, 3);

type ProjectGroupProps = {
  title: string;
  description: string;
  filter: "development" | "uiux";
  projects: typeof featuredDesignProjects;
};

function ProjectGroup({
  filter,
  projects,
}: ProjectGroupProps) {

  return (
    <section className="flex flex-col items-center w-full gap-5">

      <div className="flex flex-wrap justify-center w-full gap-8 h-fit max-w-260">
        {projects.map((project) => (
          <Projectcard key={project.id} {...project} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <Link
          className="inline-block rounded-[38.182px] border border-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-white transition-colors duration-300 hover:bg-white hover:text-[#161513]"
          to={`/projects?type=${filter}`}
        >
          View All
        </Link>
      </motion.div>
    </section>
  );
}

export function DesignSection() {
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
        Design Projects
      </motion.h2>

      <div className="flex flex-col items-center w-full gap-12">
        <ProjectGroup
          filter="uiux"
          projects={featuredDesignProjects} title={""} description={""}        />
      </div>
    </section>
  );
}
