import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { MobileNav } from "./MobileNav";
import { SiteHeader } from "./SiteHeader";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
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

  const headerActiveSection = isHome ? "home" : "projects";

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
