import { projects } from "../../../constants/data";
import { assets } from "../../../constants/assets";

export function ProjectsSection() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={`${project.title}-${index}`}>
            <div className="project-image">
              <img className="img-desktop" src={assets.projectShot} alt="" />
              <img className="img-mobile" src={assets.projectShotMobile} alt="" />
            </div>
            <div className="project-body">
              <div className="project-header">
                <h3>{project.title}</h3>
                <img className="project-tool" src={assets.projectTool} alt="" />
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <img src={assets.linkIcon} alt="" />
                  Live Demo
                </a>
                <a href="#" className="project-link">
                  <img src={assets.githubIcon} alt="" />
                  View Code
                </a>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                <span className="tag">
                  <img src={assets.tagReact} alt="" />
                  React
                </span>
                <span className="tag">
                  <img src={assets.tagJs} alt="" />
                  Java script
                </span>
                <span className="tag">
                  <img src={assets.tagFigma} alt="" />
                  Figma
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="section-actions">
        <button className="btn btn-outline" type="button">
          View All
        </button>
      </div>
    </section>
  );
}
