import { useEffect, useRef } from "react";

function useScrollReveal(options = {}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const rootElement = rootRef.current;

    if (!rootElement) {
      return undefined;
    }

    const revealNodes = Array.from(rootElement.querySelectorAll("[data-reveal]"));

    if (!revealNodes.length) {
      return undefined;
    }

    revealNodes.forEach((node, index) => {
      node.classList.add("reveal-init");
      node.style.animationDelay = `${index * 100}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("reveal-init");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.18,
        rootMargin: options.rootMargin ?? "0px 0px -60px 0px",
      },
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [options.rootMargin, options.threshold]);

  return rootRef;
}

export default useScrollReveal;
