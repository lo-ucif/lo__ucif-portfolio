import { useEffect, useMemo, useRef, useState } from "react";
import { assets } from "../constants/assets";
import { MobileNav } from "../components/layout/MobileNav";
import { SiteHeader } from "../components/layout/SiteHeader";
import { TechStackSection } from "../features/skills/components/TechStackSection";
import { ProjectsSection } from "../features/projects/components/ProjectsSection";
import { ContactSection } from "../features/contact/components/ContactSection";

export default function Home() {
  const sectionIds = useMemo(() => ["home", "stack", "projects", "contact"], []);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = sectionIds
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
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

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

  return (
    <div className="min-h-screen bg-[#161513] px-5 pb-[80px] pt-[20px] text-[#e1e1e1] sm:px-[40px] lg:px-[80px] min-[601px]:pt-[120px] max-[600px]:pt-[90px]">
      <div className="mx-auto flex min-h-screen flex-col gap-[80px]">
        <SiteHeader
          activeSection={activeSection}
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
          menuButtonRef={mobileMenuButtonRef}
        />
        <MobileNav
          isOpen={isMobileMenuOpen}
          onLinkClick={() => setIsMobileMenuOpen(false)}
          menuRef={mobileMenuRef}
        />

        <main className="flex flex-col items-center gap-[160px] max-[600px]:gap-[200px]">
          <section id="home" className="flex flex-col items-center gap-[25px] text-center">
            <div className="relative grid h-[213px] w-[213px] place-items-center overflow-hidden rounded-full bg-[#262626]">
              <img
                className="hidden h-[136%] w-[136%] -translate-y-[20px] object-cover max-[600px]:block"
                src={assets.avatarMobile}
                alt="Ahmed Loucif"
              />
              <img
                className="h-[136%] w-[136%] -translate-y-[20px] object-cover max-[600px]:hidden"
                src={assets.avatar}
                alt="Ahmed Loucif"
              />
            </div>
            <div className="flex w-full flex-col items-center gap-[10px]">
              <div className="flex flex-col items-center">
                <h1 className="font-['Itim'] text-[64px] text-white max-[600px]:w-[330px] max-[600px]:font-['Poppins'] max-[600px]:text-[48px]">
                  Ahmed Loucif
                </h1>
                <div className="flex items-center gap-[10px] font-['Itim'] text-[26px] max-[600px]:font-['Poppins'] max-[600px]:text-[19.58px]">
                  <span className="text-[#a9a9a9]">Web</span>
                  <span className="text-[#5197ff]">Developer</span>
                  <img className="h-[40px] w-[40px] max-[600px]:hidden" src={assets.pcLogo} alt="" />
                </div>
              </div>
              <div className="inline-flex items-center gap-[6px] rounded-[20px] bg-[#2e2e2e] px-[10px] py-[6px] font-['Itim'] text-[12px] text-white max-[600px]:rounded-[15px] max-[600px]:px-[7.5px] max-[600px]:py-[4.5px] max-[600px]:font-['Poppins'] max-[600px]:text-[7.5px]">
                <span className="h-[8px] w-[8px] rounded-full bg-[#73ff2d] shadow-[0px_0px_5px_1px_#73ff2d] max-[600px]:h-[6px] max-[600px]:w-[6px] max-[600px]:shadow-[0px_0px_3.75px_0.75px_#73ff2d]" />
                <span className="max-[600px]:lowercase">Available for work</span>
              </div>
            </div>
            <p className="max-w-[720px] font-['Poppins'] text-[16px] leading-[1.6] text-[#e1e1e1]">
              I build modern and scalable web applications using React, TypeScript, Node.js, and MongoDB. I create clean user interfaces and efficient backend systems focused on performance and reliability.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-[16.76px]">
              <a
                className="rounded-[38.182px] border border-white bg-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-[#161513]"
                href="#contact"
              >
                Get In Touch
              </a>
              <a
                className="flex items-center gap-[8.38px] rounded-[38.182px] border border-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-white"
                href="https://github.com/"
              >
                Git Hub
                <img className="hidden h-[21px] w-[21px] max-[600px]:block" src={assets.githubArrowMobile} alt="" />
                <img className="h-[21px] w-[21px] max-[600px]:hidden" src={assets.githubArrow} alt="" />
              </a>
            </div>
          </section>

          <section className="flex flex-col items-center gap-[30px] text-center">
            <h2 className="font-['Itim'] text-[36px] text-white max-[600px]:font-['Poppins'] max-[600px]:font-semibold">
              About Me
            </h2>
            <p className="max-w-[900px] font-['Inter'] text-[17px] leading-[1.6] text-[#e1e1e1]">
              Hello! I'm Ahmed Loucif, a passionate Full Stack Web Developer specializing in modern web technologies and user-centered design. I build fast and scalable web applications using React, Vite, TypeScript, Node.js, Express, and MongoDB. I also have a strong interest in UI/UX design, which helps me create clean, intuitive, and enjoyable user experiences. I enjoy solving complex problems, learning new technologies, and continuously improving my skills to build better digital products.
            </p>
            <button className="rounded-[38.182px] border border-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-white" type="button">
              Download CV
            </button>
          </section>

          <TechStackSection />
          <ProjectsSection />

          <section className="flex w-full flex-col items-center gap-[30px] text-center">
            <h2 className="font-['Itim'] text-[36px] text-white max-[600px]:font-['Poppins'] max-[600px]:font-semibold">
              Education
            </h2>
            <div className="flex w-full flex-col items-center gap-[10px] p-[10px]">
              <img className="hidden h-[35px] w-[35px] max-[600px]:block" src={assets.universityMobile} alt="" />
              <img className="h-[35px] w-[35px] max-[600px]:hidden" src={assets.university} alt="" />
              <div className="font-['Poppins'] text-[22px] font-bold text-white max-[600px]:text-[21.74px]">
                <p>Student At University of Constantine 2 Abdelhamid Mehri</p>
                <p>NTIC</p>
              </div>
              <p className="font-['Poppins'] text-[14.494px] text-[#a9a9a9] max-[600px]:text-[#8491a0]">
                2023 - Present
              </p>
            </div>
          </section>
        </main>

        <ContactSection />
      </div>
    </div>
  );
}
