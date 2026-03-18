import { Link } from "react-router-dom";

const assets = {
  projectCover:
    "https://www.figma.com/api/mcp/asset/19235516-c5d9-4b29-af70-18f78298896b",
  figmaIcon:
    "https://www.figma.com/api/mcp/asset/15721e07-65b9-4f16-a029-3ac61f4303f3",
  linkIcon:
    "https://www.figma.com/api/mcp/asset/50ca5f7d-b638-46be-903b-d49b3fcd63cb",
  githubIcon:
    "https://www.figma.com/api/mcp/asset/ec0d997f-f923-4c73-825b-121ffd708a71",
  reactIcon:
    "https://www.figma.com/api/mcp/asset/1b3504e5-800c-46ff-a9b0-f0ee7e5ed66b",
  jsIcon:
    "https://www.figma.com/api/mcp/asset/696586f8-8c0e-4489-a7a1-669447ccc7cd",
  figmaMiniIcon:
    "https://www.figma.com/api/mcp/asset/76e38f44-0115-4a71-89f5-6f1a550f468a",
  returnIcon:
    "https://www.figma.com/api/mcp/asset/be5e1f01-3395-480d-810e-f070d0067661",
};

const projects = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: "Project Tiltle",
  description:
    "Tech stack  stack stackstackstackstackstackstackstackstackstackstack stack stack stack stack stack stack stack stack",
}));

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#161513] px-5 pb-[80px] pt-[20px] text-white sm:px-[40px] lg:px-[80px] min-[601px]:pt-[120px] max-[600px]:pt-[90px]">
      <div className="mx-auto flex min-h-screen flex-col gap-[80px]">
        <main className="flex flex-col items-center gap-[30px]">
          <div className="flex w-full max-w-[1000px] flex-col items-center gap-[14px]">
            {/* <Link
              className="inline-flex items-center gap-[10px] self-start rounded-[30px] border border-white px-[16px] py-[8px] font-['Poppins'] text-[14px] text-white transition-colors hover:border-[#5197ff] hover:text-[#5197ff]"
              to="/"
            >
              <span className="h-[18px] w-[18px]">
                <img
                  className="h-full w-full transform scale-x-[-1]"
                  src={assets.returnIcon}
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </Link> */}

            <h1 className="font-['Poppins'] text-[36px] font-semibold text-white">
              Projects
            </h1>
          </div>

          <div className="flex w-full max-w-[1000px] flex-wrap items-center justify-center gap-[80px]">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex w-[280px] flex-col gap-[12.108px] overflow-hidden rounded-[15.135px] bg-[#262626]"
              >
                <div className="h-[179px] w-full">
                  <img
                    className="object-cover w-full h-full"
                    src={assets.projectCover}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex flex-col gap-[15px] px-[18px] py-[15px]">
                  <div className="flex items-center justify-between">
                    <h2 className="font-['Poppins'] text-[22.4px] font-medium">
                      {project.title}
                    </h2>
                    <img
                      className="h-[20px] w-[20px]"
                      src={assets.figmaIcon}
                      alt="Figma"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[12.133px]">
                    <a
                      className="flex items-center gap-[7.568px] underline"
                      href="#"
                    >
                      <img
                        className="h-[15.135px] w-[15.135px]"
                        src={assets.linkIcon}
                        alt="Live demo"
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
                        alt="View code"
                        loading="lazy"
                        decoding="async"
                      />
                      View Code
                    </a>
                  </div>

                  <p className="text-[11px] leading-[19.676px] text-[#cccccc]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-[7.467px]">
                    <span className="flex h-[16.649px] items-center gap-[4px] rounded-[7.568px] bg-[#303030] px-[6px] text-[7.568px] text-white">
                      <img
                        className="h-[8.173px] w-[9.081px]"
                        src={assets.reactIcon}
                        alt="React"
                        loading="lazy"
                        decoding="async"
                      />
                      React
                    </span>
                    <span className="flex h-[16.649px] items-center gap-[4px] rounded-[7.568px] bg-[#303030] px-[6px] text-[7.568px] text-white">
                      <img
                        className="h-[9.081px] w-[9.081px]"
                        src={assets.jsIcon}
                        alt="JavaScript"
                        loading="lazy"
                        decoding="async"
                      />
                      Java script
                    </span>
                    <span className="flex h-[16.649px] items-center gap-[4px] rounded-[7.568px] bg-[#303030] px-[6px] text-[7.568px] text-white">
                      <img
                        className="h-[10px] w-[10px]"
                        src={assets.figmaMiniIcon}
                        alt="Figma"
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
        </main>
      </div>
    </div>
  );
}
