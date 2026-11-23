import type { ReactNode } from "react";
import { statusBadgeData } from "../constants/data";
import { StatusBadgeContext } from "./statusBadgeContext";
import { useLanguage } from "./LanguageContext";

export function StatusBadgeProvider({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const value = {
    ...statusBadgeData,
    text: t.hero.statusAvailable,
  };

  return (
    <StatusBadgeContext.Provider value={value}>
      {children}
    </StatusBadgeContext.Provider>
  );
}
