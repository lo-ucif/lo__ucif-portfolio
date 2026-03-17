import { assets } from "../constants/assets";
import { MobileNav } from "../components/layout/MobileNav";
import { SiteHeader } from "../components/layout/SiteHeader";
import { TechStackSection } from "../features/skills/components/TechStackSection";
import { ProjectsSection } from "../features/projects/components/ProjectsSection";
import { ContactSection } from "../features/contact/components/ContactSection";

export default function Home() {
  return (
    <div className="page">
      <SiteHeader />
      <MobileNav />

      <main className="content">
        <section id="home" className="hero">
          <div className="avatar">
            <img className="img-desktop" src={assets.avatar} alt="Ahmed Loucif" />
            <img className="img-mobile" src={assets.avatarMobile} alt="Ahmed Loucif" />
          </div>
          <div className="hero-title">
            <h1>Ahmed Loucif</h1>
            <div className="hero-role">
              <span className="role-muted">Web</span>
              <span className="role-accent">Developer</span>
              <img src={assets.pcLogo} alt="" />
            </div>
          </div>
          <div className="status-pill">
            <span className="status-dot" />
            <span>Available for work</span>
          </div>
          <p className="hero-copy">
            I build modern and scalable web applications using React, TypeScript,
            Node.js, and MongoDB. I create clean user interfaces and efficient
            backend systems focused on performance and reliability.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get In Touch
            </a>
            <a className="btn btn-outline" href="https://github.com/">
              Git Hub
              <img className="img-desktop" src={assets.githubArrow} alt="" />
              <img className="img-mobile" src={assets.githubArrowMobile} alt="" />
            </a>
          </div>
        </section>

        <section className="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Ahmed Loucif, a passionate Full Stack Web Developer
            specializing in modern web technologies and user-centered design. I
            build fast and scalable web applications using React, Vite,
            TypeScript, Node.js, Express, and MongoDB. I also have a strong
            interest in UI/UX design, which helps me create clean, intuitive,
            and enjoyable user experiences. I enjoy solving complex problems,
            learning new technologies, and continuously improving my skills to
            build better digital products.
          </p>
          <div className="section-actions">
            <button className="btn btn-outline" type="button">
              Download CV
            </button>
          </div>
        </section>

        <TechStackSection />
        <ProjectsSection />

        <section className="education">
          <h2>Education</h2>
          <div className="education-card">
            <img className="img-desktop" src={assets.university} alt="" />
            <img className="img-mobile" src={assets.universityMobile} alt="" />
            <div>
              <p className="education-title">
                Student At University of Constantine 2 Abdelhamid Mehri
              </p>
              <p className="education-subtitle">NTIC</p>
            </div>
            <p className="education-date">2023 - Present</p>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
}
