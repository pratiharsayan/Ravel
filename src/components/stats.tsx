"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/stats";

function useCount(target: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1100;
    const startTime = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);
  return value;
}

function Stat({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCount(value, start);
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-white md:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label="Institute statistics" className="bg-navy">
      <div ref={ref} className="container-xig grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:py-12">
        {stats.map((item) => (
          <Stat key={item.label} {...item} start={start} />
        ))}
      </div>
    </section>
  );
}
