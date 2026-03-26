import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GithubIcon, LinkedinIcon } from "../../constants/Icon";
type MobileNavProps = {
  isOpen: boolean;
  onLinkClick: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
  links?: Array<{ label: string; href: string }>;
  availabilityText?: string;
  availabilityClassName?: string;
};

const defaultLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
];

export function MobileNav({
  isOpen,
  onLinkClick,
  menuRef,
  links = defaultLinks,
  availabilityText = "available for work",
  availabilityClassName = "lowercase",
}: MobileNavProps) {
  return (
    <motion.div
      className="fixed left-0 right-0 top-14 z-30 flex flex-col items-center justify-center gap-4 rounded-[20px] bg-[#161513]/40 p-2.5 backdrop-blur"
      aria-hidden={!isOpen}
      ref={menuRef}
      initial={false}
      animate={
        isOpen
          ? { opacity: 1, y: 0, height: "auto", pointerEvents: "auto" }
          : { opacity: 0, y: -8, height: 0, pointerEvents: "none" }
      }
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <motion.div
        className=" flex w-fit flex-row items-center gap-[3.75px] rounded-[10px] bg-[#2e2e2e] px-[7.5px] py-[4.5px] font-['Poppins'] text-[7.5px] text-white"
        whileHover={{ scale: 1.03 }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-[#73ff2d] shadow-[0px_0px_3.75px_0.75px_#73ff2d]" />
        <div className={availabilityClassName}>{availabilityText}</div>
      </motion.div>
      <nav className=" flex flex-col items-center gap-5 font-['Itim'] text-[15px] tracking-[0.3px] text-white">
        {links.map((link) => (
          <motion.div
            key={link.href}
            whileHover={{ color: "#5197ff" }}
            whileTap={{ color: "#5197ff" }}
            transition={{ duration: 0.2 }}
            style={{ color: "#ffffff" }}
            className="transition-colors"
          >
            <Link className="block" to={link.href} onClick={onLinkClick}>
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>
      <div className="flex flex-row gap-6 items-center justify-center rounded-[30px]  px-5 py-2.5">
        <motion.a
          href="https://github.com/lo-ucif"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, y: -1 }}
          whileTap={{ scale: 0.96 }}
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/ahmed-loucif-757854342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, y: -1 }}
          whileTap={{ scale: 0.96 }}
        >
          <LinkedinIcon />
        </motion.a>
      </div>
    </motion.div>
  );
}
