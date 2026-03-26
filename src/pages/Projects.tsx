import { motion } from "framer-motion";

const assets = {
  projectCover:
    "https://www.figma.com/api/mcp/asset/19235516-c5d9-4b29-af70-18f78298896b",
  figmaIcon:
    "https://www.figma.com/api/mcp/asset/15721e07-65b9-4f16-a029-3ac61f4303f3",
  linkIcon:
    "https://www.figma.com/api/mcp/asset/50ca5f7d-b638-46be-903b-d49b3fcd63cb",
  githubIcon:
    "https://www.figma.com/api/mcp/asset/ec0d997f-f923-4c73-825b-121ffd708a71",
  reactIcon:
    "https://www.figma.com/api/mcp/asset/1b3504e5-800c-46ff-a9b0-f0ee7e5ed66b",
  jsIcon:
    "https://www.figma.com/api/mcp/asset/696586f8-8c0e-4489-a7a1-669447ccc7cd",
  figmaMiniIcon:
    "https://www.figma.com/api/mcp/asset/76e38f44-0115-4a71-89f5-6f1a550f468a",
};

const projects = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: "Project Title",
  description:
    "Tech stack stack stack stack stack stack stack stack stack stack stack stack stack stack stack stack.",
}));

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  return (
    <div className="min-h-screen px-5 pb-[80px] pt-[20px] text-white sm:px-[40px] lg:px-[80px] min-[601px]:pt-[120px] max-[600px]:pt-[90px]">
      <div className="mx-auto flex min-h-screen flex-col gap-[80px]">
        <main className="flex flex-col items-center gap-[30px]">
          <motion.div
            className="flex w-full max-w-[1000px] flex-col items-center gap-[14px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <h1 className="font-['Poppins'] text-[36px] font-semibold text-white">
              Projects
            </h1>
          </motion.div>

          <div className="flex w-full max-w-[1000px] flex-wrap items-center justify-center gap-[40px]">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className="flex w-[280px] flex-col gap-[12.108px] overflow-hidden rounded-[15.135px] bg-[#262626]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: easeOut, delay: index * 0.08 }}
              >
                <div className="h-[179px] w-full">
                  <motion.img
                    className="h-full w-full object-cover"
                    src={assets.projectCover}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    decoding="async"
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0px 16px 30px -18px rgba(0, 0, 0, 0.7)",
                    }}
                    transition={{ duration: 0.5, ease: easeOut }}
                  />
                </div>

                <div className="flex flex-col gap-[15px] px-[18px] py-[15px]">
                  <div className="flex items-center justify-between">
                    <h2 className="font-['Poppins'] text-[22.4px] font-medium">
                      {project.title}
                    </h2>
                    <motion.img
                      className="h-5 w-5"
                      src={assets.figmaIcon}
                      alt="Figma"
                      loading="lazy"
                      decoding="async"
                      whileHover={{
                        scale: 1.04,
                        boxShadow: "0px 16px 30px -18px rgba(0, 0, 0, 0.7)",
                      }}
                      transition={{ duration: 0.5, ease: easeOut }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[12.133px]">
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
                        alt="Live demo"
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
                        alt="View code"
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

                  <p className="text-[11px] leading-[19.676px] text-[#cccccc]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-[7.467px]">
                    <span className="flex items-center gap-1 rounded-[7.568px] bg-[#303030] px-[6px] py-[4px] text-[7.568px] text-white">
                      <motion.img
                        className="h-[8.173px] w-[9.081px]"
                        src={assets.reactIcon}
                        alt="React"
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
                    <span className="flex items-center gap-1 rounded-[7.568px] bg-[#303030] px-[6px] py-[4px] text-[7.568px] text-white">
                      <motion.img
                        className="h-[9.081px] w-[9.081px]"
                        src={assets.jsIcon}
                        alt="JavaScript"
                        loading="lazy"
                        decoding="async"
                        whileHover={{
                          scale: 1.04,
                          boxShadow: "0px 16px 30px -18px rgba(0, 0, 0, 0.7)",
                        }}
                        transition={{ duration: 0.5, ease: easeOut }}
                      />
                      Java Script
                    </span>
                    <span className="flex items-center gap-1 rounded-[7.568px] bg-[#303030] px-[6px] py-[4px] text-[7.568px] text-white">
                      <motion.img
                        className="h-[10px] w-[10px]"
                        src={assets.figmaMiniIcon}
                        alt="Figma"
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
        </main>
      </div>
    </div>
  );
}
