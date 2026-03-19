import { motion } from "framer-motion";
import { assets } from "../../constants/assets";
import { Link } from "react-router-dom";
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
    <div
      className={`fixed flex flex-col items-center gap-4 justify-center left-0 right-0 top-13 z-40 rounded-[20px] bg-[#161513]/40 p-2.5 backdrop-blur transition-all duration-300  ${
        isOpen
          ? "pointer-events-auto max-h-90 opacity-100 translate-y-0 "
          : "pointer-events-none max-h-0 opacity-0 -translate-y-2"
      }`}
      aria-hidden={!isOpen}
      ref={menuRef}
    >
      <div className=" flex flex-row w-fit items-center gap-[3.75px] rounded-[10px] bg-[#2e2e2e] px-[7.5px] py-[4.5px] font-['Poppins'] text-[7.5px] text-white">
        <div className="h-1.5 w-1.5 rounded-full bg-[#73ff2d] shadow-[0px_0px_3.75px_0.75px_#73ff2d]" />
        <div className={availabilityClassName}>{availabilityText}</div>
      </div>
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
        <a
          href="https://github.com/lo-ucif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-5.25 w-5.25" src={assets.githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.linkedin.com/in/ahmed-loucif-757854342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-5.25 w-5.25"
            src={assets.linkedinIcon}
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
}
