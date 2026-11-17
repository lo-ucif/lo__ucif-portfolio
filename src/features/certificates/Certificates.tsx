import { useState } from "react";
import { easeOut, motion } from "framer-motion";
import { certificateItems } from "../../constants/data";
import {
  ImageLightboxModal,
  type LightboxItem,
} from "../case-studies/components/ImageLightboxModal";

// Enriched metadata for the certificates
const certificateData = [
  {
    ...certificateItems[0],
    category: "Design Leadership",
    year: "2025 - 2026 Season",
    tags: ["UI/UX Prototyping", "Visual Identity", "Event Branding", "Community"],
    badgeColor: "#5197ff",
  },
  {
    ...certificateItems[1],
    category: "Hackathon Finalist",
    year: "2026",
    tags: ["Full-Stack MVP", "AI System Integration", "48h Sprint", "Finalist"],
    badgeColor: "#10B981",
  },
];

export default function Certificates() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxItems: LightboxItem[] = certificateData.map((item) => ({
    imageUrl: item.image,
    imageAlt: item.alt,
    title: item.title,
    subtitle: item.label,
    category: item.category,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section
      id="certificates"
      className="flex w-full flex-col items-center gap-12 text-center max-w-6xl mx-auto px-4 sm:px-6"
    >
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center gap-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <span className="font-['Itim'] text-[15px] sm:text-[16px] text-[#5197FF] tracking-wider uppercase">
          Recognition &amp; Honors
        </span>
        <h2 className="font-['Itim'] text-[36px] sm:text-[44px] text-white">
          Certificates &amp; Achievements
        </h2>
        <p className="font-['Poppins'] text-[15px] sm:text-[16px] text-[#9CA3AF] max-w-xl">
          Honors, hackathon recognitions, and community leadership validating technical execution and design craft.
        </p>
      </motion.div>

      {/* Modern Certificate Showcase Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 w-full text-left">
        {certificateData.map((cert, index) => (
          <motion.article
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: easeOut }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#1c1b18]/70 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-[#5197ff]/40 hover:bg-[#1f1e1a]/85 hover:shadow-[0_20px_40px_rgba(81,151,255,0.12)]"
          >
            {/* Ambient Corner Spotlight Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#5197ff]/15 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top Certificate Visual Frame with Click-to-Zoom */}
            <div
              onClick={() => openLightbox(index)}
              className="relative w-full aspect-[16/10] bg-[#11100e] overflow-hidden cursor-pointer border-b border-white/5"
            >
              <img
                src={cert.image}
                alt={cert.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Glass subtle dark gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11100e]/80 via-transparent to-black/20 pointer-events-none" />

              {/* Pinned Category / Honor Tag */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white font-['Itim'] text-[13px] sm:text-[14px] shadow-lg">
                <svg
                  className="w-4 h-4 text-[#5197ff]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{cert.category}</span>
              </div>

              {/* Hover Zoom Pill Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
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

            {/* Card Content Body */}
            <div className="flex flex-col flex-1 justify-between p-6 sm:p-8 gap-5">
              <div className="flex flex-col gap-3">
                {/* Organization & Date Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#5197ff]/10 text-[#5197ff] border border-[#5197ff]/20 font-['Itim'] text-[14px]">
                    {cert.label}
                  </span>
                  <span className="font-['Poppins'] text-[13px] text-[#8491A0]">
                    {cert.year}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3
                  onClick={() => openLightbox(index)}
                  className="font-['Itim'] text-[24px] sm:text-[28px] font-bold text-white leading-tight cursor-pointer hover:text-[#5197ff] transition-colors duration-200"
                >
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="font-['Poppins'] text-[14px] sm:text-[15px] leading-[1.75] text-[#9CA3AF]">
                  {cert.description}
                </p>
              </div>

              {/* Skills / Key Strengths Pills */}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#252422] border border-white/5 font-['Poppins'] text-[12px] text-[#D1D5DB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Trigger */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="inline-flex items-center gap-2 font-['Poppins'] text-[13px] sm:text-[14px] text-[#5197ff] hover:text-white transition-colors duration-200 font-medium group/btn cursor-pointer"
                  >
                    <span>Inspect Credential</span>
                    <svg
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>

                  <span className="font-['Itim'] text-[13px] text-[#6B7280]">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Lightbox Modal for High-Resolution View */}
      {lightboxIndex !== null && (
        <ImageLightboxModal
          isOpen={lightboxIndex !== null}
          onClose={closeLightbox}
          items={lightboxItems}
          initialIndex={lightboxIndex}
          onIndexChange={(idx) => setLightboxIndex(idx)}
        />
      )}
    </section>
  );
}
