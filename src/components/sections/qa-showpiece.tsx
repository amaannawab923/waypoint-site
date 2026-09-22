"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "../reveal";
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap";
import { EASE_FLOW } from "@/lib/motion";
import { CYCLE_BREAKDOWN } from "@/lib/content/metrics";

const steps = [
  { label: "Page loads", detail: "Empty field, Chromium already warm." },
  { label: "Text entered", detail: "One Jev decision per field." },
  { label: "Submit pressed", detail: "One more decision, one click." },
  { label: "Confirmed from the frame", detail: "Not from the tool's own “done” claim." },
];

/**
 * The site's one showpiece animation: a counted-up clock synced to a
 * progress bar and four step reveals, gated behind ScrollTrigger `once`.
 * Everything here is the real, measured 13.9s run — nothing is invented.
 */
export function QaShowpiece() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const section = sectionRef.current;
    const bar = barRef.current;
    const clock = clockRef.current;
    if (!section || !bar || !clock) return;

    let ctx: { revert: () => void } | undefined;
    const raf = requestAnimationFrame(() => {
      const { gsap, ScrollTrigger } = ensureGsap();
      ctx = gsap.context(() => {
        const counter = { v: 0 };
        const items = stepRefs.current.filter(Boolean) as HTMLLIElement[];

        const tl = gsap.timeline({
          scrollTrigger: { trigger: section, start: "top 62%", once: true },
        });

        tl.set(items, { opacity: 0.35 });
        tl.set(bar, { scaleX: 0 });
        tl.set(clock, { textContent: "0.0s" });

        tl.to(
          counter,
          {
            v: 13.9,
            duration: 2.6,
            ease: EASE_FLOW,
            onUpdate: () => {
              clock.textContent = `${counter.v.toFixed(1)}s`;
            },
          },
          0
        ).to(
          bar,
          { scaleX: 1, duration: 2.6, ease: EASE_FLOW, transformOrigin: "left center" },
          0
        );

        items.forEach((el, i) => {
          tl.to(el, { opacity: 1, duration: 0.3 }, i * 0.58);
        });
      }, section);
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
      ctx?.revert();
    };
  }, []);

  return (
    <section
      id="the-run"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-(--color-border) bg-(--color-bg) py-20 md:py-28"
    >
      <div className="dot-grid" aria-hidden />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">The real run</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-(--color-fg) md:text-4xl">
            This is Waypoint&rsquo;s own transcript, timed.
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-3xl border border-(--color-border) bg-(--color-bg-raised) p-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] sm:p-10">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs text-(--color-fg-dim)">
                browser_task · full QA cycle
              </span>
              <span
                ref={clockRef}
                className="font-mono text-4xl font-semibold text-(--color-accent) tnum"
              >
                13.9s
              </span>
            </div>
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-(--color-border)">
              <div ref={barRef} className="h-full w-full origin-left rounded-full bg-(--color-accent)" />
            </div>

            <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {steps.map((step, i) => (
                <li
                  key={step.label}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="rounded-xl bg-(--color-bg) p-4"
                >
                  <span className="font-mono text-xs text-(--color-fg-dim)">
                    0{i + 1}
                  </span>
                  <p className="mt-1 text-sm font-medium text-(--color-fg)">{step.label}</p>
                  <p className="mt-0.5 text-xs text-(--color-fg-muted)">{step.detail}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-(--color-border) pt-6 sm:grid-cols-3">
              {CYCLE_BREAKDOWN.map((row) => (
                <div key={row.label}>
                  <p className="text-[0.7rem] text-(--color-fg-dim)">{row.label}</p>
                  <p className="mt-1 font-mono text-sm font-semibold text-(--color-fg) tnum">
                    {row.value}
                  </p>
                  {"detail" in row && row.detail ? (
                    <p className="font-mono text-[0.65rem] text-(--color-fg-dim)">{row.detail}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
