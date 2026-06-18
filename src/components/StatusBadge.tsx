import { motion } from "framer-motion";
import { useStatusBadge } from "../contexts/useStatusBadge";

export function StatusBadge() {
  const { text, dotColor } = useStatusBadge();

  return (
    <div className="inline-flex items-center gap-1.5 rounded-[20px] bg-[#2e2e2e] px-2.5 py-1.5 font-['Itim'] text-[12px] text-white max-[600px]:rounded-[15px] max-[600px]:px-[7.5px] max-[600px]:py-[4.5px] max-[600px]:font-['Itim'] max-[600px]:text-[7.5px]">
      <motion.span
        whileHover={{
          scale: 1.8,
        }}
        style={
          {
            backgroundColor: dotColor,
            boxShadow: `0px 0px 5px 1px ${dotColor}`,
            "--badge-dot": dotColor,
          } as React.CSSProperties
        }
        className="h-2 w-2 rounded-full max-[600px]:h-1.5 max-[600px]:w-1.5 max-[600px]:shadow-[0px_0px_3.75px_0.75px_var(--badge-dot)]"
      />
      <span className="max-[600px]">{text}</span>
    </div>
  );
}
