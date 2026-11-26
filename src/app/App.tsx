import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AppProviders } from "@/app/providers";
import { AppRouter } from "@/app/router";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppProviders>
      <AppRouter />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
    </AppProviders>
  );
}

export default App;
