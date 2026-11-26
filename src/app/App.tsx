import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AppProviders } from "@/app/providers";
import { AppRouter } from "@/app/router";
import profileImg from "@/assets/profile.webp";
import logoImg from "@/assets/8.webp";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isReady = !isLoading;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    // Warm critical above-the-fold hero & header images while the intro plays
    const preloadSources = [profileImg, logoImg];
    const preloaded = preloadSources.map((src) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
      return img;
    });

    return () => {
      preloaded.length = 0;
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    } else {
      document.body.style.overflow = "";
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
