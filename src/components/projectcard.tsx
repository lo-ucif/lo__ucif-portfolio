import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { Github2Icon, LinkIcon, FigmaIcon } from "../constants/Icon";
type TechItem = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
export type project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: TechItem[];
  liveDemo: string;
  github: string;
  figma: string;
};

export default function Projectcard({
  id,
  title,
  description,
  image,
  tech,
  liveDemo,
  github,
  figma,
}: project) {
  const easeOut = [0.22, 1, 0.36, 1] as const;
  return (
    <div>
      <motion.div
        className="flex flex-col bg-[#1F1F1F] rounded-2xl overflow-hidden max-w-80 w-full h-full gap-3"
        key={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.08 }}
      >
        <div className="relative overflow-hidden h-50">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 " />
        </div>
        <div className="flex flex-col items-start self-stretch justify-center gap-3 px-4 py-3">
          <h3 className="flex flex-row justify-between w-full text-xl font-semibold text-white">
            {title}
            {figma && figma !== "" && (
              <a href={figma} target="_blank" rel="noopener noreferrer">
                <FigmaIcon />
              </a>
            )}
          </h3>
          <p className="text-[#9CA3AF] text-sm  text-left">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tech.map((tech) => {
              const Icon = tech.icon;
              return (
                <span
                  key={tech.label}
                  className="flex items-center gap-1 rounded-[22px] bg-[#303030] px-2 py-1 text-white font-['Itim'] text-[16px]"
                >
                  <Icon width={14} height={14} />
                  {tech.label}
                </span>
              );
            })}
          </div>

          <div className="flex w-full gap-3">
            {liveDemo && liveDemo !== "" && (
              <a
                href={liveDemo}
                className="flex items-center justify-center flex-1 gap-2 px-4 py-1 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon width={20} height={20} />
                Live
              </a>
            )}

            {github && github !== "" && (
              <a
                href={github}
                className="flex items-center justify-center flex-1 gap-2 px-4 py-1 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github2Icon width={20} height={20} />
                Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
