import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);

      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    return undefined;
  }, [location.pathname, location.hash]);

  return null;
}
