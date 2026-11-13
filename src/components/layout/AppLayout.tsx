import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

import { MobileNav } from "./MobileNav";
import { SiteHeader } from "./SiteHeader";
import { StatusBadgeProvider } from "../../contexts/StatusBadgeProvider";

const navLinks = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Tech Stack", href: "/#stack", id: "stack" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Certificates", href: "/#certificates", id: "certificates" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        mobileMenuRef.current?.contains(target) ||
        mobileMenuButtonRef.current?.contains(target)
      ) {
        return;
      }
      setIsMobileMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMobileMenuOpen]);

  const headerActiveSection = isHome
    ? "home"
    : location.pathname.startsWith("/projects")
      ? "projects"
      : "";

  return (
    <StatusBadgeProvider>
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full overflow-x-hidden min-h-screen"
      >
        <SiteHeader
          activeSection={headerActiveSection}
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
          menuButtonRef={mobileMenuButtonRef}
        />
        <MobileNav
          isOpen={isMobileMenuOpen}
          onLinkClick={() => setIsMobileMenuOpen(false)}
          menuRef={mobileMenuRef}
          links={navLinks}
        />
        <Outlet />
      </motion.div>
    </StatusBadgeProvider>
  );
}
