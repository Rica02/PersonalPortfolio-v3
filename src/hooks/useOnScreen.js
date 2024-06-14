import { useEffect, useState } from "react";

// Checks if section ID given is the one in view
export const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsOnScreen(entry.isIntersecting);
    },
    { threshold: 0.7 } // Set value if section is in 70% of screen
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  });

  return isOnScreen;
};
