import logo from "../../assets/8.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GithubIcon } from "../../constants/Icon";

type SiteHeaderProps = {
  activeSection: string;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
};

// Optimized concise titles for professional navigation
export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Tech Stack", id: "stack" },
  { label: "Certificates", id: "certificates" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export function SiteHeader({
  isMobileMenuOpen,
  onToggleMobileMenu,
  menuButtonRef,
}: SiteHeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState<string>("home");

  // Track active section as user scrolls
  useEffect(() => {
    if (location.pathname !== "/") {
      if (location.pathname.startsWith("/projects")) {
        setActiveId("projects");
      } else {
        setActiveId("");
      }
      return;
    }

    const sectionIds = [
      "contact",
      "education",
      "certificates",
      "stack",
      "projects",
      "experience",
      "about",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 200) {
        setActiveId("home");
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollY >= top - 250) {
            setActiveId(id);
            return;
          }
        }
      }
      setActiveId("home");
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

            {/* Vertical Separator & Direct GitHub Link */}
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
          <img className="h-8.5 w-15" src={logo} alt="Loucif logo" />
        </Link>
        <motion.button
          className="h-5.25 w-7.5"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={onToggleMobileMenu}
          ref={menuButtonRef}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.93 }}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="21"
              viewBox="0 0 30 21"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.14286 0H12.8571C13.4255 0 13.9705 0.221249 14.3724 0.615076C14.7742 1.0089 15 1.54305 15 2.1C15 2.65695 14.7742 3.1911 14.3724 3.58492C13.9705 3.97875 13.4255 4.2 12.8571 4.2H2.14286C1.57454 4.2 1.02949 3.97875 0.627628 3.58492C0.225765 3.1911 0 2.65695 0 2.1C0 1.54305 0.225765 1.0089 0.627628 0.615076C1.02949 0.221249 1.57454 0 2.14286 0ZM17.1429 16.8H27.8571C28.4255 16.8 28.9705 17.0212 29.3724 17.4151C29.7742 17.8089 30 18.343 30 18.9C30 19.457 29.7742 19.9911 29.3724 20.3849C28.9705 20.7787 28.4255 21 27.8571 21H17.1429C16.5745 21 16.0295 20.7787 15.6276 20.3849C15.2258 19.9911 15 19.457 15 18.9C15 18.343 15.2258 17.8089 15.6276 17.4151C16.0295 17.0212 16.5745 16.8 17.1429 16.8ZM2.14286 8.4H27.8571C28.4255 8.4 28.9705 8.62125 29.3724 9.01508C29.7742 9.4089 30 9.94304 30 10.5C30 11.057 29.7742 11.5911 29.3724 11.9849C28.9705 12.3787 28.4255 12.6 27.8571 12.6H2.14286C1.57454 12.6 1.02949 12.3787 0.627628 11.9849C0.225765 11.5911 0 11.057 0 10.5C0 9.94304 0.225765 9.4089 0.627628 9.01508C1.02949 8.62125 1.57454 8.4 2.14286 8.4Z"
                fill="white"
              />
            </svg>
          )}
        </motion.button>
      </motion.header>
    </>
  );
}
