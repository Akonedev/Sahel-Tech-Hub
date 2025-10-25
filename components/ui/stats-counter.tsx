"use client";

import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: React.ReactNode;
}

export function StatsCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  label,
  icon,
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const increment = end / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return (
    <div
      ref={counterRef}
      className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm card-depth"
    >
      {icon && <div className="text-4xl mb-3 text-sahel-yellow">{icon}</div>}
      <div className="text-4xl font-bold gradient-text mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
}
