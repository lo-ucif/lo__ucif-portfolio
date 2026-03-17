import { assets } from "../../constants/assets";

export function MobileNav() {
  return (
    <div className="mobile-nav">
      <div className="mobile-status">
        <span className="status-dot" />
        <span>Available for work</span>
      </div>
      <nav className="mobile-links">
        <a className="nav-item active" href="#home">
          Home
        </a>
        <a className="nav-item" href="#stack">
          Tech Stack
        </a>
        <a className="nav-item" href="#projects">
          Projects
        </a>
        <a className="nav-item" href="#contact">
          Contact
        </a>
      </nav>
      <div className="mobile-social">
        <img src={assets.socialIconsMobile} alt="Social icons" />
      </div>
    </div>
  );
}
