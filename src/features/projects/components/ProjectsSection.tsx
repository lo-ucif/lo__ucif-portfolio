import { projects } from "../../../constants/data";
import { assets } from "../../../constants/assets";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex w-full flex-col items-center gap-[30px] text-center"
    >
      <h2 className="font-['Itim'] text-[36px] text-white max-[600px]:font-['Poppins'] max-[600px]:font-semibold">
        Projects
      </h2>
      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            className="flex flex-col overflow-hidden rounded-[15.135px] bg-[#303030] max-[600px]:bg-[#262626]"
            key={`${project.title}-${index}`}
          >
            <div className="h-[179px] w-full">
              <picture>
                <source media="(max-width: 600px)" srcSet={assets.projectShotMobile} />
                <img
                  className="h-full w-full object-cover"
                  src={assets.projectShot}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="flex flex-col gap-[15px] px-[18px] py-[15px] text-left">
              <div className="flex items-center justify-between">
                <h3 className="font-['Poppins'] text-[22.4px] text-white">
                  {project.title}
                </h3>
                <img
                  className="h-[20px] w-[20px]"
                  src={assets.projectTool}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex items-center justify-between gap-3 text-[12.133px] text-white">
                <a
                  className="flex items-center gap-[7.568px] underline"
                  href="#"
                >
                  <img
                    className="h-[15.135px] w-[15.135px]"
                    src={assets.linkIcon}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  Live Demo
                </a>
                <a
                  className="flex items-center gap-[7.568px] underline"
                  href="#"
                >
                  <img
                    className="h-[15.135px] w-[15.135px]"
                    src={assets.githubIcon}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  View Code
                </a>
              </div>
              <p className="font-['Poppins'] text-[11px] leading-[19.676px] text-[#ccc]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[7.467px]">
                <span className="flex items-center gap-[6px] rounded-[7.568px] bg-[#303030] px-[3.784px] py-[3.784px] text-[7.568px] text-white">
                  <img
                    className="h-[9.081px] w-[9.081px]"
                    src={assets.tagReact}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  React
                </span>
                <span className="flex items-center gap-[6px] rounded-[7.568px] bg-[#303030] px-[3.784px] py-[3.784px] text-[7.568px] text-white">
                  <img
                    className="h-[9.081px] w-[9.081px]"
                    src={assets.tagJs}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  Java script
                </span>
                <span className="flex items-center gap-[6px] rounded-[7.568px] bg-[#303030] px-[3.784px] py-[3.784px] text-[7.568px] text-white">
                  <img
                    className="h-[10px] w-[10px]"
                    src={assets.tagFigma}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  Figma
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <button
        className="rounded-[38.182px] border border-white px-[16.76px] py-[12.57px] font-['Poppins'] text-[16.327px] text-white"
        type="button"
      >
        View All
      </button>
    </section>
  );
}
