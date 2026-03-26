import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../../constants/data";
import { assets } from "../../../constants/assets";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex w-full flex-col items-center gap-7.5 text-center"
    >
      <motion.h2
        className="font-['Itim'] text-[36px] text-white max-[600px]:font-['Poppins'] max-[600px]:font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Projects
      </motion.h2>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            className="flex flex-col overflow-hidden rounded-[15.135px] bg-[#303030] max-[600px]:bg-[#262626]"
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut, delay: index * 0.08 }}
          >
            <div className="h-44.75 w-full">
              <motion.img
                className="hidden h-full w-full object-cover max-[600px]:block"
                src={assets.projectShotMobile}
                alt=""
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0px 16px 30px -18px rgba(0, 0, 0, 0.7)",
                }}
                transition={{ duration: 0.5, ease: easeOut }}
              />
              <motion.img
                className="h-full w-full object-cover max-[600px]:hidden"
                src={assets.projectShot}
                alt=""
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0px 16px 30px -18px rgba(0, 0, 0, 0.7)",
                }}
                transition={{ duration: 0.5, ease: easeOut }}
              />
            </div>

            <div className="flex flex-col gap-3.75 px-4.5 py-3.75 text-left">
              <div className="flex items-center justify-between">
                <h3 className="font-['Poppins'] text-[22.4px] text-white">
                  {project.title}
                </h3>
                <motion.img
                  className="h-5 w-5"
                  src={assets.projectTool}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0px 16px 30px -18px rgba(0, 0, 0, 0.7)",
                  }}
                  transition={{ duration: 0.5, ease: easeOut }}
                />
              </div>

              <div className="flex items-center justify-between gap-3 text-[12.133px] text-white">
                <motion.a
                  className="flex items-center gap-[7.568px] underline"
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <motion.img
                    className="h-[15.135px] w-[15.135px]"
                    src={assets.linkIcon}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0px 16px 30px -18px rgba(0, 0, 0, 0.7)",
                    }}
                    transition={{ duration: 0.5, ease: easeOut }}
                  />
                  Live Demo
                </motion.a>
                <motion.a
                  className="flex items-center gap-[7.568px] underline"
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <motion.img
                    className="h-[15.135px] w-[15.135px]"
                    src={assets.githubIcon}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0px 16px 30px -18px rgba(0, 0, 0, 0.7)",
                    }}
                    transition={{ duration: 0.5, ease: easeOut }}
                  />
                  View Code
                </motion.a>
              </div>

              <p className="font-['Poppins'] text-[11px] leading-[19.676px] text-[#ccc]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-[7.467px]">
                <span className="flex items-center gap-1.5 rounded-[7.568px] bg-[#303030] px-[3.784px] py-[3.784px] text-[7.568px] text-white">
                  <motion.img
                    className="h-[9.081px] w-[9.081px]"
                    src={assets.tagReact}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0px 16px 30px -18px rgba(0, 0, 0, 0.7)",
                    }}
                    transition={{ duration: 0.5, ease: easeOut }}
                  />
                  React
                </span>
                <span className="flex items-center gap-1.5 rounded-[7.568px] bg-[#303030] px-[3.784px] py-[3.784px] text-[7.568px] text-white">
                  <motion.img
                    className="h-[9.081px] w-[9.081px]"
                    src={assets.tagJs}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0px 16px 30px -18px rgba(0, 0, 0, 0.7)",
                    }}
                    transition={{ duration: 0.5, ease: easeOut }}
                  />
                  Java script
                </span>
                <span className="flex items-center gap-1.5 rounded-[7.568px] bg-[#303030] px-[3.784px] py-[3.784px] text-[7.568px] text-white">
                  <motion.img
                    className="h-2.5 w-2.5"
                    src={assets.tagFigma}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0px 16px 30px -18px rgba(0, 0, 0, 0.7)",
                    }}
                    transition={{ duration: 0.5, ease: easeOut }}
                  />
                  Figma
                </span>
              </div>
            </div>
          </motion.article>
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
