import { easeOut, motion } from "framer-motion";
import univimg from "../../assets/6.webp";

export default function Student() {
  return (
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
  );
}
