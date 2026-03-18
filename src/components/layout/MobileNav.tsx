import { motion } from "framer-motion";
import { assets } from "../../constants/assets";

type MobileNavProps = {
  isOpen: boolean;
  onLinkClick: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
};

export function MobileNav({ isOpen, onLinkClick, menuRef }: MobileNavProps) {
  return (
    <div
      className={`fixed flex flex-col items-center gap-4 justify-center left-5 right-5 top-12.5 z-40 rounded-[20px] bg-[#161513]/50 p-[10px] backdrop-blur transition-all duration-300  ${
        isOpen
          ? "pointer-events-auto max-h-90 opacity-100 translate-y-0 "
          : "pointer-events-none max-h-0 opacity-0 -translate-y-2"
      }`}
      aria-hidden={!isOpen}
      ref={menuRef}
    >
      <div className=" flex flex-row w-fit items-center gap-[3.75px] rounded-[10px] bg-[#2e2e2e] px-[7.5px] py-[4.5px] font-['Poppins'] text-[7.5px] text-white">
        <div className="h-[6px] w-1.5 rounded-full bg-[#73ff2d] shadow-[0px_0px_3.75px_0.75px_#73ff2d]" />
        <div className="lowercase">available for work</div>
      </div>
      <nav className=" flex flex-col items-center gap-[20px] font-['Itim'] text-[15px] tracking-[0.3px] text-white">
        <motion.a
          className="transition-colors"
          style={{ color: "#ffffff" }}
          href="#home"
          onClick={onLinkClick}
          whileHover={{ color: "#5197ff" }}
          whileTap={{ color: "#5197ff" }}
          transition={{ duration: 0.2 }}
        >
          Home
        </motion.a>
        <motion.a
          className="transition-colors"
          style={{ color: "#ffffff" }}
          href="#stack"
          onClick={onLinkClick}
          whileHover={{ color: "#5197ff" }}
          whileTap={{ color: "#5197ff" }}
          transition={{ duration: 0.2 }}
        >
          Tech Stack
        </motion.a>
        <motion.a
          className="transition-colors"
          style={{ color: "#ffffff" }}
          href="#projects"
          onClick={onLinkClick}
          whileHover={{ color: "#5197ff" }}
          whileTap={{ color: "#5197ff" }}
          transition={{ duration: 0.2 }}
        >
          Projects
        </motion.a>
        <motion.a
          className="transition-colors"
          style={{ color: "#ffffff" }}
          href="#contact"
          onClick={onLinkClick}
          whileHover={{ color: "#5197ff" }}
          whileTap={{ color: "#5197ff" }}
          transition={{ duration: 0.2 }}
        >
          Contact
        </motion.a>
      </nav>
      <div className=" flex items-center justify-center rounded-[25.234px] px-[16.822px] py-[8.411px]">
        <img
          className="h-[17.664px] w-[56.355px]"
          src={assets.socialIconsMobile}
          alt="Social icons"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
