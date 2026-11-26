import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AppProviders } from "@/app/providers";
import { AppRouter } from "@/app/router";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppProviders>
      <motion.div
        initial={false}
        animate={
          isLoading
            ? { opacity: 0, y: 18, scale: 0.99 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <AppRouter />
      </motion.div>

      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
    </AppProviders>
  );
}

export default App;
