import { motion } from "framer-motion";
import { projects } from "../constants/data";
import Projectcard from "../components/projectcard";
export default function Projects() {
  const easeOut = [0.22, 1, 0.36, 1] as const;
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
      <div className="flex flex-wrap justify-center w-full gap-8 max-w-260 h-fit">
        {projects.map((project) => (
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
    </div>
  );
}
