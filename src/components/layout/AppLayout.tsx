import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { MobileNav } from "./MobileNav";
import { SiteHeader } from "./SiteHeader";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Tech Stack", href: "/#stack" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const homeSectionIds = ["about", "stack", "projects", "contact"];

export function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isHome) return;

    const sections = homeSectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.4, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

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

  const headerActiveSection = isHome ? activeSection : "projects";

  return (
    <div className="home-enter">
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
    </div>
  );
}
