"use client";

import { useEffect, useRef } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export default function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${className}`.trim()}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
