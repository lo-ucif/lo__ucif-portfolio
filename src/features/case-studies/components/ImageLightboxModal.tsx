import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ImageLightboxModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
};

export function ImageLightboxModal({
  isOpen,
  onClose,
  imageUrl,
  imageAlt,
  title,
  subtitle,
}: ImageLightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Header bar */}
          <div
            className="flex w-full max-w-5xl items-center justify-between pb-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col text-left">
              {title && (
                <h4 className="font-['Itim'] text-[18px] sm:text-[22px] text-white">
                  {title}
                </h4>
              )}
              {subtitle && (
                <p className="font-['Poppins'] text-[12px] sm:text-[13px] text-[#9CA3AF]">
                  {subtitle}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-['Poppins'] text-[13px] text-white transition-colors duration-200 hover:bg-white hover:text-[#161513]"
            >
              <span>Close (Esc)</span>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Image display */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative flex max-h-[85vh] max-w-5xl items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
