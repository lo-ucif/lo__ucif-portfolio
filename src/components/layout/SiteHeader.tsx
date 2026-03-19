import { assets } from "../../constants/assets";
import logo from "../../assets/8.webp";
import { Link } from "react-router-dom";

type SiteHeaderProps = {
  activeSection: string;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
};

export function SiteHeader({
  activeSection,
  isMobileMenuOpen,
  onToggleMobileMenu,
  menuButtonRef,
}: SiteHeaderProps) {
  const linkClass = (id: string) =>
    id === activeSection ? "text-[#5197ff]" : "hover:text-[#5197ff]";

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 hidden w-full bg-[#161513]/95 backdrop-blur min-[601px]:flex">
        <div className="mx-auto flex w-full max-w-300 items-center justify-between gap-6 px-20 py-3.5 max-[1024px]:px-[40px]">
          <div className="h-[50px] w-22.25">
            <Link to="/">
              <img
                className="object-contain w-full h-full"
                src={logo}
                alt="Loucif logo"
              />{" "}
              {/* <img
                className="object-contain w-full h-full"
                src={logo}
                alt="Loucif logo"
              /> */}
            </Link>
          </div>
          <nav className="flex items-center gap-17.5 font-['Itim'] text-[15px] tracking-[0.3px] text-white">
            <Link className={linkClass("home")} to="/">
              Home
            </Link>
            <Link className={linkClass("projects")} to="/projects">
              Projects
            </Link>
          </nav>
          <div className="flex items-center justify-center rounded-[30px] bg-[#232323] px-5 py-2.5">
            <img
              className="h-[21px] w-[67px]"
              src={assets.socialIcons}
              alt="Social icons"
            />
          </div>
        </div>
      </header>

      <header className="fixed left-0 right-0 top-0 z-50 hidden w-full items-center justify-between bg-[#161513]/20 px-5 py-[12px] backdrop-blur max-[600px]:flex">
        <Link to="/">
          <img className="h-[34px] w-15" src={logo} alt="Loucif logo" />
        </Link>
        <button
          className="h-5.25 w-7.5"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={onToggleMobileMenu}
          ref={menuButtonRef}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="21"
              viewBox="0 0 30 21"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.14286 0H12.8571C13.4255 0 13.9705 0.221249 14.3724 0.615076C14.7742 1.0089 15 1.54305 15 2.1C15 2.65695 14.7742 3.1911 14.3724 3.58492C13.9705 3.97875 13.4255 4.2 12.8571 4.2H2.14286C1.57454 4.2 1.02949 3.97875 0.627628 3.58492C0.225765 3.1911 0 2.65695 0 2.1C0 1.54305 0.225765 1.0089 0.627628 0.615076C1.02949 0.221249 1.57454 0 2.14286 0ZM17.1429 16.8H27.8571C28.4255 16.8 28.9705 17.0212 29.3724 17.4151C29.7742 17.8089 30 18.343 30 18.9C30 19.457 29.7742 19.9911 29.3724 20.3849C28.9705 20.7787 28.4255 21 27.8571 21H17.1429C16.5745 21 16.0295 20.7787 15.6276 20.3849C15.2258 19.9911 15 19.457 15 18.9C15 18.343 15.2258 17.8089 15.6276 17.4151C16.0295 17.0212 16.5745 16.8 17.1429 16.8ZM2.14286 8.4H27.8571C28.4255 8.4 28.9705 8.62125 29.3724 9.01508C29.7742 9.4089 30 9.94304 30 10.5C30 11.057 29.7742 11.5911 29.3724 11.9849C28.9705 12.3787 28.4255 12.6 27.8571 12.6H2.14286C1.57454 12.6 1.02949 12.3787 0.627628 11.9849C0.225765 11.5911 0 11.057 0 10.5C0 9.94304 0.225765 9.4089 0.627628 9.01508C1.02949 8.62125 1.57454 8.4 2.14286 8.4Z"
                fill="white"
              />
            </svg>
          )}
        </button>
      </header>
    </>
  );
}
