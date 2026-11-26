import { createContext, useContext } from "react";
import type { ReactNode } from "react";

const AppReadyContext = createContext<boolean>(true);

export function AppReadyProvider({
  isReady,
  children,
}: {
  isReady: boolean;
  children: ReactNode;
}) {
  return (
    <AppReadyContext.Provider value={isReady}>
      {children}
    </AppReadyContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppReady(): boolean {
  return useContext(AppReadyContext);
}
