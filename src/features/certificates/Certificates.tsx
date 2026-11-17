import { useState } from "react";
import { easeOut, motion } from "framer-motion";
import { certificateItems } from "../../constants/data";
import {
  ImageLightboxModal,
  type LightboxItem,
} from "../case-studies/components/ImageLightboxModal";

export default function Certificates() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxItems: LightboxItem[] = certificateItems.map((item) => ({
    imageUrl: item.image,
    imageAlt: item.alt,
    title: item.title,
    subtitle: item.label,
  }));

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
            className="group w-full max-w-105 overflow-hidden rounded-2xl bg-[#1F1F1F] text-left cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5 }}
            transition={{
              duration: 0.35,
              ease: easeOut,
              delay: index * 0.1,
            }}
            onClick={() => setLightboxIndex(index)}
          >
            <div className="relative w-full h-65 overflow-hidden">
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                src={certificate.image}
                alt={certificate.alt}
                loading="lazy"
                decoding="async"
              />
              {/* Hover Overlay with Preview Full Certificate */}
              <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#161513]/90 border border-white/20 text-white font-['Poppins'] text-[13px] shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <svg
                    className="w-4 h-4 text-[#5197ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                  <span>Preview Full Certificate</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-5">
              <p className="font-['Itim'] text-[15px] text-[#5197ff]">
                {certificate.label}
              </p>
              <h3 className="font-['Poppins'] text-[20px] font-semibold text-white group-hover:text-[#5197ff] transition-colors duration-200">
                {certificate.title}
              </h3>
              <p className="font-['Poppins'] text-sm leading-6 text-[#e1e1e1]">
                {certificate.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {lightboxIndex !== null && (
        <ImageLightboxModal
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          items={lightboxItems}
          initialIndex={lightboxIndex}
          onIndexChange={(idx) => setLightboxIndex(idx)}
        />
      )}
    </section>
  );
}
