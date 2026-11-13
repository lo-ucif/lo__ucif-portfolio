import { motion } from "framer-motion";
import { SiteFooter } from "../../../components/layout/SiteFooter";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center w-full gap-8 text-center pt-10"
    >
      <motion.div
        className="flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h2 className="font-['Itim'] text-[36px] text-white">
          Let's Build Something Together.
        </h2>
        <p className="max-w-160 font-['Poppins'] text-[15px] sm:text-[17px] leading-[1.6] text-[#a9a9a9]">
          Have an idea, a project, or an opportunity in mind? I'd love to hear about it. Let's connect and create something meaningful.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <motion.a
          href="mailto:louciftamer3@gmail.com"
          className="inline-block rounded-[38.182px] border border-white bg-white px-[28px] py-[11px] font-['Poppins'] text-[16px] text-[#161513] transition-colors duration-300 hover:bg-transparent hover:text-white"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          Let's Talk
        </motion.a>
      </motion.div>

      <div className="w-full mt-6">
        <SiteFooter />
      </div>
    </footer>
  );
}
