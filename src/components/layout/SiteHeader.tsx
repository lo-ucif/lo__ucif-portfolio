import logo from "../../assets/8.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "../../constants/Icon";

type SiteHeaderProps = {
  activeSection: string;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
};

// Optimized concise titles for professional navigation
const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "UI/UX Design", id: "case-studies" },
  { label: "Tech Stack", id: "stack" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SiteHeader(_props?: Partial<SiteHeaderProps>) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeScrollId, setActiveScrollId] = useState<string>("home");

  // Derive active section for non-root routes; track scroll for home page
  const activeId =
    location.pathname !== "/"
      ? location.pathname.startsWith("/projects")
        ? "projects"
        : location.pathname.startsWith("/case-stud")
        ? "case-studies"
        : ""
      : activeScrollId;

  // Track active section as user scrolls on home page
  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sectionIds = [
      "contact",
      "certificates",
      "stack",
      "case-studies",
      "projects",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 200) {
        setActiveScrollId("home");
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollY >= top - 250) {
            setActiveScrollId(id);
            return;
          }
        }
      }
      setActiveScrollId("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(null, "", "/");
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", `/#${id}`);
        }
      }
    } else {
      if (location.pathname === "/projects" && id === "projects") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (id === "home") {
        navigate("/");
      } else {
        navigate(`/#${id}`);
      }
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className="fixed left-0 right-0 top-0 z-50 hidden w-full bg-[#161513]/95 backdrop-blur min-[601px]:flex"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="mx-auto flex w-full max-w-300 items-center justify-between gap-6 px-10 xl:px-16 py-3.5">
          {/* Logo on Left */}
          <motion.div className="h-12.5 w-22.25 shrink-0" whileHover={{ scale: 1.03 }}>
            <Link
              to="/"
              onClick={(e) => handleNavClick("home", e)}
            >
              <img
                className="object-contain w-full h-full"
                src={logo}
                alt="Loucif logo"
              />
            </Link>
          </motion.div>

          {/* Right Group: Optimized Titles + Social Links at the end */}
          <div className="flex items-center gap-6 xl:gap-8">
            <nav className="flex items-center gap-4 xl:gap-6 font-['Itim'] text-[15px] tracking-[0.2px] text-white">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <a
                      href={`/#${item.id}`}
                      onClick={(e) => handleNavClick(item.id, e)}
                      style={{ color: isActive ? "#5197ff" : "#ffffff" }}
                      className="transition-colors duration-200 cursor-pointer whitespace-nowrap hover:text-[#5197ff]"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                );
              })}
            </nav>

            {/* Vertical Separator & Direct GitHub / LinkedIn Links */}
            <div className="flex items-center gap-3 xl:gap-4">
              <span className="text-white/30 text-[15px] select-none">|</span>
              <motion.a
                href="https://github.com/lo-ucif"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 font-['Itim'] text-[15px] text-white hover:text-[#5197ff] transition-colors duration-200 cursor-pointer group whitespace-nowrap"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <GithubIcon
                  width={18}
                  height={18}
                  className="shrink-0 transition-transform group-hover:scale-110"
                />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ahmed-loucif-757854342"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 font-['Itim'] text-[15px] text-white hover:text-[#5197ff] transition-colors duration-200 cursor-pointer group whitespace-nowrap"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <LinkedinIcon
                  width={18}
                  height={18}
                  className="shrink-0 transition-transform group-hover:scale-110"
                />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Header */}
      <motion.header
        className="fixed left-0 right-0 top-0 z-40 hidden w-full items-center justify-between bg-[#161513]/40 px-5 py-3 backdrop-blur max-[600px]:flex"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      >
        <Link
          to="/"
          onClick={(e) => handleNavClick("home", e)}
        >
          <img className="h-8.5 w-15 object-contain" src={logo} alt="Loucif logo" />
        </Link>

        {/* Mobile Header Direct Links: GitHub | LinkedIn */}
        <div className="flex items-center gap-2 xs:gap-2.5">
          <motion.a
            href="https://github.com/lo-ucif"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-1.5 font-['Itim'] text-[13.5px] text-white hover:text-[#5197ff] transition-colors duration-200 cursor-pointer group whitespace-nowrap"
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon
              width={16}
              height={16}
              className="shrink-0 transition-transform group-hover:scale-110"
            />
            <span>GitHub</span>
          </motion.a>

          <span className="text-white/30 text-[13px] select-none">|</span>

          <motion.a
            href="https://www.linkedin.com/in/ahmed-loucif-757854342"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-1.5 font-['Itim'] text-[13.5px] text-white hover:text-[#5197ff] transition-colors duration-200 cursor-pointer group whitespace-nowrap"
            whileTap={{ scale: 0.95 }}
          >
            <LinkedinIcon
              width={16}
              height={16}
              className="shrink-0 transition-transform group-hover:scale-110"
            />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </motion.header>
    </>
  );
}
