import type { ReactNode } from "react";
import { statusBadgeData } from "../constants/data";
import { StatusBadgeContext } from "./statusBadgeContext";

export function StatusBadgeProvider({ children }: { children: ReactNode }) {
  return (
    <StatusBadgeContext.Provider value={statusBadgeData}>
      {children}
    </StatusBadgeContext.Provider>
  );
}
