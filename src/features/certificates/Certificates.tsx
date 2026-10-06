import { easeOut, motion } from "framer-motion";
import { certificateItems } from "../../constants/data";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="flex w-full flex-col items-center gap-7.5 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <motion.h2
          className="font-['Itim'] text-[36px] text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          Certificates & Achievements
        </motion.h2>
      </motion.div>

      <div className="flex flex-wrap justify-center w-full gap-8 max-w-225">
        {certificateItems.map((certificate, index) => (
          <motion.article
            key={certificate.title}
            className="w-full max-w-105 overflow-hidden rounded-2xl bg-[#1F1F1F] text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5 }}
            transition={{
              duration: 0.35,
              ease: easeOut,
              delay: index * 0.1,
            }}
          >
            <img
              className="object-cover w-full h-65"
              src={certificate.image}
              alt={certificate.alt}
              loading="lazy"
              decoding="async"
            />
            <div className="flex flex-col gap-3 p-5">
              <p className="font-['Itim'] text-[15px] text-[#5197ff]">
                {certificate.label}
              </p>
              <h3 className="font-['Poppins'] text-[20px] font-semibold text-white">
                {certificate.title}
              </h3>
              <p className="font-['Poppins'] text-sm leading-6 text-[#e1e1e1]">
                {certificate.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
