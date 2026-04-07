import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

import { LoadingScreen } from "./components/LoadingScreen";
import { AppLayout } from "./components/layout/AppLayout";

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

  if (isLoading) {
    return <LoadingScreen isHiding={isHiding} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
