import { motion } from "framer-motion";
import { SiteFooter } from "../../../components/layout/SiteFooter";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center w-full text-center pt-24 sm:pt-36 pb-0 px-4 scroll-mt-20"
    >
      <div className="flex flex-col items-center gap-8 sm:gap-10 max-w-3xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <h2 className="font-['Itim'] text-[36px] sm:text-[42px] text-white">
            Let's Build Something Together.
          </h2>
          <p className="max-w-160 font-['Poppins'] text-[15px] sm:text-[17px] leading-[1.6] text-[#a9a9a9]">
            Have an idea, a project, or a challenge to solve? Let's connect and turn your vision into a meaningful digital experience with smart solutions and creative design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <motion.a
            href="https://wa.me/213676244189"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-[38.182px] border border-white bg-white px-[28px] py-[11px] font-['Poppins'] text-[16px] text-[#161513] transition-colors duration-300 hover:bg-transparent hover:text-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>

      <div className="w-full mt-20 sm:mt-28">
        <SiteFooter />
      </div>
    </section>
  );
}
