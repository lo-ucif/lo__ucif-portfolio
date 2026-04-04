import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../../constants/data";
import { Github2Icon, LinkIcon } from "../../../constants/Icon";

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
        {projects.map((project, index) => (
          <motion.div
            className="flex flex-col bg-[#1F1F1F] rounded-2xl overflow-hidden max-w-80 w-full h-full gap-3"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut, delay: index * 0.08 }}
          >
            <div className="relative overflow-hidden h-50">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 " />
            </div>
            <div className="flex flex-col items-start self-stretch justify-center gap-3 px-4 py-3">
              <h3 className="text-xl font-semibold text-white ">
                {project.title}
              </h3>
              <p className="text-[#9CA3AF] text-sm  text-left">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <span
                      key={tech.label}
                      className="flex items-center gap-1 rounded-[22px] bg-[#303030] px-2 py-1 text-white font-['Itim'] text-[16px]"
                    >
                      <Icon width={14} height={14} />
                      {tech.label}
                    </span>
                  );
                })}
              </div>

              <div className="flex w-full gap-3">
                <a
                  href={project.liveDemo}
                  className="flex items-center justify-center flex-1 gap-2 px-4 py-1 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon width={20} height={20} />
                  Live
                </a>
                <a
                  href={project.github}
                  className="flex items-center justify-center flex-1 gap-2 px-4 py-1 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github2Icon width={20} height={20} />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
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
        <Link to="/projects">View All</Link>
      </motion.button>
    </section>
  );
}
