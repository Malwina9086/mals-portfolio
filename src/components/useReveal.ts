import { useEffect } from "react";

export function useReveal(selector = ".reveal", options?: IntersectionObserverInit) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1, ...options }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector, options]);
}
