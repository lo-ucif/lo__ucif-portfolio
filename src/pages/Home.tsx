import { motion } from "framer-motion";
import { TechStackSection } from "../features/skills/components/TechStackSection";
import { ProjectsSection } from "../features/projects/components/ProjectsSection";
import { ContactSection } from "../features/contact/components/ContactSection";
import { GithubIcon } from "../constants/Icon";
import pdf from "../../public/Ahmed_Loucif_CV.pdf";
import myimg from "../assets/profile.webp";
import FloatingBubble from "../components/FloatingBubble";
import { StatusBadge } from "../components/StatusBadge";
import Experience from "../features/certificates/Experience";
import Certificates from "../features/certificates/Certificates";
import { CaseStudiesSection } from "../features/case-studies/components/CaseStudiesSection";
import { ServicesCard } from "../features/services/components/ServicesCard";
import { useLanguage } from "../contexts/LanguageContext";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#161513] px-5 pb-0 pt-5 text-[#e1e1e1] sm:px-10 lg:px-20 min-[601px]:pt-30 max-[600px]:pt-22.5">
      <div className="flex flex-col min-h-screen gap-20 mx-auto">
        <main className="flex flex-col items-center gap-40 max-[600px]:gap-50">
          <section id="home" className="flex flex-col items-center gap-6.25 text-center scroll-mt-24">
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
                    className="h-full w-full object-cover"
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
                    {t.hero.name}
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
                    {t.hero.taglinePrefix} <span className="text-[#5197FF]">{t.hero.taglineHighlight}</span>
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
              {t.hero.roleSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 font-['Itim'] text-[16px] text-[#8491A0] max-[600px]:rounded-[15px] max-[600px]:px-0 max-[600px]:py-px max-[600px]:text-[12px]">
                {t.hero.lastUpdate}
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
                href="https://wa.me/213676244189"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                {t.hero.letsTalk}
              </motion.a>
              <motion.a
                className="flex items-center gap-[8.38px] rounded-[38.182px] border border-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-white transition-colors duration-300 hover:bg-white hover:text-[#161513]"
                href="https://github.com/lo-ucif"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
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
            className="flex flex-col items-center gap-7.5 text-center scroll-mt-24"
          >
            <motion.h2
              className="font-['Itim'] text-[36px] text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              {t.about.title}
            </motion.h2>
            <motion.p
              className="max-w-225 font-['Inter'] text-[17px] leading-[1.6] text-[#e1e1e1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              {t.about.bio}
            </motion.p>

            {/* Services & Expertise Compact Card */}
            <ServicesCard />

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
              {t.about.downloadCV}
            </motion.a>
          </section>

          <Experience />
          <ProjectsSection />
          <CaseStudiesSection />
          <TechStackSection />
          <Certificates />
        </main>

        <ContactSection />
      </div>
      <FloatingBubble
        items={[
          { label: t.floatingBubble.about, id: "about" },
          { label: t.floatingBubble.projects, id: "projects" },
          { label: t.floatingBubble.caseStudies, id: "case-studies" },
          { label: t.floatingBubble.contact, id: "contact" },
        ]}
      />
    </div>
  );
}
