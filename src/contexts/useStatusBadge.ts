import { useContext } from "react";
import {
  StatusBadgeContext,
  type StatusBadge,
} from "./statusBadgeContext";

export function useStatusBadge(): StatusBadge {
  return useContext(StatusBadgeContext);
}
