import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../../constants/data";
import { GithubIcon, LinkIcon } from "../../../constants/Icon";

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

      <div className="flex flex-wrap items-center justify-center w-full gap-8 max-w-260">
        {projects.map((project, index) => (
          <motion.div
            className="project-card bg-[#303030] border border-white/10 rounded-xl overflow-hidden max-w-80 w-full"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut, delay: index * 0.08 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#303030] to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-[#9CA3AF] text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <span
                      key={tech.label}
                      className="flex items-center gap-1.5 px-2 py-1 text-xs rounded-md bg-[#FF4D00]/10 text-[#FF4D00]"
                    >
                      <Icon />
                      {tech.label}
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.liveDemo}
                  className="flex-1 border border-white/50 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 text-sm hover:bg-[#FF4D00]/10 hover:text-[#FF4D00] hover:border-[#FF4D00]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                  Live
                </a>
                <a
                  href={project.github}
                  className="flex-1 border border-white/50 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 text-sm hover:bg-[#FF4D00]/10 hover:text-[#FF4D00] hover:border-[#FF4D00]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
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
        transition={{ duration: 0.18, ease: "easeOut" }}    >
        <Link to="/projects">View All</Link>
      </motion.button>
    </section>
  );
}
