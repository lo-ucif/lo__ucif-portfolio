import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AppProviders } from "@/app/providers";
import { AppRouter } from "@/app/router";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isReady = !isLoading;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AppProviders isReady={isReady}>
      <AppRouter />
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
    </AppProviders>
  );
}

export default App;
