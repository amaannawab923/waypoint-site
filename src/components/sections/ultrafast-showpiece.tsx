"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "../reveal";
import { VisualSlot } from "../visual-slot";
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap";

const dotLabels = [
  "Page loads",
  "“Ada” typed",
  "Submit pressed",
  "Confirmed from the frame",
];

export function UltrafastShowpiece() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const typedRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const section = sectionRef.current;
    const bar = barRef.current;
    const clock = clockRef.current;
    if (!section || !bar || !clock) return;
    const { gsap, ScrollTrigger } = ensureGsap();

    const ctx = gsap.context(() => {
      const counter = { v: 0 };
      const dots = dotRefs.current.filter(Boolean) as HTMLSpanElement[];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 62%",
          once: true,
        },
      });

      tl.set(dots, { backgroundColor: "var(--color-border)" });
      tl.set([typedRef.current, resultRef.current], { opacity: 0 });
      tl.set(buttonRef.current, { scale: 1 });
      tl.set(bar, { scaleX: 0 });
      tl.set(clock, { textContent: "0.0s" });

      tl.to(
        counter,
        {
          v: 13.9,
          duration: 2.8,
          ease: "power1.inOut",
          onUpdate: () => {
            clock.textContent = `${counter.v.toFixed(1)}s`;
          },
        },
        0
      ).to(
        bar,
        {
          scaleX: 1,
          duration: 2.8,
          ease: "power1.inOut",
          transformOrigin: "left center",
        },
        0
      );

      dots.forEach((dot, i) => {
        const t = i * 0.62;
        tl.to(dot, { backgroundColor: "var(--color-verify)", duration: 0.25 }, t);
      });

      tl.to(typedRef.current, { opacity: 1, duration: 0.3 }, 0.62);
      tl.to(
        buttonRef.current,
        { scale: 0.94, duration: 0.14, yoyo: true, repeat: 1 },
        1.24
      );
      tl.to(resultRef.current, { opacity: 1, duration: 0.35 }, 1.55);
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section
      id="ultrafast-qa"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-(--color-border-soft) bg-(--color-bg) py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%]"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 0%, rgba(51,224,168,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="grain -z-10" aria-hidden />

      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-(--color-verify) uppercase">
            Ultrafast browser QA
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            A session verifies its own work, in seconds.
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
            Instead of driving the page one model round trip at a time, a
            session can hand a multi-step browser walk to a fast decision
            model (TypeSafe&rsquo;s Jev, via browser-use/jev-ultrafast) in one
            call. Below is that real run&rsquo;s timing, redrawn as a panel —
            not a screenshot of it.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="mb-5 flex items-center justify-between font-mono text-xs text-(--color-fg-dim)">
            <span>browser_task</span>
            <span
              ref={clockRef}
              className="font-display text-2xl font-semibold text-(--color-verify) tabular-nums"
            >
              13.9s
            </span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-(--color-border)">
            <div
              ref={barRef}
              className="h-full w-full origin-left rounded-full bg-(--color-verify)"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
            <VisualSlot label="browser_task &middot; conceptual">
              <div className="illustration-grid absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                <div className="w-full max-w-sm overflow-hidden rounded-lg border border-(--color-border) bg-white text-neutral-900 shadow-2xl">
                  <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-neutral-50 px-3 py-2">
                    <span className="size-2 rounded-full bg-neutral-300" />
                    <span className="size-2 rounded-full bg-neutral-300" />
                    <span className="size-2 rounded-full bg-neutral-300" />
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-semibold">Greeter</p>
                    <label className="mt-3 block text-[0.7rem] text-neutral-500">
                      Your name
                    </label>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="relative flex h-8 flex-1 items-center rounded border border-neutral-300 px-2">
                        <div
                          ref={typedRef}
                          className="flex items-center gap-0.5 text-sm"
                        >
                          Ada
                          <span className="ml-0.5 inline-block h-3.5 w-px bg-neutral-400 animate-blink" />
                        </div>
                      </div>
                      <div
                        ref={buttonRef}
                        className="rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-[0.7rem] font-medium"
                      >
                        Submit
                      </div>
                    </div>
                    <div
                      ref={resultRef}
                      className="mt-3 text-sm font-medium text-emerald-700"
                    >
                      Hello, Ada!
                    </div>
                  </div>
                </div>
              </div>
            </VisualSlot>

            <div className="flex flex-col gap-3">
              {dotLabels.map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <span
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    className="size-2.5 shrink-0 rounded-full bg-(--color-border)"
                  />
                  <span className="text-sm text-(--color-fg-muted)">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-lg border border-(--color-border) bg-(--color-bg-raised) p-5 font-mono text-[0.78rem] leading-relaxed text-(--color-fg-muted) md:text-[0.82rem]">
            <span className="text-(--color-fg)">Timing: 13.9s wall</span>{" "}
            · Chromium ready 0.7s · Jev 3 decisions, 5.5s total (avg 1824ms) ·
            Claude 1 text call, 7.0s · 4 screenshots returned
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-(--color-fg-dim) italic">
            &ldquo;<code className="not-italic font-mono text-(--color-fg-muted)">done</code>{" "}
            is Jev&rsquo;s claim — check the screenshots before saying the
            behaviour matches.&rdquo; The line the tool itself prints, every time.
          </p>
        </Reveal>

        <Reveal className="mt-14 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-(--color-border-soft) pt-8 text-sm text-(--color-fg-dim)">
          <span className="font-mono text-(--color-accent)">Proof of mechanism —</span>
          <span>
            a standalone demo booked a Google Flights search in 10 steps /
            17 seconds, each Jev decision landing in 320–390ms.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
