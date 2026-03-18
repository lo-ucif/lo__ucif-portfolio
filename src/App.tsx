import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => setIsHiding(true), 4500);
    const removeTimer = window.setTimeout(() => setIsLoading(false), 5000);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen isHiding={isHiding} />}
      <Home />
    </>
  );
}

export default App;
