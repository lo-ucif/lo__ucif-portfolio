import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useLanguage } from "@/store/LanguageContext";

type StatusBadge = {
  text: string;
  dotColor: string;
};

const defaultStatusBadgeData: StatusBadge = {
  text: "Open to Freelance Projects",
  dotColor: "#22C55E",
};

const StatusBadgeContext = createContext<StatusBadge>(defaultStatusBadgeData);

export function StatusBadgeProvider({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const value: StatusBadge = {
    text: t.hero.statusAvailable,
    dotColor: defaultStatusBadgeData.dotColor,
  };

  return (
    <StatusBadgeContext.Provider value={value}>
      {children}
    </StatusBadgeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useStatusBadge(): StatusBadge {
  return useContext(StatusBadgeContext);
}
