"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-in";
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = {
    "fade-up": "animate-fade-in-up",
    "fade-left": "animate-fade-in-left",
    "fade-right": "animate-fade-in-right",
    "scale-in": "animate-scale-in",
  }[animation];

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div
      ref={sectionRef}
      className={`${className} ${
        isVisible ? `${animationClass} ${delayClass}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
