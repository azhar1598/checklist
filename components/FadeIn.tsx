"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
};

export function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const delayClass =
    delay === 1
      ? "fade-in-delay-1"
      : delay === 2
        ? "fade-in-delay-2"
        : delay === 3
          ? "fade-in-delay-3"
          : "";

  return (
    <div
      ref={ref}
      className={`fade-in ${delayClass} ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
