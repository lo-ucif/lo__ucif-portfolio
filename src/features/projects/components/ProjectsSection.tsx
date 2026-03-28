import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../../constants/data";
import { FigmaIcon } from "../../../constants/Icon";
import { GithubIcon, LinkIcon } from "../../../constants/Icon";
import img01 from "../../../assets/Screenshot 2026-03-15 151330.png";

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
            className="font-['Poppins'] flex flex-col overflow-hidden rounded-[15px] bg-[#303030]  max-w-80"
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut, delay: index * 0.08 }}
          >
            <div className="flex flex-col justify-center gap-1 ">
              <img className="w-full max-h-60" src={img01} />
              <div className="flex flex-col items-start justify-center gap-4 p-4">
                <div className="flex flex-row justify-between w-full ">
                  <div className="text-[22px]">Project Tiltle</div>
                  <FigmaIcon />
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-row items-center gap-2">
                    <LinkIcon />
                    <a
                      href="https://example.com"
                      style={{ textDecoration: "underline" }}
                    >
                      Live Demo
                    </a>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <GithubIcon />
                    <a
                      href="https://example.com"
                      style={{ textDecoration: "underline" }}
                    >
                      View Code
                    </a>
                  </div>
                </div>
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
