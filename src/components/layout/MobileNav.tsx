import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { BehanceIcon, GithubIcon, LinkedinIcon, WhatsAppIcon } from "../../constants/Icon";
import { StatusBadge } from "../StatusBadge";

type MobileNavProps = {
  isOpen: boolean;
  onLinkClick: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
  links?: Array<{ label: string; href: string; id?: string }>;
};

const defaultLinks = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About Me", href: "/#about", id: "about" },
  { label: "Tech Stack", href: "/#stack", id: "stack" },
  { label: "Experience", href: "/#experience", id: "experience" },
  {
    label: "A Selection of My Recent Work",
    href: "/#projects",
    id: "projects",
  },
  {
    label: "Certificates & Achievements",
    href: "/#certificates",
    id: "certificates",
  },
  {
    label: "Let's Build Something Together.",
    href: "/#contact",
    id: "contact",
  },
];

export function MobileNav({
  isOpen,
  onLinkClick,
  menuRef,
  links = defaultLinks,
}: MobileNavProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (link: { label: string; href: string; id?: string }) => {
    onLinkClick();
    const id = link.id;
    if (!id) return;

    if (location.pathname === "/") {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      if (id === "home") {
        navigate("/");
      } else {
        navigate(`/#${id}`);
      }
    }
  };

  return (
    <motion.div
      className="fixed left-0 right-0 top-14 z-30 flex flex-col items-center justify-center gap-4 rounded-[20px] bg-[#161513]/95 p-5 backdrop-blur border-b border-white/10 shadow-2xl"
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
      <StatusBadge />
      <nav className="flex flex-col items-center gap-4 font-['Itim'] text-[15px] tracking-[0.3px] text-white text-center">
        {links.map((link) => (
          <motion.div
            key={link.label}
            whileHover={{ scale: 1.05, color: "#5197ff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="transition-colors"
          >
            <a
              className="block cursor-pointer py-1"
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link);
              }}
            >
              {link.label}
            </a>
          </motion.div>
        ))}
      </nav>
      <div className="flex flex-row gap-6 items-center justify-center rounded-[30px] px-5 py-2">
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
        <motion.a
          href="https://www.behance.net/tamerloucif"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Behance profile"
          whileHover={{ scale: 1.08, y: -1 }}
          whileTap={{ scale: 0.96 }}
        >
          <BehanceIcon />
        </motion.a>
        <motion.a
          href="https://wa.me/213676244189"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex items-center justify-center rounded-full"
        >
          <WhatsAppIcon />
        </motion.a>
      </div>
    </motion.div>
  );
}
