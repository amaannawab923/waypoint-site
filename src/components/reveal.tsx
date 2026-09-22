"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";
import { STAGGER_ITEMS } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds between each direct child's entrance. */
  stagger?: number;
  y?: number;
  /** Bottom-margin fraction of the viewport an element must cross to reveal. */
  start?: number;
};

/** How long an on-screen block may wait on the observer before it is
 *  revealed outright. Never applies to blocks still below the fold. */
const FAILSAFE_MS = 900;

/**
 * Scroll-triggered fade/rise-in, built on IntersectionObserver + a CSS
 * keyframe — deliberately NOT on GSAP/rAF, for the same reason the hero
 * isn't (see globals.css): a rAF-ticked tween can leave its "from" state
 * stranded for seconds in a backgrounded or not-yet-interacted-with tab,
 * and every section on this site puts its real content behind one of
 * these. IntersectionObserver callbacks and CSS animations are both
 * scheduled by the browser independently of rAF, so they always resolve.
 *
 * Three layers keep content from ever being stuck invisible:
 *   1. No JS at all -> children render in normal, fully visible flow.
 *      The hidden state is only ever applied from inside this effect.
 *   2. Reduced motion -> the effect returns before hiding anything.
 *   3. A FAILSAFE_MS timer reveals everything regardless of the observer.
 */
export function Reveal({
  children,
  className,
  stagger = STAGGER_ITEMS,
  y = 16,
  start = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;

    const targets = (
      el.children.length ? Array.from(el.children) : [el]
    ) as HTMLElement[];

    for (const [i, t] of targets.entries()) {
      t.style.setProperty("--reveal-y", `${y}px`);
      t.style.setProperty("--reveal-delay", `${i * stagger}s`);
      t.dataset.reveal = "out";
    }

    const show = () => {
      for (const t of targets) t.dataset.reveal = "in";
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show();
          io.disconnect();
        }
      },
      { rootMargin: `0px 0px -${Math.round(start * 100)}% 0px` }
    );
    io.observe(el);

    // Only a covering failsafe, not a second trigger: if the block is on
    // screen and the observer still hasn't fired, show it. A block below
    // the fold is left alone and waits for the scroll, as intended.
    const failsafe = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        show();
        io.disconnect();
      }
    }, FAILSAFE_MS);

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
      for (const t of targets) delete t.dataset.reveal;
    };
  }, [stagger, y, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
