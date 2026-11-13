import { GithubIcon, LinkedinIcon, BehanceIcon } from "../../constants/Icon";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/[0.08] py-6 font-['Itim']">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-3.5 gap-y-2 text-center text-[13.5px] sm:text-[14.5px] text-[#A9A9A9]">
        <span>Full-Stack Engineer &amp; Product Builder · © 2026 All rights reserved.</span>
        <span className="text-[#A9A9A9]/60">·</span>
        <span>React · Django · Figma · PostgreSQL</span>
        <span className="text-[#A9A9A9]/60 mx-1">|</span>
        <a
          href="https://github.com/lo-ucif"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="inline-flex items-center gap-1.5 text-[#A9A9A9] hover:text-white transition-colors duration-200"
        >
          <GithubIcon width={17} height={17} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-loucif-757854342"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="inline-flex items-center gap-1.5 text-[#A9A9A9] hover:text-white transition-colors duration-200"
        >
          <LinkedinIcon width={17} height={17} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://www.behance.net/tamerloucif"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance Profile"
          className="inline-flex items-center gap-1.5 text-[#A9A9A9] hover:text-white transition-colors duration-200"
        >
          <BehanceIcon width={17} height={17} />
          <span>Behance</span>
        </a>
      </div>
    </footer>
  );
}
