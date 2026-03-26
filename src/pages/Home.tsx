import { TechStackSection } from "../features/skills/components/TechStackSection";
import { ProjectsSection } from "../features/projects/components/ProjectsSection";
import { ContactSection } from "../features/contact/components/ContactSection";
import { GithubIcon } from "../constants/Icon";

import myimg from "../assets/portfolio img.png";
import univimg from "../assets/6.webp";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#161513] px-5 pb-20 pt-5 text-[#e1e1e1] sm:px-10 lg:px-20 min-[601px]:pt-30 max-[600px]:pt-22.5">
      <div className="flex flex-col min-h-screen gap-20 mx-auto">
        <main className="flex flex-col items-center gap-40 max-[600px]:gap-50">
          <section className="flex flex-col items-center gap-6.25 text-center">
            <div className="relative grid h-53.25 w-53.25 place-items-center overflow-hidden rounded-full bg-[#262626]">
              <picture>
                <source media="(max-width: 600px)" />
                <img
                  className="h-[200%] w-[200%]  object-cover"
                  src={myimg}
                  alt="Ahmed Loucif"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <div className="flex w-full flex-col items-center gap-2.5">
              <div className="flex flex-col items-center">
                <h1 className="font-['Itim'] text-[64px] text-white max-[600px]:w-82.5 max-[600px]:text-[48px]">
                  Ahmed Loucif
                </h1>
                <div className="flex items-center gap-2.5 font-['Itim'] text-[26px] max-[600px]:text-[19.58px]">
                  <span className="text-[#a9a9a9]">Web</span>
                  <span className="text-[#5197ff]">Developer</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-[20px] bg-[#2e2e2e] px-2.5 py-1.5 font-['Itim'] text-[12px] text-white max-[600px]:rounded-[15px] max-[600px]:px-[7.5px] max-[600px]:py-[4.5px] max-[600px]:font-['Poppins'] max-[600px]:text-[7.5px]">
                <span className="h-2 w-2 rounded-full bg-[#73ff2d] shadow-[0px_0px_5px_1px_#73ff2d] max-[600px]:h-1.5 max-[600px]:w-1.5 max-[600px]:shadow-[0px_0px_3.75px_0.75px_#73ff2d]" />
                <span className="max-[600px]:lowercase">
                  Available for work
                </span>
              </div>
            </div>
            <p className="max-w-180 font-['Poppins'] text-[16px] leading-[1.6] text-[#e1e1e1]">
              I build modern and scalable web applications using React,
              TypeScript, Node.js, and MongoDB. I create clean user interfaces
              and efficient backend systems focused on performance and
              reliability.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-[16.76px]">
              <a
                className="rounded-[38.182px] border border-white bg-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-[#161513]"
                href="https://mail.google.com/mail/?view=cm&to=louciftamer3@gmail.com"
              >
                Get In Touch
              </a>
              <a
                className="flex items-center gap-[8.38px] rounded-[38.182px] border border-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-white"
                href="https://github.com/"
              >
                Git Hub
                <picture>
                  <GithubIcon />
                </picture>
              </a>
            </div>
          </section>

          <section
            id="about"
            className="flex flex-col items-center gap-7.5 text-center"
          >
            <h2 className="font-['Itim'] text-[36px] text-white">About Me</h2>
            <p className="max-w-225 font-['Inter'] text-[17px] leading-[1.6] text-[#e1e1e1]">
              Hello! I'm Ahmed Loucif, a passionate Full Stack Web Developer
              specializing in modern web technologies and user-centered design.
              I build fast and scalable web applications using React, Vite,
              TypeScript, Node.js, Express, and MongoDB. I also have a strong
              interest in UI/UX design, which helps me create clean, intuitive,
              and enjoyable user experiences. I enjoy solving complex problems,
              learning new technologies, and continuously improving my skills to
              build better digital products.
            </p>
            <button
              className="rounded-[38.182px] border border-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-white"
              type="button"
            >
              Download CV
            </button>
          </section>

          <TechStackSection />
          <ProjectsSection />

          <section className="flex w-full flex-col items-center gap-7.5 text-center">
            <h2 className="font-['Itim'] text-[36px] text-white">Education</h2>
            <div className="flex w-full flex-col items-center gap-2.5 p-2.5">
              <picture>
                <source media="(max-width: 600px)" srcSet={univimg} />
                <img
                  className="h-8.75 w-8.75"
                  src={univimg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </picture>
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
