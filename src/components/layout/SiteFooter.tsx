import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon,
  BehanceIcon,
} from "../../constants/Icon";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] pt-8 pb-4 text-[#e1e1e1]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Left: Identity & Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="font-['Poppins'] text-[15px] font-bold text-white">
            Ahmed Loucif
          </span>
          <p className="font-['Poppins'] text-[12.5px] text-[#8491A0] mt-0.5">
            Full-Stack Engineer & Product Builder · © 2026 All rights reserved.
          </p>
        </div>

        {/* Center: Navigation & Tech Note */}
        <div className="flex items-center gap-3 font-['Poppins'] text-[12.5px] text-[#8491A0]">
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Back to Top ↑
          </button>
          <span className="text-[#8491A0]/60">·</span>
          <span>Built with Vite, React 19, TypeScript & Tailwind</span>
        </div>

        {/* Right: Social Profiles */}
        <div className="flex items-center gap-5 text-white">
          <motion.a
            href="https://github.com/lo-ucif"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-white hover:text-[#5197ff] transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon width={20} height={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ahmed-loucif-757854342"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-white hover:text-[#5197ff] transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedinIcon width={20} height={20} />
          </motion.a>
          <motion.a
            href="https://wa.me/213676244189"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white hover:text-[#5197ff] transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsAppIcon width={22} height={22} />
          </motion.a>
          <motion.a
            href="https://www.behance.net/tamerloucif"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance Profile"
            className="text-white hover:text-[#5197ff] transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BehanceIcon width={22} height={22} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

