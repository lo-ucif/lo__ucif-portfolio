import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

import { MobileNav } from "./MobileNav";
import { SiteHeader } from "./SiteHeader";
import { StatusBadgeProvider } from "../../contexts/StatusBadgeProvider";
import { LanguageProvider, useLanguage } from "../../contexts/LanguageContext";

function AppLayoutContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { t } = useLanguage();

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
      : location.pathname.startsWith("/case-stud")
        ? "case-studies"
        : "";

  const dynamicNavLinks = [
    { label: t.nav.home, href: "/#home", id: "home" },
    { label: t.nav.projects, href: "/#projects", id: "projects" },
    { label: t.nav.caseStudies, href: "/#case-studies", id: "case-studies" },
    { label: t.nav.stack, href: "/#stack", id: "stack" },
    { label: t.nav.certificates, href: "/#certificates", id: "certificates" },
    { label: t.nav.contact, href: "/#contact", id: "contact" },
  ];

  return (
    <StatusBadgeProvider>
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full overflow-x-clip min-h-screen"
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
          links={dynamicNavLinks}
        />
        <Outlet />
      </motion.div>
    </StatusBadgeProvider>
  );
}

export function AppLayout() {
  return (
    <LanguageProvider>
      <AppLayoutContent />
    </LanguageProvider>
  );
}
