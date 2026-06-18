import { createContext } from "react";
import { statusBadgeData } from "../constants/data";

export type StatusBadge = {
  text: string;
  dotColor: string;
};

export const StatusBadgeContext = createContext<StatusBadge>(statusBadgeData);
