"use client";

import { useEffect, useRef } from "react";
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Animate each direct child in sequence instead of the wrapper as one block. */
  stagger?: number;
  y?: number;
  start?: string;
};

/**
 * Scroll-triggered fade/rise-in. If JavaScript never runs (or the visitor
 * prefers reduced motion), children stay in their normal, fully visible
 * flow — the opacity-0 starting state is only ever applied by GSAP itself,
 * inside this effect, never via CSS classes on the elements.
 */
export function Reveal({
  children,
  className,
  stagger = 0.08,
  y = 28,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const { gsap, ScrollTrigger } = ensureGsap();
    const targets = el.children.length ? Array.from(el.children) : [el];

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.9,
        ease: "expo.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [stagger, y, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
