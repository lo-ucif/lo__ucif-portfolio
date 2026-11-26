import type { ReactNode } from "react";
import { LanguageProvider } from "@/store/LanguageContext";
import { StatusBadgeProvider } from "@/store/StatusBadgeContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <StatusBadgeProvider>{children}</StatusBadgeProvider>
    </LanguageProvider>
  );
}
