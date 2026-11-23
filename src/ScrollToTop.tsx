import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };

      if (!tryScroll()) {
        const timers = [60, 150, 300, 600].map((delay) =>
          setTimeout(() => {
            tryScroll();
          }, delay)
        );
        return () => timers.forEach(clearTimeout);
      }
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default ScrollToTop;
