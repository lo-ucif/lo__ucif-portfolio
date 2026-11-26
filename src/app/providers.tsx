import type { ReactNode } from "react";
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
    <AppReadyProvider isReady={isReady}>
      <LanguageProvider>
        <StatusBadgeProvider>{children}</StatusBadgeProvider>
      </LanguageProvider>
    </AppReadyProvider>
  );
}
