import { GithubIcon, LinkedinIcon, BehanceIcon } from "@/constants/icons";
import { useLanguage } from "@/store/LanguageContext";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-white/[0.08] pt-6 pb-5 font-['Itim']">
      {/* Phone Mode (< 640px) */}
      <div className="flex sm:hidden flex-col items-center justify-center gap-1.5 text-center px-4">
        <span className="text-[13.5px] text-[#A9A9A9]">{t.footer.role}</span>
        <span className="text-[12px] text-[#A9A9A9]">{t.footer.rights}</span>
      </div>

      {/* Desktop Mode (>= 640px) */}
      <div className="hidden sm:flex mx-auto w-full max-w-7xl flex-wrap items-center justify-center gap-x-3.5 gap-y-2 text-center text-[13.5px] sm:text-[14.5px] text-[#A9A9A9]">
        <span>{t.footer.role} · {t.footer.rights}</span>
        <span className="text-[#A9A9A9]/60 mx-1">|</span>
        <a
          href="https://github.com/lo-ucif"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="inline-flex items-center gap-1.5 text-[#A9A9A9] hover:text-white transition-colors duration-200"
        >
          <GithubIcon width={17} height={17} />
          <span>{t.nav.github}</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-loucif-757854342"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="inline-flex items-center gap-1.5 text-[#A9A9A9] hover:text-white transition-colors duration-200"
        >
          <LinkedinIcon width={17} height={17} />
          <span>{t.nav.linkedin}</span>
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
