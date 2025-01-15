import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Scroll to top when clicking the Home link
    const handleHomeClick = (event) => {
      if (event.target.getAttribute("href") === "/") {
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener("click", handleHomeClick);

    return () => {
      document.removeEventListener("click", handleHomeClick);
    };
  }, []);

  return null;
};

export default ScrollToTop;
