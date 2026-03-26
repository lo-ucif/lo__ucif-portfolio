import type { ReactNode } from "react";

interface BackgroundWrapperProps {
  children: ReactNode;
}

export const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, 
            rgba(58, 123, 255, 0.25) 0%, 
            rgba(100, 149, 237, 0.15) 25%, 
            rgba(123, 104, 238, 0.07) 35%, 
            transparent 50%
          )`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
