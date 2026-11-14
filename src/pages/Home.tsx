import { motion } from "framer-motion";
import { TechStackSection } from "../features/skills/components/TechStackSection";
import { ProjectsSection } from "../features/projects/components/ProjectsSection";
import { ContactSection } from "../features/contact/components/ContactSection";
import { GithubIcon } from "../constants/Icon";
import pdf from "../../public/Ahmed_Loucif_CV.pdf";
import myimg from "../assets/portfolio img.webp";
import FloatingBubble from "../components/FloatingBubble";
import { StatusBadge } from "../components/StatusBadge";
import Student from "../features/student/Student";
import Experience from "../features/certificates/Experience";
import Certificates from "../features/certificates/Certificates";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#161513] px-5 pb-0 pt-5 text-[#e1e1e1] sm:px-10 lg:px-20 min-[601px]:pt-30 max-[600px]:pt-22.5">
      <div className="flex flex-col min-h-screen gap-20 mx-auto">
        <main className="flex flex-col items-center gap-40 max-[600px]:gap-50">
          <section id="home" className="flex flex-col items-center gap-6.25 text-center">
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
                  <span className="text-[#a9a9a9]">
                    Designing Experiences & <span className="text-[#5197FF]">Engineering Solutions.</span>
                  </span>
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
                <StatusBadge />
              </motion.div>
            </div>

            <motion.p
              className="max-w-180 font-['Poppins'] text-[16px] leading-[1.6] text-[#e1e1e1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              Software Engineering Student | Web Developer | UI/UX Designer <br /> building modern digital experiences through , clean design, creative thinking, innovative development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-1.5  px-2.5 py-1.5 font-['Itim'] text-[16px] text-[#8491A0] max-[600px]:rounded-[15px] max-[600px]:px-0 max-[600px]:py-px max-[600px]:text-[12px]">
                Software Engineering Student · Available for Opportunities
              </div>
            </motion.div>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-[16.76px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              <motion.a
                className="rounded-[38.182px] border border-white bg-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-[#161513] transition-colors duration-300 hover:bg-transparent hover:text-white"
                href="mailto:louciftamer3@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                Let's Talk
              </motion.a>
              <motion.a
                className="flex items-center gap-[8.38px] rounded-[38.182px] border border-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-white transition-colors duration-300 hover:bg-white hover:text-[#161513]"
                href="https://github.com/lo-ucif"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                GitHub
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
              A Little About Me
            </motion.h2>
            <motion.p
              className="max-w-225 font-['Inter'] text-[17px] leading-[1.6] text-[#e1e1e1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              I'm a Software Engineering student with a passion for web development and UI/UX design. I enjoy solving problems, exploring new technologies, and transforming complex ideas into simple, intuitive, and functional digital products. My approach combines creative thinking with technical skills to build experiences that are both visually appealing and technically reliable.
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
          <Experience />
          <ProjectsSection />
          <Certificates />
        </main>

        <Student />

        <ContactSection />
        <FloatingBubble
          items={[
            { label: "About", id: "about" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" },
          ]}
        />
      </div>
    </div>
  );
}
