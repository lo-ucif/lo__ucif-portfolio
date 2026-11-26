import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AppProviders } from "@/app/providers";
import { AppRouter } from "@/app/router";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => setIsHiding(true), 4500);
    const removeTimer = window.setTimeout(() => setIsLoading(false), 3000);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen isHiding={isHiding} />;
  }

  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}

export default App;
