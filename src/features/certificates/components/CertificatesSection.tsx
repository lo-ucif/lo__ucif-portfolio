import { useState } from "react";
import { motion } from "framer-motion";
import { certificateItems } from "@/features/certificates/data/certificatesData";
import { ImageLightboxModal } from "@/components/ImageLightboxModal";
import { useLanguage } from "@/store/LanguageContext";
import { certTranslations } from "@/constants/projectTranslations";
import {
  EASE_OUT_EXPO,
  SPRING_INTERACTIVE,
  VIEWPORT_ONCE,
} from "@/constants/motion";

export default function Certificates() {
  const { isArabic, t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<(typeof certificateItems)[0] | null>(null);

  const localizedCerts = certificateItems.map((certificate, index) => {
    const list = isArabic ? certTranslations.ar : certTranslations.en;
    const trans = list[index];
    return {
      ...certificate,
      title: trans?.title || certificate.title,
      label: trans?.label || certificate.label,
      description: trans?.description || certificate.description,
      previewText: trans?.preview || (isArabic ? "معاينة الشهادة كاملة" : "Preview Full Certificate"),
    };
  });

  return (
    <section
      id="certificates"
      className="flex w-full flex-col items-center gap-7.5 text-center scroll-mt-24"
    >
      <motion.h2
        className="font-['Itim'] text-[36px] text-white"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
      >
        {t.certificates.title}
      </motion.h2>

      <div className="flex flex-wrap justify-center w-full gap-8 max-w-225">
        {localizedCerts.map((certificate, index) => (
          <motion.article
            key={certificate.title}
            className="group w-full max-w-105 overflow-hidden rounded-2xl bg-[#1F1F1F] cursor-pointer text-start"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.52,
                  ease: EASE_OUT_EXPO,
                  delay: Math.min(index * 0.08, 0.16),
                },
              },
            }}
            whileHover={{ y: -6, transition: SPRING_INTERACTIVE }}
            onClick={() => setSelectedCert(certificate)}
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
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#161513]/90 border border-white/20 text-white font-['Inter'] text-[13px] shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
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
                  <span>{certificate.previewText}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-5 text-start items-start">
              <p className="font-['Itim'] text-[15px] text-[#5197ff]">
                {certificate.label}
              </p>
              <h3 className="font-['Inter'] text-[20px] font-semibold text-white group-hover:text-[#5197ff] transition-colors duration-200">
                {certificate.title}
              </h3>
              <p className="font-['Inter'] text-sm leading-6 text-[#e1e1e1]">
                {certificate.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {selectedCert && (
        <ImageLightboxModal
          isOpen={selectedCert !== null}
          onClose={() => setSelectedCert(null)}
          imageUrl={selectedCert.image}
          imageAlt={selectedCert.alt}
          title={selectedCert.title}
          subtitle={selectedCert.label}
          hidePagination={true}
        />
      )}
    </section>
  );
}
