import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import { SiteHeader } from "./SiteHeader";
import { StatusBadgeProvider } from "../../contexts/StatusBadgeProvider";
import { LanguageProvider } from "../../contexts/LanguageContext";

function AppLayoutContent() {
  return (
    <StatusBadgeProvider>
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full overflow-x-clip min-h-screen"
      >
        <SiteHeader />
        <Outlet />
      </motion.div>
    </StatusBadgeProvider>
  );
}

export function AppLayout() {
  return (
    <LanguageProvider>
      <AppLayoutContent />
    </LanguageProvider>
  );
}
