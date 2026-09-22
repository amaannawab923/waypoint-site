"use client";

import { useEffect, useRef } from "react";
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap";
import { EASE_ENTER, DUR_ENTER, STAGGER_ITEMS } from "@/lib/motion";

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
 *
 * ScrollTrigger creation is deferred one frame so it never competes with
 * the very first paint for main-thread time (see Hero for why this
 * matters on slower mobile CPUs).
 */
export function Reveal({
  children,
  className,
  stagger = STAGGER_ITEMS,
  y = 16,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;

    let ctx: { revert: () => void } | undefined;
    const raf = requestAnimationFrame(() => {
      const { gsap } = ensureGsap();
      const targets = el.children.length ? Array.from(el.children) : [el];

      ctx = gsap.context(() => {
        gsap.from(targets, {
          opacity: 0,
          y,
          duration: DUR_ENTER,
          ease: EASE_ENTER,
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        });
      }, el);
    });

    return () => {
      cancelAnimationFrame(raf);
      ctx?.revert();
      const { ScrollTrigger } = ensureGsap();
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
