import { useState, useEffect } from "react";

export const useOnScreen = (ref: any) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setState(entry.isIntersecting);
    });

    ref.current && observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);

  return isVisible;
};
