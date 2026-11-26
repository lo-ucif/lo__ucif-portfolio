import { motion } from "framer-motion";
import { SiteFooter } from "@/layouts/SiteFooter";
import { GmailIcon } from "@/constants/icons";
import { useLanguage } from "@/store/LanguageContext";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  const { t } = useLanguage();

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
            {t.contact.headline}
          </h2>
          <p className="max-w-160 font-['Inter'] text-[15px] sm:text-[17px] leading-[1.6] text-[#a9a9a9]">
            {t.contact.description}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <motion.a
            href="https://wa.me/213676244189"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-[38.182px] border border-white bg-white px-[28px] py-[11px] font-['Inter'] text-[16px] text-[#161513] transition-colors duration-300 hover:bg-transparent hover:text-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {t.contact.letsTalk}
          </motion.a>

          <motion.a
            href="mailto:louciftamer3@gmail.com"
            className="flex items-center gap-2 rounded-[38.182px] border border-white px-[24px] py-[11px] font-['Inter'] text-[16px] text-white transition-colors duration-300 hover:bg-white hover:text-[#161513]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <GmailIcon width={18} height={18} />
            <span>{t.contact.email}</span>
          </motion.a>
        </motion.div>
      </div>

      <div className="w-full mt-20 sm:mt-28">
        <SiteFooter />
      </div>
    </section>
  );
}
