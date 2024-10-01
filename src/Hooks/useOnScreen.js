import { useEffect, useState } from "react";

export const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIntersecting(true);
        setHasAnimated(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, hasAnimated]);

  return isIntersecting;
};
