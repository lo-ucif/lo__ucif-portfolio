import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { AppReadyProvider } from "@/store/AppReadyContext";
import { LanguageProvider } from "@/store/LanguageContext";
import { StatusBadgeProvider } from "@/store/StatusBadgeContext";

export function AppProviders({
  isReady,
  children,
}: {
  isReady: boolean;
  children: ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <AppReadyProvider isReady={isReady}>
        <LanguageProvider>
          <StatusBadgeProvider>{children}</StatusBadgeProvider>
        </LanguageProvider>
      </AppReadyProvider>
    </MotionConfig>
  );
}
