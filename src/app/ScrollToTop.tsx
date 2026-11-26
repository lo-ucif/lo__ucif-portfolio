import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppReady } from "@/store/AppReadyContext";

// Strict pattern for safe HTML ID attributes to prevent DOM injection / selector injection
const SAFE_ID_PATTERN = /^[a-zA-Z0-9_-]{1,64}$/;

const ScrollToTop = () => {
  const location = useLocation();
  const isReady = useAppReady();

  useEffect(() => {
    if (!isReady) return;

    if (location.hash) {
      // Sanitize and decode URL hash, stripping leading '#' characters.
      // A malformed percent escape makes decodeURIComponent throw, so fall back
      // to the raw (still pattern-checked) value instead of crashing the tree.
      let rawId = location.hash.replace(/^#+/, "");
      try {
        rawId = decodeURIComponent(rawId);
      } catch {
        // Ignore malformed escapes; rawId stays as the un-decoded fragment.
      }

      // Only proceed if the ID conforms strictly to a safe identifier
      if (SAFE_ID_PATTERN.test(rawId)) {
        const tryScroll = () => {
          const el = document.getElementById(rawId);
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
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [isReady, location.pathname, location.search, location.hash]);

  return null;
};

export default ScrollToTop;
