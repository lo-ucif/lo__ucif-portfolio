import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type CaseStudyNavSection = {
  id: string;
  label: string;
  shortLabel: string;
};

const SECTIONS: CaseStudyNavSection[] = [
  { id: "overview", label: "01. Overview", shortLabel: "01. Overview" },
  { id: "problems", label: "02. Problems", shortLabel: "02. Problems" },
  { id: "user-needs", label: "03. User Needs", shortLabel: "03. Needs" },
  { id: "final-design", label: "04. Final Design", shortLabel: "04. Design" },
  { id: "tools-used", label: "05. Tools Used", shortLabel: "05. Tools" },
];

export function CaseStudyStickyNav() {
  const [activeId, setActiveId] = useState<string>("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 250) {
        setActiveId("overview");
        return;
      }

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sec = SECTIONS[i];
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollY >= top - 260) {
            setActiveId(sec.id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      aria-label="Case Study Section Navigation"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw]"
    >
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#1A1917]/90 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-x-auto no-scrollbar">
        {SECTIONS.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => scrollToSection(sec.id)}
              className={`relative rounded-full px-3.5 py-1.5 font-['Itim'] text-[12.5px] sm:text-[13.5px] whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-white text-[#161513] font-bold shadow-md"
                  : "text-[#9CA3AF] hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <span className="hidden sm:inline">{sec.label}</span>
              <span className="sm:hidden">{sec.shortLabel}</span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => scrollToSection("top")}
          aria-label="Scroll to top"
          className="rounded-full px-2.5 py-1.5 font-['Itim'] text-[12px] text-[#8491A0] hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer shrink-0"
        >
          Top ↑
        </button>
      </div>
    </motion.nav>
  );
}
