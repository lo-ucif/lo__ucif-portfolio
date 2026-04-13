import { motion } from "framer-motion";
import { TechStackSection } from "../features/skills/components/TechStackSection";
import { ProjectsSection } from "../features/projects/components/ProjectsSection";
import { ContactSection } from "../features/contact/components/ContactSection";
import { GithubIcon } from "../constants/Icon";
import pdf from "../../public/Ahmed_Loucif_CV.pdf";
import myimg from "../assets/portfolio img.webp";
import univimg from "../assets/6.webp";
import FloatingBubble from "../components/FloatingBubble";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#161513] px-5 pb-20 pt-5 text-[#e1e1e1] sm:px-10 lg:px-20 min-[601px]:pt-30 max-[600px]:pt-22.5">
      <div className="flex flex-col min-h-screen gap-20 mx-auto">
        <main className="flex flex-col items-center gap-40 max-[600px]:gap-50">
          <section className="flex flex-col items-center gap-6.25 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              <div className="relative grid h-53.25 w-53.25 place-items-center overflow-hidden rounded-full bg-[#262626]">
                <picture>
                  <source media="(max-width: 600px)" />
                  <motion.img
                    className="h-[200%] w-[200%] object-cover"
                    src={myimg}
                    alt="Ahmed Loucif"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{
                      scale: 1.2,
                    }}
                    whileTap={{ scale: 1.4 }}
                    transition={{ duration: 0.5, ease: easeOut }}
                  />
                </picture>
              </div>
            </motion.div>

            <div className="flex w-full flex-col items-center gap-2.5">
              <div className="flex flex-col items-center">
                <motion.div
                  className="font-['Itim'] text-[64px] text-white max-[600px]:w-82.5 max-[600px]:text-[48px]"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.18,
                        delayChildren: 0.25,
                      },
                    },
                  }}
                >
                  <motion.span
                    className="block"
                    variants={{
                      hidden: { opacity: 0, x: -28 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.65,
                          ease: easeOut,
                          delay: 0.2,
                        },
                      },
                    }}
                  >
                    Ahmed Loucif
                  </motion.span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2.5 font-['Itim'] text-[26px] max-[600px]:text-[19.58px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
                >
                  <span className="text-[#a9a9a9]">Web</span>
                  <span className="text-[#5197ff]">Developer</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: easeOut }}
                whileHover={{
                  scale: 1.2,
                }}
              >
                <div className="inline-flex items-center gap-1.5 rounded-[20px] bg-[#2e2e2e] px-2.5 py-1.5 font-['Itim'] text-[12px] text-white max-[600px]:rounded-[15px] max-[600px]:px-[7.5px] max-[600px]:py-[4.5px] max-[600px]:font-['Poppins'] max-[600px]:text-[7.5px]">
                  <motion.span
                    whileHover={{
                      scale: 1.8,
                    }}
                    className="h-2 w-2 rounded-full bg-[#73ff2d] shadow-[0px_0px_5px_1px_#73ff2d] max-[600px]:h-1.5 max-[600px]:w-1.5 max-[600px]:shadow-[0px_0px_3.75px_0.75px_#73ff2d]"
                  />
                  <span className="max-[600px]:lowercase">
                    Available for work
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.p
              className="max-w-180 font-['Poppins'] text-[16px] leading-[1.6] text-[#e1e1e1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              I build modern and scalable web applications using React,
              TypeScript, Node.js, and MongoDB. I create clean user interfaces
              and efficient backend systems focused on performance and
              reliability.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-[16.76px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              <motion.a
                className="rounded-[38.182px] border border-white bg-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-[#161513] transition-colors duration-300 "
                href="https://mail.google.com/mail/?view=cm&to=louciftamer3@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                className="flex items-center gap-[8.38px] rounded-[38.182px] border border-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-white transition-colors duration-300"
                href="https://github.com/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                Git Hub
                <div>
                  <GithubIcon />
                </div>
              </motion.a>
            </motion.div>
          </section>

          <section
            id="about"
            className="flex flex-col items-center gap-7.5 text-center"
          >
            <motion.h2
              className="font-['Itim'] text-[36px] text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="max-w-225 font-['Inter'] text-[17px] leading-[1.6] text-[#e1e1e1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              Hello! I'm Ahmed Loucif, a passionate Full Stack Web Developer
              specializing in modern web technologies and user-centered design.
              I build fast and scalable web applications using React, Vite,
              TypeScript, Node.js, Express, and MongoDB. I also have a strong
              interest in UI/UX design, which helps me create clean, intuitive,
              and enjoyable user experiences. I enjoy solving complex problems,
              learning new technologies, and continuously improving my skills to
              build better digital products.
            </motion.p>

            <motion.a
              href={pdf}
              download
              className="inline-block rounded-[38.182px] border border-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-white transition-colors duration-300 hover:bg-white hover:text-[#161513]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              Download CV
            </motion.a>
          </section>

          <TechStackSection />
          <ProjectsSection />

          <section className="flex w-full flex-col items-center gap-7.5 text-center">
            <motion.h2
              className="font-['Itim'] text-[36px] text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              Education
            </motion.h2>

            <div className="flex w-full flex-col items-center gap-2.5 p-2.5">
              <motion.picture
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: easeOut }}
              >
                <source media="(max-width: 600px)" srcSet={univimg} />
                <motion.img
                  className="h-8.75 w-8.75"
                  src={univimg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0px 16px 30px -18px rgba(0, 0, 0, 0.7)",
                  }}
                  transition={{ duration: 0.5, ease: easeOut }}
                />
              </motion.picture>

              <motion.div
                className="font-['Poppins'] text-[22px] font-bold text-white max-[600px]:text-[21.74px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: easeOut }}
              >
                <p>Student At University of Constantine 2 Abdelhamid Mehri</p>
                <p>NTIC</p>
              </motion.div>

              <motion.p
                className="font-['Poppins'] text-[14.494px] text-[#a9a9a9] max-[600px]:text-[#8491a0]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: easeOut }}
              >
                2023 - Present
              </motion.p>
            </div>
          </section>
        </main>

        <ContactSection />
        <FloatingBubble />
      </div>
    </div>
  );
}
